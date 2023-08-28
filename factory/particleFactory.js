const { Neutron } = require('../classes/Neutron');
const { Eletron } = require('../classes/Eletron');
const { Proton } = require('../classes/Proton');
const { EmptyParticle } = require('../classes/EmptyParticle');

const particleFactory = (particle) => {

  //obj holding multiple particles.
  const obj = {
    n: new Neutron(),
    e: new Eletron(),
    p: new Proton(),
  };

  //ternary that checks if a particle is present inside the obj, if not returns an EmptyParticle class.
  //if present returns the proper particle. e.g: particle n gets a Neutron
  return !obj[particle] ? new EmptyParticle() : obj[particle];
}

module.exports = { particleFactory };