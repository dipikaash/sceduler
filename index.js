import data from './data.json' assert { type: 'json' };

// submit event handler
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
     const formData = Object.fromEntries(new FormData(e.target).entries());
  //console.log(formData.aptmtTime.value <  data.Doctors[0].availability[0].startTime)
 var aptmtBooked = false;
  for(let el of data.Doctors){
    if(el.name === formData.doc){
     //   console.log(el.availability.date,"docName");
        for(let item of el.availability.date){
         //   console.log(item,"each date",formData.date);
            if(item === formData.date){
              //  console.log(item,"matched date");
                for(let t of el.availability.time){
                    if(t===formData.aptmtTime){
                        console.log(t,"matched time");
                        alert("appointment booked");
                        aptmtBooked = true;
                        break;
                    }   
                }
            break;
            }
        }
    break;
     }
    
  }
if(!aptmtBooked)
 alert("Choose another date and time");
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

// document.getElementById('aptmtTime').min = data.Doctors[0].availability[0].startTime;
// document.getElementById('aptmtTime').max = data.Doctors[0].availability[0].endTime;

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
// document.getElementById('doc').onchange = function (){
// let doc = this.value;
// for(let doctor of data.Doctors){
//     if(doctor.name === doc.value){
//         localStorage.setItem('timeSlot', JSON.stringify(doctor.availability))
//     }
// }
// }
// document.getElementById('doc').onchange();