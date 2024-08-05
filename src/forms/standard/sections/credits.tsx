import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/text-field";
import {
  creditsSchema,
  type Credits as CreditsForm,
} from "@/schemas/credits-schema";

export function Credits() {
  const form = useForm<CreditsForm>({
    resolver: zodResolver(creditsSchema),
    defaultValues: {
      creditName: "",
      creditAmount: "",
    },
  });

  return (
    <div className="flex-1 space-y-20">
      <section>
        <h2 className="font-semibold">Credits</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Provide credit information
        </p>
        <Separator className="my-4" />
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit((data) => console.log(data))}
          >
            <TextField name="creditName" label="Credit Name" />
            <TextField name="creditAmount" label="Credit Amount" />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </div>
  );
}
