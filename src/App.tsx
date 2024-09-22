import { Route, Routes, useLocation } from "react-router-dom";
import Home from '@/components/Home'
import MyFlights from "@/components/MyFlights/MyFlights";
import NotFound from "@/components/NotFound";

function App() {
  const location = useLocation();

  return (
    <div 
      className={`
      ${location.pathname === "/my-flights" 
      ? "bg-backgroundSecondary" 
      : location.pathname === "/" 
      ? "bg-background" 
      : "bg-red-500"} w-full h-screen flex items-center justify-center`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-flights" element={<MyFlights />} />

        {/* 404 sayfasi */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
