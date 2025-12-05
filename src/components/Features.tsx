import React from 'react';
import { 
  Camera, 
  Brain, 
  FileText, 
  MessageSquare, 
  Mic, 
  Calendar,
  Shield,
  Zap,
  Users,
  Stethoscope,
  Activity,
  Database
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-10 w-10" />,
      title: "AI Medical Imaging",
      description: "Advanced computer vision for X-rays, MRIs, CT scans, and dermatological analysis with 99.2% accuracy across multiple medical specialties.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "Intelligent Diagnosis",
      description: "AI-powered diagnostic assistant providing evidence-based recommendations, differential diagnosis, and clinical decision support.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Mic className="h-10 w-10" />,
      title: "Voice Analysis",
      description: "Real-time speech-to-text transcription with medical terminology recognition and automated clinical note generation.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Smart Reports",
      description: "Automated generation of comprehensive medical reports, treatment plans, and patient summaries with customizable templates.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "AI Chat Assistant",
      description: "Interactive medical consultation with natural language processing for symptom analysis and treatment recommendations.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Patient Management",
      description: "Intelligent scheduling, appointment optimization, and patient flow management with predictive analytics.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security with end-to-end encryption, audit trails, and full HIPAA compliance for patient data protection.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Real-time Analytics",
      description: "Advanced healthcare analytics with predictive insights, performance metrics, and population health management.",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "EHR Integration",
      description: "Seamless integration with major Electronic Health Record systems and existing healthcare infrastructure.",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const specialties = [
    { name: "Radiology", icon: "🔬", description: "Advanced image analysis" },
    { name: "Dermatology", icon: "🩺", description: "Skin condition detection" },
    { name: "Cardiology", icon: "❤️", description: "Heart condition analysis" },
    { name: "Oncology", icon: "🧬", description: "Cancer screening & diagnosis" },
    { name: "Pathology", icon: "🔍", description: "Laboratory result analysis" },
    { name: "Emergency Medicine", icon: "🚑", description: "Rapid diagnosis support" }
  ];

  return (
    <section id="features" className="section bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Powerful AI Capabilities
          </h2>
          <p className="text-large max-w-4xl mx-auto">
            Discover how AI MedKit's comprehensive suite of artificial intelligence tools 
            revolutionizes medical diagnosis, patient care, and healthcare operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="card hover:scale-105 group">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="card mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized for Medical Disciplines
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our AI models are trained on vast medical datasets across multiple specialties, 
              ensuring accurate and reliable results for diverse healthcare applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:bg-gray-50 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{specialty.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{specialty.name}</h4>
                <p className="text-gray-600 text-center text-sm">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose AI MedKit?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Lightning Fast</h4>
                <p className="text-gray-600">Results in seconds, not hours</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Continuously Learning</h4>
                <p className="text-gray-600">AI that improves with every case</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-lg">Expert Validated</h4>
                <p className="text-gray-600">Verified by medical professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;