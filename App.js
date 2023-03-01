import Insctiption from "./Composer/Insctiption";
import Login from "./Composer/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Modifier from "./Composer/Modifier";
import Session from "./Composer/Session";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/Inscription' element={<Insctiption/>}></Route>
                <Route path='/Modifier/:id' element={<Modifier/>}></Route>
                <Route path='/Session/:id' element={<Session/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
