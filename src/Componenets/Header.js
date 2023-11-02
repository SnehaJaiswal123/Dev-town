import './Header.css';
import {useState } from 'react';

export default function Header(){

  const [category,setCategory]=useState('All')
  const [price,setPrice]=useState('1000')
  const [displayF,setDisplayF]=useState(true)

  function radioValue() {
    console.log(displayF);
    var ele = document.getElementsByName('category');

    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked){
        console.log(ele[i].name);
            setPrice(ele[i])
        }
    }

    var ele = document.getElementsByName('price');

    for ( let i = 0; i < ele.length; i++) {
        if (ele[i].checked){
        console.log(ele[i].name);
            setCategory(ele[i])
        }
    }
  }
  
 const toggleFilter=()=>{
  
    setDisplayF(!displayF)
    console.log(displayF);
 }

  
  return(
<>
         <div className="header">
        <div className="WebName">Shopify</div>
          
          <div className="search"><input type="text" placeholder='Search'/></div>
          <button className='filter' category={category} price={price}  onClick={toggleFilter}>Filter</button>
        </div> 

        
           
           <div className="drop-down" style={{display:(displayF===false)?'none':'block'}}  onClick={radioValue}>
           <div className="categories">
           <label htmlFor="Categories">Categories</label>
             <br />
             <input type="radio" name="category" id="" />
             <label htmlFor="">All</label>
             <br />
             <input type="radio" name="category" id="" />
             <label htmlFor="">Accessories</label>
             <br />
             <input type="radio" name="category" id="" />
             <label htmlFor="">Fashion</label>
             <br />
             <input type="radio" name="category" id="" />
             <label htmlFor="">Home</label>
             <br />
             <input type="radio" name="category" id="" />
             <label htmlFor="">Clothes</label>
           </div>

           <div className="price">
           <label htmlFor="">Price</label>
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
          
         
          

        </>
    )
}

