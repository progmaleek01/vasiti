import React from 'react'
import Banner from './components/banner/Banner'
import Exbanner from './components/experience-banner/Exbanner'
import Exbanner2 from './components/experience-banner/Exbanner2'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import SubHeader from './components/subHeader/SubHeader'
import Testimonial2 from './components/testimonials/Testimonial2'
import Testimonials from './components/testimonials/Testimonials'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Story from './components/shareStory/Story'


const App = () => {
  return (
    <Router>
    <>
      <Header/>
      <SubHeader />
      <Switch>
        <Route exact path='/'>
          <Banner />
          <Exbanner/>
            <Testimonials/>
            <Exbanner2/>
            <Testimonial2/>
          </Route>

          <Route exact path='/story'>
            <Story/>
          </Route>


        

      </Switch>
      <Footer/>
      </>
    </Router>

  )
}

export default App