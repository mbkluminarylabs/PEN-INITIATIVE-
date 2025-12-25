import React from 'react';
import image1 from '../assets/images/image1.jpeg'
import image2 from '../assets/images/image2.jpeg'
import image3 from '../assets/images/image3.jpeg'
import image4 from '../assets/images/image4.jpeg'
import image5 from '../assets/images/image5.jpeg'
import image6 from '../assets/images/image6.jpeg'
import image8 from '../assets/images/image8.jpeg'
import brother from '../assets/images/brother.jpeg'
import image9 from "../assets/images/image9.jpeg"
import image10 from "../assets/images/image10.jpeg"
import image11 from "../assets/images/image11.jpeg"
import image12 from "../assets/images/image12.jpeg"
import image13 from "../assets/images/image13.jpeg"
import image14 from "../assets/images/image14.jpeg"
import image15 from "../assets/images/image15.jpeg"
import image16 from "../assets/images/image16.jpeg"
import image17 from "../assets/images/image17.jpeg"
import image18 from "../assets/images/image18.jpeg"
import image19 from "../assets/images/image19.jpeg"
import image20 from "../assets/images/image20.jpeg"
import image21 from "../assets/images/image21.jpeg"
import image22 from "../assets/images/image22.jpeg"
import ImageSlider from './ImageSlider';
import { Camera, Users, BookOpen, Heart } from 'lucide-react';

export default function Gallery() {
  // Sample images - replace these URLs with your actual images
  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    brother,
   
  ];

  const highlights = [
    {
      icon: Users,
      title: 'Community Events',
      description: 'Bringing people together for positive change',
    },
    {
      icon: BookOpen,
      title: 'Educational Programs',
      description: 'Empowering minds through learning',
    },
    {
      icon: Heart,
      title: 'Relief Efforts',
      description: 'Providing hope in times of need',
    },
  ];

  return (
    <section id="gallery" className="py-2 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="h-4 w-4 mr-2" />
            Our Journey in Pictures
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the impact of our work through these moments captured across our programs and communities.
          </p>
        </div>

        {/* Main Image Slider */}
        <div className="mb-16">
          <ImageSlider 
            images={galleryImages}
            autoPlay={true}
            interval={5000}
            showDots={true}
            showArrows={true}
          />
        </div>

        {/* Gallery Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Be Part of Our Story</h3>
            <p className="text-lg mb-6 opacity-90">
              Every picture tells a story of hope, transformation, and community impact.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}