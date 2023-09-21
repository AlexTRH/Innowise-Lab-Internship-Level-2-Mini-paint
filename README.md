<h1>Mini-paint</h1>

## Task

<a href="https://drive.google.com/file/d/19cb4whI_HUVPzuaPyaj5r6hGotIVnhho/view">Watch task</a>

## Demo

<a href="https://risui-blet.netlify.app//">Mini-paint</a>

## How to run the app

**Install**

```sh
npm install
```

**Usage**

```sh
npm dev
```

**Build**

```sh
npm build
```

## Application stack

- React
- redux
- typescript
- Firebase
- react-router-dom
- react-dotenv
- react-hook-form
- react-spinners-kit
- sweetalert2
- mui/material
- mui/icons-material
- styled-components
- yup
- dayjs
- Prettier
- ESLint
- husky
- Vite

### Folder structure

```
├── husky
│   ├── _
│   └── pre-commit
├── node_modules
├───public
└───src
│    ├───api
     ├───assets
│    ├───components
│    │   ├───containers
│    │   │   ├───Canvas
│    │   │   ├───Gallery
│    │   │   |   └───PaintingContainer
│    │   │   ├───Header
│    │   │   ├───SignIn
│    │   │   ├───SignUp
│    │   │   └───ToolBar
│    │   └───views
│    │   │   ├───Loader
│    │   │   └───Toasts
│    ├───constants
│    ├───hooks
│    ├───pages
│    │   ├───GalleryPage
│    │   ├───PaintPage
│    │   ├───SignInPage
│    │   └───SignUpPage
│    ├───routes
│    ├───store
│    │   └───slice
│    ├───types
│    └───utils
├── .env
├── .eslintrc
├── .gitignore
├── .prettierrc
├── vite.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── tsconfig.node.json
```
