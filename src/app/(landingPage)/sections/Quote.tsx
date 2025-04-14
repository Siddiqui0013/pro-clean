import Image from "next/image";

export default function Quote() {
	return (
		<div className="py-8 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
			<div className="w-full md:w-1/2 px-12 py-8 flex items-start flex-col gap-6 ">
				<p className="text-lg"> Affordable cleaning solutions</p>
				<h1 className="text-4xl md:text-5xl font-extrabold pr-8">
                <span className="primary"> High Quality </span> And{" "}
					<span className="primary">Friendly Services</span> at Fair Prices
				</h1>
				<p className="text-lg">
                We provide comprehensive cleaning services tailored to your needs. From residential cleaning  services.
				</p>
					<button className="bg-primary px-4 md:px-8 py-2 md:py-4 rounded-md text-white">
                        Get A Quote
					</button>
				</div>
                <div className="w-full md:w-1/2 px-12 py-8">
                <Image
                    src="/quote.png"
                    alt="ProCLean Logo"
                    width={500}
                    height={500}
                />

			</div>
			</div>
	);
}
