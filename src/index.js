import math from 'mathjs';
import csvToMatrix  from 'csv-to-array-matrix';

csvToMatrix('./src/data_test.csv', init);

function init(matrix) {

  // Part 0: Preparation
  console.log('Part 0: Preparation ...\n');

  let X = math.eval('matrix[:, 1:5]', {
    matrix,
  });
  let y = math.eval('matrix[:, 6]', {
    matrix,
  });

  let m = y.length;

  // Part 1: Normal Equation
  console.log('Part 1: Normal Equation ...\n');

  // Add Intercept Term
  X = math.concat(math.ones([m, 1]).valueOf(), X);

  let theta = normalEquation(X, y);

  console.log('theta: ', theta);
  console.log('\n');

  // Part 2: Predict Price of 1650 square meter and 3 bedroom house
  console.log('Part 2: Dự Báo ...\n');

  // Test Dự báo
  //let houseVector = [1, 1650, 3];
  let sportVector = [1, 3.93, 8.40, 3.54, 2.07, 7.45];
  let s1 = [1, 4.21, 7.25, 3.30, 2.40, 6.62];

  let price = math.eval('sportVector * theta', {
    sportVector,
    theta,
  });
  let price1 = math.eval('s1 * theta', {
    s1,
    theta,
  });

  console.log('Thanh Tich Du Bao ', price);
  console.log('Thanh Tich Du Bao ', price1);
}

function normalEquation(X, y) {
  let theta = math.eval(`inv(X' * X) * X' * y`, {
    X,
    y,
  });

  return theta;
}
