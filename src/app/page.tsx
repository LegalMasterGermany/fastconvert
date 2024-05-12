'use client'
import UploadFile from "./components/UploadFile";
import Image from "next/image";
import APIBanner from "./components/APIBanner";

const features = [
  {title: "Security guaranteed", description: "We delete uploaded files instantly and converted ones after 24 hours. No one has access to your files and privacy is 100% guaranteed. Read more about security.", img: "/images/security.png"},
  {title: "In the cloud", description: "All conversions take place in the cloud and will not consume any capacity from your computer.", img: "/images/cloud.png"},
  {title: "Fast and easy", description: "Just drop your files on the page, choose an output format and click Convert button. Wait a little for the process to complete. We aim to do all our conversions in under 1-2 minutes.", img: "/images/fast.png"}
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="text-center">
        <strong className="text-3xl underline">File Converter</strong>
        <h3>Convert your files to any format</h3>
      </div>
      <UploadFile/>
      <div className="mt-24 flex mr-8 ml-8 ">
        {features.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <Image src={item.img} height={30} width={30} alt="Icon" />
            <div className="ml-2">
              <h4 className="text-xl">{item.title}</h4>
              <p className="mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <APIBanner/>
    </div>
  );
}
