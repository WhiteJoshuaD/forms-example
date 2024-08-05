import { useSuspenseQuery } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

import { getActivityFormatsQueryOptions } from "@/api/get-activity-formats";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

type AmaActivityFormatsProps = Partial<{
  label: string;
  description: string;
}>;

export function AmaActivityFormats({
  label = "AMA Activity Format",
  description,
}: AmaActivityFormatsProps) {
  const { data: activityFormats } = useSuspenseQuery(
    getActivityFormatsQueryOptions()
  );

  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="amaActivityFormat"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          {activityFormats.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name="amaActivityFormat"
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id.toString())}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([
                                ...field.value,
                                item.id.toString(),
                              ])
                            : field.onChange(
                                field.value?.filter(
                                  (value) => value !== item.id.toString()
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.format}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
