import {useState} from "react";
import axios from "axios";
import HeroContacts from "./elements/HeroContacts";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false)

    const onFormSubmit = async (e) => {
        e.preventDefault()

        try{
            setSending(true)
            await axios.post("/api/contact", {name, email, message})
            setName('')
            setEmail('')
            setMessage('')
            setSending(false)
            alert("Message sent successfully.")

        } catch (e) {
            console.log(e);
            setSending(false)
            alert("Message failed to send.")
        }
    }

    return (
        <div id="contact-form">
            <h1 className="heading">Contact</h1>
            <p className="paragraph">
                I&apos;m open to opportunities, if you would like to connect kindly fill up the form below. However, if you
                just want to say hi or have a question, feel free to reach out too. Thanks!
            </p>
            <form onSubmit={onFormSubmit} >
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required/>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" rows="3" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                </div>
                <div className="d-flex justify-content-center my-4">
                    <button type="submit" className="btn btn-primary">{sending? "Sending..." : "Send Message"}</button>
                </div>
            </form>
            <HeroContacts />
        </div>
    )
}

export default Contact