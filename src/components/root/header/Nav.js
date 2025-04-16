import { NavLink } from "react-router-dom";
import style from '../root.module.css'
import { pathToTitle } from "../../utils";
export const Nav = ({orientation, pathname}) => {
    const link_dic = {
        '/about' : 
        <NavLink to="/about" key={'about'}>
            <h3>About</h3>
        </NavLink>,
        '/services' : 
        <NavLink to="/services" key={'services'}>
            <h3>Services</h3>
        </NavLink>,
        '/portfolio' : 
        <NavLink to="/portfolio" key={'portfolio'}>
            <h3>Portfolio</h3>
        </NavLink>,
        '/contact' : 
        <NavLink to="/contact" key={'contact'}>
            <h3>Contact</h3>
        </NavLink>

    }
    const displayLandscape = (path) => {
        const titleData = pathToTitle(pathname)
        const title = titleData.length === 1 ?
            <h1 key={'title'}>{titleData[0]}</h1> :
            <div className={style.title} key={'title'}>
                <NavLink to={titleData[2]}>
                    <h3>{`${titleData[1]}.`}</h3>
                </NavLink>
                <h1 className={style.phoneTitle}>{titleData[0]}</h1> 
            </div>
      return Object.keys(link_dic).map((link)=>{
        return titleData.length > 1 && titleData[2] === link ? 
            title : path === link ? title :
            link_dic[link]
      })
    }
    const displayPortrait = (path) => {
        return Object.keys(link_dic).filter((link)=>{
            return link !== path }).map((link)=>{
                return link_dic[link]
            })
    }
    const standard = (
        Object.keys(link_dic).map((link)=>{
            return link_dic[link]
        })
    )
    return (<> 
        <nav id={`${style.nav}`}>
            { orientation === 'landscape' && pathname.length > 1 ?
                    displayLandscape(pathname):
                orientation === 'portrait' && pathname.length > 1 ?
                    displayPortrait(pathname) : standard
            }
        </nav>
    </>)
}