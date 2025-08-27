"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PersonnelStorage } from "@/lib/personnel-storage"
import { Plus, Edit, Trash2, Save, X, LogOut, Upload, GripVertical } from "lucide-react"
import Image from "next/image"

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

interface Personnel {
  id: string
  name: string
  rank: string
  category: "leadership" | "officers" | "ncos" | "soldiers"
  idNumber: string
  bio: string
  youtube?: string
  kick?: string
  image?: string
  order: number
}

export default function AdminPanel() {
  const [personnel, setPersonnel] = useState<Personnel[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    rank: "",
    category: "soldiers" as Personnel["category"],
    idNumber: "",
    bio: "",
    youtube: "",
    kick: "",
    image: "",
  })
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_auth")
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    loadPersonnel()
  }, [router])

  const loadPersonnel = () => {
    const data = PersonnelStorage.loadPersonnel()
    setPersonnel(data.map((person, index) => ({ ...person, order: index })))
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(personnel)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    // Update order numbers
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }))

    setPersonnel(updatedItems)

    // Save to storage
    updatedItems.forEach((item) => {
      PersonnelStorage.updatePersonnel(item.id, item)
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string
        setFormData((prev) => ({ ...prev, image: imageUrl }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_auth")
    localStorage.removeItem("admin_user")
    router.push("/login")
  }

  const handleSave = () => {
    if (editingId) {
      PersonnelStorage.updatePersonnel(editingId, formData)
    } else {
      const newPersonnel = {
        ...formData,
        id: Date.now().toString(),
        order: personnel.length,
      }
      PersonnelStorage.addPersonnel(newPersonnel)
    }

    loadPersonnel()
    resetForm()
  }

  const handleDelete = (id: string) => {
    if (confirm("هل أنت متأكد من حذف هذا الشخص؟")) {
      PersonnelStorage.deletePersonnel(id)
      loadPersonnel()
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      rank: "",
      category: "soldiers",
      idNumber: "",
      bio: "",
      youtube: "",
      kick: "",
      image: "",
    })
    setEditingId(null)
    setIsAddingNew(false)
  }

  const startEdit = (person: Personnel) => {
    setFormData(person)
    setEditingId(person.id)
    setIsAddingNew(false)
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Image
              src="https://respect.sa/assets/images/logo.png"
              alt="Respect Logo"
              width={80}
              height={40}
              className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
            />
            <h1 className="text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              - إدارة أفراد الشرطة
            </h1>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
          >
            <LogOut className="w-4 h-4 ml-2" />
            تسجيل الخروج
          </Button>
        </div>

        {/* Add/Edit Form */}
        {(isAddingNew || editingId) && (
          <Card className="mb-8 bg-card/80 backdrop-blur-xl border-primary/30">
            <CardHeader>
              <CardTitle className="text-white">{editingId ? "تعديل الشخص" : "إضافة شخص جديد"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">الاسم</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-background/50 border-primary/30 text-white"
                    placeholder="أدخل الاسم"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">الرتبة</label>
                  <Input
                    value={formData.rank}
                    onChange={(e) => setFormData((prev) => ({ ...prev, rank: e.target.value }))}
                    className="bg-background/50 border-primary/30 text-white"
                    placeholder="أدخل الرتبة"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">الفئة</label>
                  <Select
                    value={formData.category}
                    onValueChange={(value: Personnel["category"]) =>
                      setFormData((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger className="bg-background/50 border-primary/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leadership">القيادات</SelectItem>
                      <SelectItem value="officers">الضباط</SelectItem>
                      <SelectItem value="ncos">ضباط الصف</SelectItem>
                      <SelectItem value="soldiers">الجنود</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">رقم الهوية</label>
                  <Input
                    value={formData.idNumber}
                    onChange={(e) => setFormData((prev) => ({ ...prev, idNumber: e.target.value }))}
                    className="bg-background/50 border-primary/30 text-white"
                    placeholder="أدخل رقم الهوية"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">رابط اليوتيوب</label>
                  <Input
                    value={formData.youtube}
                    onChange={(e) => setFormData((prev) => ({ ...prev, youtube: e.target.value }))}
                    className="bg-background/50 border-primary/30 text-white"
                    placeholder="https://youtube.com/@username"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium mb-2 block">رابط كيك</label>
                  <Input
                    value={formData.kick}
                    onChange={(e) => setFormData((prev) => ({ ...prev, kick: e.target.value }))}
                    className="bg-background/50 border-primary/30 text-white"
                    placeholder="https://kick.com/username"
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">الصورة</label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg cursor-pointer transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    رفع صورة
                  </label>
                  {formData.image && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-primary/30">
                      <Image
                        src={formData.image || "/placeholder.svg"}
                        alt="Preview"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">النبذة</label>
                <Textarea
                  value={formData.bio}
                  onChange={(e) => setFormData((prev) => ({ ...prev, bio: e.target.value }))}
                  className="bg-background/50 border-primary/30 text-white"
                  placeholder="أدخل نبذة عن الشخص"
                  rows={3}
                />
              </div>

              <div className="flex gap-2">
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                  <Save className="w-4 h-4 ml-2" />
                  حفظ
                </Button>
                <Button onClick={resetForm} variant="outline" className="border-gray-500 text-gray-300 bg-transparent">
                  <X className="w-4 h-4 ml-2" />
                  إلغاء
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add New Button */}
        {!isAddingNew && !editingId && (
          <div className="mb-6">
            <Button onClick={() => setIsAddingNew(true)} className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 ml-2" />
              إضافة شخص جديد
            </Button>
          </div>
        )}

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="personnel-list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {personnel.map((person, index) => (
                  <Draggable key={person.id} draggableId={person.id} index={index}>
                    {(provided, snapshot) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`bg-card/80 backdrop-blur-sm border-primary/30 transition-all duration-300 ${
                          snapshot.isDragging
                            ? "shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105"
                            : "hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:border-primary/60"
                        }`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div {...provided.dragHandleProps} className="cursor-grab active:cursor-grabbing">
                                <GripVertical className="w-4 h-4 text-primary" />
                              </div>
                              <Badge variant="outline" className="border-primary text-primary bg-primary/20">
                                {person.category === "leadership"
                                  ? "قيادة"
                                  : person.category === "officers"
                                    ? "ضابط"
                                    : person.category === "ncos"
                                      ? "ضابط صف"
                                      : "جندي"}
                              </Badge>
                            </div>
                            <div className="flex gap-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => startEdit(person)}
                                className="text-primary hover:bg-primary/10"
                              >
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => handleDelete(person.id)}
                                className="text-red-400 hover:bg-red-500/10"
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center space-y-3">
                            {person.image && (
                              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-primary/50">
                                <Image
                                  src={person.image || "/placeholder.svg"}
                                  alt={person.name}
                                  width={64}
                                  height={64}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <h3 className="text-white font-semibold text-lg">{person.name}</h3>
                              <p className="text-white/80 text-sm">{person.rank}</p>
                              <p className="text-white/70 text-xs">#{person.idNumber}</p>
                            </div>
                            {person.bio && <p className="text-white/70 text-xs line-clamp-2">{person.bio}</p>}
                            <div className="flex justify-center gap-2 text-xs">
                              {person.youtube && <span className="text-red-400">YouTube</span>}
                              {person.kick && <span className="text-green-400">Kick</span>}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  )
}
