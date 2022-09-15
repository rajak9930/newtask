import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Shopping-cart/Components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Task from './TaskViewer/Task';
// import Home from './Shopping-cart/Home';
// import Cart_item from './Shopping-cart/Cart_item';
// import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    {/* <Routes>
     
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Header/>}/>
<Route path='/cart_item' element={<Cart_item/>}/>
     
    </Routes> */}
    
    <Task/>
     
      
    
      
    
    </div>
  );
}

export default App;
