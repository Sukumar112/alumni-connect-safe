import { Button } from "@/components/ui/button";
import { ArrowRight, Users, GraduationCap, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-alumni.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Alumni connecting and networking" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent-light px-4 py-2 rounded-full">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Connecting Alumni & Students</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Build Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Future</span>
                <br />
                Together
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Join our comprehensive alumni network where career opportunities, mentorship, 
                and lifelong connections flourish. Connect with industry leaders, find mentors, 
                and advance your professional journey.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" className="gap-2">
                Join as Alumni
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Student Access
                <Users className="h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">Alumni Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-card p-8 rounded-2xl shadow-elegant border">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">Career Opportunities</h3>
                    <p className="text-muted-foreground">Access exclusive job postings</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-accent p-3 rounded-lg">
                    <Users className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">Mentorship Programs</h3>
                    <p className="text-muted-foreground">Connect with industry experts</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground">Academic Support</h3>
                    <p className="text-muted-foreground">Get guidance from alumni</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent p-3 rounded-lg shadow-glow">
              <Users className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary p-3 rounded-lg shadow-elegant">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;