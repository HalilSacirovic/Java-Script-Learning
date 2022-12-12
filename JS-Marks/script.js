var grades = []

function getGrade(){
  var gradeNum = +document.getElementById("num").value;
  var gradeText = document.getElementById("subjectName").value;

  
  var grade = {
    num:gradeNum,
    text:gradeText
  }
  document.getElementById("num").value = "";
  document.getElementById("subjectName").value = "";

  grades.push(grade)
  console.log(grades)
  return grade
}



// function addGradeToArray (grade){
//   grades.push(grade);
  
// }


document.getElementById("addButton").addEventListener("click",function(){
getGrade()
})







// function renderAllGrades (){
//  var list = document.getElementById("listofGrades");

//  for (var i = 0 ; i<grades.length;i++){
//   var elementofList = document.createElement("li");

//   list.appendChild(elementofList)
//  }

// }



var niz  = [1,2,3,4,5,6,7,8,10]


var filterizovan = niz.filter(function(item,index){
  if (item % 2 ===0){
    return item
  }
})

console.log(filterizovan);

var mapiran = filterizovan.map(function(item,index){
  return {value:item,index:index}
})


console.log(mapiran)