import React, { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  Target,
  Lock,
  Upload,
  Cpu,
  CheckCircle,
  FileText,
  ArrowRight,
  Play,
  BarChart3,
  Users,
  Globe,
  Sparkles,
  Cloud,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <div className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
    <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
    <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${gradient} mb-4`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const StepCard = ({ number, icon: Icon, title, description, color }) => (
  <div className="relative">
    <div className="flex hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:border-gray-700 h-48">
      <div className={`relative mb-4`}>
        <div className={`absolute inset-0 ${color} blur-lg opacity-30 rounded-full `} />
        <div className={`relative flex items-center justify-center h-16 w-16 ${color} rounded-full`}>
          <div className="absolute -top-2 -right-2 h-8 w-8 bg-white  rounded-full flex items-center justify-center font-bold text-lg">
            {number}
          </div>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
    {number < 4 && (
      <div className="hidden md:block absolute top-1/2 -right-5 w-8 h-0.5 bg-linear-to-r from-blue-500 to-purple-500" />
    )}
  </div>
);

const StatCard = ({ value, label, icon: Icon, color }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{label}</p>
      </div>
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div className={`h-full ${color.split(' ')[0]} rounded-full`} style={{ width: '85%' }} />
    </div>
  </div>
);

export default function Home() {
  const [animatedStats, setAnimatedStats] = useState({
    accuracy: 0,
    scans: 0,
    users: 0,
    speed: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats(prev => ({
        accuracy: prev.accuracy < 99 ? prev.accuracy + 1 : 99,
        scans: prev.scans < 10000 ? prev.scans + 100 : 10000,
        users: prev.users < 5000 ? prev.users + 50 : 5000,
        speed: prev.speed < 98 ? prev.speed + 1 : 98
      }));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Real-Time Detection",
      description: "Instant analysis with AI-powered algorithms that detect manipulations in milliseconds.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "High Accuracy",
      description: "99.8% confidence scoring backed by advanced machine learning models.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "End-to-end encryption with military-grade security protocols.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Upload Media",
      description: "Drag & drop your video or audio files",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      icon: Cpu,
      title: "AI Analysis",
      description: "Advanced neural network processing",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      number: 3,
      icon: CheckCircle,
      title: "Detection",
      description: "Real-time authenticity verification",
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      number: 4,
      icon: FileText,
      title: "Detailed Report",
      description: "Comprehensive analysis results",
      color: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  const stats = [
    {
      value: `${animatedStats.accuracy}%`,
      label: "Detection Accuracy",
      icon: Target,
      color: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      value: animatedStats.scans.toLocaleString(),
      label: "Media Scanned",
      icon: BarChart3,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      value: `${animatedStats.speed}ms`,
      label: "Average Speed",
      icon: Zap,
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      value: `${animatedStats.users.toLocaleString()}+`,
      label: "Trusted Users",
      icon: Users,
      color: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <main className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="pt-20 pb-16 sm:pt-24 sm:pb-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" />
                Powered by Advanced AI
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Deepfake Detection
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">Made Intelligent</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                Secure, intelligent AI system to verify authenticity of videos & audio.
                Detect manipulation with unprecedented accuracy and maintain digital trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link to={'/upload'} className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2">
                    <sapan>Get Started</sapan>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                Why Choose <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DeepfakeAI</span>?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Simple & Powerful Workflow
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Our four-step process ensures accurate and reliable deepfake detection
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 relative">
                {steps.map((step) => (
                  <StepCard key={step.number} {...step} />
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600" />
              <div className="relative px-8 py-12 sm:px-12 sm:py-16">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
                    <Globe className="h-4 w-4" />
                    Trusted Worldwide
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Ready to Secure Your Digital Content?
                  </h2>

                  <p className="text-blue-100 mb-8 text-lg">
                    Join thousands of organizations using DeepfakeAI to protect their media integrity.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to={'/upload'} className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      Start Free Detection
                    </Link>

                    <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                      Schedule a Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}