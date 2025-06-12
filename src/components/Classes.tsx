import React, { useState } from 'react';
import { Clock, Users, Calendar } from 'lucide-react';

const Classes = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Strength', 'Cardio', 'Yoga', 'HIIT', 'Dance'];

  const classes = [
    {
      id: 1,
      name: 'Power Yoga',
      category: 'Yoga',
      instructor: 'Sarah Johnson',
      duration: '60 min',
      capacity: 20,
      schedule: 'Mon, Wed, Fri - 7:00 AM',
      image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      level: 'Intermediate'
    },
    {
      id: 2,
      name: 'CrossFit Bootcamp',
      category: 'HIIT',
      instructor: 'Mike Chen',
      duration: '45 min',
      capacity: 15,
      schedule: 'Tue, Thu, Sat - 6:00 PM',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      level: 'Advanced'
    },
    {
      id: 3,
      name: 'Strength Training',
      category: 'Strength',
      instructor: 'David Rodriguez',
      duration: '50 min',
      capacity: 12,
      schedule: 'Mon, Wed, Fri - 5:30 PM',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      level: 'All Levels'
    },
    {
      id: 4,
      name: 'Zumba Dance',
      category: 'Dance',
      instructor: 'Maria Santos',
      duration: '55 min',
      capacity: 25,
      schedule: 'Tue, Thu - 7:00 PM',
      image: 'https://images.pexels.com/photos/3822166/pexels-photo-3822166.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      level: 'Beginner'
    },
    {
      id: 5,
      name: 'Cardio Kickboxing',
      category: 'Cardio',
      instructor: 'Alex Thompson',
      duration: '45 min',
      capacity: 18,
      schedule: 'Mon, Wed - 8:00 AM',
      image: 'https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      level: 'Intermediate'
    },
    {
      id: 6,
      name: 'Pilates Core',
      category: 'Yoga',
      instructor: 'Emma Wilson',
      duration: '50 min',
      capacity: 16,
      schedule: 'Tue, Thu, Sat - 9:00 AM',
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      level: 'All Levels'
    }
  ];

  const filteredClasses = selectedCategory === 'All' 
    ? classes 
    : classes.filter(cls => cls.category === selectedCategory);

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Classes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From high-intensity workouts to mindful yoga sessions, find the perfect class to match your fitness goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {cls.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cls.name}</h3>
                <p className="text-gray-600 mb-4">with {cls.instructor}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{cls.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Max {cls.capacity} people</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cls.schedule}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Book This Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;