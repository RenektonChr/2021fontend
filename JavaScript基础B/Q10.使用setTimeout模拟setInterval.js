function mySetInterval(func, delay) {
  const context = this;
  setTimeout(function() {
    func();
    mySetInterval(func, delay);
  }, delay)
}

mySetInterval(function() {
  console.log('lalal')
}, 1000);
