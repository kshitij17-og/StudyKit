import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const Books = () => {
  const books = [
    {
      title: "Concepts of Physics Vol 1 & 2",
      author: "H.C. Verma",
      price: "₹850",
      rating: 4.8,
      category: "Physics",
      description: "Essential for JEE Physics preparation",
    },
    {
      title: "Organic Chemistry",
      author: "Morrison & Boyd",
      price: "₹750",
      rating: 4.7,
      category: "Chemistry",
      description: "Comprehensive organic chemistry guide",
    },
    {
      title: "Mathematics for Class 12",
      author: "R.D. Sharma",
      price: "₹650",
      rating: 4.9,
      category: "Mathematics",
      description: "Complete mathematics reference",
    },
    {
      title: "NCERT Biology Class 11 & 12",
      author: "NCERT",
      price: "₹400",
      rating: 4.9,
      category: "Biology",
      description: "Must-have for NEET preparation",
    },
    {
      title: "Physical Chemistry",
      author: "O.P. Tandon",
      price: "₹700",
      rating: 4.6,
      category: "Chemistry",
      description: "Detailed physical chemistry concepts",
    },
    {
      title: "Problems in Physics",
      author: "I.E. Irodov",
      price: "₹550",
      rating: 4.8,
      category: "Physics",
      description: "Advanced problem-solving for JEE",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Buy Study Books
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get the best books for JEE and NEET preparation at affordable prices
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {books.map((book, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="secondary">{book.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span className="text-sm font-medium">{book.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight">{book.title}</CardTitle>
                    <CardDescription>by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {book.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{book.price}</span>
                      <Button variant="default">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </div>
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

export default Books;
