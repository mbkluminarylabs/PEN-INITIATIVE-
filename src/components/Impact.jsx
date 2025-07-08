import React from 'react';
import { TrendingUp, Users, BookOpen, Heart, Award, Globe } from 'lucide-react';
import two from '../assets/images/two.jpeg'
import mammy from '../assets/images/mammy.jpeg'
import sukura from '../assets/images/sukura.jpeg'

export default function Impact() {
  const stats = [
    {
      icon: Users,
      number: '12,500+',
      label: 'Lives Transformed',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: BookOpen,
      number: '8,200+',
      label: 'Students Educated',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Heart,
      number: '4,800+',
      label: 'Families Supported',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Award,
      number: '150+',
      label: 'Programs Launched',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Communities Reached',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Success Rate',
      color: 'from-green-500 to-green-600',
    },
  ];

  const testimonials = [
    {
      quote: "PEN INITIATIVE  changed my life. Through their education program, I learned to read and write, and now I run my own small business.",
      author: "Akinyemi sheriff Akinsola",
      role: "Program Graduate",
      image: two,
    },
    {
      quote: "The humanitarian relief provided by PEN INITIATIVE  helped my family during our most difficult time. Their support gave us hope.",
      author: "Ajibade Lukman Adeyinka.",
      role: "Community Member",
      image: mammy,
    },
    {
      quote: "As a volunteer, I've seen firsthand how PEN INITIATIVE  transforms communities. Their approach is both compassionate and effective.",
      author: "Aminu shukura Tope.",
      role: "Volunteer",
      image: sukura,
    },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every number represents a life touched, a family supported, and a community transformed. 
            Together, we're creating lasting change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Stories of Change</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg mb-6 opacity-90">
              Your support can help us reach even more communities and create greater impact.
            </p>
            <button className="bg-gradient-to-r from-[#d53571] to-[#ebad4b] text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}