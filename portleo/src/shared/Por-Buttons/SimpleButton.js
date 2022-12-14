import React  from "react";

function SimpleButton(props) {
    React.useEffect(() => {
        
    }, [])
    return(
        <input type={'button'} value={props.buttonValue} ></input>
    );
}

export default SimpleButton;