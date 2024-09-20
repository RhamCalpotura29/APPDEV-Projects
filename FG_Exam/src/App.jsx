
import KeyboardOverview from './KeyboardOverview';
import Specifications from './Specifications';
import KeyFeatures from './KeyFeatures';
import SetupInstructions from './SetupInstructions';
import Troubleshooting from './Troubleshooting';
import MaintenanceCare from './MaintenanceCare';

function App() { 
  const keyboardData = {
     model: "KB-X1000", 
     overview: "The KB-X1000 is a high-performance mechanical keyboard designed for gamers, professionals, and everyday users who demand precision and comfort...", 
     specifications: { switchType: "Cherry MX Red (Mechanical)", 
     layout: "Full-size (104 keys)", 
     backlighting: "RGB with customizable colors", 
     connectivity: "Wired (USB 2.0)", 
     dimensions: "440 mm x 135 mm x 35 mm", 
     weight: "1.2 kg", 
     cableLength: "1.8 meters", 
     additionalFeatures: ["Anti-ghosting", "N-key rollover", "Dedicated media controls"], 
    }, 
    
    keyFeatures: ["Customizable RGB Backlighting", "Cherry MX Red switches", "Programmable Keys", "Anti-Ghosting & N-Key Rollover", "Dedicated Media Controls"], 
    setupInstructions: {
       unboxing: "Carefully remove the keyboard and accessories from the box.", 
       connecting: "Plug the USB cable into an available USB port on your computer...", 
       softwareInstallation: "Download the configuration software from the manufacturer’s website...", 
       keycapRemoval: "Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.", 
    }, 
    
    troubleshooting: { 
      notResponding: "Ensure the USB connection is secure...", 
      backlightingIssues: "Check if the backlight is disabled or set to minimal brightness...", 
      keyNotRegistering: "Confirm that no physical obstructions are affecting the key...", 
    }, 
    
    maintenance: { 
      cleaning: "Disconnect the keyboard from the computer...", 
      storage: "Store the keyboard in a cool, dry place...", 
    }, 
    
    warranty: "2 years from the date of purchase", 
    support: { 
      website: "www.keyboardcompany.com", 
      email: "support@keyboardcompany.com", 
      hotline: "1-800-555-1234", 
    } 
  }; 
  
  return ( 
    <div className="App"> 
      <nav> 
        <a href="#overview">Overview</a> 
        <a href="#specs">Specifications</a> 
        <a href="#features">Key Features</a> 
        <a href="#setup">Setup</a> 
        <a href="#troubleshooting">Troubleshooting</a> 
        <a href="#maintenance">Maintenance & Care</a>
     </nav> 
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS720IP04u337jBsoozAD17z7PMikFZOIgfRQ&s" alt="profile-icon" />
     <h1>KB-X1000 Keyboard</h1> 
     <section id="overview"> 
     <KeyboardOverview model={keyboardData.model} overview={keyboardData.overview} /> 
     </section> 
     <section id="specs"> 
     <Specifications specs={keyboardData.specifications} /> 
     </section> 
     <section id="features"> <KeyFeatures features={keyboardData.keyFeatures} /> 
     </section> 
     <section id="setup"> <SetupInstructions instructions={keyboardData.setupInstructions} /> 
     </section> 
     <section id="troubleshooting"> <Troubleshooting issues={keyboardData.troubleshooting} /> 
     </section> 
     <section id="maintenance"> <MaintenanceCare maintenance={keyboardData.maintenance} warranty={keyboardData.warranty} support={keyboardData.support} /> 
     </section> 
     <footer> <p>Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe! Created By Calpotura, Rham </p> </footer> </div> 
     
  ); 
} 

export default App;