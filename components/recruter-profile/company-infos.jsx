import { EditRectruterInfos } from "./components/edit-rectruter-infos";
import RecruterLeftInfos from "./components/recruter-left-infos";
import RecruterRightInfos from "./components/recruter-right-infos";
import { getCompanyInfos } from "./get-company-infos";
import telecome from "@/public/telecome.png";
export default async function CompanyInfos() {
  //const res = await getCompanyInfos();
  const data = {
    company_contact: "+2349068909912",
    company_description:
      "Since its inception in 2003, Algérie Télécom has grown to become Algeria's leading telecommunications provider. The company offers a wide range of services, including broadband internet (ADSL, fiber optics), fixed telephony, and IT solutions tailored for businesses. With a commitment to innovation and customer satisfaction, Algérie Télécom is at the forefront of advancing Algeria's digital transformation.",
    company_location: "https://g.co/kgs/5WLXSbG",
    company_logo: telecome.src,
    company_name: "Algerie Telecom",
    company_website: "https://www.algerietelecom.dz/en/",
    recruiter_id: "id",
    social_links: "http://www.facebook.com/algerietelecom/",
    verified_status: true,
  };
  if (data) {
    return (
      <div className=" flex justify-center gap-6 flex-col items-center">
        <div className=" flex justify-between">
          <RecruterLeftInfos data={data} />
          <RecruterRightInfos data={data} />
        </div>
        <EditRectruterInfos data={data} />
      </div>
    );
  }
  return <div className=" text-red-600">{res}</div>;
}
