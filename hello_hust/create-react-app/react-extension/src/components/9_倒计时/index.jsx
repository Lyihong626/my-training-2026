import React, { useState, useEffect } from 'react'

export default function Demo() {
    const [run,setRun]=useState(2);
    const [seconds, setSeconds] = useState(5);

    //用来控制延迟2秒
    useEffect(()=>{
        let timer1=setTimeout(()=>{
            setRun(0);
        },2000)
        return ()=>clearTimeout(timer1);
    },[]);

    //run设置为0的时候,倒计时
    useEffect(() => {
        if(run!==0) return;
        //将定时器重新设为5
        if (seconds === 0){
            setSeconds(5);
            return;
        }
        //创建定时器每秒减1
        let timer2 = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            console.log('seconds',seconds);
        }, 1000);
        return () => {
            clearInterval(timer2);
        }
    }, [run,seconds]);



    return (
        <div><h1>倒计时：{seconds}</h1></div>
    )
}
