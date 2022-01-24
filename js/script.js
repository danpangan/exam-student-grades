var studentRecords = [];

document.getElementById("submit").addEventListener("click", submitStudentGrade);
document.getElementById("submit-details").addEventListener("click", submitStudentDetail);
document.getElementById("compute").addEventListener("click", computeClassAverage);
document.getElementById("clear").addEventListener("click", clearRecords);

function submitStudentGrade() {
    var newStudentRecord = {};

    let studentName = document.getElementById("name").value;
    let studentGrade = document.getElementById("grade").value;

    newStudentRecord['name'] = studentName;
    newStudentRecord['grade'] = studentGrade;

    studentRecords.push(newStudentRecord);
    document.getElementById("student-grade-form").reset();

    updateStudentTable(studentName, studentGrade);
}

function submitStudentDetail() {
    let details = document.getElementById("details").value;
    let detailsArr = details.split("\n");

    detailsArr.forEach(saveStudentDetails);
    document.getElementById("student-detail-form").reset();
    console.log(studentRecords);

}

function computeClassAverage() {
    
    let totalGrades = studentRecords.reduce(function(sum, current) {
        return sum + parseFloat(current.grade);
    }, 0);

    let avgGrade = parseFloat(totalGrades / Object.keys(studentRecords).length);
    document.getElementById("class-average").value = Math.round((avgGrade + Number.EPSILON) * 100) / 100;
}

function saveStudentDetails(item, index) {
    var newStudentRecord = {};
    let studentRecordArr = item.split(" ");

    newStudentRecord['name'] = studentRecordArr[0];
    newStudentRecord['grade'] = studentRecordArr[1];
    studentRecords.push(newStudentRecord);

    updateStudentTable(newStudentRecord['name'], newStudentRecord['grade']);
}

function updateStudentTable(name, grade) {

    let table = document.getElementById("student-record-table");
    let row = table.insertRow(Object.keys(studentRecords).length);
    let nameCell = row.insertCell(0);
    let gradeCell = row.insertCell(1);
    let axnCell = row.insertCell(2);
    nameCell.innerHTML = name;
    gradeCell.innerHTML = grade;
    //axnCell.append(createDeleteBtn(Object.keys(studentRecords).length));
}

function clearRecords() {
    studentRecords = [];

    let table = document.getElementById("student-record-table");
    for(let i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }

    document.getElementById("class-average").value="";
}

// function createDeleteBtn(id) {
//     const delBtn = document.createElement("button");
//     delBtn.innerText="Delete"
//     delBtn.classList.add("btn");
//     delBtn.classList.add("btn-danger");
//     delBtn.classList.add("delBtn");
//     delBtn.dataset.id=id;

//     document.addEventListener('click',function(e){
//         if(e.target && e.target.delBtn){
//               deleteRecord(1);
//          }
//      });

//     return delBtn;
// }

// function deleteRecord(id) {
//     //id = element.getAttribute('data-id');
//     console.log(id);
// }