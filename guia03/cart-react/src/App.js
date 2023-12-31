//Esto debe ser algo como la raiz de todo
//importando lo necesario
import { useState } from 'react'; 
import { Headers } from './components/Headers'; 
import  Modals  from './components/Modals';




function App() { 


  const [allProducts, setAllProducts] = useState([]); 
  const [total, setTotal] = useState(0); 
  const [countProducts, setCountProducts] = useState(0);


  return ( 
    <> 
    <Headers 
      allProducts={allProducts} 
      setAllProducts={setAllProducts} 
      total={total} setTotal={setTotal} 
      countProducts={countProducts} 
      setCountProducts={setCountProducts} />  
    <Modals
    allProducts={allProducts} 
    setAllProducts={setAllProducts}
    total={total} 
    setTotal={setTotal} 
    countProducts={countProducts}
    setCountProducts={setCountProducts}
    />
    
    </> ); 
    } 




  export default App;