"use client"

import { useState } from "react"
import { ChartRadarDots } from "@/components/chartRadar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { RecentTransactions } from "@/components/recent-transactions"
import { Button } from "@/components/ui/button"
import { PlusCircle, Download, SlidersHorizontal, Bell } from "lucide-react"
import {
    Dialog, DialogClose, DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue
} from "@/components/ui/select"

export default function Dashboard() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [form, setForm] = useState({
        amount: "",
        date: "",
        description: "",
        category: "",
        type: "Expense"
    })

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        // Logic to add invoice would go here
        setDialogOpen(false)
        setForm({ amount: "", date: "", description: "", category: "", type: "Expense" })
    }

    return (
        <div className="flex-1 w-full flex flex-col gap-8 p-8 md:p-12 pl-72 bg-gradient-to-br from-background via-almond-cream-100/20 to-soft-blush-50/10 min-h-screen relative overflow-hidden">
             {/* Ambient Background */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
             <div className="absolute bottom-0 left-20 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] -z-10 animate-float" />
            
            {/* Header */}
            <div className="flex items-center justify-between animate-slide-up">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">Welcome back, Alex! 👋</h2>
                    <p className="text-muted-foreground mt-1">Here's what's happening with your money today.</p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="glass-card hover:bg-white/50 rounded-full h-10 w-10">
                       <Bell className="w-5 h-5 text-muted-foreground" />
                    </Button>
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="glass-heavy hover:bg-white/40 text-foreground border-primary/20 hover:scale-105 transition-all shadow-lg shadow-primary/10 gap-2">
                                <PlusCircle className="w-4 h-4" /> Add Transaction
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] glass-heavy border-none">
                             {/* Form Content simplified for visual demo */}
                            <DialogHeader>
                                <DialogTitle>Log Transaction</DialogTitle>
                                <DialogDescription>Record a new income or expense.</DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <Label>Amount</Label>
                                    <Input placeholder="$0.00" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} className="glass-card border-none" />
                                </div>
                                <div className="grid gap-2">
                                    <Label>Description</Label>
                                    <Input placeholder="e.g. Groceries" value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="glass-card border-none" />
                                </div>
                                <DialogFooter>
                                     <Button type="submit" className="w-full">Save</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Overview Cards */}
            <DashboardOverview />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
                
                {/* Left Column (Charts) */}
                <div className="lg:col-span-4 space-y-8">
                     <div className="glass-card p-6 rounded-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-foreground">Spending Analysis</h3>
                                <p className="text-sm text-muted-foreground">Category breakdown vs budget</p>
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 gap-1 text-muted-foreground">
                                <SlidersHorizontal className="w-4 h-4" /> Filter
                            </Button>
                        </div>
                        <div className="h-[350px] flex items-center justify-center relative">
                            {/* Radar Chart Integration */}
                            <ChartRadarDots />
                        </div>
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4">
                         <div className="glass-card p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:bg-white/20 transition-colors cursor-pointer">
                             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                 <Download className="w-6 h-6 text-blue-600" />
                             </div>
                             <h4 className="font-bold">Export Data</h4>
                             <p className="text-xs text-muted-foreground">Download CSV report</p>
                         </div>
                         <div className="glass-card p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:bg-white/20 transition-colors cursor-pointer">
                             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                                 <PlusCircle className="w-6 h-6 text-purple-600" />
                             </div>
                             <h4 className="font-bold">New Goal</h4>
                             <p className="text-xs text-muted-foreground">Set a savings target</p>
                         </div>
                     </div>
                </div>

                {/* Right Column (Transactions) */}
                <div className="lg:col-span-3">
                     <div className="glass-card p-6 rounded-2xl h-full">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-foreground">Recent Transactions</h3>
                             <Button variant="link" className="text-primary text-xs">View All</Button>
                        </div>
                        <RecentTransactions />
                     </div>
                </div>
            </div>
        </div>
    )
}