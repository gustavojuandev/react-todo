import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: "Hacer la compra", completed: false },
//   { text: "Escribir informe de proyecto", completed: true },
//   { text: "Hacer ejercicio", completed: false },
//   { text: "Estudiar programación", completed: false },
//   { text: "Llamar al médico", completed: true },
//   { text: "Limpiar la casa", completed: false },
//   { text: "Preparar la cena", completed: true },
//   { text: "Leer un libro", completed: true },
//   { text: "Planificar vacaciones", completed: false },
//   { text: "Revisar el correo electrónico", completed: true },
//   { text: "Ir al gimnasio", completed: false },
//   { text: "Terminar proyecto de diseño", completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// //localStorage.removeItem('TODOS_V1');

function App() {

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;


  console.log("Log 1");

  // React.useEffect(()=>{
  //   console.log("Looooooog 2");
  // })

  /* Solo se ejecuta el primer render si []*/

  // React.useEffect(()=>{
  //   console.log("Looooooog 2");
  // }, []);

/* Solo se ejecuta el primer render y si cambiamos totaltodos */

  // React.useEffect(()=>{
  //   console.log("Looooooog 2");
  // },[totalTodos, completedTodos])

  // console.log("Log 3");

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
    />
  );
}

export default App;
