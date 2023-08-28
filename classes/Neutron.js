class Neutron {

  //method to create a matrix used in cyclotron.
  matrix(size) {

    // initialized matrix to be populated.
    const matrix = [];

    // matrix loop.
    for (let loopN = 0; loopN < size; loopN += 1) {

      //initialized line to be populated.
      const line = [];

      // line loop.
      for (let index = 0; index < size; index += 1) {

        //condition for "n".
        // first line "n".
        // else 1.
        if (loopN == 0) {
          line.push("n");
        } else {
          line.push("1");
        }
      }

      //populating matrix with line
      matrix.push(line);
    }


    return matrix;
  }
}

module.exports = { Neutron }