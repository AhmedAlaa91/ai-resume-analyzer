import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants"
import ResumCard from "~/components/ResumCard";
import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Your Resume" },
    { name: "description", content: "Smart Feed Bakc!" },
  ];
}

export default function Home() {


    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your application</h1>
        <h2> review your submission with AI power</h2>
      </div>

   
    {resumes.length > 0 && (
    <div className="resumes-section">

 
    
    {
      resumes.map((resume)=>(

        <ResumCard key={resume.id} resume={resume}>

        </ResumCard>
      ))
    }

       </div>

    ) }
 </section>
  </main>;
}
