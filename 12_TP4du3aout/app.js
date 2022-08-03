url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=messi";


const searchArray = axios.get(url).then((response) => {
  console.log("response.data.query.search :>> ", response.data.query.search);
  return response.data.query.search;
});

console.log('searchArray :>> ', searchArray.get);


// console.log('searchArray[0] :>> ', searchArray);

// searchArray.forEach(element => {
//     console.log('element.title :>> ', element.title);
//.title