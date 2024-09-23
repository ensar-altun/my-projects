import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AvukatOtomasyonGörevOluşturma from "./pages/AvukatOtomasyonGörevOluşturma";
import LoginPage from "./pages/LoginPage";
import AvukatOtomasyonGrevler from "./pages/AvukatOtomasyonGrevler";
import AvukatOtomasyonDavalar from "./pages/AvukatOtomasyonDavalar";
import AvukatOtomasyonAnasayfa from "./pages/AvukatOtomasyonAnasayfa";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;



  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/avukat-otomasyon-gorev-olusturma" element={<AvukatOtomasyonGörevOluşturma />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route
        path="/avukat-otomasyon-grevler"
        element={<AvukatOtomasyonGrevler />}
      />
      <Route
        path="/avukat-otomasyon-davalar"
        element={<AvukatOtomasyonDavalar />}
      />
      <Route
        path="/avukat-otomasyon-anasayfa"
        element={<AvukatOtomasyonAnasayfa />}
      />
    </Routes>
  );
}
export default App;
