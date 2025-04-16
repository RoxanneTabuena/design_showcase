import { service_info_dic } from "../info_dics"
import { ServicePreview } from "./ServicePreview"

import style from './services.module.css'

export const Services = () => {
        return (
            <div className={style.services}>
                {
                    Object.keys(service_info_dic).map(service=>{
                        return <ServicePreview id={service} service={service_info_dic[service]} open={true}/>
                    })
                }
            </div>
        )
}