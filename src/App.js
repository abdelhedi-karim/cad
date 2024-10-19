import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './nav.css';
import './style.css';
import './bootsnav.css';
import './bootstrap.min.css';
import './font-awesome.min.css';
import './animate.css';
import './owl.carousel.min.css';
import './owl.theme.default.min.css';
import './responsive.css';
import { FaCheckCircle, FaSpinner, FaGlobe } from 'react-icons/fa'; // Importing icons from react-icons
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const images = [
 
  'https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_200,w_200/v1728392585/428349701_254089804409421_5087268689471976810_n_bu9slb.jpg',
  'https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_200,w_200/v1728392585/417502288_254089744409427_929496478182264056_n_z7vu2c.jpg',
  'https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_200,w_200/v1728392585/433016233_272985682519833_555918190679344703_n_i2imcc.jpg'
  
];
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formulaires, setFormulaires] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFormulaires = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/formulaire");
                setFormulaires(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again.');
            }
        };

        fetchFormulaires();
    }, []);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0); 
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    passport: null,
    b3: null,
    diplome: null,
    acte: null,
  });
  
  // Toggle form visibility
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setShowForm((prevShowForm) => !prevShowForm); // Toggle form visibility
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] })); // Store the uploaded file
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value })); // Update other input values
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create FormData object to send data
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('passport', formData.passport);
    data.append('b3', formData.b3);
    data.append('diplome', formData.diplome);
    data.append('acte', formData.acte);

    try {
      // Make a POST request to your backend API
      const response = await axios.post('http://localhost:4000/api/formulaire', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Form submitted successfully:', response.data);
      // Reset the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        passport: null,
        b3: null,
        diplome: null,
        acte: null,
      });
      setShowForm(false); // Optionally hide the form after submission
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


 const toggleNavbar = () => setIsOpen(!isOpen)
  useEffect(() => {
    // First counter (0 to 1000)
    const target1 = 100;
    const duration1 = 15000;
    const interval1Time = duration1 / target1;

    const interval1 = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount < target1) {
          return prevCount + 1;
        } else {
          clearInterval(interval1);
          return prevCount;
        }
      });
    }, interval1Time);

    return () => clearInterval(interval1);
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);
  useEffect(() => {
    // Second counter (0 to 2000)
    const target2 = 50;
    const duration2 = 10000;
    const interval2Time = duration2 / target2;

    const interval2 = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount < target2) {
          return prevCount + 1;
        } else {
          clearInterval(interval2);
          return prevCount;
        }
      });
    }, interval2Time);

    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    // Third counter (0 to 3000)
    const target3 = 50;
    const duration3 = 10000;
    const interval3Time = duration3 / target3;

    const interval3 = setInterval(() => {
      setCount3((prevCount) => {
        if (prevCount < target3) {
          return prevCount + 1;
        } else {
          clearInterval(interval3);
          return prevCount;
        }
      });
    }, interval3Time);

    return () => clearInterval(interval3);
  }, []);
  return (
    <div>
 
     <Navbar bg="light" expand="lg" fixed="top">
     <Navbar.Toggle 
       
        className="navbar-toggler"
        onClick={toggleNavbar} // Toggle the navbar open/close state
      >
        {isOpen ? (
          <span>&times;</span> // Close icon when navbar is open
        ) : (
          <span>&#9776;</span> // Hamburger icon when navbar is closed
        )}
      </Navbar.Toggle>
      <Navbar.Brand href="#home" >
        <img
          className="logoo"
          src="https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_100/v1727988019/384192148_175238912294511_1146351560083594850_n_t5inpi.jpg"
          alt="Logo"
        />
      </Navbar.Brand>
    
      <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? "show" : ""}>
        <Nav className=" className='navbar-nav'">
          <Nav.Link  href="#education">Procédures</Nav.Link>
          <Nav.Link  href="#skills">Nos services</Nav.Link>
          <Nav.Link  href="#Nos agences">Nos agences</Nav.Link>
          <Nav.Link  href="#portfolio">Immigrer</Nav.Link>
          <Nav.Link  href="#contact">Contact</Nav.Link>
        </Nav>
        {/* Close Button at the Bottom */}
       
      </Navbar.Collapse>
    </Navbar>
  {/* /.top-area*/}
  {/* top-area End */}
  {/*welcome-hero start */}
  <section id="welcome-hero" className="welcome-hero">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="header-text">
           
             <img className="logoo" src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_150/v1727989860/360_F_104479185_98OwiNHENKbunQqpf283ZCQN9PJBPoDP_nzp3mh.webp' /> {' '}
             <img className="logoo" src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_97,w_150/v1727990013/360_F_65124908_UpNHzTdQn2HNAIT8yYqybMQeGfsRmVc7_yn5cae.webp' /> {' '}
             <img className="logoo" src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_97,w_150/v1727990013/flag-of-the-european-union-eu-with-a-grunge-texture_t4vday.webp' /> 
            
            <p>
            Laissez un professionnel prendre soin de votre projet d'immigration ainsi que votre atterrissage</p>
            <div className="card-container">
      {/* Clickable link to toggle the form */}
      <a href="/" onClick={handleLinkClick} className="card-link">
        {showForm ? 'Close Form' : 'Postuler maintenant'} {/* Change text based on form visibility */}
      </a>

      {/* Form to be displayed/hidden based on showForm state */}
      {showForm && (
        <div className="form-card">
          <img
            className="logoo"
            src="https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_100/v1727988019/384192148_175238912294511_1146351560083594850_n_t5inpi.jpg"
            alt="Logo"
          />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="passport">Upload Passport:</label>
              <input type="file" id="passport" name="passport" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="b3">Upload B3:</label>
              <input type="file" id="b3" name="b3" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="diplome">Upload Diplome:</label>
              <input type="file" id="diplome" name="diplome" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="acte">Upload Acte:</label>
              <input type="file" id="acte" name="acte" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
          </div> 
          
          {/*/.header-text*/}
        </div>
        {/*/.col*/}
      </div>
      {/* /.row*/}
    </div>
    {/* /.container*/}
  </section> 
  
  {/*/.welcome-hero*/}
  {/*welcome-hero end */}
  <>
  <section id="about" className="about">
    <div className="section-heading text-center">
      <h2>à propos de nous</h2>
    </div>
    <div className="container">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <div className="single-about-txt">
           
              <div className="row">
              <h4  style={{ color: 'blue' }}>
              🌍 Opportunités d'emploi à l'international !  <br/>
              🔥 Vous rêvez de travailler au Canada, en Australie, en Allemagne (Ausbildung), en Suisse (Ausbildung), en Finlande, au Danemark, en Norvège, en Irlande ou en Belgique 🔥  
              </h4>
              <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3  style={{ color: 'blue' }}>phone</h3>
                    <p  style={{ color: 'blue' }}>+ 216 92 602 851</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3  style={{ color: 'blue' }}>email</h3>
                    <p  style={{ color: 'blue' }}>cadgocanadago@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="single-about-img">
              <img
                src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1727988019/384192148_175238912294511_1146351560083594850_n_t5inpi.jpg"
                alt="profile_image"
              />
       
              {/* /.about-list-icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/.about*/}
 
</>
<centre><section id="stat" className="education">
  
   
  <div className="container">
    <div className="education-horizontal-timeline">
      <div className="row">
     
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
           <center> <h2 style={{ color: 'green'}} >+{count1} Dossiers <br/> validés <FaCheckCircle style={{ color: 'green', marginRight: '10px' }} />
            </h2></center>
            <center> <div className="carousel"> 
     
     <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`}  />
   
   </div></center>
              
            </div>
           
            {/*/.timeline*/}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
            <center>  <h2 style={{ color: 'orange' }}>+{count2} Dossiers en <br/> cours <FaSpinner style={{ color: 'orange', marginRight: '10px' }} />
              </h2></center>
             
              <center>   <div className="carousel"> 
     
     <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`}  />
   
   </div></center>
              
            </div>
           
            {/*/.timeline*/}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
            <center>  <h2 style={{ color: 'blue' }}>+{count3} Partenaires <br/>à l'étranger <FaGlobe style={{ color: 'blue', marginRight: '10px' }} />
              </h2> </center>
            
            </div>
            <center> <div className="carousel"> 
     
     <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`}  />
   
   </div></center>
          </div>
        </div>
      </div>
    </div>
  </div>
</section></centre>
 
  {/*/.about*/} 
  <section id="Nos agences" className="education">
    <div className="section-heading text-center">
      <h2>Nos agences
      </h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time"  style={{ color: 'blue' }}>
                <h2>📍 Sfax : Taniour Km 1<br/> devant CNAM
                </h2>
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description"  style={{ color: 'blue' }}>
                 
📞 Contactez-nous :
92602851

                  </p> 
                 
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time"  style={{ color: 'blue' }}>
                <h2>📍 Tunis (prochainement) : L'Aouina, Cité les Palmiers
                </h2>
               
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description"  style={{ color: 'blue' }}>
                
📞 Contactez-nous :
92917603

                  </p>
                 
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
  {/*about end */}
  {/*education start */}
  <section id="education" className="education">
    <div className="section-heading text-center">
      <h2>Procédures
      </h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time" style={{ color: 'blue' }}>
                <h2>Votre demande
                </h2>
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description" style={{ color: 'blue' }}>
                  Nous traitons et envoyons votre candidature à notre intermédiaire en 24h. Inscrivez vous maintenant pour lancer votre carrière au Canada !
                  </p> 
                  <div className="header-text">
           
           
                  <div className="card-container">
      {/* Clickable link to toggle the form */}
      <a href="/" onClick={handleLinkClick} className="card-link">
        {showForm ? 'Close Form' : 'Postuler maintenant'} {/* Change text based on form visibility */}
      </a>

      {/* Form to be displayed/hidden based on showForm state */}
      {showForm && (
        <div className="form-card">
          <img
            className="logoo"
            src="https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_100/v1727988019/384192148_175238912294511_1146351560083594850_n_t5inpi.jpg"
            alt="Logo"
          />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="passport">Upload Passport:</label>
              <input type="file" id="passport" name="passport" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="b3">Upload B3:</label>
              <input type="file" id="b3" name="b3" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="diplome">Upload Diplome:</label>
              <input type="file" id="diplome" name="diplome" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="acte">Upload Acte:</label>
              <input type="file" id="acte" name="acte" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
          </div>
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time" style={{ color: 'blue' }}>
                <h2>Recrutement
                </h2>
               
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description" style={{ color: 'blue' }}>
                  Passez une entrevue avec notre agence intermédiaire. Nous optimiserons et publierons votre profil auprès d’employeurs canadiens.
                  </p>
                  <div className="header-text">
           
           
                  <div className="card-container">
      {/* Clickable link to toggle the form */}
      <a href="/" onClick={handleLinkClick} className="card-link">
        {showForm ? 'Close Form' : 'Postuler maintenant'} {/* Change text based on form visibility */}
      </a>

      {/* Form to be displayed/hidden based on showForm state */}
      {showForm && (
        <div className="form-card">
          <img
            className="logoo"
            src="https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_100/v1727988019/384192148_175238912294511_1146351560083594850_n_t5inpi.jpg"
            alt="Logo"
          />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="passport">Upload Passport:</label>
              <input type="file" id="passport" name="passport" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="b3">Upload B3:</label>
              <input type="file" id="b3" name="b3" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="diplome">Upload Diplome:</label>
              <input type="file" id="diplome" name="diplome" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="acte">Upload Acte:</label>
              <input type="file" id="acte" name="acte" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
          </div>
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time" style={{ color: 'blue' }}>
                <h2>Votre profil en ligne !
                </h2>
              
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span
                  className="single-timeline-horizontal spacial-horizontal-line
									"
                />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description" style={{ color: 'blue' }}>
                  Réussissez l’examen et publiez votre profil auprès d’employeurs canadiens <br /> Votre opportunité canadienne vous attend !
                  </p>
                  <div className="header-text">
           
           
                  <div className="card-container">
      {/* Clickable link to toggle the form */}
      <a href="/" onClick={handleLinkClick} className="card-link">
        {showForm ? 'Close Form' : 'Postuler maintenant'} {/* Change text based on form visibility */}
      </a>

      {/* Form to be displayed/hidden based on showForm state */}
      {showForm && (
        <div className="form-card">
          <img
            className="logoo"
            src="https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_100/v1727988019/384192148_175238912294511_1146351560083594850_n_t5inpi.jpg"
            alt="Logo"
          />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="passport">Upload Passport:</label>
              <input type="file" id="passport" name="passport" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="b3">Upload B3:</label>
              <input type="file" id="b3" name="b3" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="diplome">Upload Diplome:</label>
              <input type="file" id="diplome" name="diplome" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="acte">Upload Acte:</label>
              <input type="file" id="acte" name="acte" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      )}
    </div>
          </div>
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*/.education*/}
  {/*education end */}
  {/*skills start */}
  <section id="skills" className="skills">
    <div className="skill-content">
      <div className="section-heading text-center">
        <h2>Nos services</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="single-skill-content">
              <div className="barWrapper">
                <h2 className="progressText" style={{ color: 'blue' }}>Dépôt de demande de résidence permanente en ligne</h2>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={10}
                      aria-valuemax={100}
                      style={{}}
                    ></div>
                  </div>
            
                </div>
              </div>
              {/* /.barWrapper */}
              <div className="barWrapper">
                <h2 className="progressText" style={{ color: 'blue' }}>Programmes de nomination provinciale</h2>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={10}
                      aria-valuemax={100}
                      style={{}}
                    ></div>
                  </div>
            
                </div>
              </div>
              {/* /.barWrapper */}
              <div className="barWrapper">
              <h2 className="progressText" style={{ color: 'blue' }}>Résidence permanente pour étrangers et travailleurs étrangers au Canada</h2>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={97}
                      aria-valuemin={10}
                      aria-valuemax={100}
                      style={{}}
                    ></div>
                  </div>
               
                </div>
              </div>
              {/* /.barWrapper */}
              <div className="barWrapper">
                <h2 className="progressText" style={{ color: 'blue' }}>Programme de l’expérience du Québec : Résidence permanente</h2>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={10}
                      aria-valuemax={100}
                      style={{}}
                    ></div>
                  </div>
                
                </div>
              </div>
              {/* /.barWrapper */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="single-skill-content">
              <div className="barWrapper">
              <h2 className="progressText" style={{ color: 'blue' }}>Entrée express au Canada</h2>
                
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={10}
                      aria-valuemax={100}
                      style={{}}
                    ></div>
                  </div>
                
                </div>
              </div>
              {/* /.barWrapper */}
              <div className="barWrapper">
                <h2 className="progressText" style={{ color: 'blue' }}>Parrainage d’épouse, époux, parents, membres de la famille</h2>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={10}
                      aria-valuemax={100}
                      style={{}}
                    ></div>
                  </div>
               
                </div>
              </div>
              {/* /.barWrapper */}
              <div className="barWrapper">
                <h2 className="progressText" style={{ color: 'blue' }}>Révision administrative en cas de refus de demande de résidence permanente.</h2>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={97}
                      aria-valuemin={10}
                      aria-valuemax={100}
                      style={{}}
                    ></div>
                  </div>
                 
                </div>
              </div>
              {/* /.barWrapper */}
              <div className="barWrapper">
                <h2 className="progressText" style={{ color: 'blue' }}>Super visa pour les parents</h2>
                <div className="single-progress-txt">
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={10}
                      aria-valuemax={100}
                      style={{}}
                    ></div>
                  </div>
               
                </div>
              </div>
              {/* /.barWrapper */}
            </div>
          </div>
        </div>
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </div>
    {/* /.skill-content*/}
  </section>
  {/*/.skills*/}
  {/*skills end */}
  {/*experience start */}
  
  {/*/.experience*/}
  {/*experience end */}
  {/*profiles start */}
  
  {/*/.profiles*/}
  {/*profiles end */}
  {/*portfolio start */}
  <section id="portfolio" className="portfolio">
    <div className="portfolio-details">
      <div className="section-heading text-center">
        <h2>
        Immigrer</h2>
      </div>
      <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className='immm'>
          <div className="col-sm-4">
       <img src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_300/v1728300244/461686964_397934080024992_2164055834110112573_n_a6a6sv.jpg' /> <br/>{' '}<br/> 
          </div>
          <div className="col-sm-4">
         <img src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_300/v1728300243/448637873_328391340312600_4456661122956899813_n_dgljsk.jpg' /> <br/>{' '}<br/> 
          </div>
          <div className="col-sm-4">
          <img src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_300/v1728300244/461325469_394908110327589_1370934135166326436_n_tfrv95.jpg' /> <br/>{' '}<br/> 
          </div>
        </div>
        </div>
      </div>
    </div>
      {/*/.container*/}
    </div>
    {/*/.portfolio-details*/}
  </section>
  {/*/.portfolio*/}
  {/*portfolio end */}
  {/*clients start */}
  {/*/.clients*/}
  {/*/.clients*/}
  {/*clients end */}
  {/*contact start */}
  <section id="contact" className="contact">
    <div className="section-heading text-center">
      <h2>contact me</h2>
    </div>
    <div className="container">
      <div className="contact-content">
        <div className="row">
          <div className="col-md-offset-1 col-md-5 col-sm-6">
            <div className="single-contact-box">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name*"
                          name="name"
                        />
                      </div>
                      {/*/.form-group*/}
                    </div>
                    {/*/.col*/}
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email*"
                          name="email"
                        />
                      </div>
                      {/*/.form-group*/}
                    </div>
                    {/*/.col*/}
                  </div>
                  {/*/.row*/}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                      {/*/.form-group*/}
                    </div>
                    {/*/.col*/}
                  </div>
                  {/*/.row*/}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={8}
                          id="comment"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      {/*/.form-group*/}
                    </div>
                    {/*/.col*/}
                  </div>
                  {/*/.row*/}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="single-contact-btn">
                        <a className="contact-btn" href="#" role="button">
                          submit
                        </a>
                      </div>
                      {/*/.single-single-contact-btn*/}
                    </div>
                    {/*/.col*/}
                  </div>
                  {/*/.row*/}
                </form>
                {/*/form*/}
              </div>
              {/*/.contact-form*/}
            </div>
            {/*/.single-contact-box*/}
          </div>
          {/*/.col*/}
          {/*/.col*/}
        </div>
        {/*/.row*/}
      </div>
      {/*/.contact-content*/}
    </div>
    {/*/.container*/}
  </section>
  {/*/.contact*/}
  {/*contact end */}
  {/*footer-copyright start*/}
  <footer id="footer-copyright" className="footer-copyright">
    <div className="container">
      <div className="hm-footer-copyright text-center">
        <p>
          © copyright yourname. design and developed by{" "}
          <a href="https://www.themesine.com/">themesine</a>
        </p>
        {/*/p*/}
      </div>
      {/*/.text-center*/}
    </div>
    {/*/.container*/}
    <div id="scroll-Top">
      <div className="return-to-top">
        <i className="fa fa-angle-up " id="scroll-top" />
      </div>
    </div>
    {/*/.scroll-Top*/}
    <div>
            <h1>Formulaire Entries</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {formulaires.map((formulaire, index) => (
                    <li key={index}>
                        <strong>Name:</strong> {formulaire.name}, 
                        <strong>Email:</strong> {formulaire.mail}, 
                        <strong>Phone:</strong> {formulaire.number}
                    </li>
                ))}
            </ul>
        </div>
  </footer>
  {/*/.footer-copyright*/}
  {/*footer-copyright end*/}
  {/* Include all js compiled plugins (below), or include individual files as needed */}
  {/*modernizr.min.js*/}
  {/*bootstrap.min.js*/}
  {/* bootsnav js */}
  {/* jquery.sticky.js */}
  {/* for progress bar start*/}
  {/* progressbar js */}
  {/* appear js */}
  {/* for progress bar end */}
  {/*owl.carousel.js*/}
  {/*Custom JS*/}


    </div>
  );
}

export default App;
