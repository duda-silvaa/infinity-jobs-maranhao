
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../hooks/use-toast';
import { authService } from '../services/authService';

interface EditProfileProps {
  children: React.ReactNode;
}

const EditProfile = ({ children }: EditProfileProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    telefone: user?.telefone || '',
    cidade: user?.cidade || '',
    especialidade: user?.especialidade || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Função para atualizar perfil do usuário
  // Envia dados atualizados para authService.updateProfile
  // que chama PUT /api/user/profile
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Nome e email são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      console.log('Atualizando perfil do usuário...');
      
      // Chama endpoint PUT /api/user/profile
      // Envia: { name, email, telefone, cidade, especialidade? }
      // Espera receber: { message: string, user: UserData }
      const updatedUser = await authService.updateProfile({
        name: formData.name,
        email: formData.email,
        telefone: formData.telefone,
        cidade: formData.cidade,
        ...(user?.type === 'prestador' && { especialidade: formData.especialidade })
      });
      
      toast({
        title: "Perfil atualizado!",
        description: "Suas informações foram salvas com sucesso.",
      });
      
      console.log('Perfil atualizado:', updatedUser.name);
      setOpen(false);
      
      // Força recarregamento da página para atualizar dados no contexto
      window.location.reload();
    } catch (error: any) {
      console.error('Erro ao atualizar perfil:', error);
      
      let errorMessage = "Erro ao atualizar perfil. Tente novamente.";
      
      if (error.message.includes('400')) {
        errorMessage = "Dados inválidos. Verifique as informações.";
      } else if (error.message.includes('409')) {
        errorMessage = "Este e-mail já está sendo usado por outro usuário.";
      } else if (error.message.includes('500')) {
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
      }
      
      toast({
        title: "Erro na atualização",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                type="tel"
                placeholder="(98) 99999-9999"
                value={formData.telefone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                id="cidade"
                type="text"
                placeholder="São Luís"
                value={formData.cidade}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {user?.type === 'prestador' && (
            <div>
              <Label htmlFor="especialidade">Especialidade</Label>
              <Input
                id="especialidade"
                type="text"
                placeholder="Ex: Eletricista, Pedreiro, Designer..."
                value={formData.especialidade}
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="bg-[#0A1F44] hover:bg-blue-900"
              disabled={loading}
            >
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
