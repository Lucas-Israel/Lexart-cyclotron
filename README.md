# Lexart-cyclotron

<h2>Circulates a particle inside a cyclotron. The particles used are: e, p, n (electron, proton, and neutron). Each particle has a circulation function within the cyclotron, which can create either a closed or an open cycle.</h2>

<h3>Files:</h3>

<details>
  <summary>classes/</summary>
  
    Eletron.js
    EmptyParticle.js
    Neutron.js
    Proton.js
  
    -- Every class has a matrix method that creates a matrix based on its own logic to be used on cyclotron.js.
</details>

<details>
  <summary>factory/</summary>

    particleFactory.js
  
    -- Instatiates a new particle class based on particleName passed to cyclotron, currently supports "e", "n" and "p", 
    anything else returns an EmptyParticle.
</details>

<details>
  <summary>cyclotron.js</summary>
  
    -- calls the particleFactory(particleName) to get an instantiated particle class.
    -- returns a particleClass.matrix(matrixSize).
</details>

<h4>Can be easily expanded to support new particles by creating a new particle class with its own logic and instantiating it in the particleFactory.</h4>
