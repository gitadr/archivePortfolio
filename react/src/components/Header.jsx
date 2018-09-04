import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <h1>
              Hello I’m Aaron, a British Product Designer based in Sydney.
            </h1>
            <p className="intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo est id massa porttitor ultrices. Curabitur nec lobortis
              purus, non egestas neque. Vivamus sollicitudin consequat magna,
              nec mattis nunc luctus eu. Cras et risus faucibus, aliquet risus
              ut, egestas dolor. Sed id nisi sit amet arcu condimentum suscipit.
              Maecenas vel nisi eu mauris porta auctor.
            </p>
            <a href="#" className="button">
              <span className="linkIcon" />
              <span className="text">Get In Touch</span>
            </a>
            <a href="#" className="button">
              <span className="downloadIcon" />
              <span className="text">Download C.V.</span>
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
