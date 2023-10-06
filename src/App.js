import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Alert} from 'react-bootstrap'
import SearchMovie from "./SearchMovie.js"
function App() {
  return (
    <div className = "d-flex justify-content-center">
        <SearchMovie /> 
        
    </div>
  );
}

export default App;
