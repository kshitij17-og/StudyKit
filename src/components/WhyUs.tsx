import { CheckCircle } from "lucide-react";

const WhyUs = () => {
  const reasons = [
    "Affordable compared to other e-learning platforms",
    "Gamified learning to keep students motivated",
    "Localized content for Indian students",
    "Easy-to-use interface for all age groups",
    "Dedicated 24/7 customer support",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Choose{" "}
              <span className="gradient-hero bg-clip-text text-transparent">Study Kit?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're committed to making education accessible and effective for everyone
            </p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-card-hover"
              >
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
