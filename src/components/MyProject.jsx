import MyProjectCard from "./MyProjectCard";
import {MyProjectData} from '../assets/asstes'

export default function MyProject() {
  return (
    <div className="w-full mt-5 sm:pl-10">
        <div id="project-head">
            <h1 className='text-5xl md:text-6xl mb-10 mt-10'>My Projects</h1>
        </div>
        <div className="flex flex-wrap gap-10 items-center justify-center py-10 w-full ">
            {
                MyProjectData.map((curValue, indx) =>{
                    return <MyProjectCard key={indx} data ={curValue}/>  
                })
            }

        </div>
    </div>
  )
}
