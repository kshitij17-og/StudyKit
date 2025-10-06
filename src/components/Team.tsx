import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Server, Megaphone, FileText } from "lucide-react";

const Team = () => {
  const teamMembers = [
    { name: "Jeet Gawad", role: "Frontend Development", icon: Code },
    { name: "Nirja Chorghe", role: "Design & Layout", icon: Palette },
    { name: "Mihika Chaudhari", role: "Backend Development", icon: Server },
    { name: "Kshitij Atalkar", role: "Marketing & Outreach", icon: Megaphone },
    { name: "Mihir Chaudhari", role: "Content & Documentation", icon: FileText },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Meet Our{" "}
            <span className="gradient-hero bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate students building the future of education
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-hero">
                  <member.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-1 font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
