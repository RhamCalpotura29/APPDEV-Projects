function Troubleshooting({ issues }) { 
    return ( 
        <div> 
            <h3>Troubleshooting</h3> 
            <ul> 
                <li>Keyboard Not Responding: {issues.notResponding}</li> 
                <li>Backlighting Issues: {issues.backlightingIssues}</li> 
                <li>Key Not Registering: {issues.keyNotRegistering}</li> 
            </ul> 
        </div> 
    ); 
} 

export default Troubleshooting;