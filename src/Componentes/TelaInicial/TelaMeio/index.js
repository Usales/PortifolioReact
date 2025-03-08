import React from 'react';
import './TelaMeio.css';
import Foto from '../../_imagens/Foto.jpg';

const TelaMeio = ({ language }) => {
    const aboutMe = language === 'Português' ? 'Sobre-Mim' : language === 'English' ? 'About Me' : language === '日本語' ? '私について' : 'Su di me';
    const developerDesigner = language === 'Português' ? 'Desenvolvedor | Design' : language === 'English' ? 'Developer | Designer' : language === '日本語' ? '開発者 | デザイナー' : 'Sviluppatore | Designer';
    const description = language === 'Português' ? 'Meu nome é Gabriel Sales e adoro programar nos tempos livres, além disso, tenho um hobby comum mas que pra mim é algo muito divertido: viajar, adoro explorar novos lugares, conhecer culturas diferentes e aprender com elas, tanto na forma cultura, linguística e filosófica. Nos meus momentos livres, eu gosto de fazer ilustrações e design, criando artes digitais e experimentando novas ideias. Essa é a minha vida, onde a programação se mistura com viagens emocionantes e o prazer de criar belas artes. É um prazer!' : language === 'English' ? 'My name is Gabriel Sales and I love programming in my spare time. Besides that, I have a common hobby that is very fun for me: traveling. I love exploring new places, getting to know different cultures, and learning from them in terms of culture, language, and philosophy. In my free time, I enjoy making illustrations and designs, creating digital art, and experimenting with new ideas. This is my life, where programming mixes with exciting travels and the pleasure of creating beautiful art. It\'s a pleasure!' : language === '日本語' ? '私の名前はガブリエル・セールスで、暇なときにプログラミングをするのが大好きです。それに加えて、私にとって非常に楽しい共通の趣味があります：旅行です。新しい場所を探索し、異なる文化を知り、それらから文化、言語、哲学の面で学ぶのが大好きです。自由な時間には、イラストやデザインを作成し、デジタルアートを作成し、新しいアイデアを試すのが好きです。これは私の人生であり、プログラミングがエキサイティングな旅行と美しいアートを作成する喜びと混ざり合っています。よろしくお願いします！' : 'Il mio nome è Gabriel Sales e adoro programmare nel tempo libero. Oltre a ciò, ho un hobby comune ma molto divertente per me: viaggiare. Adoro esplorare nuovi posti, conoscere culture diverse e imparare da loro in termini di cultura, lingua e filosofia. Nel mio tempo libero mi piace fare illustrazioni e design, creare arte digitale e sperimentare nuove idee. Questa è la mia vita, dove la programmazione si mescola con viaggi emozionanti e il piacere di creare belle arti. È un piacere!';
    const formations = language === 'Português' ? 'Formações' : language === 'English' ? 'Formations' : language === '日本語' ? '学歴' : 'Formazioni';
    const complementaryFormation = language === 'Português' ? 'Formação Complementar' : language === 'English' ? 'Complementary Formation' : language === '日本語' ? '補完形成' : 'Formazione complementare';
    const academicFormation = language === 'Português' ? 'Formação Acadêmica' : language === 'English' ? 'Academic Formation' : language === '日本語' ? '学術形成' : 'Formazione accademica';
    const devFormation = language === 'Português' ? 'Formação Dev (Alura)' : language === 'English' ? 'Dev Formation (Alura)' : language === '日本語' ? 'Devフォーメーション（Alura）' : 'Formazione Dev (Alura)';
    const readMore = language === 'Português' ? 'Ler Mais' : language === 'English' ? 'Read More' : language === '日本語' ? 'もっと読む' : 'Leggi di più';
    const p1 = language === 'Português' ? 'Artes básico ao avançado Teatro Escola Basileu França (2011 – 2017)' : language === 'English' ? 'Basic to advanced arts Basileu França Theater School (2011 – 2017)' : language === '日本語' ? '基本から上級までの芸術バシレウフランサ劇場学校（2011年-2017年）' : 'Arti di base avanzate Scuola di teatro Basileu França (2011 – 2017)';
    const p2 = language === 'Português' ? 'Inglês básico SENAC (2019 – 2020)' : language === 'English' ? 'Basic English SENAC (2019 – 2020)' : language === '日本語' ? '基本的な英語SENAC（2019年-2020年）' : 'Inglese di base SENAC (2019 – 2020)';
    const p3 = language === 'Português' ? 'Inglês avançado EDUCART (2020 – 2021)' : language === 'English' ? 'Advanced English EDUCART (2020 – 2021)' : language === '日本語' ? '上級英語EDUCART（2020年-2021年）' : 'Inglese avanzato EDUCART (2020 – 2021)';
    const p4 = language === 'Português' ? 'Japonês básico ao avançado ANBG – Kaikan (2022 – 2023)' : language === 'English' ? 'Basic to advanced Japanese ANBG – Kaikan (2022 – 2023)' : language === '日本語' ? '基本から上級までの日本語ANBG – Kaikan（2022年-2023年）' : 'Giapponese di base avanzato ANBG – Kaikan (2022 – 2023)';
    const p5 = language === 'Português' ? 'Italiano básico Kultivi (2022 - 2022)' : language === 'English' ? 'Basic Italian Kultivi (2022 - 2022)' : language === '日本語' ? '基本的なイタリア語Kultivi（2022年-2022年）' : 'Italiano di base Kultivi (2022 - 2022)';
    const p6 = language === 'Português' ? 'Ensino Médio - Colégio Estadual da Polícia Militar Hugo de Carvalho Ramos (2019 – 2022)' : language === 'English' ? 'High School - State College of Military Police Hugo de Carvalho Ramos (2019 – 2022)' : language === '日本語' ? '高校 - ヒューゴデカルバーラモス州立軍事警察カレッジ（2019年-2022年）' : 'Scuola superiore - Collegio statale della polizia militare Hugo de Carvalho Ramos (2019 – 2022)';
    const p7 = language === 'Português' ? 'Cursando 7º periodo Faculdade SENAI FATESG (2022 - 2025)' : language === 'English' ? 'Studying 7th period SENAI FATESG College (2022 - 2025)' : language === '日本語' ? '第7学期の勉強SENAI FATESG大学（2022年-2025年）' : 'Studiando il 7° periodo del college SENAI FATESG (2022 - 2025)';
    const p8 = language === 'Português' ? 'Atualemente como Suporte de TI para CIEE - Centro de Integração Empresa Escola' : language === 'English' ? 'Currently working as IT Support for CIEE - Centro de Integração Empresa Escola' : language === '日本語' ? 'CIEE - Centro de Integração Empresa EscolaのITサポートとして現在働いています' : 'Attualmente lavoro come supporto IT per CIEE - Centro de Integração Empresa Escola';
    const p9 = language === 'Português' ? 'Formação completa em JavaScript' : language === 'English' ? 'Complete training in JavaScript' : language === '日本語' ? 'JavaScriptの完全なトレーニング' : 'Formazione completa in JavaScript';
    const p10 = language === 'Português' ? 'Formação completa em Java OO' : language === 'English' ? 'Complete training in Java OO' : language === '日本語' ? 'Java OOの完全なトレーニング' : 'Formazione completa in Java OO';
    const p11 = language === 'Português' ? 'HTML5 e CSS em Projetos Web' : language === 'English' ? 'HTML5 and CSS in Web Projects' : language === '日本語' ? 'WebプロジェクトのHTML5とCSS' : 'HTML5 e CSS in Progetti Web';
    const p12 = language === 'Português' ? 'React e Aplicações Web' : language === 'English' ? 'React and Web Applications' : language === '日本語' ? 'ReactとWebアプリケーション' : 'React e Applicazioni Web';
    const p13 = language === 'Português' ? 'SQL com MySQL, SQL e PostGreSQL' : language === 'English' ? 'SQL with MySQL, SQL and PostGreSQL' : language === '日本語' ? 'MySQL、SQL、PostGreSQLを使用したSQL' : 'SQL con MySQL, SQL e PostGreSQL';
    const p14 = language === 'Português' ? 'Formação em Redes' : language === 'English' ? 'Network training' : language === '日本語' ? 'ネットワークトレーニング' : 'Formazione in rete';
    const p15 = language === 'Português' ? 'Formação em Design utilizando Figma e UI Patterns.' : language === 'English' ? 'Design training using Figma and UI Patterns.' : language === '日本語' ? 'FigmaとUIパターンを使用したデザイントレーニング' : 'Formazione in design utilizzando Figma e modelli UI.';
    const p16 = language === 'Português' ? 'Figma e UX/UI' : language === 'English' ? 'Figma and UX/UI' : language === '日本語' ? 'FigmaとUX/UI' : 'Figma e UX/UI';

    return (
        <div className="section">
            <div className=""></div>
            <section className="background-color-Sobre">
                <div className="main-sobre">
                <img src={Foto} alt="Imagem sobre mim" />
                <div className="Text-sobre">
                        <h5>{aboutMe}</h5>
                        <h5>{developerDesigner}</h5>
                        <p>{description}</p>
                    </div>
                </div>
            </section>

            <div className="Container-serviços">
                <div className="T3">
                    <h5>{formations}</h5>
                </div>
                <div className="Card">
                    <i className="fas fa-user"></i>
                    <div>
                        <h5>{complementaryFormation}</h5>
                        <div className="T3">
                            <p>{p1}</p>
                            <p>{p2}</p>
                            <p>{p3}</p>
                            <p>{p4}</p>
                            <p>{p5}</p>
                        </div>
                        <div className="T3">
                            <h5>{academicFormation}</h5>
                            <p>{p6}</p>
                            <p>{p7}</p>
                            <p>{p8}</p>
                            <div className="T3">
                                <h5>{devFormation}</h5>
                                <p>{p9}</p>
                                <p>{p10}</p>
                                <p>{p11}</p>
                                <p>{p12}</p>
                                <p>{p13}</p>
                                <p>{p14}</p>
                                <p>{p15}</p>
                                <p>{p16}</p>
                            </div>
                            <a href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/details/featured/1721431344635/single-media-viewer/?profileId=ACoAADble60BY3IsQrhxdwhSwrn3uUyXFC0C8yc">
                                <button type="button">{readMore}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TelaMeio;