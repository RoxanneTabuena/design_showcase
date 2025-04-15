import style from './about.module.css'
import { NavLink } from 'react-router-dom'
import { service_info_dic } from '../info_dics'

export const ServiceList = () => {
    return (
        <>

        <div className={`${style.side} ${style.article}`}>
            <h2 className={style.title}>Services</h2>
            <div className={style.services}>
                {Object.keys(service_info_dic).map((service)=>{
                    return (
                        <NavLink to={`/services/${service}`} key={service}>
                            <p className={style.service}>{service_info_dic[service].service}</p>
                        </NavLink>
                    )
                })}
            </div>
        </div>
        </>
    )
}