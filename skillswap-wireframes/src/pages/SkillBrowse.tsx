import React, { useState } from 'react';
import { Search, Filter, Star, Clock, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Teacher {
  id: number;
  name: string;
  skill: string;
  rating: number;
  reviews: number;
  availability: string;
  timezone: string;
  bio: string;
  price: string;
  tags: string[];
}

const SkillBrowse: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    "All", "Tech", "Creative", "Business", "Languages", "Fitness", "Music", "Cooking"
  ];

  const mockTeachers: Teacher[] = [
    {
      id: 1,
      name: "Sarah Chen",
      skill: "Web Development",
      rating: 4.9,
      reviews: 23,
      availability: "Available this week",
      timezone: "PST",
      bio: "Full-stack developer with 5 years experience. Love teaching React and Node.js!",
      price: "1 hour teaching = 1 hour learning",
      tags: ["React", "JavaScript", "Node.js"]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      skill: "Guitar Lessons",
      rating: 4.8,
      reviews: 45,
      availability: "Weekends only",
      timezone: "EST",
      bio: "Professional guitarist and music teacher. Specializing in acoustic and classical guitar.",
      price: "1 hour teaching = 1 hour learning",
      tags: ["Acoustic", "Classical", "Beginner Friendly"]
    },
    {
      id: 3,
      name: "Emma Thompson",
      skill: "Public Speaking",
      rating: 5.0,
      reviews: 18,
      availability: "Flexible schedule",
      timezone: "GMT",
      bio: "Former TED speaker and communication coach. Help you overcome stage fright!",
      price: "1 hour teaching = 1 hour learning",
      tags: ["Presentations", "Confidence", "Business"]
    },
    {
      id: 4,
      name: "David Kim",
      skill: "Photography",
      rating: 4.7,
      reviews: 31,
      availability: "Available today",
      timezone: "PST",
      bio: "Wedding and portrait photographer. Teaching composition and editing techniques.",
      price: "1 hour teaching = 1 hour learning",
      tags: ["Portrait", "Lightroom", "Composition"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Teacher</h1>
          <p className="text-gray-600 mt-2">
            Browse skills and connect with peer teachers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text"
              placeholder="Search for skills, teachers, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-400 hover:text-gray-600">
              <Filter size={20} />
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockTeachers.map(teacher => (
            <div key={teacher.id} className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={24} className="text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{teacher.name}</h3>
                  <div className="text-lg font-medium text-blue-600 mt-1">
                    {teacher.skill}
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {teacher.rating} ({teacher.reviews} reviews)
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {teacher.timezone}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{teacher.bio}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {teacher.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-green-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {teacher.availability}
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {teacher.price}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50">
                  View Profile
                </button>
                <Link 
                  to="/booking" 
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-center"
                >
                  Book Session
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center pt-6">
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
            Load More Teachers
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillBrowse;