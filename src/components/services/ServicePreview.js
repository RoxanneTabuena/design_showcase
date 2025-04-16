import { NavLink } from "react-router-dom"
import style from './services.module.css'
export const ServicePreview = ({id, service, open}) => {
    return (<>
        <NavLink to={id} className={style.preview}>
            <h3>{service.service}</h3>
            { open && <p>{service.summary}</p>}
        </NavLink>
    </>)
}