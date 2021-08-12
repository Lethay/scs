# Simultaneous Combat System

![Version](https://img.shields.io/github/v/tag/arcanistzed/scs?label=Version&style=flat-square&color=2577a1) ![Latest Release Download Count](https://img.shields.io/github/downloads/arcanistzed/scs/latest/module.zip?label=Downloads&style=flat-square&color=9b43a8) ![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Farcanistzed%2Fscs%2Fmain%2Fmodule.json&label=Foundry%20Core%20Compatible%20Version&query=$.compatibleCoreVersion&style=flat-square&color=ff6400)

An implementation of the Simultaneous Combat System for Foundry VTT. See the original [Reddit post](https://redd.it/nlyif8)

The DM can control the current phase and round with easy-to-use controls floating in the bottom corner:

![scs](https://user-images.githubusercontent.com/82790112/123032659-4e875c80-d3b4-11eb-853e-1609a45cda56.gif)
![gradient](https://user-images.githubusercontent.com/82790112/123046244-ddeb3a80-d3c9-11eb-98db-da2f4a6abd68.gif)

On the player's side:

![scs-player](https://user-images.githubusercontent.com/82790112/123030629-15012200-d3b1-11eb-8e4e-d058e1eb8800.png)

## Usage

Please follow the built-in tutorial (built with IntoJS), for instructions. You can always relaunch the tutorial from within the settings. If you have any questions, feel free to contact me.

## Installation

In the setup screen, use the URL `https://github.com/arcanistzed/scs/releases/latest/download/module.json` to install the module.

## API

SCS has a small API with a few methods that can be called by others. They are accessible under the global variable `scs`.

### `hideTracker()`

This will elegantly hide the default combat tracker from the sidebar.

### `startTutorial()`

This will show the IntroJS tutorial tour once.

### `stopTutorial()`

This will stop the tour from showing everytime the page is loaded unless the user re-enabled the tutorial from within the module settings.

## License

This package is under an [MIT license](LICENSE)

## Bugs

You can submit bugs via [Github Issues](https://github.com/arcanistzed/scs/issues/new/choose) or on [my Discord server](https://discord.gg/AAkZWWqVav).

Known Issues:

- With Canvas off, the app doesn't remember it's pinned location
- No CSS for IntroJS [IMPORTANT]

## Localization

Please note that the `Phases` must be short enough to fit their boxes, so you shouldn't put anything over approximately eight characters.

## Contact me

Come hang out on [my Discord server](https://discord.gg/AAkZWWqVav) or [click here to send me an email](mailto:arcanistzed@gmail.com?subject=SCS%20module%20for%20Foundry%20VTT).
