import React, { useEffect, useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amaze.css";







 const Amaze = ({ handleClick }) => {
 return (
    
        <section>
                {list.map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
           ))}
         </section>
        );
};


 
  export default Amaze
 






  
  
  
  
  
  
 































