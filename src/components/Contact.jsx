import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formspree.io/f/xzdbnnbe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Message sent successfully ✅');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message ❌');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error sending message ❌');
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', details: 'hardeyemo3@gmail.com', subdetails: 'We reply within 24 hours' },
    { icon: Phone, title: 'Phone', details: '+4407881155965, +2348160016901', subdetails: 'Mon-Fri 9AM-6PM EST' },
    { icon: MapPin, title: 'Address', details: 'Behind Teejay feed mill, along ojere Road,', subdetails: 'Ogidi Ilorin, Kwara State, Nigeria' },
    { icon: Clock, title: 'Office Hours', details: 'Monday - Friday', subdetails: '9:00 AM - 6:00 PM EST' },
  ];

  return (
    <>

      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to join our mission or have questions about our programs? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-700">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.subdetails}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border rounded-lg w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border rounded-lg w-full"
                  />
                </div>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Select a subject</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Donation">Donation</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
