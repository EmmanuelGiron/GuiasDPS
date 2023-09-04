import React from "react"; 
//Aqui vienen los datos simula lo que es una base de datos 
import {data} from "./data"; 



export const ProductList = (
    { allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, }) => 

    { 
        //Recibe el parametro products 
         const onAddProduct = product => 
    {
         if (allProducts.find(item => item.id === product.id)){
     const products = allProducts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item );
     setTotal(total + product.price * product.quantity); 
     setCountProducts(countProducts + product.quantity);
     return setAllProducts([...products]);} 
     setTotal(total + product.price * product.quantity); 
     setCountProducts(countProducts + product.quantity); 
     setAllProducts([...allProducts, product]);
    };


     return (

        <div className='container-items'> {data.map(
            //Aqui se declara product 
            product => ( 
            <div className='item' key={product.id}>     
            <figure> 
            <img src={product.urlImage} alt={product.title} /> 
            </figure>
            <div className='info-product'>
            <h2>{product.nameProduct}</h2> <p className='price'>${product.price}</p>
            {/**Aqui se pasa como parametro a la funcion onAddProduct  */}

            <button onClick={() => onAddProduct(product)}> Añadir al carrito </button>
                {/**() => onAddProduct(product) */}

               

           

            </div> 
            </div>
            
            
            )
            
            )} 
        </div> );
};