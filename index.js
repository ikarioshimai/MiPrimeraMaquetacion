import React, {Component} from "react"
import Header from './Header.js';
import Asaid from './Asaid.js';
import Barnav from './Barnav.js';
import Footer from './Footer.js';
import Section from './Section.js';






class Layout extends Component {
  render() {
    return (
      <div>
<Header/>
<Footer/>
<Barnav/>
<Asaid/>
<Section/>
</div>
    );
  }
 }



 export default Layout;