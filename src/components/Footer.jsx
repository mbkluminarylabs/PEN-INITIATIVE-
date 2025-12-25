import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/images/logo.jpeg'
export default function Footer() {
  const footerLinks = {
    'About': [
      { label: 'Our Story', href: '#' },
      { label: 'Mission & Vision', href: '#' },
      { label: 'Team', href: '#' },
      { label: 'Annual Reports', href: '#' },
    ],
    'Programs': [
      { label: 'Education', href: '#' },
      { label: 'Relief', href: '#' },
      { label: 'Community Development', href: '#' },
      { label: 'Innovation', href: '#' },
    ],
    'Get Involved': [
      { label: 'Volunteer', href: '#' },
      { label: 'Donate', href: '#' },
      { label: 'Partner', href: '#' },
      { label: 'Events', href: '#' },
    ],
    // 'Resources': [
    //   { label: 'News', href: '#' },
    //   { label: 'Blog', href: '#' },
    //   { label: 'Resources', href: '#' },
    //   { label: 'Contact', href: '#' },
    // ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-[#d53571] to-[#ebad4b]  p-2 rounded-full">
                {/* <Heart className="h-6 w-6 text-white" /> */}
                 <img src={logo} alt="logo" width={50} className='rounded-full' />
              </div>
              <div>
                <h3 className="text-xl font-bold">PEN INITIATIVE</h3>
                <p className="text-sm text-gray-400">Learning & Relief</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">penfoundationforlearning@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+4407881155965, +2348160016901</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Behind Teejay feed mill, along ojere Road, Ogidi ilorin kwara state Nigeria</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 ">
            
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Pen Foundation. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
                
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}