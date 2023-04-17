import { Routes, Route} from 'react-router-dom';

import Home from './Screens/Home'
import History from './Components/History'
import Winners from './Screens/Winners'
import About from './Screens/About'
import './Style/app.css'

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/History' element={ <History/>}/>
      <Route path='/Winners' element={ <Winners/>}/>
      <Route path='/About' element={ <About/>}/>
    </Routes>
   </>
  );
}

export default App;
