import { NavLink } from "react-router-dom"
import style from '../about.module.css'

export const PersonPreview = ({person, img, id, orientation}) => {
    const skills = (
            person.skills.map(skill=>{
                return <h4 key={skill}>{skill}</h4>
            })
    )
    const photo = (
        <div className={style.photoContainer}>
            <img className={style.photo} src={img.img} alt={img.cap}></img>
        </div>
    )
    const phone = (
        <NavLink to={id} className={style.preview}>
            <h3 className={style.name}>{person.fullName}</h3>
            <div className={style.previewInfo}>
                {photo}
                <div className={style.statement}>
                {skills}
                </div>
            </div>
        </NavLink>
    )
    const desk = (
        <NavLink to={id} className={style.preview}>
            <div className={style.previewInfo}>
                {photo}
                <div className={style.statement}>
                <h3 className={style.name}>{person.fullName}</h3>
                {skills}
                </div>
            </div>
        </NavLink>
    )


    return (
        orientation === 'landscape' ? desk : phone
    )
}