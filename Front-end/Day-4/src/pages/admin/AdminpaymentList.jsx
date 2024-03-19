import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard, People, School, MenuBook, Contacts, Business, Payment, ExitToApp } from '@mui/icons-material';
import '../../assets/css/AdminSidebar.css';
import AdminNavbar from './AdminNavbar';
const AdminpaymentList = () => {
    const handleLogout = () => {    
    };``
    const studentData = [
        { rollNo: '727821TUCS212', name: 'SAKTHIVEL M', FeesType: 'ANNUAL', date: '10-MAR-2003', invoiceno: 'IN-1212', paymenttype: 'CREDIT CARD',satus:'Paid',amount:'100000' },
        { rollNo: '727821TUCS212', name: 'SAKTHIVEL M', FeesType: 'ANNUAL', date: '10-MAR-2003', invoiceno: 'IN-1212', paymenttype: 'CREDIT CARD',satus:'Paid',amount:'100000' },
        { rollNo: '727821TUCS212', name: 'SAKTHIVEL M', FeesType: 'ANNUAL', date: '10-MAR-2003', invoiceno: 'IN-1212', paymenttype: 'CREDIT CARD',satus:'Paid',amount:'100000' },
        { rollNo: '727821TUCS212', name: 'SAKTHIVEL M', FeesType: 'ANNUAL', date: '10-MAR-2003', invoiceno: 'IN-1212', paymenttype: 'CREDIT CARD',satus:'Paid',amount:'100000' },
        { rollNo: '727821TUCS212', name: 'SAKTHIVEL M', FeesType: 'ANNUAL', date: '10-MAR-2003', invoiceno: 'IN-1212', paymenttype: 'CREDIT CARD',satus:'Paid',amount:'100000' },
        { rollNo: '727821TUCS212', name: 'SAKTHIVEL M', FeesType: 'ANNUAL', date: '10-MAR-2003', invoiceno: 'IN-1212', paymenttype: 'CREDIT CARD',satus:'Paid',amount:'100000' },
        
    ];
    return (
        <div className="admin-dashboard">
           
            <div className="sidebar">
                <ul>
                    <li><Link to="/adminDashboard"><Dashboard /> Dashboard</Link></li>
                    <li><Link to="/adminStudent"><People /> Students</Link></li>
                    <li><Link to="/departments"><School /> Departments</Link></li>
                    <li><Link to="/courses"><MenuBook /> Courses</Link></li>
                    <li><Link to="/contact"><Contacts /> Contact</Link></li>
                    <li><Link to="/adminCollege"><Business /> College</Link></li>
                    <li><Link to="/adminpaymentList"><Payment /> Payments</Link></li>
                    <li onClick={handleLogout} className="logout-button"><ExitToApp /> Logout</li>
                </ul>
            </div>
            <div className="content-side">
                <table className="student-table1">
                    <thead>
                        <tr>
                        <th>ROLL NO.</th>
                            <th>NAME</th>
                            <th>FEES TYPE</th>
                            <th>DATE</th>
                            <th>INVOICE NO </th>
                            <th>PAYMENT TYPE</th>
                            <th>STATUS</th>
                            <th>AMOUNT</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.map((student, index) => (
                            <tr key={index}>
                                <td>{student.rollNo}</td>
                                <td>{student.name}</td>
                                <td>{student.FeesType}</td>
                                <td>{student.date}</td>
                                <td>{student.invoiceno}</td>
                                <td>{student.paymenttype}</td>
                                <td>{student.satus}</td>
                                <td>{student.amount}</td>
                                <td>      
                                    <button className='view' onClick={() => handleView(student)}>View</button>
                                    <button className='delete' onClick={() => handleDelete(student)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminpaymentList