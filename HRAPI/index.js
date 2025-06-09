const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        res.json('WELCOME TO HOSPITAL MANAGEMENT SYSTEM API');
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/emp', async (req, res) => {
    try {
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/TotalEmployees', async (req, res) => {
    try {
        const result = await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/employees', async (req, res) => {
    try {
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/admission', async (req, res) => {
    try {
        const result = await pool.query('select * from admission');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/appointment', async (req, res) => {
    try {
        const result = await pool.query('select * from appointment');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/bill', async (req, res) => {
    try {
        const result = await pool.query('select * from bill');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/department', async (req, res) => {
    try {
        const result = await pool.query('select * from department');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/doctor', async (req, res) => {
    try {
        const result = await pool.query('select * from doctor');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/medicine', async (req, res) => {
    try {
        const result = await pool.query('select * from medicine');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/patient', async (req, res) => {
    try {
        const result = await pool.query('select * from patient');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/mediciation_order', async (req, res) => {
    try {
        const result = await pool.query('select * from mediciation_order');

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/room', async (req, res) => {
    try {
        const result = await pool.query('select * from room');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/treatment', async (req, res) => {
    try {
        const result = await pool.query('select * from treatment');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

//===================================================== GRAPH ================================================================
app.get('/admissionCountgraph', async (req, res) => {
    try {
        const result = await pool.query('select admission_date , count(*) from admission group by admission_date');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/appointmentCountgraph', async (req, res) => {
    try {
        const result = await pool.query('select appointment_date , count(*) from appointment group by appointment_date');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/billCountgraph', async (req, res) => {
    try {
        const result = await pool.query('select bill_id ,total_amount from bill');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});


app.get('/doctorPerDepartment', async (req, res) => {
    try {
        const result = await pool.query('select department_id ,count(doctor_id) from doctor group by department_id');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/patientGender', async (req, res) => {
    try {
        const result = await pool.query('select gender, count(*) from patient group by gender');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/roomgraph', async (req, res) => {
    try {
        const result = await pool.query('select status, count(*) from room group by  status');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/treatmentgraph', async (req, res) => {
    try {
        const result = await pool.query('select treatment_date, count(*) from treatment group by treatment_date');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/mediciationgraph', async (req, res) => {
    try {
        const result = await pool.query('select dosage, count(*) from mediciation_order group by dosage');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});


app.get('/medicinegraph', async (req, res) => {
    try {
        const result = await pool.query('select medicine_id ,count(*) from medicine where expiry_date > current_date group by medicine_id');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/departmentgraph', async (req, res) => {
    try {
        const result = await pool.query('select department_id, count(*) from doctor group by department_id');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

//====================================================== POST ========================================================

app.post('/admissionpost', async (req, res) => {
    const { admission_id, patient_id, room_id, admission_date, discharge_date } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO admission ( admission_id, patient_id, room_id, admission_date, discharge_date) VALUES ($1, $2,$3,$4,$5)',
            [admission_id, patient_id, room_id, admission_date, discharge_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /admissionpost error:", err);
        res.status(500).json({ Error: err.message });
    }
});


app.post('/appointmentpost', async (req, res) => {
    const { appointment_id, patient_id, doctor_id, appointment_date, appointment_time, status } = req.body;



    try {
        const result = await pool.query(
            `INSERT INTO Appointment (appointment_id,patient_id,doctor_id,appointment_date,appointment_time,status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
            [appointment_id, patient_id, doctor_id, appointment_date, appointment_time, status]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /appointmentpost error:", err);
        res.status(500).json({ error: err.message });
    }
   
});

app.post('/departmentpost', async (req, res) => {
    const { department_id, name, description } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO department (department_id, name, description) VALUES ($1, $2, $3)RETURNING *',
            [department_id, name, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /departmentpost error:", err);
        res.status(500).json({ Error: err.message });
    }
});

app.post('/doctorpost', async (req, res) => {
    const { doctor_id, name, specialization, phone, email, department_id } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO doctor (doctor_id, name, specialization, phone, email, department_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [doctor_id, name, specialization, phone, email, department_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /doctorpost error:", err);
        res.status(500).json({ Error: err.message });
    }
});

app.post('/medicinepost', async (req, res) => {
    const { medicine_id, name, manufacturer, expiry_date } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO medicine (medicine_id, name, manufacturer, expiry_date) VALUES ($1, $2, $3, $4) RETURNING *',
            [medicine_id, name, manufacturer, expiry_date]
        );
        res.status(201).json(result.rows[0]);

    } catch (err) {
        console.error("POST /medicinepost error:", err);
        res.status(500).json({ Error: err.message });
    }
});

app.post('/billpost', async (req, res) => {
    const { bill_id, admission_id, total_amount, payment_status, bill_date } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO bill ( bill_id, admission_id ,total_amount,payment_status,bill_date) VALUES ($1, $2,$3,$4,$5)RETURNING *',
            [bill_id, admission_id, total_amount, payment_status, bill_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /billpost error:", err);
        res.status(500).json({ Error: err.message });
    }
});





app.post('/patientpost', async (req, res) => {
    const { patient_id, name, gender, date_of_birth, phone, address } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO patient (patient_id, name, gender, date_of_birth, phone, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [patient_id, name, gender, date_of_birth, phone, address]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /patientpost error:", err);
        res.status(500).json({ Error: err.message });
    }
});


app.post('/mediciation_orderpost', async (req, res) => {
    const { prescription_id, treatment_id, medicine_id, dosage, duration } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO mediciation_order(prescription_id, treatment_id, medicine_id, dosage, duration) VALUES ($1, $2, $3, $4, $5)RETURNING *',
            [prescription_id, treatment_id, medicine_id, dosage, duration]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /mediciation_orderpost error:", err);
        res.status(500).json({ Error: err.message });
    }
});


app.post('/roompost', async (req, res) => {
    const { room_id, room_number, type, status } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO room(room_id, room_number, type, status) VALUES ($1, $2, $3, $4)RETURNING *',
            [room_id, room_number, type, status]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /roompost error:", err);
        res.status(500).json({ Error: err.message });
    }
});


app.post('/treatmentpost', async (req, res) => {
    const { treatment_id, admission_id, doctor_id, description, treatment_date } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO treatment(treatment_id, admission_id, doctor_id, description, treatment_date) VALUES ($1, $2, $3, $4, $5)RETURNING *',
            [treatment_id, admission_id, doctor_id, description, treatment_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("POST /treatmentpost error:", err);
        res.status(500).json({ Error: err.message });
    }
});



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Connect Successfully...on PORT ${PORT}`);
});