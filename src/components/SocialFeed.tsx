
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, User, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  likes: number;
  time: string;
  liked: boolean;
}

const SocialFeed = () => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Maria Santos",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "A Infinity TrabalheJá revolucionou meu negócio! Consegui encontrar clientes incríveis e expandir meus serviços de limpeza. Recomendo para todos os profissionais!",
      likes: 24,
      time: "há 2 horas",
      liked: false
    },
    {
      id: 2,
      author: "Carlos Oliveira",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Contratei um eletricista pela plataforma e fiquei impressionado com a qualidade! O processo foi super simples e o profissional chegou no horário combinado.",
      likes: 18,
      time: "há 4 horas",
      liked: false
    },
    {
      id: 3,
      author: "Ana Costa",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Como prestadora de serviços de design, posso dizer que a Infinity me conectou com projetos incríveis aqui no Maranhão. A comunidade é muito acolhedora!",
      likes: 31,
      time: "há 6 horas",
      liked: false
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        author: "Você",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        content: newComment,
        likes: 0,
        time: "agora",
        liked: false
      };
      setComments([newCommentObj, ...comments]);
      setNewComment('');
    }
  };

  const toggleLike = (id: number) => {
    setComments(comments.map(comment => 
      comment.id === id 
        ? { ...comment, liked: !comment.liked, likes: comment.liked ? comment.likes - 1 : comment.likes + 1 }
        : comment
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Comunidade Infinity TrabalheJá
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossa comunidade está falando e compartilhe sua experiência!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Formulário para novo comentário */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#0A1F44] mb-4">
              Compartilhe sua experiência
            </h3>
            <form onSubmit={handleSubmit}>
              <Textarea
                placeholder="O que você achou da Infinity TrabalheJá? Conte sua história..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="mb-4 min-h-[100px] resize-none"
              />
              <div className="flex justify-end">
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-[#0A1F44] to-blue-600 text-white hover:from-blue-900 hover:to-blue-700"
                  disabled={!newComment.trim()}
                >
                  Publicar
                </Button>
              </div>
            </form>
          </div>

          {/* Feed de comentários */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={comment.avatar} 
                      alt={comment.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-[#0A1F44]">{comment.author}</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {comment.time}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{comment.content}</p>
                    
                    {/* Ações do comentário */}
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => toggleLike(comment.id)}
                        className={`flex items-center space-x-2 transition-colors ${
                          comment.liked 
                            ? 'text-red-500 hover:text-red-600' 
                            : 'text-gray-500 hover:text-red-500'
                        }`}
                      >
                        <Heart size={18} className={comment.liked ? 'fill-current' : ''} />
                        <span className="text-sm">{comment.likes}</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle size={18} />
                        <span className="text-sm">Responder</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors">
                        <Share2 size={18} />
                        <span className="text-sm">Compartilhar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#0A1F44] to-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Faça parte da nossa comunidade!</h3>
              <p className="text-blue-100 mb-6">
                Junte-se a centenas de profissionais e clientes satisfeitos no Maranhão
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-400 text-[#0A1F44] hover:bg-yellow-300"
                >
                  Cadastre-se Agora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[#0A1F44]"
                >
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
