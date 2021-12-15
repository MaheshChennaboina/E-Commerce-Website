import React from "react";
import products from "../products";
import {useState,useEffect} from 'react'
import axios from 'axios'
function CartItem(props){ 
    const [items,setItems] = useState([])
    const [message,setMessage]=useState("")
    const url = "http://localhost:3002/products"
    const cartInfo= ()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((emp)=> setItems(emp ))
    }
    const deleteInfo =(pid)=>{
        axios.delete("http://localhost:3002/products/"+pid)
        .then(response=>{
            setMessage("scccanbcancbancbancbancbancbac");
            cartInfo();
        })
        .catch(error=>{
               setMessage("sscsccacacacacaa a")
        })   

    }
    useEffect(
        ()=>{
            cartInfo();
}
    ,[]);
    return(
       <>
         <h1>{items.length}</h1>
         <h1>{message}</h1>
         <table cellPadding={"10%"} style={{backgroundColor:"blue",color:"white" ,width:"100%", marginBottom:'100%'}}>
             <tr>
                 <th>Id</th>
                 <th>Product</th>
                 <th>Price</th>
                 <th>count</th>
                 <th>delete</th>
             </tr>
            
                 {items.map(item=>{
                     return(
                        <tr style={{backgroundColor:'green', marginTop:"5rem"}}>
                         <td>{item.id}</td>
                         <td>{item.product}</td>
                         <td>{item.price}</td>
                         <td>{item.count}</td>
                         <button onClick={deleteInfo.bind(this,item.id)}>delete</button>
                         </tr> 
                     )
                 })}
             
             
         </table>
       
       
       </>
    );
}

export default CartItem
