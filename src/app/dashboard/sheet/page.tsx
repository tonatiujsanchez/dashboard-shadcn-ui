'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

type SheetSide = typeof SHEET_SIDES[number]

export default function Page() {

    const [openSheet, setOpenSheet] = useState(false)
    const [side, setside] = useState<SheetSide>('right')

    const handleOpenCustomSide = (value: SheetSide) => {
        setside(value)
        setOpenSheet(true)
    }

    return (
        <>
            <div className="flex gap-5">
                <Button
                    onClick={() => setOpenSheet(true)}
                >

                    Open manual
                </Button>
                <Sheet
                    open={openSheet}
                    onOpenChange={setOpenSheet}
                >
                    <SheetTrigger className="bg-slate-200 hover:bg-slate-100 w-28 rounded-md text-sm font-medium transition-colors">Open</SheetTrigger>
                    <code className="flex items-center">Side selected: <span className="text-red-500">{side}</span></code>
                    <SheetContent side={side} >
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="mt-10 flex gap-3">
                {SHEET_SIDES.map((side) => (
                    <Button 
                        key={side} 
                        variant="outline"
                        onClick={() => handleOpenCustomSide(side)}
                    >
                        { side }
                    </Button>
                ))}
            </div>
        </>
    )
}