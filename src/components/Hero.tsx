import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Free Platform for JEE & NEET Students</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Master Any Subject,{" "}
              <span className="text-primary">
                Anytime, Anywhere
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl">
              Join thousands of students from Vasai-Virar and beyond who are acing their exams with our free notes, interactive lessons, and personalized learning paths.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/notes">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Free Notes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/books">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Browse Books
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Free Resources</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-300">
            <div className="absolute inset-0 gradient-hero opacity-20 rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Students learning together" 
              className="relative rounded-3xl shadow-elegant w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
