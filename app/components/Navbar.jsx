import Link from "next/link";

export default function Navbar(){
   return(
    <div className="max-w-3xl p-4 mx-auto ">
    <nav className="flex justify-between px-8 py-3 bg-slate-800">
        
        <Link className="font-bold text-white" href={"/"}>Imal.dev</Link>
        <Link className="p-2 bg-white" href={"/addTopic"}>Add topic</Link>

    </nav>
    </div>


   );
   
}