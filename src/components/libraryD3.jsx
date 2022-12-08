import  * as d3 from 'd3';
import React from 'react';


const Library = () => {
    
    d3.selectAll("p").style("color", "blue")

    return (
        <React.Fragment>
            <p></p>
        </React.Fragment>
    )
};

export default Library;