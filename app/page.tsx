"use client"

import { Headphones, Scale, Info } from "lucide-react"

export default function RespectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-700/20 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-600/15 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-purple-700/10 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-purple-600/20 rounded-full opacity-25 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-44 h-44 bg-purple-700/15 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "2.5s" }}></div>
        <div className="absolute top-20 right-1/4 w-40 h-40 bg-purple-600/10 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 border-b border-purple-700/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8 flex-1">
            <a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              الرئيسية
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              صناع المحتوى
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              القوانين
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              تقديم الوظائف
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              المتجر
            </a>
          </nav>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center border-2 border-purple-400 shadow-lg shadow-purple-500/50">
              <span className="text-white text-2xl font-bold">R</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6">
        {/* Community Introduction Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            مجتمع ريسبيكت
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed mb-8">
            مجتمع سيرفر "ريسبيكت" العربي هو مجتمع خاص يجمع بين الأعضاء والموظفين والمشرفين، مما يحقق بيئة فعالة وعملية في عمل فترة داخل المشرف الشرطة بقسم الشرطة الدوريات لتشارك القوانين والاتصالات بين الأعضاء والجماهير المتميزين بشكل مستمر ويشاركون في الفعاليات والمنشآت، مما يعزز روح التعاون والتفاني داخل مجتمع "ريسبيكت" الذي يعكس قوة وطاقة هذا المجتمع.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full mb-20">
          {/* Contact Card */}
          <div className="group">
            <div className="bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/40 transition-colors">
                <Headphones className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">اتصل بنا</h3>
              <p className="text-gray-400 mb-6 flex-1">
                بمقدورك التواصل معنا عن طريق جميع منصات التواصل الرسمية بسهولة
              </p>
              <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                الدخول إلى الديسكورد →
              </button>
            </div>
          </div>

          {/* Rules Card */}
          <div className="group">
            <div className="bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/40 transition-colors">
                <Scale className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">القوانين</h3>
              <p className="text-gray-400 mb-6 flex-1">
                القوانين تُعتبر إلى صميم المتعة والتزام بين لاعبين بطريقة عادلة وشفافة
              </p>
              <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                الاطلاع على القوانين →
              </button>
            </div>
          </div>

          {/* About Card */}
          <div className="group">
            <div className="bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/40 transition-colors">
                <Info className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">من نحن</h3>
              <p className="text-gray-400 mb-6 flex-1">
                "ريسبيكت" هو سيرفر شاف أن مختصص للعرب تأسيس في عام 2020 يقدم تجربة لعب استثنائية
              </p>
              <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                اكتشف المزيد →
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-700/30 bg-purple-950/50 backdrop-blur py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>حقوق الطبع والنشر © Respect CFW 2025 جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}
