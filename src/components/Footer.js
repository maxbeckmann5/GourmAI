import React from 'react';
import { FacebookIcon, TwitterIcon } from './Icons'; // Importiere die Icons aus Icons.js

function Footer() {
  return (
    <footer className="footer">
      <p>Follow us on:</p>
      <div className="footer-icons">
        <a href="https://facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://twitter.com">
          <TwitterIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
