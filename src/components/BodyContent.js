import React from "react";
import Col1Content  from "./Col1Content";
import Col2Content  from "./Col2Content";

function BodyComponent(){
    return(
        <div className="container-fluid text-white bg-dark">
            <div className="row">
                <Col1Content />
                <Col2Content />
            </div>
        </div>
    );

}

export default BodyComponent;