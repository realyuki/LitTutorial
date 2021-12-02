import {LitElement, html, css} from 'lit';

class ToDoList extends LitElement {
  static properties = {
    listItems: {attribute: false},
    hideCompleted: {},
  };

  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  constructor() {
    super();
    this.listItems = [
      {text: 'Start Lit tutorial', completed: true},
      {text: 'Make to-do list', completed: false},
    ];
    this.hideCompleted = false;
  };

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
    console.log(this.listItems);
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  };

  addToDo() {
    this.listItems.push({text: this.input.value, completed: false});
    this.input.value = '';
    this.requestUpdate();
  }

  render() {
    const items = this.hideCompleted ? this.listItems.filter((item) => !item.completed) : this.listItems;
    const todos = html`
      <ul>
        ${items.map(
          (item) => html`
            <li
                class=${item.completed ? 'completed' : ''}
                @click=${() => this.toggleCompleted(item)}>
              ${item.text}
            </li>`
        )}
      </ul>
    `;
    const caughtUpMessage = html`
      <p>You're all caught up!</p>
    `;
    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <h2 class="todo">To Do</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item">
      <button @click=${this.addToDo}>Add</button>
      <br>
      <label>
        <input type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}>
        Hide completed
      </label>
    `;
  };
};

customElements.define('todo-list', ToDoList);
