// import logo from './logo.svg';
import ProductListing from './Componenets/listing';
import Header from './Componenets/Header';
// import Product from './Products/product';
// import Footer from './Componenets/footer';

import './App.css';
import product from './Products/product';
import { useEffect, useState } from 'react';
// import { isDisabled } from '@testing-library/user-event/dist/utils';



function App(){

   const [category,setCategory]=useState('All')
   const [price,setPrice]=useState(1000)
 
   const filteredProducts=product.filter((p)=>{
    // console.log(category,p.category);
    return category==='All'||p.category===category
   })
  const [currentPage,setCurrentPage]=useState(1)
  const productPerPage=8;
  const lastIndex=currentPage*productPerPage
  const firstIndex=lastIndex-productPerPage
  const paginatedProducts=filteredProducts.slice(firstIndex,lastIndex)
  const lastPage=Math.ceil((product.length)/productPerPage)
  
  const prevPage=()=>{
         if(currentPage>1){
          setCurrentPage(currentPage-1)
         }
      }

      const nextPage=()=>{
        setCurrentPage(currentPage+1)
      }

  return(
    <>
    <Header/>
    <div className='main'>
      {paginatedProducts.map((product, index) => (
      <ProductListing key={index} img={product.img} title={product.title} price={product.price} desc={product.description}/>
      ))}
    </div>
    <div style={{display:"flex",justifyContent:"center"}}>
            <button disabled={(currentPage===1)?true:false} onClick={prevPage} style={{cursor:"pointer"}}>Prev</button>
            <button disabled={(currentPage===lastPage)?true:false} onClick={nextPage} style={{cursor:"pointer"}}>Next</button>
     </div>
    
    </>
    
  )
  
}

export default App;
