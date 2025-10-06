import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Get in{" "}
            <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're here to help you succeed
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card-hover">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">Customer Care</h3>
              <a href="tel:+919322099371" className="text-primary hover:underline">
                +91-9322099371
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card-hover">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 font-semibold">Email Support</h3>
              <a href="mailto:support@studykit.com" className="text-primary hover:underline">
                support@studykit.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
