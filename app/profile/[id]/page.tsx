"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Star, Users, Award, ArrowLeft, Youtube, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { PersonnelStorage, type PersonnelMember } from "@/lib/personnel-storage"

const getRankIcon = (category: string) => {
  switch (category) {
    case "leadership":
      return <Star className="h-8 w-8 text-primary" />
    case "officers":
      return <Shield className="h-8 w-8 text-primary" />
    case "ncos":
      return <Award className="h-8 w-8 text-primary" />
    case "soldiers":
      return <Users className="h-8 w-8 text-primary" />
    default:
      return <Shield className="h-8 w-8 text-primary" />
  }
}

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [person, setPerson] = useState<PersonnelMember | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPersonData = () => {
      const allPersonnel = PersonnelStorage.loadPersonnel()
      const foundPerson = allPersonnel.find((p) => p.id === params.id)
      setPerson(foundPerson || null)
      setLoading(false)
    }

    loadPersonData()

    const handleStorageChange = () => {
      loadPersonData()
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("personnelUpdated", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("personnelUpdated", handleStorageChange)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-white">جاري التحميل...</p>
        </div>
      </div>
    )
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto border-primary/30 bg-card/80 backdrop-blur-sm">
          <CardContent className="text-center py-8">
            <h1 className="text-2xl font-bold text-destructive mb-4">الملف الشخصي غير موجود</h1>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">العودة للصفحة الرئيسية</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/50 border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-primary/10">
                <ArrowLeft className="h-4 w-4" />
                العودة
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
              <h1 className="text-2xl font-bold text-primary">الملف الشخصي</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/30 bg-card/80 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* الصورة الشخصية */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/30 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                      <Image
                        src={
                          person.image ||
                          "/placeholder.svg?height=300&width=300&query=professional police officer portrait"
                        }
                        alt={person.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4">
                      <div className="bg-primary/20 backdrop-blur-sm rounded-full p-3 border border-primary/30">
                        {getRankIcon(person.category)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* المعلومات الشخصية */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                        {person.name}
                      </h2>
                      <Badge className="bg-primary/20 text-primary border-primary/50 text-lg px-3 py-1">
                        {person.idNumber}
                      </Badge>
                    </div>
                    <p className="text-xl text-white/80 mb-4">{person.rank}</p>
                  </div>

                  {/* النبذة الشخصية */}
                  {person.bio && (
                    <div className="bg-card/50 rounded-lg p-6 border border-primary/20">
                      <h3 className="text-xl font-semibold text-primary mb-3">نبذة شخصية</h3>
                      <p className="text-white/80 leading-relaxed">{person.bio}</p>
                    </div>
                  )}

                  {/* الروابط الاجتماعية */}
                  {(person.youtube || person.kick) && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">الروابط الرسمية</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* رابط اليوتيوب */}
                        {person.youtube && (
                          <a href={person.youtube} target="_blank" rel="noopener noreferrer" className="group">
                            <Card className="hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 border-red-500/30 bg-red-500/10 hover:border-red-500/60">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                  <div className="bg-red-500/20 p-3 rounded-full group-hover:bg-red-500/30 transition-colors">
                                    <Youtube className="h-6 w-6 text-red-500" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-red-500">قناة اليوتيوب</h4>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </a>
                        )}

                        {/* رابط كيك */}
                        {person.kick && (
                          <a href={person.kick} target="_blank" rel="noopener noreferrer" className="group">
                            <Card className="hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300 border-green-500/30 bg-green-500/10 hover:border-green-500/60">
                              <CardContent className="p-4">
                                <div className="flex items-center gap-3">
                                  <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/30 transition-colors">
                                    <Play className="h-6 w-6 text-green-500" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-green-500">منصة كيك</h4>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
