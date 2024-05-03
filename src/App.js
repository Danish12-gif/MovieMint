import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Overview from "./Overview";
function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
