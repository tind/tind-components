# TIND Components Library

Based on:

[React](https://reactjs.org/)
[TypeScript](https://www.typescriptlang.org/)
[PrimeReact](https://www.primefaces.org/primereact)
[PrimeIcons](https://www.primefaces.org/diamond/icons.xhtml)
[Storybook](https://storybook.js.org/)

## Development

To start the project locally, close the repository and run the following:

```sh
npm install
npm run storybook
```

## Deployment

CI/CD pipeline will automatically trigger a build & deploy jobs on every push or merge to `master` branch. 

Deployed storybook will be available on https://storybook.tind.io

## Publishing

To publish the library on NPM, make sure you're part of the 
[tindtechnologies](https://www.npmjs.com/org/tindtechnologies) organisation
and run the following command:

```sh
npm run :publish
```

## Structure

The project is split into 2 distinct sections:

- components library
- storybook app

### Components library

Used as an entrypoint for all future TIND 2 components. Based on React and PrimeReact and hosted on npm registry.

### Storybook app

Designed for development and testing of the components library, this app helps with local development and iterative design of components.