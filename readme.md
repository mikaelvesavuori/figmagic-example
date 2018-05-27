# Figmagic Example

This repository is a demo of [Figmagic](https://github.com/mikaelvesavuori/figmagic).

An example setup is available at [https://www.figma.com/file/KLLDK9CBSg7eAayiTY3kVqC8/Figmagic-Design-System-Example](https://www.figma.com/file/KLLDK9CBSg7eAayiTY3kVqC8/Figmagic-Design-System-Example).

## Installation

* Run `yarn` or `npm install` inside of the repository to install all dependencies
* You will need to have a Figma file setup correctly to test this
* You will also need to have a Figma API key

Read more on the [Figma developer site](https://www.figma.com/developers/docs) if you need any further information.

## Key/token locations

You need to update the following places with your Figma URL and API token.

1.  `package.json`: In the scripts block you will need to change the blanks to your actual file and token
2.  `node_modules/figmagic/bin/meta/keys.mjs`: In the options object you will also need to change to your actual values
