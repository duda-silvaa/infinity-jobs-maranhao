
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import AreaCliente from "./pages/AreaCliente";
import AreaPrestador from "./pages/AreaPrestador";
import Suporte from "./pages/Suporte";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ClientePanel from "./pages/ClientePanel";
import PrestadorPanel from "./pages/PrestadorPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/area-cliente" element={<AreaCliente />} />
          <Route path="/area-prestador" element={<AreaPrestador />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cliente-panel" element={<ClientePanel />} />
          <Route path="/prestador-panel" element={<PrestadorPanel />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
