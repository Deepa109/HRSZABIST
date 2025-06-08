const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HOSPITAL MANAGEMENT SYSTEM API');
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

app.get('/TotalEmployees',async(req,res)=>{
    try{
        const result = await pool.query('select count(employee_id) from employees');
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

app.get('/admission',async(req,res)=>{
    try{
        const result = await pool.query('select * from admission');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/appointment',async(req,res)=>{
    try{
        const result = await pool.query('select * from appointment');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/bill',async(req,res)=>{
    try{
        const result = await pool.query('select * from bill');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/department',async(req,res)=>{
    try{
        const result = await pool.query('select * from department');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/doctor',async(req,res)=>{
    try{
        const result = await pool.query('select * from doctor');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/medicine',async(req,res)=>{
    try{
        const result = await pool.query('select * from medicine');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/patient',async(req,res)=>{
    try{
        const result = await pool.query('select * from patient');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/mediciation_order',async(req,res)=>{
    try{
        const result = await pool.query('select * from mediciation_order');
        
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/room',async(req,res)=>{
    try{
        const result = await pool.query('select * from room');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/treatment',async(req,res)=>{
    try{
        const result = await pool.query('select * from treatment');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/admissionCountgraph',async(req,res)=>{
    try{
        const result = await pool.query('select admission_date , count(*) from admission group by admission_date');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/appointmentCountgraph',async(req,res)=>{
    try{
        const result = await pool.query('select appointment_date , count(*) from appointment group by appointment_date');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/billCountgraph',async(req,res)=>{
    try{
        const result = await pool.query('select bill_id ,total_amount from bill');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/doctorPerDepartment',async(req,res)=>{
    try{
        const result = await pool.query('select department_id ,count(doctor_id) from doctor group by department_id');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/patientGender',async(req,res)=>{
    try{
        const result = await pool.query('select gender, count(*) from patient group by gender');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/roomgraph',async(req,res)=>{
    try{
        const result = await pool.query('select status, count(*) from room group by  status');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/treatmentgraph',async(req,res)=>{
    try{
        const result = await pool.query('select treatment_date, count(*) from treatment group by treatment_date');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/mediciationgraph',async(req,res)=>{
    try{
        const result = await pool.query('select dosage, count(*) from mediciation_order group by dosage');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});


app.get('/medicinegraph',async(req,res)=>{
    try{
const result = await pool.query('select medicine_id ,count(*) from medicine where expiry_date > current_date group by medicine_id');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});

app.get('/departmentgraph',async(req,res)=>{
    try{
const result = await pool.query('select department_id, count(*) from doctor group by department_id');
        res.json(result.rows);
    }catch(err){
       res.status(500).json({Error:err.message});
    }
});




const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connect Successfully...on PORT ${PORT}`);
});