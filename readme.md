# Figmagic Example

This repository is a demo of [Figmagic](https://github.com/mikaelvesavuori/figmagic). In this project you're going to see how a project running Webpack, React and Styled Components might use tokens. There are pre-compiled tokens available under `/tokens`.

The example design token setup is available at [https://www.figma.com/file/UkrKTnjjKB0lJKYAifn9YWXU/Figmagic---Design-Token-Example-v1.0](https://www.figma.com/file/UkrKTnjjKB0lJKYAifn9YWXU/Figmagic---Design-Token-Example-v1.0). That's the file providing the tokens seen here.

## Installation

- Run `yarn` or `npm install` inside of the repository to install all dependencies
- Start the project by running `yarn start` or `npm start`

## Using Figmagic for your own files

- You will need to have a Figma file set up correctly (see above demo file)
- You will also need to have a Figma API key
- Set your URL and token in a file called `.env` in the root of your project (such as in this one, if you want to get started right away)
- Clone [Figmagic](https://github.com/mikaelvesavuori/figmagic), install it with `yarn setup` or `npm setup`
- Run the command `figmagic` in your project directory
- To run local Figmagic with arguments, it could be done like `npm run figmagic -- --debug -f em` to set debug mode and grabbing fonts in `em` units

Read more on the [Figma developer site](https://www.figma.com/developers/docs) if you need any further information.
