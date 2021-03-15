
let jsonData = {};

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then((json) => {
    jsonData = json;
    showJsonData()
  });

function showJsonData() {
  console.log(jsonData);

  let loopElement = document.getElementById("loop")
  for (let index = 0; index < 10; index++) {
    let newItem2 = document.createElement('li')
    newItem2.innerText = index
    loopElement.appendChild(newItem2)

  }
}
