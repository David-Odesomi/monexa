import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { HeroBackground } from "@/components/hero-background"
import { CustomForm } from "@/components/custom-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-background">
        <HeroBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4 text-black">
            Master Your Money with <span className="text-primary">Monexa</span>
          </h1>
          <p className="text-lg md:text-xl text-primary/70 font-medium mb-8">お金をマスターする</p>
          <p className="text-2xl md:text-3xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Simplifying finance for everyone. Track, save, and grow your wealth with the most intuitive platform on the market.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="px-10 py-6 text-xl" asChild>
              <Link href="/login">Get Started Free</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-6 text-xl" asChild>
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-black">Everything you need to succeed</h2>
            <p className="text-sm text-primary/60 font-medium mb-2">成功に必要なすべて</p>
            <p className="text-lg text-muted-foreground">
              Powerful tools designed to give you complete control over your financial life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <CardTitle>Smart Budgeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Automated categorization and predictive budgeting to help you save more without the effort.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </div>
                <CardTitle>Investment Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Real-time updates on all your investments in one unified dashboard.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                </div>
                <CardTitle>Bank-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your data is encrypted and protected with industry-leading security protocols.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-black">Simple, transparent pricing</h2>
            <p className="text-sm text-primary/60 font-medium mb-2">シンプルで透明な価格設定</p>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. No hidden fees, ever.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="flex flex-col relative overflow-hidden">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>For individuals just starting out</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Income & expense tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Simple dashboards for spending overview</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Basic budgeting tools</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Limited goals and alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Data export (CSV)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Get Started</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col relative overflow-hidden border-primary shadow-lg scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg font-medium">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="flex font-black">Pro</CardTitle>
                <CardDescription>For serious money managers</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$8</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Advanced budgeting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Smart suggestions for saving & spending</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Unlimited accounts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Unlimited history</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom goals and milestones</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Free Trial</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col relative overflow-hidden">
              <CardHeader>
                <CardTitle>Pro Max</CardTitle>
                <CardDescription>For teams and advisors</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">All Pro features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Multi-user access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Investment & net-worth tracking dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">API Access</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black tracking-tight text-center mb-16 ">Trusted by thousands</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card">
              <CardContent className="pt-3">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground mb-2">Small Business Owner</p>
                <div className="flex gap-1 mb-4 mt-2 text-primary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">Monexa completely changed how I manage my finances. I finally feel in control of my money instead of it controlling me.</p>
                <div>

                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="pt-3">
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-muted-foreground mb-2">Software Engineer</p>
                <div className="flex gap-1 mb-4 mt-2 text-primary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">The investment tracking is incredible. seeing everything in one place gives me such peace of mind.</p>
                <div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-black">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2 text-black">Is Monexa secure?</h3>
              <p className="text-muted-foreground">Yes, we use bank-level encryption (256-bit AES) to protect your data. We never store your banking credentials.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2 text-black">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">Absolutely. You can cancel your subscription at any time with no penalties or hidden fees.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-2 text-black">Do you support international banks?</h3>
              <p className="text-muted-foreground">We currently support over 10,000 financial institutions across the US, Canada, and UK, with more regions coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section with Custom Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-8 text-black">Join the Future of Finance</h2>
            <CustomForm />
        </div>
      </section>
    </div>
  )
}
