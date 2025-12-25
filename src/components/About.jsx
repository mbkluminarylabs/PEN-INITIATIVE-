// import React from 'react';
// import people from '../assets/images/people.jpeg'
// import { Target, Eye, Award, Globe } from 'lucide-react';

// export default function About() {
//   const values = [
//     {
//       icon: Target,
//       title: 'Mission',
//       description: 'To provide quality education and humanitarian relief to underserved communities, fostering sustainable development and empowerment.',
//     },
//     {
//       icon: Eye,
//       title: 'Vision',
//       description: 'A world where every individual has access to education and basic necessities, enabling them to reach their full potential.',
//     },
//     {
//       icon: Award,
//       title: 'Excellence',
//       description: 'We maintain the highest standards in all our programs, ensuring maximum impact and sustainable positive change.',
//     },
//     {
//       icon: Globe,
//       title: 'Global Impact',
//       description: 'Working across borders to create lasting change in communities worldwide through collaborative partnerships.',
//     },
//   ];

//   return (
//     <section id="about" className="py-1 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Vision Statement</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//            A world where every child, regardless of circumstance, has equitable access to quality education and the 
//            holistic support
//             needed to thrive and reach their full potential.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//           <div className="space-y-6">
//             <h3 className="text-3xl font-bold text-gray-900">Mission Statement</h3>
//             <p className="text-gray-600 leading-relaxed">
//              To empower children to achieve a quality and standard education by providing comprehensive
//               academic support, essential learning resources, and nurturing environments, while simultaneously 
//               delivering critical relief and
//               psychosocial aid to alleviate hardship and foster their well-being. 
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//              <span className='font-extrabold'>Core Values</span> <br />
// 1. Child-Centricity: We prioritize the best interests and unique needs of every child in all our decisions and actions. Their safety, well-being, and development are at the heart of everything we do. <br /> 
// 2. Equity and Inclusivity: We are committed to dismantling barriers and ensuring that all children, irrespective of their background, ability, gender, or location, have equal opportunities to learn and succeed. We celebrate diversity and foster an inclusive environment. <br />
// 3. Quality and Excellence: We are dedicated to delivering high-quality educational programs, resources, and support services. We strive for excellence in our operations, impact, and accountability to all stakeholders. 

//             </p>
//             <div className="flex items-center justify-center space-x-4 pt-4">
//               <div className="bg-blue-100 px-4 py-2 rounded-full">
//                 <span className="text-blue-800 font-semibold">Founded 2024</span>
//               </div>
//               <div className="bg-teal-100 px-4 py-2 rounded-full">
//                 <span className="text-teal-800 font-semibold">Non-Profit</span>
//               </div>
//               {/* <div className="bg-orange-100 px-4 py-2 rounded-full">
//                 <span className="text-orange-800 font-semibold">Global Reach</span>
//               </div> */}
//             </div>
//           </div>
          
//           <div className="relative">
//             <img
//               src={people}
//               alt="Community gathering"
//               className="rounded-2xl shadow-lg w-full h-96 object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {values.map((value, index) => (
//             <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
//               <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
//                 <value.icon className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, Users, Target, Award, Sparkles } from "lucide-react";

export default function About() {
  const [activeValue, setActiveValue] = useState(0);
  
  // Explicitly reference motion to satisfy linter
  const MotionDiv = motion.div;

  const fadeUp = { 
    hidden: { opacity: 0, y: 60 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const team = [
    { name: "Jimoh Kabir", role: "Executive Director", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400", bio: "15+ years in education advocacy" },
    { name: "Dr. Lukman Mammy", role: "Director of Education Programs", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400", bio: "PhD in Child Development" },
    { name: "Temitope Sukurat", role: "Community Outreach Manager", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400", bio: "Connecting communities since 2015" },
    { name: "Pep Wise", role: "Program Coordinator", image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400", bio: "Specialist in youth programs" }
  ];

  const values = [
    { 
      title: "Child-Centricity", 
      text: "We prioritize the best interests, safety, and development of every child.",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    { 
      title: "Equity & Inclusivity", 
      text: "We dismantle barriers and ensure equal opportunities for all children.",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Quality & Excellence", 
      text: "We deliver high-quality programs with accountability and impact.",
      icon: Award,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [values.length]);

  return (
    <div id="about" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">

      {/* WHO WE ARE */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Who We Are
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            We are a non-profit organization founded in 2024, committed to building stronger communities by ensuring that every child, regardless of circumstance,has access to quality education and the holistic support needed to thrive. We bring together educators, caregivers, volunteers, and community partners to create safe, nurturing spaces where children can learn, grow, and reach their full potential.
          </p>
        </MotionDiv>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          <motion.div 
            variants={fadeUp}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-white/80 leading-relaxed">
              A world where every child, regardless of circumstance, has equitable access to quality education and the holistic support needed to thrive and reach their full potential.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeUp}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To empower children to achieve a quality and standard education by providing comprehensive academic support, essential learning resources, and nurturing environments—while delivering critical relief and psychosocial aid to alleviate hardship and foster well-being.
            </p>
          </motion.div>
        </MotionDiv>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
          {[
            "Provide academic support and learning enrichment",
            "Supply essential educational resources",
            "Create safe, nurturing learning environments",
            "Deliver relief and psychosocial support to children facing hardship",
            "Mobilize community gatherings that promote inclusion and care"
          ].map((item, i) => {
            const itemVariants = {
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            };
            
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0" />
                <p className="text-white/80">{item}</p>
              </motion.div>
            );
          })}
                  </div>
        </MotionDiv>
      </section>

      {/* CORE VALUES - Interactive */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  onHoverStart={() => setActiveValue(i)}
                  className={`relative bg-gradient-to-br ${activeValue === i ? 'from-white/20 to-white/5' : 'from-white/5 to-transparent'} backdrop-blur-xl p-8 rounded-3xl border ${activeValue === i ? 'border-white/30' : 'border-white/10'} transition-all duration-500 cursor-pointer group hover:scale-105`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                  <p className="text-white/70 leading-relaxed">{v.text}</p>
                </motion.div>
              );
            })}
          </div>
        </MotionDiv>
      </section>

      {/* APPROACH */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Our Approach
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            We believe meaningful change happens when communities come together. Through community gatherings, partnerships, and locally informed programs, we address both educational needs and the broader challenges that affect children's learning and well-being.
          </p>
        </MotionDiv>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Our Leadership
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role}`}
                    className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-blue-400 mb-2">{member.role}</p>
                  <p className="text-xs text-white/60">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </MotionDiv>
      </section>

      {/* JOIN US - Enhanced CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <MotionDiv
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Us in Making a Difference</h2>
            <p className="text-lg md:text-xl opacity-90 mb-4 leading-relaxed">
              Whether you're a volunteer, donor, educator, or community partner, your support helps create lasting impact.
            </p>
            <p className="text-2xl font-bold mb-10 tracking-wide">Educate. Support. Empower.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="px-10 py-4 rounded-full bg-white text-green-700 font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
                aria-label="Make a donation"
              >
                Donate Now
              </button>
              <button 
                className="px-10 py-4 rounded-full border-2 border-white backdrop-blur-sm hover:bg-white/10 font-bold text-lg hover:scale-105 transition-all duration-300"
                aria-label="Learn about volunteering opportunities"
              >
                Get Involved
              </button>
            </div>
          </MotionDiv>
        </div>
      </section>

    </div>
  );
}