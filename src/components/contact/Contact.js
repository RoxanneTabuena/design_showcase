import { useOutletContext } from "react-router-dom"
import style from './contact.module.css'
import { Selector } from "./Selector"
import { useState } from 'react'
import { service_id, template_id, public_key } from "./keys"
import emailjs from 'emailjs-com'
import { Alert } from "./Alert"

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
            <h2>Message Us</h2>
            <h4 className={style.title}>at your convienience</h4>
            <form onSubmit={handleSubmit}>
                <div className={orientation === 'landscape' && style.side}>
                    <div>
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
                    <div id={style.email}>
                        <label>Contact:</label>
                        <input 
                            type="text" 
                            id="email"
                            name="email"
                            value = {email}
                            onChange = {({target})=> setEmail(target.value)} 
                            placeholder="Your email.." 
                            required />                    </div>
                </div>
                <div>
                    <Selector 
                        subject = {subject} 
                        expand= {expand} 
                        handleSelect={handleSelect} 
                        toggleSelect={toggleSelect}/>
                </div>
                <div className={style.message} >
                    <label>Message</label>
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
            <div className={style.call}>
                <h2>Call Us</h2>
                <h4 className={style.title}>During Office Hours</h4>
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
    )
}