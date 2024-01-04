This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 참고 사이트

```
https://styled-components.com/docs/basics#getting-started
```

## Project Create Settings

```
1. npx create-next-app@latest {project_name}
2. ESLint : Yes
3. Tailwind CSS : No
4. `src/` directory : Yes
5. App Router : No
6. import alias : No
```

## Code Convention Settings In VSCode (Visual Studio Code)

1. create `.vscode` folder
2. create `settings.json` file and input code

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

3. install Prettier and ESLint Library

```bash
// prettier
npm i -D prettier

# OR

yarn add -D prettier

// ESLint
npm i -D eslint eslint-config-prettier eslint-plugin-prettier

# OR

yarn add -D eslint eslint-config-prettier eslint-plugin-prettier

// Typescript ESLint
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

# OR

yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

4. create `.prettierrc` file in root directory

```
{
  "printWidth": 120,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "tabWidth": 2,
  "bracketSpacing": true,
  "endOfLine": "auto",
  "useTabs": false,
  "arrowParens": "avoid"
}
```

5. edit `.eslintrc.json` file

```
// .eslintrc.json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "env": {
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "next/core-web-vitals"
  ],
  "rules": {
    // 'React' must be in scope when using JSX 에러 해결 (Next.js)
	"react/react-in-jsx-scope": "off",
    // ts파일에서 tsx구문 허용 (Next.js)
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }]
  }
}
```

## Version

```
nodejs - v20
nextjs - v5
react - v18
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
