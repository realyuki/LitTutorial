import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { resolve } from './webpack.config';
import './child-tomato';

// type ToDoItem = {
//   text: string,
//   completed: boolean
// };

// @customElement('todo-list')
// export class ToDoList extends LitElement {
//   static styles = css`
//     .todo {
//       color: blue;
//     }
//     .completed {
//       text-decoration-line: line-through;
//       color: #777;
//     }
//   `;

//   @property({attribute: false})
//   listItems = [
//     { text: 'Make to-do list', completed: true },
//     { text: 'Complete Lit tutorial', completed: false }
//   ];
//   @property()
//   hideCompleted = false;
//   @property()
//   titleText = '제목';

//   connectedCallback() { // componentDidMount
//     super.connectedCallback();
//     setTimeout(() => {
//       this.setAttribute('titleText', 'To Do');
//       this.requestUpdate();
//     }, 2000)
//   };

//   toggleCompleted(item: ToDoItem) {
//     item.completed = !item.completed;
//     this.requestUpdate();
//   };

//   setHideCompleted(e: Event) {
//     this.hideCompleted = (e.target as HTMLInputElement).checked;
//   };

//   @query('#newitem')
//   input!: HTMLInputElement;

//   addToDo() {
//     this.listItems.push({text: this.input.value, completed: false});
//     this.input.value = '';
//     this.requestUpdate();
//   };

//   render() {
//     const items = this.hideCompleted ? this.listItems.filter((item) => !item.completed) : this.listItems;
//     const todos = html`
//       <ul>
//         ${items.map(
//           (item) => html`
//             <li
//                 class=${item.completed ? 'completed' : ''}
//                 @click=${() => this.toggleCompleted(item)}>
//               ${item.text}
//             </li>`
//         )}
//       </ul>
//     `;
//     const caughtUpMessage = html`
//       <p>You're all caught up!</p>
//     `;
//     const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

//     return html`
//       <h2 class="todo">${this.titleText}</h2>
//       ${todosOrMessage}
//       <input id="newitem" aria-label="New item">
//       <button @click=${this.addToDo}>Add</button>
//       <br>
//       <label>
//         <input type="checkbox"
//           @change=${this.setHideCompleted}
//           ?checked=${this.hideCompleted}>
//         Hide completed
//       </label>
//     `;
//   };
// };

// declare global {
//   interface HTMLElementTagNameMap {
//     'todo-list': ToDoList;
//   }
// }

@customElement('lit-tomato')
class Tomato extends LitElement {
  // @property({ attribute: 'my-custom-prop3' }) myProp3 = "myProp3"; // 값이 my-custom-prop3 일 때 myProp3(property)는 "my-custom-prop3"이라는 attribute를 가진다.

  // connectedCallback() {
  //   super.connectedCallback();

  //   setTimeout(() => {
  //     this.setAttribute("my-custom-prop3", "changed-myProp3");
  //     this.requestUpdate();
  //   }, 2000)
  // };

  // // attribute값이 변경 될 때 호출되는 lifecycle
  // attributeChangedCallback(attributeName: string, oldVal: any, newVal: any) {
  //   super.attributeChangedCallback(attributeName, oldVal, newVal);

  //   console.log(
  //     "attribute ",
  //     attributeName,
  //     "은 ",
  //     oldVal,
  //     "에서 ",
  //     newVal,
  //     "로 변경되었습니다."
  //   );
  // };

  // @property({
  //   hasChanged: (newVal, oldVal) => {
  //     console.log("has changed", oldVal, " to ", newVal);
  //     return true;
  //   },
  // })
  // name = "쭈노";

  // connectedCallback() {
  //   super.connectedCallback();
  //   console.log('connected');
  // };

  // disconnectedCallback() {
  //   super.disconnectedCallback();
  //   console.log('discunnected');
  // };

  // async performUpdate() {
  //   console.log('performUpdate');
  //   await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  //   super.performUpdate();
  // };

  // shouldUpdate(changeProperties: any) {
  //   console.log('shouldUpdate?', changeProperties);
  //   super.shouldUpdate(changeProperties);
  //   return true;
  // };

  // firstUpdated(changedProperties: any) {
  //   console.log('first updated!');
  //   super.firstUpdated(changedProperties);
  // };

  // updated(changedProperties: any) {
  //   console.log('updated', changedProperties);
  //   super.updated(changedProperties);
  // };

  // changeProperties() {
  //   this.name = '쮸';
  // };

  // render() {
  //   return html`
  //     <style></style>
  //     <h1>hello ${this.name}</h1>
  //     <button @click="${this.changeProperties}">누르면 바껴욤</button>
  //   `;
  // }

  // @property() value = '';
  // @property({ type: Boolean }) disabled = true;

  // render() {
  //   return html`
  //     <input .value="${this.value}" @keyup=${this.onChange} ?disabled="${this.disabled}" />
  //   `;
  // };

  // @property({ type: String }) value = 'tomato';
  // @property({ type: Boolean }) disabled = true;

  // onChange(e: any) {
  //   this.value = e.target.value;
  //   console.log(e.target.value);
  // };

  // render() {
  //   return html`
  //   <child-tomato
  //     id="my-input"
  //     .value="${this.value}"
  //     .onchange="${this.onChange}"
  //     ?disabled="${this.disabled}"
  //   ></child-tomato>
  //   `;
  // }

  render() {
    return html`
      <child-tomato><p>자식</p></child-tomato>
    `;
  }
};

declare global {
  interface HTMLElementTagNameMap {
    "lit-tomato": Tomato;
  }
}
