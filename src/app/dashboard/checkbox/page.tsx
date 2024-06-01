'use client'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { CheckedState } from '@radix-ui/react-checkbox'
import { useState } from 'react'


export default function Page() {

    const [checked, setChecked] = useState<CheckedState>(false)

    console.log(checked)

    return (
        <div>
            <div className="items-top flex space-x-2">
                <Checkbox 
                    id="terms1"
                    checked={checked}
                    onCheckedChange={value => { setChecked(value) }}
                />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Accept terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                    </p>
                    {
                        checked
                        && <Badge variant="success" className="place-self-start">Términos aceptados</Badge>
                        
                    }
                </div>
            </div>
        </div>
    )
}