export interface PersonnelMember {
  id: string
  name: string
  rank: string
  idNumber: string
  category: "leadership" | "officers" | "ncos" | "soldiers"
  bio?: string
  youtube?: string
  kick?: string
  image?: string
}

const STORAGE_KEY = "personnel_data"
const BACKUP_KEY = "personnel_backup"

// Default personnel data
const defaultPersonnel: PersonnelMember[] = [
  {
    id: "1",
    name: "اللواء أحمد محمد العتيبي",
    rank: "لواء",
    idNumber: "P001",
    category: "leadership",
    bio: "قائد عام الشرطة مع خبرة 25 عاماً في الأمن والحماية",
    youtube: "https://youtube.com/@general-ahmed",
    kick: "https://kick.com/general-ahmed",
    image: "/professional-police-general-portrait.png",
  },
  {
    id: "2",
    name: "العميد فاطمة سالم الحربي",
    rank: "عميد",
    idNumber: "P002",
    category: "leadership",
    bio: "نائب القائد العام ومختصة في الأمن السيبراني",
    youtube: "https://youtube.com/@colonel-fatima",
    kick: "https://kick.com/colonel-fatima",
    image: "/professional-female-police-brigadier-portrait.png",
  },
  {
    id: "3",
    name: "العقيد خالد عبدالله القحطاني",
    rank: "عقيد",
    idNumber: "P003",
    category: "leadership",
    bio: "رئيس قسم العمليات الخاصة",
    youtube: "https://youtube.com/@colonel-khalid",
    kick: "https://kick.com/colonel-khalid",
    image: "/professional-police-colonel-portrait.png",
  },
  {
    id: "4",
    name: "المقدم نورا إبراهيم الدوسري",
    rank: "مقدم",
    idNumber: "P004",
    category: "officers",
    bio: "رئيس قسم التحقيقات الجنائية",
    youtube: "https://youtube.com/@major-nora",
    kick: "https://kick.com/major-nora",
    image: "/professional-female-police-lieutenant-colonel-port.png",
  },
  {
    id: "5",
    name: "الرائد سعد محمد الغامدي",
    rank: "رائد",
    idNumber: "P005",
    category: "officers",
    bio: "مسؤول العمليات الميدانية",
    youtube: "https://youtube.com/@major-saad",
    kick: "https://kick.com/major-saad",
    image: "/professional-police-major-portrait.png",
  },
  {
    id: "6",
    name: "النقيب مريم أحمد الشهري",
    rank: "نقيب",
    idNumber: "P006",
    category: "officers",
    bio: "خبيرة الأمن السيبراني والتكنولوجيا",
    youtube: "https://youtube.com/@captain-mariam",
    kick: "https://kick.com/captain-mariam",
    image: "/professional-female-police-captain-cybersecurity-p.png",
  },
  {
    id: "7",
    name: "الملازم أول عبدالرحمن سالم",
    rank: "ملازم أول",
    idNumber: "P007",
    category: "officers",
    bio: "مسؤول المرور والسلامة العامة",
    youtube: "https://youtube.com/@lieutenant-abdulrahman",
    kick: "https://kick.com/lieutenant-abdulrahman",
    image: "/professional-police-first-lieutenant-traffic-portr.png",
  },
  {
    id: "8",
    name: "الملازم هند محمد الزهراني",
    rank: "ملازم",
    idNumber: "P008",
    category: "officers",
    bio: "مختصة الشؤون الإدارية والموارد البشرية",
    youtube: "https://youtube.com/@lieutenant-hind",
    kick: "https://kick.com/lieutenant-hind",
    image: "/professional-female-police-lieutenant-administrati.png",
  },
]

export class PersonnelStorage {
  // Load personnel data from localStorage
  static loadPersonnel(): PersonnelMember[] {
    if (typeof window === "undefined") return defaultPersonnel

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        // Validate data structure
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed
        }
      }
    } catch (error) {
      console.error("Error loading personnel data:", error)
      // Try to load from backup
      try {
        const backup = localStorage.getItem(BACKUP_KEY)
        if (backup) {
          const parsedBackup = JSON.parse(backup)
          if (Array.isArray(parsedBackup)) {
            return parsedBackup
          }
        }
      } catch (backupError) {
        console.error("Error loading backup data:", backupError)
      }
    }

    // Return default data if nothing else works
    this.savePersonnel(defaultPersonnel)
    return defaultPersonnel
  }

  // Save personnel data to localStorage with backup
  static savePersonnel(personnel: PersonnelMember[]): boolean {
    if (typeof window === "undefined") return false

    try {
      // Create backup of current data before saving new data
      const currentData = localStorage.getItem(STORAGE_KEY)
      if (currentData) {
        localStorage.setItem(BACKUP_KEY, currentData)
      }

      // Save new data
      localStorage.setItem(STORAGE_KEY, JSON.stringify(personnel))

      // Add timestamp for tracking
      localStorage.setItem(`${STORAGE_KEY}_timestamp`, new Date().toISOString())

      window.dispatchEvent(new CustomEvent("personnelUpdated"))

      return true
    } catch (error) {
      console.error("Error saving personnel data:", error)
      return false
    }
  }

  // Add new personnel member
  static addPersonnel(member: Omit<PersonnelMember, "id">): PersonnelMember {
    const personnel = this.loadPersonnel()
    const newMember: PersonnelMember = {
      ...member,
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    }

    personnel.push(newMember)
    this.savePersonnel(personnel)
    return newMember
  }

  // Update existing personnel member
  static updatePersonnel(id: string, updates: Partial<PersonnelMember>): boolean {
    const personnel = this.loadPersonnel()
    const index = personnel.findIndex((p) => p.id === id)

    if (index === -1) return false

    personnel[index] = { ...personnel[index], ...updates }
    return this.savePersonnel(personnel)
  }

  // Delete personnel member
  static deletePersonnel(id: string): boolean {
    const personnel = this.loadPersonnel()
    const filtered = personnel.filter((p) => p.id !== id)

    if (filtered.length === personnel.length) return false

    return this.savePersonnel(filtered)
  }

  // Get personnel by category
  static getPersonnelByCategory(category: PersonnelMember["category"]): PersonnelMember[] {
    return this.loadPersonnel().filter((p) => p.category === category)
  }

  // Search personnel
  static searchPersonnel(query: string): PersonnelMember[] {
    const personnel = this.loadPersonnel()
    const lowercaseQuery = query.toLowerCase()

    return personnel.filter(
      (p) =>
        p.name.toLowerCase().includes(lowercaseQuery) ||
        p.rank.toLowerCase().includes(lowercaseQuery) ||
        p.idNumber.toLowerCase().includes(lowercaseQuery) ||
        (p.bio && p.bio.toLowerCase().includes(lowercaseQuery)),
    )
  }

  // Export data for backup
  static exportData(): string {
    const personnel = this.loadPersonnel()
    const exportData = {
      personnel,
      timestamp: new Date().toISOString(),
      version: "1.0",
    }
    return JSON.stringify(exportData, null, 2)
  }

  // Import data from backup
  static importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData)

      if (data.personnel && Array.isArray(data.personnel)) {
        return this.savePersonnel(data.personnel)
      }

      return false
    } catch (error) {
      console.error("Error importing data:", error)
      return false
    }
  }

  // Reset to default data
  static resetToDefault(): boolean {
    return this.savePersonnel(defaultPersonnel)
  }

  // Get storage info
  static getStorageInfo() {
    if (typeof window === "undefined") return null

    const timestamp = localStorage.getItem(`${STORAGE_KEY}_timestamp`)
    const personnel = this.loadPersonnel()

    return {
      totalPersonnel: personnel.length,
      lastUpdated: timestamp ? new Date(timestamp) : null,
      categories: {
        leadership: personnel.filter((p) => p.category === "leadership").length,
        officers: personnel.filter((p) => p.category === "officers").length,
        ncos: personnel.filter((p) => p.category === "ncos").length,
        soldiers: personnel.filter((p) => p.category === "soldiers").length,
      },
    }
  }
}
