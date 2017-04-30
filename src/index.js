export { default as Page } from "./components/Page";

if (process.env.NODE_ENV !== "production") {
  Object.defineProperty(exports, "default", {
    get() {
      console.error( // eslint-disable-line no-console
        "Flexy does not provide a default export. " +
        "You are probably missing the curly braces in the import statement. "
      );
    }
  });
}
