# Nuxt3 app

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Download and install nodejs v20+ from [here](https://nodejs.org/en).

Make sure to install the dependencies:

```bash
# npm
npx install -g npm
#yarn
npx yarn
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
npx yarn dev --open
```

## Production

Build the application for production:

```bash
# yarn
npx yarn build
# run
node .\.output\server\index.mjs
```

Locally preview production build:

```bash
# yarn
npx yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
