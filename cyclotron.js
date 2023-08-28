const { particleFactory } = require("./factory/particleFactory");

const cyclotron = (particleName, matrixSize) => {

  //creating a class based on particleName using a factory.
  const particle = particleFactory(particleName);

  //creating a matrix that is inside a particle based on matrixSize
  const matrix = particle.matrix(matrixSize)

  return matrix;
}

console.log("empty:", cyclotron("q", 4));
console.log("eletron:", cyclotron('e', 4));
console.log("proton 4x4:", cyclotron('p', 4));
console.log("proton 6x6:", cyclotron('p', 6));
console.log("neutron:", cyclotron('n', 4));