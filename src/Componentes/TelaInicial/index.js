import React from 'react';
import './TelaInicial.css';

const TelaInicial = ({ language, handlePortugueseClick, handleEnglishClick, handleJapaneseClick, handleItalianClick }) => {
    const greeting = language === 'Português' ? 'Olá, meu nome é' : language === 'English' ? 'Hello, my name is' : language === '日本語' ? 'こんにちは、私の名前は': 'Ciao, il mio nome è';
    const name = 'Gabriel Sales';
    const title = language === 'Português' ? 'Engenheiro de Software' : language === 'English' ? 'Software Engineer' : language === '日本語' ? 'ソフトウェアエンジニア': 'Ingegnere del software';
    const tools = language === 'Português' ? 'Ferramentas' : language === 'English' ? 'Tools' : language === '日本語' ? 'ツール' : 'Strumenti';
    const skills = 'React | Java | JavaScript | PlSQL | SQL | PostGreSQL | Adobe Photoshop | Adobe Illustrator | Sketch | Figma | Canva';

    return (
        <div className="home">
            <div id="stars"></div>
            <div className="title">
                <div>
                    <div> 
                        <div>
                            <nav>
                                <ul>
                                    <li><a href="#" onClick={handlePortugueseClick}>🦜Português </a></li>
                                    <li><a href="#" onClick={handleEnglishClick}>🦅English</a></li>
                                    <li><a href="#" onClick={handleJapaneseClick}>🐙日本語</a></li>
                                    <li><a href="#" onClick={handleItalianClick}>🍕Italiano</a></li>

                                </ul>
                            </nav>
                            <div className="Main">
                                <h4>{greeting}</h4>
                                <h1>{name}</h1>
                                <h3>{title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>{tools}</div>
                <div className="Typist lead typist">{skills}</div>
                <div className="--"></div>
            </div>
        </div>
    );
};

export default TelaInicial;