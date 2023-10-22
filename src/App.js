import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Body from "./components/body";

  /*
  if(apiUrl == "https://official-joke-api.appspot.com/random_joke"){
    textElement.style.transform = "rotateY(180deg)"; 

  }
  else{
    textElement.style.transform = "rotateY(0deg)"; 

  }
*/


function App() {
  
  return (
<div className='container'>
<Header/>
<Body/>


</div>
  );
}

export default App;
