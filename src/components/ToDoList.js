import React, { useRef, useState } from 'react';
import '../todolist.css'
import ToDoItem from './ToDoItem';
const ToDoList = () => {
    const [inputVal, setInputVal] = useState('');
    const [inputArray, setInputArray] = useState([]);

    const onChange = (event) =>{
        event.preventDefault();
        const {target:{value}} = event
        setInputVal(value)
    }
    const nextId = useRef(0)
    const onClick = (event) =>{
        event.preventDefault();
       const input ={
           text : inputVal,
           checked : false,
           id: nextId.current,

       }
       setInputArray([...inputArray, input]);
       setInputVal('');
       console.log(inputArray)
       nextId.current += 1;
    }

    const onDelete = (id) =>{
        console.log(id)
        setInputArray(inputArray.filter(input => input.id!=id))
    }
    const onCheck = (id) =>{
        setInputArray(
            inputArray.map(input =>
                input.id ===id?{...input, checked: !input.checked}:input)
        )
    }

    return (
        <div className="container">
            <h2>오늘 할 일</h2>
            <form>
                <input type="text" onChange={onChange} value={inputVal} placeholder="할 일을 입력하세요" />
                <input type="submit" onClick={onClick} value="입력" />
            </form>
            {inputArray.map((input,key)=>
               <ToDoItem input={input.text} key={key}checked={input.checked} id={input.id} onDelete={onDelete} onCheck={onCheck} />
            )}
        </div>
    );
};

export default ToDoList;