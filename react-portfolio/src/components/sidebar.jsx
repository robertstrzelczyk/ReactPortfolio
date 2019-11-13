import React, {Component} from 'react'

export default class Sidebar extends Component {
 
    render() {
        return (
          <div>
          <div>
            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
            <aside id="colorlib-aside" className="border js-fullheight">
              <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                <h1 id="colorlib-logo"><a href="#">Robert Strzelczyk</a></h1>
                <span className="email"><i className="icon-mail"></i> robert.strzelczyk35a@gmail.com</span>
              </div>
              <nav id="colorlib-main-menu" role="navigation" className="navbar">
                <div id="navbar" className="collapse">
                  <ul>
                    <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                    <li><a href="#about" data-nav-section="about">O mnie</a></li>
                    <li><a href="#carriers" data-nav-section="carriers">Kariera</a></li>
                    <li><a href="#skills" data-nav-section="skills">Umiejętności</a></li>
                    <li><a href="#contact" data-nav-section="contact">Kontakt</a></li>
                  </ul>
                </div>
              </nav>
              <nav id="colorlib-main-menu">
                <div className="row">
                <ul>
                  <div className="col-lg-3">
                  <li><a href="https://www.facebook.com/robert.strzelczyk.90" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                  </div>
                  <div className="col-lg-3">
                  <li><a href="https://www.instagram.com/rstrzelczyk/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                  </div>
                  <div className="col-lg-3">
                  <li><a href="https://www.linkedin.com/in/robert-strzelczyk-3910b415a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                  </div>
                  <div className="col-lg-3">
                  <li><a href="https://github.com/robertstrzelczyk" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                  </div>
                </ul>
                </div>
              </nav>
            </aside>
          </div>
        </div>
        )
    }
}