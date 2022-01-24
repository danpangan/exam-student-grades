//---------------CREATE THE DOM------------------------------------//
const body = document.body;

const divContainer = document.createElement("div");

//--CREATE THE INPUT CONTAINER
const divInputContainer = document.createElement("div");
const divInputCard = document.createElement("div");
const divInputCardHdr = document.createElement("div");

//--CREATE CARD FOR INDIVIDUAL FORM
const divIndividualInputCardBody = document.createElement("div");
const individualStudentForm = document.createElement("form");
const divNameForm = document.createElement("div");
const lblNameForm = document.createElement("label");
const txtNameForm = document.createElement("input");
const divGradeForm = document.createElement("div");
const lblGradeForm = document.createElement("label");
const txtGradeForm = document.createElement("input");
const btnIndividualForm = document.createElement("button");

//--CREATE CARD FOR BULK FORM
const divBulkInputCardBody = document.createElement("div");
const bulkStudentForm = document.createElement("form");
const divDetailForm = document.createElement("div");
const lblDetailForm = document.createElement("label");
const txtDetailForm = document.createElement("textarea");
const btnDetailForm = document.createElement("button");

//--CREATE THE TABLE CONTAINER
const divTableContainer = document.createElement("div");
const divTableCard = document.createElement("div");
const divTableCardHdr = document.createElement("div");
const divTableCardBody = document.createElement("div");
const table = document.createElement("table");
const trHdr = document.createElement("tr");
const thName = document.createElement("th");
const thGrade = document.createElement("th");
const thAction = document.createElement("th");
const divTableBottomPanel = document.createElement("div");
const divAvgView = document.createElement("div");
const divAvgBtn = document.createElement("div");
const divClrBtn = document.createElement("div");
const avgViewLabel = document.createElement("label");
const avgViewDiv = document.createElement("div");
const avgViewText = document.createElement("input");
const avgBtn = document.createElement("button");
const clrBtn = document.createElement("button");

//--ADD ATTRIBUTES
divContainer.classList.add("row");

//--INPUT CONTAINER ATTRIBUTES
divInputContainer.classList.add("col-lg-3");

divInputCard.classList.add("card");
divInputCardHdr.classList.add("card-header");
divIndividualInputCardBody.classList.add("card-body");
divBulkInputCardBody.classList.add("card-body");


//--INDIVIDUAL FORM ATTRIBUTES
individualStudentForm.setAttribute("id", "student-grade-form");
divNameForm.classList.add("mb-3");
lblNameForm.classList.add("form-label");
lblNameForm.setAttribute("for", "name");
txtNameForm.classList.add("form-control");
txtNameForm.setAttribute("type", "text");
txtNameForm.setAttribute("id", "name");
txtNameForm.setAttribute("placeholder", "Juan");
divGradeForm.classList.add("mb-3");
lblGradeForm.classList.add("form-label");
lblGradeForm.setAttribute("for", "grade");
txtGradeForm.classList.add("form-control");
txtGradeForm.setAttribute("type", "text");
txtGradeForm.setAttribute("id", "grade");
txtGradeForm.setAttribute("placeholder", "95.5");
btnIndividualForm.classList.add("btn");
btnIndividualForm.classList.add("btn-primary");
btnIndividualForm.classList.add("float-end");
btnIndividualForm.setAttribute("type", "button");
btnIndividualForm.setAttribute("id", "submit");

//--BULK FORM ATTRIBUTES
bulkStudentForm.setAttribute("id", "student-detail-form");
divDetailForm.classList.add("mb-3");
lblDetailForm.classList.add("form-label");
lblDetailForm.setAttribute("for", "details");
txtDetailForm.classList.add("form-control");
txtDetailForm.setAttribute("type", "text");
txtDetailForm.setAttribute("id", "details");
txtDetailForm.setAttribute("placeholder", "Juan 85.5");
btnDetailForm.classList.add("btn");
btnDetailForm.classList.add("btn-primary");
btnDetailForm.classList.add("float-end");
btnDetailForm.setAttribute("type", "button");
btnDetailForm.setAttribute("id", "submit-details");

//--TABLE CONTAINER ATTRIBUTES
divTableContainer.classList.add("col-lg-8");
divTableContainer.classList.add("offset-1");
divTableCard.classList.add("card");
divTableCardHdr.classList.add("card-header");
divTableCardBody.classList.add("card-body");
table.setAttribute("id", "student-record-table");

//--TABLE CARD BOTTOM PANEL ATTRIBUTES
divTableBottomPanel.classList.add("row");
divAvgView.classList.add("row");
divAvgView.classList.add("mb-3");
divAvgView.classList.add("col-lg-8");
avgViewLabel.classList.add("col-sm-2");
avgViewLabel.classList.add("col-form-label");
avgViewDiv.classList.add("col-sm-10");
avgViewText.classList.add("form-control");
avgViewText.setAttribute("type", "text");
avgViewText.setAttribute("id", "class-average");

divAvgBtn.classList.add("col-lg-2");
avgBtn.classList.add("btn");
avgBtn.classList.add("btn-primary");
avgBtn.classList.add("float-end");
avgBtn.setAttribute("type", "button");
avgBtn.setAttribute("id", "compute");
divClrBtn.classList.add("col-lg-2");
clrBtn.classList.add("btn");
clrBtn.classList.add("btn-primary");
clrBtn.classList.add("float-end");
clrBtn.setAttribute("type", "button");
clrBtn.setAttribute("id", "clear");


//--INPUT DOM SETUP
divInputCardHdr.innerText="Welcome Teacher";
divInputCard.append(divInputCardHdr);

//--INDIVIDUAL FORM DOM SETUP
lblNameForm.innerText="Student's Name";
divNameForm.append(lblNameForm);
divNameForm.append(txtNameForm);
individualStudentForm.append(divNameForm);

lblGradeForm.innerText="Student's Grade";
divGradeForm.append(lblGradeForm);
divGradeForm.append(txtGradeForm);
individualStudentForm.append(divGradeForm);

btnIndividualForm.innerText="Submit";
individualStudentForm.append(btnIndividualForm);
divIndividualInputCardBody.append(individualStudentForm);
divInputCard.append(divIndividualInputCardBody);

//--BULK FORM DOM SETUP
lblDetailForm.innerText="Students' Details";
divDetailForm.append(lblDetailForm);
divDetailForm.append(txtDetailForm);
bulkStudentForm.append(divDetailForm);

btnDetailForm.innerText="Submit";
bulkStudentForm.append(btnDetailForm);
divBulkInputCardBody.append(bulkStudentForm);
divInputCard.append(divBulkInputCardBody);

divInputContainer.append(divInputCard);

//--TABLE CARD DOM SETUP
divTableCardHdr.innerText="Student Grades";
divTableCard.append(divTableCardHdr);
thName.innerText="Name";
thGrade.innerText="Grade";
trHdr.append(thName);
trHdr.append(thGrade);
trHdr.append(thAction);
table.append(trHdr);
divTableCardBody.append(table);

//--TABLE CARD BOTTOM PANEL DOM SETUP
avgViewLabel.innerText="Class Average";
avgViewDiv.append(avgViewText);
divAvgView.append(avgViewLabel);
divAvgView.append(avgViewDiv);
divTableBottomPanel.append(divAvgView);

avgBtn.innerText="Calculate AVG";
divAvgBtn.append(avgBtn);
divTableBottomPanel.append(divAvgBtn);
clrBtn.innerText="Clear Records";
divClrBtn.append(clrBtn);
divTableBottomPanel.append(divClrBtn);
divTableCardBody.append(divTableBottomPanel);
divTableCard.append(divTableCardBody);
divTableContainer.append(divTableCard);

//--MAIN DOM SETUP
divContainer.append(divInputContainer);
divContainer.append(divTableContainer);
body.append(divContainer);

//--ADD CSS
domCSS();

function domCSS() {
    body.style.margin="0";
    body.style.padding="0";
    body.style.boxSizing="border-box";

    divContainer.style.margin="0";
    divContainer.style.padding="10em";

    divInputContainer.style.margin="2em auto";
    divInputContainer.style.padding="0";

    divTableContainer.style.margin="2em auto";
    divTableContainer.style.padding="0";

    table.style.width="100%";
    table.style.marginBottom="3em";
    table.style.borderTop="solid 2px #bbb";
}