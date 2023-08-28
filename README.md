# Lexart-cyclotron

classes/

  Eletron.js
  EmptyParticle.js
  Neutron.js
  Proton.js

  -- Every class has a matrix method that creates a matrix based on its own logic to be used on cyclotron.js.

factory/

  particleFactory.js

  -- Instatiates a new particle class based on particleName passed to cyclotron, currently supports "e", "n" and "p", 
  anything else returns an EmptyParticle.

cyclotron.js

  -- calls the particleFactory(particleName) to get an instantiated particle class.
  -- returns a particleClass.matrix(matrixSize).

Can be easily expanded to support new particles by creating a new particle class with its own logic and instantiating it in the particleFactory.