'use strict';

const departmentArray = ["Administration", "Marketing","Development", "Finance"];
const levelArray = ["Junior","Mid-Senior","Senior"];

const allEmployee =[]
let form = document.getElementById("form");

let secEle = document.getElementById("secTag");
let firstFlip = document.getElementById("firstFlip");
let secundFlip = document.getElementById("secundFlip");
let flip = document.getElementById("flip");

let sos;

function Employee (employeeId,fullName,department, level, imageUrl ,salary)
{
    this.employeeId =employeeId;
    this.fullName = fullName;
    this.department = null;
    for (let i = 0; i < departmentArray.length; i++) 
    {
    if (departmentArray[i] === department) 
    {
      this.department = department;
      break;    
    }
    }

    if (this.department ==null) 
    { 
       console.log("Error: This Department Is Not Found");
    }

    this.level =null;
    for (let index = 0; index < levelArray.length; index++) 
    {
       this.level = level;
       break;
    }
    if (this.level ==null) 
    { 
       console.log("Error: This Level Is Not Found");
    }
    this.imageUrl = imageUrl;
    this.salary=0;

    allEmployee.push(this);
}

let emp01=new Employee (1000,"Ghazi Samer","Administration","Senior","./Assest/img/boy1.jpg");

const generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(generateRandomNumber(600,5000));


function generateUniqueId() 
{
    let uniqueNumber = Math.floor(1000 + Math.random() * 9000); 
    return uniqueNumber;
}


form.addEventListener("submit", submitHandler);


let calculateSalary;
function submitHandler(event) {
    event.preventDefault();
   const id =generateUniqueId();
   const namee =event.target.fname.value;
   const department = event.target.dep.value;
   const level = event.target.lvl.value;
   const img = event.target.img.value;

   function sal(level)
   {
    let min, max;
    let salary ;
    if (level == "Junior") 
        {
            max = 1000;
            min = 500;
            salary = generateRandomNumber(max, min);
            console.log(salary);
            salary -= Math.floor(salary * .075);
            console.log(salary);
        } 
        else if (level == "Mid-Senior") 
        {
            max = 1500;
            min = 1000;
            salary = generateRandomNumber(max, min);
            console.log(salary);
            salary -= Math.floor(salary * .075);
            console.log(salary);
        } 
        else if (level == "Senior") 
        {
            max = 2000;
            min = 1500;
            salary = generateRandomNumber(max, min);
            console.log(salary);
            salary -= Math.floor(salary * .075);
            console.log(salary);
        }
        console.log(salary);
        return salary;
    }
   
    sos =sal(level);

    console.log(sos);

   let newEmp = new Employee(id,namee, department, level ,img, sos);
   newEmp.renderData();
   console.log(newEmp);
}

Employee.prototype.renderData = function () 
{
    

    let imgEle = document.createElement("img");
    imgEle.src = this.imageUrl;
    secundFlip.appendChild(imgEle);

    let h3Ele = document.createElement("h1");
    h3Ele.textContent = `Employee Name : ${this.fullName}  - ID : ${this.employeeId}`
    firstFlip.appendChild(h3Ele);

    let dep =document.createElement("h2");
    dep.textContent=`Employee Department : ${this.department}`
    firstFlip.appendChild(dep);

    let sal =document.createElement("h2");
    sal.textContent=`Employee Salary : ${sos}`
    firstFlip.appendChild(sal);

    let  lvl=document.createElement("h2");
    lvl.textContent=`Employee Level : ${this.level}`
    firstFlip.appendChild(lvl);

    flip.append(firstFlip, secundFlip);

}
