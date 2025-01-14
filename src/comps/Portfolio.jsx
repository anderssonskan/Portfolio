import './Portfolio.css/';
import Timeline from './Timeline';

function Portfolio() {
    return (
        <>
            <div className='myName'>
                <h1>EMMA ANDERSSON, <br />FRONTEND DEVELOPER</h1>
                <p></p>
            </div>
            <div>
                <Timeline />
            </div>
            <div className='skills-title'>
                <h2>Skills</h2>
            </div>
            <div className="wrapper">
                <div className="git">
                    <img className='git-img' src="src/assets/git-icon-logo-svgrepo-com.svg" alt="GitLogo" />
                    <p className='git-text'>Git</p>
                </div>
                <div className="html">
                    <img className='html-img' src="src/assets/html5-svgrepo-com (1).svg" alt="HTMLLogo" />
                    <p className='html-text'>HTML</p>
                </div>
                <div className="react">
                    <img className='react-img' src="src/assets/react-svgrepo-com.svg" alt="ReactLogo" />
                    <p className='react-text'>React</p>
                </div>
                <div className="javascript">
                    <img className='javascript-img' src="src/assets/javascript-155-svgrepo-com.svg" alt="JavascriptbLogo" />
                    <p className='javascript-text'>Javascript</p>
                </div>
                <div className="typescript">
                    <img className='typescript-img' src="src/assets/typescript-svgrepo-com.svg" alt="typescriptLogo" />
                    <p className='typescript-text'>Typescript</p>
                </div>
                <div className="figma">
                    <img className='figma-img' src="src/assets/icons8-figma.svg" alt="FigmaLogo" />
                    <p className='figma-text'>Figma</p>
                </div>
                <div className="ux">
                    <img className='ux-img' src="src/assets/design-education-painting-svgrepo-com.svg" alt="UX/UILogo" />
                    <p className='ux-text'>UX/UI</p>
                </div>
                <div className="css">
                    <img className='css-img' src="src/assets/css3-02-svgrepo-com (2).svg" alt="cssLogo" />
                    <p className='css-text'>CSS</p>
                </div>
                <div className="node">
                    <img className='node-img' src="src/assets/node-svgrepo-com (1).svg" alt="nodeLogo" />
                    <p className='node-text'>Node.js</p>
                </div>
                <div className="aurelia">
                    <img className='aurelia-img' src="src/assets/aurelia-svgrepo-com (1).svg" alt="aureliaLogo" />
                    <p className='aurelia-text'>Aurelia</p>
                </div>
            </div>
        </>
    )
}

export default Portfolio;