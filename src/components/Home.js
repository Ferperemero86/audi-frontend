import React from "react";

import hamiltonImage from "../images/Hamilton.png";
import bottasImage from "../images/Bottas.png";
import carImage from "../images/coche.png";
import newsPhoto from "../images/foto_noticia.jpg";
import englandFlagImage from "../images/ing.svg";
import finlandFlagImage from "../images/fin.svg";


const StaticsCircle = ({ title, containerClass, percentageNumber, circleWrapperClass }) => {
    return (
        <div className={`points-statics ${containerClass}`}>
            <h2 className="statics-title">{title}</h2>
            <div class={`circle-wrapper ${circleWrapperClass}`}>
                <span className="percentage">{percentageNumber}</span>
                <div class="circle">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                </div>
            </div>
        </div>
    )
}

const StaticsDiagrams = () => {
    return (
        <div className="statics-container">
            <div className="circles-container">
                <StaticsCircle
                    title="Points"
                    containerClass="points-statics"
                    circleWrapperClass="points"
                    percentageNumber="67%" />
                <StaticsCircle
                    title="Podiums"
                    containerClass="podiums-statics"
                    circleWrapperClass="podiums"
                    percentageNumber="80%" />
            </div>
        </div>
    )
}

const FirstSection = () => {
    return (
        <section className="home-first-section">
            <div className="introduction-text">
                <p className="first-paragraph">Since 1981, Audi Sport stands for "Vorsprung durch Technik"
                   in international racing. Be it the World Rally Championship, Pikes Peak,
                   Super Touring, DTM, GT racing or Le Mans prototypes: With impressive performances,
                   Audi achieved success with numerous race victories and important championship titles
                   in all of the racing projects. The current engagement consists of FIA Formula E, DTM and customer
                   racing. The road-going models from the Audi Sport brand profit from the know-how that comes from racing.
                 </p>
                <p className="second-paragraph">Since 1981, Audi Sport stands for "Vorsprung durch Technik" in international racing. Be it the
                   World Rally Championship, Pikes Peak, Super Touring, DTM, GT racing or Le Mans.
                </p>
            </div>
            <StaticsDiagrams />
        </section>
    )
}

const PilotImage = ({ pilotName, pilotSurname, pilotImage, flagImage, pilotClassName, flagClassName }) => {
    return (
        <div className={`${pilotClassName}-image-container`}>
            <div className={`${pilotClassName}-image-background`}></div>
            <img src={flagImage} alt="Finland flag" className={`${flagClassName}-image`} />
            <img src={pilotImage} alt={`${pilotClassName}`} className={`${pilotClassName}-image`} />
            <h3 className={`${pilotClassName}-heading`}>{pilotName} <span className="surname">{pilotSurname}</span></h3>
        </div>
    )
}

const SecondSection = () => {
    return (
        <section className="home-second-section">
            <div className="section-background-color"></div>
            <div className="car-image-background"></div>
            <div className="images-container">
                <PilotImage
                    pilotName="Valteri"
                    pilotClassName="bottas"
                    flagClassName="finland"
                    pilotSurname="BOTTAS"
                    pilotImage={bottasImage}
                    flagImage={finlandFlagImage} />
                <PilotImage
                    pilotName="Lewis"
                    pilotClassName="hamilton"
                    flagClassName="england"
                    pilotSurname="HAMILTON"
                    pilotImage={hamiltonImage}
                    flagImage={englandFlagImage} />
                <div className="car-image-container">
                    <img src={carImage} alt="Racing car" className="car-image" />
                </div>
            </div>
        </section>
    )
}

const NewsColumn = ({ primaryColumn }) => {
    return (
        <div className={`news-column ${primaryColumn}`}>
            <div className="image-container">
                <img src={newsPhoto} alt="Car taking a curve" className="news-photo" />
            </div>
            <div className="news-text">
                <h3 className="first-heading">DTM</h3>
                <h3 className="second-heading">Nürburgring</h3>
                <p className="news-paragraph">The triple has been perfected: following the
                    win of the DTM manufacturers championship,
                    Audi also secured early title wins in the drivers
                    and teams championships at the Nürburgring. </p>
            </div>
        </div>
    )
}

const ThirdSection = () => {
    return (
        <section className="home-third-section">
            <div className="home-news-container">
                <NewsColumn primaryColumn="primary-column" />
                <NewsColumn />
                <NewsColumn />
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <article className="home-first-article">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </article>
    )
}

export default Home;