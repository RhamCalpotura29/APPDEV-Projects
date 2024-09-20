function Specifications({ specs }) { 
    return ( 
        <div> 
            <h3>Specifications</h3>
            <ul> 
                <li>Switch Type: {specs.switchType}</li> 
                <li>Key Layout: {specs.layout}</li> 
                <li>Backlighting: {specs.backlighting}</li> 
                <li>Connectivity: {specs.connectivity}</li> 
                <li>Dimensions: {specs.dimensions}</li>
                <li>Weight: {specs.weight}</li> 
                <li>Cable Length: {specs.cableLength}</li> 
                <li>Additional Features: {specs.additionalFeatures.join(", ")}</li> 
            </ul> 
        </div> 
    ); 
} 

export default Specifications