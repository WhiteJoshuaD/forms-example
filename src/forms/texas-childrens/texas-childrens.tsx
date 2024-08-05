import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout";

// Reuse standard credits form
import { Credits } from "@/forms/standard/sections/credits";

// Custom section for basic info
import { BasicInfo } from "./sections/basic-info";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: () => redirect("basic-info"),
      },
      {
        path: "basic-info",
        element: <BasicInfo />,
      },
      {
        path: "credits",
        element: <Credits />,
      },
      {
        path: "gaps-and-needs",
        element: <div>Gaps and Needs</div>,
      },
      {
        path: "objectives-and-outcomes",
        element: <div>Objectives and Outcomes</div>,
      },
      {
        path: "commercial-support",
        element: <div>Commercial Support</div>,
      },
      {
        path: "commendation-criteria",
        element: <div>Commendation Criteria</div>,
      },
      {
        path: "files",
        element: <div>Files</div>,
      },
      {
        path: "comments",
        element: <div>Comments</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function TexasChildrensApplicationForm() {
  return (
    <div>
      <div className="text-sm">
        <p className="font-semibold">STANDARD 1: ENSURE CONTENT IS VALID</p>
        <p>
          Texas Children’s CME Program is responsible for ensuring that our
          education is fair and balanced and that any clinical content presented
          supports safe, effective patient care.
        </p>
        <ol className="mt-4 list-decimal pl-4 space-y-2">
          <li>
            All recommendations for patient care in accredited continuing
            education must be based on current science, evidence, and clinical
            reasoning, while giving a fair and balanced view of diagnostic and
            therapeutic options.
          </li>
          <li>
            All scientific research referred to, reported, or used in accredited
            education in support or justification of a patient care
            recommendation must conform to the generally accepted standards of
            experimental design, data collection, analysis, and interpretation.
          </li>
          <li>
            Although accredited continuing education is an appropriate place to
            discuss, debate, and explore new and evolving topics, these areas
            need to be clearly identified as such within the program and
            individual presentations. It is the responsibility of accredited
            providers to facilitate engagement with these topics without
            advocating for, or promoting, practices that are not, or not yet,
            adequately based on current science, evidence, and clinical
            reasoning.
          </li>
          <li>
            Organizations cannot be accredited if they advocate for unscientific
            approaches to diagnosis or therapy, or if their education promotes
            recommendations, treatment, or manners of practicing healthcare that
            are determined to have risks or dangers that outweigh the benefits
            or are known to be ineffective in the treatment of patients.
          </li>
        </ol>
      </div>

      <Separator className="my-8" />

      <RouterProvider router={router} />
    </div>
  );
}
