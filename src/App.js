import { BrowserRouter , Routes , Route } from 'react-router-dom';
import TextCount from './components/TextCount';
import Contact from './components/Contact';




function App() {
  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<TextCount/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    
    </>
  );
}

export default App;
