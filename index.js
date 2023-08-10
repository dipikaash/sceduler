import data from './data.json' assert { type: 'json' };
console.log(data.Doctors);

// submit event handler
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
     const formData = Object.fromEntries(new FormData(e.target).entries());
  console.log(formData);
  //console.log(formData.aptmtTime.value <  data.Doctors[0].availability[0].startTime)
  console.log("booked");
});
//dynamically added patients
for (let patient of data.patientList) {
    var patientOpt = document.createElement("option");        
    patientOpt.text = patient.name;
    patientOpt.value = patient.name;
    patientOpt.id = patient.doctorID;
    document.getElementById('patient').options.add(patientOpt);
}
//dynamically added doctor list
for(let doctor of data.Doctors){
    var docOpts = document.createElement('option');
    docOpts.text = doctor.name;
    docOpts.value = doctor.name;
    docOpts.id = doctor.id;
    document.getElementById('doc').options.add(docOpts);
}
//dynamically mapping doctor with patient
document.getElementById('patient').onchange = function (){
    let docId = this.options[this.selectedIndex].id;
    let doc = document.getElementById('doc');
    for(let i=0; i<doc.options.length;i++){
        if(doc.options[i].id === docId)
         doc.options[i].selected = true; 
    }
}
document.getElementById('patient').onchange();

document.getElementById('aptmtTime').min = data.Doctors[0].availability[0].startTime;
document.getElementById('aptmtTime').max = data.Doctors[0].availability[0].endTime;

// document.getElementById('doc').onchange = function (){
// const selDocId = this.id;
// for(let i=0;i<data.Doctors.length;i++){
//     if(data.Doctors[i].id === selDocId){
//         document.getElementById('aptmtTime').min = data.Doctors[i].availability[0].startTime;
//         document.getElementById('aptmtTime').max = data.Doctors[i].availability[0].endTime;
//         console.log(document.getElementById('aptmtTime'));
//     }
//  }
// }
// document.getElementById('doc').onchange();

