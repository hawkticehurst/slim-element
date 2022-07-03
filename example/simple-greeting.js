import { SlimElement } from '../index.js';

class SimpleGreeting extends SlimElement {
  render() {
    return `<h1>Hey there!</h1>`;
  }
}

customElements.define('simple-greeting', SimpleGreeting);