import React from "react";
import '../css/Productos.css';

function Productos () {
   return(
      <div className="container">
         <h1 className="color-white title-products"> Perifericos destacados de este mes </h1>

         <div className="row product-list">
            <div className="col">
               <img src={require('../img/products/monitores/monitorim.jpg')} alt="logo monitor" className="product-icon">
               </img>
            </div>
            
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/monitores/monitor1.jpg')} className="product-img back-prp" alt="monitor1">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/monitores/monitor2.jpg')} className="product-img2 back-prp" alt="monitor2">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/monitores/monitor3.jpg')} className="product-img back-prp" alt="monitor3">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>
         </div>


         <div className="row product-list">
            <div className="col">
               <img src={require('../img/products/teclados/tecladosim.jpg')} alt="logo monitor" className="product-icon" alt="tecladosss">
               </img>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/teclados/teclado1.jpg')} className="product-img back-prp" alt="teclado1">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/teclados/teclado2.jpg')} className="product-img back-prp" alt="tecldo2">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/teclados/teclado3.jpg')} className="product-img back-prp" alt="teclado3">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>
         </div>


         <div className="row product-list">
            <div className="col">
               <img src={require('../img/products/mouses/mousesim.jpg')} alt="logo monitor" className="product-icon" alt="mouses">
               </img>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/mouses/mouse1.jpg')} className="product-img back-prp" alt="mosue 1231">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/mouses/mouse2.jpg')} className="product-img back-prp" alt="mouse2 321">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/mouses/mouse3.jpg')} className="product-img back-prp" alt="mouse3 3123">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> 19.890</h5>
                     <h5 className="card-model color-white back-prp"> Monitor ASUS VG32VQ1B</h5>
                  </div>
               </div>
            </div>            
         </div>

         <h1 className="color-white title-products"> Lanzamientos al mercado recientes </h1>

         <div className="row product-list">
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/otros/other1.jpg')} className="product-img-other back-prp" alt="otro1">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> $2.566</h5>
                     <h5 className="card-model color-white back-prp"> Mouse RXQ96</h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/otros/other2.jpg')} className="product-img-other back-prp" alt="otro2">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> $19.014</h5>
                     <h5 className="card-model color-white back-prp"> ROG Swift PG349Q</h5>
                  </div>
               </div>
            </div>
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/otros/other3.jpg')} className="product-img-other back-prp" alt="otro3">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> $5.560</h5>
                     <h5 className="card-model color-white back-prp"> Cooler MasterKeys SK650</h5>
                  </div>
               </div>
            </div>         
            <div className="col">
               <div className="card back-prp">
                  <img src={require('../img/products/otros/other4.jpg')} className="product-img-other back-prp" alt="otro4">
                  </img>
                  <div className="card-body back-prp">
                     <h5 className="card-price color-blue back-prp"> $22.985</h5>
                     <h5 className="card-model color-white back-prp"> ROS Strix XG49VQ</h5>
                  </div>
               </div>
            </div>            
         </div>
      </div>
   )
}

export default Productos;