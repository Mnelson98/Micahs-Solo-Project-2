import React, { useEffect } from "react";
// import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
//import Axios from "axios"; <<<<--- USED TO CONNECT FRONT AND BACK END

export function App() {

    // const [data, setData] = useState(""); <<<<----- syntax to use axios and make backend requests
    // const getData = async() => {
    //     const response = await Axios.get("http://localhost:3010/getData");
    //     setData(response);
    // }

    // useEffect(() => {
    //     getData()
    // }, []);

    return (
        <div className="todo-app">
            <TodoList />
        </div>
    );
};

export default App;