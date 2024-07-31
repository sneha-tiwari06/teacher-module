import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample data; replace with actual data fetching logic
const sampleStudents = [
    { id: 1, name: 'John Doe', class: 'Class 1', year: '2021', age: 10, address: '123 Main St' },
    { id: 2, name: 'Jane Smith', class: 'Class 2', year: '2022', age: 11, address: '456 Elm St' },
    { id: 3, name: 'Alice Johnson', class: 'Class 3', year: '2023', age: 12, address: '789 Oak St' },
    // Add more students as needed
];

function StudentProfile() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        // Fetch or filter the student details using the ID
        const studentDetail = sampleStudents.find((student) => student.id === parseInt(id));
        setStudent(studentDetail);
    }, [id]);

    if (!student) {
        return <div>Student not found</div>;
    }

    return (
        <div>
            <h1>Student Profile</h1>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Year:</strong> {student.year}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Address:</strong> {student.address}</p>
        </div>
    );
}

export default StudentProfile;
