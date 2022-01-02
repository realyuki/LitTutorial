import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('child-tomato')
class ChildTomato extends LitElement {
  // @property({ type: String }) value = '';
  // @property({ type: Boolean, attribute: 'disabled' }) disabledValue = false;

  // disabled: Boolean;

  // //*connectedCallback은 커스텀 엘리먼트가 문서의 DOM에 처음 연결될 때 호출됩니다.
  // connectedCallback() {
  //   super.connectedCallback();

  //   // this.dispatchEvent(new Event("testEvent"));

  //   console.log(this.id);
  //   console.log(this.value);
  //   console.log(this.onchange);
  //   console.log(this.disabled);
  // };

  // render() {
  //   return html`
  //     <style></style>
  //     <h1>i'm child-tomato</h1>
  //     <input .value="${this.value}" @keyup="${this.onchange}" ?disabled="${this.disabledValue}" />
  //     <p>input value is ${this.value}</p>
  //   `;
  // }

  render() {
    return html`
      <style></style>
      <div>자식 :</div>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'child-tomato': ChildTomato;
  }
}
