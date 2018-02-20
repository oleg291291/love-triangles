/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  for (var i = 0; i < preferences.length; i++) {
    var firstLoverTarget = preferences[i] - 1;
    var secondLoverTarget = (preferences[firstLoverTarget]) - 1;
    var thirdLoverTarget = (preferences[secondLoverTarget]) - 1;
    if (thirdLoverTarget == i && firstLoverTarget != i && secondLoverTarget != firstLoverTarget) {
      delete preferences[i]
      delete preferences[firstLoverTarget]
      delete preferences[secondLoverTarget]

      counter++;
    }
   } return counter;
  };
