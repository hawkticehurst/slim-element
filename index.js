export class SlimElement extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._render();
  }

  _render() {
    const markup = this.render();
    const styles = this.constructor.styles;
    const template = document.createElement('template');

    if (this.shadow.adoptedStyleSheets !== undefined) {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(styles);
      this.shadow.adoptedStyleSheets = [sheet];
      template.innerHTML = `${markup}`;
    } else {
      template.innerHTML = `
        <style>
          ${styles}
        </style>
        ${markup}
      `;
    }

    this.shadow.appendChild(template.content.cloneNode(true));
  }
}