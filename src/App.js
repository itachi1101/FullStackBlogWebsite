import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Register from "./pages/register/Register";
import Single from "../src/components/singlePost/singlePost";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Setting";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/post:postId" element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
