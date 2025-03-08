import React from 'react';
import './TelaFinal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';

const TelaFinal = ({ language }) => {
    const finalText = language === 'Português' ? 'Feito por Gabriel Henriques Sales' : language === 'English' ? 'Made by Gabriel Henriques Sales' : language === '日本語' ? 'ガブリエル・アンリケス・セールスによって作成されました' : 'Realizzato da Gabriel Henriques Sales';

    return (
        <footer>
            <h6>Midia</h6>
            <p></p>
            <div className="Redes-sociais">
                <a href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/gab_sales_salerno/" className="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/Usales" className="github">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.behance.net/bugmental" className="behance">
                    <FontAwesomeIcon icon={faBehance} />
                </a>
            </div>
            <p className="end">{finalText}</p>
        </footer>
    );
};

export default TelaFinal;