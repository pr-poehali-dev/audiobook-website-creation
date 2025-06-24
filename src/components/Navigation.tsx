import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import AuthDialog from "@/components/AuthDialog";

const Navigation = () => {
  const location = useLocation();
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/library", label: "Библиотека", icon: "Library" },
    { path: "/account", label: "Аккаунт", icon: "User" },
    { path: "/subscription", label: "Подписка", icon: "Crown" },
    { path: "/admin", label: "Админ", icon: "Settings" },
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Headphones" size={32} className="text-primary" />
            <span className="text-xl font-bold font-montserrat">AudioLib</span>
          </div>

          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-white hover:text-white hover:bg-accent"
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-white text-sm">
                  Привет, {user?.name}!
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="text-white border-white hover:text-black"
                >
                  <Icon name="LogOut" size={16} className="mr-2" />
                  Выйти
                </Button>
              </>
            ) : (
              <Button
                onClick={() => setAuthDialogOpen(true)}
                className="text-white"
              >
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            )}
          </div>
        </div>
      </div>

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} />
    </nav>
  );
};

export default Navigation;
