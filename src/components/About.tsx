import React from 'react';
import { 
  Activity, 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Handshake,
  Linkedin,
  Sparkles,
  Heart,
  Brain,
  Zap
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        {/* Product Overview Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-600 font-medium text-sm mb-6">
            <Activity className="h-4 w-4" />
            About Our Product
          </div>
          <h2 className="heading-lg mb-6">
            Revolutionizing Healthcare with <span className="accent-green">AI MedKit</span>
          </h2>
          <p className="text-large max-w-4xl mx-auto mb-8">
            AI MedKit is a comprehensive medical AI platform designed to transform healthcare delivery 
            through advanced artificial intelligence. Our platform empowers medical professionals with 
            cutting-edge diagnostic tools, intelligent patient management, and evidence-based decision support.
          </p>
        </div>

        {/* Product Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="card hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 mb-6">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced AI Technology</h3>
            <p className="text-gray-600 leading-relaxed">
              Powered by state-of-the-art machine learning algorithms trained on millions of medical cases, 
              ensuring accurate and reliable diagnostic support across all medical specialties.
            </p>
          </div>

          <div className="card hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 mb-6">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision Diagnostics</h3>
            <p className="text-gray-600 leading-relaxed">
              Achieve 99.2% accuracy in medical imaging analysis, with comprehensive support for radiology, 
              dermatology, cardiology, oncology, and emergency medicine.
            </p>
          </div>

          <div className="card hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 mb-6">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast Results</h3>
            <p className="text-gray-600 leading-relaxed">
              Get diagnostic results in seconds, not hours. Our AI processes medical images and data 
              at unprecedented speeds, enabling faster patient care and treatment decisions.
            </p>
          </div>

          <div className="card hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Professionals</h3>
            <p className="text-gray-600 leading-relaxed">
              Used by over 50,000 medical professionals worldwide, AI MedKit has become the trusted 
              platform for healthcare providers seeking to enhance their diagnostic capabilities.
            </p>
          </div>

          <div className="card hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Patient-Centered Care</h3>
            <p className="text-gray-600 leading-relaxed">
              Our platform is designed to improve patient outcomes by providing healthcare providers 
              with the tools they need to deliver faster, more accurate diagnoses and personalized care.
            </p>
          </div>

          <div className="card hover:scale-105 transition-transform">
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 mb-6">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Compliant</h3>
            <p className="text-gray-600 leading-relaxed">
              Enterprise-grade security with full HIPAA compliance, ensuring patient data protection 
              and meeting the highest standards of healthcare information security.
            </p>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="card mb-16 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-medium text-sm mb-6">
              <Handshake className="h-4 w-4" />
              Strategic Partnership
            </div>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-white rounded-xl shadow-lg">
                <Sparkles className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                Spark Innovation
              </h3>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              We are proud to partner with <strong>Spark Innovation</strong>, a leading technology 
              innovation company dedicated to advancing healthcare solutions through cutting-edge AI 
              and machine learning technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Innovation Focus</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Spark Innovation brings decades of experience in developing innovative healthcare 
                technologies, combining deep medical domain expertise with advanced AI capabilities 
                to create transformative solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-indigo-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg">
                  <Handshake className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Collaborative Excellence</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Together, AI MedKit and Spark Innovation are pushing the boundaries of medical AI, 
                developing next-generation diagnostic tools that improve patient care and clinical outcomes 
                across the healthcare spectrum.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://www.linkedin.com/company/medkit-ai/about/?viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="h-5 w-5" />
              Connect with us on LinkedIn
            </a>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="card bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              To democratize access to advanced medical AI technology, enabling healthcare providers 
              of all sizes to deliver faster, more accurate diagnoses and improve patient outcomes. 
              We believe that cutting-edge AI should be accessible to every medical professional, 
              regardless of practice size or location.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.2%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-gray-600">Medical Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">75%</div>
                <div className="text-gray-600">Faster Diagnosis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

