import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Users, 
  Briefcase, 
  Calendar, 
  GraduationCap, 
  Shield,
  Bot,
  Database,
  ArrowRight
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Database,
      title: "Alumni Database",
      description: "Comprehensive database storing alumni information, achievements, and professional details",
      gradient: "bg-gradient-primary"
    },
    {
      icon: MessageSquare,
      title: "Discussion Forums",
      description: "Engage in meaningful conversations with topic-based forums and real-time discussions",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Users,
      title: "Mentorship Programs",
      description: "Connect students with experienced alumni for guided career development",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Access career counseling, job opportunities, and professional development resources",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Calendar,
      title: "Events & Webinars",
      description: "Participate in alumni meetups, online webinars, and panel discussions",
      gradient: "bg-gradient-primary"
    },
    {
      icon: GraduationCap,
      title: "Academic Support",
      description: "Get academic guidance, research collaboration, and educational resources",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Advanced security with blockchain authentication and profile verification",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Smart chatbot for instant support, guidance, and platform navigation",
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-light px-4 py-2 rounded-full">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Platform Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Connect & Grow</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform brings together all the tools and features you need 
            for successful alumni-student networking and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="space-y-4">
                <div className={`${feature.gradient} p-3 rounded-lg w-fit group-hover:shadow-glow transition-all duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" className="gap-2">
            Explore All Features
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;