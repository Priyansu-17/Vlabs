import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Lab from "./pages/Labs";
import Progress from "./pages/Progress";
import AppTheme from "./theme/AppTheme"; 
import { CssBaseline } from "@mui/material"; 
import ColorModeSelect from "./theme/ColorModeSelect"; 
import { Stack } from "@mui/material";
import Tracks from "./pages/Tracks";
import TracksPage from "./pages/TracksPage";  
import Assesment from "./pages/Assesments";  
import Leaderboard from "./pages/LeaderBoard";
import SignInSide from "./pages/SignInSide";  
import SignUp from "./pages/SignUp";  
import ProtectedRoute from "./components/ProtectedRoute"; 
const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};
const MainLayout = () => {
  const location = useLocation();
  const showSidebar = ["/learn", "/labs","/leaderboard", "/assesment", "/tracks", "/progress"].some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar - Conditionally Rendered */}
      {showSidebar && <Sidebar />}

      {/* Main Content */}
      <div style={{ flexGrow: 1, transition: "margin 0.3s" }}>
        <Navbar />

        <AppTheme>
          <CssBaseline enableColorScheme />
          <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />

          {/* If it's Home Page, render directly without Stack */}
          {location.pathname === "/" || location.pathname === "/login" || location.pathname === "/learn"? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={ <Learn />} />
              <Route path="/login" element={<SignInSide />} />

            </Routes>
          ) : (
            /* Wrap other pages inside Stack */
            <Stack
              direction="column"
              component="main"
              sx={{
                height: "100vh",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 2,
                paddingTop: "0px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Content Wrapper with Controlled Width */}
              <Stack
                direction="column"
                sx={{
                  width: "90%",
                  maxWidth: showSidebar ? "calc(90% - 70px)" : "1200px",
                  flexGrow: 1,
                }}
              >
                <div style={{ padding: "20px", marginTop: "64px" }}>
                  <Routes  element= {<ProtectedRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/register" element={<SignUp />} /> 
                    <Route path="/labs" element={<Lab />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/tracks" element={<Tracks />} />
                    <Route path="/track/:trackName" element={<TracksPage />} />
                    <Route path="/assesment" element={<Assesment />} />
                    <Route path="/leaderboard" element={<Leaderboard />} /> 
                  </Routes>
                </div>
              </Stack>
            </Stack>
          )}
        </AppTheme>
      </div>
    </div>
  );
};


export default App;
