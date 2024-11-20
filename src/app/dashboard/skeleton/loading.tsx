import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

    const data  = "1234567890".split("")
 
 return (
    <div className="grid gap-3  grid-cols-1 sm:grid-cols-3 place-content-center">
      {data.map((item, id) => (
        <Card key={id} >
          <CardHeader className="flex-row ">
            <Skeleton
              className="rounded-full mr-2 w-10 h-10"
            />
            <div className="flex-col flex-grow gap-2 flex" >
              <Skeleton className="w-1/2 h-4 flex-grow "/>
              <Skeleton  className="w-full h-3"/>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end ">
            <Skeleton className="h-8 w-20" />
          </CardFooter>
        </Card>
      ))}
    </div>
 )
 }