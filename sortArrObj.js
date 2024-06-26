// Sort array of object with property


 let arr = [
    {name : "luffy",
        age : 20
    },
    {
        name : "nami",
        age : 22
    },
    {name :"ussop",
        age :24
    },
    {
        name :"Zoro",
        age :26
    }
 ]


 function sortArrObj(arr, property) {
    return arr.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  }
  
  
  const sortedByAge = sortArrObj(arr, 'age');
  console.log(sortedByAge);
  
  const sortedByName = sortArrObj(arr, 'name');
  console.log(sortedByName);
 



