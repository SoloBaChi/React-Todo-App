import React from 'react';
import Font,{Text} from 'react-font';

const Header = () => {
	const headerStyle = {
		padding:"20px 0",
		lineHeight:"1.5rem",
	}
    return(
        <header style={headerStyle}>
            <h1 style ={{
            	color:'#e65117',
            	fontSize:'1.8rem',
            	lineHeight:'1rem',
                textAlign:'center',
                marginTop:'6rem',
                fontWeight:'600',

            }}><Font family="Lora">My Todo</Font></h1>
        </header>
    );
}
export default Header;