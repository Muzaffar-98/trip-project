import './index.css' 
import logo from './img/Logo.png';
import facebook from './img/facebook.svg';
import google from './img/google.svg';
import apple from './img/apple.svg';
import { Link } from 'react-router-dom';

export function CreateAcc() {
  return (
    <div className="create-container">
      <aside></aside>
      <main className='create-main'>
        <div className="appLogoContainer">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h1>Create an account to start trip planning</h1>
        <form>
          <div>
            {" "}
            <label htmlFor="">Email</label>
            <input type="text" placeholder="someone@example.com" />
          </div>
        </form>
        
        <button className="createButton">Start trip planning</button>
        <p className='center-text'>Sign up with</p>
        <div className="logosContainer">
          <button className="createLogo">
            <img src={google} alt="google" />
          </button>
          <button className="createLogo">
            <img src={apple} alt="apple" />
          </button>
          <button className="createLogo">
            <img src={facebook} alt="facebook" />
          </button>
        </div>
        <p>
          By creating an account, you agree to elsewhere's
          <br /> 
          <span>Terms of Use</span> and <span>Privacy Policy</span>.
        </p>
      </main>
    </div>
  )
}

