import RegisterForm from '@/Components/RegisterRelative/RegisterForm';
import React from 'react';

const RegisterPage = () => {
    return (
        <div className='flex justify-between items-center my-10'>


            <div className='flex-2'>
                <RegisterForm></RegisterForm>
            </div>
            <div className='flex-1 '>
                <h1>Welcome to Register Page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, pariatur.</p>

            </div>
        </div>
    );
};

export default RegisterPage;