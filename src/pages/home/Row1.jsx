import { useState } from 'react';
import "./Row1.css";
// @ts-ignore
import ProjetFinEtude from "./image/PFE.png";
// @ts-ignore
import ProjetFinAnnee from "./image/PFA.png";




const Row1 = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handelClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slideIndex + 1);

        }

    };
    const handleNavigateToRow2 = () => {
        const element = document.getElementById("row2");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="center-container">
            {slideIndex !== 0 && <i onClick={() => handelClick("left")} className="bi bi-chevron-double-left arrow-left"></i>}
            <div style={{ transform: `translateX(${slideIndex * -100}vw)` }} className="center-wrapper">
                <div className="center first-slide">
                    <div className="center-img-wrapper">
                        <img
                            src={ProjetFinEtude}
                            alt="Projet Fin Etude"
                            onClick={handleNavigateToRow2}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                    <div className="center-info-wrapper">
                        <h1 className="center-info-title">Projet De Fin d'etude</h1>
                        <p className="center-info-desc">
                            pour les etudiants de la 5 eme annee
                        </p>
                    </div>
                </div>
                <div className="center second-slide">
                    <div className="center-img-wrapper">
                        <img src={ProjetFinAnnee} alt="" />
                    </div>
                    <div className="center-info-wrapper">
                        <h1 className="center-info-title">Projet De Fin d'annee</h1>
                        <p className="center-info-desc">
                            pour les etudiants de la 3eme et la 4eme  annee
                        </p>
                    </div>
                </div>


            </div>
            {slideIndex != 1 && <i onClick={() => handelClick("right")} className="bi bi-chevron-double-right arrow-right"></i>}

        </div>
    );
}
export default Row1;
