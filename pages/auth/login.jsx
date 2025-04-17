'use client';

import { useState } from 'react';
import { useAuth } from './AuthContext';
import AuthForm from './AuthForm';

const LoginPage = () => {
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: { email; password }) => {
    try {
      setLoading(true);
      setError('');
      await login(data.email, data.password);
      // Redirect would happen here in a real app
      window.location.href = '/';
    } catch (err) {
      setError('Invalid email or password. Please try again.');
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
          type="login" 
          onSubmit={handleSubmit} 
        />
        
        <div className="mt-6 text-center">
          <p className="text-[#457B9D] text-sm">
            For demo purposes, use:
            <br />
            Email: demo@example.com
            <br />
            Password: password
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
