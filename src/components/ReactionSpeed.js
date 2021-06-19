import React, { useRef, useState } from 'react';
import '../reaction.css'


const ReactionSpeed = () => {

    const [color,setColor] = useState('yellow');
    const [text, setText] = useState('클릭해서 시작하세요')
    const [startTime, setStartTime] = useState();
    const [result, setResult] = useState();

    const box = useRef();
    
    const boxColor = {
        backgroundColor : color,
    }


    const onColorChange = () =>{
       /*  let boxDiv = box.current;
        let bgColor = boxDiv.style.backgroundColor; */

        if(color==='yellow'){
            setColor('red');
            setText('초록색이 되면 클릭하세요')
            setTimeout(()=>{
            setColor('green')
            setText('클릭하세요')
            setStartTime(new Date().getTime())
            },1000+2000*Math.random())
        }else if(color==="red"){
            setText('너무 성급하시군요. 초록색이 되면 클릭하세요')
        }else if(color==="green"){
            let endTime = new Date().getTime()
            setResult(endTime - startTime +'ms');
            console.log(endTime, startTime)
            setColor('yellow');
            setText('클릭해서 시작하세요')
        }
    }
    return (
        <div  className="container">
            <h2>반응속도체크</h2>

            <div ref={box} onClick={onColorChange} className="box" style={boxColor}>
                <h3>{text}</h3>
            </div>
            <h2>속도는..{result}</h2>
        </div>
    );
};

export default ReactionSpeed;