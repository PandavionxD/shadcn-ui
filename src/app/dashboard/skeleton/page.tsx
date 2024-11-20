import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "1234567890".split("");
};

export default async function SkeletonPage() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 place-content-center gap-3">
      {data.map((item, id) => (
        <Card key={id}>
          <CardHeader className="flex flex-row">
            <Image
              src={"https://github.com/shadcn.png"}
              height={40}
              width={40}
              alt="shadcn-ui"
              className="rounded-full mr-2 w-10 h-10"
            />
            <div>
              <CardTitle> Card Title</CardTitle>
              <CardDescription> Card Description </CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end ">
            <Button> Ver más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
