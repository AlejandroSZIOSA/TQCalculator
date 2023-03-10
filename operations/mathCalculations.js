function calculateArea(length, height){
  const area = (length*height)
  //check if math operation is NaN. this means not numbers entries,
  if(isNaN(area)){
    return(0)
  } else {
      return (area)
  }
};

function calculateTotalSeeds (area,seedWeight){
    return(area*seedWeight)
};
export default {calculateArea,calculateTotalSeeds}; //export multiple functions at once
