import React, { useEffect } from "react";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
//import Axios from "axios"; <<<<--- USED TO CONNECT FRONT AND BACK END
// const postToDo = document.querySelector('#todolist');

// 2. use document.query selector to grab the ID of the div you made in index.html <<<----- 
// 3. fech request to the certain page endpoint we are trying to post info to


export function App() {

    return (
        <div className="todo-app">
            <TodoList />
        </div>
    );
};

export default App;