import NavBar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#060518]">
      <NavBar />
      <div className="container mx-auto px-11 py-4 mt-20">
        <ProfileSection/>
        <AboutSection />
        <ProjectSection />
      </div>
      <FooterSection />
    </main>
  );
}
