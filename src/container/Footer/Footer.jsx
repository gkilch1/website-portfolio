import React, {useState} from 'react';
import './Footer.scss';
import { AppWrap, MotionWrap} from '../../wrapper';
import { images } from '../../constants';
import { client } from '../../client';

const Footer = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isFormSubmitted, setIsFormSubmitted] =useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message} = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
        setLoading(true);
        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message,
        };
        client.create(contact).then(() => {
            setLoading(false);
            setIsFormSubmitted(true); 
        }) .catch((err) => console.log(err));
    };

    return (
        <>
            <h2 className="head-text">Contact me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt='email' />
                    <a href='mailto:gkilchrist@gmail.com' className="p-text">gkilchrist@gmail.com</a>
                </div>
            </div>

            {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input className="p-text" type="text" name="name" placeholder="Your Name" value={username} onChange={handleChangeInput} />
                </div>
                <div className="app__flex">
                    <input className="p-text" type="text" name="email" placeholder="Your Email" value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea className="p-text" placeholder="Your Message" value={message} name="message" onChange={handleChangeInput} />
                </div>
                <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
            </div>
            ) : (
                <div>
                    <h3 className="head-text">Thank you for your email! I will get back to you as quick as possible!</h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');