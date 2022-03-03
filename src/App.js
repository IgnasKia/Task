import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NewUser from "./components/main/NewUser";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/main/Categories";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<NewUser />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
