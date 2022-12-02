var grades = []

function calculateSumOfGrades (){

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

}



function renderAllGrades (){

document.getElementById("listOfGrades").innerHTML = ""
var list = document.getElementById("listOfGrades")

for (var i = 0; i<grades.length;i++){
  var listItem = document.createElement("li");
  listItem.textContent = grades[i].num + " - " +  grades[i].subject
  list.appendChild(listItem)

}
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