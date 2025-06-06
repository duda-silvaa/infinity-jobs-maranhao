import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { servicoService } from '../services/servicoService';

const servicos = [
  'Reparos Gerais',
  'Limpeza Residencial',
  'Serviços Elétricos',
  'Pintura',
  'Jardinagem',
  'Mecânica Automotiva'
];

interface SolicitarServicoModalProps {
  children: React.ReactNode;
  onSuccess?: () => void;
  onSolicitacaoCreated?: () => void;
}

const SolicitarServicoModal = ({ children, onSuccess, onSolicitacaoCreated }: SolicitarServicoModalProps) => {
  const [servico, setServico] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Função para criar nova solicitação de serviço
  // Envia dados para servicoService.criarSolicitacao
  // que chama POST /api/solicitacoes
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!servico || !descricao || !endereco || !data || !horario) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    try {
      console.log('Criando nova solicitação de serviço...');
      
      // Chama endpoint POST /api/solicitacoes
      // Envia: { tipo_servico, descricao, endereco, data_solicitada, horario_solicitado, orcamento_maximo? }
      // Espera receber: { message: string, solicitacao: Solicitacao }
      await servicoService.criarSolicitacao({
        servico,
        descricao,
        endereco,
        data,
        horario,
        orcamento
      });
      
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Prestadores da sua região receberão sua solicitação em breve.",
      });
      
      console.log('Solicitação criada com sucesso');
      
      // Reset form
      setServico('');
      setDescricao('');
      setEndereco('');
      setData('');
      setHorario('');
      setOrcamento('');
      setOpen(false);
      
      // Chamar callback de sucesso se fornecido
      if (onSuccess) {
        onSuccess();
      }
      
      // Chamar callback onSolicitacaoCreated se fornecido
      if (onSolicitacaoCreated) {
        onSolicitacaoCreated();
      }
    } catch (error: any) {
      console.error('Erro ao criar solicitação:', error);
      
      let errorMessage = "Erro ao enviar solicitação. Tente novamente.";
      
      if (error.message.includes('400')) {
        errorMessage = "Dados inválidos. Verifique as informações.";
      } else if (error.message.includes('401')) {
        errorMessage = "Você precisa estar logado para solicitar serviços.";
      } else if (error.message.includes('500')) {
        errorMessage = "Erro interno do servidor. Tente novamente mais tarde.";
      }
      
      toast({
        title: "Erro ao enviar solicitação",
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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Solicitar Novo Serviço</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="servico">Tipo de Serviço *</Label>
            <Select value={servico} onValueChange={setServico} required>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo de serviço" />
              </SelectTrigger>
              <SelectContent>
                {servicos.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="descricao">Descrição do Serviço *</Label>
            <Textarea
              id="descricao"
              placeholder="Descreva detalhadamente o que precisa ser feito..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="endereco">Endereço Completo *</Label>
            <Input
              id="endereco"
              placeholder="Rua, número, bairro, cidade, CEP"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="data">Data Preferida *</Label>
              <Input
                id="data"
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="horario">Horário Preferido *</Label>
              <Input
                id="horario"
                type="time"
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="orcamento">Orçamento Máximo (R$)</Label>
            <Input
              id="orcamento"
              type="number"
              placeholder="Ex: 250.00"
              value={orcamento}
              onChange={(e) => setOrcamento(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="bg-[#0A1F44] hover:bg-blue-900"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Solicitação'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SolicitarServicoModal;
