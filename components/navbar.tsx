import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex flex-col">
                        <span className="text-xl font-bold text-black tracking-tight">Monexa</span>
                        <span className="text-[10px] text-primary/60 font-medium tracking-wide">学生金融</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-base font-medium text-muted-foreground">
                        <Link href="/" className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full">
                            Home
                        </Link>
                        <Link href="#features" className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full">
                            Features
                        </Link>
                        <Link href="#pricing" className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full">
                            Pricing
                        </Link>
                        <Link href="#faq" className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-foreground after:transition-all hover:after:w-full">
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="px-8" size="sm" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button className="px-8" size="sm" asChild>
                        <Link href="/signup">Sign Up</Link>
                    </Button>
                </div>
            </div>
        </nav>
    )
}
