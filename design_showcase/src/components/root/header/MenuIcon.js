import style from '../root.module.css'
export const MenuIcon = ({onMenuToggle, pathname}) => {

    return (
        <>
            <h2 className={style.icon} onClick={onMenuToggle}>...</h2>
        </>
    )
}