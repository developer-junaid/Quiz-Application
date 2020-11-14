import React from 'react';
import './../styles/css/footer.css';

const Footer = () => {
    return(
        <div className='footer-container' >
            <h1>Developed by : Junaid Qureshi</h1>
            <div className="icons-container">
                <a title='portfolio' href="https://developer-junaid.web.app/" rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-address-card portfolio"></i>
                </a>
                <a title='github' href="https://github.com/developer-junaid/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-github-square github"></i>
                </a>
                <a title='linkedin' href="https://www.linkedin.com/in/developer-junaid/" rel="noopener noreferrer" target="_blank">
                    <i className="fab fa-linkedin linkedin"></i>
                </a>
             </div>
        </div>
    )
}

export default Footer
