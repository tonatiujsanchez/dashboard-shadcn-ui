'use client'
import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'



export default function Page() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <Carousel 
                className="w-full max-w-xs"
                autoplay={2000}
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="invisible sm:visible" />
                <CarouselNext className="invisible sm:visible" />
            </Carousel>

            <Carousel 
                className="w-full max-w-xs"
                autoScroll
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-1/2">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="invisible sm:visible" />
                <CarouselNext className="invisible sm:visible" />
            </Carousel>
        </div>
    )
}