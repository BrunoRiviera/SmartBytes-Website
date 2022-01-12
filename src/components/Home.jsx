import React from "react";
import '../css/Home.css';

function Home () {
    return (
        <div className="container">
            <div className="center-cc">    
                <img src={require('../img/homepage/homeimg.jpg')} className="reciver-img" alt="foto hermosa">
                </img>
            </div>
                <h1 className="color-white title"> Kits de Inicio </h1>
            <div className="row">
                <div className="col">
                    <div className="card home-card">
                        <img src={require('../img/homepage/homepc.jpg')} className="imgset-1" alt="foto de inicio">
                        </img>
                        <div className="card-body back-prp">
                            <h5 className="card-price color-pink back-prp">
                                $107.000
                            </h5>
                            <h5 className="card-title color-white back-prp">
                                Asus ROG Strix GA35-G35DX
                            </h5>
                            <p className="card-info color-white back-prp">
                                Este sistema se utilizará para juegos. Incluye una tarjeta gráfica Asus GTX 1080. El sistema incluye 8 GB de RAM del sistema y una unidad SSHD de 1 TB.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">     
                    <div className="card home-card">
                        <img src={require('../img/homepage/homemonitor.jpg')} className="imgset-2" alt="monitor rog strix xg2">
                        </img>
                        <div className="card-body back-prp">
                            <h5 className="card-price color-pink back-prp">
                                $21.099
                            </h5>
                            <h5 className="card-title color-white back-prp">
                                Monitor ROG Strix XG27VQ 144HZ 1MS
                            </h5>
                            <p className="card-info color-white back-prp">                            
                                El Strix es un monitor curvo Full HD con 144 Hz de frecuencia de refresco que elimina los tirones y evita que la imagen se entrecorte.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card home-card">
                        <img src={require('../img/homepage/hometeclado.jpg')} className="imgset-2" alt="teclado genius scorpion">
                        </img>
                        <div className="card-body back-prp">
                            <h5 className="card-price color-pink back-prp">
                                $5.899
                            </h5>
                            <h5 className="card-title color-white back-prp">
                                Teclado Mecánico GENIUS SCORPION
                            </h5>
                            <p className="card-info color-white back-prp">
                                El SCORPION posee las teclas mas buscadas en estos dias, con las Cherry Switch Mecanicas se obtiene el mejor tecleo posible con un sonido suave y presion de 15 gramos 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card home-card">
                        <img src={require('../img/homepage/homemouse.jpg')} className="imgset-2" alt=""mouse rxq96>
                        </img>
                        <div className="card-body back-prp">
                            <h5 className="card-price color-pink back-prp">
                                $3.566
                            </h5>
                            <h5 className="card-title color-white back-prp">
                                Mouse RXQ96
                            </h5>
                            <p className="card-info color-white back-prp">
                                Sus 2.400 DPI hacen que en cuanto a escena competitiva, este mouse sea el numero uno en el mercado, imposible superar su tiempo de respuesta y ligereza
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="color-white"> El producto del Mes </h1>
            </div>
            <div className=" margin-t-100">
                <div className="row ">
                    <div className="col">
                        <img src={require('../img/homepage/monitordelmes.jpg')} className="home-img " alt="monitor asus xg235"></img>
                    </div>
                    <div className="col news-text">
                        <h1 className="color-white">
                            Monitor Gamer Curvo ASUS 27 Pulgadas ROG Strix XG27VQ Full HD 144HZ 1MS
                        </h1>
                        <h2 className="color-pink">
                            $25.566
                        </h2>
                        <p className="color-white news-info">
                            La curvatura 1800R del ROG Strix XG27VQ asegura que cada punto de la pantalla se encuentre a una distancia equidistante de tus ojos para que disfrutes de maratones de juego con la máxima comodidad.
                        </p>
                    </div>
                </div>
            </div>
            <div className="margin-t-50">
                <div className="row ">
                    <div className="col news-text back-prp">
                        <h1 className="color-white back-prp">
                            Descripción
                        </h1>
                        <p className="color-white news-info back-prp">
                            Con un impresionante diseño gaming y una fluidez gráfica total, el ROG Strix XG27VQ proporciona una experiencia de juego increíble. Es, sin duda, el mejor monitor para gamers profesionales y aficionados del género MOBA.
                        </p>
                        <p className="color-white news-info back-prp">
                            El Strix XG27VQ es un monitor curvo Full HD con 144 Hz de frecuencia de refresco que, gracias a las exclusivas tecnologías Low Motion Blur y Adaptive-Sync (FreeSync™), elimina los tirones y evita que la imagen se entrecorte. Hace gala de una marcada estética gamer con iluminación ASUS Aura RGB para ambientar cualquier equipo de gaming o LAN party.
                        </p>
                    </div>
                </div>
            </div>


        </div>

            
    )
}

export default Home;