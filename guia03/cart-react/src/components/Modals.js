import Modal from "./Modal";
import {useModal} from "../hooks/useModal"
//Aqui vienen los datos simula lo que es una base de datos 
import {data} from "./data"; 


const Modals = ({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal, }) =>{
    const [isOpenModal1,openModal1,closeModal1,selectedProduct1] = useModal(false);
    //Recibe el parametro product
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
     closeModal1();
    };
    return <div>
    <h2>Modales</h2>
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

            <button onClick={()=>openModal1(product)}>Ver detalles</button>
                {/**() => onAddProduct(product) */}

            </div> 
            </div>
            
            )
            
            )
            
            }
            
        </div>
   
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        {
        selectedProduct1 && (
          <>
                <p className="text-center underline font-serif font-bold">La Italiana</p> 
                <p className="text-center">Llegando a los mejores gustos </p>
                <p className="text-center">Soyapango local H7 S.S</p>
                <p className="mt-2">Cliente: nombre</p>
                <p>--------------------------------------------------------</p>
                <p>Pizza: tamano</p>
                <p>--------------------------------------------------------</p>
                <p>Adicionales: count</p>
                <p>--------------------------------------------------------</p>
                <p>Total inicial: totalInicial</p>
                <p>--------------------------------------------------------</p>
                <p>SubTotal: subTotal</p>
                <p>--------------------------------------------------------</p>
                <p>Total: total</p>
                <p></p>
            <button onClick={closeModal1}  className="bg-rose-600 hover:bg-amber-400 transition-colors cursor-pointer
                    uppercase font-bold w-full p-3 mt-5 text-white rounded-lg">Cerrar</button>
          </>
        )}
        </Modal>
    </div>
};
export default Modals;