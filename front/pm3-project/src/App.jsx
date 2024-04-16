import Navbar from "./components/Navbar/Navbar";
import Appointments from "./views/MyAppointments/MyAppointments";
import Home from "./views/Home/Home";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Appointments />
        </>
    );
}

export default App;
