import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import harsgur from "../assets/img/newimg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "MERN Developer", "Data Scientist" ];
  const period = 600;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Harshit`} </h1>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "MERN Developer", "Data Scientist" ]'><span className="wrap">{text}</span></span></h1>
                  <p style={{color:"white"}}>A MERN stack developer expert in making interactive websites with
                     interactive User interface using tailwind CSS, Redux and bootstrap.
                     A prefinal year engineering student pursuing computer science
                     and engineering with specialization in Data Science.
                     Interested in changing big ideas in to reality by constant hard work and
                    smart approach.</p>
                  <button  onClick={() => console.log('connect')}><a style={{textDecoration:"none" , color:"white"}} href="https://drive.google.com/file/d/1zB8jq7ITi4NuGxCDemF_E9HCBxobE5Ve/view?usp=sharing" target="_blank">My Curriculum Vitae</a><ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={harsgur} style={{height:"500px",width:"500px",borderRadius:"1000px",borderBottomColor:"white",border:"6px solid",marginBottom:"50px"}} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}