'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"


export default function Page() {

    const [dialogOpen, setDialogOpen] = useState(false)

    const handleDialog = ( value:boolean ) => {
        console.log(value)
    }

    return (
        <div>
            <AlertDialog
                open={dialogOpen} 
                onOpenChange={setDialogOpen}
            >
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog with Trigger </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={()=> handleDialog(false) }>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={()=> handleDialog(true) }>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Button
                onClick={() => setDialogOpen(true)}
                className="ml-5"
            >
                Open dialog Custom
            </Button>
        </div>
    )
}