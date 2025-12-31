"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomForm } from "@/components/custom-form"
import { HeroBackground } from "@/components/hero-background"

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-background overflow-hidden p-4">
      <HeroBackground />
      
      {/* Floating 3D Elements */}
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-gradient-to-br from-primary to-orange-400 rounded-full blur-2xl opacity-40 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-[10%] w-48 h-48 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "2s" }} />

      <div className="absolute top-8 left-8 z-20">
        <Button variant="ghost" size="sm" asChild className="gap-2 glass-card hover:bg-white/40">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight">
              Brew peace,<br />
              <span className="text-gradient-premium">track progress.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide">
              へいわをいれて、しんちょくをたどる。
            </p>
          </div>
          <p className="text-lg text-muted-foreground/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Sign in to access your premium dashboard and continue your journey towards financial freedom with Monexa.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start pt-4">
             <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">U{i}</div>
                ))}
             </div>
             <p className="text-sm flex items-center text-muted-foreground">Join 50,000+ students</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="w-full max-w-md glass-heavy p-8 rounded-2xl border border-white/20 shadow-2xl relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
                 <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h2>
                    <p className="text-muted-foreground text-sm">Please enter your details to sign in.</p>
                 </div>
                 <CustomForm />
                 <div className="mt-6 text-center text-sm">
                    <span className="text-muted-foreground">Don't have an account? </span>
                    <Link href="/signup" className="text-primary font-semibold hover:underline">Sign up for free</Link>
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}