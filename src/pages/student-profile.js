import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentProfile = () => {
    const { id } = useParams(); // Get the student ID from the URL
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/students/${id}`);
                setStudent(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch student details');
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="student-profile">
            <h2>Student Profile</h2>
            {student ? (
                <div>
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Mother's Name:</strong> {student.mothersName}</p>
                    <p><strong>Class:</strong> {student.classStudy}</p>
                    <p><strong>Date of Birth:</strong> {student.dob}</p>
                    <p><strong>Father's Name:</strong> {student.fathersName}</p>
                    <p><strong>Gender:</strong> {student.gender}</p>
                    <p><strong>Roll Number:</strong> {student.rollnumber}</p>
                    <p><strong>Address:</strong> {student.address}</p>
                    <p><strong>Admission Year:</strong> {student.admissionyear}</p>
                    <p><strong>Document:</strong> <a href={student.documentUrl} target="_blank" rel="noopener noreferrer">View Document</a></p>
                    <p><strong>Student Image:</strong> <img src={student.studentImageUrl} alt="Student" /></p>
                </div>
            ) : (
                <p>No student data available</p>
            )}
        </div>
    );
};

export default StudentProfile;
