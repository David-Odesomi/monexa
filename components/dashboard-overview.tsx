"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, PiggyBank, CreditCard } from "lucide-react"

export function DashboardOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="glass-card border-none relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold animate-count-up">$45,231.89</div>
          <p className="text-xs text-muted-foreground mt-1 flex items-center">
            <span className="text-green-500 flex items-center font-semibold">
               <ArrowUpRight className="w-3 h-3 mr-1" /> +20.1%
            </span>
            <span className="ml-1 opacity-70">from last month</span>
          </p>
          {/* Sparkline */}
          <div className="h-10 mt-4 w-full opacity-50 group-hover:opacity-100 transition-opacity">
             <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,10 Q25,20 50,5 T100,10" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                <path d="M0,10 Q25,20 50,5 T100,10 V20 H0 Z" fill="url(#gradient-primary)" opacity="0.2" />
                <defs>
                   <linearGradient id="gradient-primary" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" className="text-primary" />
                      <stop offset="100%" stopColor="transparent" />
                   </linearGradient>
                </defs>
             </svg>
          </div>
        </CardContent>
      </Card>
      
      <Card className="glass-card border-none relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all duration-500" />
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Income</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground group-hover:text-green-500 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold animate-count-up" style={{ animationDelay: "100ms" }}>$12,450.00</div>
          <p className="text-xs text-muted-foreground mt-1 flex items-center">
            <span className="text-green-500 flex items-center font-semibold">
               <ArrowUpRight className="w-3 h-3 mr-1" /> +4.5%
            </span>
            <span className="ml-1 opacity-70">from last month</span>
          </p>
           {/* Sparkline */}
           <div className="h-10 mt-4 w-full opacity-50 group-hover:opacity-100 transition-opacity">
             <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q20,5 40,15 T100,0" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-500" />
             </svg>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card border-none relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all duration-500" />
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Expenses</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground group-hover:text-red-500 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold animate-count-up" style={{ animationDelay: "200ms" }}>$8,230.50</div>
          <p className="text-xs text-muted-foreground mt-1 flex items-center">
            <span className="text-red-500 flex items-center font-semibold">
               <ArrowDownRight className="w-3 h-3 mr-1" /> +12%
            </span>
            <span className="ml-1 opacity-70">from last month</span>
          </p>
          <div className="h-10 mt-4 w-full opacity-50 group-hover:opacity-100 transition-opacity">
             <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,5 Q30,15 60,5 T100,12" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500" />
             </svg>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-card border-none relative overflow-hidden group">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
          <PiggyBank className="h-4 w-4 text-muted-foreground group-hover:text-purple-500 transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold animate-count-up" style={{ animationDelay: "300ms" }}>$3,200.00</div>
          <div className="w-full bg-muted rounded-full h-2.5 mt-2 overflow-hidden">
             <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full w-[65%] animate-pulse-glow" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">65% of $5,000 goal</p>
        </CardContent>
      </Card>
    </div>
  )
}
