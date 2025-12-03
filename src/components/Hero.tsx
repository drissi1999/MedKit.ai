import React from 'react';
import { ArrowRight, Play, Activity, CheckCircle, Users } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-600 font-medium text-sm mb-6">
              <Activity className="h-4 w-4" />
              Coming Soon - Revolutionary Medical AI Platform
            </div>

            <h1 className="heading-xl mb-6">
              Transform Healthcare with
              <span className="accent-green"> AI MedKit</span>
            </h1>

            <p className="text-large mb-8">
              Experience the future of medical diagnostics with our comprehensive AI platform.
              Advanced image analysis, intelligent patient management, and evidence-based decision support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center gap-2"
              >
                Join Early Access
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={scrollToPricing}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                View Plans
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">99.2%</div>
                <div className="text-gray-600 text-sm">Target Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">75%</div>
                <div className="text-gray-600 text-sm">Faster Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">Q2 2025</div>
                <div className="text-gray-600 text-sm">Expected Launch</div>
              </div>
            </div>
          </div>

          {/* Right Content - Demo Preview */}
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Activity className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                    <p className="text-sm text-gray-600">Medical Image Processing</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">X-ray analysis complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Diagnosis generated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Report ready</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Trusted by Healthcare Professionals</span>
                </div>
                <p className="text-sm text-green-700">Be among the first healthcare professionals to experience AI MedKit</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
