function getTargetUpperCase(array, target){
  for (let i = 0; i < array.length; i++){
    if (array[i] === target){
      return array[i].toUpperCase();
    }
  }
}

// DO NOT REMOVE //
module.exports = {
  getTargetUpperCase: getTargetUpperCase,
}