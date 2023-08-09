import data from './data.json' assert { type: 'json' };
console.log(data.Doctors);
var firstJsonData = new FormData(document.querySelector('form'))
 console.log(formDat);
document.querySelector('form').addEventListener('submit', (e) => {
    const formData = new FormData(e.target);
  console.log(formData.get('foo'));
  console.log(formData.get('bar'));
  console.log(firstJsonData);
});

console.log({ batchTrack });
// const getPost = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return data;
// };
const batchTrack = document.getElementById("this");
const displayOption = async () => {
  const options = data.Doctors;
  for (option of options) {
    const newOption = document.createElement("option");
    newOption.value = option.id;
    newOption.text = option.id;
    batchTrack.add(newOption);
  }
};

displayOption();