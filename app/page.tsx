"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Users, Lock, ShoppingCart, Scale, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

// Store items data
const storeItems = [
  {
    id: 1,
    name: "درع الرتبة الفضية",
    price: "500 ريال",
    description: "شارة رتبة فضية مميزة",
    icon: "🛡️",
  },
  {
    id: 2,
    name: "خاتم ضابط",
    price: "800 ريال",
    description: "خاتم أنيق للضباط",
    icon: "💍",
  },
  {
    id: 3,
    name: "زي رسمي فاخر",
    price: "1500 ريال",
    description: "زي رسمي بجودة عالية",
    icon: "👔",
  },
  {
    id: 4,
    name: "شارة التميز",
    price: "600 ريال",
    description: "شارة تمنح للعاملين المتميزين",
    icon: "⭐",
  },
]

// Server rules data
const serverRules = [
  {
    id: 1,
    title: "احترام جميع أعضاء الفريق",
    description: "يجب الالتزام بسلوك احترافي واحترام جميع الأعضاء في جميع الأوقات",
  },
  {
    id: 2,
    title: "الالتزام بالقوانين",
    description: "يجب على الجميع الالتزام التام بقوانين الخادم والسياسات المعمول بها",
  },
  {
    id: 3,
    title: "لا للتنمر أو الإساءة",
    description: "يتم حظر أي شكل من أشكال التنمر أو الإساءة اللفظية فوراً",
  },
  {
    id: 4,
    title: "الحفاظ على الأمان",
    description: "يجب عدم مشاركة معلومات شخصية أو كلمات مرور مع أحد",
  },
  {
    id: 5,
    title: "لا للإعلانات غير المصرح بها",
    description: "منع الإعلان عن محتوى خارجي بدون موافقة من الإدارة",
  },
  {
    id: 6,
    title: "الالتزام بالمواعيد",
    description: "يجب الالتزام بمواعيد الأنشطة والفعاليات المقررة",
  },
]

// Gallery images data (predefined)
const galleryImages = [
  {
    id: 1,
    title: "مقر الشرطة الرئيسي",
    url: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    title: "فريق التدريب",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    title: "عملية أمان",
    url: "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    title: "فعالية خيرية",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    title: "تدريب متقدم",
    url: "https://images.unsplash.com/photo-1571768235827-c3b1eaf11c1f?w=500&h=500&fit=crop",
  },
  {
    id: 6,
    title: "الاحتفالات السنوية",
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=500&fit=crop",
  },
]

export default function PolicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">RT Police</h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#intro" className="text-foreground hover:text-primary transition-colors">
                التعريف
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                المميزات
              </a>
              <a href="#store" className="text-foreground hover:text-primary transition-colors">
                المتجر
              </a>
              <a href="#rules" className="text-foreground hover:text-primary transition-colors">
                القوانين
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
                المعرض
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero/Introduction Section */}
      <section id="intro" className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              مرحباً بك في <span className="text-accent">RT Police</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نحن فريق متميز مختص في تقديم خدمات أمنية واحترافية بأعلى معايير الجودة. 
              بما يزيد عن سنوات من الخبرة، نلتزم بحماية أمن وسلامة جميع أعضائنا.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              انضم إلينا اليوم وكن جزءاً من أكبر فريق أمني متكامل يسعى لتحقيق أهداف مشتركة 
              وبناء مجتمع آمن وموثوق به.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                انضم الآن
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                اعرف أكثر
              </button>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30 flex items-center justify-center">
            <Shield className="h-32 w-32 text-primary opacity-50" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 border-t border-border">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">مميزات الخادم</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <Zap className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">أداء عالي</h3>
              <p className="text-muted-foreground">خوادم سريعة وموثوقة توفر أفضل تجربة للاعبين</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <Users className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">مجتمع قوي</h3>
              <p className="text-muted-foreground">آلاف الأعضاء النشطين والمتفاعلين يومياً</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <Lock className="h-12 w-12 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">أمان عالي</h3>
              <p className="text-muted-foreground">نظام حماية متقدم ضد الاختراقات والبيانات الوهمية</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Store Section */}
      <section id="store" className="container mx-auto px-4 py-20 border-t border-border">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">متجر الخادم</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          احصل على أفضل المنتجات والخدمات المتميزة لتحسين تجربتك في الخادم
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storeItems.map((item) => (
            <Card key={item.id} className="bg-card border-border hover:border-primary transition-colors overflow-hidden group cursor-pointer">
              <CardContent className="p-6 space-y-4">
                <div className="text-5xl">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                    {item.price}
                  </Badge>
                  <ShoppingCart className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="container mx-auto px-4 py-20 border-t border-border">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">قوانين الخادم</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          يجب على جميع الأعضاء الالتزام الكامل بهذه القوانين للحفاظ على سلامة وأمان المجتمع
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {serverRules.map((rule) => (
            <Card key={rule.id} className="bg-card border-border hover:border-accent transition-colors">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Scale className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="container mx-auto px-4 py-20 border-t border-border">
        <h2 className="text-4xl font-bold text-primary mb-4 text-center">معرض الصور</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          لقطات من أنشطتنا وفعالياتنا المختلفة
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer border border-border hover:border-primary transition-colors"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-start">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">RT Police</h3>
              </div>
              <p className="text-muted-foreground">
                منصة أمنية متكاملة توفر أفضل الخدمات والحماية
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">الروابط السريعة</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#intro" className="hover:text-primary transition-colors">التعريف</Link></li>
                <li><Link href="#features" className="hover:text-primary transition-colors">المميزات</Link></li>
                <li><Link href="#store" className="hover:text-primary transition-colors">المتجر</Link></li>
                <li><Link href="#rules" className="hover:text-primary transition-colors">القوانين</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">التواصل</h4>
              <p className="text-muted-foreground mb-2">البريد: info@rtpolice.com</p>
              <p className="text-muted-foreground mb-2">الهاتف: +966 XX XXX XXXX</p>
              <p className="text-muted-foreground">الموقع: المملكة العربية السعودية</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RT Police. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
      <header className="bg-card/50 border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4">
              <Image
                src="https://respect.sa/assets/images/logo.png"
                alt="Respect Logo"
                width={60}
                height={60}
                className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
              />
              <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                - شرطة ريسبكت
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
  <main className="container mx-auto px-6 py-12">
    <div className="space-y-12">
      {Object.entries(personnelData).map(([category, members]) => {
        if (members.length === 0) return null

        return (
          <section key={category}>
            <div className="flex items-center gap-3 mb-6">
              {getRankIcon(category)}
              <h2 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                {getCategoryTitle(category)}
              </h2>
              <Badge variant="secondary" className="text-lg px-3 py-1 bg-primary/20 text-primary border-primary/30">
                {members.length} أفراد
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((person) => (
                <Link key={person.id} href={`/profile/${person.id}`}>
                  <Card className="flex flex-col lg:flex-row hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 border-primary/30 bg-card/80 backdrop-blur-sm hover:border-primary/60 cursor-pointer hover:scale-105 overflow-hidden">
                    
                    {/* الصورة - يسار الكرت */}
                    {person.image && (
                      <div className="relative w-full lg:w-1/3 h-60 lg:h-auto overflow-hidden">
                        <Image
                          src={person.image || "/placeholder.svg"}
                          alt={person.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* المحتوى - يمين الصورة */}
                    <div className="flex flex-col justify-between p-4 flex-1">
                      <CardHeader className="pb-3">
                        <div className="space-y-2">
                          <CardTitle className="text-xl text-white">{person.name}</CardTitle>
                          <Badge className="bg-primary/20 text-primary border-primary/50 hover:bg-primary/30 w-fit">
                            {person.idNumber}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/80 mb-3">{person.rank}</p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  </main>
      {/* Footer */}
      <footer className="bg-card/30 border-t border-border mt-16 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-sm text-white/70">جميع الحقوق محفوظة © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
