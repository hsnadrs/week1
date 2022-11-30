//Practicing Arrays comands unshift, shift, splice, slice, map
let mySongs = ["Hello",
                "welcome",
                "nice"];
console.log (mySongs);
mySongs.unshift("aaa");//add to begining of Arra
mySongs.unshift ("bbb", "ccc");//add more
console.log (mySongs);
mySongs.shift();// remove from begining of array
console.log (mySongs);
let num = [ 4,9, 16, 25];
let sqrt= num.map (Math.sqrt);// apply math operation to all elements 
console.log (sqrt);// will show [2,3,4,5]
mySongs.splice( 1, 0, "kkk");// with 0 means insert in position index 1
console.log (mySongs);//output [ 'ccc', 'kkk', 'aaa', 'Hello', 'welcome', 'nice' ]
mySongs.splice( 1, 1, "zzz");// with 1 (second parameter) means REPLACE in position index 1
console.log (mySongs);// output [ 'ccc', 'zzz', 'aaa', 'Hello', 'welcome', 'nice' ]
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);//return elements between indexes 1 and 3
console.log (fruits);//
console.log (citrus);// output [ 'Orange', 'Lemon' ]
