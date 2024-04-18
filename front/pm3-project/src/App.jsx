import Navbar from "./components/Navbar/Navbar";
import Appointments from "./views/MyAppointments/MyAppointments";
import Home from "./views/Home/Home";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Footer from "./components/Footer/Footer";
import AboutUs from "./views/AboutUs/AboutUs";
import ContactUs from "./views/ContactUs/ContactUs";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/appointments" element={<Appointments />}/>
                <Route path="/aboutUs" element={<AboutUs />}/>
                <Route path="/contactUs" element={<ContactUs />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
