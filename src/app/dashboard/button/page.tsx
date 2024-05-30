'use client'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'


export default function Page() {
    return (
        <div className="grid grid-cols-5 gap-3">
            <Button>default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">ghost</Button>
            <Button variant="link">link</Button>
            <Button variant="outline">outline</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="success">success</Button>
            <Button disabled>disabled</Button>
            <Button onClick={() => console.log('clicked')}>Click Me</Button>
            <Button variant="outline" size="icon">
                <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline">
                <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
            <Button asChild>
                <Link href="/dashboard/alert">Go to alerts</Link>
            </Button>
        </div>
    )
}