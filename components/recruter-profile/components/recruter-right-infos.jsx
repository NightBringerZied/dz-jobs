export default function RecruterRightInfos({ data }) {
  return (
    <div className="basis-[60%] p-4  bg-white rounded-lg flex flex-col gap-8">
      <div>
        <h2 className=" text-3xl font-semibold underline text-green-700">
          About Us
        </h2>
      </div>
      <div>
        <p className=" text-center text-gray-700">
          {data?.company_description}
        </p>
      </div>
    </div>
  );
}
