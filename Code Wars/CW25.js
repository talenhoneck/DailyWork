// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.




// calculate volume of cuboid

//three inputs:
// Length, width, height

//return volume:
//example 1 * 1 * 1 = 1
//example 2 * 2 * 2 = 8

//accept 3 variables
//multiply them together
//return sum

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
  }



//   const { assert } = require('chai')

// describe("Tests", () => {
//   it("Example tests", () => {
//     assert.strictEqual(Kata.getVolumeOfCuboid(1,2,2),  4);
//     assert.strictEqual(Kata.getVolumeOfCuboid(6,2,5), 60);
//   });
// });
