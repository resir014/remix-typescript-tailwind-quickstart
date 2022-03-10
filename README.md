# remix-typescript-tailwind-quickstart

> Get started on Remix with TypeScript and Tailwind CSS in seconds.

This is an example setup of [Remix](https://remix.run/) building on top of the official TypeScript template and the [Remix example for Twind](https://github.com/tw-in-js/example-remix). It adds the following:

- Styling with [Tailwind CSS](https://tailwindcss.com/) and [twind](https://github.com/tw-in-js/twind)
- Basic ESLint and Prettier setup
- CSS linting with [Stylelint](https://stylelint.io/)
- ESLint and TypeScript typechecking as part of `validate` script (ready to plug into any CI)

## Important Links

- [15m Quickstart Blog Tutorial](https://remix.run/tutorials/blog)
- [Deep Dive Jokes App Tutorial](https://remix.run/tutorials/jokes)
- [Remix Docs](https://remix.run/docs)
- [twind Docs](https://twind.dev/)

---

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
