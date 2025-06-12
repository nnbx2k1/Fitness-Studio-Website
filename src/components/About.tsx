import React from 'react';
import { Target, Heart, Trophy, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Members' },
    { icon: Trophy, number: '50+', label: 'Awards Won' },
    { icon: Heart, number: '10k+', label: 'Lives Changed' },
    { icon: Target, number: '6', label: 'Years Experience' }
  ];

  const features = [
    {
      icon: Target,
      title: 'Personalized Training',
      description: 'Customized workout plans tailored to your fitness level and goals for maximum results.'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'We focus on complete wellness - physical fitness, mental health, and nutritional guidance.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Our methods are backed by science and proven by thousands of successful transformations.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a supportive community that motivates and encourages you every step of the way.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">FitStudio</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2018, FitStudio has been at the forefront of fitness innovation, 
              combining traditional training methods with cutting-edge technology and 
              personalized coaching to help our members achieve their best selves.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art facility features the latest equipment, spacious workout areas, 
              and dedicated spaces for every type of fitness activity. From high-intensity 
              training to peaceful yoga sessions, we provide an environment where everyone 
              can thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Join Our Community
              </button>
              <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Take a Tour
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Modern fitness studio"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">6+</div>
                <div className="text-gray-600 font-medium">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-500">FitStudio</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just a gym - we're your partners in creating a healthier, stronger, and happier you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;