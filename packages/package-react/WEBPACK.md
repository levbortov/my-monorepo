# 📘 React-проект с нуля на Webpack, Babel, TypeScript, React Router и деплоем на GitHub Pages

> Мини-шпаргалка о том, как собрать современное React-приложение вручную без CRA и Vite.

---

## 📁 Структура проекта

```
my-app/
├── public/
│   ├── index.html
│   └── 404.html          ← для GitHub Pages SPA
├── src/
│   ├── index.tsx
│   ├── App.tsx
│   └── pages/
│       ├── Home.tsx
│       └── About.tsx
├── dist/                 ← продакшн-сборка
├── package.json
├── tsconfig.json
├── webpack.config.js
├── .babelrc
└── README.md
```

---

## 🚀 Что мы установили

### React + Router

```bash
npm install react react-dom react-router-dom
```

### Для сборки (dev-зависимости)

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install --save-dev style-loader css-loader
npm install --save-dev mini-css-extract-plugin css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin
npm install --save-dev html-webpack-plugin
```

### TypeScript

```bash
npm install --save-dev typescript ts-loader
npm install --save-dev @types/react @types/react-dom @types/react-router-dom
```

### Для деплоя на GitHub Pages

```bash
npm install --save-dev gh-pages
```

---

## ⚙️ Конфиги

### `.babelrc`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "lib": ["DOM", "ESNext"],
    "jsx": "react-jsx",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

### `webpack.config.js` (ключевые части)

```js
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.[contenthash].js',
  clean: true
},
resolve: {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
},
module: {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: 'ts-loader',
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
  ],
},
plugins: [
  new HtmlWebpackPlugin({ template: './public/index.html' }),
  new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  new CleanWebpackPlugin()
],
optimization: {
  minimize: true,
  minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
},
mode: 'production',
```

---

## 🔃 Сценарии в `package.json`

```json
"scripts": {
  "start": "webpack serve --open --mode development",
  "build": "webpack --mode production",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 🌐 Поля в `package.json`, специфичные для проекта

### `"homepage"`

```json
"homepage": "https://<ваш-логин>.github.io/<имя-репозитория>"
```

> Указывает `gh-pages`, куда деплоить и нужен для генерации правильных ссылок.

---

## 🧠 Что делает `gh-pages`

* Запускает `npm run build`
* Берёт содержимое папки `dist`
* Заливает её в ветку `gh-pages`
* GitHub Pages раздаёт это как статический сайт

---

## 📄 `public/404.html` — нужен для маршрутизации (SPA)

```html
<script>
  location.replace('/');
</script>
```

> Имитирует `history fallback` — важный хак для `react-router-dom` на GitHub Pages.

---

## 🧪 Проверка деплоя

```bash
npm run deploy
```

Через минуту приложение будет доступно по адресу из `"homepage"`.

---

## ✅ Что реализовано

| Компонент          | Статус                    |
| ------------------ | ------------------------- |
| React              | ✅                         |
| JSX через Babel    | ✅                         |
| React Router       | ✅                         |
| TypeScript         | ✅                         |
| CSS-модули         | ✅                         |
| Продакшн-сборка    | ✅ (с минификацией и hash) |
| Деплой на GH Pages | ✅                         |
