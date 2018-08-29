# Viv

## Installation

Want to try it out? Run the following from the command line.

```
$ git clone https://github.com/pacocoursey/viv.git
$ cd viv
$ npm install
$ npm start
```

Keep in mind this project is still under development.

![viv Screenshot](https://pacocoursey.github.io/img/viv.png?raw=true)

## Usage

Viv parses text files that contain keybinds and actions. You can drag and drop files onto viv to open them and parse the keybinds within. You can either use the play/pause button or the default toggle key `\` to start and stop the current script.

### Formatting

Each line of a viv script should contain either a keybind:action pair or a comment. Keybinds and actions should be seperated by a space and comments should begin with `#`.

### Actions

Viv currently supports four actions:
* click
* rightclick
* move x y
* toggle

### Keybinds

Viv supports all of the cross-platform supported keys listed here: https://robotjs.io/docs/syntax#keys

### Example

```
# this is a comment

1 rightclick
2 move 0 40
3 click

# specify a custom toggle key

` toggle

```
