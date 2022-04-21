import Home from "./Components/Home";
import NewProject from "./Components/NewProject";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./Components/Library";
import ProjectInfo from "./Components/ProjectInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact path = "/:id" element={<ProjectInfo/>}></Route>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route exact path = "/new" element={<NewProject/>}></Route>
        <Route exact path = "/lib" element={<Library/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
