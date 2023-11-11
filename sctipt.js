// addStudentBtn.addEventListener("click", addStudent)

let students = [];

function addStudent() {
  let studentSurname = document.getElementById("surname").value;
  let studentName = document.getElementById("name").value;
  let studentAge = document.getElementById("age").value;
  let student = {
    surname: "surname",
    name: "name",
    age: 0,
  };

  student.surname = studentSurname;
  student.name = studentName;
  student.age = studentAge;

  students.push(Object.values(student));

  document.getElementById("surname").value = "";
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  showStudent();
}

function showStudent() {
  let groupList = document.querySelector(`.groupList`);
  groupList.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    let groupElem = `<div class="groupElem">
            ${i + 1}. ${students[i]}
        </div>`;
    groupList.innerHTML = groupList.innerHTML + groupElem;
  }
}
