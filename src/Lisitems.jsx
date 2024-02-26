import React from "react";


function Lisitems(props) {
     
    
  
       

      return(
        
        <React.Fragment> 

          <>
          {
               props.masivi.map ((value) => <li>{value}</li>)
          }
          </>

        </React.Fragment>
      )
    

}

export default Lisitems;