import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <div className="min-h-screen bg-background">
            <DashboardSidebar />
            <main className="ml-64 p-8">
                <DashboardHeader />
                {children}
            </main>
        </div>
    )
}