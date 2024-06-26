import { LiaCoinsSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import figmaImage from '../../assets/figma.png'
import adobeIllustrator from '../../assets/illustrator.png'
import adobeXd from '../../assets/xd.png'
import atlassianImage from "../../assets/atlassian.png";
import UpdateJob from "../UpdateJob/UpdateJob";

const JobPreview = () => {
  const locationAndSalaryStyle = 'flex items-center text-[#5d5d5d] font-semibold gap-1';
  const listStyle = 'flex items-center gap-2 border-2 border-[#d0d5dd] w-fit px-1 py-[2px] rounded-lg';
  const lists = [
    {label : 'Preferred Language', item : 'English'},
    {label : 'Type', item : 'Full Time'},
    {label : 'Years of Experience', item : '3+ Years of Experience'}
  ]

  const companyInfo = [
    {label : 'Company Size', item : '1k - 2k Employees'},
    {label : 'Type', item : 'Private'},
    {label : 'Sector', item : 'Information Technology, Infrastructure'},
    {label : 'Funding', item : 'Bootstraped'},
    {label : 'Founded In', item : '2019'},
    {label : 'Founded By', item : 'Scott Farqhar, Mike Cannon-Brookes'},
  ]

  return (
    <div className="flex">
      <main className="w-[75%] ">
        {/* job position */}
        <section className="flex flex-col px-24 py-8 border-b-2 gap-6">
          <p className="flex gap-7 items-start">
            <span className="text-3xl font-bold text-[#3d3d3d]">
              Senior Product Designer
            </span>
            <svg className="w-[9px] h-[19px]">
              <circle r="2" cx="5" cy="15" fill="#d1d1d1" />
            </svg>
            <span className="flex gap-3 mt-1 items-center">
              <span className="text-gray-400 text-sm">posted 2 days ago</span>
              <span className="bg-[#ecfdf3] border-2 border-[#abefc6] flex items-center gap-1 rounded-full text-sm px-2 text-[#067647]">
                <svg className="w-[9px] h-[9px]">
                  <circle r="3" cx="5" cy="5" fill="#17b26a" />
                </svg>
                Open
              </span>
            </span>
          </p>

          <p className="flex items-center gap-5">
            <span className={locationAndSalaryStyle}>
              <SlLocationPin className="text-[#5d5d5d] text-xl" />
              Delaware, USA
            </span>
            <svg className="w-[9px] h-[9px]">
              <circle r="2" cx="5" cy="5" fill="#d1d1d1" />
            </svg>
            <span className={locationAndSalaryStyle}>
              <LiaCoinsSolid className="text-[#5d5d5d] text-xl scale-x-[-1]" />
              $300k-$400k
            </span>
          </p>
        </section>

        {/* requirement */}
        <section className="flex px-24 py-8 border-b-2 gap-20">
          <div className="">
            <ul className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">Skills Required</label>
              <li className={listStyle}>
                <img src={figmaImage} alt="figma-logo" className="w-4 h-4" />
                <span className="text-sm">Figma</span>
              </li>
              <li className={listStyle}>
                <img
                  src={adobeIllustrator}
                  alt="adobe-illustrator-logo"
                  className="w-4 h-4"
                />
                <span className="text-sm">Adobe Illustrator</span>
              </li>
              <li className={listStyle}>
                <img src={adobeXd} alt="adobe-xd-logo" className="w-4 h-4" />
                <span className="text-sm">Adobe XD</span>
              </li>
            </ul>
          </div>

          {lists.map((list) => (
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm">{list.label}</label>
              <ul>
                <li className="font-bold">{list.item}</li>
              </ul>
            </div>
          ))}
        </section>

        {/* about the job */}
        <section className="flex flex-col px-28 py-8 border-b-2 gap-1">
          <span className="text-gray-400 text-sm -ml-4">About the job</span>

          <ol className="list-decimal font-medium">
            <li className="">Handle the UI/UX research design</li>
            <li className="">
              Work on researching on latest web applications designs & trends
            </li>
            <li className="">Work on conceptualizing and visualizing</li>
            <li className="">
              Work on creating graphics content and other graphic related works
            </li>
          </ol>

          <ul className="list-disc font-medium">
            <span className="-ml-4">Benefits</span>
            <li className="">Health insurance</li>
            <li className="">Provident Fund</li>
          </ul>

          <ul className="list-disc font-medium">
            <span className="-ml-4">Schedule</span>
            <li className="">Day shift</li>
          </ul>

          <ul className="list-disc font-medium">
            <span className="-ml-4">Supplemental pay types:</span>
            <li className="">Performance bonus</li>
            <li className="">Yearly bonus</li>
          </ul>

          <span className="font-medium -ml-4">Work Location: In person</span>
        </section>

        {/* about the company */}
        <section className="flex flex-col px-24 py-8 border-b-2 gap-5">
          <div className="flex items-center gap-3">
            <img
              src={atlassianImage}
              alt="atlassian-logo"
              className="w-10 h-10 rounded-md"
            />
            <span className="text-gray-700 font-medium">Atlassian</span>
          </div>

          <div className="grid grid-cols-2 gap-y-5 auto-rows-fr">
            {companyInfo.map((singleInfo) => (
              <div key={singleInfo.label} className="flex flex-col gap-2">
                <span className="text-gray-400 text-sm">
                  {singleInfo.label}
                </span>
                <span className="font-medium ">{singleInfo.item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <aside className="border-l-2 w-[25%] bg-[#fcfcfc] py-8 flex flex-col gap-5">
        <UpdateJob />
      </aside>
    </div>
  );
}

export default JobPreview
