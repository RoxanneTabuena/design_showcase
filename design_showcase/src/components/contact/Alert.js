import style from './contact.module.css'
export const Alert = ({outcome, handleClose, active}) => {
    const outcome_dic = {
        'success' : 'Your message has been recieved. A response can be expected within the next business day.',
        'failure' : 'Your message failed to send. Please ensure all fields are completed accurately.'
    }
    return (
        active &&
        <div className={style.alert}>
            <div className={style.right}>
                <p onClick={handleClose}>x</p>
            </div>
            <p>{outcome_dic[outcome]}</p>
        </div>
    )
}