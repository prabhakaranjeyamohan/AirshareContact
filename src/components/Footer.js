import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai';
import '../styles/Footer.css';

const Footer = () => {

  console.log('yurrrr')
  return (
    <div className="footer">
      <div className="socialMedia">
        <AiFillFacebook/> <AiFillInstagram/> <AiFillLinkedin /> <AiFillTwitterSquare/>
      </div>
    </div>
  )
}

export default Footer