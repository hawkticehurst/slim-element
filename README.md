# Slim Element

A tiny base class for building web components.

It enables some super light abstractions over vanilla web component authoring catered to my personal preferences.

## Usage

```bash
npm install slim-element
```

```js
import { SlimElement } from 'slim-element';

class SimpleGreeting extends SlimElement {
  // Component styles can be optionally defined as a static property
  // If constructable style sheets are supported they will be used
  // otherwise the styles will be placed inside a <style> tag
  static styles = `
    h1 { color: teal; }
  `;

  // A constructor can be optionally defined
  // If it is defined make sure the first line is a call to super()

  // A connectedCallback can be optionally defined
  // If it is defined make sure the first line is a call to super.connectedCallback()

  // A render method is required for defining component markup
  render() {
    return `<h1>Hey there!</h1>`;
  }
}

customElements.define('simple-greeting', SimpleGreeting);
```

## Example

See an example of SlimElement in action in [example/counter-button.js](https://github.com/hawkticehurst/slim-element/blob/main/example/counter-button.js).

## License

This is licensed under [MIT](./LICENSE). Feel free to use, remix, and adapt the code found this repo in your own projects.
