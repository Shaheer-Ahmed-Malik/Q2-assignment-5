import Header from "./components/Header"

export default function Home() {
    return(
        <div className="h-screen">
            <Header />
            <div className="flex justify-between items-center 
            mx-[122px] mt-[50px] px-0">
                <div className="font-libre flex flex-col space-y-7">
                    <h1 className="font-bold text-[30px] w-[450px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

                    <p className="w-[575px] font-medium text-[22px] text-primary">
                        An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                    </p>
                    <button className="bg-[#A29875] text-white h-[45px] w-[200px] text-[22px] 
                    font-medium font-Libre Bodoni rounded-lg">
                        Explore Now
                    </button>
                </div>                      
                <div className="mr-[65px]">
                        <div className="absolute rounded-tl-[100px] rounded-br-[100px] w-[310px] h-[423px] border-[1px] border-white mt-6 ml-4"></div>
                    <img 
                    src={"/slider-1.jpg.svg"}
                    alt="sapmle image"
                    width={345}
                    height={100}
                    className="rounded-tl-[100px] rounded-br-[100px]"
                     />
                </div>
            </div>
            <div>
                
            </div>




        </div>
    )
}