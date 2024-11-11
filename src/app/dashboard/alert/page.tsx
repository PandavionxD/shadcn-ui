import { Title } from "@/components/Title";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, CircleAlert, CircleX } from "lucide-react";

export default function AlertPage() {
  return (
    <div className="grid gap-6">
      <Title titulo="Alertas" />

      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant={"destructive"}>
        <CircleX className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

      <Alert variant={"success"}>
        <CircleAlert className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>

    </div>
  );
}
