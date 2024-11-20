import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsPage() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="register">register</TabsTrigger>
          <TabsTrigger value="operation">operation</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="account">Change your acount here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="register">Change your register here.</TabsContent>
        <TabsContent value="operation">Change your operation here.</TabsContent>
      </Tabs>
    </div>
  );
}
