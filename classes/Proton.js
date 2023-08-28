class Proton {

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

        //condition for "p".
        // first line all: "p".
        // after first line, first element and last element: "p".
        // before last line, first element, before last and last element: "p".
        // last line, all "p" except last.
        // else "1".
        if ((loopN === 0 || index === 0 || index === size - 1
          || (loopN === size - 2 && index === size - 2) || loopN === size - 1)
          && !(loopN === size - 1 && index === size - 1)) {
          line.push("p");
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

module.exports = { Proton }