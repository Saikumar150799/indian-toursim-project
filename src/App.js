import './App.css';
import Header from './Header';
import StateLists from './StateLists';
import StateDetails from './StateDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<StateLists />} />
          <Route path='/states/:statesId' exact element={<StateDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
