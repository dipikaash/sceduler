import data from './data.json' assert { type: 'json' };
console.log(data.Doctors);

// submit event handler
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
     const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data);
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