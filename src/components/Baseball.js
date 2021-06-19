import React, { useRef, useState } from 'react';
import '../baseball.css'

const getRandNum = ()=>{
    let lotto = [];
    let i = 0;
    while (i < 4) {
    let n = Math.floor(Math.random() * 9) + 1;
    if (notSame(n)) {
    lotto.push(n);
    i++;
    }
    }
    function notSame (n) {
    return lotto.every((e) => n !== e);
    }
    return lotto;
}


const Baseball = () => {
    const [inputVal, setInputVal] = useState('');
    const [answerVal, setAnswerVal] = useState('');
    const [randNmArray, setRandNmArray] = useState(getRandNum());
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [success, setSuccess] = useState('');
    const [triesNum, setTriesNum] = useState(0);
    const [alert, setAlert] = useState('')
    const tries = useRef(0)

    const onChange = (event) =>{
        event.preventDefault();
        const {target:{value}} = event
        setInputVal(value)
    }

    const onClick = (event) =>{
        //정답확인용 
        console.log(randNmArray)

        event.preventDefault();
        if(inputVal.length===4){
            setInputVal('');
            setAlert('');
            setAnswerVal(inputVal);
                
            let strike = 0;
            let ball = 0;
            tries.current+=1
            setTriesNum(tries.current); 
            const inputValArray = inputVal.split('');
            for(let i=0; i<inputValArray.length; i++){
                inputValArray[i] = Number(inputValArray[i]);
            }
            
            for(let i=0; i<inputValArray.length; i++){
                if(randNmArray.includes(inputValArray[i])){
                    if(randNmArray[i]===inputValArray[i]){
                        console.log('strike')
                        strike++
                    }else{
                        console.log('ball')
                        ball++
                    }
                }
            }
            setStrike(strike);
            setBall(ball);

            if(strike===4){
                setSuccess(true)
            }    

       }else{
        setAlert('잘못 입력하셨습니다')
       }
    }

    const replay = (event) =>{
        event.preventDefault();
        tries.current =0;
        setAnswerVal('');
        setStrike(0);
        setBall(0);
        setSuccess(false);
        setTriesNum(0);
        setRandNmArray(getRandNum());
    }

    return (
        <div className="container">
            <h2 className="title">숫자 야구 게임<span><img width="30px" height="30px"  src='imgs/baseball.png'></img></span></h2>
            
            <form>
                <input className="inputText" type="text" maxLength={4} onChange={onChange} value={inputVal} placeholder="숫자를 입력하세요" />
                <input className="submitBtn" type="submit" onClick={onClick} value="입력" />
            </form>
            <div className="try">시도: {triesNum}</div>
            <div className="number">숫자 : {answerVal}</div>
            <div className="result"> strike : {strike}  ball : {ball} </div>
            {success&&<div>축하합니다! 성공하셨습니다.</div>}
         
            {success&&<button onClick={replay}>다시하기</button>}
            {alert&&<div className="alert">{alert}</div>}
            <img width="200px" src='imgs/character.jpg'></img>
        </div>
    );
};

export default Baseball;