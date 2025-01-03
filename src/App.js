import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react'; // Import the QRCodeSVG component
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
const images1 = [
  "https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_800,w_1920/v1727988226/what-you-need-to-know-about-the-Schengen-Zone_atog8r.jpg",
 "https://res.cloudinary.com/dqmhtibfm/image/upload/v1727986503/welcome-banner_jo1wkb.jpg",
 ];
const images3 = [
  "https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_150/v1727989860/360_F_104479185_98OwiNHENKbunQqpf283ZCQN9PJBPoDP_nzp3mh.webp",
  "https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_97,w_150/v1727990013/360_F_65124908_UpNHzTdQn2HNAIT8yYqybMQeGfsRmVc7_yn5cae.webp",
  "https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_97,w_150/v1727990013/flag-of-the-european-union-eu-with-a-grunge-texture_t4vday.webp",
];
function App() {
  const url = "https://cad-liart.vercel.app/";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [formulaires, setFormulaires] = useState([]);
  const [currentImages, setCurrentImages] = useState(images3);
  const [currentImage1, setCurrentImage1] = useState(0);
    const [error, setError] = useState('');
    const navigateToURL = () => {
      const url =
        "https://www.facebook.com/profile.php?id=100094252105697&mibextid=wwXIfr&rdid=ItvhR5pYzpcCgQzQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FDEjQrTosDEp6PC1h%2F%3Fmibextid%3DwwXIfr";
      window.location.href = url;
    };
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage1((prevImage) => (prevImage + 1) % images1.length);
      }, 2000);
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  
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
  const nextSlide1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 2) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide1, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);
  const nextSlide2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 3) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide2, 3000); // Change slide every 3 seconds
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
    const target3 = 20;
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



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first]; // Rotate images by moving the first to the end
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);
  return (
    <div  >
 
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
          <Nav.Link style={{
              animation: "pulse 2s infinite", // Adds pulsing animation
              textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
          }}  href="#education">Procédures</Nav.Link>
          <Nav.Link style={{
              animation: "pulse 2s infinite", // Adds pulsing animation
              textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
          }}  href="#skills">Nos services</Nav.Link>
          <Nav.Link style={{
              animation: "pulse 2s infinite", // Adds pulsing animation
              textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
          }}  href="#Nos agences">Nos agences</Nav.Link>
          <Nav.Link style={{
              animation: "pulse 2s infinite", // Adds pulsing animation
              textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
          }}  href="#portfolio">Immigrer</Nav.Link>
          <Nav.Link style={{
              animation: "pulse 2s infinite", // Adds pulsing animation
              textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
          }}  href="#contact">Contact</Nav.Link>
          <Nav.Link style={{
              animation: "pulse 2s infinite", // Adds pulsing animation
              textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
          }}  href="./Qr">QR</Nav.Link>
        </Nav>
        {/* Close Button at the Bottom */}
       
      </Navbar.Collapse>
    </Navbar>
  {/* /.top-area*/}
  {/* top-area End */}
  {/*welcome-hero start */}
  <section id="welcome-hero" 
   className="welcome-hero"
   style={{
     backgroundImage: `url(${images1[currentImage1]})`,
   }}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 style={{
             color: "white",
             fontSize: "8rem",
             textShadow: "0 0 8px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
             animation: "pulse 2s infinite", // Adds pulsing animation
          }}>CAD GO</h1>
        <div className="image-container">
      {currentImages.map((src, index) => (
        <div className="image-card" key={index}>
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
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
  <section id="about" className="about" >
    <div className="section-heading text-center">
      <h1
      style={{ color: 'blue' ,
        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
        animation: "pulse 2s infinite", // Adds pulsing animation
        fontSize: "5rem",
     }}>à propos de nous</h1>
    </div>
    <div className="container">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <div className="single-about-txt">
           
              <div className="row">
              <h4  style={{ color: 'blue' ,
                 
         // Adds pulsing animation
                  fontSize: "2.8rem",
               }}>
              🌍 Opportunités d'emploi à l'international !  <br/>
                
              </h4>
           <center>

           
               <img 
               style={{
                width: "40px",
                height: "40px",
               marginLeft : "0px",
               marginBottom: "20px",
               marginTop: "20px"
              
               }}
               src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_150/v1727989860/360_F_104479185_98OwiNHENKbunQqpf283ZCQN9PJBPoDP_nzp3mh.webp' />{" "}
                <img 
               style={{
                width: "40px",
                height: "40px",
                marginLeft : "30px",
                marginBottom: "20px",
                    marginTop: "20px"
               }}
               src='https://res.cloudinary.com/dqmhtibfm/image/upload/v1727990013/360_F_65124908_UpNHzTdQn2HNAIT8yYqybMQeGfsRmVc7_yn5cae.webp' />{" "}
                <img 
               style={{
                width: "40px",
                height: "40px",
                marginLeft : "30px",
                marginBottom: "20px" ,
                    marginTop: "20px"
               }}
               src='https://res.cloudinary.com/dqmhtibfm/image/upload/v1727990013/flag-of-the-european-union-eu-with-a-grunge-texture_t4vday.webp' />{" "}
                <img 
               style={{
                width: "40px",
                height: "40px",
                marginLeft : "30px",
                marginBottom: "20px" ,
                    marginTop: "20px"
               }}
               src='https://res.cloudinary.com/dqmhtibfm/image/upload/v1734985910/australia-flag__46117.1639690361.1280.1280_i2pkis.webp' />
               </center>
                <h4  style={{ color: 'blue' ,
                 
         // Adds pulsing animation
                  fontSize: "2.8rem",
               }}>
             
               Vous rêvez de travailler au Canada, en Australie, en Allemagne (Ausbildung), en Suisse (Ausbildung), en Finlande, au Danemark, en Norvège, en Irlande ou en Belgique  🌍  
              </h4>
              <div className="col-sm-4">
                  <div className="single-about-add-info">
                  <div 
                  style={{
                    display: "flex",
                    alignItems: "center", // Corrected to camelCase
                    justifyContent: "flex-start", // Corrected to camelCase
                   
                  }}>
                      <img onClick={navigateToURL} style={{marginLeft : "45px"}} src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_60/v1735114634/360_F_532200355_odKN9Ou3WB6iHWJTFIElFtJbTuzJspY6-removebg-preview_nc1ki9.png'  /> 
                      <img style={{marginLeft : "50px"}} src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_60/v1735114635/360_F_532200382_KL6CDaZcusiZO9nO5TD7hWQEz8Ko6BZB-removebg-preview_isgezl.png' /> 
                      <img style={{marginLeft : "30px"}} src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,h_100,w_100/v1735115241/tiktok-logo-pictures-98vku1w29x2enwhu-removebg-preview_gma1m0.png' />
                     </div>
                    <h3  style={{ color: 'blue' ,
                        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                     
                        fontSize: "2rem",
                      }}>📞 {' '} phone</h3>
                    <p  style={{ color: 'blue' ,
                        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                   
                        fontSize: "2rem",
                     }}>+ 216 92 602 851</p> <br/>
                     <p  style={{ color: 'blue' ,
                        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                   
                        fontSize: "2rem",
                     }}>+ 216 92 602 851</p> <br/>
                      <h3  style={{ color: 'blue' ,
                        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                   
                        fontSize: "2rem",
                     }}>📧 email</h3> <br/>
                    <p  style={{ color: 'blue' , 
                        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                     
                        fontSize: "2rem",
                     }}>cadgocanadago@gmail.com</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div >
              <img 
              style={{
                animation: "pulse 2s infinite", // Adds pulsing animation
                textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
              }}
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
<centre><section id="stat" className="education"  >
  
   
  <div className="container">
    <div className="education-horizontal-timeline">
      <div className="row">
     
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
           <center> <h2 style={{ 
             fontSize: "4.5rem", // Makes the text larger
             color: "green",
             textShadow: "0 0 8px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.6)", // Adds glow
             animation: "pulse 2s infinite", // Adds pulsing animation
           }} >+{count1} Dossiers <br/> validés <FaCheckCircle style={{ color: 'green', marginRight: '10px' }} />
            </h2></center>
            <center> <div className="carousel"> 
     
     <img className="carousel-image"
     style={{
      borderRadius: "10%", // Correct camelCase property
    }} src={"https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_200/v1734698698/DALL_E_2024-12-20_13.04.44_-_An_illustrative_image_representing_Dossiers_valid%C3%A9s___A_stack_of_neatly_organized_and_stamped_documents_symbolizing_approval_with_a_prominent_green_sgiovs.webp"}  />
   
   </div></center>
              
            </div>
           
            {/*/.timeline*/}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
            <center>  <h2 style={{
             fontSize: "4.5rem", // Makes the text larger
             color: "orange",
             textShadow: "0 0 8px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6)", // Adds glow
             animation: "pulse 2s infinite", // Adds pulsing animation
            }}>+{count2} Dossiers en <br/> cours <FaSpinner style={{ color: 'orange', marginRight: '10px' }} />
              </h2></center>
             
              <center>   <div className="carousel"> 
     
     <img className="carousel-image"
     style={{
      borderRadius: "10%", // Correct camelCase property
    }} src={"https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_200/v1734698697/DALL_E_2024-12-20_13.04.47_-_An_illustrative_image_representing_Dossiers_en_cours___A_pile_of_open_files_and_papers_with_a_progress_bar_or_hourglass_symbolizing_ongoing_work._The_vq8nir.webp"}  />
   
   </div></center>
              
            </div>
           
            {/*/.timeline*/}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
            <center>  <h2 style={{ 
               fontSize: "4.5rem", // Makes the text larger
               color: "blue",
               textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
               animation: "pulse 2s infinite", // Adds pulsing animation
             }}>+{count3} Partenaires <br/>à l'étranger <FaGlobe style={{ color: 'blue', marginRight: '10px' }} />
              </h2> </center>
            
            </div>
            <center> <div className="carousel"> 
     
            <img
  className="carousel-image"
  style={{
    borderRadius: "10%", // Correct camelCase property
  }}
  src="https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_200/v1734984255/DALL_E_2024-12-23_21.03.22_-_An_elegant_image_illustrating_international_partnerships_featuring_a_globe_surrounded_by_interconnected_hands_or_people_from_diverse_cultures._The_ba_zr3khg.webp"
/>

   
   </div></center>
          </div>
        </div>
      </div>
    </div>
  </div>
</section></centre>
 
  {/*/.about*/} 
  <section id="Nos agences" className="education" >
    <div className="section-heading text-center">
      <h2 
       style={{ color: 'blue' ,
        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
        animation: "pulse 2s infinite", // Adds pulsing animation
        fontSize: "5rem",
     }}>Nos agences
      </h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time"  style={{ color: 'blue' ,
                textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                
              }}>
                <h2 style={{
                       fontSize: "2.1rem",
                }}>📍 Sfax : Taniour Km 1<br/> devant CNAM
                </h2>
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description"  style={{ color: 'blue' ,
                    textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                    fontSize: "2.1rem",
                  }}>
                 
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
              <div className="experience-time"  style={{ color: 'blue' , 
          
                textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
               }}>
                <h2
                 style={{
                  fontSize: "2.1rem",
           }}>📍 Tunis l aouina cités les palmiers devant amen bank <br />immeuble Omar 1 ère étage
                </h2>
               
              </div>
              {/*/.experience-time*/}
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true" />
                <span className="single-timeline-horizontal" />
              </div>
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description"  style={{ color: 'blue' , 
                    
                    textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                    fontSize: "2.1rem",
                   }}>
                
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
  <section id="education" className="education"  >
    <div className="section-heading text-center">
      <h2 
       style={{ color: 'blue' ,
        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
        animation: "pulse 2s infinite", // Adds pulsing animation
        fontSize: "5rem",
     }}>Procédures
      </h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time" style={{ color: 'blue' ,
                   fontSize: "2.5rem", // Makes the text larger
                 textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                 animation: "pulse 2s infinite", // Adds pulsing animation
               }}>
                <h1 
                 style={{
                  fontSize: "3.1rem",
           }}>Votre demande
                </h1>
              </div>
             
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description" style={{ color: 'blue' ,
                   
                     fontSize: "2rem",
                   }}>
                  Nous traitons et envoyons votre candidature à notre intermédiaire en 24h. Inscrivez vous maintenant pour lancer votre carrière au Canada !
                  </p> 
                  <div className="header-text">
           
           
                  <div className="card-container">
      {/* Clickable link to toggle the form */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScIM1y0guqfeL5Oe0hpOkI2aH6jBZtqiYoVUIB_44FppH3GgA/viewform?usp=dialog"  className="card-link">
        {showForm ? 'Close Form' : 'Postuler maintenant'} {/* Change text based on form visibility */}
      </a>

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
              <div className="experience-time" style={{ color: 'blue' ,
                   fontSize: "2.5rem", // Makes the text larger
                 textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                 animation: "pulse 2s infinite", // Adds pulsing animation
               }}>
                <h1 
                style={{
                  fontSize: "3.1rem",
           }}>Recrutement
                </h1>
               
              </div>
             
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description" style={{ color: 'blue' ,
                   
                     fontSize: "2rem",
                   }}>
                  Passez une entrevue avec notre agence intermédiaire. Nous optimiserons et publierons votre profil auprès d’employeurs canadiens.
                  </p>
                  <div className="header-text">
           
           
                  <div className="card-container">
      {/* Clickable link to toggle the form */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScIM1y0guqfeL5Oe0hpOkI2aH6jBZtqiYoVUIB_44FppH3GgA/viewform?usp=dialog"  className="card-link">
        {showForm ? 'Close Form' : 'Postuler maintenant'} {/* Change text based on form visibility */}
      </a>

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
              <div className="experience-time" style={{ color: 'blue' , 
                  
                 textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
                 animation: "pulse 2s infinite", // Adds pulsing animation
               }}>
                <h1 
                style={{
                  fontSize: "3.1rem",
           }}>Votre profil en ligne !
                </h1>
              
              </div>
             
              <div className="timeline">
                <div className="timeline-content">
                 
                  <p className="description" style={{ color: 'blue' ,
                     
                     fontSize: "2rem",
                  }}>
                  Réussissez l’examen et publiez votre profil auprès d’employeurs canadiens <br /> Votre opportunité canadienne vous attend !
                  </p>
                  <div className="header-text">
           
           
                  <div className="card-container">
      {/* Clickable link to toggle the form */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScIM1y0guqfeL5Oe0hpOkI2aH6jBZtqiYoVUIB_44FppH3GgA/viewform?usp=dialog"  className="card-link">
        {showForm ? 'Close Form' : 'Postuler maintenant'} {/* Change text based on form visibility */}
      </a>

      
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
        <h2 
         style={{ color: 'blue' ,
          textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
          animation: "pulse 2s infinite", // Adds pulsing animation
          fontSize: "5rem",
       }}>Nos services</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="single-skill-content">
              <div className="barWrapper">
                <h2 className="progressText" style={{ color: 'blue' ,
                    
                 }}><FaCheckCircle  /> {" "} Dépôt de demande de résidence permanente en ligne</h2>
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
                <h2 className="progressText" style={{ color: 'blue' ,
                     
                }}><FaCheckCircle  /> {" "} Programmes de nomination provinciale</h2>
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
              <h2 className="progressText" style={{ color: 'blue' ,
                   
              }}><FaCheckCircle  /> {" "}Résidence permanente pour étrangers et travailleurs étrangers au Canada</h2>
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
                <h2 className="progressText" style={{ color: 'blue' , 
                     
                 }}><FaCheckCircle  /> {" "}Programme de l’expérience du Québec : Résidence permanente</h2>
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
              <h2 className="progressText" style={{ color: 'blue' ,
                   
              }}><FaCheckCircle  /> {" "}Entrée express au Canada</h2>
                
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
                <h2 className="progressText" style={{ color: 'blue' ,
                     
                 }}><FaCheckCircle  /> {" "}Parrainage d’épouse, époux, parents, membres de la famille</h2>
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
                <h2 className="progressText" style={{ color: 'blue' ,
                     
                 }}><FaCheckCircle  /> {" "}Révision administrative en cas de refus de demande de résidence permanente.</h2>
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
                <h2 className="progressText" style={{ color: 'blue' ,
                     
                 }}><FaCheckCircle  /> {" "}Super visa pour les parents</h2>
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
        <h2 
         style={{ color: 'blue' ,
          textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
          animation: "pulse 2s infinite", // Adds pulsing animation
          fontSize: "5rem",
       }}>
        Immigrer</h2>
      </div>
      <center>
      <div 
                >
                      <img onClick={navigateToURL}  src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_300/v1734596037/IMG_4378_kivpco.jpg'  /> 
                      <img  src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_300/v1734596037/IMG_4381_e23fhl.jpg' /> 
                      <img  src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_300/v1734596037/IMG_4379_r7hh4y.jpg' />
                     </div>
                     </center>
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
  <section id="contact" className="contact" >
    <div className="section-heading text-center">
      <h2 
       style={{ color: 'blue' ,
        textShadow: "0 0 8px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)", // Adds glow
        animation: "pulse 2s infinite", // Adds pulsing animation
        fontSize: "5rem",
     }}>contact me</h2>
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
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Scan the QR Code</h1>
      <QRCodeSVG value={url} size={200} /> {/* Use QRCodeSVG */}
      <p>Scan the QR code to visit the link</p>
    </div>
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
