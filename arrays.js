var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray (array,newElement) {
  var newArray = array.unshift(newElement);
  return newArray
}
function destructivelyAddElementToBeginningOfArray (array,newElement) {
  array = array.unshift(newElement)
  return array
}
