import { about_photo_dic } from "../img_dics"
import { missionStatement, summary } from "./statements"
import { useState} from "react"
import style from './about.module.css'
import { Article } from "./Article"
import { Team } from "./team/Team"
import { ServiceList } from "./ServiceList"
import { useOutletContext } from "react-router-dom"

export const About = () => {
    const [display, setDisplay] = useState('mission')
    const [orientation] = useOutletContext()
    const isLandscape = orientation === 'landscape' ? true: false
    const handleClick = (section)=>{
        setDisplay(prev => (prev === section ? '' : section))
    }
    const titles = {
        mission: <h2 onClick={()=>{handleClick('mission')}}>Strata</h2>,
        founders: <h2 onClick={()=>{handleClick('founders')}}>The Studio</h2>,
        team: <h2 onClick={()=>{handleClick('team')}}>Our Team</h2>,
        services: <h2 onClick={()=>{handleClick('services')}}>Services</h2>
}

    const sections = {
        mission : <Article 
                    title={"Strata"} 
                    img={about_photo_dic.workshop} 
                    body={missionStatement} 
                    orientation={orientation}
                    />,
        founders :<Article 
                    title={"The Studio"} 
                    img={about_photo_dic.founders} 
                    body={summary} 
                    orientation={orientation}
                    />,
        team : <Team 
                    orientation={orientation}
                    />,
        services : <ServiceList/>
    }
    const upper =(
        <div className={!isLandscape ? style.regular : style.news}>
            {sections.mission}
            {sections.founders}
        </div>)
    console.log(Object.keys(titles))
    return (
    
         orientation === 'landscape' ?
            <div className={style.about}>
                {upper}
                {sections.team}
                {sections.services}
            </div> :
            <div className={style.about}>
                <div className={style.collection}>

                {Object.keys(titles).filter((title)=>{
                    return title !== display
                }).map((key)=>{
                    return titles[key]
                })}
                </div>
                {sections[display]}
            </div>
        
    )
}