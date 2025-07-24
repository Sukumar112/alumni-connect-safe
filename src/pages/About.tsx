import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Zap, Target, Heart, Globe } from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Community Building",
      description: "Connecting alumni and students through meaningful relationships and shared experiences."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Blockchain-powered security ensuring authentic profiles and safe interactions."
    },
    {
      icon: Zap,
      title: "AI-Powered",
      description: "Smart matching, content filtering, and intelligent recommendations for better connections."
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "Dedicated tools for mentorship, job placement, and professional development."
    },
    {
      icon: Heart,
      title: "Student Support",
      description: "Academic guidance, peer support, and resources for student success."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connecting alumni worldwide for international opportunities and collaboration."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Alumni Members" },
    { number: "5,000+", label: "Active Students" },
    { number: "500+", label: "Mentorship Pairs" },
    { number: "150+", label: "Events Hosted" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About AlumniConnect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building the future of alumni-student connections through technology, 
            community, and shared passion for learning and growth.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To create a thriving ecosystem where alumni and students can connect, collaborate, 
              and contribute to each other's success. We believe in the power of mentorship, 
              shared knowledge, and community support to transform careers and lives.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            What Makes Us Different
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Our Vision for the Future
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We envision a world where every student has access to mentorship, every alumni 
              can give back meaningfully, and every connection leads to opportunity. Through 
              innovative technology and genuine community building, we're making this vision reality.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2">Innovation</Badge>
              <Badge variant="secondary" className="px-4 py-2">Community</Badge>
              <Badge variant="secondary" className="px-4 py-2">Growth</Badge>
              <Badge variant="secondary" className="px-4 py-2">Impact</Badge>
              <Badge variant="secondary" className="px-4 py-2">Connection</Badge>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-muted-foreground mb-8">
            Whether you're an alumni looking to mentor or a student seeking guidance, 
            there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Join as Alumni
            </Button>
            <Button variant="outline" size="lg">
              Join as Student
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;