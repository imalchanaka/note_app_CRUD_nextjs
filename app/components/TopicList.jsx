import Removebtn from "./Removebtn";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";

//step to connecting FE to BE

const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };
  



// 2nd step export default function TopicList() {
    export default async function TopicList(){
        const { topics } = await getTopics();
    return(
        <>
        {/* //3rd step */}

        {topics.map((t)=>(
        
        <div className="flex items-start justify-between gap-5 p-4 my-3 border border-slate-300">
        <div >
            {/* // when we join the frontend and backend  we need apply some code to the frontend  */}
                 {/* <div >
                    <h2 className="text-2xl font-bolt">Topic title</h2>
                 </div>
                 
                 <div>Topic discription</div> */}

                 <div >
                    <h2 className="text-2xl font-bolt">{t.title}</h2>
                 </div>
                 
                 <div>{t.description}</div>

                 

         </div>

         <div className="flex gap-2">

            {/* <Removebtn /> */}

            <Removebtn id={t._id} />
            
            <Link href={`/editTopic/${t._id}`}>
                <FaRegEdit size={24} />
            </Link>


         </div>
        </div>
        ))}
       
        
         
        </>


    );

        
        
    
}