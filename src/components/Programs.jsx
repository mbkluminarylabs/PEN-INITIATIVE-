import React from 'react';
import { BookOpen, Heart, Users, Lightbulb, ArrowRight } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Education Excellence',
      description: 'Comprehensive educational programs including literacy, numeracy, and vocational training.',
      features: ['Primary Education', 'Adult Literacy', 'Vocational Training', 'Scholarship Programs'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: Heart,
      title: 'Humanitarian Relief',
      description: 'Emergency assistance and ongoing support for communities in crisis.',
      features: ['Emergency Relief', 'Food Security', 'Medical Aid', 'Shelter Support'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Building stronger communities through collaborative programs and leadership development.',
      features: ['Leadership Training', 'Community Centers', 'Youth Programs', 'Women Empowerment'],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Technology',
      description: 'Leveraging technology to enhance education and improve access to resources.',
      features: ['Digital Learning', 'STEM Programs', 'Tech Training', 'Innovation Labs'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive initiatives designed to address immediate needs while building 
            long-term capacity for sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`${program.bgColor} p-6`}>
                <div className={`bg-gradient-to-r ${program.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </div>
              
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full ${program.color.replace('from-', 'bg-').replace(' to-blue-600', '').replace(' to-red-600', '').replace(' to-teal-600', '').replace(' to-orange-600', '')} mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`${program.textColor} font-medium flex items-center group hover:underline`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join us in our mission to transform lives through education and humanitarian relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                Volunteer Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
                Support Our Cause
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}