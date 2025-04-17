import { useOutletContext } from "react-router-dom"
import style from './contact.module.css'
import { Selector } from "./Selector"
import { useState } from 'react'
import { service_id, template_id, public_key } from "./keys"
import emailjs from 'emailjs-com'
import { Alert } from "./Alert"
import { about_photo_dic } from "../img_dics"

export const Contact = () => {
    const [orientation] = useOutletContext()
    const [expand, setExpand] = useState(false)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('quote')
    const [alertActive, setAlertActive] = useState(false)
    const [outcome, setOutcome] = useState('success')
    const handleSelect = (choice) => {
        setSubject(choice)
        setExpand(false)
    }
    const toggleSelect = () => {
        !expand ? setExpand(true) : setExpand(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(service_id, template_id, e.target, public_key)
          .then((result) => {
            setOutcome('success')
            setAlertActive(true)
          }, (error) => {
            setOutcome('failure')
            setAlertActive(true)
            console.log(error.text);
          });
    }
    const handleClose = () => {
        if(outcome === 'success')
        {
            setEmail('')
            setName('')
            setMessage('')
        }
        setAlertActive(false)
    }
    return (
        <div className={style.contact}>
            <Alert active={alertActive} outcome={outcome} handleClose={handleClose}/>
            <div className={style.info}>
                <div>
                <h2>Message Us</h2>
                <h3 className={style.title}>at your convienience</h3>
                </div>
                <form onSubmit={handleSubmit}>

                        <div className={style.form}>
                            <label>Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value = {name}
                                placeholder="Your name.."
                                onChange = {({target})=> setName(target.value)} 
                                required />
                        </div>
                        <div className={style.form}>
                            <label>Contact:</label>
                            <input 
                                type="text" 
                                id="email"
                                name="email"
                                value = {email}
                                onChange = {({target})=> setEmail(target.value)} 
                                placeholder="Your email.." 
                                required />                    </div>
                    <div>
                        <Selector 
                            subject = {subject} 
                            expand= {expand} 
                            handleSelect={handleSelect} 
                            toggleSelect={toggleSelect}/>
                    </div>
                    <div className={style.form} >
                        <label>Message:</label>
                        <textarea 
                            name="message" 
                            placeholder="Your message.." 
                            value = {message}
                            onChange = {({target})=> setMessage(target.value)} 
                            required />
                    </div>
                    <div className={style.right}>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            <div className={`${style.info} ${orientation === 'portrait' && style.side}`}>
                {orientation === 'landscape' && 
                <img className={`${style.image} ${style.landscape}` } src={about_photo_dic["contact"].img} alt={about_photo_dic["contact"].cap}></img>

                }
                <div>
                    <h2>Call Us</h2>
                    <h3 className={style.title}>During Office Hours</h3>
                    <div className={style.center}>
                        <p>{`(408) 555-5555`}</p>
                        <div className={style.side}>
                            <p>M - F</p>
                            <p>9 - 6</p>
                        </div>
                        <div className={style.side}>
                            <p>Weekends</p>
                            <p>10 - 4</p>
                        </div>
                    </div>
                </div>
                {orientation === 'portrait' &&
                <img className={`${style.image} ${orientation === 'portrait' && style.optional}`} src={about_photo_dic["contact"].img} alt={about_photo_dic["contact"].cap}></img>
                }
            </div>
        </div>
    )
}