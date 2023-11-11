import './index.css' 
import logo from './img/Logo.png';
import { Link } from 'react-router-dom';

export function Password() {
  return (
    <div className="forgot-container">
      <aside></aside>
      <main className='forgot-main'>
        <div className="appLogoContainer">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h1>Looking to change your password?</h1>
        <p>Enter your email below and we'll send you instructions on how to
          <br /> 
          reset your password.</p>
        <form>
          <div>
            {" "}
            <label htmlFor="">Email</label>
            <input type="text" placeholder="someone@example.com" />
          </div>
        </form>
        <button className="forgotButton">Reset my password</button>
      </main>
    </div>
  )
}

