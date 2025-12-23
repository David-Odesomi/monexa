"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CustomForm } from "@/components/custom-form"
import { HeroBackground } from "@/components/hero-background"

export default function LoginPage() {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-background overflow-hidden p-4">
      <HeroBackground />
      
      <div className="absolute top-8 left-8 z-20">
        <Button variant="ghost" size="sm" asChild className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center z-10">
        
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
              Brew peace,<br />
              <span className="text-primary">track progress.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              へいわをいれて、しんちょくをたどる。
            </p>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto lg:mx-0">
            Sign in to access your dashboard and continue your journey towards financial freedom.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md backdrop-blur-sm">
                 <CustomForm />
            </div>
        </div>
      </div>
    </div>
  )
}