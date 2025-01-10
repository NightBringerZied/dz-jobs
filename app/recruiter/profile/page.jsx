import CompanyInfos from "@/components/recruter-profile/company-infos";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="">
      <div className=" mx-auto max-w-[1200px] space-y-8">
        <div className=" bg-white p-8 rounded-md ">
          <h1 className=" font-bold text-4xl">Company Profile</h1>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <CompanyInfos />
        </Suspense>
      </div>
    </div>
  );
}
