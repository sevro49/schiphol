import { Route, Routes, useLocation } from "react-router-dom";
import Home from '@/components/Home'
import MyFlights from "@/components/MyFlights/MyFlights";

function App() {
  const location = useLocation();

  return (
    <div className={`${location.pathname === "/my-flights" ? "bg-backgroundSecondary" : "bg-background"} w-full h-screen flex items-center justify-center`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-flights" element={<MyFlights />} />
      </Routes>
    </div>
  )
}

export default App
