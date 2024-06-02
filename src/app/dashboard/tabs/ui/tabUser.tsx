import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'


export const TabUser = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>User</CardTitle>
                <CardDescription>
                    Make changes to your account here. Click save when you&rsquo;re done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Card>
                    <CardHeader className="flex flex-row gap-4">
                        <Image
                            src="https://images.unsplash.com/photo-1715963433657-559b3ea01e0d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Shadcn UI"
                            width={40}
                            height={40}
                            className="rounded-full min-w-14 w-14 h-14 object-cover"
                        />
                        <div className="flex flex-col gap-2">
                            <CardTitle>Tonatiuj Sánchez</CardTitle>
                            <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardDescription>
                        </div>
                    </CardHeader>
                    <CardFooter className="flex justify-end">
                        <Button variant="outline">Info</Button>
                    </CardFooter>
                </Card>
            </CardContent>
            <CardFooter>
                <Button>Save</Button>
            </CardFooter>
        </Card>
    )
}
