import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar.component";
import ArticleList from "./components/article-list.component";
import ArticleDetail from "./components/article-detail.component";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar />
            <Routes>
             <Route path="/" element={<ArticleList />} />
             <Route path="/:id" element={<ArticleDetail />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
