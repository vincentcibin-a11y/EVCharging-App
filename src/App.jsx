import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavigationBar from "../Components/NavigationBar";
import AddBooking from "../Components/AddBooking";
import ViewBooking from "../Components/ViewBooking";

function App() {
  return (
    <BrowserRouter>

      <NavigationBar />

      <Routes>

        <Route path="/" element={<AddBooking />} />

        <Route path="/AddBooking" element={<AddBooking />} />

        <Route path="/ViewBooking" element={<ViewBooking />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;