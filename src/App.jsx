import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import Jobs from "./pages/Jobs/Jobs";
// import Staffing from "./pages/Staffing/Staffing";
// import Manpower from "./pages/Manpower/Manpower";
// import Payroll from "./pages/Payroll/Payroll";
// import Executive from "./pages/Executive/Executive";
// import ItDevelopment from "./pages/ItDevelopment/ItDevelopment";
// import NotFound from "./pages/NotFound/NotFound";


const About = React.lazy(() => import("./pages/About/About"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const Contact = React.lazy(() => import("./pages/Contact/Contact"))
const Jobs = React.lazy(() => import("./pages/Jobs/Jobs"))
const Staffing = React.lazy(() => import("./pages/Staffing/Staffing"))
const Manpower = React.lazy(() => import("./pages/Manpower/Manpower"))
const Payroll = React.lazy(() => import("./pages/Payroll/Payroll"))
const Executive = React.lazy(() => import("./pages/Executive/Executive"))
const ItDevelopment = React.lazy(() => import("./pages/ItDevelopment/ItDevelopment"))
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"))


import ScrollToTop from "./function/ScrollToTop/ScrollToTop"


const App = () => (




  <>
    <ScrollToTop />
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    
        <Route path="/about" element={<About />}></Route>
     
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/jobs" element={<Jobs />}></Route>


      <Route path="/manpower" element={<Manpower />}></Route>
      <Route path="/executive" element={<Executive />}></Route>
      <Route path="/payroll" element={<Payroll />}></Route>
      <Route path="/staffing" element={<Staffing />}></Route>
      <Route path="/itDevelopment" element={<ItDevelopment />}></Route>
      <Route path="/*" element={<NotFound />}></Route>

    </Routes>
    </Suspense>
  </>

)


export default App;