import { useRef } from "react";
import { NavLink, Outlet, useMatch } from "react-router-dom"

const Jobs = () => {
  const jobPreviewActive = useMatch('jobs/job-preview');
  const activeStyle = useRef<null | HTMLDivElement>(null);
  const links = [
    {to : 'job-preview', label : 'Job Preview'},
    {to : 'applicants', label : 'Applicants'},
    {to : 'match', label : 'Match'},
    {to : 'job-messages', label : 'Messages'}
  ]
  const withBackGround = "text-orange-600 font-bold";
  const noBackGround = "text-gray-400 font-medium";

  jobPreviewActive
    ? activeStyle.current?.classList.remove("hidden")
    : activeStyle.current?.classList.add("hidden");

  return (
    <>
    <div className="flex gap-20 px-24 h-14 border-y-2">
      {
        links.map(link => (
          <NavLink key={link.to} to={link.to} className={({isActive}) => `flex flex-col justify-end items-center ${isActive ? withBackGround : noBackGround}`}>
            <span className="m-auto ">{link.label}</span>
            <div ref={(link.to == 'job-preview') ? activeStyle : null} className="border-b-2 border-orange-600 w-14 h-1 hidden">
            </div>
          </NavLink>
        ))
      }
    </div>
    <Outlet/>
    </>
  )
}

export default Jobs
