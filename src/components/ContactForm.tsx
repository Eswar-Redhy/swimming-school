import React, { useState } from 'react';
import { AlertCircle, Scroll, Package, Book, ClipboardList, Calendar, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  dob: string;
  medicalHistory: string;
  blockFlat: string;
  guardianContact: string;
  batch: string;
  coachingPackage: string;
  classTiming: string;
  paymentReceipt: File | null;
  agreement: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    dob: '',
    medicalHistory: '',
    blockFlat: '',
    guardianContact: '',
    batch: 'march',
    coachingPackage: '',
    classTiming: '',
    paymentReceipt: null,
    agreement: false
  });

  const [error, setError] = useState<string>('');
  const [dobError, setDobError] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('guidelines');

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const validateDob = (dob: string) => {
    if (!dob) {
      setDobError('Date of birth is required');
      return false;
    }

    const age = calculateAge(dob);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 6);
    const birthDate = new Date(dob);

    if (birthDate > maxDate) {
      setDobError('Student must be at least 6 years old to enroll');
      return false;
    }

    if (age > 100) {
      setDobError('Please enter a valid date of birth');
      return false;
    }

    setDobError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked, files } = target;
    
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files?.[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    if (name === 'dob') {
      validateDob(value);
    }
    
    setError(''); // Clear general error when user makes changes
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate date of birth
    if (!validateDob(formData.dob)) {
      return;
    }

    if (!/^\d{10}$/.test(formData.guardianContact)) {
      setError('Please enter a valid 10-digit contact number.');
      return;
    }

    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  // Set max date to 6 years ago from today
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 6);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const timings = [
    "06:00 AM - 07:00 AM",
    "07:00 AM - 08:00 AM",
    "08:00 AM - 09:00 AM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM"
  ];

  const GuidelinesSection = () => (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Student Requirements */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <Scroll className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Student Requirements</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Swimming Pool Membership is mandatory</li>
            <li>Swim gear (swim dress, goggles, shower cap) is required</li>
          </ul>
        </div>

        {/* Coaching Packages */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <Package className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Coaching Packages</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Weekend Coaching Packages</li>
            <li>Weekday Coaching Packages</li>
          </ul>
        </div>

        {/* Scope of Classes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <Book className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Scope of Classes</h3>
          </div>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Teach basic swimming techniques (breathing, floating) for comfort in water</li>
            <li>Progressively develop efficient swimming skills for enjoyment</li>
            <li>Develop swimming as a life skill for health and fitness</li>
            <li>Reduce swimming fear and build confidence</li>
            <li>Improve basic strokes for ease and relaxation</li>
            <li>Refine swimming techniques through stroke correction</li>
          </ul>
        </div>

        {/* Class Guidelines */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <ClipboardList className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Class Guidelines</h3>
          </div>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Classes must be completed as per the scheduled span</li>
            <li>No swapping between weekend and weekday schedules</li>
            <li>Classes depend on the availability of the coach</li>
            <li>Late arrivals result in reduced class duration</li>
            <li>Missed classes will be counted</li>
            <li>Arrive 5 minutes early, ready in swim gear</li>
            <li>Fees are non-refundable and non-transferable</li>
          </ul>
          <p className="text-gray-700 mt-2">
            <strong>Note:</strong> No classes will be held on national holidays
          </p>
        </div>

        {/* Freezing Policy */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <Calendar className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Freezing Policy</h3>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Freezing exceptions require 6-day prior notice</li>
            <li>No freezing allowed after classes commence</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600">
            <PhoneCall className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Contact Information</h3>
          </div>
          <div className="text-gray-700">
            <p className="font-medium">Mr. Bhanu Chander – AQUATIC SPIRIT</p>
            <p className="flex items-center gap-2 mt-1">
              <span>📞</span>
              <a href="tel:+918143808214" className="text-blue-600 hover:underline">+91 8143888214</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-blue-800 text-sm">
          <strong>Note:</strong> Please read all guidelines carefully before submitting the enquiry form. By submitting the form, you agree to all the terms and conditions mentioned above.
        </p>
      </div>
    </div>
  );

  return (
    <section id="contact" className="min-h-screen py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900">Swimming Coaching Program</h2>
          <p className="mt-2 text-gray-600">Professional swimming training for all age groups</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            <motion.a whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }}> 
            <button
              onClick={() => setActiveSection('guidelines')}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeSection === 'guidelines'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Guidelines
            </button>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }}> 
            <button
              onClick={() => setActiveSection('form')}
              className={`px-6 py-2 rounded-lg font-medium transition-all bordercol ${
                activeSection === 'form'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-600 hover:bg-gray-200' 
              }`}
            >
              Enquiry Form
            </button>
            </motion.a>
          </div>
        </div>

        {activeSection === 'guidelines' ? (
          <GuidelinesSection />
        ) : (
          <div className="animate-fade-in">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-xl shadow-lg space-y-6 animate-slide-up"
            >
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                    <span className="text-gray-500 text-xs ml-1">(Must be 6+ years old)</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    max={maxDateString}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      dobError ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  />
                  {dobError && (
                    <p className="mt-1 text-sm text-red-600">{dobError}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History
                  <span className="text-gray-500 text-xs ml-1">(Optional)</span>
                </label>
                <textarea
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Please mention any medical conditions or allergies"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Block/Flat Number
                  </label>
                  <input
                    type="text"
                    name="blockFlat"
                    value={formData.blockFlat}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Contact
                  </label>
                  <input
                    type="tel"
                    name="guardianContact"
                    value={formData.guardianContact}
                    onChange={handleChange}
                    pattern="\d{10}"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Coaching Package
                </label>
                <select
                  name="coachingPackage"
                  value={formData.coachingPackage}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Select a package</option>
                  <option value="weekend">Wednesday, Friday & Sunday (₹2000)</option>
                  <option value="weekday">Thursday, Saturday & Monday (₹2000)</option>
                  <option value="sixdays">6 Days a Week (₹3500)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Class Timing
                </label>
                <select
                  name="classTiming"
                  value={formData.classTiming}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Select a time slot</option>
                  {timings.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Payment Receipt
                  <span className="text-gray-500 text-xs ml-1">(if paid online)</span>
                </label>
                <input
                  type="file"
                  name="paymentReceipt"
                  onChange={handleChange}
                  accept="image/*,.pdf"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                {formData.paymentReceipt && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected file: {formData.paymentReceipt.name}
                  </p>
                )}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I agree to the <strong>No Refund Policy</strong> - I understand that fees are non-refundable and non-transferable under any circumstances.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;