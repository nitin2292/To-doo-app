function TodoItem({ text }) {
  return (
    <li className="todo-item">
      <input type="checkbox" />
      {text}
    </li>
  );
}

export default TodoItem;