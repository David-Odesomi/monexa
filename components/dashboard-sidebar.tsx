"use client"

import Link from "next/link"
import { LayoutGrid, FileText, PieChart, Flag, GraduationCap, Settings, PiggyBank } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardSidebar() {
  return (
    <div className="w-64 h-screen bg-[#FBFBFB] border-r flex flex-col items-center py-8 fixed left-0 top-0">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10 pl-6 w-full">
        <div className="h-8 w-8 bg-[#EF3A5D] rounded-full flex items-center justify-center text-white">
           <PiggyBank className="w-5 h-5 fill-current" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">Monexa</h1>
          <p className="text-xs text-muted-foreground">Student Finance</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full px-4 space-y-2 flex-1">
        <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-[#EF3A5D] text-white rounded-xl shadow-[0_4px_12px_rgba(239,58,93,0.3)] transition-all">
          <LayoutGrid className="w-5 h-5" />
          <span className="font-medium">Overview</span>
        </Link>
        
        <Link href="/dashboard/transactions" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-all">
          <FileText className="w-5 h-5" />
          <span className="font-medium">Transactions</span>
        </Link>
        
        <Link href="/dashboard/budget" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-all">
          <PieChart className="w-5 h-5" />
          <span className="font-medium">Budget</span>
        </Link>

        <Link href="/dashboard/goals" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-all">
          <Flag className="w-5 h-5" />
          <span className="font-medium">Goals</span>
        </Link>

        <Link href="/dashboard/learn" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-all">
          <GraduationCap className="w-5 h-5" />
          <span className="font-medium">Learn</span>
        </Link>
      </nav>

      {/* Bottom Section */}
      <div className="w-full px-4 mt-auto">
        <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-gray-100 rounded-xl transition-all mb-6">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </Link>

        <div className="flex items-center gap-3 p-2">
            <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm font-bold text-gray-900">Alex Morgan</p>
                <p className="text-xs text-[#EF3A5D]">Premium Plan</p>
            </div>
        </div>
      </div>
    </div>
  )
}
