"use client"

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from "@/components/ui/toast"

export default function Page() {
    const { toast } = useToast()

    return (
        <div>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        description: "Your message has been sent.",
                    })
                }}
            >
                Show Toast
            </Button>

            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: "Scheduled: Catch up ",
                        description: "Friday, February 10, 2023 at 5:57 PM",
                        action: (
                            <ToastAction
                                altText="Goto schedule to undo"
                                onClick={() => console.log("Try again")}
                            >
                                Undo
                            </ToastAction>
                        ),
                    })
                }}
            >
                Add to calendar
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }}
            >
                Destructive
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        variant: "success",
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }}
            >
                Success
            </Button>
        </div>
    )
}