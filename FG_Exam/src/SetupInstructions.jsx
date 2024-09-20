function SetupInstructions({ instructions }) { 
    return ( 
        <div> 
            <h3>Setup Instructions</h3> 
            <ul> 
                <li>Unboxing: {instructions.unboxing}</li> 
                <li>Connecting the Keyboard: {instructions.connecting}</li> 
                <li>Software Installation: {instructions.softwareInstallation}</li> 
                <li>Keycap Removal: {instructions.keycapRemoval}</li> 
            </ul>
        </div> 
    ); 
} 

export default SetupInstructions