'use strict';

const departmentArray = ["Administration", "Marketing", "Development", "Finance"];
const levelArray = ["Junior", "Mid-Senior", "Senior"];

const allEmployee = [];
let form = document.getElementById("form");

let secEle = document.getElementById("secTag");
let firstFlip = document.getElementById("firstFlip");
let secundFlip = document.getElementById("secundFlip");
let flip = document.getElementById("flip");

let sos;

function Employee(employeeId, fullName, department, level, imageUrl, salary) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = null;
  for (let i = 0; i < departmentArray.length; i++) {
    if (departmentArray[i] === department) {
      this.department = department;
      break;
    }
  }

  if (this.department == null) {
    console.log("Error: This Department Is Not Found");
  }

  this.level = null;
  for (let index = 0; index < levelArray.length; index++) {
    this.level = level;
    break;
  }
  if (this.level == null) {
    console.log("Error: This Level Is Not Found");
  }
  this.imageUrl = imageUrl;
  this.salary = salary;

  allEmployee.push(this);
}

// Done
let emp01 = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./Assest/img/boy1.jpg",0);
let emp02 = new Employee(1001, "Lana Ali", "Finance", "Senior", "./Assest/img/girl1.jpg",0);
let emp03 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./Assest/img/girl2.jpg",0);
let emp04 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./Assest/img/man.png",0);
let emp05 = new Employee(1004, "Omar Zaid", "Development", "Senior", "./Assest/img/mm.jpg",0);

// Done
const generateRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Done
function generateUniqueId() {
  let uniqueNumber = Math.floor(1000 + Math.random() * 9000);
  return uniqueNumber;
}

// Done
Employee.prototype.sal = function (testLevel) {
  let min, max;
  let salary = 0;
  if (testLevel == "Junior") {
    max = 1000;
    min = 500;
    salary = generateRandomNumber(max, min);
    salary -= Math.floor(salary * .075);
  } else if (testLevel == "Mid-Senior") {
    max = 1500;
    min = 1000;
    salary = generateRandomNumber(max, min);
    salary -= Math.floor(salary * .075);
  } else if (testLevel == "Senior") {
    max = 2000;
    min = 1500;
    salary = generateRandomNumber(max, min);
    salary -= Math.floor(salary * .075);
  }
  return salary;
}

const printCard = function () {
  for (let i = 0; i < allEmployee.length; i++) {
    const currentEmployee = allEmployee[i];

    // Call the sal method for each employee
    const salary = currentEmployee.sal(currentEmployee.level);

    document.write(`
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3 style="font-weight: bolder; color:#eee; font-size: ;">Employee Name: ${currentEmployee.fullName}</h3> 
            <h3 style="font-weight: bolder; color:#eee; padding-top:20px font-size: larger;">Employee Salary: ${salary}</h3> 
          </div>
          <div class="flip-card-back">
            <img src="${currentEmployee.imageUrl}" alt="Avatar" style="width:300px;height:300px;">
          </div>
        </div>
      </div>
    `);
  }
}



form.addEventListener("submit", submitHandler);
let calculateSalary;

function submitHandler(event) {
  event.preventDefault(); // Remove the default behavior of the browser
  const id = generateUniqueId();
  const namee = event.target.fname.value;
  const department = event.target.dep.value;
  const level = event.target.lvl.value;
  const img = event.target.img.value;

  let newEmp = new Employee(id, namee, department, level, img, 0);
  newEmp.salary = newEmp.sal(level);
  newEmp.renderData();
   savaData(allEmployee);



}

function savaData(data) 
{
    localStorage.setItem('employee', JSON.stringify(data));
}

function getData() {
    let objArr = JSON.parse(localStorage.getItem('employee')) // array of objs
    if (objArr != null) {
        // iterating through objArr array that is coming from LS and starting from the new object index; create new instance
        for (let i = 5; i < objArr.length; i++) {
          new Employee(
            objArr[i].employeeId,
            objArr[i].fullName,
            objArr[i].department,
            objArr[i].level,
            objArr[i].imageUrl,
            objArr[i].salary
          );
        }
        //
      }
      printCard();
    
}
    
getData();

Employee.prototype.renderData = function () {
  let imgEle = document.createElement("img");
  imgEle.src = this.imageUrl;
  secundFlip.appendChild(imgEle);

  let h3Ele = document.createElement("h1");
  h3Ele.textContent = `Employee Name : ${this.fullName}  - ID : ${this.employeeId}`
  firstFlip.appendChild(h3Ele);

  let dep = document.createElement("h2");
  dep.textContent = `Employee Department : ${this.department}`
  firstFlip.appendChild(dep);

  let sal = document.createElement("h2");
  sal.textContent = `Employee Salary : ${this.salary}`
  firstFlip.appendChild(sal);

  let lvl = document.createElement("h2");
  lvl.textContent = `Employee Level : ${this.level}`
  firstFlip.appendChild(lvl);

  flip.append(firstFlip, secundFlip);

}


