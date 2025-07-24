import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Video } from "lucide-react";
import Header from "@/components/Header";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Meetup 2024",
      description: "Join us for networking, career discussions, and reconnecting with fellow alumni.",
      date: "March 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "University Campus, Main Auditorium",
      type: "In-Person",
      attendees: 150,
      category: "Networking"
    },
    {
      id: 2,
      title: "Tech Career Panel Discussion",
      description: "Industry experts share insights on latest tech trends and career opportunities.",
      date: "March 22, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Online via Zoom",
      type: "Virtual",
      attendees: 85,
      category: "Career"
    },
    {
      id: 3,
      title: "Entrepreneurship Workshop",
      description: "Learn from successful alumni entrepreneurs about starting and scaling businesses.",
      date: "April 5, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Business Incubator Hub",
      type: "In-Person",
      attendees: 60,
      category: "Workshop"
    },
    {
      id: 4,
      title: "Mentorship Program Launch",
      description: "Connect students with experienced alumni mentors for career guidance.",
      date: "April 12, 2024",
      time: "5:00 PM - 7:00 PM",
      location: "Student Center",
      type: "In-Person",
      attendees: 200,
      category: "Mentorship"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Alumni Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect, learn, and grow with our vibrant alumni community through exciting events and programs.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <Badge variant={event.type === "Virtual" ? "outline" : "default"}>
                    {event.type === "Virtual" ? (
                      <Video className="h-3 w-3 mr-1" />
                    ) : (
                      <MapPin className="h-3 w-3 mr-1" />
                    )}
                    {event.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.attendees} attendees
                  </div>
                  <Button className="w-full mt-4">
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-muted-foreground mb-6">
            Share your expertise with the community by organizing your own event.
          </p>
          <Button variant="accent" size="lg">
            Propose an Event
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Events;