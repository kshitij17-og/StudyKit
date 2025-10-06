import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, GraduationCap, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">
              Study Kit
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/notes" 
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/notes') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Free Notes</span>
            </Link>
            <Link 
              to="/books" 
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/books') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Books</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
