import "./App.css";
import Startup from "./components/startup/Startup";
// import Signup from "./components/startup/Signup";
import { Routes, Route } from 'react-router-dom';
import WorkingSpace from "./components/workingspace/WorkingSpace";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/space" element={<WorkingSpace />} />
      </Routes>
    </>
  );
}

export default App;
