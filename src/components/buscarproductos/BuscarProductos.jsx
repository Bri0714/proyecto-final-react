import React, { useEffect, useState } from "react";
import db from '../db/firebase.config'
import "firebase/database";

export const BuscarProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Configurar la conexión con Firebase
        const firebaseConfig = {
            // ...aquí van tus credenciales de Firebase
        };
        db.initializeApp(firebaseConfig);

        // Obtener la referencia a la base de datos y buscar los productos
        const dbRef = db.database().ref("productos");
        dbRef.on("value", (snapshot) => {
            const productos = [];
            snapshot.forEach((childSnapshot) => {
                const producto = childSnapshot.val();
                producto.id = childSnapshot.key;
                productos.push(producto);
            });
            setProductos(productos);
        });
    }, []);

    return (
                
        <Link to={`${producto.id}`} className='text-decoration-none'>



                <div className="card target text-black ">
                        <img src={producto.Image} width={20} height={30} className="card-img-top" alt="..."/>
                        <div class="card-body  ">
                            <h5 className="card-title text-center text-black ">{producto.title}</h5>
                            <p className="card-text text-center"> $ {producto.price}</p>
                        </div>
                </div>



        </Link>
    );
};

export default BuscarProductos
