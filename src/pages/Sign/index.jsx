import './index.css' 
import logo from './img/Logo.png';
import eye from './img/input_eye.svg';
import facebook from './img/facebook.svg';
import google from './img/google.svg';
import apple from './img/apple.svg';
import { Link } from 'react-router-dom';

export function SignIn() {
  return (
    <div className="signIn-container">
      <aside></aside>
      <main className='signIn-main'>
        <div className="appLogoContainer">
        <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h1>Sign in for your exciting journey</h1>
        <form>
          <div>
            {" "}
            <label htmlFor="">Email</label>
            <input type="text" placeholder="someone@example.com" />
          </div>
          <div>
            {" "}
            <label htmlFor="">Password</label>
            <input type="password" />
            <img src={eye} alt="" width={"20"} />
          </div>
        </form>
        <Link to="/password">
          <p>Forgot password?</p>
        </Link>
        
        <button className="signinButton">Sign in</button>
        <p className='text-center'>or use one of this</p>
        <div className="logosContainer">
          <button className="signInLogo">
            <img src={google} alt="google" />
          </button>
          <button className="signInLogo">
            <img src={apple} alt="apple" />
          </button>
          <button className="signInLogo">
            <img src={facebook} alt="facebook" />
          </button>
        </div>
        <p className='bottom-text'>Don't have an account? 
          <Link to="/createAcc">
          <span>Create new for adventure!</span>
        </Link>
        </p>
      </main>
    </div>
  )
}

