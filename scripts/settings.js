// Import application
import scsApp from './app.js';
import api from './api.js';

/**
 * Manages color generation button in module settings menu
 */
class GenerateColors extends FormApplication {
    constructor(...args) {
        super(...args);
        (async () => {
            // Unset colors if GM
            if (game.user.isGM) {
                await game.settings.set(scsApp.ID, "colors", []);
                location.reload();
            };
        })();
    };
};

/**
 * Register all settings for SCS
 */
export default function registerSettings() {
    game.settings.register(scsApp.ID, "position", {
        scope: "client",
        config: false,
        type: Object,
        default: { top: 446, left: 15 },
    });

    game.settings.register(scsApp.ID, "pinned", {
        scope: "client",
        config: false,
        type: Boolean,
        default: true,
    });

    game.settings.register(scsApp.ID, "currentPhase", {
        scope: "world",
        config: false,
        type: Number,
        default: 1,
        onChange: currentPhase => {
            if (!game.user.isGM) Hooks.call("scsPhaseChanged", currentPhase);
        },
    });

    game.settings.register(scsApp.ID, "currentCycle", {
        scope: "world",
        config: false,
        type: Number,
        default: 1,
    });

    game.settings.register(scsApp.ID, "hideNoCombat", {
        name: game.i18n.localize("scs.settings.hideNoCombat.Name"),
        hint: game.i18n.localize("scs.settings.hideNoCombat.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        onChange: () => api.changeVisibility(!!game.combat),
    });

    game.settings.register(scsApp.ID, "hideTracker", {
        name: game.i18n.localize("scs.settings.hideTracker.Name"),
        hint: game.i18n.localize("scs.settings.hideTracker.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
        onChange: val => api.defaultTracker(val),
    });

    game.settings.register(scsApp.ID, "hudDisplay", {
        name: game.i18n.localize("scs.settings.hudDisplay.Name"),
        hint: game.i18n.localize("scs.settings.hudDisplay.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });

    game.settings.register(scsApp.ID, "trackerDisplay", {
        name: game.i18n.localize("scs.settings.trackerDisplay.Name"),
        hint: game.i18n.localize("scs.settings.trackerDisplay.Hint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
    });

    game.settings.register(scsApp.ID, "limitCycles", {
        name: game.i18n.localize("scs.settings.limitCycles.Name"),
        hint: game.i18n.localize("scs.settings.limitCycles.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });

    game.settings.register(scsApp.ID, "maxCycle", {
        name: game.i18n.localize("scs.settings.maxCycle.Name"),
        hint: game.i18n.localize("scs.settings.maxCycle.Hint"),
        scope: "world",
        config: true,
        type: Number,
        default: 3,
    });

    game.settings.register(scsApp.ID, "limitPhases", {
        name: game.i18n.localize("scs.settings.limitPhases.Name"),
        hint: game.i18n.localize("scs.settings.limitPhases.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
    });

    game.settings.register(scsApp.ID, "actionLocking", {
        name: game.i18n.localize("scs.settings.actionLocking.Name"),
        hint: game.i18n.localize("scs.settings.actionLocking.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });

    game.settings.register(scsApp.ID, "alternateActive", {
        name: game.i18n.localize("scs.settings.alternateActive.Name"),
        hint: game.i18n.localize("scs.settings.alternateActive.Hint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    });

    game.settings.register(scsApp.ID, "startupTutorial", {
        name: game.i18n.localize("scs.settings.startupTutorial.Name"),
        hint: game.i18n.localize("scs.settings.startupTutorial.Hint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
        onChange: () => { if (!document.getElementById("scsTutorialAgain")) new scsApp().render(true); } // Re-render the app
    });

    game.settings.register(scsApp.ID, "colors", {
        scope: "world",
        config: false,
        type: Object,
    });

    game.settings.registerMenu(scsApp.ID, "generateColors", {
        name: game.i18n.localize("scs.settings.generateColors.Name"),
        label: game.i18n.localize("scs.settings.generateColors.Label"),
        hint: game.i18n.localize("scs.settings.generateColors.Hint"),
        icon: "fas fa-rainbow",
        type: GenerateColors,
        restricted: true,
    });

    game.settings.register(scsApp.ID, "names", {
        name: game.i18n.localize("scs.settings.phaseNames.Name"),
        hint: game.i18n.localize("scs.settings.phaseNames.Hint"),
        scope: "world",
        config: true,
        type: String,
        default: (() => [
            game.i18n.localize("scs.settings.phaseNames.defaults.move"),
            game.i18n.localize("scs.settings.phaseNames.defaults.attacks"),
            game.i18n.localize("scs.settings.phaseNames.defaults.magic")
        ].join(", "))(),
        onChange: async () => {
            // Reset the current phase and the colors
            scsApp.currentPhase = 1;
            scsApp.phases.colors = [];

            // Save the changes to storage if GM
            if (game.user.isGM) {
                // Reset the current phase and the colors
                game.settings.set(scsApp.ID, "currentPhase", 1);
                game.settings.set(scsApp.ID, "colors", []);
            };

            // Reload the page
            location.reload();
        },
    });
};