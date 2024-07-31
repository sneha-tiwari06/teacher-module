import React, { useState } from 'react';

const StudentList = () => {
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [students, setStudents] = useState([]);

    const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];
    const years = ['2021', '2022', '2023', '2024'];

    const sampleStudents = [
        { id: 1, name: 'John Doe', class: 'Class 1', year: '2021' },
        { id: 2, name: 'Jane Smith', class: 'Class 2', year: '2022' },
        { id: 3, name: 'Alice Johnson', class: 'Class 3', year: '2023' },
        { id: 4, name: 'Bob Brown', class: 'Class 1', year: '2022' },
        { id: 5, name: 'Charlie Davis', class: 'Class 4', year: '2024' },
    ];

    const handleClassChange = (e) => {
        setSelectedClass(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const filterStudents = () => {
        const filtered = sampleStudents.filter(
            (student) => student.class === selectedClass && student.year === selectedYear
        );
        setStudents(filtered);
    };

    return (
        <div className="w-100 student-section">
            <div className="row g-0">
                <div className="col-md-10">
                    <div className="student-filter">
                        <div className='row'>
                            <div className='col-md-4'>
                        <div className="mb-3">
                            <label htmlFor="classSelect" className="form-label">Select Class</label>
                            <select
                                id="classSelect"
                                className="form-select"
                                value={selectedClass}
                                onChange={handleClassChange}
                            >
                                <option value="">Select Class</option>
                                {classes.map((classOption, index) => (
                                    <option key={index} value={classOption}>
                                        {classOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                        </div>
                        <div className='col-md-4'>

                        <div className="mb-3">
                            <label htmlFor="yearSelect" className="form-label">Select Year</label>
                            <select
                                id="yearSelect"
                                className="form-select"
                                value={selectedYear}
                                onChange={handleYearChange}
                            >
                                <option value="">Select Year</option>
                                {years.map((yearOption, index) => (
                                    <option key={index} value={yearOption}>
                                        {yearOption}
                                    </option>
                                ))}
                            </select>
                        </div>
                        </div>
                        </div>
                        <button className="btn btn-primary" onClick={filterStudents}>
                            Show Students
                        </button>
                    </div>


                    <div className="student-list mt-4">
                        {students.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Class</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((student) => (
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.class}</td>
                                            <td>{student.year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No students found. Please select a class and year.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentList;
