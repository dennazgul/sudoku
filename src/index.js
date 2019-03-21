module.exports = function solveSudoku(matrix) {
  var sudoku = matrix;
  function testing(i, k, potent) {
    for (l = 0; l < 9; l++) {
      if (potent == sudoku[i][l]) {return false;
    }
  }
    for (m = 0; m < 9; m++) {
      if (sudoku[m][k] == potent) {
        return false;
      }
    }
    for (n = 0; n < 3; n++) {
      for (o = 0; o < 3; o++) {
        if (
          potent == sudoku[Math.floor(i / 3) * 3 + n][Math.floor(k / 3) * 3 + o]
        ) {
          return false;
        }
      }
    }
    return true;
  }

    for (let i = 0; i < 9; i++) {
      for (let k = 0; k < 9; k++) {
        if (sudoku[i][k] == 0) {
          for (let potent = 1; potent < 10; potent++) {
            if (testing(i, k, potent)) {
              sudoku[i][k] = potent;
              if (solveSudoku(sudoku)) {
                return sudoku;
              } else {
                sudoku[i][k] =0;
              }
            }
          }
          return 0;
        }
      }
    }
    return sudoku;
}