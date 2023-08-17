import React, { useState } from 'react'
import TodoForm from './TodoForm'
import DisplayComponent from './DisplayComponent';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {

        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        fetch('http://localhost:3010/todos', {
            method: 'POST',
            headers: {
                Accept: "application/json", "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })
            .then(data => data.json())
            //.then(data => console.log(data)) // map through todo state here 

            .then(data => {
                //const newTodos = [data, ...todos];
                setTodos(prevTodos => [...prevTodos, data])
            })   // <<<--- id like to add this data to my todos state array
            .catch(err => console.log(err))


        // const newTodos = [todo, ...todos];
        // setTodos(newTodos);
        // console.log(todo, ...todos);
    }

    const removeTodo = async (id) => {
       await console.log("this is ID: ", id)

        // make a post request to the todos/remove endpoint and build out the removal of that document in the backend
       await fetch('http://localhost:3010/todos/done', {
            method: 'DELETE',
            //body: JSON.stringify(id),
            headers: {"id": id}, 
        })
        // .then(remDoc => remDoc.json())
        // .then(remDoc => console.log(remDoc))
        const currArr = [...todos]
        console.log(currArr)

        const refreshedArr = [];

        const removeArr = currArr.forEach (el => {
            if (el.id != id) refreshedArr.push(el)
        })

        console.log('REFRESH: ', refreshedArr);

        setTodos(refreshedArr);
    }



    const todoArray = todos.map(todo => <DisplayComponent key={todo.id} todo={todo} removeTodo={removeTodo}/>) 
    
    return (
        <div>
            <h1 className='cardheading'>Let's plan some stuff!</h1>
            <TodoForm onSubmit={addTodo} />

            {todoArray}
            {/* <Todomain
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            /> */}
        </div>
    )
}

export default TodoList