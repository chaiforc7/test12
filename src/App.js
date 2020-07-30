import React from 'react';
import Nav from './components/Nav';
import { MDBContainer } from 'mdbreact';
import AddTodo from './components/AddTodo';
import List from './components/List';


function App() {
  return (
    < >
     <Nav/>
     <MDBContainer>
       <AddTodo/>
       <List/>
     </MDBContainer>
    </>
  );
}

export default App;
