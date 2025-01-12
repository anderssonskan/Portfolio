import './Portfolio.css/';

function Portfolio() {
    return(
       <>
            <div className='skills-title'>
                <h2>Skills</h2>
            </div>
            <div className="wrapper">
                <div className="github">
                    <img className='github-img' src="src/assets/github-mark-white.png" alt="GitHubLogo" />
                    <p className='github-text'>GitHub</p>
                </div>
                <div className="html">
                    <img className='html-img' src="src/assets/html5-svgrepo-com (1).svg" alt="GitHubLogo" />
                    <p className='html-text'>HTML</p>
                </div>
                <div className="react">
                    <img className='react-img' src="src/assets/react-svgrepo-com (1).svg" alt="GitHubLogo" />
                    <p className='react-text'>React</p>
                </div>
                <div className="javascript">
                    <img className='javascript-img' src="src/assets/icons8-javascript (1).svg" alt="GitHubLogo" />
                    <p className='javascript-text'>Javascript</p>
                </div>
                <div className="typescript">
                    <img className='typescript-img' src="src/assets/icons8-typescript (1).svg" alt="typescriptLogo" />
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
            </div>
       </>
    )
}

export default Portfolio;