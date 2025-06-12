import React from 'react';
import { Star, Award, Users, Calendar } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      specialty: 'Yoga & Mindfulness',
      experience: '8 years',
      certifications: ['RYT-500', 'Meditation Teacher'],
      rating: 4.9,
      sessions: 1200,
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Sarah brings a holistic approach to fitness, combining traditional yoga with modern mindfulness techniques.'
    },
    {
      id: 2,
      name: 'Mike Chen',
      specialty: 'CrossFit & HIIT',
      experience: '6 years',
      certifications: ['CrossFit Level 2', 'HIIT Specialist'],
      rating: 4.8,
      sessions: 950,
      image: 'https://images.pexels.com/photos/1544924/pexels-photo-1544924.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Mike specializes in high-intensity training that pushes you to your limits while ensuring proper form and safety.'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      specialty: 'Strength Training',
      experience: '10 years',
      certifications: ['NASM-CPT', 'Powerlifting Coach'],
      rating: 4.9,
      sessions: 1500,
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'With a decade of experience, David helps clients build strength and confidence through progressive training.'
    },
    {
      id: 4,
      name: 'Maria Santos',
      specialty: 'Dance & Cardio',
      experience: '7 years',
      certifications: ['Zumba Instructor', 'Dance Fitness'],
      rating: 4.7,
      sessions: 800,
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Maria makes fitness fun through dance, creating an energetic environment where everyone feels welcome.'
    },
    {
      id: 5,
      name: 'Alex Thompson',
      specialty: 'Martial Arts & Cardio',
      experience: '9 years',
      certifications: ['Kickboxing Instructor', 'Self-Defense'],
      rating: 4.8,
      sessions: 1100,
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Alex combines martial arts techniques with cardio workouts for a powerful fitness experience.'
    },
    {
      id: 6,
      name: 'Emma Wilson',
      specialty: 'Pilates & Rehabilitation',
      experience: '5 years',
      certifications: ['Pilates Certified', 'Physical Therapy'],
      rating: 4.9,
      sessions: 700,
      image: 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Emma focuses on core strength and rehabilitation, helping clients recover and prevent injuries.'
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-orange-500">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified trainers are passionate about helping you achieve your fitness goals with personalized guidance and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{trainer.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{trainer.name}</h3>
                <p className="text-orange-500 font-semibold mb-4">{trainer.specialty}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">{trainer.experience} experience</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">{trainer.sessions}+ sessions</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                    <span className="text-sm">Available for booking</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{trainer.bio}</p>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;