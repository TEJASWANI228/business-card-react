import {StrictMode} from 'react'
import './MainContent.css'
import me from './assets/me.jpeg';
import githubIcon from './assets/github-icon.png';
import leetcodeIcon from './assets/leetcode-icon.png';
import hackerrankIcon from './assets/hackerank-icon.png';
import sololearnIcon from './assets/sololearn-icon.png';

export default function MainContent() {
    return (
        <StrictMode>

           <div className='container'>
              <img src={me} alt="Main Image" className="main-img" />
           </div>
           <div className='sub-container'>
              <h2 className="name">Tejaswani Yadav</h2>
              <h4 className="role">Full Stack Developer</h4>
              <div className="connect">
                <a href ="mailto:tejaswani.yadav@1704@gmail.com" className="mail">Email</a>
                <a href="https://www.linkedin.com/in/tejaswani-yadav-921694380/" className="linkedin">LinkedIn</a>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <p>I am an aspiring full-stack developer. I am constantly learning and adopting new technologies and knowledge related to my future career.</p>
                </div>
                <div className="interests">
                    <h3>Interests</h3>
                    <p>I am curious about Artificial Intelligence & Machine Learning. Full-Stack Web Development. Open Source Contributions. UI/UX Design. Problem Solving.</p>
                </div>
              </div>
              <div className='footer'>
                <a href="https://github.com/TEJASWANI228" className="github"><img src={githubIcon} alt="GitHub" /> </a>
                <a href="https://leetcode.com/u/tejaswani228/" className="leetcode"><img src={leetcodeIcon} alt="Leetcode" /></a>
                <a href="https://www.hackerrank.com/profile/tejaswani_yadav1" className="hackerrank"><img src={hackerrankIcon} alt="Hackerrank" /></a>
                <a href="https://www.sololearn.com/en/profile/35022536" className="sololearn"><img src={sololearnIcon} alt="Sololearn" /></a>

              </div>
        </StrictMode>
    )
}