import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Github } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useAuth } from '../../hooks/useAuth';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  gender: string;
  sports: string[];
  skillLevel: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    sports: [],
    skillLevel: 'Beginner'
  });

  const [errors, setErrors] = useState<Partial<Omit<RegisterFormData, 'sports'> & { sports: string | string[] }>>({});
  const { register, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const sportsList = [
    'Basketball', 'Football', 'Tennis', 'Swimming',
    'Volleyball', 'Baseball', 'Golf', 'Running'
  ];

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];

  const handleSportChange = (sport: string) => {
    const updatedSports = formData.sports.includes(sport)
      ? formData.sports.filter(s => s !== sport)
      : [...formData.sports, sport];
    setFormData({ ...formData, sports: updatedSports });
  };

  const validateForm = () => {
    const newErrors: Partial<RegisterFormData> = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!formData.age || isNaN(Number(formData.age))) {
      newErrors.age = 'Valid age is required';
      isValid = false;
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
      isValid = false;
    }
    
    if (formData.sports.length === 0) {
      newErrors.sports = 'Select at least one sport';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await register(formData.name, formData.email, formData.password, {
          age: parseInt(formData.age),
          gender: formData.gender,
          sports: formData.sports,
          skillLevel: formData.skillLevel
        });
        navigate('/dashboard');
      } catch (err) {
        console.error('Registration failed:', err);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Create your account
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          fullWidth
          placeholder="John Doe"
        />
        
        <Input
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          fullWidth
          placeholder="your@email.com"
        />
        
        <Input
          type="password"
          label="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          fullWidth
          placeholder="••••••••"
        />
        
        <Input
          type="password"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          error={errors.confirmPassword}
          fullWidth
          placeholder="••••••••"
        />

        <Input
          type="number"
          label="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          error={errors.age}
          fullWidth
          placeholder="25"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.gender}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Sports Interest
          </label>
          <div className="grid grid-cols-2 gap-2">
            {sportsList.map((sport) => (
              <label key={sport} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.sports.includes(sport)}
                  onChange={() => handleSportChange(sport)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{sport}</span>
              </label>
            ))}
          </div>
          {errors.sports && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.sports}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Skill Level
          </label>
          <select
            value={formData.skillLevel}
            onChange={(e) => setFormData({ ...formData, skillLevel: e.target.value })}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {skillLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            I agree to the{' '}
            <Link to="/terms" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
              Privacy Policy
            </Link>
          </label>
        </div>
        
        <Button
          type="submit"
          fullWidth
          isLoading={isLoading}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
        >
          Sign up
        </Button>
      </form>
      
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => alert('Facebook signup coming soon!')}
          >
            <Facebook size={18} className="mr-2" />
            Facebook
          </Button>
          
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => alert('GitHub signup coming soon!')}
          >
            <Github size={18} className="mr-2" />
            GitHub
          </Button>
        </div>
      </div>
      
      <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;