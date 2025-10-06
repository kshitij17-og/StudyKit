import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-semibold">Study Kit</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/notes" className="hover:text-primary transition-colors">Notes</Link>
            <Link to="/books" className="hover:text-primary transition-colors">Books</Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Study Kit. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
