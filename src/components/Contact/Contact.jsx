import React from 'react'
import './contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba5d74e3-aa17-4ef3-8e1f-05746916031e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
            <h2>Contact Us</h2>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"></div>
                        <div className='text'>
                            <h3>Address</h3>
                            <p>2000 Rue Sainte-Catherine, Montréal, QC H3H 2T2</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>XXX-XXX-XXXX</p>
                        </div>
                    </div>
                    <div className="box">
                    <div className="icon"></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>lasalle.elite1@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">           
                    <form onSubmit={onSubmit}>
                        <h2>Send Message</h2>
                        <div className="input-box">
                            <label>Name</label>
                            <input type="text" className='field' placeholder='Enter your name' name='name' required/>
                        </div>
                        <div className="input-box">
                            <label>Email</label>
                            <input type="email" className='field' placeholder='Enter your email' name='email' required/>
                        </div>
                        <div className="input-box">
                            <label>Message</label>
                            <textarea name="message" id='' className='field mess'placeholder='Tell us what you think' required></textarea>
                        </div>
                        <button type='submit'>Send Message</button>
                     </form>
                </div>
            </div>
    </section>
  )
}

export default Contact