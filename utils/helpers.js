module.exports = {
    chooseSize: () => {
      var sizeArr = ["100px", "130px", "150px", "160px", "120px", "140px", "200px", "180px", "140px"];

      var randomIndex = sizeArr[Math.floor(Math.random()*sizeArr.length)];

      var size = sizeArr[randomIndex]
      console.log(size);
      return size;
    }
};
  