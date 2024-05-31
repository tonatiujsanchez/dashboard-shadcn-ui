import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'
export default function Page() {
    return (
        <div className="h-[500px] flex justify-center items-center gap-2">
            <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/tonatiujsanchez.png" alt="@shadcn" />
                <AvatarFallback>TS</AvatarFallback>
            </Avatar>
            <p>@tonatiujsanchez</p>
        </div>
    )
}