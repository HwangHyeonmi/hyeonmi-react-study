import React, { useEffect, useRef, useState } from 'react';
import '../rpsGame.css'

const rsp = {
    rock : "40px",
    scissors : "-300px",
    paper : "-620px"
}

const RPSGame = () => {
    //bgp = > 0, -300, -620
    const [position, setPosition] = useState(rsp.rock);
    const [currentVal, setCurrentVal] = useState('바위')
    const [result, setResult] = useState('')
    const [userAnswerImg, setUserAnswerImg] = useState(null)
    
    useEffect(()=>{
        const imgChange = setInterval(()=>{
            if(position===rsp.rock){
             setPosition(rsp.scissors);
             setCurrentVal('가위')
            }else if(position===rsp.scissors){
             setPosition(rsp.paper);
             setCurrentVal('보')
            }else if(position===rsp.paper){
             setPosition(rsp.rock)
             setCurrentVal('바위')
            }
        },1000)
        return () =>{
            clearInterval(imgChange)
        }
    },[position])

    

    const onClick = (e) =>{

        let userAnswer = e.target.innerText;
        if(userAnswer==='가위'){
            setUserAnswerImg(rsp.scissors)
        }else if(userAnswer==='바위'){
            setUserAnswerImg(rsp.rock)
        }else{
            setUserAnswerImg(rsp.paper)
        }
        if(currentVal===userAnswer){
            setResult('비겼음')
        }else{
            if(currentVal==='가위'){
                if(userAnswer==='보'){
                    setResult('졌습니다.')
                }else{
                    setResult('이겼습니다.')
                }
            }else if(currentVal==='바위'){
                if(userAnswer==='가위'){
                    setResult('졌습니다.')
                }else{
                }
            }else if(currentVal==='보'){
                if(userAnswer==='바위'){
                    setResult('졌습니다.')
                }else{
                    setResult('이겼습니다.')
                }
            } 
        }
        setPosition('end')   
       
        if(userAnswer==='다시하기'){
            setPosition(rsp.rock)
            setUserAnswerImg(null)
        }
    
    }

    const style1= {
        width:"300px",
        margin:"0 auto",
        backgroundImage: `url('imgs/rpsimg.jpeg')`,
        backgroundRepeat: 'no-repeat',
        height:"400px",
        backgroundPosition: `${position} 0`,
    }
    const style2= {
        width:"300px",
        margin:"0 auto",
        backgroundImage: `url('imgs/rpsimg.jpeg')`,
        backgroundRepeat: 'no-repeat',
        height:"400px",
        backgroundPosition: `${userAnswerImg} 0`,
    }

    return (
        <div className="container2">
             <h2>가위바위보</h2>
             <div className="imgContainer">
                <div style={style1}>
            
                </div>
                {userAnswerImg&&<div style={style2}>
            
                </div>}
                
             </div>
             <div className="btnWrap">
                    <button onClick={onClick}>가위</button>
                    <button onClick={onClick}>바위</button>
                    <button onClick={onClick}>보</button>
                    <br/>
                    <button onClick={onClick}>다시하기</button>
                </div>
             <div>{result}</div>
            
        </div>
    );
};

export default RPSGame;