"use client";

import React, { useState, useEffect, useRef } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      console.log('Submitting form data:', formData);

      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/xkgbreoo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formDataToSend,
      });

      if (response.ok) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Message sent successfully!');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 flex items-center justify-center p-6 scroll-mt-20 text-black overflow-hidden bg-white"
    >
      <div className="absolute inset-0 opacity-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center">
          <h2 className={`text-3xl font-bold relative inline-block transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <span className="relative inline-block">
              Contact Me
              <div className="absolute -bottom-1 left-0 w-36 h-1 bg-gradient-to-r from-[#3D7A81] to-transparent rounded-full animate-expand"></div>
            </span>
          </h2>
        </div>

        <p className={`text-gray-600 mt-4 max-w-xl mx-auto text-center transform duration-1000 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          Ready to bring your innovation to life? Reach out to me!
        </p>

        <div className="flex flex-col md:flex-row gap-12 mt-14">
          <div className="md:w-3/5">
            <h3 className={`text-xl font-bold text-gray-800 mb-6 transform transition-all duration-1000 delay-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              Let&#39;s Connect!
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                  <input id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="John Doe" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="example@gmail.com" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
                <input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your project" />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows={5}
                  placeholder="Share your thoughts ..." // ✅ Updated placeholder
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button onClick={handleSubmit} disabled={isSubmitting} className="w-full md:w-auto bg-[#3D7A81] hover:bg-[#779ea1] text-white px-4 py-2 rounded-lg font-medium transition duration-300 shadow-md transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send!"}
              </button>
            </div>
          </div>

          <div className="md:w-2/5 md:mt-20">
            <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
              <address className="space-y-6 not-italic">
                <div className="flex items-start">
                  <div className="bg-[#3D7A81] p-3 rounded-full text-white mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Email</h4>
                    <a href="mailto:carfinder@gmail.com" className="text-[#3D7A81] hover:underline">carfinder@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3D7A81] p-3 rounded-full text-white mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Phone</h4>
                    <p className="text-[#3D7A81]">+250 799432126</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3D7A81] p-3 rounded-full text-white mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Location</h4>
                    <p className="text-[#3D7A81]">Kigali, Rwanda</p>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
