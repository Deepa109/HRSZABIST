const admission_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/admission";
btn1.addEventListener("click", () => {


    fetch(admission_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch admission DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#admissiontable tbody");

        data.forEach(admission => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${admission.admission_id}</td>
        <td>${admission.patient_id}</td>
        <td>${admission.room_id}</td>
        <td>${admission.admission_date}</td>
        <td>${admission.discharge_date}</td>
          
 `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});


const appointment_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/appointment";
btn2.addEventListener("click", () => {


    fetch(appointment_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch appointment DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#appointmenttable tbody");

        data.forEach(appointment => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${appointment.appointment_id}</td>
        <td>${appointment.patient_id}</td>
        <td>${appointment.doctor_id}</td>
        <td>${appointment.appointment_date}</td>
        <td>${appointment.appointment_time}</td>
        <td>${appointment.status}</td>
        
          
 `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});


const bill_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/bill";
btn3.addEventListener("click", () => {


    fetch(bill_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch bill DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#billtable tbody");

        data.forEach(bill => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${bill.bill_id}</td>
         <td>${bill.admission_id}</td>
          <td>${bill.total_amount}</td>
           <td>${bill.payment_status}</td>
            <td>${bill.bill_date}</td>

        `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});



const department_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/department";
btn4.addEventListener("click", () => {


    fetch(department_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch department DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#departmenttable tbody");

        data.forEach(department => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${department.department_id}</td>
        <td>${department.name}</td>
        <td>${department.description}</td>
        
        `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});


const doctor_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/doctor";
btn5.addEventListener("click", () => {


    fetch(doctor_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch doctor DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#doctortable tbody");

        data.forEach(doctor => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${doctor.doctor_id}</td>
        <td>${doctor.name}</td>
        <td>${doctor.specialization}</td>
        <td>${doctor.phone}</td>
        <td>${doctor.email}</td>
        <td>${doctor.department_id}</td>
        
        
        `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});


const medicine_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/medicine";
btn6.addEventListener("click", () => {


    fetch(medicine_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch medicine DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#medicinetable tbody");

        data.forEach(medicine => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${medicine.medicine_id}</td>
        <td>${medicine.name}</td>
        <td>${medicine.manufacturer}</td>
        <td>${medicine.expiry_date}</td>
         
        `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});



const patient_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/patient";
btn7.addEventListener("click", () => {


    fetch(patient_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch patient DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#patienttable tbody");

        data.forEach(patient => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${patient.patient_id}</td>
        <td>${patient.name}</td>
        <td>${patient.gender}</td>
        <td>${patient.date_of_birth}</td>
        <td>${patient.phone}</td>
        <td>${patient.address}</td>
       
        `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});


const mediciation_order_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/mediciation_order";
btn8.addEventListener("click", () => {


    fetch(mediciation_order_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch mediciation_order DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#mediciation_ordertable tbody");

        data.forEach(mediciation_order => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${mediciation_order.prescription_id}</td>
        <td>${mediciation_order.treatment_id}</td>
        <td>${mediciation_order.medicine_id}</td>
        <td>${mediciation_order.dosage}</td>
        <td>${mediciation_order.duration}</td>
        `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});


const room_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/room";
btn9.addEventListener("click", () => {


    fetch(room_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch room DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#roomtable tbody");

        data.forEach(room => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${room.room_id}</td>
         <td>${room.room_number}</td>
          <td>${room.type}</td>
           <td>${room.status}</td>
            
        `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});


const treatment_URL = "https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/treatment";
btn10.addEventListener("click", () => {


    fetch(treatment_URL).then(response => {
        if (!response.ok)
            throw new Error("Failed to fetch treatment DATA");
        return response.json();
    }).then(data => {
        const tbody = document.querySelector("#treatmenttable tbody");

        data.forEach(treatment => {
            const row = document.createElement("tr");
            row.innerHTML = `
        
       <td>${treatment.treatment_id}</td>
       <td>${treatment.admission_id}</td>
       <td>${treatment.doctor_id}</td>
       <td>${treatment.description}</td>
        <td>${treatment.treatment_date}</td>
        `;

            tbody.appendChild(row);
        });
    }).catch(err => {
        console.log(err.message);
    });


});

//================================================================ POST =======================================================
const admissionForm = document.getElementById('admissionForm');
admissionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        admission_id: document.getElementById('ad_admission_id').value,
        patient_id: document.getElementById('ad_patient_id').value,
        room_id: document.getElementById('ad_room_id').value,
        admission_date: document.getElementById('ad_admission_date').value,
        discharge_date: document.getElementById('ad_discharge_date').value
    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/admissionpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert(" Admitted successfully!");
            console.log(response);

            admissionForm.reset();
        })
        .catch(error => {
            console.error("Error in admission:", error);
            alert("Failed to submit.");
        });
});

const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        appointment_id: parseInt(document.getElementById('ap_appointment_id').value),
        patient_id: parseInt(document.getElementById('ap_patient_id').value),
        doctor_id: parseInt(document.getElementById('ap_doctor_id').value),
       
        appointment_date: document.getElementById('ap_appointment_date').value,
        appointment_time: document.getElementById('ap_appointment_time').value,
        status: document.getElementById('ap_status').value
    };




    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/appointmentpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert("Appointment booked successfully!");
            console.log(response);


        })
        .catch(error => {
            console.error("Error in appointment submission:", error);
            alert("Failed to book appointment.");
        });
});

console.log("Sending data:", data);


const departmentForm = document.getElementById('departmentForm');

departmentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        department_id: parseInt(document.getElementById('department_id').value),
        name: document.getElementById('name').value,
        description: document.getElementById('description').value
    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/departmentpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert("Department submitted successfully!");
            console.log(response);
        })
        .catch(error => {
            console.error("Error submitting department:", error);
            alert("Failed to submit department.");
        });
});

const doctorForm = document.getElementById('doctorForm');

doctorForm.addEventListener('submit', function (e) {
    e.preventDefault();


    const data = {
        doctor_id: document.getElementById('doctor_id').value,
        name: document.getElementById('name').value,
        specialization: document.getElementById('specialization').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        department_id: document.getElementById('department_id').value
    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/doctorpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert("Doctor submitted successfully!");
            console.log(response);
        })
        .catch(error => {
            console.error("Error submitting doctor:", error);
            alert("Failed to submit doctor.");
        });
});

const medicineForm = document.getElementById('medicineForm');
medicineForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        medicine_id: document.getElementById('medicine_id').value,
        name: document.getElementById('name').value,
        manufacturer: document.getElementById('manufacturer').value,
        expiry_date: document.getElementById('expiry_date').value,

    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/medicinepost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert("medicine submitted successfully!");
            console.log(response);
        })
        .catch(error => {
            console.error("Error submitting medicine:", error);
            alert("Failed to submit medicine.");
        });
});


const patientForm = document.getElementById('patientForm');
patientForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        patient_id: document.getElementById('patient_id').value,
        name: document.getElementById('name').value,
        gender: document.getElementById('gender').value,
        date_of_birth: document.getElementById('date_of_birth').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value
    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/patientpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert("Patient submitted successfully!");
            console.log(response);
        })
        .catch(error => {
            console.error("Error submitting patient:", error);
            alert("Failed to submit patient.");
        });
});



const billForm = document.getElementById('billForm');
billForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        bill_id: document.getElementById('bill_id').value,
        admission_id: document.getElementById('admission_id').value,
        total_amount: parseFloat(document.getElementById('total_amount').value),
        payment_status: document.getElementById('payment_status').value,
        bill_date: document.getElementById('bill_date').value
    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/billpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert("Bill submitted successfully!");
            console.log(response);
        })
        .catch(error => {
            console.error("Error submitting bill:", error);
            alert("Failed to submit bill.");
        });
});

const mediciation_orderForm = document.getElementById('mediciation_orderForm');
mediciation_orderForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        prescription_id: document.getElementById('prescription_id').value,
        treatment_id: document.getElementById('treatment_id').value,
        medicine_id: document.getElementById('medicine_id').value,
        dosage: document.getElementById('dosage').value,
        duration: document.getElementById('duration').value
    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/mediciation_orderpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert(" mediciation_order added successfully!");
            console.log(response);

            admissionForm.reset();
        })
        .catch(error => {
            console.error("Error in mediciation_order:", error);
            alert("Failed to submit.");
        });
});

const treatmentForm = document.getElementById('treatmentForm');
treatmentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        treatment_id: document.getElementById('treatment_id').value,
        admission_id: document.getElementById('admission_id').value,
        doctor_id: document.getElementById('doctor_id').value,
        description: document.getElementById('description').value,
        treatment_date: document.getElementById('treatment_date').value,

    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/treatmentpost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert(" submitted successfully!");
            console.log(response);
        })
        .catch(error => {
            console.error("Error submitting :", error);
            alert("Failed to submit .");
        });
});


const roomForm = document.getElementById('roomForm');
roomForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = {
        room_id: document.getElementById('room_id').value,
        room_number: document.getElementById('room_number').value,
        type: document.getElementById('type').value,
        status: document.getElementById('status').value,


    };

    fetch('https://ubiquitous-lamp-69wq65pv6gvrc54g-6006.app.github.dev/roompost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(response => {
            alert(" submitted successfully!");
            console.log(response);
        })
        .catch(error => {
            console.error("Error submitting :", error);
            alert("Failed to submit .");
        });
});

