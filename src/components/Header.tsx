import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, User, Users } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AlumniConnect</h1>
              <p className="text-xs text-muted-foreground">Building Futures Together</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="/events" className="text-foreground hover:text-primary transition-colors font-medium">
              Events
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/login">
              <Button variant="outline" className="gap-2">
                <User className="h-4 w-4" />
                Login
              </Button>
            </a>
            <a href="/login">
              <Button variant="accent" className="gap-2">
                <Users className="h-4 w-4" />
                Join Network
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="/#features" className="text-foreground hover:text-primary transition-colors font-medium">
                Features
              </a>
              <a href="/events" className="text-foreground hover:text-primary transition-colors font-medium">
                Events
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <a href="/login">
                  <Button variant="outline" className="gap-2 w-full">
                    <User className="h-4 w-4" />
                    Login
                  </Button>
                </a>
                <a href="/login">
                  <Button variant="accent" className="gap-2 w-full">
                    <Users className="h-4 w-4" />
                    Join Network
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;