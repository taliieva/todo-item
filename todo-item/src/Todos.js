import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const Todos = () => {
  const list = useSelector(({ todos }) => todos);
  return (
    <ul>
      {list.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
