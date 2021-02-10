import { applyTheme } from 'Frontend/generated/theme';
import { LitElement } from 'lit-element';

export class View extends LitElement {
  createRenderRoot() {
    // Do not use a shadow root
    return this;
  }
}

export class Layout extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    applyTheme(this.shadowRoot!);
  }
}
