const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HR API');
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/emp',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/empTotal',async(req,res)=>{
    try{
        const result = await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/TotalDepartment',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from departments');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/TotalRegions',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from regions');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/TotalCountries',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from Countries');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/TotalJobs',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from Jobs');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question40',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name ,e.last_name, e.salary ,l .* ,c.country_name from employees e join departments d On e.department_id = d.department_id join locations l On d.location_id = d. location_id join countries c On l.country_id = c.country_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question41',async(req,res)=>{
    try{
        const result = await pool.query('select jh .* ,e .* from job_history jh join employees e On jh.employee_id = e.employee_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question42',async(req,res)=>{
    try{
        const result = await pool.query('select e .* ,jh .* from employees e join job_history jh On e.employee_id = jh.employee_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question43',async(req,res)=>{
    try{
        const result = await pool.query('select e .* ,jh .* ,d.department_name from employees e join job_history jh On e.employee_id = jh.employee_id join departments d On jh.department_id = d.department_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question44',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name,e.last_name,e.salary,jh.* ,d.department_name,l.* from employees e join job_history jh On e.employee_id = jh.employee_id join departments d On jh.department_id = d.department_id join locations l On d.location_id = l.location_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question45',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name, e.last_name, e.salary,jh .* ,c.country_name from employees e join job_history jh On e.employee_id = jh.employee_id join departments d On jh.department_id = d.department_id join locations l On d. location_id = l.location_id join countries c On l.country_id = c.country_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question46',async(req,res)=>{
    try{
        const result = await pool.query('select jh .* ,e.first_name,e.last_name,e.salary,d .* from job_history jh join employees e On jh.employee_id = e.employee_id join departments d On jh.department_id = d.department_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question47',async(req,res)=>{
    try{
        const result = await pool.query('select jh .* ,e.first_name, e.last_name,e.salary, j .* from job_history jh join employees e On jh.employee_id = e.employee_id join jobs j On jh.job_id = j.job_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});
app.get('/Question48',async(req,res)=>{
    try{
        const result = await pool.query('select jh .* ,e.first_name,e.last_name,e.salary,j .* ,d.department_name from job_history jh join employees e On jh.employee_id = e.employee_id join jobs j On jh.job_id=j.job_id join departments d On jh.department_id = d.department_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question49',async(req,res)=>{
    try{
        const result = await pool.query('select jh .* ,e.first_name,e.last_name,e.salary,j.* ,l.* from job_history jh join employees e On jh.employee_id = e.employee_id join jobs j On jh.job_id = j.job_id join departments d On jh.department_id = d.department_id join locations l On d.location_id = l.location_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question50',async(req,res)=>{
    try{
        const result = await pool.query('select jh.* ,e.first_name,e.last_name,e.salary,j.* ,c.country_name from job_history jh join employees e On jh.employee_id = e.employee_id join jobs j On jh.job_id = j.job_id join departments d On jh.department_id = d.department_id join locations l On d.location_id = l.location_id join countries c On l.country_id = c.country_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question51',async(req,res)=>{
    try{
        const result = await pool.query('select r.*, c.country_name, l.* from regions r join countries c On r.region_id = c.region_id join locations l On c.country_id = l.country_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question52',async(req,res)=>{
    try{
        const result = await pool.query('select c.country_name ,r.* ,l.* from countries c join regions r On c.region_id = r.region_id join locations l On c.country_id = l.country_id limit 2');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question53',async(req,res)=>{
    try{
        const result = await pool.query('select l.* , c.country_name,r .* from locations l join countries c On l.country_id = c.country_id join regions r On c.region_id = r.region_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question54',async(req,res)=>{
    try{
        const result = await pool.query('select d.department_name, e.first_name, e.salary,l .* from departments d join employees e On d.department_id = e.department_id join locations l On d. location_id = l.location_id limit 2 ;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question55',async(req,res)=>{
    try{
        const result = await pool.query('select e. first_name, e.salary, d.department_name, l .* ,c.country_name from employees e join departments d On e.department_id = d.department_id join locations l On d. location_id = d. location_id join countries c On l.country_id =l.country_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question56',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name as "employee_name",e.salary,e.manager_id,m.first_name as "manager_name" ,d.department_name, l .* from employees e left join employees m On e.manager_id = m.employee_id join departments d On e.department_id = d.department_id join locations l On d.location_id = l.location_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question57',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name,e.last_name, e.salary,j.job_title,d.department_name,l .* from employees e join jobs j On e.job_id = j.job_id join departments d On e.department_id = d.department_id join locations l On d.location_id = l.location_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question58',async(req,res)=>{
    try{
        const result = await pool.query('select e. first_name as "Employee_name", e.salary, j. job_title, d. department_name , e.manager_id, m.first_name as "Manager_name" from employees e join jobs j On e. job_id = j. job_id join departments d On e. department_id = d.department_id left join employees m On e.manager_id = m.employee_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question59',async(req,res)=>{
    try{
        const result = await pool.query('select e.first_name as "Employee_name",e.salary,j.job_title,d.department_name ,e.manager_id,m.first_name as "Manager_name",l .* from employees e join jobs j On e. job_id = j. job_id join departments d On e.department_id = d.department_id left join employees m On e.manager_id = m.employee_id join locations l On d. location_id = l.location_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question60',async(req,res)=>{
    try{
        const result = await pool.query('select c.country_name, r.region_id from countries c join regions r On c.region_id = r.region_id where r.region_id = 1;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question61',async(req,res)=>{
    try{
        const result = await pool.query('select d. department_name, l.city from departments d join locations l On d. location_id = l. location_id where l.city like \'N%\';');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});





app.get('/Question62',async(req,res)=>{
    try{
        const result = await pool.query('select e. first_name as "Employee_name", d.department_name, e. manager_id, m. first_name as "Manager_name" ,e. commission_pct from employees e join departments d On e. department_id= d.department_id left join employees m On e.manager_id = m. employee_id where e. commission_pct > 0.15 limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question63',async(req,res)=>{
    try{
        const result = await pool.query('select job_id from employees where manager_id is not null limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question64', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT l.postal_code, r.region_name 
             FROM locations l 
             JOIN countries c ON l.country_id = c.country_id 
             JOIN regions r ON c.region_id = r.region_id 
             WHERE r.region_name LIKE '%Asia' 
             LIMIT 2;`
        );
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});



app.get('/Question65',async(req,res)=>{
    try{
        const result = await pool.query('select e. first_name, d. department_name, e.commission_pct from departments d join employees e On e. department_id = d. department_id where e. commission_pct < (select avg(commission_pct) from employees) limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question66',async(req,res)=>{
    try{
        const result = await pool.query('select j.job_title, e.salary, d.department_name from employees e join jobs j On e. job_id = j. job_id left join departments d On e.department_id = d.department_id where e.salary > (select avg(ee. salary)from employees ee where ee. department_id = e.department_id) limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question67',async(req,res)=>{
    try{
        const result = await pool.query('select employee_id, department_id from employees where department_id is null limit 2 ;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question68',async(req,res)=>{
    try{
        const result = await pool.query('select e. first_name from employees e join job_history jh on e. employee_id= jh. employee_id group by e. first_name having count(distinct jh. job_id) > 1 limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question69',async(req,res)=>{
    try{
        const result = await pool.query('select department_id , count(employee_id) as "Total Employees" from employees group by department_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question70',async(req,res)=>{
    try{
        const result = await pool.query('select job_id , sum(salary) as "Total salary" from emloyees group by job_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question71',async(req,res)=>{
    try{
        const result = await pool.query('select department_id ,avg(commission_pct) as "Avg_Commission_pct" from employees group by department_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question72',async(req,res)=>{
    try{
        const result = await pool.query('select max(e.salary) as "Max Salary", c.country_name from employees e join departments d On e.department_id = d.department_id join locations l On d. location_id = l. location_id join countries c On l.country_id = c. country_id group by c.country_name limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question73',async(req,res)=>{
    try{
        const result = await pool.query('select max(e.salary) as "Max Salary", c.country_name from employees e join departments d On e.department_id = d.department_id join locations l On d. location_id = l. location_id join countries c On l.country_id = c.country_id group by c.country_name limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question74',async(req,res)=>{
    try{
        const result = await pool.query('select d.department_id , c.country_name, l.city, count(e.employee_id) as "Total Employees" from employees e join departments d On e.department_id = d. department_id join locations l On d. location_id = l. location_id join countries c On l.country_id = c.country_id group by c.country_name, l.city, d.department_id having count(e. employee_id)>=2 limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question75', async (req, res) => {
    try {
        const result = await pool.query("select concat(e.first_name, ' ', e.last_name) as \"Full name\", j.job_title, jh.start_date, jh.end_date from employees e join jobs j On e.job_id = j.job_id join job_history jh On e.employee_id = jh.employee_id where e.commission_pct is null limit 2;");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/Question76',async(req,res)=>{
    try{
        const result = await pool.query('select concat(e.first_name, \' \', e.last_name) as "Full name", e.employee_id, c.country_name from employees e join departments d On e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c On l.country_id = c.country_id limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});



app.get('/Question77',async(req,res)=>{
    try{
        const result = await pool.query('select concat(e.first_name, \' \', e.last_name) as "full_name",e. salary,e.department_id from employees e where salary = (select min(salary) from employees where department_id = e.department_id) limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question78',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees where salary=(select max(salary) from employees where salary<(select max(salary)from employees where salary<(select max(salary)from employees)));');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/Question79',async(req,res)=>{
    try{
        const result = await pool.query('select e.employee_id , concat(e.first_name, \' \', e.last_name)as "Full_name",e.salary from employees e where salary >(select avg(salary) from employees) and e.department_id In(select distinct e.department_id from employees where e.first_name like \'%J%\') limit 5;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/Question80',async(req,res)=>{
    try{
        const result = await pool.query('select concat(e.first_name, \' \', e.last_name) as "Full_name", e.employee_id, j.job_title, l.city from employees e join jobs j On e.job_id = j.job_id join departments d On e.department_id = d.department_id join locations l On d.location_id = l.location_id where l.city like \'%Toronto%\' limit 2;');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from countries');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/employees',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connect Successfully...on PORT ${PORT}`);
});