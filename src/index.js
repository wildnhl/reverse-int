module.exports = function reverse(n) {
   const arr = (n + '').split('');
   let finalArr = '';
   for (let i = arr.length - 1; i >= 0; i--) {
      finalArr = finalArr + arr[i];
   }
   return parseInt(finalArr);
};
