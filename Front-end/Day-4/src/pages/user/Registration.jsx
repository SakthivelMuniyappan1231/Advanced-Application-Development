import React from 'react';
import '../../assets/css/Registration.css'
import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form successfully submitted!');
        navigate('/navbar');
    };

    return (
        <div className='registration-background'>
            <div className='container1'>
                <h2 className='registration-heading'>Students Details</h2>
                <form className='registration-form' onSubmit={handleSubmit}>
                    <div className="column1">
                        <div className='registration-field'>
                            <label className='registration-label'>Name: <span>*</span></label>
                            <input type="text" placeholder='Name' id="name" name="name" required />
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>E-mail: <span>*</span></label>
                            <input type="text" placeholder='E-mail' id="email" name="email" required />
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>Father's Name: <span>*</span> </label>
                            <input type="text" placeholder='Father-Name' id="fatherName" name="fatherName" required />
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>Mother's Name: <span>*</span> </label>
                            <input type="text" placeholder='Mother-Name' id="motherName" name="motherName" required />
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>Gender: <span>*</span> </label>
                            <select className='registration-select' id="gender" name="gender">
                                <option value="Select Gende"> Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>Age: <span>*</span> </label>
                            <input type="number" placeholder='Age' id="age" name="age" required />
                        </div>
                    </div>

                    <div className='column2'>
                        <div className='registration-field'>
                            <label className='registration-label'>Nationality: <span>*</span> </label>
                            <input type="text" placeholder='Nationality' id="nationality" name="nationality" required />
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>Date of Birth: <span>*</span> </label>
                            <input type="date" id="dob" name="dob" required />
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>Address: <span>*</span> </label>
                            <input className='registration-address' placeholder='Address' name="address" rows={4} required></input>
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>Mobile Number: <span>*</span> </label>
                            <input type="tel" placeholder='Mobil-Number' id="mobile" name="mobile" pattern="[0-9]{10}" required />
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>SSLC Mark: <span>*</span> </label>
                            <input type="number" placeholder='SSLC Marck' id="sslcMark" name="sslcMark" required />
                        </div>
                        <div className='registration-field'>
                            <label className='registration-label'>HSLC Mark: <span>*</span> </label>
                            <input type="number" placeholder='HSLC-Mark' id="hslcMark" name="hslcMark" required />
                        </div>
                    </div>
                    <div className='registration-button-container'>
                        <button className="registration-submit-button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
