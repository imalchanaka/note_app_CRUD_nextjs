"use client";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";


export default function Removebtn({ id }) {
    const router = useRouter();
    const removeTopic = async () => {
      const confirmed = confirm("Are you sure?");
  
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
  
        if (res.ok) {
          router.refresh();
        }
      }
    };
  
    return(
        <button onClick={removeTopic} className="text-red-400">
            <FaRegTrashAlt  size={24}/>
        </button>
    );
}

// import { FaRegTrashAlt } from "react-icons/fa";
// export default function Removebtn(){
//     return(
//         <button className="text-red-600">
//             <FaRegTrashAlt  sixe={24}/>
//         </button>
//     );
// }