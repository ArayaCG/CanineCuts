import Navbar from "./components/Navbar/Navbar";
import Appointments from "./views/MyAppointments/MyAppointments";
import Home from "./views/Home/Home";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Footer from "./components/Footer/Footer";
import AboutUs from "./views/AboutUs/AboutUs";
import ContactUs from "./views/ContactUs/ContactUs";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Appointments />
            <AboutUs />
            <ContactUs />
            <Register />
            <Login />
            <Footer />
        </>
    );
}

export default App;
