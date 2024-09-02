import { useState } from "react";
import Button from "./components/Button";


function UseState() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");


    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo = {
                id: todos.length + 1,
                text: inputValue
            };
            setTodos([...todos, newTodo]);
            setInputValue("");

        }
    };

    return (
        <div>
<div className="flex justify-center">
            <input className="border w-2/6 p-1 bg-slate-400" value={inputValue} placeholder="Add Todo" onChange={(e) => setInputValue(e.target.value)} />
            <Button text={"Add"} onClick={addTodo} />
            </div>
            <table className="border-collapse border border-black ... m-auto my-10">
                <thead>
                    <tr>
                        <th className="px-5 border border-black ...">S.No</th>
                        <th className="px-5 border border-black ...">TODO</th>
                    </tr>
                </thead>
                <tbody>

                    {todos.map((data, ind) => (
                        <tr key={ind}>
                            <td className="border border-black ...">{data.id}</td>
                            <td className="border border-black ...">{data.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UseState;