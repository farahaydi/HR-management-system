'use strict';

const departmentArray = ["Administration", "Marketing","Development", "Finance"];
const levelArray = ["Junior","Mid-Senior","Senior"];

const allEmployee =[]

function Employee (employeeId,fullName,department, level, imageUrl)
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
let emp02=new Employee (1001,"Lana Ali","Finance","Senior","./Assest/img/girl1.jpg");
let emp03=new Employee (1002,"Tamara Ayoub","Marketing","Senior","./Assest/img/girl2.jpg");
let emp04=new Employee (1003,"Safi Walid","Administration","Mid-Senior","./Assest/img/man.png");
let emp05=new Employee (1004,"Omar Zaid","Development","Senior","./Assest/img/mm.jpg");
let emp06=new Employee (1005,"Rana Saleh","Development","Junior","./Assest/img/woman.png");
let emp07=new Employee (1006,"Hadi Ahmad","Finance","Mid-Senior","./Assest/img/mn.jpg");

Employee.prototype.generateRandomSalary = function (min ,max) 
{
    this.salary= Math.floor(Math.random() * (max - min + 1) + min);
    console.log(this.salary);
    const taxAmount = (this.salary * 7.5) / 100;
    this.salary=this.salary-taxAmount;
    console.log(this.salary);
}

let lvl;
for (let index = 0; index < allEmployee.length; index++) 
{
    lvl=allEmployee[index].level;   
    if (lvl == "Junior") 
    {
        allEmployee[index].generateRandomSalary(500, 1000);
    } 
    else if (lvl == "Mid-Senior") 
    {
        allEmployee[index].generateRandomSalary(1000, 1500);
    } 
    else if (lvl == "Senior") 
    {
        allEmployee[index].generateRandomSalary(1500, 2000);
    } 
    else 
    {
        document.write(`<h2>Hey ${allEmployee[index].fullName} Please Check Your Level !</h2>`);
    }

}


console.log(allEmployee);



Employee.prototype.renderData = function () {
    document.write(`<h1> Employee Name : ${this.fullName} </h1>`);
    document.write(`<h3> Employee Salary : ${this.salary} </h3>`);
}

for (let i = 0; i < allEmployee.length; i++) 
{
    document.write(`
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <h3 style="font-weight: bolder; color:#eee; font-size: ;">Employee Name : ${allEmployee[i].fullName}</h3> 
    <h3 style="font-weight: bolder; color:#eee; padding-top:20px font-size: larger;">Employee Salary : ${allEmployee[i].salary}</h3> 
    </div>
    <div class="flip-card-back">
    <img src="${allEmployee[i].imageUrl}" alt="Avatar" style="width:300px;height:300px;">
    </div>
  </div>
</div>
`)
}

