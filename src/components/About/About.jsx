import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import './about.css'

const About = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>ABOUT US</h1>
            </div>
            <div className="content">
              <p>ELITE is a dynamic and forward-thinking community designed for computer science students and innovators who are passionate about technology and creativity. Our mission is to foster a collaborative environment where members can explore cutting-edge ideas, share knowledge, and work on projects that push the boundaries of technology.</p>
              <p>Whether you are a student looking to deepen your understanding of computer science or someone with a bold, innovative idea, ELITE provides the perfect platform to connect with like-minded individuals. Our community offers access to a wide range of resources, from workshops and coding challenges to mentorship and networking opportunities with industry professionals.</p>
              <p>At ELITE, we believe that innovation thrives in collaboration. We aim to empower the next generation of tech leaders by providing a space where curiosity and creativity meet practical skills. Join us, and together, let’s shape the future of technology!</p>
            </div>
            <div className="socialIcons">
                    <FontAwesomeIcon icon={faFacebook} id='facebook'/>
                    <FontAwesomeIcon icon={faInstagram} id='instagram'/>
                    <FontAwesomeIcon icon={faYoutube} id='youtube'/>
                    <FontAwesomeIcon icon={faLinkedin} id='linkedin'/>
                    <FontAwesomeIcon icon={faSquareXTwitter} id='x-twitter'/>
            </div>
          </div>
          <div className="image">
            <img src='src/assets/about1.png'/>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default About