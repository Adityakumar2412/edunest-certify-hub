
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogIn, LogOut } from "lucide-react";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 py-4 shadow-sm">
      <div className="edu-container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">Education Centre</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
            Courses
          </Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
          )}
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <Button variant="outline" onClick={logout} className="flex items-center gap-2">
                <LogOut size={18} />
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="flex items-center gap-2">
                <LogIn size={18} />
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
