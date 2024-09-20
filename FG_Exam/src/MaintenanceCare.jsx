function MaintenanceCare({ maintenance, warranty, support }) { 
    return ( 
        <div> 
            <h3>Maintenance and Care</h3> 
            <ul> 
                <li>Cleaning: {maintenance.cleaning}</li> 
                <li>Storage: {maintenance.storage}</li> 
            </ul> 
            
            <h4>Warranty: {warranty}</h4> 
            <h4>Support</h4> 
            <p>Website: {support.website}</p> 
            <p>Email: {support.email}</p> 
            <p>Hotline: {support.hotline}</p> </div> 
    ); 
} 

export default MaintenanceCare