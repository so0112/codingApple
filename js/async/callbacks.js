function one(fn) {
  setTimeout(() => {console.log(1)}, 2000)
  fn();
}

function two() {
  console.log(2);
}

one(two())