"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Star, Users, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { PersonnelStorage, type PersonnelMember } from "@/lib/personnel-storage"

const getRankIcon = (category: string) => {
  switch (category) {
    case "leadership":
      return <Star className="h-6 w-6 text-primary" />
    case "officers":
      return <Shield className="h-6 w-6 text-primary" />
    case "ncos":
      return <Award className="h-6 w-6 text-primary" />
    case "soldiers":
      return <Users className="h-6 w-6 text-primary" />
    default:
      return <Shield className="h-6 w-6 text-primary" />
  }
}

const getRankColor = (category: string) => {
  switch (category) {
    case "leadership":
      return "bg-primary text-primary-foreground"
    case "officers":
      return "bg-accent text-accent-foreground"
    case "ncos":
      return "bg-secondary text-secondary-foreground"
    case "soldiers":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

const getCategoryTitle = (category: string) => {
  switch (category) {
    case "leadership":
      return "القيادات العليا"
    case "officers":
      return "الضباط"
    case "ncos":
      return "ضباط الصف"
    case "soldiers":
      return "الجنود"
    default:
      return category
  }
}

export default function PolicePage() {
  const [personnelData, setPersonnelData] = useState<{
    leadership: PersonnelMember[]
    officers: PersonnelMember[]
    ncos: PersonnelMember[]
    soldiers: PersonnelMember[]
  }>({
    leadership: [],
    officers: [],
    ncos: [],
    soldiers: [],
  })

  useEffect(() => {
    const loadPersonnelData = () => {
      const allPersonnel = PersonnelStorage.loadPersonnel()

      setPersonnelData({
        leadership: allPersonnel.filter((p) => p.category === "leadership"),
        officers: allPersonnel.filter((p) => p.category === "officers"),
        ncos: allPersonnel.filter((p) => p.category === "ncos"),
        soldiers: allPersonnel.filter((p) => p.category === "soldiers"),
      })
    }

    loadPersonnelData()

    const handleStorageChange = () => {
      loadPersonnelData()
    }

    window.addEventListener("storage", handleStorageChange)

    // Custom event for same-tab updates
    window.addEventListener("personnelUpdated", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("personnelUpdated", handleStorageChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
              <Badge
                variant="secondary"
                className="text-lg px-3 py-1 bg-primary/20 text-primary border-primary/30"
              >
                {members.length} أفراد
              </Badge>
            </div>
  
            {/* شبكة الكروت */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((person) => (
                <Link key={person.id} href={`/profile/${person.id}`}>
                  <Card className="flex items-center gap-5 rounded-2xl border-2 border-primary/30 bg-card/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:border-primary/60 cursor-pointer p-4">
                    
                    {/* الصورة يسار */}
                    <div className="relative w-28 h-28 flex-shrink-0">
                      <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-primary/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                        <Image
                          src={
                            person.image ||
                            "/placeholder.svg?height=200&width=200&query=professional portrait"
                          }
                          alt={person.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* أيقونة الرتبة */}
                      <div className="absolute -bottom-3 -right-3">
                        <div className="bg-primary/20 backdrop-blur-sm rounded-full p-2 border border-primary/30">
                          {getRankIcon(person.category)}
                        </div>
                      </div>
                    </div>
  
                    {/* المحتوى يمين الصورة */}
                    <div className="flex flex-col justify-center flex-1">
                      <CardHeader className="p-0 mb-2">
                        <CardTitle className="text-xl font-semibold text-white">
                          {person.name}
                        </CardTitle>
                      </CardHeader>
                      <Badge className="bg-primary/20 text-primary border-primary/50 hover:bg-primary/30 w-fit mb-2">
                        {person.idNumber}
                      </Badge>
                      <CardContent className="p-0">
                        <p className="text-white/80">{person.rank}</p>
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
