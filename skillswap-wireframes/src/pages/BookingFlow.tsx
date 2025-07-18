import React, { useState } from 'react';
import { Star, Clock, MessageCircle, Video, MapPin, ArrowLeft, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingFlow: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [sessionType, setSessionType] = useState<'video' | 'chat'>('video');
  const [message, setMessage] = useState('');

  // Mock teacher data
  const teacher = {
    name: "Sarah Chen",
    skill: "Web Development",
    rating: 4.9,
    reviews: 23,
    timezone: "PST",
    bio: "Full-stack developer with 5 years experience. Love teaching React and Node.js!",
    tags: ["React", "JavaScript", "Node.js"],
    hourlyRate: "1 hour teaching = 1 hour learning",
    responseTime: "Usually responds within 2 hours"
  };

  const availableSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const sessionTypes = [
    { id: "video", label: "Video Call", icon: Video, description: "Live video session" },
    { id: "chat", label: "Text Chat", icon: MessageCircle, description: "Text-based session" }
  ];

  // Simple calendar component for wireframe
  const SimpleCalendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    const days = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const isToday = day === today.getDate();
      const isPast = day < today.getDate();
      const isSelected = selectedDate === dateStr;
      
      days.push(
        <button
          key={day}
          onClick={() => !isPast && setSelectedDate(dateStr)}
          disabled={isPast}
          className={`p-2 text-sm rounded ${
            isPast 
              ? 'text-gray-300 cursor-not-allowed' 
              : isSelected
                ? 'bg-blue-600 text-white'
                : isToday
                  ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  : 'hover:bg-gray-100'
          }`}
        >
          {day}
        </button>
      );
    }
    
    return (
      <div className="border rounded-lg p-4">
        <div className="text-center font-semibold mb-4">
          {new Date(currentYear, currentMonth).toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
          })}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
          <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with Back Button */}
        <div className="flex items-center space-x-4">
          <Link to="/browse" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Browse
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Book a Session</h1>
            <p className="text-gray-600">Schedule your learning session</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Teacher Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm border sticky top-4">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User size={24} className="text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{teacher.name}</h3>
                  <div className="text-lg font-medium text-blue-600 mt-1">
                    {teacher.skill}
                  </div>
                  <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {teacher.rating} ({teacher.reviews})
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {teacher.timezone}
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{teacher.bio}</p>
              
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

              <hr className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {teacher.responseTime}
                </div>
                <div className="font-medium">
                  Rate: {teacher.hourlyRate}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Session Type */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Session Type</h2>
              <div className="grid grid-cols-2 gap-4">
                {sessionTypes.map(type => (
                  <div 
                    key={type.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      sessionType === type.id 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                    onClick={() => setSessionType(type.id as 'video' | 'chat')}
                  >
                    <div className="flex items-center space-x-3">
                      <type.icon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">{type.label}</div>
                        <div className="text-sm text-gray-500">{type.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Calendar className="mr-2" size={20} />
                Select Date
              </h2>
              <SimpleCalendar />
            </div>

            {/* Time Selection */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Available Times</h2>
              <p className="text-gray-600 text-sm mb-4">
                All times shown in {teacher.timezone}
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {availableSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Message to Teacher</h2>
              <p className="text-gray-600 text-sm mb-4">
                Let them know what you'd like to learn or any specific topics
              </p>
              <textarea
                placeholder="Hi Sarah! I'm interested in learning React basics and would love to understand components and state management..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Booking Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Teacher:</span>
                  <span className="font-medium">{teacher.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Skill:</span>
                  <span className="font-medium">{teacher.skill}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {selectedDate ? new Date(selectedDate).toLocaleDateString() : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{selectedTime || "Not selected"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Session Type:</span>
                  <span className="font-medium capitalize">{sessionType} call</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-lg font-semibold">
                <span>Exchange Rate:</span>
                <span className="text-blue-600">{teacher.hourlyRate}</span>
              </div>

              <div className="flex gap-4 pt-6">
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50">
                  Save as Draft
                </button>
                <button 
                  className={`flex-1 py-3 rounded-lg ${
                    selectedDate && selectedTime
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!selectedDate || !selectedTime}
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;