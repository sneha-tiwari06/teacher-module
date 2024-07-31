import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudents() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        mothersName: '',
        fathersName: '',
        classStudy: '',
        dob: '',
        gender: '',
        rollnumber: '',
        address: '',
        documents: '',
        image: '',
        admissionyear:''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        for (let key in formData) {
            form.append(key, formData[key]);
        }

        try {
            await axios.post('http://localhost:5000/api/students', form);
            alert('Student added successfully');
            navigate('/studentList');

        } catch (error) {
            console.error('Error adding student:', error);
            alert('Failed to add student');
        }
    };

    return (
        <div className='w-100 mt-4 add-students'>
            <h2 className='heading'>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mothersName" className="form-label">Mother's Name</label>
                            <input type="text" className="form-control" id="mothersName" value={formData.mothersName} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="classStudy" className="form-label">Class</label>
                            <select id="classStudy" className="form-select" value={formData.classStudy} onChange={handleChange}>
                                <option value="">Select Class</option>
                                <option value="class1">Class 1</option>
                                <option value="class2">Class 2</option>
                                <option value="class3">Class 3</option>
                                <option value="class4">Class 4</option>
                                <option value="class5">Class 5</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="admissionyear" className="form-label">Year Of Admission</label>
                            <select id="admissionyear" className="form-select" value={formData.admissionyear} onChange={handleChange}>
                                <option value="">Select Year</option>
                                <option value="2024">2024-25</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">Date Of Birth</label>
                            <input type="date" className="form-control" id="dob" value={formData.dob} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="documents" className="form-label">Add Documents</label>
                            <input className="form-control" type="file" id="documents" onChange={handleFileChange} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="fathersName" className="form-label">Father's Name</label>
                            <input type="text" className="form-control" id="fathersName" value={formData.fathersName} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <input type="text" className="form-control" id="gender" value={formData.gender} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rollnumber" className="form-label">Roll No.</label>
                            <input type="text" className="form-control" id="rollnumber" value={formData.rollnumber} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Upload Student's Image</label>
                            <input className="form-control" type="file" id="image" onChange={handleFileChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="button-all">Submit</button>
            </form>
        </div>
    );
}

export default AddStudents;
