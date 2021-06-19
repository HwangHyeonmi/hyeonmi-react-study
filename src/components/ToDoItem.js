import React from 'react';

const ToDoItem = ({input,id, onDelete, onCheck,checked}) => {
    const color ={
        backgroundColor: "blue",
    }
    
    
    return (
        <div>
        <div style={checked? {color:'blue'}:{color:'red'}} >{input}</div>
        <button  onClick={()=>{
            onDelete(id)
        }}>삭제</button>
        <button onClick={()=>{
            onCheck(id)
        }}>체크</button>
    </div>
    );
};

export default ToDoItem;