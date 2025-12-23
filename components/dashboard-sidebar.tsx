"use client"

import Link from "next/link"
import { LayoutGrid, FileText, PieChart, Flag, GraduationCap, Settings, PiggyBank } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function DashboardSidebar() {
  return (
    <div className="w-64 h-screen bg-background border-r border-border flex flex-col items-center py-8 fixed left-0 top-0">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10 pl-6 w-full">
        <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
           <PiggyBank className="w-5 h-5 fill-current" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight text-foreground">Monexa</h1>
          <p className="text-xs text-muted-foreground">Student Finance</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full px-4 space-y-2 flex-1">
        <Button asChild className="w-full justify-start gap-3">
          <Link href="/dashboard">
            <LayoutGrid className="w-5 h-5" />
            <span className="font-medium">Overview</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="w-full justify-start gap-3">
          <Link href="/dashboard/transactions">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Transactions</span>
          </Link>
        </Button>
        
        <Button asChild variant="ghost" className="w-full justify-start gap-3">
          <Link href="/dashboard/budget">
            <PieChart className="w-5 h-5" />
            <span className="font-medium">Budget</span>
          </Link>
        </Button>

        <Button asChild variant="ghost" className="w-full justify-start gap-3">
          <Link href="/dashboard/goals">
            <Flag className="w-5 h-5" />
            <span className="font-medium">Goals</span>
          </Link>
        </Button>

        <Button asChild variant="ghost" className="w-full justify-start gap-3">
          <Link href="/dashboard/learn">
            <GraduationCap className="w-5 h-5" />
            <span className="font-medium">Learn</span>
          </Link>
        </Button>
      </nav>

      {/* Bottom Section */}
      <div className="w-full px-4 mt-auto">
        <Button asChild variant="ghost" className="w-full justify-start gap-3 mb-6">
          <Link href="/dashboard/settings">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>
        </Button>

        <div className="flex items-center gap-3 p-2">
            <Avatar className="h-10 w-10 border-2 border-border shadow-sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm font-bold text-foreground">Alex Morgan</p>
                <p className="text-xs text-primary">Premium Plan</p>
            </div>
        </div>
      </div>
    </div>
  )
}
