# Figmagic Example

This repository is a demo of [Figmagic](https://github.com/mikaelvesavuori/figmagic). In this project you're going to see how a project running Webpack, React and Styled Components might use tokens. There are pre-compiled tokens available under `/tokens`.

Note that this demo is not meant to fully style and do all of the things in the Figma document. I wanted to straddle a middle-of-the-road solution where I did the least work possible to get it working with React and style only a few of the most obvious and helpful elements, like setting disabled state on the button and checkbox.

The Figmagic template design system is available at [https://www.figma.com/community/file/821094451476848226](https://www.figma.com/community/file/821094451476848226). That's the file providing the tokens seen here.

## Installation

- Run `yarn` or `npm install` inside of the repository to install all dependencies
- Start the project by running `yarn start` or `npm start`
- To sync graphics, run `yarn figmagic:graphics` or `npm run figmagic:graphics`
- To sync elements, run `yarn figmagic:elements` or `npm run figmagic:elements`
- To sync all of it, run `yarn figmagic:sync` or `npm run figmagic:sync`
- Start Storybook with `yarn storybook` or `npm run storybook`

## Using Figmagic for your own files

- You will need to have a Figma file set up correctly (see above demo file)
- You will also need to have a Figma API key
- Set your URL and token in a file called `.env` in the root of your project (such as in this one, if you want to get started right away)
- Clone [Figmagic](https://github.com/mikaelvesavuori/figmagic), install it with `yarn setup` or `npm setup`
- Run the command `figmagic` in your project directory
- To run local Figmagic with arguments, it could be done like `npm run figmagic -- --debug -f em` to set debug mode and grabbing fonts in `em` units

Read more on the [Figma developer site](https://www.figma.com/developers/docs) if you need any further information.

## How much work was after after doing a clean pull from the Figmagic demo template?

Only changes in example from a vanilla pull from Figma document:

- Remove texts from H1-H6 + Paragraph + Microcopy + Select
- Close input elements (Slider, Input, Checkbox)
- Write a component (DemoForm) that composes the individual elements as per the component in the template
- Add padding to Form element (spacing small)
- Add className=”Normal” to Button so it picks the Normal style
- Add props and event handling for demo form functionality
- Add disabled styling to Checkbox and Button
