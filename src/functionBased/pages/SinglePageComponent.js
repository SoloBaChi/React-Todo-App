import React from 'react';
import {useParams} from 'react-router-dom';

const SinglePage = () => {
	//console.log(useParams())
    const aboutData = [
    {
    	slug:"about-app",
    	title:"About the app",
    	description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    },
    {
    	 slug: "about-author",
         title: "About the Author",
         description:
      "This app was developed by Solomon Chiakonam, a junior web developer @codeblaze academy and a graphics designer. He is opened to internship. so go ahead and connect with solomon on Twitter @solobachi.",
    },
    ];
    const {slug} = useParams();
    const aboutContent = aboutData.find(item => item.slug === slug)
    //console.log(aboutContent)
    const {title , description} = aboutContent;

	return(
		<div className="main-content">
		<h1>{title}</h1>
		<p>{description}</p>
		</div>
		);
}
export default SinglePage;