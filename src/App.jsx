import React from 'react';
import NavBar from './components/navbar/navbar';
import Header from './components/header/header';
import About from './components/about/about';
import MySpecialities from './components/myspecialities/myspecialities';
import MyWork from './components/mywork/mywork';
import Gallery from './components/gallery/gallery';
import Services from './components/services/services';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


function App() {
  return (<>
    <NavBar />
    <Header />
    <About />
    <MySpecialities />
    <MyWork />
    <Gallery />
    <Services />
    <Contact />
    <Footer />
  </>);
}

export default App;
