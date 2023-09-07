import { Navbar, Container, Nav} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/pot.jpg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar=()=>{
  const [activeLink, setActiveLink]=useState('home');
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const onScroll =()=>{
      if(window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll",onScroll);
    return ()=> window.removeEventListener("scroll",onScroll);  },[])
    const onUpdateActiveLink=(value)=>{
      setActiveLink(value);
    }
    return(
        <Navbar expand="lg" style={{background:"black"}}>
    <Container>
      <Navbar.Brand href="#home">
      <img src={logo}style={{height:"50px",width:"50px"}} alt='Logo'/>
      <a style={{color:"white"}}>Harshit Saxena</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
      <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" style={{marginLeft:"160px"}}>
          <Nav.Link href="#home" className={activeLink=== 'home'? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#projects" className={activeLink=== 'projects'? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Portfolio</Nav.Link>
          <Nav.Link href="skills" className={activeLink=== 'skills'? 'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Contact me</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/harshit-saxena-35b70b211/' target="_blank"><img src={navIcon1} alt=''/></a>
                <a href='#'target="_blank"><img src={navIcon2} alt=''/></a>
                <a href='https://www.instagram.com/harshitsaxena_73/' target="_blank"><img src={navIcon3} alt=''/></a>
            </div>
            <button className='vvd' onClick={()=>console.log("connect")}><span>Let's connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}