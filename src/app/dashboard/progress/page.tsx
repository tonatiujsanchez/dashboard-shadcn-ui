"use client"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
export default function Page() {

    const [progress, setProgress] = useState(0)
    const [indicatorColor, setIndicatorColor] = useState()
 
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev)=>{
            if(prev >= 100){
                clearInterval(interval)
                return 100
            }
            return prev + 1
        })
      }, 100)
      return () => clearInterval(interval)

    }, [])
   

    return (
        <div>
            <p>Progress</p>
            <Progress value={progress} indicatorColor={
                cn({
                    'bg-blue-500': progress > 10 && progress < 20,
                    'bg-green-500': progress >= 20 && progress < 30,
                    'bg-red-500': progress >= 30 && progress < 40,
                    'bg-yellow-500': progress >= 40 && progress < 50,
                    'bg-purple-500': progress >= 50 && progress < 60,
                    'bg-indigo-500': progress >= 60 && progress < 70,
                    'bg-sky-500': progress >= 70 && progress < 80,
                    'bg-blue-600': progress >= 80 && progress < 90,
                    'bg-violet-500': progress >= 90
                })
            } />
        </div>
    )
}