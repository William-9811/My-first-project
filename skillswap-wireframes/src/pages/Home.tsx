import React from 'react';
import { Users, BookOpen, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              Learn & Teach Skills with
              <span className="block text-blue-600">SkillSwap</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exchange knowledge through 1-on-1 peer learning sessions. 
              Trade your time and skills instead of money.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/profile-setup" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              to="/browse" 
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 flex items-center justify-center"
            >
              Browse Skills
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-500">Active Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-500">Skill Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4.9</div>
              <div className="text-sm text-gray-500">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How SkillSwap Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple peer-to-peer learning that benefits everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Find Your Match</h3>
              <p className="text-gray-600">
                Browse skills and connect with peer teachers who match your learning interests.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Exchange Sessions</h3>
              <p className="text-gray-600">
                Trade 1 hour of teaching for 1 hour of learning. No money involved, just knowledge.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-4">Build Reputation</h3>
              <p className="text-gray-600">
                Rate and review sessions to build trust and improve the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Skills */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Skills</h2>
            <p className="text-gray-600">
              Explore trending skills being taught in our community
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Web Development", "Graphic Design", "Photography", "Cooking", 
              "Guitar", "Public Speaking", "Writing", "Video Editing", 
              "Languages", "Fitness", "Marketing", "Data Analysis"
            ].map(skill => (
              <span 
                key={skill} 
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to="/browse" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 inline-flex items-center"
            >
              View All Skills
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Demo Navigation */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Explore the Wireframes
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Navigate through the three core screens to see the complete user flow
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              to="/profile-setup" 
              className="bg-white text-blue-600 p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">1. Profile Setup</h3>
              <p className="text-gray-600">Set up your skills and learning interests</p>
            </Link>
            
            <Link 
              to="/browse" 
              className="bg-white text-blue-600 p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">2. Browse Skills</h3>
              <p className="text-gray-600">Find teachers and explore available skills</p>
            </Link>
            
            <Link 
              to="/booking" 
              className="bg-white text-blue-600 p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">3. Book Session</h3>
              <p className="text-gray-600">Schedule and customize your learning session</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;