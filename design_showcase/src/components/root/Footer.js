import logo from '../../assets/graphics/Strata_LOGO.png'
import style from './root.module.css'

export const Footer = () => {
    return (
        <footer>
            <div>
                <h3>T: (408) 555 5555</h3>
                <h3>E: info@designStudio.org</h3>
            </div>
            <div className={style.last}>
                <div className={style.center}>
                    <img src={logo} alt="logo" id={style.miniLogo}></img>
                </div>
                <h5>©Strata Design LLC. All Rights Reserved.</h5>
            </div>
        </footer>
    )
}