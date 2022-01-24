
var studentRecords = [];

document.getElementById("submit").addEventListener("click", submitStudentGrade);
document.getElementById("submit-details").addEventListener("click", submitStudentDetail);
document.getElementById("compute").addEventListener("click", computeClassAverage);

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

    var table = document.getElementById("student-record-table");
    var row = table.insertRow(Object.keys(studentRecords).length);
    var nameCell = row.insertCell(0);
    var gradeCell = row.insertCell(1);
    nameCell.innerHTML = name;
    gradeCell.innerHTML = grade;
}