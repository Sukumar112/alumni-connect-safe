import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  Target, 
  TrendingUp, 
  BookOpen,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const UserTypes = () => {
  const alumniFeatures = [
    "Share career achievements and expertise",
    "Mentor current students",
    "Access exclusive networking events",
    "Contribute to university development",
    "Collaborate on research projects"
  ];

  const studentFeatures = [
    "Connect with industry professionals",
    "Get career guidance and mentorship",
    "Access job opportunities",
    "Join study groups and forums",
    "Attend workshops and webinars"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-light px-4 py-2 rounded-full">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Join Our Community</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Choose Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Journey</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're an accomplished alumni ready to give back or a student eager to learn, 
            our platform provides tailored experiences for every member of our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Alumni Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/40 bg-gradient-subtle">
            <CardHeader className="space-y-6 text-center">
              <div className="bg-gradient-primary p-4 rounded-2xl w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  For Alumni
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Share your expertise and help shape the next generation
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {alumniFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-accent-light p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-accent">Impact Statistics</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Alumni mentors see 40% higher engagement and 85% report feeling more connected to their alma mater.
                </p>
              </div>
              
              <Button variant="default" className="w-full gap-2 group-hover:shadow-elegant">
                <Briefcase className="h-4 w-4" />
                Join as Alumni
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Students Card */}
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 border-accent/20 hover:border-accent/40 bg-gradient-subtle">
            <CardHeader className="space-y-6 text-center">
              <div className="bg-gradient-accent p-4 rounded-2xl w-fit mx-auto group-hover:shadow-glow transition-all duration-300">
                <BookOpen className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  For Students
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Accelerate your career with guidance from industry leaders
                </CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {studentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Success Rate</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Students with mentors are 3x more likely to secure internships and 5x more likely to receive job offers.
                </p>
              </div>
              
              <Button variant="accent" className="w-full gap-2 group-hover:shadow-glow">
                <Users className="h-4 w-4" />
                Join as Student
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which option is right for you?
          </p>
          <Button variant="outline" size="lg" className="gap-2">
            Learn More About Our Community
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserTypes;