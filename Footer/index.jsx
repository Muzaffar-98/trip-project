import { Link } from 'react-router-dom';
import './index.css';
import logo from './Logo.png';

export function Footer() {
  return (
      <footer>
        <section className='description-logo'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='description'>
            <p>Discover the world's wonders and let us be
              <br /> 
              your trusted guide to extraordinary destinations.</p>
          </div>
          <div className='copyright'>
            <p>© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
          </div>
        </section>
        <section className='navigation-menu'>
          <table>
            <thead>
              <tr>
                <th>Menu</th>
                <th>Support</th>
                <th>Follow us</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/destination?sort=asc">Destination</Link></td>
                <td><Link to="/contact">Contact us</Link></td>
                <td><Link to="www.instagram.com">Instagram</Link></td>
              </tr>
              <tr>
                <td><Link to="/trips">Private trips</Link></td>
                <td><Link to="/faq">FAQ</Link></td>
                <td><Link to="www.facebook.com">Facebook</Link></td>
              </tr>
              <tr>
                <td><Link to="/blog">Blog</Link></td>
                <td><Link to="/privacy">Privace police</Link></td>
                <td><Link to="www.linekdin.com">Linkedin</Link></td>
              </tr>
              <tr>
                <td><Link to="/about">About us</Link></td>
                <td><Link to="/term">Term Of Use</Link></td>
                <td><Link to="www.tiktok.com">Tiktok</Link></td>
              </tr>
            </tbody>
          </table>
        </section>
      </footer>
  );
}

