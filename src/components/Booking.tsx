import React, { useState } from 'react';
import { Calendar, Clock, User, CreditCard } from 'lucide-react';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedTrainer, setSelectedTrainer] = useState('');

  const classes = [
    'Power Yoga',
    'CrossFit Bootcamp',
    'Strength Training',
    'Zumba Dance',
    'Cardio Kickboxing',
    'Pilates Core'
  ];

  const trainers = [
    'Sarah Johnson',
    'Mike Chen',
    'David Rodriguez',
    'Maria Santos',
    'Alex Thompson',
    'Emma Wilson'
  ];

  const timeSlots = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert('Booking submitted! We will confirm your session shortly.');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-orange-500">Session</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your fitness journey? Book a class or personal training session with our expert trainers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Booking Form */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Schedule Your Workout</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Class Type
                    </label>
                    <select
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      required
                    >
                      <option value="">Choose a class...</option>
                      {classes.map((cls, index) => (
                        <option key={index} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Preferred Trainer
                    </label>
                    <select
                      value={selectedTrainer}
                      onChange={(e) => setSelectedTrainer(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Any available trainer</option>
                      {trainers.map((trainer, index) => (
                        <option key={index} value={trainer}>{trainer}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Time
                      </label>
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        required
                      >
                        <option value="">Select time...</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Book Session - $25
                  </button>
                </form>
              </div>

              {/* Booking Info */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-8">Why Choose FitStudio?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Expert Trainers</h4>
                      <p className="text-blue-100">Work with certified professionals who are passionate about your success.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
                      <p className="text-blue-100">Book sessions that fit your busy lifestyle with easy rescheduling options.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Small Class Sizes</h4>
                      <p className="text-blue-100">Get personalized attention with limited class sizes for better results.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Easy Payment</h4>
                      <p className="text-blue-100">Simple pricing with no hidden fees. Cancel or reschedule anytime.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Pricing</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Single Class</span>
                      <span className="font-semibold">$25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5-Class Package</span>
                      <span className="font-semibold">$100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Unlimited</span>
                      <span className="font-semibold">$150</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;