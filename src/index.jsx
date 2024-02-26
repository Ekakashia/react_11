import React from "react";
import ReactDOM from "react-dom/client";
import Lisitems from "./Lisitems";

function App() {
         
    let fruits = ["apple", "banana", "orange", "grape", "kiwi"]; 

       return(

          <React.Fragment>

           <Lisitems masivi={fruits} />
        
         </React.Fragment>

       )

    }
    


    const root = document.getElementById("root");
    ReactDOM.createRoot(root).render(<App />);