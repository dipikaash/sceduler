import data from './data.json' assert { type: 'json' };
console.log(data.Doctors);
var firstFormData = new FormData(document.querySelector('form'))
 console.log(firstFormData);
document.querySelector('form').addEventListener('submit', (e) => {
    const formData = new FormData(e.target);
//   console.log(formData.get('patient'));
//   console.log(formData.get('bar'));
  console.log(firstJsonData);
});

// console.log({ batchTrack });
// const getPost = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return data;
// };
// const batchTrack = document.getElementById("patient");
// const displayOption = async () => {
 
//   for (option of options) {
//     const newOption = document.createElement("option");
//     newOption.value = option.id;
//     newOption.text = option.name;
//     batchTrack.add(newOption);
//   }
// };

// displayOption();

const patientList = data.patientList;
console.log(patientList);
for (let patient of patientList) {
    var patientOpt = document.createElement("option");        
    patientOpt.text = patient.name;
    patientOpt.value = patient.id;
    patientOpt.id = patient.doctorID;
    document.getElementById('patient').options.add(patientOpt);
}
for(let doctor of data.Doctors){
    var docOpts = document.createElement('option');
    docOpts.text = doctor.name;
    docOpts.value = doctor.id;
    document.getElementById('doc').options.add(docOpts);
}
document.getElementById('patient').onchange = function (){
    const docId = this.options[this.selectedIndex].id;
    const doc = document.getElementById('doc');
    for(let i=0; i<doc.options.length;i++){
        if(doc.options[i].value === docId)
         doc.options[i].defaultSelected = true; 
    }

}
document.getElementById('patient').onchange();