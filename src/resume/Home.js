import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../resume/image';
import DarkModeToggle from "react-dark-mode-toggle";
import ProfessionalSkill from '../resume/ProfessionalSkill';

function Home() {
    const [isDarkMode,setIsDarkMode]=useState(()=>false)

    return (
        <div className={isDarkMode?"body-dark":"body"}>
            
        <div className={"cover"}>
                    <div className={isDarkMode?'mydark sticky-top':"myColor sticky-top"}>
                        <ul className={isDarkMode?'nav myNav-dark':'nav myNav'} id='navigation'>
                            <li className='nav-item'><Link to='/' className='nav-link active navbar-text link'>Home</Link></li>
                            <li className='nav-item'><a href='https://github.com/Gnalan' className='nav-link active navbar-text link'>Project</a></li>
                            <li className='nav-item'><a href='#footer' className='nav-link active navbar-text link'>Contact</a></li>
                            <li className='nav-item nav-link'><DarkModeToggle onChange={setIsDarkMode} 
                                                checked={isDarkMode}
                                                size={30}/></li>
                            {/* <li className='nav-item nav-link'><button onClick={()=>setTheme(!theme)}>Theme</button></li> */}
                </ul>
                    </div>
            <div className={isDarkMode?"cover text-center mydark":'myColor cover text-center'} id='heading'>
                <h1 className='myName'>Hai<span style={{'fontSize':30}}>&#128075;</span>, This is Gunaseelan</h1>
                <p>Software Developer </p> 

            </div>
        <div className={isDarkMode?'wave-bg-dark':'wave-bg'}></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-5'>
                        {/* <div className='img-wrapper'>
                            <img src={Myphoto}
                                alt='myphoto'
                                width='300px'
                                height='300px'></img>
                        </div><br /><br/> */}
                        <Image /><br /><br />
                    </div>
                    <div className='col-sm-7'>
                        <h2 className='myskills'>Career Objective</h2>
                        <br></br>
                        <p className='skills'>Looking for an entry-level position as a Software Engineer in a dynamic firm that values my analytical and technical skills and provides scope for updating my knowledge, I seek a company that will help me contribute to its development while concurrently aiding my personal growth.</p>
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h2 className='myskills'>Technical Skills</h2>
                        <br />
                        <ul className='skills'>
                            <li>Front end Languages - HTML, CSS, JavaScript, ReactJs</li>
                            <li>Back end Languages - Python</li>
                            <li>Data Base - Oracle Sql</li>
                        </ul>
                    </div>
                    <div className='col-sm-6'>
                        <h2 className='myskills'>Internship Certificate</h2>
                        <br />
                        <ul className='skills'>
                            <li>I done ReactJS intern in Azure soft tech solutions</li>
                            <li>I done Python certification in Alpha web academy</li>
                        </ul>
                    </div>
                    <br />
                    <div className='col-sm-12'>
                        <h2 className='myskills'>Professional Skills</h2><br/>
                            <ProfessionalSkill />
                    </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/>
                    <div className='col-sm-12'>
                        <h2 className='myskills'>Projects</h2>
                        <br />
                        <table className={isDarkMode?'table table-dark table-striped':'table table-light table-striped'}>
                            <thead>
                                <tr>
                                    <th>Project domain</th>
                                    <th>Programming languages</th>
                                    <th>Git link</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Front End Web Development</td>
                                    <td>HTML, CSS, JavaScript,Bootstrap, ReactJS</td>
                                    <td><a href={'https://github.com/Gnalan/MY-PROJECT'}>Resume Application</a></td>

                                </tr>
                                <tr>
                                    <td>Front End Web Development</td>
                                    <td>HTML, CSS, JavaScript, ReactJS</td>
                                    <td><a href={'https://github.com/Gnalan/MY-PROJECT'}>Todolist Application</a></td>
                                    
                                </tr>
                                <tr>
                                    <td>Front End Web Development</td>
                                    <td>HTML, CSS, JavaScript, ReactJS</td>
                                    <td><a href={'https://github.com/Gnalan/MY-PROJECT'}>Form Validation</a></td>
                                    
                                </tr>
                                
                               
                                
                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm-12'>
                        <h2 className='myskills'>Educational Qualification</h2>
                        <br />
                        <table className={isDarkMode?'table table-dark table-striped':'table table-light table-striped'}>
                            <thead>
                                <tr>
                                    <th>Degree</th>
                                    <th>Institution</th>
                                    <th>Year Of Passing</th>
                                    <th>Persentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>M.SC Maths</td>
                                    <td>Kamaraj Government Arts College</td>
                                    <td>2020</td>
                                    <td>83%</td>
                                </tr>
                                <tr>
                                    <td>B.SC Maths</td>
                                    <td>Raju's College,Rajapalayam</td>
                                    <td>2017</td>
                                    <td>74%</td>
                                </tr>
                                <tr>
                                    <td>SSC</td>
                                    <td>S.S.Hr.Sec.School,Sivagiri</td>
                                    <td>2014</td>
                                    <td>74%</td>
                                </tr>
                                <tr>
                                    <td>SSLC</td>
                                    <td>S.S.Hr.Sec.School,Sivagiri</td>
                                    <td>2012</td>
                                    <td>74%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />
            <div className={isDarkMode?"mycolor mydark footer ":'footer myColor text-center'} id='footer'>
                <ul className='nav justify-content-center'>
                    {/* <li className='nav-item'>
                        <a href='www.github.com/Mr-hollowman'
                        ><span className='tooltip'>Github</span><i className={isDarkMode? 'fa fa-github dark-git':'fa fa-github'}></i></a>
                    </li> */}
                    <li className='nav-item'>
                        <a href='https://www.instagram.com/gunalan_4'
                        ><i className='fa fa-instagram'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://www.linkedin.com/in/gunaseelan-m-5a7022229'
                        ><i className='fa fa-linkedin'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://wa.me/918610268591'
                        ><i className='fa fa-whatsapp'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://www.youtube.com/channel/UCJtBYPWAXeZfInoOPOcgObw'
                        ><i className="fa fa-youtube"></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='mailto:selvamani825@gmail.com'
                        ><i className="fa fa-envelope"></i></a>
                    </li>
                </ul>

            </div>
            <div className='text-center' style={{padding:"30px"}}>
                copywrite ©guna4g 2022
            </div>
        </div>
        </div>
    );
}

export default Home;