
import React from 'react';
import { User, LogIn, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const UserMenu = () => {
  const { isAuthenticated, login, logout, user } = useAuth();

  return (
    <div className="absolute top-4 right-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          {isAuthenticated ? (
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon">
              <LogIn className="w-5 h-5" />
            </Button>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          {isAuthenticated ? (
            <>
              <DropdownMenuItem asChild>
                <Link to="/dashboard/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard/account">Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem onClick={login}>
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
