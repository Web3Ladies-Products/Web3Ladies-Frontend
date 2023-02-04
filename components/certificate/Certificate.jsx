import React,{useState} from 'react'
import { mentorship } from '../../public/assets/images';
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Cert = () => {
  const [studentName, setStudentName] = useState([
    {
      name: "Chiamaka Cynthia Obioha",
      course: "Web Development Track", 
    },

    {
      name: "Oluwatobiloba Onisemo",
      course: "Web Development Track",
    },

    {
      name: "Victoria Enebeli",
      course: "Data Science",
    },

    {
      name: "Jennifer Ifeatu Orisakwe",
      course: "Web Development Track",
    },

    {
      name: "Egbine Oghenero Henrietta",
      course: "Web Development Track",
    },

    {
      name: "Chizoba Enechukwu",
      course: "Web Development Track",
    },

    {
      name: "Omidiora Oluwatosin",
      course: "Web Development Track",
    },

    {
      name: "Oyindamola Abiola  ",
      course: "Blockchain Development Track",
    },

    {
      name: "Afoma Ukah",
      course: "Blockchain Development Track",
    },

    {
      name: "Jennifer Ovat Obem",
      course: "Blockchain Development Track",
    },

    {
      name: "Happiness David Enebeli",
      course: "Blockchain Development Track",
    },

 
  ]);
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = studentName.find((student) => student.name === name);
    if (student) {
   
      toast(`Congratulations ${student.name}! You have successfully completed the ${student.course} course. Please click on the download button to download your certificate.`,{delay:6000});
    } else {
      toast(`Sorry ${name}, your name is not on the list. Please contact your mentor for more information.`,{delay:6000});
    }
  }


  return (
    <section className="hero-section ">
    <div className="hero-section__description">
      <h1>Welcome Students</h1>
      <p>In order to receive your certificate, your name must be on the list. Please enter your name below:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
        <button type="submit">Download Certificate</button>
        <ToastContainer/>
      </form>
    </div>
    
  </section>
  )
}

export default Cert