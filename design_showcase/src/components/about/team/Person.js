import { useLocation } from "react-router-dom"
import { project_info_dic, team_info_dic } from "../../info_dics"
import { team_photo_dic } from "../../img_dics"
import { pathToId } from "../../utils"
import { getProjectsbyTeam } from "../../utils"
import { NavLink } from "react-router-dom"
import style from '../about.module.css'

export const Person = () =>{
    const {pathname} = useLocation()
    const id = pathToId(pathname)
    const person = team_info_dic[id]
    const profile = (
        <div className={style.profile}>
            <img className={style.image} src={team_photo_dic[id].img} alt={team_photo_dic[id].cap}></img>
            <p>{person.summary}</p>
        </div>
    )
    const specialties = person.skills.map(skill=>{
                return <p key={skill}>{skill}</p>
            })
    const links = Object.keys(person.links).map(link=>{
                return person.links[link].length ?
                        (<a href={person.links[link]} key={link}><p>{link}</p></a>): null
            })
    const projects = getProjectsbyTeam(id, project_info_dic).map((proj, i)=>{
                return i === getProjectsbyTeam(id,project_info_dic).length-1 ?
                
                    <NavLink to={`/portfolio/${proj}`} key={proj}>
                        {project_info_dic[proj].title}
                    </NavLink> :
                    <NavLink to={`/portfolio/${proj}`} key={proj}>
                        {`${project_info_dic[proj].title}, `}
                    </NavLink>
            })
    const details = (
        <table className={style.details}>
            <tbody>
                <tr>
                    <td>links:</td>
                    <td>{links}</td>
                </tr>
                <tr>
                    <td>specialties:</td>
                    <td>{specialties}</td>
                </tr>
                <tr>
                    <td>projects:</td>
                    <td>{projects}</td>
                </tr>
            </tbody>
        </table>
    )
    return (
        <div className={style.person}>
            {profile}
            {details}
        </div>
    )
}

