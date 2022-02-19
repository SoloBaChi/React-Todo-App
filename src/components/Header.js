import React from 'react';

const Header = () => {
	const headerStyle = {
		padding:"20px 0",
		lineHeight:"1.5rem",
	}
    return(
        <header style={headerStyle}>
            <h1 style ={{
            	color:'#ececec',
            	fontSize:'6rem',
            	lineHeight:'1rem',
            	textTransform:'lowercase',
                textAlign:'center',
                marginBottom:'3rem',
                fontWeight:'600'

            }}>todos</h1>
        </header>
    );
}
export default Header;