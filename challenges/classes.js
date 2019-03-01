// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CuboidMaker{
    constructor(props){
        this.length = props.length
        this.width  = props.width
        this.height = props.height
    }
    volume(){
        return this.length * this.width * this.height
    }
    surfaceArea(){
        return 2 * ((this.length * this.width) + ( this.length  * this.height) + ( this.width * this.height))
    }
}

  
  let cuboid = new CuboidMaker({length:4, width:5, height:5})
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  
  
  class CubeMaker extends CuboidMaker{
      constructor(childProps){
        super(childProps)
        this.sides = childProps.sides
      }
      howManySides(){
          console.log(`I am a cube and I have ${this.sides}`)
      }
  }

  let cubmaker = new CubeMaker({length:4, width:5, height:5, sides: 4})
  console.log(cubmaker.volume()); // 100 
  console.log(cubmaker.surfaceArea()); // 130  
  console.log(cubmaker.howManySides());  