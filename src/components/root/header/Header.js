import { Nav } from "./Nav"
import { MenuIcon } from "./MenuIcon"
import { NavLink } from "react-router-dom"
import logo from '../../../assets/graphics/Strata_LOGO.png'
import style from '../root.module.css'
import { pathToTitle } from "../../utils"
export const Header = ({onMenuToggle, nav, orientation, pathname}) => {
    const menu = (
        <div className={style.menu}>
        {nav === 'icon' ? 
        <MenuIcon onMenuToggle={onMenuToggle}/> :
        <Nav orientation={orientation} pathname={pathname}/>
        }
        </div>
    )
    
    // mobile homeHeader: Logo to the center, nav on the bottom
    const phoneHome = (
        <>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" id={style.homeLogo}></img>
            </NavLink>
            <div className={style.homeMenu}>

            {menu}
            </div>
        </>)
    // desktop header: Logo to the left, nav on the bottom-nav Title Display
    const desktop = (<>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" id={style.logo}></img>
            </NavLink>
            <Nav className={style.nav} orientation={orientation} pathname={pathname}/>
         </>)
    // mobile header: Logo to the left , nav to the right, Title on The Bottom
    const phone = (
            <div className={style.phone}>
                <div className={style.phoneUpper}>
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" id={style.logo}></img>
                    </NavLink>
                    { menu }
                </div>
                {pathname.length>1 && <h1 className={style.phoneTitle}>{pathToTitle(pathname)[0]}</h1>}
            </div>
        
    )
    return (<>
        <header>
            {orientation === 'landscape' ? desktop :
             pathname.length > 1 ? phone : phoneHome
             }
        </header>
    </>)
}