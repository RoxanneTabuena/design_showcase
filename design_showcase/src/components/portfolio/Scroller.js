import { useState } from "react"
import style from './portfolio.module.css'
export const Scroller = ({set}) =>{
    const [cur, setCur] = useState(0)
    const handleClick = (direction) => {
        let i
        if(direction === 'back'){
            i = cur + 1 === set.length? 0 : cur + 1

        }else{
            i = cur === 0 ? set.length-1 : cur-1
        }
        setCur(i)
    }
    const single  = 
        <div className={style.container}>
            <div className={style.scroller}>
                <img src={set[cur].img} alt={set[cur].cap}></img>
            </div>
            <h4 id={style.cap}> {set[cur].cap}</h4>
        </div>
    const multi = (
        <div className={style.container}>
        <div className={style.scroller}>
            <button 
                className={style.carrot} 
                onClick={()=>{handleClick('back')}} 
                >{`<`}</button>
            <img src={set[cur].img} alt={set[cur].cap}></img>
            <button 
                className={style.carrot} 
                onClick={()=>{handleClick('forward')}} 
            >{`>`}</button>
        </div>
        <h4 id={style.cap}> {set[cur].cap}</h4>
    </div>

    )
    return (
        set.length > 1 ? multi : single
        )
}