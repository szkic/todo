import { nanoid } from "nanoid";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import { getCountItems } from "./utils/helper";
import { useState } from "react";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [allTasks, setAllTasks] = useState([
    { name: "Zapłacić rachunki", done: false, id: nanoid() },
    { name: "Wyrzucić śmieci", done: true, id: nanoid() },
  ]);

  function addTask(task) {
    setAllTasks((prevTasks) => [
      ...prevTasks,
      { name: task, done: false, id: nanoid() },
    ]);
    setIsFormVisible(false);
  }

  function deleteTask(id) {
    setAllTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function taskDone(id) {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== id) {
          return task;
        }
        return {
          ...task,
          done: true,
        };
      }),
    );
  }

  return (
    <div className="inline-block w-[450px] rounded-lg bg-white px-8 py-6">
      <header className="flex items-center justify-between gap-20">
        <div>
          <h1 className="text-3xl font-bold">Do zrobienia</h1>
          <h2 className="text-xl font-semibold">
            {getCountItems(allTasks.length)}
          </h2>
        </div>
        {!isFormVisible && (
          <button
            className="aspect-square w-[50px] rounded-full border-none bg-[#3498db] text-2xl text-white"
            onClick={() => setIsFormVisible(true)}
          >
            +
          </button>
        )}
      </header>
      {isFormVisible && <Form onFormSubmit={(task) => addTask(task)} />}
      <ul>
        {allTasks.map(({ name, done, id }) => (
          <ListItem
            name={name}
            done={done}
            key={id}
            onDelete={() => deleteTask(id)}
            onDone={() => taskDone(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
