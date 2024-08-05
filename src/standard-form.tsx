import { AmaActivityFormats } from "@/components/ama-activity-formats";
import { ActivityName } from "@/components/fields/activity-name";
import { DeliveryMethod } from "@/components/fields/delivery-method";

export const standardForm = {
  introText: "",
  sections: [
    {
      name: "Basic Info",
      fields: [
        {
          name: "name",
          label: "Name",
          description: "Provide the name of the activity",
          element: <ActivityName />,
        },
        {
          name: "format",
          label: "Format",
          description: "Provide the format of the activity",
          element: <AmaActivityFormats />,
        },
        {
          name: "deliveryMethod",
          label: "Delivery Method",
          description: "Provide the delivery method of the activity",
          element: <DeliveryMethod />,
        },
      ],
    },
  ],
};
