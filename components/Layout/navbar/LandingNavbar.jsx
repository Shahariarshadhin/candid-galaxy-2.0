import Image from "next/image"

const LandingNavbar = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between">
        <div>
          <Image src="/assests/logo.png" alt="logo" width={180} height={20}/>
        </div>
        <div className="flex items-center italic font-serif font-semibold">Explore The World With Your Tiny Device</div>
        <div className="flex items-center">Upload Photo</div>
      </div>
    </div>
  )
}

export default LandingNavbar