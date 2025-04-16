import { project_photo_dic } from "../img_dics"
import { project_info_dic } from "../info_dics"
import { ProjectPreview } from "./ProjectPreview"
import { useState } from "react"
import style from './portfolio.module.css'

export const Portfolio = () => {
    const [active, setActive] = useState('')
    const handleMouseOver = (project) => {
        setActive(project)
    }
    return (
        <div className={style.container}>
            <div className={style.portfolio}>
                
                { Object.keys(project_photo_dic).reverse().map((project)=>{
                    return <ProjectPreview 
                                onMouseOver={() => {handleMouseOver(project)}} 
                                title={project_info_dic[project].title} 
                                project={project} 
                                img={project_photo_dic[project][0]} 
                                key={project} 
                                active={active===project}/>
                })}
                
            </div>
        </div>
    )
}