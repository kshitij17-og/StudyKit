import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Hand, Zap, Globe, Brain, Users, Rocket, Target, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/signlanguage-hero.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the future! 🎉",
      description: "You've joined the waitlist. We'll notify you when we launch.",
    });
    setEmail("");
  };

  const features = [
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Real-time Sign Recognition",
      description: "AI detects hand, face, and body gestures via camera and converts them into text/speech instantly."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Reverse Translation",
      description: "Converts spoken words or text into animated 3D sign language visuals."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multilingual Support",
      description: "Choose ASL, ISL, BSL, and more for input/output across different sign languages."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Learning",
      description: "Smart context understanding with sentence-level translation and regional gesture support."
    }
  ];

  const phases = [
    { phase: "Phase 1", title: "Research & Foundation", status: "In Progress", description: "Building basic gesture recognition with 20-30 sign accuracy" },
    { phase: "Phase 2", title: "MVP Build", status: "Upcoming", description: "Real-time camera feed with translation overlay" },
    { phase: "Phase 3", title: "Two-Way Translation", status: "Planned", description: "Seamless communication between deaf and hearing users" },
    { phase: "Phase 4", title: "Intelligence & Scaling", status: "Future", description: "Context-based sentences and regional gestures" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Hand className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary">LinguaSign</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#roadmap" className="text-sm font-medium hover:text-primary transition-colors">Roadmap</a>
            <a href="#impact" className="text-sm font-medium hover:text-primary transition-colors">Impact</a>
            <Button variant="hero" size="sm">Join Waitlist</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="w-fit">AI-Powered Accessibility</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Breaking Barriers with{" "}
                <span className="text-primary">Universal Sign Language Translation</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Real-time AI-powered translator that bridges the communication gap between the deaf and hearing — across all sign languages, anywhere in the world.
              </p>
              <form onSubmit={handleWaitlist} className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" variant="hero">
                  Join Waitlist
                </Button>
              </form>
              <div className="flex gap-8 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-muted-foreground">Sign Languages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Real-time</div>
                  <div className="text-muted-foreground">Translation</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Universal</div>
                  <div className="text-muted-foreground">Accessibility</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img
                src={heroImage}
                alt="People communicating with sign language"
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-accent/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Target className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
            <p className="text-xl text-muted-foreground italic">
              "To make sign language as universally understood as spoken language — creating a world where communication knows no barriers."
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Powered by <span className="text-primary">Cutting-Edge AI</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced computer vision and deep learning models work together to provide seamless, accurate translation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:shadow-card-hover transition-all hover-scale">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-accent/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Rocket className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">Development Roadmap</h2>
            <p className="text-muted-foreground">From prototype to global impact — our journey to revolutionize communication</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {phases.map((phase, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <CardTitle>{phase.phase}: {phase.title}</CardTitle>
                        <Badge variant={phase.status === "In Progress" ? "default" : "secondary"}>
                          {phase.status}
                        </Badge>
                      </div>
                      <CardDescription>{phase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Users className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">Social Impact & Market</h2>
            <p className="text-muted-foreground">Technology with a purpose — making the world more inclusive</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Target Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>466 million people worldwide with hearing loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hearing individuals wanting inclusive communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Schools and NGOs for the hearing-impaired</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Healthcare, education, and customer support sectors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Impact Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Remove barriers in education and employment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Improve healthcare access for the deaf community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Promote diversity and inclusion globally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Enable emergency services communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Bridge the Gap?</h2>
            <p className="text-lg opacity-90">
              Join us in creating a world where everyone can communicate freely. Be among the first to experience the future of accessibility.
            </p>
            <form onSubmit={handleWaitlist} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background text-foreground"
              />
              <Button type="submit" variant="secondary" size="lg">
                Get Early Access
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Hand className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">LinguaSign</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 LinguaSign. Breaking barriers through technology.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
