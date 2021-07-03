import React, {useEffect, useState} from 'react';
import "./Card.css"


const promiseEjercicio = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(
           () => 
            resolve([
                { id:1, destacado: true, precio:"$980", nombre:'Star Wars R2D2', descripcion:"R2D2, Te ayuda hasta con tu desayuno", imagen:"/imagenesProductos/r2d2.png"},
                { id:2, destacado: true, precio:"$980", nombre:'Star Wars Sables', descripcion:"Los sables mas emblematicos de la saga" , imagen:"/imagenesProductos/sables.png"},
                { id:3, destacado: false, precio:"$980", nombre:'Star Wars Clásico', descripcion: "La taza que todo fanatico deberia tener" , imagen:"/imagenesProductos/starwars.png"},
                { id:4, destacado: true, precio:"$980", nombre:'The Mandalorian', descripcion:"This is the Taza", imagen:"/imagenesProductos/theMandalorian.png" },
            ]),
          4000  
        ); 
    });
};

export const Card = () => {
    const [productos, setProductos] = useState([]);

    const consultarPromesa = () =>{
        promiseEjercicio().then((data) => {
            const dataFiltrada = data.filter((producto) => producto.destacado);
            setProductos(dataFiltrada);
      });
    };

    useEffect(() => {
        consultarPromesa();
    }, []);

    return (
        <>
            {productos.length === 0 ? (
                <>
                <h4 className="cargando">Cargando...</h4>
                <div class="loader"></div>
                </>
            ) : (
                <>
                    <h4 className="h4__card">Esta sección cuenta con {productos.length} productos</h4>
                    <div className="contenedorGeneralCards">

                        {productos.map((producto) => (
                            <>
                            <div className="container__card" >
                                <div className="card">
                                        <img src={producto.imagen} className="card__img"/>
                                        <img src="/imagenesProductos/cafe.png" alt="cafe" className="card__cafe"></img>
                                        <div className="card__data">
                                            <h3 className="card__title" key="id">{producto.nombre}</h3>
                                            <span className="card__preci">{producto.precio}</span>
                                            <p className="card__description">{producto.descripcion}</p>
                                            <a href="/" className="card__button">Comprar</a>
                                        </div>
                                </div>
                            </div>
                        </>
                        ))}
                    </div>
                    
                </>
            )}
        </>
    );
};


{/* <div class="container__card">
        <div class="card">
            <img src="./imagenes/starwars.png" alt="taza" class="card__img">
            <img src="./imagenes/cafe.png" alt="cafe" class="card__cafe">
            <div class="card__data">
                <h1 class="card__title">Star Wars Clásica</h1>
                <span class="card__preci">$99</span>
                <p class="card__description">Un diseño clásico que todo fan debe tener</p>
                <a href="#" class="card__button">Comprar</a>
            </div>
        </div>
    </div> */}