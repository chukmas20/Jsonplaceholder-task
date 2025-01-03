import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserDetails from './pages/UserDetails';

function App() {

  return (
    <Router>
       <Routes>
         <Route path="/"  element={<HomePage />}  />
         <Route path="/user/:id" element={<UserDetails />} /> {/* User details page */}
       </Routes>
     </Router>
  );
}

export default App;
