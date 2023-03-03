function calculateArea(length, height){
  const test = (length*height)
  //check if math operation is NaN. this means not numbers entries
  if(isNaN(test)){
    return(0)
  } else {
      return (test)
  }
};

function calculateTotalSeeds (area,seedWeight){
    return(area*seedWeight)
};
export default {calculateArea,calculateTotalSeeds};
