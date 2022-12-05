var grades = []

function calculateSumOfGrades (){
var sum=0;
for(var sumFirst of grades){
  sum+=sumFirst.num
}
return sum


/*

FOR PETLJA NA FLEX NACIN

var sum=0;

grades.forEach(function (item,index){
  sum=sum+item.num
})

*/
 
}




function getGrade(){
var gradeNum = +document.getElementById("num").value;
var gradeSubject = document.getElementById("subjectName").value

var grade = {
  num: gradeNum,
  subject:gradeSubject
}
document.getElementById("num").value = ""
document.getElementById("subjectName").value =""
return grade
}



function addGradeToArray (grade){
grades.push(grade);

}





function sortCurrentArrayOfGrade (){
  for(var firstGrade of grades ) {
    for (var secondGrade of grades) {
      if (secondGrade.num>firstGrade.num){
        var pom=firstGrade;
        firstGrade=secondGrade;
        secondGrade=pom
      }
    }
  }
}



function renderAllGrades (){

document.getElementById("listOfGrades").innerHTML = ""
var list = document.getElementById("listOfGrades")

for (var i = 0; i<grades.length;i++){
  var listItem = document.createElement("li");
  listItem.textContent = grades[i].num + " - " +  grades[i].subject
  list.appendChild(listItem)

}

/*

////////////////////////// FOR LOOP

 grades.forEach(function(item,index){
 var listItem = document.createElement("li");
  listItem.textContent = item.num + " - " +  item.subject
  list.appendChild(listItem)
 })



*/
}




function showAverageGrade(){

}




function showTheArrayInConsole (){

}



document.getElementById("addButton").addEventListener("click",function (){
  var ocena = getGrade();
  addGradeToArray(ocena);
  renderAllGrades();

})



