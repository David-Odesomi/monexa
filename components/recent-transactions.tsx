"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export function RecentTransactions() {
  const transactions = [
    {
      initials: "NF",
      name: "Netflix Subscription",
      email: "Entertainment",
      amount: "-$15.00",
      date: "Today, 10:23 AM",
      type: "expense",
      category: "subscription"
    },
    {
      initials: "UB",
      name: "Uber Ride",
      email: "Transportation",
      amount: "-$24.50",
      date: "Yesterday, 8:45 PM",
      type: "expense",
      category: "transport"
    },
    {
      initials: "SD",
      name: "Stipend Deposit",
      email: "Income",
      amount: "+$1,200.00",
      date: "Dec 30, 9:00 AM",
      type: "income",
      category: "income"
    },
    {
      initials: "SB",
      name: "Starbucks",
      email: "Food & Drink",
      amount: "-$5.40",
      date: "Dec 29, 3:15 PM",
      type: "expense",
      category: "food"
    },
    {
        initials: "AM",
        name: "Amazon Purchase",
        email: "Shopping",
        amount: "-$142.00",
        date: "Dec 28, 6:30 PM",
        type: "expense",
        category: "shopping"
    }
  ]

  const getCategoryColor = (category: string) => {
      switch(category) {
          case 'income': return 'bg-green-500/10 text-green-500';
          case 'subscription': return 'bg-red-500/10 text-red-500';
          case 'transport': return 'bg-blue-500/10 text-blue-500';
          case 'food': return 'bg-orange-500/10 text-orange-500';
          case 'shopping': return 'bg-purple-500/10 text-purple-500';
          default: return 'bg-gray-100 text-gray-500';
      }
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction, index) => (
        <div 
            key={index} 
            className="flex items-center justify-between p-4 rounded-xl glass-card transition-all hover:bg-white/5 data-[state=open]:bg-muted animate-slide-up hover:translate-x-1"
            style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-4">
            <div className={cn("h-10 w-10 rounded-full flex items-center justify-center font-bold text-xs ring-2 ring-white/20", getCategoryColor(transaction.category))}>
                {transaction.initials}
            </div>
            <div className="grid gap-0.5">
              <p className="text-sm font-medium leading-none text-foreground">{transaction.name}</p>
              <p className="text-xs text-muted-foreground">{transaction.email} • {transaction.date}</p>
            </div>
          </div>
          <div className={cn("font-bold text-sm", transaction.type === 'income' ? 'text-green-500' : 'text-foreground')}>
            {transaction.amount}
          </div>
        </div>
      ))}
    </div>
  )
}
