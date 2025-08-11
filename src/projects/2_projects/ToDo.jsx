import { useState } from "react";
import todoData from "./todoData";

const ToDo = () => {

    const [data, setData] = useState(todoData);
    const [inputValue, setInputValue] = useState("");

    const removeItem = (id) => {
        const newData = data.filter((ele, index)=>{
            return id !== ele.id;
        });

        setData(newData);
    }

    const removeAll = () => {
        setData([]);
    }

    const addItem = () => {
        if(inputValue.trim() === ''){
            return;
        }
        const newItem = {
            id: Date.now() + Math.random(),
            title: inputValue,
            completed: true
        }

        setData((prev)=>{
            return [newItem, ...prev];
        });

        setInputValue("");
    }
 
    return (
        <div className="container py-5">
            <div className="row">
                <h1 className="text-center">To Do</h1>
            </div>
            <div className="row">
                <div className="add-item d-flex flex-column mb-3 gap-2">
                    <input onChange={(e)=>{
                        setInputValue(e.target.value);
                    }} value={inputValue} className="form-control" type="text" />
                    <button onClick={addItem}  className="btn btn-primary">Add Task</button>
                </div>
                <div className="list d-flex gap-3 flex-column">
                    {data.map((item, index)=>{
                        return (
                            <div className="d-flex p-3 card justify-content-between flex-row align-items-center" key={item.id} data-id={item.id}>
                                <h4 className="list-title">{item.title}</h4>
                                <button onClick={()=> {
                                    return removeItem(item.id);
                                }}  className="btn btn-danger">Delete</button>
                            </div>
                        )
                    })}
                    <button  onClick={removeAll} className="btn btn-danger">Delete All</button>
                </div>
            </div>
        </div>
    )
}

export default ToDo;