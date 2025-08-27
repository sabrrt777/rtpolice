"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Lock, User } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (username === "admin" && password === "respect2024") {
      localStorage.setItem("admin_auth", "true")
      localStorage.setItem("admin_user", username)
      router.push("/admin")
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />

      <Card className="w-full max-w-md bg-card/80 backdrop-blur-xl border-primary/30 shadow-2xl shadow-primary/20">
        <CardHeader className="text-center space-y-6">
          <div className="mx-auto">
            <Image
              src="https://respect.sa/assets/images/logo.png"
              alt="Respect Logo"
              width={120}
              height={60}
              className="mx-auto drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-2">
              - شرطة ريسبكت
            </h1>
            <p className="text-white/70 text-sm">تسجيل الدخول لإدارة الأفراد</p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-white">
                اسم المستخدم
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-background/50 border-primary/30 text-white placeholder-white/50 pr-10 focus:border-primary focus:ring-primary/20"
                  placeholder="أدخل اسم المستخدم"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-white">
                كلمة المرور
              </label>
              <div className="relative">
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-primary" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50 border-primary/30 text-white placeholder-white/50 pr-10 focus:border-primary focus:ring-primary/20"
                  placeholder="أدخل كلمة المرور"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-2">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg shadow-lg shadow-primary/30 transition-all duration-200 hover:shadow-xl hover:shadow-primary/40 disabled:opacity-50"
            >
              {isLoading ? "جاري التحقق..." : "تسجيل الدخول"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
