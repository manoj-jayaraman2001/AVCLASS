import React, { useEffect } from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Designs from "../blog/Blog"
import Bedroom from "./Bedroom"
import kitchenroom from "./kitchenroom/kitchenroom"
// import ceiling from "./cielingroom/ceiling"
// import livingroom from "./livingroom/livingroom"
// import bathroom from "./bathroom/bathroom"
import tv from "./Tv/tv"
import Livingroom from "./livingroom/livingroom"
import Bathroom from "./bathroom/bathroom"
import Ceiling from "./cielingroom/ceiling"
import Tv from "./Tv/tv"



const Pages = () => {

  // const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth"
  //   });
  // }, []);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/Designs' component={Designs} /> 
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/bedroom' component={Bedroom} />
          <Route exact path='/kitchen' component={kitchenroom} />
          <Route exact path='/livingroom' component={Livingroom} />
          <Route exact path='/ceiling' component={Ceiling} />
          <Route exact path='/bathroom' component={Bathroom} />
          <Route exact path='/tv' component={Tv} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
