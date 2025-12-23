import { ChartRadarDots } from "@/components/chartRadar";
import { Button } from "@/components/ui/button"
export default function Dashboard(){
    return (
        <>
            <Button className="px-11 py-4 mb-10 font-bold">Log +</Button>
            <ChartRadarDots />
        </>
    )
}