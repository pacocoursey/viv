# Key

Key (previously Viv) is a cross-platform keyboard mapper.

## Installation

Want to try it out? Run the following from the command line.

```
$ git clone https://github.com/pacocoursey/key.git
$ cd Key
$ yarn install
$ yarn start
```

Keep in mind this project is still under development.

![Key Screenshot](art/example.png)

## Usage

Key parses text files that contain keybinds and actions. You can drag and drop files onto Key to open them and parse the keybinds within. You can either use the play/pause button or the default toggle key `\` to start and stop the current script.

### Formatting

Each line of a Key script should contain either a keybind:action pair or a comment. Keybinds and actions should be seperated by a space and comments should begin with `#`.

### Actions

Key currently supports four actions:
- click
- rightclick
- move x y
- toggle

### Keybinds

Key supports all of the cross-platform supported keys listed here: https://robotjs.io/docs/syntax#keys

### Example

```
# this is a comment

1 rightclick
2 move 0 40
3 click

# specify a custom toggle key

` toggle

```
