import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section
            className="relative h-[60vh] w-full bg-cover bg-center flex items-start justify-center"
            style={{ backgroundImage: "url('/CoffeeHero.jpg')" }}
        >
            {/* Darker overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Hero content */}
            <div className="relative text-center max-w-md text-white flex flex-col items-center gap-4 pt-50">
                <h1 className="text-9xl font-black">Monexa</h1>
                <p className="text-lg">
                    Savor your morning, master your money.
                    The quiet joy of coffee, the clarity of Monexa.
                    <span className="italic"><br /> Join the cafe, today</span>
                </p>
                <Button className="px-8 py-3 text-lg">
                    Get Started!
                </Button>
            </div>
        </section>
    );
}