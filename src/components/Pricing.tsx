import React from 'react';
import { Check, Star, ArrowRight, Zap, Crown, Building } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      price: "Contact Us",
      period: "",
      description: "Perfect for small practices and clinics starting with AI",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Up to 1,000 AI analyses per month",
        "Basic medical image analysis",
        "Standard diagnostic reports",
        "Email support (48h response)",
        "5 user accounts",
        "Basic analytics dashboard",
        "Mobile app access"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Professional",
      price: "Contact Us",
      period: "",
      description: "Advanced AI capabilities for growing medical practices",
      icon: <Star className="h-6 w-6" />,
      features: [
        "Up to 5,000 AI analyses per month",
        "Advanced multi-specialty imaging",
        "Voice-to-text transcription",
        "Custom report templates",
        "Priority support (24h response)",
        "25 user accounts",
        "Advanced analytics & insights",
        "API access & integrations",
        "EHR system integration",
        "Audit trail & compliance"
      ],
      popular: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      period: "",
      description: "Complete AI solution for hospitals and large practices",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "Unlimited AI analyses",
        "Full feature suite access",
        "Custom AI model training",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "Advanced security & compliance",
        "On-premise deployment",
        "Custom integrations",
        "Training & implementation",
        "SLA guarantees"
      ],
      popular: false,
      color: "from-gold-500 to-yellow-600"
    }
  ];

  const addOns = [
    { name: "Additional AI Analyses", price: "Contact Us", unit: "" },
    { name: "Advanced Voice Features", price: "Contact Us", unit: "" },
    { name: "Custom AI Training", price: "Contact Us", unit: "" },
    { name: "Priority Support", price: "Contact Us", unit: "" }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Pricing Plans
          </h2>
          <p className="text-large max-w-4xl mx-auto">
            We're preparing flexible pricing plans for your healthcare practice.
            Contact us to learn more about early access and special launch offers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative card hover:scale-105 ${
                plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-bold">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                  <div className="text-white">
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-2xl' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300'
                }`}
              >
                Contact Sales
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="card mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Add-On Services</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enhance your AI MedKit experience with additional services and capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h4>
                <div className="text-2xl font-bold text-green-500 mb-1">{addon.price}</div>
                <div className="text-gray-500 text-sm">{addon.unit}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="card max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Healthcare Professionals Choose AI MedKit
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Early Access</h4>
                <p className="text-gray-600 text-sm">Be among the first to try</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">No Setup Fees</h4>
                <p className="text-gray-600 text-sm">Start immediately</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">HIPAA Compliant</h4>
                <p className="text-gray-600 text-sm">Enterprise security</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Cancel Anytime</h4>
                <p className="text-gray-600 text-sm">No long-term contracts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;