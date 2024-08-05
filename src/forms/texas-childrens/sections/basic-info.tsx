import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Separator } from "@/components/ui/separator";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/text-field";
import { basicInfoSchema } from "@/schemas/basic-info-schema";

import logo from "@/assets/texas-childrens.svg";

// Custom control
import { AmaActivityFormats } from "../components/ama-activity-formats";

// They don't want to include delivery method, so exclude it from standard
// schema. They also want to allow multiple activity formats, so the schema
// needs to be extended. NOTE: This is changing the type of the data sent to
// the API completely, so it isn't entirely realistic, but it does show how
// to customize the schema in various ways.
const texasChildrensBasicInfoSchema = basicInfoSchema
  .omit({
    deliveryMethod: true,
    amaActivityFormat: true,
  })
  .extend({
    amaActivityFormat: z
      .array(z.string())
      .min(1, "Please select at least one format"),
  });

// Since the schema was customized, the type needs to be derived from the new
// schema rather than imported from the standard schema.
type TexasChildrensBasicInfoForm = z.infer<
  typeof texasChildrensBasicInfoSchema
>;

export function BasicInfo() {
  const form = useForm<TexasChildrensBasicInfoForm>({
    resolver: zodResolver(texasChildrensBasicInfoSchema),
    defaultValues: {
      name: "",
      amaActivityFormat: [],
    },
  });

  return (
    <div className="flex-1 space-y-20">
      <section>
        <h2 className="font-semibold">Activity Information</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Provide basic information about the activity, with some additional
          context provided because this is a custom form for Texas Children's
          Hospital.
        </p>
        <Separator className="my-4" />
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit((data) => console.log(data))}
          >
            <TextField name="name" label="Activity Title" />

            <div>
              <div className="flex items-center gap-2 bg-muted p-2 mb-1 rounded-md">
                <img src={logo} className="h-6" />
                <p className="text-muted-foreground text-sm">
                  It's easy to add arbritatry information to any part of the UI,
                  even images. This would be <em>much</em> harder with a
                  schema-driven UI.
                </p>
              </div>
              <AmaActivityFormats description="This is a custom control for the activity formats. It uses checkboxes rather than the standard select menu." />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </section>
    </div>
  );
}
