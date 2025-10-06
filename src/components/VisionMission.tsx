import { Card, CardContent } from "@/components/ui/card";
import { Target, Rocket } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Vision &{" "}
            <span className="gradient-hero bg-clip-text text-transparent">Mission</span>
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card-hover">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To revolutionize education by making learning accessible, engaging, and personalized for every student across India and beyond.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card-hover">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Rocket className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Empower students with the right tools, resources, and guidance so they can learn smarter, achieve better results, and enjoy the process of studying.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
