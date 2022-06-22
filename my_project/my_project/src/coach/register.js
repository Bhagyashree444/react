import React, { useState } from 'react';

const CoachRegister = ()=>{
    const [form, setForm] = useState({
        name:'',
        password:'',
        dob:'',
        gender:'',
        mobileNumber:1234,
        speciality:''
    });
    const [nameErr, setNameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [dobErr, setDobErr] = useState(false);
    const [genderErr, setGenderErr] = useState(false);
    const [mobileNumErr, setMobileNumErr] = useState(false);
    const [specialityErr, setSpecialityErr] = useState(false);


    const handleOnChange = (e)=>{
        let {value, name} = e.target;
        setForm({
            ...form,
            [name]:value
        });
        validateInput(name, value);
    };

    const validateInput = (name, value)=>{
        let len = value.length;
        if(name === 'name'){
            if(len < 3 || len > 100){
                setNameErr(true);
            }else{
                setNameErr(false);
            }
        }
        if(name === 'password'){
            if(len < 3 || len > 50){
                setPasswordErr(true);
            }else{
                setPasswordErr(false);
            }
        }
        if(name === 'dob'){
            let today = new Date(),
                birthDate = new Date(value),
                difference = (today - birthDate)/((1000*60*60*24*365)),
                age = parseInt(difference.toFixed(1));
                console.log(age);
            if(age > 100 || age < 20){
                setDobErr(true);
            }else{
                setDobErr(false);
            }
        }
        if(name === 'mobileNumber'){
            if(len < 10){
                setMobileNumErr(true);
            }else{
                setMobileNumErr(false);
            }
        }
        if(name === 'speciality'){
            if(len < 3 || len > 50){
                setSpecialityErr(true);
            }else{
                setSpecialityErr(false);
            }
        }
    };

    const onRegister = ()=>{
        console.log(form);
    };

    return(
        <div>
            <div>{`Life Coach Profile`}</div>
            <div>
                <label>{`Name`}</label>
                <input type={`text`} 
                    value={form.name} 
                    onChange={handleOnChange} 
                    name={'name'}
                    maxLength={50}
                />
                {
                    nameErr ? 
                    <span>{`Name should have 3 to 50 characters`}</span>
                    :''
                }
            </div>
            <div>
                <label>{`Password`}</label>
                <input 
                    type={`password`} 
                    value={form.password} 
                    name={'password'} 
                    onChange={handleOnChange} 
                    maxLength={10}
                />
                {
                    passwordErr ?
                    <span>{`Password should have 3 to 10 characters`}</span>
                    :''
                }
            </div>
            <div>
                <label>{`Date of birth`}</label>
                <input 
                    type={`date`} 
                    value={form.dob} 
                    name={'dob'} 
                    onChange={handleOnChange}
                />
                {
                    dobErr ?
                    <span>{`Date of birth should be between 20 to 100 years`}</span>
                    :''
                }
            </div>
            <div>
                <label>{`Gender`}</label>
                <span>
                    <label>{`Male`}</label>
                    <input 
                        type={`radio`} 
                        name='gender' 
                        value={form.gender} 
                        name={'gender'} 
                        onChange={handleOnChange}
                    />
                </span>
                <span>
                    <label>{`Female`}</label>
                    <input 
                        type={`radio`} 
                        name='gender' 
                        value={form.gender} 
                        name={'gender'} 
                        onChange={handleOnChange}
                    />
                </span>
                {
                    genderErr ?
                    <span>{`Required`}</span>
                    :''
                }
            </div>
            <div>
                <label>{`Mobile Number`}</label>
                <input 
                    type={`number`} 
                    value={form.mobileNumber} 
                    name={'mobileNumber'} 
                    onChange={handleOnChange} 
                    maxLength={10}
                />
                {
                    mobileNumErr ?
                    <span>{`Mobile number should have 10 digits`}</span>
                    :''
                }
            </div>
            <div>
                <label>{`Speciality`}</label>
                <input 
                    type={`text`} 
                    value={form.speciality} 
                    name={'speciality'} 
                    onChange={handleOnChange}
                    maxLength={50}
                />
                {
                    specialityErr ?
                    <span>{`Speciality should have 10 to 50 characters`}</span>
                    :''
                }
            </div>
            <button onClick={onRegister}>{`Register`}</button>
        </div>
    )
};

export default CoachRegister;