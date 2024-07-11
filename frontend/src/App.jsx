import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import NavBar from './components/NavBar';
import Edit from './components/Edit';
import Delete from './components/Delete';




function App() {
  const myWidth = 240;

  return (
    <div className="App">
      <NavBar 
      drawerWidth={myWidth}
      content = 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />              
        </Routes>  
      />
    </div>
  );
}

export default App;
