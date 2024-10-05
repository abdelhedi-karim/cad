
import './style.css';
import './bootsnav.css';
import './bootstrap.min.css';
import './font-awesome.min.css';
import './animate.css';
import './owl.carousel.min.css';
import './owl.theme.default.min.css';
import './responsive.css';


function App() {
  return (
    <div className="App">
    <>
  {/* meta data */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
  {/*font-family*/}
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&subset=devanagari,latin-ext"
    rel="stylesheet"
  />
  {/* title of site */}
  
 
			
			

  {/*[if lte IE 9]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]*/}
  {/* top-area Start */}
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
      <h4>
      Pensiez-vous s’établir au Canada pour y travailler…"Bienvenue canada immigration"se  spécialise dans le soutien en matière d’immigration dû essentiellement à la complexité de la réglementation, et au besoin d’être représenté par un professionnel. <br /> {' '} <br />
 

 Ce sont autant de décisions importantes de notre vie courante, qui amèneront appréhensions et, questionnements, qui nous exigeront réflexion, moyens financiers, mais surtout un savoir et un savoir- faire auquel chacun de nous n’est , ni  forcément  préparé, ni outillé. <br /> {' '} <br />
 
 Le but ultime de Bienvenue Canada immigration est de vous offrir les meilleurs conseils et services afin de vous assurer  : <br /> {' '} <br />
 
 - La meilleure option de vous établir au Canada, eu égard à votre  profil,  à travers l’analyse de votre admissibilité conformément aux grilles de sélection et à la réglementation en vigueur.<br /> {' '} <br />
 - De réduire les délais de traitements des demandes, engendrés par des dossiers incomplets ou complexes,<br /> {' '} <br />
 - De vous représenter, au meilleur de nos connaissances et de notre expertise,  auprès des instantes administratives et judiciaires fédérales ou provinciales.
      </h4>
        {/*/.gallery-content*/}
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
