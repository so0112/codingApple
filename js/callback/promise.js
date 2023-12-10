const a = fetch('http://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
