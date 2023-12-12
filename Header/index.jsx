import './index.css';
import {Link} from 'react-router-dom';
import arrows from './arrows.svg';
import logo from './Logo.png';

export function Header() {
  return (
    <header>
            <section className='topHeader'>
                <nav>
                    <ul className='links'>
                        <li><Link to="/about" >About us</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </nav>
                <button>
                    US$
                    <img src={arrows} alt="" />
                </button>
            </section>
            <section className='bottomHeader'>
                <div className='linkButtons'>
                    <button><Link to="/destination?sort=asc">Destination</Link></button>
                    <button><Link to="/destination/italy">Private trips</Link></button>
                </div>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <div className='rightButtons'>
                    <button className='lucky-button'>I'm Feeling Lucky</button>
                    <Link to="/signIn">
                        <button className='login-button'>Login</button>
                    </Link>
                </div>
            </section>
        </header>
    
  );
}
