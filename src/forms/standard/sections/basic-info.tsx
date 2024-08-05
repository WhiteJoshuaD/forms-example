import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AmaActivityFormats } from "@/components/ama-activity-formats";
import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/text-field";
import {
  basicInfoSchema,
  type BasicInfo as BasicInfoForm,
} from "@/schemas/basic-info-schema";

export function BasicInfo() {
  const form = useForm<BasicInfoForm>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      name: "",
      amaActivityFormat: "",
      deliveryMethod: "",
    },
  });

  return (
    <div className="flex-1 space-y-20">
      <section>
        <h2 className="font-semibold">Activity Information</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Provide basic information about the activity
        </p>
        <Separator className="my-4" />
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit((data) => console.log(data))}
          >
            <TextField name="name" label="Activity Name" />
            <AmaActivityFormats />
            <TextField name="deliveryMethod" label="Delivery Method" />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </div>
  );
}
