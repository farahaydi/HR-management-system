let employees = JSON.parse(localStorage.getItem('employee'));
let depts = [];
let departmentInfo = {};

for (let i = 0; i < employees.length; i++) {
  let emp = employees[i];
  let departmentLowerCase = emp.department.toLowerCase();
  console.log(emp.salary);
  if (!departmentInfo[departmentLowerCase]) {
    if (!depts.includes(departmentLowerCase)) {
      depts.push(departmentLowerCase);
    }
    
    departmentInfo[departmentLowerCase] = {
      count: 1,
      totalSalary: emp.salary,
      
      avg: emp.salary // Initialize average with employee's salary
    };
  } else {
    departmentInfo[departmentLowerCase].count += 1;
    departmentInfo[departmentLowerCase].totalSalary += emp.salary;
  }
}

const tableBody = document.getElementById('table-body');

for (let i = 0; i < depts.length; i++) {
  let dept = depts[i];
  
  const tr = document.createElement('tr');
  tr.classList.add(`${dept}`);
  
  const tdDept = document.createElement('td');
  tdDept.textContent = dept;
  
  tr.appendChild(tdDept);
  tableBody.appendChild(tr);
}

for (const key in departmentInfo) {
  if (Object.hasOwnProperty.call(departmentInfo, key)) {
    const dept = departmentInfo[key];
    dept.avg = dept.totalSalary / dept.count; // Calculate average salary
    
    const tr = document.querySelector(`.${key}`);
    
    const countTd = document.createElement('td');
    countTd.textContent = dept.count;
    tr.appendChild(countTd);
    
    const totalSalaryTd = document.createElement('td');
    totalSalaryTd.textContent = dept.totalSalary;
    tr.appendChild(totalSalaryTd);
    
    const avgTd = document.createElement('td');
    avgTd.textContent = dept.avg.toFixed(2); // Display average with two decimal places
    tr.appendChild(avgTd);
  }
}

const totalSalary = document.querySelector('.total-salary');
const totalAvg = document.querySelector('.total-avg');
const totalEmp = document.querySelector('.total-emp');

let totalAvgValue = 0;
let totalSalaryValue = 0;
let totalEmpValue = 0;

for (const key in departmentInfo) {
  if (Object.hasOwnProperty.call(departmentInfo, key)) {
    const dept = departmentInfo[key];
    totalAvgValue += dept.avg;
    totalSalaryValue += dept.totalSalary;
    totalEmpValue += dept.count;
  }
}

totalAvg.innerHTML = totalAvgValue.toFixed(2);
totalSalary.innerHTML = totalSalaryValue.toFixed(2);
totalEmp.innerHTML = totalEmpValue;
