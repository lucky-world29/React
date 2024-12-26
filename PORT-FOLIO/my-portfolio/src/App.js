// import React, { useRef } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import HeroSection from "./components/HeroSection/HeroSection";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// import Blog from "./components/Blog/Blog";
// import Project from "./components/Project/Project";
// import Footer from "./components/Footer/Footer";
// import Contact from "./components/About/Contact";

// function App() {
//     const footerRef = useRef(null);
//     const projectRef = useRef(null);
//     return (
//         <Router>
//             <div>
//                 <Routes>
//                     {/* Route for Blog page */}
//                     <Route 
//                         path="/blog" 
//                         element={
//                             <>
//                                 <Navbar />
//                                 <Blog />
//                                 <Footer />
//                             </>
//                         } 
//                     />
//                     {/* Other routes for other pages */}
//                     <Route 
//                         path="/" 
//                         element={
//                             <>
//                                 <Navbar />
//                                 <HeroSection />
//                                 <About footerRef={footerRef} />
//                                 <Services />
//                                 <div ref={projectRef}>
//                                     <Project />
//                                 </div>
//                                 <Contact />
//                                 <div ref={footerRef}>
//                                     <Footer />
//                                 </div>
//                             </>
//                         } 
//                     />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;


import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";
import Contact from "./components/About/Contact";

function App() {
    const footerRef = useRef(null);
    const projectRef = useRef(null);

    return (
        <Router>
            <div>
                <Routes>
                    {/* Route for Blog page */}
                    <Route 
                        path="/blog" 
                        element={
                            <>
                                <Navbar />
                                <Blog />
                                <Footer />
                            </>
                        } 
                    />
                    {/* Main route */}
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Navbar />
                                <HeroSection />
                                <section id="about">
                                    <About footerRef={footerRef} />
                                </section>
                                <section id="services">
                                    <Services />
                                </section>
                                <section id="project">
                                    <div ref={projectRef}>
                                        <Project />
                                    </div>
                                </section>
                                <section id="contact">
                                    <Contact />
                                </section>
                                <Footer ref={footerRef} />
                            </>
                        } 
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
