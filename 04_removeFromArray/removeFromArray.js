const removeFromArray = function(box, ...args) {
  /*if (box.includes(num)) {
    box.splice(num - 1, 1);
  }
  else if (box.includes(...args)) { 
    box.splice(...args, 1);
     }
    
  return box; */

  /*
  box.filter(newBox);

  function newBox(item) {
    if (!args.includes(item)) {
        box.push(item);
        return box;
    }

    }

    */

    return box.filter(item => !args.includes(item));

    
  


/*for (const numb of box) {
    if (num)
} */

};

removeFromArray([1,2,3,4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
