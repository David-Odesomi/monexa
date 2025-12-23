"use client"

import { Search, Bell } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-8">
      {/* Left Side - Welcome Message */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, Alex</h2>
        <p className="text-primary font-medium mt-1">You're on track this month. Keep it up!</p>
      </div>

      {/* Right Side - Search & Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="h-10 pl-10 pr-4 rounded-full bg-card border border-border text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
          />
        </div>
        
        <button className="h-10 w-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 transition-all">
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}
