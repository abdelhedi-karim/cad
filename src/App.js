import React, { useState, useEffect } from 'react';

import './style.css';
import './bootsnav.css';
import './bootstrap.min.css';
import './font-awesome.min.css';
import './animate.css';
import './owl.carousel.min.css';
import './owl.theme.default.min.css';
import './responsive.css';
import { FaCheckCircle, FaSpinner, FaGlobe } from 'react-icons/fa'; // Importing icons from react-icons

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

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
    <div className="App">
    <>
  <header className="top-area">
    <div className="header-area">
      {/* Start Navigation */}
      <nav className="navbar navbar-default bootsnav navbar-fixed ">
        <div className="container">
          {/* Start Header Navigation */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <i className="fa fa-bars" />
            </button>
           <img className="logoo" src='https://res.cloudinary.com/dqmhtibfm/image/upload/c_scale,w_100/v1727988019/384192148_175238912294511_1146351560083594850_n_t5inpi.jpg'/>
          </div>
          {/*/.navbar-header*/}
          {/* End Header Navigation */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse menu-ui-design"
            id="navbar-menu"
          >
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className=" smooth-menu active" />
              <li className=" smooth-menu">
                <a href="#education">Procédures</a>
              </li>
              <li className="smooth-menu">
                <a href="#skills">Nos services</a>
              </li>
              <li className="smooth-menu">
                <a href="#portfolio">Immigrer</a>
              </li>
              <li className="smooth-menu">
                <a href="#contact">contact</a>
              </li>
            </ul>
            {/*/.nav */}
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/*/.container*/}
      </nav>
      {/*/nav*/}
      {/* End Navigation */}
    </div>
    {/*/.header-area*/}
    <div className="clearfix" />
  </header>
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
            Laissez un professionnel prendre soin de votre projet d'immigration ainsi que votre atterrissage, afin que vous puissiez profiter pleinement de votre nouveau départ.</p>
            <a href="assets/download/browney.txt" download="">
            Postuler maintenant
            </a>
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
  {/*about start */}
  <section id="about" className="about">
    <div className="section-heading text-center">
      <h2>about me</h2>
    </div>
    <div className="container">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <div className="single-about-txt">
              <h4>
              🚀 Opportunités d'emploi à l'international ! 🌍 <br/>
✅Vous rêvez de travailler au Canada, en Australie, en Allemagne (Ausbildung), en Suisse (Ausbildung), en Finlande, au Danemark, en Norvège, en Irlande ou en Belgique ? Nous sommes là pour vous aider à réaliser ce rêve ! ✈️ <br/>
✅Chez CAD GO Services, nous sommes spécialisés dans le placement à l'international. Grâce à notre expertise, nous vous accompagnons dans toutes les démarches pour obtenir un emploi ou une formation à l’étranger. <br/>
📍 Nos agences :  <br/>
Sfax : Taniour Km 1, devant CNAM <br/>
Tunis (prochainement) : L'Aouina, Cité les Palmiers <br/>
📞 Contactez-nous : <br/>
92602851 <br/>
92917603 <br/>
🔥N’attendez plus, saisissez cette opportunité et faites le premier pas vers votre nouvelle carrière à l’étranger ! 🌟 
              </h4>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>phone</h3>
                    <p>+ 216 92 602 851</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>email</h3>
                    <p>cadgocanadago@gmail.com</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div> 

          <div>
     
    </div>


          <div className="col-sm-offset-1 col-sm-5">
            <div className="single-about-img">
              <img
                src="https://res.cloudinary.com/dqmhtibfm/image/upload/v1727988019/384192148_175238912294511_1146351560083594850_n_t5inpi.jpg"
                alt="profile_image"
              />
              {/* <div className="about-list-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" aria-hidden="true" />
                    </a>
                  </li>
                
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
              
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
              
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
              
                </ul>
              
              </div> */}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 
  <section id="education" className="education">
  
   
  <div className="container">
    <div className="education-horizontal-timeline">
      <div className="row">
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>Dossiers validés
              </h2>
            </div>
           
            <h1>  <FaCheckCircle style={{ color: 'green', marginRight: '30px' }} />  + {count1}</h1>
            {/*/.timeline*/}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>Dossiers en cours
              </h2>
             
            
              {/*/.timeline-content*/}
            </div>
            <h1> <FaSpinner style={{ color: 'orange', marginRight: '30px' }} />  +  {count2}</h1>
            {/*/.timeline*/}
          </div>
        </div>
        <div className="col-sm-4">
          <div className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>Partenaires à l'étranger
              </h2>
            
            </div>
            <h1>
            <FaGlobe style={{ color: 'blue', marginRight: '30px' }} />  + {count3}</h1>
            {/*/.timeline*/}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {/*/.about*/}
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
              <div className="experience-time">
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
                 
                  <p className="description">
                  Nous traitons et envoyons votre candidature à notre intermédiaire en 24h. Inscrivez vous maintenant pour lancer votre carrière au Canada !
                  </p> 
                  <div className="header-text">
           
           
           <a href="assets/download/browney.txt" download="">
           <center> Postuler maintenant</center>
            </a>
          </div>
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
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
                 
                  <p className="description">
                  Passez une entrevue avec notre agence intermédiaire.<br /> Nous optimiserons et publierons votre profil auprès d’employeurs canadiens.
                  </p>
                  <div className="header-text">
           
           
           <a href="assets/download/browney.txt" download="">
           <center> Postuler maintenant</center>
            </a>
          </div>
                </div>
                {/*/.timeline-content*/}
              </div>
              {/*/.timeline*/}
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
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
                 
                  <p className="description">
                  Réussissez l’examen et publiez votre profil auprès d’employeurs canadiens <br />pour 460 DT. Votre opportunité canadienne vous attend !
                  </p>
                  <div className="header-text">
           
           
           <a href="assets/download/browney.txt" download="">
           <center> Postuler maintenant</center>
            </a>
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
                <span className="progressText">Dépôt de demande de résidence permanente en ligne</span>
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
                <span className="progressText">Programmes de nomination provinciale</span>
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
                <span className="progressText">Entrée express au Canada</span>
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
                <span className="progressText">Programme de l’expérience du Québec : Résidence permanente</span>
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
                <span className="progressText">Résidence permanente pour étrangers et travailleurs étrangers au Canada</span>
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
                <span className="progressText">Parrainage d’épouse, époux, parents, membres de la famille</span>
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
                <span className="progressText">Révision administrative en cas de refus de demande de résidence permanente.</span>
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
                <span className="progressText">Super visa pour les parents</span>
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
</>

    </div>
  );
}

export default App;
