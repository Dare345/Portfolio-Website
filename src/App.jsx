import { useState, useEffect, useRef } from 'react'
import getData from './utils/getData'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PacmanLoader from 'react-spinners/PacmanLoader'
import Navbar from './components/Navbar'
import Darren from './assets/imgs/Darren_Yang.jpg'
import Stack from './components/Stack.jsx'
import Grid from './components/Grid.jsx'
import web1 from './assets/imgs/1.PNG';
import web2 from './assets/imgs/2.PNG';




const App = () =>{
  //State vars that obtains data for the courses I've taken
  const [loadedAbout, setLoadedAbout] = useState(false);
  const [about, setAbout] = useState();
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  useEffect( () =>{
    //get the data from the Ischool API
    getData('about/').
    then((json)=>{
      setAbout(json);
      setLoadedAbout(true);
    })
  }, [] );
  if (!loadedAbout) return (
    <div style={style}>
      <PacmanLoader id="load"
      color="#0091ff"
      size={50}
      />
    </div>
  );
  


  return(
    <div className="container" data-bs-spy="scroll" data-bs-target="#list-example" height="100%" overflow-y="scroll" tabIndex="0" >
      <header>
        {/* Navigation bar to direct user to different section of the webpage */}
        <Navbar nav={{name: 'Darren Yang', about:"#about", major:"#major",
        projects:"#projects", contact:"#contact",courses:"#courses"
        }}/>
      </header>

        <h2>Welcome to my Portfolio Website!</h2>

        <div id="about" >
          <div className="box">
            <img src={Darren} alt="Darren" ></img>
              <div>
                <h1>Darren Yang</h1>
                <h3>Information Technology <br/>Intern</h3>
                <p>
                  Hello, I am a 3rd year Computing & Infomation Technology at
                  Rochester Institute of Technology and a multilingual speaker
                  with a interest in web development and networking. I am currently
                  looking to join a company that values innovation and continuous
                  learning. I’m passionate about continuous learning and innovation, 
                  and I’m excited about the chance to contribute to meaningful projects 
                  while gaining valuable industry experience. 

                  Feel free to explore my portfolio to learn more about my projects. 
                  Let’s connect if you’re looking for a motivated and forward-thinking 
                  intern to join your team!
                </p>
              </div>
          </div>
        </div>

        <div id="major" >
          <h2>About My Major</h2>
          <p>
            The Computing & Information Technology (CIT) major at Rochester Institute of Technology 
            (RIT) is a comprehensive education that blends technical skills with 
            a strong understanding of business and management principles. The program covers a wide 
            range of subjects, including programming, networking, system administration, database management, 
            cybersecurity, and software development, preparing students for the rapidly changing IT landscape. 
            Students can specialize in areas like network administration, information security, or cloud computing, tailoring their education to specific career goals. With 
            access to cutting-edge facilities and a strong focus on experiential learning, the CIT program at RIT 
            prepares graduates for a variety of IT roles, such as system analysts, software developers, and IT managers, 
            and positions them well for success in the technology sector.
          </p>
        </div>

        <div id="courses" >
          <h2>Relevant Courses</h2>
          <Stack/>
        </div>

        <div id="projects" >
          <h2>Projects</h2>
          <Grid images={{web1:web1, web2:web2}}/>
        </div>
      

      <footer>
        <div id="contact" >
          <h2>Contact</h2>
          <ul>
            <li><a href="mailto:ydarren615@gmail.com">ydarren615@gmail.com</a></li>
            <li><a href="tel:3475678767">(347)-567-8767</a></li>
            <li><a href="https://github.com/Dare345/Projects">https://github.com/Dare345/Projects</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}


export default App
