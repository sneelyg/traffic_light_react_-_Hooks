import React, { useState } from "react";



export const Luces = () => {
    const [roja, setRoja] = useState(false);
    const [amarilla, setAmarilla] = useState(false);
    const [verde, setVerde] = useState(false);




return(
   <>
 
        <div className="luzRoja" 
        onClick={()=>{setRoja(roja?false:true);setAmarilla(false);setVerde(false)}}
    style={{ backgroundColor:`${roja?'red':''}`}}
    
        >

        </div>
        <div className="luzAmarilla"
                onClick={()=>{setRoja(false);setAmarilla(amarilla?false:true);setVerde(false)}}
                style={{ backgroundColor:`${amarilla?'yellow':''}`}}
        >

        </div>
        <div className="luzVerde"
             onClick={()=>{setRoja(false);setAmarilla(false);setVerde(verde?false:true)}}
             style={{ backgroundColor:`${verde?'green':''}`}}
        >

        </div>

        </>
    )
}