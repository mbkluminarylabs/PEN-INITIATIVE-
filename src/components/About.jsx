import React from 'react';
import people from '../assets/images/people.jpeg'
import { Target, Eye, Award, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide quality education and humanitarian relief to underserved communities, fostering sustainable development and empowerment.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'A world where every individual has access to education and basic necessities, enabling them to reach their full potential.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our programs, ensuring maximum impact and sustainable positive change.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Working across borders to create lasting change in communities worldwide through collaborative partnerships.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vision Statement</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           A world where every child, regardless of circumstance, has equitable access to quality education and the 
           holistic support
            needed to thrive and reach their full potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Mission Statement</h3>
            <p className="text-gray-600 leading-relaxed">
             To empower children to achieve a quality and standard education by providing comprehensive
              academic support, essential learning resources, and nurturing environments, while simultaneously 
              delivering critical relief and
              psychosocial aid to alleviate hardship and foster their well-being. 
            </p>
            <p className="text-gray-600 leading-relaxed">
             <span className='font-extrabold'>Core Values</span> <br />
1. Child-Centricity: We prioritize the best interests and unique needs of every child in all our decisions and actions. Their safety, well-being, and development are at the heart of everything we do. <br /> 
2. Equity and Inclusivity: We are committed to dismantling barriers and ensuring that all children, irrespective of their background, ability, gender, or location, have equal opportunities to learn and succeed. We celebrate diversity and foster an inclusive environment. <br />
3. Quality and Excellence: We are dedicated to delivering high-quality educational programs, resources, and support services. We strive for excellence in our operations, impact, and accountability to all stakeholders. 

            </p>
            <div className="flex items-center justify-center space-x-4 pt-4">
              <div className="bg-blue-100 px-4 py-2 rounded-full">
                <span className="text-blue-800 font-semibold">Founded 2024</span>
              </div>
              <div className="bg-teal-100 px-4 py-2 rounded-full">
                <span className="text-teal-800 font-semibold">Non-Profit</span>
              </div>
              {/* <div className="bg-orange-100 px-4 py-2 rounded-full">
                <span className="text-orange-800 font-semibold">Global Reach</span>
              </div> */}
            </div>
          </div>
          
          <div className="relative">
            <img
              src={people}
              alt="Community gathering"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}