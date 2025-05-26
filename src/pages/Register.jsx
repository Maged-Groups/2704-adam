import { useState } from 'react';
import { Link } from 'react-router';
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaPhone,
    FaUserPlus,
    FaArrowLeft
} from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                console.log('Registration data:', formData);
                setIsSubmitting(false);
                // Redirect or show success message
            }, 1500);
        }
    };

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

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">First Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-pink-400" />
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-2 border ${errors.firstName ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                    placeholder="Jane"
                                />
                            </div>
                            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-pink-700 mb-1">Last Name</label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-3 text-pink-400" />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full pl-10 pr-4 py-2 border ${errors.lastName ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                    placeholder="Doe"
                                />
                            </div>
                            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-pink-700 mb-1">Email</label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-2 border ${errors.email ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                placeholder="jane@example.com"
                            />
                        </div>
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-pink-700 mb-1">Phone Number</label>
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                placeholder="1234567890"
                            />
                        </div>
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-pink-700 mb-1">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-2 border ${errors.password ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                placeholder="••••••••"
                            />
                        </div>
                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-pink-700 mb-1">Confirm Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-pink-400" />
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-pink-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500`}
                                placeholder="••••••••"
                            />
                        </div>
                        {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full mt-6 bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

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