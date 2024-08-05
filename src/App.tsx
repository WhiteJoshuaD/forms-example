import { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { StandardApplicationForm } from "@/forms/standard/standard";
import { TexasChildrensApplicationForm } from "@/forms/texas-childrens/texas-childrens";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const queryClient = new QueryClient();

export default function App() {
  const [form, setForm] = useState("standard");

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Select value={form} onValueChange={(val) => setForm(val)}>
          <SelectTrigger className="w-auto">
            <SelectValue placeholder="Select an activity format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard Form</SelectItem>
            <SelectItem value="texas">Texas Children's</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          {form === "standard" ? (
            <StandardApplicationForm />
          ) : (
            <TexasChildrensApplicationForm />
          )}
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}
