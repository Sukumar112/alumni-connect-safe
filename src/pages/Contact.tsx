import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react";
import Header from "@/components/Header";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@alumniconnect.edu",
      available: "24/7"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our support team",
      contact: "+1 (555) 123-4567",
      available: "Mon-Fri, 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our campus office",
      contact: "123 University Ave, Building A, Room 201",
      available: "Mon-Fri, 8AM-5PM"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available on website",
      available: "Mon-Fri, 9AM-6PM"
    }
  ];

  const faqs = [
    {
      question: "How do I create an alumni profile?",
      answer: "Click 'Join Network' and select 'Alumni'. You'll need to verify your graduation details."
    },
    {
      question: "Is the platform free to use?",
      answer: "Yes! AlumniConnect is completely free for all alumni and students."
    },
    {
      question: "How are profiles verified?",
      answer: "We use blockchain technology and institutional verification to ensure authentic profiles."
    },
    {
      question: "Can I host my own events?",
      answer: "Absolutely! Alumni can propose and host events through our Events section."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Need support? We're here to help you make the most of AlumniConnect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="userType">I am a...</Label>
                  <select 
                    id="userType" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select your role</option>
                    <option value="student">Current Student</option>
                    <option value="alumni">Alumni</option>
                    <option value="faculty">Faculty Member</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your question or feedback..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & FAQs */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Other Ways to Reach Us</h2>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-primary p-2 rounded-lg">
                          <method.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{method.title}</h3>
                          <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                          <p className="text-sm font-medium text-foreground">{method.contact}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{method.available}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                <HelpCircle className="inline h-6 w-6 mr-2" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="mt-12 bg-gradient-subtle">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Need Immediate Help?</h3>
            <p className="text-muted-foreground mb-4">
              For urgent technical issues or account problems, contact our emergency support line.
            </p>
            <Button variant="outline" size="lg">
              <Phone className="h-4 w-4 mr-2" />
              Emergency Support: +1 (555) 999-0000
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Contact;