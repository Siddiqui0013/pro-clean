'use client';

import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  ReactNode 
} from 'react';

export enum UserRole {
  ADMIN = 'admin',
  CLEANER = 'cleaner',
  CLIENT = 'client',
}

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface UserContextValue {
  user: User | null;
  loading: boolean;
//   login: (credentials: LoginCredentials) => Promise<User>;
  login : (credentials: LoginCredentials) => void;
//   logout: () => Promise<void>;
  logout: () => void;
  updateUser: (userData: User | null) => void;
  isAuthenticated: () => boolean;
  hasRole: (role: UserRole) => boolean;
  roles: typeof UserRole;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const updateUser = (userData: User | null) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  };

//   const login = async (credentials: LoginCredentials): Promise<User> => {
//     try {
//       setLoading(true);
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });
      
//       if (!response.ok) {
//         throw new Error('Login failed');
//       }
      
//       const userData = await response.json();
//       updateUser(userData);
//       return userData;
//     } catch (error) {
//       console.error('Login error:', error);
//       throw error;
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Logout function
//   const logout = async (): Promise<void> => {
//     try {
//       // Replace with your actual API call
//       await fetch('/api/auth/logout', {
//         method: 'POST',
//       });
      
//       updateUser(null);
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

  // Check if user is authenticated
 
 const login = (credentials: LoginCredentials) =>{
    if(credentials.email === "admin@gmail.com" && credentials.password === "sss"){
        const userData: User = {
            id: "1",
            name: "Admin",
            email: "admin@gmail.com",
            role: UserRole.ADMIN
    }
    updateUser(userData)
}
    if(credentials.email === "client@gmail.com" && credentials.password === "sss"){
        const userData: User = {
            id: "2",
            name: "Client",
            email: "client@gmail.com",
            role: UserRole.CLIENT
    }
    updateUser(userData)
}
    if(credentials.email === "cleaner@gmail.com" && credentials.password === "sss"){
        const userData: User = {
            id: "3",
            name: "Cleaner",
            email: "cleaner@gmail.com",
            role: UserRole.CLEANER
        }
        updateUser(userData)
    }
 }

  const logout = () => {
    updateUser(null);
  };

  const isAuthenticated = (): boolean => !!user;

  // Check user role
  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  // Load user from localStorage on initial render
  useEffect(() => {
    const loadUser = async () => {
      try {
        // First try to get user from localStorage (only works client-side)
        if (typeof window !== 'undefined') {
          const storedUser = localStorage.getItem('user');
          
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          } else {
            // Alternatively, check session on the server
            const response = await fetch('/api/auth/me');
            if (response.ok) {
              const userData = await response.json();
              updateUser(userData);
            }
          }
        }
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        updateUser,
        isAuthenticated,
        hasRole,
        roles: UserRole,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextValue {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}