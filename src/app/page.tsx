import Navigation from '@/components/ui/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import CourseSessionsSection from '@/components/sections/CourseSessionsSection';
import AIApplicationsSection from '@/components/sections/AIApplicationsSection';
import AboutCourseSection from '@/components/sections/AboutCourseSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about-course">
          <AboutCourseSection />
        </section>
        
        <section id="sesiones">
          <CourseSessionsSection />
        </section>
        
        <section id="aplicaciones-ia">
          <AIApplicationsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
