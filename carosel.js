const educationList =document.querySelector('#educations');
const organizationList = document.querySelector('#organizations');
const others =document.querySelector('#others');
const git =document.querySelector('#git');
const twitter =document.querySelector('#twitter');
const linkedin =document.querySelector('#linkedin');
const projectList = document.querySelector('#projects');

function renderEducation(doc){
    let li = document.createElement('li');
    let school = document.createElement('span');
    let degree = document.createElement('span');
    let year_start = document.createElement('span');
    let year_end = document.createElement('span');
    let icon = document.createElement('span');
    icon.innerHTML= '<span class="iconify" data-icon="cil-school" data-inline="true" style="color: #4bffa5; height:2em;width:2em;  "></span>'

    li.setAttribute('data-id',doc.id);
    school.textContent = doc.data().school;
    degree.textContent = doc.data().degree;
    year_end.textContent = doc.data().year_end;

    year_start.textContent = doc.data().year_start+"-" +year_end.textContent;
    li.appendChild(icon);
    li.appendChild(school);
    li.appendChild(degree);
    li.appendChild(year_start);


    educationList.appendChild(li);
}

 db.collection('educations').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderEducation(doc)
    })


 })

 function renderProjects(doc){
    let li = document.createElement('li');
    let title = document.createElement('span');
    let year = document.createElement('span');
    let cross= document.createElement('span');
    let icon = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    title.textContent = doc.data().title;
    year.textContent = doc.data().year;
    
   
    
    li.appendChild(title);
    li.appendChild(year);
    
  
  
    projectList.appendChild(li);
  
  
  
  }
 
  
  db.collection('projects').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderProjects(doc)
    })
  
  
  })

 function renderOrganization(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let position = document.createElement('span');
    let year_start = document.createElement('span');
    let year_end = document.createElement('span');
    let icon = document.createElement('span');
    icon.innerHTML='<span class="iconify" data-icon="codicon:organization" data-inline="false" style="color: #4bffa5; height: 2em; width: 2em;"></span>'
    li.setAttribute('data-id',doc.id);
    name.textContent = doc.data().name;
    position.textContent = doc.data().position;
    year_end.textContent = doc.data().year_end;
    year_start.textContent = doc.data().year_start+"-" +year_end.textContent;
    
    li.appendChild(icon);

    li.appendChild(name);
    li.appendChild(position);
    li.appendChild(year_start);



    organizationList.appendChild(li);
}
db.collection('organizations').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderOrganization(doc)
    })


 })

 function renderOthers(doc){
    let li = document.createElement('li');
    let value = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    value.textContent = doc.data().value;
    
    li.appendChild(value);


    others.appendChild(li);
}
db.collection('others').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderOthers(doc)
    })


 })
 function renderGitHub(doc){
    let li = document.createElement('li');
    let GitHub = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    GitHub.textContent = doc.data().GitHub;
    
    li.appendChild(GitHub);
    document.getElementById('gitlink').setAttribute('href', GitHub.textContent);


    git.appendChild(li);
}
db.collection('others').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderGitHub(doc)
    })


 })

 function renderTwitter(doc){
    let li = document.createElement('li');
    let Twitter = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    Twitter.textContent = doc.data().Twitter;
    
    li.appendChild(Twitter);
    document.getElementById('twitlink').setAttribute('href',  Twitter.textContent );


    twitter.appendChild(li);
}
db.collection('others').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderTwitter(doc)
    })


 })

 function renderLinkedIn(doc){
    let li = document.createElement('li');
    let LinkedIn = document.createElement('span');
    
    li.setAttribute('data-id',doc.id);
    LinkedIn.textContent = doc.data().LinkedIn;
        document.getElementById('linklink').setAttribute('href', LinkedIn.textContent );

    li.appendChild(LinkedIn);


    linkedin.appendChild(li);

}
db.collection('others').get().then((snapshot) =>{
    snapshot.docs.forEach(doc =>{
        renderLinkedIn(doc)
    })


 })
 var messages=["A dreamer","A believer", "A visionary"];
var rank=0;

// Code for Chrome, Safari and Opera
document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h1 = this.getElementsByTagName("h1")[0];
  _h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h1.innerHTML=messages[rank];
      var speed =3.5*messages[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h1.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}


