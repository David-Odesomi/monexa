import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-[calc(100vh-theme(spacing.16))]">
        {children}
      </main>
      <Footer />
    </>
  );
}
