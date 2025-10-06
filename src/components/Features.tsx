import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Trophy, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart,
      title: "Interactive Dashboard",
      description: "Track your progress in real-time and improve your strengths efficiently.",
    },
    {
      icon: Trophy,
      title: "Gamified Quizzes",
      description: "Earn points, badges, and compete with friends to make learning fun.",
    },
    {
      icon: Users,
      title: "Expert Tutors",
      description: "Get your doubts cleared instantly with the help of experienced educators.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to{" "}
            <span className="gradient-hero bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you learn faster and smarter
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card-hover transform hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
