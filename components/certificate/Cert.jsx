import React,{useState} from 'react'
import { mentorship } from '../../public/assets/images';
import Image from "next/image";

const Cert = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <section className="hero-section ">
    <div className="hero-section__description">
      <h1>Welcome Students</h1>
      <p>In order to receive your certificate, your name must be on the list. Please enter your name below:</p>
      <form>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
        <button type="submit">Download Certificate</button>
      </form>
    </div>
    
  </section>
  )
}

export default Cert