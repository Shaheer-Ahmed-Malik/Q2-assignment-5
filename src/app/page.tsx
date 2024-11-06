import Header from "./components/Header"

export default function Home() {
    return(
        <div className="h-screen">
            <Header />
            <div className="flex justify-between items-center 
            mx-[122] mt-[50] px-0">
                <div className="font-libre flex flex-col space-y-7">
                    <h1 className="font-bold text-[30px] w-[450]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

                    <p className="w-[575px] font-medium text-[22px] text-primary">
                        An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                    </p>
                    <button className="bg-[#A29875] text-white h-[45] w-[200] text-[22px] 
                    font-medium font-Libre Bodoni rounded-lg">
                        Explore Now
                    </button>
                </div>
                <div className="mr-[65]">
                        <div className="absolute rounded-tl-[100] rounded-br-[100] w-[310px] h-[423px] border-[1px] border-white mt-6 ml-4"></div>
                    <img 
                    src={"https://s3-alpha-sig.figma.com/img/fe76/04e4/1f537eb50b863f64bbaa65861287126e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LJW8Rgl2FTUoU7R-DRXe2r4wqhMr3BIRIE28XRj9Crbw7dsItxqpSkSbU6EuujWzGc~m~PkvVL3wSqhUkWXlnpga7wucLht6W-QQ~5npMm1FSMbFDJ4decxfs2b~wiljgfnkNDLq2DEYO0SPzjZF97R7Yv246yKDfA7xpiXdX-w50keM0XgzZjl9zPLGuj~dY98qfyxIncPBk5jwEly0h1QeHP0OvXOFjZxOHqxqip-yOt7sRV05JHzZMuqtiLMX572v0LCQucHCAPfPX78jCCyRYDbjkKw1ZqIYHHYYYYtuBFV-BfDD-cAjZcIcmirWqAry0oKDYCFjpEzI-mz5RA__"}
                    alt="sapmle image"
                    width={345}
                    height={100}
                    className="rounded-tl-[100] rounded-br-[100]"
                     />
                </div>
            </div>
        </div>



    )
}