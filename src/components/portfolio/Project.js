import { useLocation, NavLink } from "react-router-dom"
import { project_info_dic, team_info_dic } from "../info_dics"
import { project_photo_dic } from "../img_dics"
import { pathToId } from "../utils"
import { Scroller } from "./Scroller"
import { service_info_dic } from "../info_dics"
import style from './portfolio.module.css'


export const Project = () => {
    const { pathname } = useLocation()
    const id = pathToId(pathname)
    const project = project_info_dic[id]
    const pics = project_photo_dic[id]

    const services = project.services.map((service, i)=>{
        let path = Object.keys(service_info_dic).filter(s=>
        { return service_info_dic[s].service === service })[0]
        return i === project.services.length-1 ? 
            <NavLink to={`/services/${path}`} key={service}>{service}</NavLink> :
            <NavLink to={`/services/${path}`} key={service}>{`${service}, `}</NavLink>
        })

    const collaborators = project.collaborators.map((teammate, i)=>{
        return i === project.collaborators.length -1?
            <NavLink to={`/about/${teammate}`} key={teammate}>
                        {team_info_dic[teammate].fullName}
            </NavLink>:
            <NavLink to={`/about/${teammate}`} key={teammate}>
                        {`${team_info_dic[teammate].fullName}, `}
            </NavLink>
    })

    const details = (
        <table className={style.details}>
            <tbody>
                <tr>
                    <td>completed:</td>
                    <td>{project.year}</td>
                </tr>
                <tr>
                    <td>location:</td>
                    <td>{project.location}</td>
                </tr>
                <tr>
                    <td>services:</td>
                    <td>{services}</td>
                </tr>
                <tr>
                    <td>key people:</td>
                    <td>{collaborators}</td>
                </tr>
            </tbody>
        </table>
    )
    return (
        <div className={`${style.project}`}>
            <Scroller set={pics}/>
            <p>{project.summary}</p>
            {details}
        </div>
    )
}