import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, Mail } from "lucide-react";

export default function buttonPage() {
  return (
    <div>
      <Title titulo={"Botón"} />
    <div className="flex gap-4 flex-wrap ">
      <Button variant={"default"}>default </Button>
      <Button disabled variant={"default"}>disabled </Button>
      <Button variant={"destructive"}>destructive </Button>
      <Button variant={"ghost"}>ghost </Button>
      <Button variant={"link"}>link </Button>
      <Button variant={"outline"}>outline </Button>
      <Button variant={"secondary"}>secondary </Button>
      <Button variant={"success"}>success </Button>
      <Button capitalize={false} >capitalize false </Button>
      <Button variant="outline" size="icon">
      <ChevronRight />
    </Button>
    <Button>
      <Mail /> Login with Email
    </Button>
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
    </div>
    </div>
  );
}
