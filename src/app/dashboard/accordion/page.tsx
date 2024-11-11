import { Title } from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    id: "item-1",
    question: "Lorem Ipsum is simply dummy text of the printing ",
    anwser:
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: "item-2",
    question: "Lorem Ipsum is simply dummy text of the printing ",
    anwser: "Lorem Ipsum try's standard dummy text ever since the 1500s",
  },
  {
    id: "item-3",
    question: "Lorem Ipsum is simply dummy text of the printing ",
    anwser: "the industry's standard dummy text ever since the 1500s",
  },
];

export default function AccordionPage() {
  return (
    <div className="flex flex-col gap-6">
      <Title titulo="Acordion Smple" />
      <div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.anwser}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Title titulo="Acordion Multiple" />
      <div>
        <Accordion type="multiple" className="w-full">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.anwser}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
