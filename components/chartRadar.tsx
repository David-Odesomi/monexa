"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A radar chart with dots"

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 273 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--color-primary)",
    },
} satisfies ChartConfig

export function ChartRadarDots() {
    return (
        <Card className="glass-card border-none shadow-none bg-transparent">
            <CardHeader className="items-center pb-4">
                <CardTitle className="text-foreground/90">Spending Trends</CardTitle>
                <CardDescription className="text-muted-foreground/80">
                    Your expense tracking for the last 6 months
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] w-full"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis dataKey="month" tick={{ fill: 'var(--color-foreground)', opacity: 0.7 }} />
                        <PolarGrid stroke="var(--color-muted-foreground)" strokeOpacity={0.2} />
                        <Radar
                            dataKey="desktop"
                            fill="var(--color-primary)"
                            fillOpacity={0.5}
                            stroke="var(--color-primary)"
                            strokeWidth={2}
                            dot={{
                                r: 4,
                                fillOpacity: 1,
                                fill: "var(--color-primary)",
                                strokeWidth: 0
                            }}
                        />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm pt-4">
                <div className="flex items-center gap-2 leading-none font-medium text-foreground">
                    Spending down by 5.2% this month <TrendingUp className="h-4 w-4 text-green-500 rotate-180" />
                </div>
                <div className="text-muted-foreground flex items-center gap-2 leading-none">
                    January - June 2024
                </div>
            </CardFooter>
        </Card>
    )
}
