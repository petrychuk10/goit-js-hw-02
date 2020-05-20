const logItems = function (array) {
  for (const element of array) {
    console.log(`${array.indexOf(element) + 1} - ${element}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
