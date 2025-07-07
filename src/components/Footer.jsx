import IconToggle from './IconToggle'

import gmailWhiteIcon from  '/icons/gmail-white.svg'
import gmailColorIcon from '/icons/gmail-color.svg'

import linkedinWhiteIcon from '/icons/linkedin-white.svg'
import linkedinColorIcon from '/icons/linkedin-color.svg'

import githubWhiteIcon from '/icons/github-white.svg'
import githubColorIcon from '/icons/github-color.svg'

import facebookWhiteIcon from '/icons/facebook-white.svg'
import facebookColorIcon from '/icons/facebook-color.svg'

function Footer() {
  return (
   <div className="contact-me">
      <p>Connect with me:</p>
      <a href="mailto:arijandemaj01@gmail.com" target="_blank" className="connect-apps">
        <IconToggle imgSrc={gmailWhiteIcon} toggleImgSrc={gmailColorIcon} altText="gmail-logo" />
      </a>
      <a href="https://www.linkedin.com/in/arijan-demaj-0a2a36222" target="_blank" className="connect-apps">
        <IconToggle imgSrc={linkedinWhiteIcon} toggleImgSrc={linkedinColorIcon} altText="linkedin-logo" />
      </a>
      <a href="https://github.com/arijandemaj" target="_blank" className="connect-apps">
        <IconToggle imgSrc={githubWhiteIcon} toggleImgSrc={githubColorIcon} altText="github-logo" />
      </a>
      <a href="https://www.facebook.com/arijan.demaj" target="_blank" className="connect-apps">
        <IconToggle imgSrc={facebookWhiteIcon} toggleImgSrc={facebookColorIcon} altText="facebook-logo" />
      </a>
    </div>
  );
}

export default Footer;
