import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Notes = () => {
  const jeeNotes = [
    { subject: "Physics", topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics"], count: 45 },
    { subject: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"], count: 52 },
    { subject: "Mathematics", topics: ["Calculus", "Algebra", "Trigonometry", "Coordinate Geometry"], count: 48 },
  ];

  const neetNotes = [
    { subject: "Physics", topics: ["Mechanics", "Thermodynamics", "Modern Physics"], count: 38 },
    { subject: "Chemistry", topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"], count: 50 },
    { subject: "Biology", topics: ["Botany", "Zoology", "Human Physiology", "Genetics"], count: 62 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Free Study Notes
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Download comprehensive notes for JEE and NEET preparation, absolutely free!
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">JEE Notes</h2>
              <p className="text-muted-foreground">
                Complete notes covering all topics for JEE Main and Advanced
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 mb-16">
              {jeeNotes.map((note, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <FileText className="h-8 w-8 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {note.count} PDFs
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{note.subject}</CardTitle>
                    <CardDescription>Free study materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {note.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Button variant="default" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Notes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2">NEET Notes</h2>
              <p className="text-muted-foreground">
                Comprehensive notes for NEET preparation with detailed explanations
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {neetNotes.map((note, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <FileText className="h-8 w-8 text-secondary" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {note.count} PDFs
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{note.subject}</CardTitle>
                    <CardDescription>Free study materials</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {note.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <Button variant="secondary" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Notes
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Notes;
