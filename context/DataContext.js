import React from "react"

const DataContext = React.createContext({
     isZoneSelected:false,
     isSeedSelected:false,
     zoneSelectedToTrue: () => {}, //structure of a function
     seedSelectedToTrue: () => {}, //structure of a function
}); 
//an object

// this will give information


export default DataContext;