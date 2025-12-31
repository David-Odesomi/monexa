"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Users, TrendingUp, Shield, Smartphone, GraduationCap, ArrowRight, Wallet, PieChart } from "lucide-react"
import { HeroBackground } from "@/components/hero-background"
import { CustomForm } from "@/components/custom-form"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-background">
        <HeroBackground />
        
        {/* Floating 3D Elements */}
        <div className="absolute top-20 right-[10%] w-24 h-24 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-xl opacity-60 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-[10%] w-32 h-32 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-xl opacity-40 animate-float" style={{ animationDelay: "2s" }} />

        <ScrollReveal>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 text-black">
              Master Your Money with <span className="text-gradient-premium">Monexa</span>
            </h1>
            <p className="text-lg md:text-xl text-primary/70 font-medium mb-8 tracking-wide">お金をマスターする</p>
            <p className="text-2xl md:text-3xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Simplifying finance for everyone. Track, save, and grow your wealth with the most intuitive platform on the market.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="px-10 py-6 text-xl rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90" asChild>
                <Link href="/login">Get Started Free</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-10 py-6 text-xl rounded-full border-2 hover:bg-primary/5" asChild>
                <Link href="/demo">View Demo</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse-glow"></div>
      </section>

      {/* Social Proof Metrics Banner */}
      <section className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              <div className="flex flex-col items-center">
                <Users className="w-8 h-8 mb-2 opacity-90 animate-float" style={{ animationDuration: "4s" }} />
                <p className="text-3xl font-bold">50,000+</p>
                <p className="text-sm opacity-80">Students Trust Monexa</p>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="w-8 h-8 mb-2 opacity-90 animate-float" style={{ animationDuration: "5s" }} />
                <p className="text-3xl font-bold">₦2M+</p>
                <p className="text-sm opacity-80">Managed Monthly</p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 mb-2 opacity-90 animate-float" style={{ animationDuration: "6s" }} />
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-80">Secure Transactions</p>
              </div>
              <div className="flex flex-col items-center">
                <GraduationCap className="w-8 h-8 mb-2 opacity-90 animate-float" style={{ animationDuration: "7s" }} />
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm opacity-80">Partner Universities</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* University Partnerships */}
      <section className="py-12 border-b border-border/50 bg-white/50 backdrop-blur-sm">
        <ScrollReveal>
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by students from</p>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-70 hover:opacity-100 transition-opacity duration-500">
               <div className="flex items-center gap-2 font-bold text-xl text-black">
                  <GraduationCap className="w-6 h-6" /> Redeemer's University
               </div>
               <div className="flex items-center gap-2 font-bold text-xl text-black">
                  <GraduationCap className="w-6 h-6" /> Joseph Ayo Babalola University
               </div>
               <div className="flex items-center gap-2 font-bold text-xl text-black">
                  <GraduationCap className="w-6 h-6" /> Babcock University
               </div>
               <div className="flex items-center gap-2 font-bold text-xl text-black">
                  <GraduationCap className="w-6 h-6" /> Covenant University
               </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 relative">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-black">Everything you need to succeed</h2>
              <p className="text-sm text-primary/60 font-medium mb-2">成功に必要なすべて</p>
              <p className="text-lg text-muted-foreground">
                Powerful tools designed to give you complete control over your financial life.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="glass-card h-full transition-transform hover:-translate-y-2 hover:shadow-xl duration-300 border-t-4 border-t-primary/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <CardTitle className="text-xl">Smart Budgeting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">Automated categorization and predictive budgeting to help you save more without the effort.</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card className="glass-card h-full transition-transform hover:-translate-y-2 hover:shadow-xl duration-300 border-t-4 border-t-purple-500/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 text-purple-600 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <CardTitle className="text-xl">Investment Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">Real-time updates on all your investments in one unified dashboard.</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Card className="glass-card h-full transition-transform hover:-translate-y-2 hover:shadow-xl duration-300 border-t-4 border-t-green-500/20">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4 text-green-600 shadow-sm">
                     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                  </div>
                  <CardTitle className="text-xl">Bank-Grade Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">Your data is encrypted and protected with industry-leading security protocols.</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Feature Preview with Visuals */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-l from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                 <h2 className="text-4xl font-bold tracking-tight mb-6 text-black text-left leading-tight">
                    Experience financial clarity like never before
                 </h2>
                 <p className="text-lg text-muted-foreground mb-8 text-left leading-relaxed">
                    Our intuitive dashboard gives you a bird's-eye view of your finances. 
                    Track every Naira, set smart budgets, and watch your savings grow.
                 </p>
                 <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <Check className="w-5 h-5" />
                       </div>
                       <span className="font-medium text-lg">Real-time spending alerts</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <Check className="w-5 h-5" />
                       </div>
                       <span className="font-medium text-lg">Visual expense breakdown</span>
                    </li>
                    <li className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <Check className="w-5 h-5" />
                       </div>
                       <span className="font-medium text-lg">Goal progress tracking</span>
                    </li>
                 </ul>
                 <Button size="lg" className="px-8 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                    <Link href="/dashboard">Explore the Dashboard <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                 </Button>
              </div>
              <div className="w-full md:w-1/2 relative perspective-1000">
                 <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
                 {/* 3D Tilted Card Effect */}
                 <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-all duration-700 ease-out-back">
                    <div className="h-10 bg-muted/50 border-b border-white/20 flex items-center px-4 gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="p-8">
                       <div className="flex gap-4 mb-8">
                          <div className="w-1/3 h-28 rounded-xl bg-primary/5 p-4 border border-dashed border-primary/20 animate-pulse" style={{ animationDelay: "0ms" }}></div>
                          <div className="w-1/3 h-28 rounded-xl bg-primary/5 p-4 border border-dashed border-primary/20 animate-pulse" style={{ animationDelay: "200ms" }}></div>
                          <div className="w-1/3 h-28 rounded-xl bg-primary/5 p-4 border border-dashed border-primary/20 animate-pulse" style={{ animationDelay: "400ms" }}></div>
                       </div>
                       <div className="flex gap-4">
                          <div className="w-2/3 h-56 rounded-xl bg-muted/30 p-4 border border-dashed border-primary/20"></div>
                          <div className="w-1/3 h-56 rounded-xl bg-muted/30 p-4 border border-dashed border-primary/20"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Student-Specific Use Cases */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-black">Built for student life</h2>
              <p className="text-lg text-muted-foreground">
                Tackle the unique financial challenges of university with tools designed just for you.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="glass-card h-full hover:-translate-y-2 hover:shadow-xl transition-all border-none">
                 <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                       <Wallet className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Track Your Allowance</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">Make your monthly allowance last longer. Track daily spending and know exactly how much you have left.</p>
                 </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Card className="glass-card h-full hover:-translate-y-2 hover:shadow-xl transition-all border-none">
                 <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                       <PieChart className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Overview of Expenses</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">Visualize your spending habits with intuitive charts and breakdown. See exactly where your money goes.</p>
                 </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Card className="glass-card h-full hover:-translate-y-2 hover:shadow-xl transition-all border-none">
                 <CardHeader>
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                       <GraduationCap className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">Save for Study Materials</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground">Set aside money for textbooks, laptops, or exams. Our savings goals help you reach your targets seamlessly.</p>
                 </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-black">Financial freedom in 3 steps</h2>
              <p className="text-lg text-muted-foreground">
                Getting started with Monexa is simple, fast, and secure.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10"></div>
            
            <ScrollReveal delay={100} className="h-full">
              <div className="flex flex-col items-center text-center group">
                 <div className="w-28 h-28 bg-card border-8 border-background rounded-full flex items-center justify-center shadow-xl mb-8 z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-400">1</span>
                 </div>
                 <h3 className="text-xl font-bold mb-3">Sign Up in Seconds</h3>
                 <p className="text-muted-foreground leading-relaxed px-4">Create your free account using your university email. No credit card required.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="h-full">
              <div className="flex flex-col items-center text-center group">
                 <div className="w-28 h-28 bg-card border-8 border-background rounded-full flex items-center justify-center shadow-xl mb-8 z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-400">2</span>
                 </div>
                 <h3 className="text-xl font-bold mb-3">Connect Your Accounts</h3>
                 <p className="text-muted-foreground leading-relaxed px-4">Securely link your bank accounts and mobile wallets to track everything in one place.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} className="h-full">
              <div className="flex flex-col items-center text-center group">
                 <div className="w-28 h-28 bg-card border-8 border-background rounded-full flex items-center justify-center shadow-xl mb-8 z-10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-400">3</span>
                 </div>
                 <h3 className="text-xl font-bold mb-3">Master Your Money</h3>
                 <p className="text-muted-foreground leading-relaxed px-4">Get insights, set budgets, and watch your financial health improve every day.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Before vs After Monexa */}
      <section className="py-24 bg-muted/30">
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-16 text-black">Why students choose Monexa</h2>
            <div className="grid md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl mx-auto max-w-6xl">
              <div className="bg-red-50/80 backdrop-blur-sm p-12 md:p-16 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-red-100">
                 <h3 className="text-3xl font-bold text-red-800 mb-10">Before Monexa</h3>
                 <ul className="space-y-8 text-left w-full max-w-sm">
                    <li className="flex items-center gap-5 text-red-900/70">
                       <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 shadow-sm text-red-600 font-bold">✕</span>
                       <span className="font-medium text-lg">Wondering where money went</span>
                    </li>
                    <li className="flex items-center gap-5 text-red-900/70">
                       <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 shadow-sm text-red-600 font-bold">✕</span>
                       <span className="font-medium text-lg">Stressful borrowing from friends</span>
                    </li>
                    <li className="flex items-center gap-5 text-red-900/70">
                       <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 shadow-sm text-red-600 font-bold">✕</span>
                       <span className="font-medium text-lg">Zero savings at semester end</span>
                    </li>
                    <li className="flex items-center gap-5 text-red-900/70">
                       <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 shadow-sm text-red-600 font-bold">✕</span>
                       <span className="font-medium text-lg">Spreadsheets that never update</span>
                    </li>
                 </ul>
              </div>
              <div className="bg-green-50/80 backdrop-blur-sm p-12 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/20 rounded-full blur-[80px] animate-pulse"></div>
                 <h3 className="text-3xl font-bold text-green-800 mb-10 relative z-10">With Monexa</h3>
                 <ul className="space-y-8 text-left w-full max-w-sm relative z-10">
                    <li className="flex items-center gap-5 text-green-900/80">
                       <span className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 shrink-0 shadow-sm">
                          <Check className="w-6 h-6" />
                       </span>
                       <span className="font-bold text-lg">Total clarity on spending</span>
                    </li>
                    <li className="flex items-center gap-5 text-green-900/80">
                       <span className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 shrink-0 shadow-sm">
                          <Check className="w-6 h-6" />
                       </span>
                       <span className="font-bold text-lg">Automated bill splitting</span>
                    </li>
                    <li className="flex items-center gap-5 text-green-900/80">
                       <span className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 shrink-0 shadow-sm">
                          <Check className="w-6 h-6" />
                       </span>
                       <span className="font-bold text-lg">Consistent monthly savings</span>
                    </li>
                    <li className="flex items-center gap-5 text-green-900/80">
                       <span className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 shrink-0 shadow-sm">
                          <Check className="w-6 h-6" />
                       </span>
                       <span className="font-bold text-lg">Real-time automatic tracking</span>
                    </li>
                 </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-black">Simple, transparent pricing</h2>
              <p className="text-sm text-primary/60 font-medium mb-2">シンプルで透明な価格設定</p>
              <p className="text-lg text-muted-foreground">
                Choose the plan that fits your needs. No hidden fees, ever.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            <ScrollReveal delay={100} className="h-full">
            <Card className="glass-card flex flex-col relative overflow-hidden h-full hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>For individuals just starting out</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold tracking-tight">$0</span>
                  <span className="text-muted-foreground text-xl">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-base text-muted-foreground">Income & expense tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-base text-muted-foreground">Simple dashboards overview</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-base text-muted-foreground">Basic budgeting tools</span>
                  </li>
                  <li className="flex items-center gap-3 opacity-50">
                    <Check className="h-5 w-5 text-muted-foreground" />
                    <span className="text-base text-muted-foreground">Limited goals and alerts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-12 text-lg" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={200} className="h-full">
            <Card className="glass-heavy flex flex-col relative overflow-hidden border-2 border-primary shadow-2xl scale-105 z-10 h-full">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-sm px-4 py-1.5 rounded-bl-xl font-bold tracking-wide">
                MOST POPULAR
              </div>
              <CardHeader>
                <CardTitle className="flex font-black text-3xl text-primary">Pro</CardTitle>
                <CardDescription>For serious money managers</CardDescription>
                <div className="mt-4">
                  <span className="text-6xl font-bold tracking-tight text-foreground">$8</span>
                  <span className="text-muted-foreground text-xl">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                   <li className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-0.5"><Check className="h-4 w-4 text-primary" /></div>
                    <span className="text-base font-medium">Advanced budgeting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-0.5"><Check className="h-4 w-4 text-primary" /></div>
                    <span className="text-base font-medium">Smart AI suggestions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-0.5"><Check className="h-4 w-4 text-primary" /></div>
                    <span className="text-base font-medium">Unlimited accounts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-0.5"><Check className="h-4 w-4 text-primary" /></div>
                    <span className="text-base font-medium">Unlimited history</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-0.5"><Check className="h-4 w-4 text-primary" /></div>
                    <span className="text-base font-medium">Custom goals</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">Start Free Trial</Button>
              </CardFooter>
            </Card>
            </ScrollReveal>

            <ScrollReveal delay={300} className="h-full">
            <Card className="glass-card flex flex-col relative overflow-hidden h-full hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl">Pro Max</CardTitle>
                <CardDescription>For teams and advisors</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold tracking-tight">$19</span>
                  <span className="text-muted-foreground text-xl">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-base text-muted-foreground">All Pro features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-base text-muted-foreground">Multi-user access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-base text-muted-foreground">Investment dashboard</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-base text-muted-foreground">Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-base text-muted-foreground">API Access</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full h-12 text-lg" variant="outline">Contact Sales</Button>
              </CardFooter>
            </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <ScrollReveal>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-black tracking-tight text-center mb-16 ">Trusted by thousands</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="glass-card border-none bg-white/60">
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-4 text-orange-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-xl italic mb-6 leading-relaxed text-foreground">"Monexa completely changed how I manage my finances. I finally feel in control of my money instead of it controlling me."</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">SJ</div>
                      <div>
                         <p className="font-bold text-foreground">Sarah Johnson</p>
                         <p className="text-sm text-muted-foreground">Small Business Owner</p>
                      </div>
                   </div>
                </CardContent>
              </Card>
              <Card className="glass-card border-none bg-white/60">
                <CardContent className="pt-8">
                   <div className="flex gap-1 mb-4 text-orange-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                  <p className="text-xl italic mb-6 leading-relaxed text-foreground">"The investment tracking is incredible. Seeing everything in one place gives me such peace of mind. Highly recommended!"</p>
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center font-bold text-purple-600">MC</div>
                      <div>
                         <p className="font-bold text-foreground">Michael Chen</p>
                         <p className="text-sm text-muted-foreground">Software Engineer</p>
                      </div>
                   </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-black">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8 hover:bg-white/40 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-black">Is Monexa secure?</h3>
                <p className="text-muted-foreground leading-relaxed">Yes, we use bank-level encryption (256-bit AES) to protect your data. We never store your banking credentials and undergo regular security audits.</p>
              </div>
              <div className="glass-card rounded-2xl p-8 hover:bg-white/40 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-black">Can I cancel anytime?</h3>
                <p className="text-muted-foreground leading-relaxed">Absolutely. You can cancel your subscription at any time with no penalties or hidden fees. We believe you should stay because you love the product.</p>
              </div>
              <div className="glass-card rounded-2xl p-8 hover:bg-white/40 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-black">Do you support international banks?</h3>
                <p className="text-muted-foreground leading-relaxed">We currently support over 10,000 financial institutions across the US, Canada, and UK, with more regions coming soon.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Join Section with Custom Form */}
      <section className="py-24 bg-gradient-to-t from-primary/10 to-transparent">
        <ScrollReveal>
          <div className="container mx-auto px-4 flex flex-col items-center">
              <h2 className="text-4xl font-bold tracking-tight text-center mb-8 text-black">Join the Future of Finance</h2>
              <p className="text-muted-foreground text-center max-w-2xl mb-12 text-lg">
                 Start your journey towards financial freedom today. It only takes a minute to sign up.
              </p>
              <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-primary/10">
                 <CustomForm />
              </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
