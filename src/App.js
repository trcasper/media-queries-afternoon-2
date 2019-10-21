import React from 'react';
import "./reset.css"

import './App.css';
class App extends React.Component {
  constructor() {
    super()

      this.dropdown =
      React.createRef()

  }

  
  toggleShow= () => {
    console.log(this.dropdown.current)
    let {current} = this.dropdown

    if(current.classList.contains("show-animation")){
      current.classList.add("hide-animation")
      current.classList.remove("show-animation")
    } else {
      current.classList.add("show-animation")
      current.classList.remove("hide-animation")
    }
  }


  render() {
  return (
    <div className="App">

      <nav>
        <div id="bootstrap-logo">Start Bootstrap</div>

        <i id="hamburger-icon" className="fas fa-bars fa-2x" onClick= {this.toggleShow} />

        <div id="button-container">
          <div className="button">SERVICES</div>
          <div className="button">PORTFOLIO</div>
          <div className="button">ABOUT</div>
          <div className="button">TEAM</div>
          <div className="button">CONTACT</div>
        </div>
      </nav>
        <div className="dropdown" ref={this.dropdown}>
          <br></br>
        <div className="dropdown-button">SERVICES</div>
        <br></br>
          <div className="dropdown-button">PORTFOLIO</div>
          <br></br>
          <div className="dropdown-button">ABOUT</div>
          <br></br>
          <div className="dropdown-button">TEAM</div>
          <br></br>
          <div className="dropdown-button">CONTACT</div>
          <br></br>
        </div>

      <body>
        <div className="welcome">WELCOME TO OUR STUDIO</div>
        <div className="meet">IT'S NICE TO MEET YOU</div>
        <div className="tell">TELL ME MORE</div>
        <div className="services">SERVICES</div>
        
      </body>
    </div>
  );

  }
}

export default App;
