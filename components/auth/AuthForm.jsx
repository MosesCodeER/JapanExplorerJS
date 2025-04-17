'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

  type: 'login' | 'register';
  onSubmit: (data) => void;
}

const AuthForm = ({ type, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (type === 'register' && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const data = type === 'login' 
      ? { email, password } 
      : { name, email, password };
    
    onSubmit(data);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
        {type === 'login' ? 'Log In' : 'Create an Account'}
      </h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'register' && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#457B9D] mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-[#A8DADC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
              required
            />
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#457B9D] mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-[#A8DADC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#457B9D] mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-[#A8DADC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#457B9D]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        {type === 'register' && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#457B9D] mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-[#A8DADC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                required
              />
            </div>
          </div>
        )}
        
        {type === 'login' && (
          <div className="text-right">
            <a href="#" className="text-sm text-[#E63946] hover:underline">
              Forgot password?
            </a>
          </div>
        )}
        
        <button
          type="submit"
          className="w-full bg-[#E63946] text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors font-medium"
        >
          {type === 'login' ? 'Log In' : 'Sign Up'}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-[#457B9D]">
          {type === 'login' 
            ? "Don't have an account? " 
            : "Already have an account? "}
          <a href={type === 'login' ? '/auth/register' : '/auth/login'} className="text-[#E63946] hover:underline">
            {type === 'login' ? 'Sign up' : 'Log in'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
