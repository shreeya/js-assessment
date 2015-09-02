exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        counter++;
      }
    }
    return counter;
  },

  duplicates : function(arr) {
    var counter = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] in counter) {
        counter[arr[i]]++;
      } else {
        counter[arr[i]] = 1;
      }
    }
    var duplicates = [];
    for (var key in counter) {
      if (counter[key] > 1) {
        duplicates.push(JSON.parse(key));
      }
    }
    return duplicates;
  },

  square : function(arr) {
    var squaredArr = arr.slice();
    for (var i = 0; i < squaredArr.length; i++) {
      squaredArr[i] = Math.pow(squaredArr[i], 2);
    }
    return squaredArr;
  },

  findAllOccurrences : function(arr, target) {
    var occurences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurences.push(i);
      }
    }
    return occurences;
  }
};
