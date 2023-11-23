import Button from "./Button";

const ListItem = ({ name, done, onDelete, onDone }) => {
  return (
    <li className="mt-4 flex items-center justify-between gap-2 border-t-2 pt-4">
      <span className={`grow ${done && "line-through"}`}>{name}</span>
      {!done && <Button onClick={onDone}>Zrobione</Button>}
      <Button onClick={onDelete}>Usuń</Button>
    </li>
  );
};

export default ListItem;
