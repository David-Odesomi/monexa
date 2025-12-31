"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGrid, FileText, PieChart, Flag, GraduationCap, Settings, PiggyBank, LogOut, Moon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DashboardSidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", icon: LayoutGrid, label: "Overview" },
    { href: "/dashboard/transactions", icon: FileText, label: "Transactions" },
    { href: "/dashboard/budget", icon: PieChart, label: "Budget" },
    { href: "/dashboard/goals", icon: Flag, label: "Goals" },
    { href: "/dashboard/learn", icon: GraduationCap, label: "Learn" },
  ]

  return (
    <div className="w-64 h-screen fixed left-0 top-0 z-50 flex flex-col py-6 glass-heavy border-r-0">
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-10 pl-6 w-full animate-slide-up">
        <div className="h-10 w-10 bg-gradient-to-tr from-primary to-orange-400 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center text-primary-foreground transform transition-transform hover:scale-110 hover:rotate-3 duration-300">
           <PiggyBank className="w-6 h-6 fill-current" />
        </div>
        <div>
          <h1 className="font-bold text-xl leading-tight text-foreground tracking-tight">Monexa</h1>
          <p className="text-[10px] uppercase font-bold text-primary tracking-widest opacity-80">Premium</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full px-4 space-y-1.5 flex-1">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <div key={item.href} className="animate-slide-up" style={{ animationDelay: `${index * 50 + 100}ms` }}>
              <Button
                asChild
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 h-11 relative overflow-hidden transition-all duration-300 group",
                  isActive 
                    ? "bg-primary/10 text-primary hover:bg-primary/15" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/40 dark:hover:bg-white/5"
                )}
              >
                <Link href={item.href}>
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                  )}
                  <item.icon className={cn("w-5 h-5 transition-transform duration-300 group-hover:scale-110", isActive && "fill-current/20")} />
                  <span className="font-medium tracking-wide">{item.label}</span>
                </Link>
              </Button>
            </div>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="w-full px-4 mt-auto space-y-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
        <div className="p-4 rounded-2xl glass-card border-none bg-gradient-to-br from-primary/5 to-purple-500/5 group">
           <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground">Premium Plan</span>
              <span className="text-xs font-bold text-primary">PRO</span>
           </div>
           <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse-glow" />
           </div>
           <p className="text-[10px] text-muted-foreground mt-2">75% of goals reached!</p>
        </div>

        <div className="pt-2 border-t border-border/40">
           <Button asChild variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
              <Link href="/dashboard/settings">
                 <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                 <span className="font-medium">Settings</span>
              </Link>
           </Button>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/40 transition-colors cursor-pointer group">
            <div className="relative">
                <Avatar className="h-10 w-10 border-2 border-white/50 shadow-sm ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/50">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm" />
            </div>
            <div className="flex-1 overflow-hidden">
                <p className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">Alex Morgan</p>
                <p className="text-xs text-muted-foreground truncate">alex@monexa.com</p>
            </div>
            <LogOut className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  )
}
