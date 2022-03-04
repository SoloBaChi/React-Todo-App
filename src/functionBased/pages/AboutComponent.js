import React from "react";
import {Link, Route} from 'react-router-dom';
import SinglePage from './SinglePageComponent';

const About = ({match}) => {
	//console.log(props)
	return(
		<div className="about-content">
		 <ul className = "about-list">
		   <li><Link to ={`${match.url}/about-app`}>About App</Link></li>
		   <li><Link to ={`${match.url}/about-author`}>About Author</Link></li>
		 </ul>
		 <Route path = {`${match.path}/:slug`}>
		  <SinglePage/>
		 </Route>
		</div>
		);
}
export default About;