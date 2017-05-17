const app = "I don't do much."

function bumpCounter() {
  var counter = 0;

  function addBump() {
    counter += 1
  }

  function getBumps() {
    return counter
  }

  return {addBump, getBumps};
}

function createAnimal(animalType) {
     return (deadlyDevice) => {
       return {animalType, deadlyDevice}
    }
}

var sharkCreator = createAnimal("shark")

var sharkWithFrickinLaserbeam = createAnimal("Shark")("Laserbeam")
var sharkWithFrickinCannon = createAnimal("Shark")("Cannon")

 // function createAnimal(animalType) {
 //
 //   var deadlyDevice = null
 //
 //   function deadlyDevice () {}
 //
 //   return {animalType, deadlyDevice}
 //
 // }
