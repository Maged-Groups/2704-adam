import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaPhone,
    FaUserPlus,
    FaArrowLeft,
    FaEye,
    FaEyeSlash
} from 'react-icons/fa';
import { useMemo } from 'react';
import PasswordValidator from '../components/auth/register/PasswordValidator';
import apis from '../lib/apis';

const Register = () => {
    console.log('Register fired');

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleFirstNameChange = e => setFirstName(e.target.value);

    const handleLastNameChange = e => setLastName(e.target.value);

    const handleEmailChange = e => setEmail(e.target.value);

    const handlePhoneChange = e => setPhone(e.target.value);

    const handlePasswordChange = e => setPassword(e.target.value);

    const handlePasswordConfirmationChange = e => setPasswordConfirmation(e.target.value);


    const firstNameValidator = useMemo(() => {

        console.log('FirstNameValidator fired');

        if (!firstName) {
            return <p className="mt-1 text-sm text-sky-500">3-15 [a-z , - , _]</p>;
        }
        else if (firstName.length < 3) {
            return <p className="mt-1 text-sm text-red-500">First name must be at least 3 characters long</p>;
        }
        else if (firstName.length > 12) {
            return <p className="mt-1 text-sm text-red-500">First name must be at most 12 characters long</p>;
        } else if (!firstName.match(/^[a-z _-]{3,12}$/i)) {
            return <p className="mt-1 text-sm text-red-500">First name should contain only letter, space, undersocre, or dash</p>;
        } else {
            return <p className="mt-1 text-sm text-green-500">First name is valid</p>;
        }
    }, [firstName]);

    const lastNameValidator = useMemo(() => {
        console.log('LastNameValidator fired');

        if (!lastName) {
            return <p className="mt-1 text-sm text-sky-500">3-15 [a-z , - , _]</p>;
        }
        else if (lastName.length < 3) {
            return <p className="mt-1 text-sm text-red-500">Last name must be at least 3 characters long</p>;
        }
        else if (lastName.length > 12) {
            return <p className="mt-1 text-sm text-red-500">Last name must be at most 12 characters long</p>;
        } else if (!lastName.match(/^[a-z _-]{3,12}$/i)) {
            return <p className="mt-1 text-sm text-red-500">Last name should contain only letter, space, undersocre, or dash</p>;
        } else {
            return <p className="mt-1 text-sm text-green-500">Last name is valid</p>;
        }
    }, [lastName])



    const createAccount = async () => {
        setIsSubmitting(true);
        const data = {
            firstName,
            lastName,
            email,
            phone,
            password,
            passwordConfirmation
        }

        await fetch(apis.register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.id)
                    navigate('/login')
            })

    }



    return (
        <div className="min-h-screen bg-offwhite flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex items-center mb-6">
                    <Link to="/" className="text-pink-600 hover:text-pink-800 mr-4">
                        <FaArrowLeft className="text-xl" />
                    </Link>
                    <h1 className="text-2xl font-bold text-pink-600 flex items-center">
                        <FaUserPlus className="mr-2" /> Create Account
                    </h1>
                </div>

                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">First Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-pink-400" />
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    className={`w-full pl-10 pr-4 py-2 border ${false ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                    placeholder="Jane"
                                />
                            </div>
                            {firstNameValidator}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">Last Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-pink-400" />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    className={`w-full pl-10 pr-4 py-2 border ${false ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                    placeholder="Doe"
                                />
                            </div>
                            {lastNameValidator}
                        </div>

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-pink-700 mb-1">Email</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                className={`w-full pl-10 pr-4 py-2 border ${false ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                placeholder="jane@example.com"
                            />
                        </div>
                        {/* {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>} */}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-pink-700 mb-1">Phone Number</label>
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                className={`w-full pl-10 pr-4 py-2 border ${false ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                placeholder="1234567890"
                            />
                        </div>
                        {/* {phoneError && <p className="mt-1 text-sm text-red-500">{phoneError}</p>} */}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-pink-700 mb-1">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className={`w-full pl-10 pr-4 py-2 border ${false ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                placeholder="••••••••"
                            />
                            {
                                showPassword ?
                                    <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-3 top-3 text-pink-400" />
                                    :
                                    <FaEye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer absolute right-3 top-3 text-pink-400" />
                            }
                        </div>
                        {/* {passwordError && <p className="mt-1 text-sm text-red-500">{passwordError}</p>} */}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-pink-700 mb-1">Confirm Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type={showPassword ? 'text' : "password"}
                                name="confirmPassword"
                                value={passwordConfirmation}
                                onChange={handlePasswordConfirmationChange}
                                className={`w-full pl-10 pr-4 py-2 border ${false ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                placeholder="••••••••"
                            />
                        </div>
                        <PasswordValidator password={password} passwordConfirmation={passwordConfirmation} />
                    </div>

                    <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={createAccount}
                        className={`w-full mt-6 bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </button>
                </div>

                <div className="mt-4 text-center text-sm text-pink-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium hover:underline">
                        Log in here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;