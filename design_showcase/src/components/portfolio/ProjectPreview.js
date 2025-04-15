import style from './portfolio.module.css'
import { NavLink } from 'react-router-dom'

export const ProjectPreview = ({project, img, title, active, onMouseOver}) => {

    return (<>{
        active ?
        <NavLink to={project} className={style.preview_container}>
            <div className={style.title_container}> 

                <h2 className={style.title}>{title}</h2>
            </div>
            <img className={`${style.preview} ${style.b_w}`} src={img.img} alt={img.cap}></img>
        </NavLink>
        :
        <NavLink to={project} className={style.preview_container} onMouseOver={onMouseOver} onTouchStart={onMouseOver}>
            <img className={`${style.preview}`} src={img.img} alt={img.cap}></img>
        </NavLink>
        
        }
    </>)
}