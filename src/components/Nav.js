import React from "react";
import { MDBNavbar, MDBNavbarBrand,MDBRow } from "mdbreact";

export default ()=>{


  return (
    <MDBRow center>
        <MDBNavbar color="red" dark expand="md" >
          <MDBNavbarBrand style={{textAlign:'center',width:'100vw'}}>
            <strong style={{fontSize:"2rem"}} className="white-text">My Todo List</strong>
          </MDBNavbarBrand>
         </MDBNavbar>
         </MDBRow>
    );
  
}

