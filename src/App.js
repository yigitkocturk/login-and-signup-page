import './App.css';
import Signup from './signup/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Login />}>
  //       <Route index element={<Signup />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
    <div className="App">
      <Signup/>
    </div>
  );
}

export default App;