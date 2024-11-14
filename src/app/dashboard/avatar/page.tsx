import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarPage() {
  return (
    <div className="h-[500px] flex justify-center items-center ">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcnasdasdsa.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="ms-2">@shadcn-ui</p>
    </div>
  );
}