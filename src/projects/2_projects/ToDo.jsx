import { useState } from "react";
import todoData from "./todoData";

const ToDo = () => {

    const [data, setData] = useState(todoData);

    const removeTodo = (id) => {
        const newData = data.filter((element, index)=>{
            return element.id !== id;
        });

        const bringBack = document.querySelector(".bring-back");
        bringBack.classList.remove("d-none");

        setData(newData);

    }
    const removeAll = () => {
        setData([]);

        const bringBack = document.querySelector(".bring-back");
        bringBack.classList.remove("d-none");

    }

    const bringBackAll = () => {
        setData(todoData);
        const bringBack = document.querySelector(".bring-back");
        bringBack.classList.add("d-none");
    }

    const addTask = () => {
        const input = document.querySelector("input");
        if (input.value.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        const newTask = {
            id: data.length + 1,
            title: input.value,
            completed: false
        };

        setData(prevData => [...prevData, newTask]);
        input.value = ""; // Clear the input field after adding the task
    }


    return (
        <div className="container py-5">
            <div className="row">
                <h1 className="text-center">To Do</h1>
            </div>
            <div className="row">
                <div className="add-item d-flex flex-column mb-3 gap-2">
                    <input className="form-control" type="text" />
                    <button onClick={addTask} className="btn btn-primary">Add Task</button>
                </div>
                <div className="list d-flex gap-3 flex-column">
                    {data.map((item, index)=>{
                        return (
                            <div className="d-flex p-3 card justify-content-between flex-row align-items-center" key={item.id} data-id={item.id}>
                                <h4 className="list-title">{item.title}</h4>
                                <button onClick={()=>{
                                    return removeTodo(item.id);
                                }} className="btn btn-danger">Delete</button>
                            </div>
                        )
                    })}
                </div>
                <div className="d-flex gap-2 align-items-center mt-4 justify-content-center">
                    <button onClick={removeAll} className="btn btn-danger">Remove All</button>
                    <button onClick={bringBackAll} className="btn btn-primary bring-back d-none">Bring Back All</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;