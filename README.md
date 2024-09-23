# TypeScript 

![download](https://github.com/user-attachments/assets/5021dfc9-61b6-4e26-8ec1-de2e944c2347)

## Resources
### Read or watch:

- [TypeScript in 5 minutes](https://intranet.hbtn.io/rltoken/JBobnOShA2LO-xxTJAyKtw)
- [TypeScript documentation](https://intranet.hbtn.io/rltoken/Gd_21GPLzafP2XUy11Zinw)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- Basic types in Typescript
- Interfaces, Classes, and functions
- How to work with the DOM and Typescript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with Typescript
 ## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with `jest` (version 24.9.* )
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `ts` extension when possible
- The Typescript compiler should not show any warning or error when compiling your code
## Configuration Files
Please use these files for the following tasks

### `package.json`
```bash
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
```

### `.eslintrc.js`

```bash
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
```

### `tsconfig.json`

```bash
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

### `webpack.config.js`

```bash
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

# Tasks: 

| Task Number | Task Name                                | Short Description                                                                                                                     | File Name                                                                 |
|-------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 0           | Creating an interface for a student      | Create a `Student` interface and display a table using Vanilla JS                                                                      | task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js |
| 1           | Let's build a Teacher interface          | Create a `Teacher` interface with various properties, including dynamic attributes                                                     | task_1/js/main.ts, task_1/webpack.config.js, task_1/tsconfig.json, task_1/package.json                      |
| 2           | Extending the Teacher class              | Extend `Teacher` with a `Directors` interface that includes an additional attribute                                                    | task_1/js/main.ts                                                        |
| 3           | Printing teachers                        | Write a function `printTeacher` to return formatted name, and create an interface for the function                                     | task_1/js/main.ts                                                        |
| 4           | Writing a class                          | Create `StudentClass` with methods `workOnHomework` and `displayName`, and describe the class and constructor via interfaces            | task_1/js/main.ts                                                        |
| 5           | Advanced types Part 1                    | Implement `DirectorInterface` and `TeacherInterface` with methods, and create a `Director` and `Teacher` class                         | task_2/js/main.ts, task_2/webpack.config.js, task_2/tsconfig.json, task_2/package.json                      |
| 6           | Creating functions specific to employees | Write `isDirector` type predicate function and `executeWork` function based on employee type                                           | task_2/js/main.ts                                                        |
| 7           | String literal types                     | Create a string literal type `Subjects` and a function `teachClass` returning a specific string based on the subject                   | task_2/js/main.ts                                                        |
| 8           | Ambient Namespaces                       | Define `RowID` and `RowElement` types, import and use a third-party library `crud.js`                                                  | task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts                                               |
| 9           | Namespace & Declaration merging          | Create a namespace `Subjects`, define and extend interfaces and classes for Cpp, Java, and React subjects                              | task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts |
| 10          | Brand convention & Nominal typing        | Define `MajorCredits` and `MinorCredits` interfaces, and create functions `sumMajorCredits` and `sumMinorCredits`                      | task_5/js/main.ts, task_5/package.json, task_5/webpack.config.js, task_5/tsconfig.json                      |
