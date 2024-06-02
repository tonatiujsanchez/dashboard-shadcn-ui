'use client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export default function Page() {
    return (
        <div>
            <Button
                variant="outline"
                onClick={() =>
                    toast('Event has been created', {
                        description: `${ new Date() }`,
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                        position: "top-right",
                    })
                }
            >
                Show Toast
            </Button>
            <Button
                variant="outline"
                onClick={() =>
                    toast.success('Event has been created', {
                        description: `${ new Date() }`,
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                        position: "top-right",
                    })
                }
            >
                Show Toast Success
            </Button>
        </div>
    )
}