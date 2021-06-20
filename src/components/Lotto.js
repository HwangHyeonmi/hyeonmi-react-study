import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../lotto.css'


const getRandNum = ()=>{
    let array = [];
    let i = 0;
    while (i < 7) {
        let n = Math.floor(Math.random() * 45) + 1;
            if (notSame(n)) {
                array.push(n);
                i++;
            }
    }
    function notSame (n) {
        return array.every((e) => n !== e);
    }
    return array;
}

const Lotto = () => {
    
    const [randNmArray, setRandNmArray] = useState(getRandNum());
    const [lottos,setLotto] = useState([]);
    const [bonus,setBonus] = useState();
    const colorArray =["#e2928d","#f4cabb","#e6c570","#4f766f","#6d7172","#bcbebf"]
    let timeout;
    const onClick = () =>{
        setRandNmArray(getRandNum())
        setLotto([])
        setBonus()
        for(let i=0; i<randNmArray.length; i++){
            timeout = setTimeout(()=>{   
                if(i===randNmArray.length-1){
                    setBonus(randNmArray[i])
                }else{
                    setLotto(prevState=>([
                        ...prevState,
                        randNmArray[i]
                    ]));
                }
            },i*1000)   
        } 
    }

    return (
        <div className="lottoContainer">
            <h1>LOTTO </h1>
            <Button onClick={onClick} variant="outlined" color="primary">
                시작
             </Button>
            <div className="lottos">
                {lottos.map((lotto)=>{
                    let color;
                    if(lotto<10){
                        color = colorArray[0]
                    }else if(lotto<20){
                        color = colorArray[1]
                    }else if(lotto<30){
                        color = colorArray[2]
                    }else if(lotto<40){
                        color = colorArray[3]
                    }else if(lotto<50){
                        color = colorArray[4]
                    }
                    return(
                        <span style={{backgroundColor:color}} className="lotto">{lotto}</span>
                    )
                })}
            </div>
           
                {bonus&&<div className="bonus">{bonus}</div>}
            
        </div>
    );
};

export default Lotto;