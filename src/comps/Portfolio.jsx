import './Portfolio.css';
import Timeline from './Timeline';

import gitIcon from '../assets/git-icon-logo-svgrepo-com.svg';
import htmlIcon from '../assets/html5-svgrepo-com (1).svg';
import reactIcon from '../assets/react-svgrepo-com.svg';
import jsIcon from '../assets/javascript-155-svgrepo-com.svg';
import tsIcon from '../assets/typescript-svgrepo-com.svg';
import figmaIcon from '../assets/icons8-figma.svg';
import uxIcon from '../assets/design-education-painting-svgrepo-com.svg';
import cssIcon from '../assets/css3-02-svgrepo-com (2).svg';
import nodeIcon from '../assets/node-svgrepo-com (1).svg';
import aureliaIcon from '../assets/aurelia-svgrepo-com (1).svg';
import devopsIcon from '../assets/azure-devops-svgrepo-com.png';
import photoshopIcon from '../assets/icons8-photoshop-100.png';
import illustratorIcon from '../assets/icons8-illustrator-100.png';
import salesforceIcon from '../assets/icons8-salesforce-100.png';
import slackIcon from '../assets/icons8-slack-100.png';

function Portfolio() {
    return (
        <>
            <div className='start'>
                <h1 className='myName'>EMMA HULTSTEN, <br />FRONTEND DEVELOPER</h1>
                <p className='fastInfo'><strong>Snabbfakta om mig:</strong><br></br> Jag målar/illustrerar och säljer original och posters via mitt egna företag. Jag är ledamot i min brf. Jag är en bra kompis och tackar sällan nej till AW!</p>
            </div>

            <div>
                <Timeline />
            </div>

            <div className='skills-title'>
                <h2>Skills</h2>
            </div>


            <div className="wrapper">
                <div className="photoshop">
                    <img className='photoshop-img' src={photoshopIcon} alt="PhotoshopLogo" />
                    <p className='photoshop-text'>Photoshop</p>
                </div>
                <div className="illustrator">
                    <img className='illustrator-img' src={illustratorIcon} alt="IllustratorLogo" />
                    <p className='illustrator-text'>Illustrator</p>
                </div>
                <div className="salesforce">
                    <img className='salesforce-img' src={salesforceIcon} alt="SalesforceLogo" />
                    <p className='salesforce-text'>Salesforce</p>
                </div>
                <div className="slack">
                    <img className='slack-img' src={slackIcon} alt="SlackLogo" />
                    <p className='slack-text'>Slack</p>
                </div>
                <div className="git">
                    <img className='git-img' src={gitIcon} alt="GitLogo" />
                    <p className='git-text'>Git</p>
                </div>
                <div className="html">
                    <img className='html-img' src={htmlIcon} alt="HTMLLogo" />
                    <p className='html-text'>HTML</p>
                </div>
                <div className="react">
                    <img className='react-img' src={reactIcon} alt="ReactLogo" />
                    <p className='react-text'>React</p>
                </div>
                <div className="javascript">
                    <img className='javascript-img' src={jsIcon} alt="JavascriptLogo" />
                    <p className='javascript-text'>JavaScript</p>
                </div>
                <div className="typescript">
                    <img className='typescript-img' src={tsIcon} alt="TypeScriptLogo" />
                    <p className='typescript-text'>TypeScript</p>
                </div>
                <div className="figma">
                    <img className='figma-img' src={figmaIcon} alt="FigmaLogo" />
                    <p className='figma-text'>Figma</p>
                </div>
                <div className="ux">
                    <img className='ux-img' src={uxIcon} alt="UXUILogo" />
                    <p className='ux-text'>UX/UI</p>
                </div>
                <div className="css">
                    <img className='css-img' src={cssIcon} alt="CSSLogo" />
                    <p className='css-text'>CSS</p>
                </div>
                <div className="node">
                    <img className='node-img' src={nodeIcon} alt="NodeLogo" />
                    <p className='node-text'>Node.js</p>
                </div>
                <div className="aurelia">
                    <img className='aurelia-img' src={aureliaIcon} alt="AureliaLogo" />
                    <p className='aurelia-text'>Aurelia</p>
                </div>
                <div className="devops">
                    <img className='devops-img' src={devopsIcon} alt="DevOpsLogo" />
                    <p className='devops-text'>Azure DevOps</p>
                </div>
            </div>
        </>
    );
}

export default Portfolio;

