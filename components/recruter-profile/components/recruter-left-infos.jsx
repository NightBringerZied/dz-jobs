export default function RecruterLeftInfos({ data }) {
  return (
    <div className=" basis-[35%] p-4  bg-white rounded-lg flex flex-col gap-8">
      <div className=" p-6 flex justify-center flex-col gap-8 items-center  text-center">
        <div>
          <img src={data?.company_logo} alt="logo" />
        </div>
        <p className=" text-green-700 font-bold text-4xl">
          {data?.company_name}
        </p>
      </div>
      <hr className=" h-1/2 bg-black w-full"></hr>
      <div className=" flex flex-col gap-8">
        <div className=" space-y-4">
          <p className=" ">
            <span className=" font-semibold">Company Name : </span>
            <span className=" text-gray-600">{data?.company_name}</span>
          </p>
          <p>
            <span className=" font-semibold">Location : </span>
            <span className=" text-gray-600">
              <a href={data?.company_location}>{data?.company_location}</a>
            </span>
          </p>
        </div>
        <div className=" space-y-4">
          <p className=" text-4xl font-semibold">Contact</p>
          <p>
            <span className=" font-semibold">Website: </span>
            <span className=" text-gray-600">
              <a href={data?.company_website}>{data?.company_website}</a>
            </span>
          </p>
          <p>
            <span className=" font-semibold">Social: </span>
            <span className=" text-gray-600">
              <a href={data?.social_links}>{data?.social_links}</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
