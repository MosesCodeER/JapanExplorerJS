'use client';

import { useState } from 'react';
import { useAuth } from '../../components/auth/AuthContext';
import AuthForm from '../../components/auth/AuthForm';

const RegisterPage = () => {
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

const handleSubmit = async (data) => {
  const { email, password } = data;
    try {
      setLoading(true);
      setError('');
      await register(data.name, data.email, data.password);
      // Redirect would happen here in a real app
      window.location.href = '/';
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F1FAEE] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {error && (
          <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <AuthForm 
          type="register" 
          onSubmit={handleSubmit} 
        />
      </div>
    </div>
  );
};

export default RegisterPage;
