import { Badge } from "@/components/ui/badge";

export default function Page() {
    return (
        <div className="flex gap-4">
            <Badge>default</Badge>
            <Badge variant="destructive">destructive</Badge>
            <Badge variant="outline">outline</Badge>
            <Badge variant="secondary">secondary</Badge>
            <Badge variant="success">success</Badge>
            <Badge variant="warning" capitalize>warning</Badge>
            <Badge variant="info" uppercase>info</Badge>
        </div>
    )
}