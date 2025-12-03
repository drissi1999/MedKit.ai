import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, Calendar, Play, Users, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    specialty: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));

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
      window.location.href = mailtoLink;

      // Show success status
      setSubmitStatus('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          organization: '',
          specialty: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Questions?</h4>
                  <a href="mailto:houcinemedkit.ai@gmail.com" className="text-gray-700 text-lg hover:text-green-600 transition-colors">
                    houcinemedkit.ai@gmail.com
                  </a>
                  <p className="text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-lg">Fast Response</h4>
                  <p className="text-gray-700 text-lg">Quick turnaround time</p>
                  <p className="text-gray-600">Typically within 4-24 hours</p>
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
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Join Waitlist
                    </>
                  )}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-green-800 font-medium">Success!</p>
                    <p className="text-sm text-green-700">
                      Your email client should open. Please send the email to complete your waitlist registration.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-red-800 font-medium">Oops!</p>
                    <p className="text-sm text-red-700">
                      Something went wrong. Please try again or contact us directly at houcinemedkit.ai@gmail.com
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === 'idle' && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700">
                    <strong>How it works:</strong> Clicking "Join Waitlist" will open your email client
                    with a pre-filled message. Simply send the email to complete your registration!
                  </p>
                </div>
              )}
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
