import React, { useState } from 'react';
import { User, Camera, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfileSetup: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const skillSuggestions = [
    "Web Development", "Graphic Design", "Photography", "Cooking", "Guitar", 
    "Public Speaking", "Writing", "Video Editing", "Languages", "Fitness"
  ];

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const addInterest = (interest: string) => {
    if (!selectedInterests.includes(interest)) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const removeInterest = (interest: string) => {
    setSelectedInterests(selectedInterests.filter(i => i !== interest));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Set Up Your Profile</h1>
          <p className="text-gray-600 mt-2">
            Tell others about your skills and what you'd like to learn
          </p>
        </div>

        {/* Profile Photo */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Camera className="mr-2" size={20} />
            Profile Photo
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={32} className="text-gray-400" />
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Upload Photo
            </button>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24"
                placeholder="Tell others about yourself..."
              />
            </div>
          </div>
        </div>

        {/* Skills to Teach */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">Skills I Can Teach</h2>
          <p className="text-gray-600 text-sm mb-4">
            What skills would you like to share with others?
          </p>
          <div className="space-y-4">
            {/* Selected Skills */}
            <div className="flex flex-wrap gap-2">
              {selectedSkills.map(skill => (
                <span 
                  key={skill} 
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                  <X 
                    size={14} 
                    className="ml-1 cursor-pointer hover:text-blue-600" 
                    onClick={() => removeSkill(skill)}
                  />
                </span>
              ))}
            </div>
            
            {/* Skill Suggestions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Suggested Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {skillSuggestions.filter(skill => !selectedSkills.includes(skill)).map(skill => (
                  <button
                    key={skill}
                    onClick={() => addSkill(skill)}
                    className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-50 flex items-center"
                  >
                    <Plus size={14} className="mr-1" />
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning Interests */}
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h2 className="text-xl font-semibold mb-4">What I Want to Learn</h2>
          <p className="text-gray-600 text-sm mb-4">
            What skills are you interested in learning?
          </p>
          <div className="space-y-4">
            {/* Selected Interests */}
            <div className="flex flex-wrap gap-2">
              {selectedInterests.map(interest => (
                <span 
                  key={interest} 
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {interest}
                  <X 
                    size={14} 
                    className="ml-1 cursor-pointer hover:text-green-600" 
                    onClick={() => removeInterest(interest)}
                  />
                </span>
              ))}
            </div>
            
            {/* Interest Suggestions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Browse Interests
              </label>
              <div className="flex flex-wrap gap-2">
                {skillSuggestions.filter(skill => !selectedInterests.includes(skill)).map(skill => (
                  <button
                    key={skill}
                    onClick={() => addInterest(skill)}
                    className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-50 flex items-center"
                  >
                    <Plus size={14} className="mr-1" />
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6">
          <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50">
            Save as Draft
          </button>
          <Link 
            to="/browse" 
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 text-center"
          >
            Complete Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;