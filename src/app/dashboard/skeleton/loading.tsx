import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

    const data = [1,2,3,4,5,6,7,8,9,10,11,12]

    return (

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            {
                data.map(item => (
                    <Card key={item}>
                        <CardHeader className="flex flex-row gap-4">
                            <Skeleton
                                className="rounded-full min-w-14 w-14 h-14"
                            />
                            <div className="flex-1 flex flex-col gap-2">
                                <Skeleton className="w-[70%] h-4" />
                                <Skeleton className="w-full h-3" />                            
                                <Skeleton className="w-full h-3" />                            
                            </div>
                        </CardHeader>
                        <CardFooter className="flex justify-end">
                            <Skeleton className="w-16 h-8" />
                        </CardFooter>
                    </Card>

                ))
            }
        </div>
    )
}