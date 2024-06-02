import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabAccount } from './ui/tabAccount'
import { TabPassword } from './ui/tabPassword'
import { TabUser } from './ui/tabUser'


export default function Page() {
    return (
        <div>
            <div>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="user">User</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <TabAccount />
                    </TabsContent>
                    <TabsContent value="password">
                        <TabPassword />
                    </TabsContent>
                    <TabsContent value="user">
                        <TabUser />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}