import style from '../about.module.css'
import { teamstatement } from '../statements'
import { team_info_dic } from '../../info_dics'
import { PersonPreview } from './PersonPreview'
import { team_photo_dic } from '../../img_dics'

export const Team = ({ orientation}) => {
    return (
        <>
        <div>
            <div className={`${style.side} ${style.article}`}>
                <h2 className={style.articleTitle}>Our Team</h2>
                <p className={style.statement}>{teamstatement}</p>
            </div>
            <div className={style.team}>
                {
                    Object.keys(team_info_dic).map(person=>{
                        return <PersonPreview 
                                id={person} 
                                person={team_info_dic[person]} 
                                img={team_photo_dic[person]} 
                                key={person}
                                orientation={orientation}/>
                    })
                }
            </div>
        </div>
        </>
    )
}