import React from "react";

//const Header = (props) => {
//    return (
//            <div>
//                <h1>{props.title}</h1> 
//                {props.subtitle && <h2>{props.subtitle}</h2>}
//            </div>
//        ); 
//    
//}

//removing implicit return and rewriting

const Header = (props) => (
       <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1> 
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
         </div>
        ); 
    


//default props are objects and specific to a component
Header.defaultProps={
     title:"Indecision Application"
}

export default Header;