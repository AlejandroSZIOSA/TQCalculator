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

function convertTotalSeeds(ts){
  var converted = 0; 
  var unit = '';
  if(ts > 0 && ts < 1000){
    unit ='g';
    converted = ts;
    return [converted,unit];
  }else if(ts >= 1000 && ts <10000){
      unit = 'kg';
      converted = ts/1000;
      return [converted,unit];
    }else if(ts >= 10000){
      unit ='Ton';
      converted = ts/10000;
      return[converted,unit];
      }else if(ts >= 100000){
        unit = '(Ton*10)';
        converted= ts/10000;
        return[converted,unit];
        }
}
export default {calculateArea,calculateTotalSeeds,convertTotalSeeds}; //export multiple functions at once