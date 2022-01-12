import React from "react";
import '../css/Comunidad.css';

function Comunidad () {
    return(
        <div className="container margin-b-50"> 
            <h1 className="color-white title"> Bienvenido a la Comunidad </h1>
            <div className="center-cc">    
                <img src={require('../img/news/arch1.jpg')} className="comunidad-img" alt="foto comunidad">
                </img>
            </div>

            <div>
                <h1 className="color-white title-products"> Novedades </h1>
            </div>

            <div className="news">
                <div className="row">
                    <div className="col news-text back-prp">
                        <h2 className="color-white news-title back-prp">
                            KRÜ se consagró campeon del VALORANT Clutch, el torneo que unió los juegos de disparos en primera persona
                        </h2>
                        <p className="color-white news-info back-prp">
                        Durante la tarde de ayer se realizó VALORANT Clutch, un evento que unió a los amantes de los juegos, principalmente a los seguidores de VALORANT Y CS:GO. Profesionales de ambas disciplinas se unieron en busca de ganar un torneo en el que participaron KRÜ, Furious Gaming, Leviatán y 9z Team.
                        </p>
                    </div>
                    <div className="col back-prp">
                        <img src={require('../img/news/clutch.jpg')} className="news-img" alt="foto noticias"></img>
                    </div>
                </div>
            </div>

            <div className="news margin-t-100">
                <div className="row ">
                    <div className="col back-prp">
                        <img src={require('../img/news/gameshow.jpg')} className="news-img" alt="foto gameshow"></img>
                    </div>
                    <div className="col news-text back-prp">
                        <h2 className="color-white news-title back-prp">
                            ARGENTINA GAME SHOW SERÁ LOS DÍAS 10, 11 Y 12 DE DICIEMBRE
                        </h2>
                        <p className="color-white news-info back-prp">
                            Argentina Game Show vuelve en su formato PRESENCIAL a Costa Salguero los días 10, 11 y 12 de diciembre, en esta ocasión en edición online y con transmisiones exclusivas de los momentos más importantes que se estará realizando simultáneo con Argentina.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Comunidad;
