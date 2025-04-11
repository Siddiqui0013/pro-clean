
export default function Home() {
  return (
    <>
    <Hero />
    </>
  );
}

function Hero (){
  return (
    <div 
    style={{
      backgroundImage: "url('/heroBg.png')", 
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
    className="flex items-start md:h-[550px] h-[70%] flex-col gap-6 mx-auto py-12 px-6">
      <div className="w-full md:w-1/2 px-12 py-8 flex items-start flex-col gap-6 ">
      <p className="text-red-600 text-lg"> We Clean House </p>
      <h1 className="text-4xl md:text-5xl font-extrabold pr-8">Complete <span className="primary">Cleaning</span> And <span className="primary">Disinfection</span> For Your Home</h1>
      <p className="text-lg">Professional housecleaning services, you want to make sure that you find a team that can accommodate your schedule, and cleaning preferences.</p>
      <div className="btns space-x-3 font-bold">
      <button className="bg-primary px-4 md:px-8 py-2 md:py-4 rounded-md text-white">Book Now</button>
      <button className="bg-transparent border-primary px-4 md:px-8 py-2 md:py-4 rounded-md primary">Our Services</button>
      </div>
      </div>
    </div>
  )
}