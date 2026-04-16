"use client"

import { Link as LinkIcon, Zap, ShoppingCart, Image as ImageIcon } from "lucide-react"

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop" },
  { id: 2, url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop" },
  { id: 3, url: "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=400&fit=crop" },
]

const storeItems = [
  { id: 1, name: "درع الرتبة", price: "500 ريال", icon: "🛡️" },
  { id: 2, name: "خاتم ضابط", price: "800 ريال", icon: "💍" },
  { id: 3, name: "زي رسمي", price: "1500 ريال", icon: "👔" },
  { id: 4, name: "شارة التميز", price: "600 ريال", icon: "⭐" },
]

export default function RespectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-700/20 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-600/15 rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-purple-700/10 rounded-full opacity-15 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-purple-600/20 rounded-full opacity-25 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 border-b border-purple-700/30 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-8">
            <a href="#intro" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              تعريف
            </a>
            <a href="#links" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              روابط
            </a>
            <a href="#activation" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              تفعيل وقوانين
            </a>
            <a href="#store" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              متجر
            </a>
            <a href="#gallery" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
              صور
            </a>
          </nav>
          
          <div className="flex-shrink-0">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center border-2 border-purple-400 shadow-lg shadow-purple-500/50">
              <span className="text-white text-xl font-bold">R</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Section 1: تعريف */}
        <section id="intro" className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold text-white mb-6">مجتمع ريسبيكت</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              مجتمع سيرفر "ريسبيكت" العربي هو مجتمع خاص يجمع بين الأعضاء والموظفين والمشرفين، مما يحقق بيئة فعالة وعملية. نحن نوفر تجربة لعب متميزة بأعلى معايير الجودة والاحترافية، مع الالتزام الكامل بالقوانين والأمان.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all">
              انضم الآن
            </button>
          </div>
        </section>

        {/* Section 2: روابط */}
        <section id="links" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-purple-700/30">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white text-center mb-16">روابط التواصل</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="#" className="group bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all text-center">
                <LinkIcon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">ديسكورد</h3>
                <p className="text-gray-400 text-sm">انضم إلى سيرفر الديسكورد الرسمي</p>
              </a>
              <a href="#" className="group bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all text-center">
                <LinkIcon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">تويتر</h3>
                <p className="text-gray-400 text-sm">تابعنا على حسابنا الرسمي</p>
              </a>
              <a href="#" className="group bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-8 hover:border-purple-500/60 transition-all text-center">
                <LinkIcon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">اليوتيوب</h3>
                <p className="text-gray-400 text-sm">شاهد أحدث فيديوهاتنا</p>
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: تفعيل وقوانين */}
        <section id="activation" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-purple-700/30">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white text-center mb-16">تفعيل وقوانين</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">شروط التفعيل</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>✓ يجب أن تكون عمرك 15 سنة فأكثر</li>
                  <li>✓ التزام كامل بقوانين السيرفر</li>
                  <li>✓ احترم جميع الأعضاء والموظفين</li>
                  <li>✓ عدم استخدام كلمات مسيئة</li>
                  <li>✓ قراءة القوانين بعناية قبل الدخول</li>
                </ul>
              </div>
              <div className="bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">القوانين الأساسية</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>🔒 احترم خصوصية الآخرين</li>
                  <li>⚖️ لا للتنمر أو الإساءة</li>
                  <li>📱 لا للإعلانات غير المصرح بها</li>
                  <li>🎮 الالتزام بأوقات الأنشطة</li>
                  <li>🚫 المخالفة تؤدي للحظر</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: متجر */}
        <section id="store" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-purple-700/30">
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white text-center mb-16">متجر الخادم</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {storeItems.map((item) => (
                <div key={item.id} className="group bg-purple-900/40 backdrop-blur border border-purple-700/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-purple-400 font-semibold mb-4">{item.price}</p>
                  <button className="w-full py-2 bg-purple-600/50 hover:bg-purple-600 text-white rounded-lg transition-colors font-semibold">
                    <ShoppingCart className="w-4 h-4 inline mr-2" />
                    اشتر الآن
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: صور */}
        <section id="gallery" className="min-h-screen flex items-center justify-center px-6 py-20 border-t border-purple-700/30">
          <div className="max-w-5xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white text-center mb-16">معرض الصور</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div key={image.id} className="group relative h-72 rounded-2xl overflow-hidden border border-purple-700/30 hover:border-purple-500/60 transition-all">
                  <img
                    src={image.url}
                    alt="Gallery"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-purple-700/30 bg-purple-950/80 backdrop-blur py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>حقوق الطبع والنشر © Respect CFW 2025 جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}
