import React from 'react';
import gift from '../assets/images/gift.jpeg'
import { ArrowRight, Users, BookOpen, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-[#ebad4b] text-[#d53571] px-4 py-2 rounded-full text-sm font-medium">
              <Heart className="h-4 w-4 mr-2" />
              Transforming Lives Through Education & Relief
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              PEN INITIATIVE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ebad4b] to-[#d53571]">
                For Learning & Relief Global
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              We champion equal opportunities for all children, advocating for inclusive access 
              to education and support services regardless of gender, 
              location, ability, or socioeconomic status.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#d53571] to-[#ebad4b] text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center group">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-600">Lives Impacted</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-teal-100 p-2 rounded-full">
                  <BookOpen className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Programs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src={gift}
                alt="Children learning in classroom"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">Education</p>
                <p className="text-sm opacity-90">Changes Everything</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 rounded-2xl shadow-xl">
              <p className="text-2xl font-bold">Hope</p>
              <p className="text-sm opacity-90">For Everyone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}