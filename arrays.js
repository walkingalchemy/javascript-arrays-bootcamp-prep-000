var chocolateBars = [
  "snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"
]

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}
