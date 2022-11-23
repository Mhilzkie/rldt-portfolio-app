import './header.css';
import mylogo from  '../../images/logo.png';

const Header = (props) => {
    console.log('Header rendered');
    return (
        <div className="d-flex justify-content-center mt-0 text-white header">
                                <div className="bglogo col">
                                  <img className="bgimg" src={mylogo} alt="RLDT Logo" height={"50"} width={"50"}/>
                                </div>
                                <div className="bgdiv col"></div>
                                <div className="topnav" id="myTopnav">
                                    <a href="#home">Home</a>
                                    <a href="#about">Profile</a>
                                    <a href="#portfolio">Portfolio</a>
                                    <a href="#education">Education</a>
                                    <a href="#skills">Skills</a>
                                    <a href="#contacts">Contacts</a>
                                    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
                                      <i className="fa fa-bars"></i>
                                    </a>
                                  </div>
                                
                                <div className="bgdiv col"></div>
                                <div className="bgdiv col"></div>
                            </div>
        // <header className='d-flex w-100 flex-row justify-content-between'>
        // <h1>Header - {props.header}</h1>
        // <h1>Weather</h1>
        // </header>
    );
}

function myFunction(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

export default Header;