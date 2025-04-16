import style from './contact.module.css'
export const Selector = ({subject, expand, handleSelect, toggleSelect}) => {

    const input_dic = {
        quote : 'Project Quote',
        service: 'Service Inquiry',
        careers: 'Employment and Internships',
        press: 'Press Request',
        general: 'General Inquiry'
    }

    const choice = (
            <div className={style.select}>
                <p>{input_dic[subject]}</p>
                <p className={style.arrow} onClick={toggleSelect}>&#9660;</p>
            </div>
    )

    const choices = (
        <div>
            {Object.keys(input_dic).filter((key)=>{
                return key !== subject}).map((input)=>{
                    return <p onClick={()=>{handleSelect(input)}} className={style.choice} key={input}>{input_dic[input]}</p>
                })}
        </div>
    )
    return (
        <div>
            <div className={style.subject}>
            <label>Subject:</label>
            {choice}
            </div>
            <div className={style.selector}>
                {expand && choices }
            </div>
        </div>
    )
}