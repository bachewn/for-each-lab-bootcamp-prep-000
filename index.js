function iterativeLog(array){
  array.forEach(el, i) => {
    console.log(`${i}: ${el}`)
  }
}

function iterate(callback){
  const blank =[`blah`, `dude`]

  blank.forEach(callback)  
  return blank
}

function doToArray(array, callback){
    array.forEach(callback)
}