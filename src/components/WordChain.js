import React, { useRef, useState } from 'react';

const WordChain = () => {
    const [answerVal, setAnswerVal] = useState('');
    const [firstWord, setFirstWord] = useState('첫번째 단어 : 기차');
    const [result, setResult] = useState('');
    const input = useRef();
    const onChange = (e) =>{
        setAnswerVal(e.target.value);
    }
    
    const onClick = (e) =>{
        e.preventDefault();
        if(firstWord[firstWord.length-1]===answerVal[0]){
            setResult('정답')
            setFirstWord(answerVal)
        }else{
            setResult('땡')
        }
        setAnswerVal('')
        input.current.focus();
    } 

    return (
        <div>
            <h1>끝말잇기</h1>
            <div>{firstWord}</div>
            <form>
                <input ref={input} onChange={onChange} value={answerVal} type="text" />
                <input type="submit" onClick={onClick} value="입력"></input>
            </form>
            <div>{result}</div>
        </div>
    );
};

export default WordChain;