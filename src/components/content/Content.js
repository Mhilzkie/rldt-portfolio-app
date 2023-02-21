import './content.css';
import profpic from '../../images/Mhil.png';
import softdev from '../../images/SOFTDEV.jpg';
import softdev1 from '../../images/SOFTDEV1.jpg';
import p2p from '../../images/P2P.jpg';
import cctv from '../../images/CCTV.jpg';
import repair from '../../images/REPAIR.jpg';
import graphics from '../../images/GRAPHICS.jpg';

import Kodego from '../../images/KODEGOLOGO.png';
import ccdi from '../../images/CCDILOGO.png';
import tesda from '../../images/TesdaLogo.png';

import phone from '../../images/phone.png';
import email from '../../images/email.png';
import location from '../../images/location.png';
import contactus from '../../images/contactus.png';
import linkedin from '../../images/linlkd.png';
import fb from '../../images/fb.png';
import web from '../../images/web.png';
import cartoonimg from '../../images/mycartoonimg.jpg';




const Content = (props) => {
    return (
    <div id='home' className='row'>
      <div className='bglandingpage row'>
          <div className='col ms-0'>
            <img src={cartoonimg} alt="React Logo" height={"850"} width={"880"} />
          </div>
          <div className='greattings col'>
            <h1 className='greetings'>Hi there it's me...</h1>
            <h1 className='nameko'>Ramil</h1>
            <h1 className='justtitle'>Your Friendly Web Developer</h1>
          </div>
      </div>

        <div id='about' className='bgProfile row'>
          <div className='topmeas'>
            <h1 className='profname mb-1' >PROFILE</h1>
          </div>
          <div className='row'>
          <div className='mypic mt-0 col'>
            <img src={profpic} alt="React Logo" height={"300"} width={"330"} />
          </div>
            <h1 className='myname'>Ramil De La Torre</h1>
            <h4 className='myfuturerole mt-0'>Anspirng Web Developer - I.T Specialist - Programmer</h4>
          <div className='col'>
            <h5 className='shortdesc justify text-center'>I am experienced in-Terms of Technicall Aspect in technology like Security Survillance System, Wireless Networks and some IDE Flatform porgramming also add the technicallity in System Administration for high level overviews. corporate strategy for collaborative thinking for Quality system Integration and now In few Months i will be a FULL STACK Web Developer.</h5>
          </div>
          </div>
        </div>

        <div id='portfolio' className='bgporfolio row'>
          <div className='topmeas'>
            <h1 className='profname mb-1' >PORTFOLIO</h1>
            <div className='row'>
            <p className='develop'>SYSTEMS DEVELOPED</p>
              <div className='col'>
                <img className='border border-primary rounded' src={softdev} alt="React Logo" height={"330"} width={"650"} />
                
              </div>
                <div className='col'>
                <img className='border border-primary rounded' src={softdev1} alt="React Logo" height={"330"} width={"650"} />
              </div>
            </div>
            <div className='row mt-5'>
                <div className='col'>
                <p className='develop'>Wireless Internet Service - P2P</p>
                <img className='border border-primary rounded' src={p2p} alt="React Logo" height={"330"} width={"650"} />
              </div>
              <div className='col'>
                <p className='develop'>Security surveillance system</p>
                <img className='border border-primary rounded' src={cctv} alt="React Logo" height={"330"} width={"650"} />
              </div>
            </div>

            <div className='row mt-5'>
              <div className='col'>
                <p className='develop'>Laptop/Desktop Repair</p>
                <img className='border border-primary rounded' src={repair} alt="React Logo" height={"330"} width={"650"} />
              </div>
              <div className='col'>
                <p className='develop'>Graphic Design</p>
                <img className='border border-primary rounded' src={graphics} alt="React Logo" height={"330"} width={"650"} />
              </div>
            </div>
          </div>
          </div> 
        <div id='education' className='bgeducation row mt-5 pt-5'>
          <div className='d-flex justify-content-center'>
            <h1 className='profname mb-1' >EDUCATION</h1>
          </div>
            <div className='edulogos mt-1'>
              <img src={Kodego} alt="React Logo" height={"150"} width={"150"} />
              <h3 class=" text-center mt-1 fw-bolder fontdesign">FULL STACK WEB DEVELOPMENT TRACK</h3>
              <h3 class="text-center">kodeGo Philippines</h3>
              <h5 class="text-center mb-5">October 2022 - Present</h5>
            </div>
            <div className='edulogos mt-1'>
              <img src={ccdi} alt="React Logo" height={"150"} width={"150"} />
              <h3 className=" text-center mt-1 fw-bolder fontdesign">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</h3>
              <h3 className="text-center">Computer Communication Development Institute, Inc.</h3>
              <h3 className="text-center">Arana St., Naga City, Camarines Sur</h3>
              <h3 className="text-center">Thesis :  Biometric-based Computer usage and Laboratory Time Management System</h3>
              <h5 className="text-center mb-5">June 2006 - March 2010</h5>
            </div>
            <div className="mt-1 mb-1">
                        <div className="container text-center">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                              <div className="col"></div>
                              <div className="col"><img src={ccdi} alt="React Logo" height={"150"} width={"150"} /></div>
                              <div className="col"><img src={tesda} alt="React Logo" height={"150"} width={"150"} /></div>
                              <div className="col"></div>
                            </div>
                        </div>
            </div>
                    <div className="mt-1 mb-1 colorstyle">
                        <div className="container text-center">
                            <h3 className=" text-center mt-3 fw-bolder fontdesign">COMPUTER PROGRAMMING NC IV</h3>
                            <h3 className="text-center">Computer Communication Development Institute, Inc.</h3>
                            <h3 className="text-center">Arana St., Naga City, Camarines Sur</h3>
                            <h3 className="text-center">Vocational Course</h3>
                            <h5 className="text-center">April 20, 2009</h5>
                        </div>
                    </div>
                    <div className="mt-2 mb-2colorstyle">
                        <h3 className=" text-center mt-5 fw-bolder fontdesign">COMPUTER HARDWARE SERVICING NC II</h3>
                        <h3 className="text-center">Computer Communication Development Institute, Inc.</h3>
                        <h3 className="text-center">Arana St., Naga City, Camarines Sur</h3>
                        <h3 className="text-center">Vocational Course</h3>
                        <h5 className="text-center">May 13, 2008</h5>
                    </div>
                    <div className="mt-2 mb-2 colorstyle">
                        <h3 className=" text-center mt-5 fw-bolder fontdesign">COMPUTER SYSTEM SERVICING NC II</h3>
                        <h3 className="text-center">Computer Communication Development Institute, Inc.</h3>
                        <h3 className="text-center">Arana St., Naga City, Camarines Sur</h3>
                        <h3 className="text-center">Vocational Course</h3>
                        <h5 className="text-center">May 19, 2016</h5>
                    </div>
                    <div className="mt-5 mb-5 colorstyle">
                        <h3 className=" text-center mt-5 fw-bolder fontdesign">ELECTRONICS PRODUCTS ASSEMBLY and SERVICING NC II</h3>
                        <h3 className="text-center">Computer Communication Development Institute, Inc.</h3>
                        <h3 className="text-center">Arana St., Naga City, Camarines Sur</h3>
                        <h3 className="text-center">Vocational Course</h3>
                        <h5 className="text-center">September 8, 2017</h5>
                    </div>
                </div>
            <div id='skills' className='bgskill row'>
              <div className='d-flex justify-content-center'>
                <h1 className='skilllist mb-1 mt-5' >SKILLS</h1>
              </div>  
              <div class="row mt-5 mb-3">

                        <div className="col container text-center">
                            <img className="" alt="React Logo" src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="128" height="128"/>
                            <h3 className="text-center">React JS</h3>
                        </div>  
                        
                        <div className="col container text-center">
                            <img className="" alt="HTML Logo" src="http://cdn.onlinewebfonts.com/svg/img_565447.png" width="128" height="128"/>
                            <h3 className="text-center">HTML</h3>
                        </div>
                        <div className="col container text-center">
                            <img className="" alt="CSS Logo" src="https://seeklogo.com/images/C/css-logo-FD0B685547-seeklogo.com.png" width="128" height="128"/>
                            <h3 className="text-center">CSS</h3>
                        </div>
                        <div className="col container text-center">
                            <img className="" alt="Javascript Logo" src="https://img.icons8.com/ios_filled/12x/javascript-logo.png"  width="128" height="128"/>
                            <h3 className="text-center">JavaScript</h3>
                        </div>
                        <div className="col container text-center">
                            <img className="" alt="Node Logo" src="https://pic.onlinewebfonts.com/svg/img_189697.png" width="128" height="128"/>
                            <h3 className="text-center">Node JS</h3>
                        </div>
                        
                        <div className="row mt-5 mb-3">
                        <div className="col container text-center">
                            <img className="" alt="Bootstrap Logo" src="https://www.shareicon.net/data/2015/08/31/93786_bootstrap_512x512.png" width="128" height="128"/>
                            <h3 className="text-center">Boostrap</h3>
                        </div>
                        <div className="col container text-center">
                            <img className="" alt="VB Logo" src="https://www.ictdemy.com/images/5820968287c96_image_0_thumb.svg" width="128" height="128"/>
                            <h3 className="text-center">Visual Basic .Net</h3>
                        </div>
                        
                        <div className="col container text-center">
                            <img className="" alt="CCTV Logo" src="https://i.pinimg.com/originals/54/27/7b/54277bd6bf206c36453d3244ad9b014f.png" width="128" height="128"/>
                            <h3 className="text-center">Survillance System</h3>
                        </div>
                        <div className="col container text-center">
                            <img className="" alt="AV Logo" src="https://www.pngitem.com/pimgs/m/10-107359_audio-av-circle-music-play-song-video-icon.png" width="128" height="128"/>
                            <h3 className="text-center">AudioVideo System</h3>
                        </div>
                        <div className="col container text-center">
                            <img className="" alt="CorelDraw Logo" src="https://cdn-icons-png.flaticon.com/512/29/29107.png" width="128" height="128"/>
                            <h3 className="text-center">CorelDraw</h3>
                        </div>
                    </div>
                    </div>
            </div>

            <div id='contacts' className='bgcontact row'>
              <div className='d-flex justify-content-center'>
                <h1 className='aboutpage mb-1 mt-5' >CONTACTS</h1>
              </div>

              <div className='col container text-center border-success'>
                <div className="mt-5">
                  <ul className="fa-ul mb-0">
                      <div className="row p-0 ms-0 text-white">
                        <a><img src={phone} alt="React Logo" height={"15"} width={"20"} /> 09150084904</a>
                      </div>
                                  
                      <div className="row text-white">
                        <a><img src={location} alt="React Logo" height={"16"} width={"20"} /> Address: #11 Zone 1, Garza Village, Paolbo, Calabanga,Camarines Sur</a>
                      </div>

                      <div className="row text-white">
                        <a><img src={email} alt="React Logo" height={"20"} width={"30"} />mhilzkie06@gmail.com</a>
                      </div>

                    <div className="row ">
                      <a><img src={contactus} alt="React Logo" height={"447"} width={"390"} /></a>
                    </div>
                </ul>
              </div>
            </div>
           
          </div>  
          
          <div class="row content margin d-flex content-container flex-column footerbg">
                    <div class="col mt-5 mb-0">
                        <a href="https://www.facebook.com/mhilzkie010689">
                        <img src={fb} alt="React Logo" height={"20"} width={"20"} /> mhilzkie010689</a>
                            
                    </div>
                    <div class="col">
                        <a href="https://www.linkedin.com/in/ramil-dela-torre-361974b6/">
                        <img src={linkedin} alt="React Logo" height={"20"} width={"20"} />linkedin : RAMIL DELA TORRE</a>
                            
                    </div>
                    <div class="col">
                        <a href="https://mhilzkie06.wixsite.com/rldtwispitsolutions">
                        <img src={web} alt="React Logo" height={"20"} width={"20"} />Website : RLDTWISPITSOLUTIONS</a>
                            
                    </div>
                    <div class="col"><a href="#">
                      <img src={phone} alt="Phone Logo" height={"20"} width={"20"} /> Tel No. :(054)871-5038</a> 
                            
                    </div>
                    <div class="col">
                            <a href="">©2022 by Mhilzkie. Proudly created with html-Css-Bootstrap-JavaScript</a>    
                                
                    </div>
              </div> 

        
        
      

    </div>
  );
};



export default Content;