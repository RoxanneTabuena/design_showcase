import { useLocation } from "react-router-dom"
import { service_info_dic, project_info_dic, team_info_dic } from "../info_dics"
import { project_photo_dic, team_photo_dic, service_photo_dic } from "../img_dics"
import { pathToId } from "../utils"
import { getProjectsbyService } from "../utils"
import { PersonPreview } from "../about/team/PersonPreview"
import { ProjectPreview } from "../portfolio/ProjectPreview"
import style from './services.module.css'
import { useState } from "react"


export const Service = () =>{
    const {pathname} = useLocation()
    const [active, setActive] = useState('')
        const handleMouseOver = (project) => {
            setActive(project)
        }
    const id = pathToId(pathname)
    const service = service_info_dic[id]
    const projects = getProjectsbyService(service.service, project_info_dic).map(project=>{
        return <ProjectPreview 
        title={project_info_dic[project].title} 
        project={`/portfolio/${project}`} 
        img={project_photo_dic[project][0]} 
        key={project} 
        onMouseOver={() => {handleMouseOver(project)}} 
        active={active===project}
        />

    })
    const people = service.associated_people.map((person)=>{
            return <PersonPreview person={team_info_dic[person]} id={`/about/${person}`} img={team_photo_dic[person]} key={person}></PersonPreview>
        })
    return (
        <div className={style.services}>
            <img src={service_photo_dic[id].img} alt={service_photo_dic[id].cap}></img>
            <p>{service.summary}</p>
            <h2>Key Talent</h2>
            <div className={style.people}>{people}</div>
            <h2>{`Previous ${service.service}s`}</h2>
            <div className={style.container}>
                <div className={style.projects}>
                {projects}
                </div>
            </div>
        </div>
        )
}

