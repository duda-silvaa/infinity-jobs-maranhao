
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: 'cliente' | 'prestador';
}

const ProtectedRoute = ({ children, requiredUserType }: ProtectedRouteProps) => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0A1F44]"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredUserType && user?.type !== requiredUserType) {
    // Redirecionar para o painel correto baseado no tipo do usuário
    if (user?.type === 'cliente') {
      return <Navigate to="/cliente-panel" replace />;
    } else {
      return <Navigate to="/prestador-panel" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
