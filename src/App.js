// import logo from './logo.svg';
import ProductListing from './Componenets/listing';
// import Header from './Componenets/Header'; 
// import Product from './Products/product';
// import Footer from './Componenets/footer';

import './Header.css';
import './App.css';
import product from './Products/product';
import { useEffect, useState } from 'react';
// import { isDisabled } from '@testing-library/user-event/dist/utils';

 function Header(){

  

  
  return(
<>
        
         
          

        </>
    )
}

function App(){

  //  const [category,setCategory]=useState('All')
  //  const [price,setPrice]=useState(1000)
  const [category,setCategory]=useState('all')
  const [price,setPrice]=useState('1000')
  const [displayF,setDisplayF]=useState(false)

  function radioValue() {
    // console.log("displayF");
    var ele1 = document.getElementsByName('category');

    for (let i = 0; i < ele1.length; i++) {
        if (ele1[i].checked){
          console.log(true);
        console.log(ele1[i].value);
          setCurrentPage(1)
            setCategory(ele1[i].value)
        }
    }

    var ele2 = document.getElementsByName('price');

    for ( let i = 0; i < ele2.length; i++) {
      
        if (ele2[i].checked){
          console.log(1);
        console.log(ele2[i].name);
            setPrice(ele2[i].value)
        }
    }
  }
  
 const toggleFilter=()=>{
  
    setDisplayF(!displayF)
    // console.log(displayF);
 }
 
   const filteredProducts=product.filter((p)=>{
    return category=='all'||p.category===category;
   })

  //  console.log(category,filteredProducts);
  const [currentPage,setCurrentPage]=useState(1)
  const productPerPage=8;
  const lastIndex=currentPage*productPerPage
  const firstIndex=lastIndex-productPerPage
  const paginatedProducts=filteredProducts.slice(firstIndex,lastIndex)
  const lastPage=Math.ceil((filteredProducts.length)/productPerPage)
  
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
    {/* <Header/> */}
    <div className="header" >

      <div className='WebName'>
      <img className='logo' src="https://static.vecteezy.com/system/resources/thumbnails/018/926/145/small/abstract-color-logo-element-png.png" alt="logo" />
      <span className="webname">Shopicus</span>
      </div>
          
      <div className="search"><input type="text" placeholder='Search'/></div>
      <div><button className='filter' category={category} price={price}  onClick={toggleFilter}>Filter</button>
      </div>

     </div> 

        
           
           <div className="drop-down" style={{display:(displayF===false)?'none':'block',padding:'20px'}}  onClick={radioValue}>
           <div className="categories" style={{padding:'10px'}}>
           <label htmlFor="Categories" style={{fontWeight:'bold'}}>Categories</label>
             <br />
             <br />
             <input type="radio" name="category" value='all' id="" />
             <label htmlFor="">All</label>
             <br />
             <input type="radio" name="category" value='accessories' id="" />
             <label htmlFor="">Accessories</label>
             <br />
             <input type="radio" name="category" value='fashion' id="" />
             <label htmlFor="">Fashion</label>
             <br />
             <input type="radio" name="category" value='home' id="" />
             <label htmlFor="">Home</label>
             <br />
             <input type="radio" name="category" value='electronics' id="" />
             <label htmlFor="">Electronics</label>
           </div>

           <div className="price" style={{padding:'10px'}}>
           <label htmlFor="" style={{fontWeight:'bold'}}>Price</label>
             <br />
             <br />
             <input type="radio" name="price" id="" />
             <label htmlFor="">All</label>
             <br />
             <input type="radio" name="price" id="" />
             <label htmlFor="">0-250</label>
             <br />
             <input type="radio" name="price" id="" />
             <label htmlFor="">250-500</label>
             <br />
             <input type="radio" name="price" id="" />
             <label htmlFor="">500-1000</label>
             <br />
             <input type="radio" name="price" id="" />
             <label htmlFor="">1000</label>
           </div>
         </div>
          



    <div className='main' >
      {paginatedProducts.map((product, index) => (
      <ProductListing key={index} img={product.img} title={product.title} price={product.price} desc={product.description}/>
      ))}
    </div>
    <div style={{display:"flex",justifyContent:"center"}} onClick={toggleFilter} >
            <button disabled={(currentPage===1)?true:false} onClick={prevPage} style={{cursor:"pointer" , width:"150px", height:'40px', fontSize:'20px', fontFamily:'serif',backgroundColor:'black',color:'white', borderRadius:"5px 0 0 3px"}}>Prev</button>
            <button disabled={(currentPage===lastPage)?true:false} onClick={nextPage} style={{cursor:"pointer",width:"150px", height:'40px', fontSize:'20px',fontFamily:'serif',color:'black',borderRadius:"0 5px 0 3px"}}>Next</button>
     </div>
    
    </>
    
  )
  
}

export default App;
