import React, { useState } from 'react';
import TelaInicial from './Componentes/TelaInicial';
import TelaMeio from './Componentes/TelaInicial/TelaMeio';
import TelaFinal from './Componentes/TelaFinal';

const App = () => {
    const [language, setLanguage] = useState('Português');

    const handlePortugueseClick = () => {
        setLanguage('Português');
    };

    const handleEnglishClick = () => {
        setLanguage('English');
    };

    const handleJapaneseClick = () => {
        setLanguage('日本語');
    };

    const handleItalianClick = () => {
        setLanguage('Italiano');
    }

    return (
        <div>
            <TelaInicial
                language={language}
                handlePortugueseClick={handlePortugueseClick}
                handleEnglishClick={handleEnglishClick}
                handleJapaneseClick={handleJapaneseClick}
                handleItalianClick={handleItalianClick}
            />
            <TelaMeio language={language} />
            <TelaFinal language={language} />
        </div>
    );
};

export default App;