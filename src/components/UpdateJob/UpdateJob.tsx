import { FiMessageSquare } from "react-icons/fi";
import { GoTrash } from "react-icons/go"
import { GrFormEdit } from "react-icons/gr"
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbUserCheck, TbUsers } from "react-icons/tb";

const UpdateJob = () => {
  const details = [
    {icon : <TbUsers />, label : 'Applicants', number : 400},
    {icon : <TbUserCheck />, label : 'Matches', number : 100},
    {icon : <FiMessageSquare />, label : 'Messages', number : 147},
    {icon : <MdOutlineRemoveRedEye />, label : 'Views', number : 800},
  ]
  return (
    <>
      <div className="flex gap-3 justify-center">
        <button className="text-[#dc4a2d] bg-[#fef4f2] border border-[#dc4a2d] rounded-md flex items-center gap-2 px-7 py-2">
          <GoTrash />
          Delete Job
        </button>
        <button className="text-white bg-[#dc4a2d] border border-[#fed3ca] rounded-md flex items-center gap-2 px-[34px] py-2 ">
          <GrFormEdit className="text-2xl" />
          Edit Job
        </button>
      </div>

      <div className="flex flex-col justify-center px-8 gap-5">
        {details.map((detail) => (
          <div key={detail.label}>
            <div className="flex justify-between py-4 font-bold">
              <div className="flex items-center gap-2 text-[#5d5d5d] font-semibold">
                {detail.icon}
                {detail.label}
              </div>
              {detail.number}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default UpdateJob
