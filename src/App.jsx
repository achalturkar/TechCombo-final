import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Spinner from "./components/Spinner/Spinner";
import ScrollToTop from "./function/ScrollToTop/ScrollToTop"


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




const App = () => (

  <>
    <ScrollToTop />
    <Suspense fallback={<div className="flex justify-center items-center"><Spinner /> </div>}>
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