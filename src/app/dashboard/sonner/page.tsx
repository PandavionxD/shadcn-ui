"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SonnerPage() {
  return (
    <div className="grid grid-col-2 md:grid-cols-4 gap-3" >
      <Button
        variant="outline"
        onClick={() =>
          toast("Evento creado!", {
            duration:3000,
            position:"top-right",
            description: new Date().toLocaleString("es-Es",
              {
                weekday:"long",
                day:"numeric",
                month:"long",
                year:"numeric"
              }
            ),
            action: {
              label: "X",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast 01
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("Evento creado!", {
            duration:1500,
            position:"top-right",
            description: new Date().toLocaleString("es-Es",
              {
                weekday:"long",
                day:"numeric",
                month:"long",
                year:"numeric"
              }
            )
          })
        }
      >
        Toast success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Evento creado!", {
            duration:1500,
            position:"top-right",
            description: new Date().toLocaleString("es-Es",
              {
                weekday:"long",
                day:"numeric",
                month:"long",
                year:"numeric"
              }
            )
          })
        }
      >
        Toast error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Evento creado!", {
            duration:1500,
            position:"top-right",
            description: new Date().toLocaleString("es-Es",
              {
                weekday:"long",
                day:"numeric",
                month:"long",
                year:"numeric"
              }
            )
          })
        }
      >
        Toast info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Evento creado!", {
            duration:1500,
            position:"top-right",
            description: new Date().toLocaleString("es-Es",
              {
                weekday:"long",
                day:"numeric",
                month:"long",
                year:"numeric"
              }
            )
          })
        }
      >
        Toast warning
      </Button>
    </div>
  );
}
