module.exports = function reverse (n) {
    let str = Math.abs(n).toString().split('');

    let arr = [];
   
    for (let i = 0; i <= str.length-1; i++){
   
   arr.unshift(str[i]);
   
   }
   
    let newStr = +arr.toString().split('').join('').replace(/[\s,]/g, '');
   
    return newStr;
}
