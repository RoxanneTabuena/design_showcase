import classes from '../root/root.module.css'

export const Welcome = ({title, background}) => {
    
    
    return (
        <div>
            <img className={`${classes.cropncenter} ${classes.b_w}`} src={background} alt={title}></img>
        </div>
    )
}