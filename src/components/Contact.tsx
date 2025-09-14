import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, Play, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    specialty: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const subject = `AI MedKit Waitlist - ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization || 'Not specified'}
Medical Specialty: ${formData.specialty || 'Not specified'}
Message: ${formData.message || 'No additional message'}

This person wants to join the AI MedKit waitlist.`;

    // Open email client
    const mailtoLink = `mailto:houcinemedkit.ai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);

    // Show confirmation
    alert('✅ Your email client should open with a pre-filled message. Send it to join the waitlist!');

    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      specialty: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Experience AI MedKit
          </h2>
          <p className="text-large max-w-4xl mx-auto">
            Ready to transform your medical practice with AI? Join our waitlist
            and be among the first to experience the future of medical diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="card mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Play className="h-6 w-6 text-green-500" />
                Join the Waitlist
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Priority access when we launch</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Exclusive demo walkthrough upon launch</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Direct consultation with AI specialists</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">24/7 Support Hotline</h4>
                  <p className="text-gray-700 text-lg">+33 (06) 09 60 61 89 AI-MEDKIT</p>
                  <p className="text-gray-600">Immediate technical assistance</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Direct Contact</h4>
                  <p className="text-gray-700 text-lg">houcinemedkit.ai@gmail.com</p>
                  <p className="text-gray-600">Response within 4 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Join Waitlist Now
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="Dr. Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="dr.smith@hospital.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Hospital
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="City General Hospital"
                  />
                </div>

                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Specialty
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  >
                    <option value="">Select Specialty</option>
                    <option value="radiology">Radiology</option>
                    <option value="dermatology">Dermatology</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="oncology">Oncology</option>
                    <option value="emergency">Emergency Medicine</option>
                    <option value="pathology">Pathology</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    How can AI MedKit help your practice?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    placeholder="Tell us about your specific needs and challenges..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg"
                >
                  <Send className="h-5 w-5" />
                  Join Waitlist
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700">
                  <strong>How it works:</strong> Clicking "Join Waitlist" will open your email client
                  with a pre-filled message. Simply send the email to complete your registration!
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center">
          <div className="card max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Be Among the First Medical Professionals to Experience AI MedKit
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto">
              Join our exclusive early access program and be part of the revolution in medical AI diagnostics.
              Shape the future of healthcare technology with your valuable feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
