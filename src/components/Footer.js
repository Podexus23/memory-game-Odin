import React from "react";
import './Footer.css';

let Footer = () => {
  return (
    <footer className="Footer">
      <p className="footer-text">Created by <a href="https://github.com/Podexus23" target='_blank' rel="noreferrer">Podexus23</a></p>
      <p className="footer-text">All data provided by <a href="https://pokeapi.co/" target='_blank' rel="noreferrer">PokeAPI</a></p>
      <p className="footer-text">Pokémon and Pokémon character names are trademarks of Nintendo.</p>
      <p className="footer-text">2022</p>
    </footer>
  )
}

export default Footer;