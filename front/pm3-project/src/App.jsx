import Navbar from "./components/Navbar/Navbar";
import Appointments from "./views/MyAppointments/MyAppointments";
import Home from "./views/Home/Home";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Appointments />
            <Register />
            <Login />
        </>
    );
}

export default App;
