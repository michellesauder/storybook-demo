# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Step-by-Step Tutorial for Setting Up Interaction Tests with Storybook 8 and Typescript:

1. **Introduction:**
   - This tutorial will guide you through setting up interaction tests for a React.js application using Storybook 8 and Typescript.

2. **Prerequisites:**
   - Make sure you have a React.js application set up with Storybook 8 and Typescript.

3. **Setting Up the Test Environment:**
   - Install the Storybook Testing Library by running `npm install @storybook/addon-interactions`.
   - Configure the Storybook main.ts file to enable the interactions add-on.

4. **Creating the Test Component:**
   - Create a new component for testing, such as a form component.
   - Add necessary CSS files for styling.

5. **Writing Interaction Tests:**
   - Define interaction tests within a Storybook story.
   - Use `user-event` for simulating user interactions.
   - Use `expect` from Jest for assertions.

6. **Testing Form Validation:**
   - Write tests to validate form inputs and error messages.
   - Test scenarios for empty submissions, invalid email inputs, and successful submissions.

7. **Automating Test Runs:**
   - Install the Storybook Test Runner by running `npm install @storybook/test-runner`.
   - Add an npm script to run the test runner.
   - Optionally, set up continuous integration (CI) using tools like GitHub Actions for automated testing.

8. **Conclusion:**
   - Interaction tests provide a visual catalog of component states and help ensure functionality.
   - Automating test runs streamlines the testing process and ensures consistent results.

9. **Wrap-Up:**
    - Congratulations! You have successfully set up interaction tests for your React.js application using Storybook 8 and Typescript.

### Additional Resources:
- Refer to the video subtitles for detailed code examples and explanations.
- Explore the Storybook documentation for more advanced testing techniques and best practices.


- Tests only run when you visit that story
- Runs on a real browser
- You can use a test runner to run all the tests right away
- You can set up CI to run tests
