import React from 'react';

const Dog= (props) => {

    return (

        <div className= "child">
            <img style={{marginBottom:20}} src={props.url} alt="dog"></img>
        </div>
    )
}

export default Dog;