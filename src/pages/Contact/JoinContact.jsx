import "./JoinContact.css";
import { Link } from "react-router-dom";
import arrowUp from './img/arrowIcon.svg'

export function JoinContact () {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };
  return (
    <>
    
    <div className="join-rev">
      <h2 className="title">Join our travel revolution</h2>
      <div className="inner">
        <p>
          Sign up to stay in the know - hot new travel spots, 
          <br />
          how we strive to make the world a better place, and all sorts of surprises.
        </p>
        <div className="input-wrapper">
          <input placeholder="Email" type="email" />
          <Link to="/login" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    <div className="up-btn">
      <div className="container">
        <button onClick={handleClick} type="button"><img src={arrowUp} alt="arrow-up" /></button>
      </div>
    </div>
    </>
  );
};