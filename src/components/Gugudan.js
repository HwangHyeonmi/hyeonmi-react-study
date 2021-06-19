import React, { useState,useRef } from 'react';

const Gugudan = () => {
    const [num1, setNum1] = useState(Math.ceil(Math.random()*9));
    const [num2, setNum2] = useState(Math.ceil(Math.random()*9));
    const [answerVal, setAnswerVal] = useState('');
    const [result, setResult] = useState('결과는..!')
    const input = useRef();
    const onChange = (e) =>{
        setAnswerVal(e.target.value)
    }
    const onClick = (e) =>{
        e.preventDefault();
        if(Number(answerVal)===num1*num2){
            setResult('딩동댕');
            setNum1(Math.ceil(Math.random()*9))
            setNum2(Math.ceil(Math.random()*9))
        }else{
            setResult('땡');
            
        }
        setAnswerVal('');
        input.current.focus();
    }
    return (
        <div>
            <h1>구구단</h1>
            <h2>{`${num1}곱하기${num2}는?`}</h2>
            <form>
                <input ref={input} onChange={onChange} value={answerVal} type="text" />
                <input type="submit" onClick={onClick} value="입력" />
            </form>
            <div>{result}</div>
        </div>
    );
};

export default Gugudan;