import { SlimElement } from '../index.js';
import { html, css } from './tags.js';

class CounterButton extends SlimElement {
  static styles = css`
    button {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: black;
      background-color: #efefef;
      border: 2px solid #000;
      border-radius: 8px;
      padding: 6px 10px;
    }
    button:hover,
    button:focus {
      cursor: pointer;
      outline: none;
      background-color: #e6e6e6;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.count = this.shadow.querySelector('#count');
    const counterButton = this.shadow.querySelector('button');
    counterButton.addEventListener('click', this.increment.bind(this));
  }

  render() {
    return html`<button>Clicked <span id="count">0</span> times</button>`;
  }

  increment() {
    this.count.textContent = Number(this.count.textContent) + 1;
  }
}

customElements.define('counter-button', CounterButton);
