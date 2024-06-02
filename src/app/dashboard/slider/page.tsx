'use client'
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

type SliderProps = React.ComponentProps<typeof Slider>

export default function Page() {

    const [sliderValue, setSliderValue] = useState(10)
    const [rangeValue, setRangeValue] = useState([10, 50])

    return (
        <div>
            <div>
                <span>{ sliderValue }</span>
                <Slider
                    defaultValue={[sliderValue]}
                    onValueChange={(value)=> setSliderValue(value[0])}
                    max={100}
                    step={1}
                />
            </div>
            <div>
                <span>{ rangeValue.join(" - ") }</span>
                <Slider
                    defaultValue={rangeValue}
                    onValueChange={(value)=> setRangeValue(value)}
                    max={100}
                    step={1}
                />
            </div>
        </div>
    )
}