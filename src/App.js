import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from './components/NavHeader/NavHeader'
import Main from './components/Main/main'
import ShowSection from './components/ShowSection/ShowSection'
import Directory from './components/Directory/Directory'
import Freebies from './components/Freebies/Freebies'
import Blog from './components/Blog/Blog'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }



  render() {
    return (
      <div className="App">
        <NavHeader />
        <Main />  
        <ShowSection />
        <Directory />
        <Freebies />
        <Blog />
      </div>
    );
  }

}

export default App;
