# sorteador_de_apresentacoes
Sistema de sorteio desenvolvido para atividade de apresentações em aula, que permite realizar sorteios aleatórios entre membros de equipe para apresentação de temas específicos. O projeto foi desenvolvido com a identidade visual da marca Daxcode, utilizando as cores corporativas e design moderno.

#Funcionalidades Principais

  *Sorteio Aleatório: Distribui temas entre integrantes de forma justa e aleatória;
  *Interface Intuitiva: Design limpo e fácil de usar;
  *Responsivo: Adaptável para desktop, tablet e mobile;
  *Validação de Dados: Verifica se há dados suficientes antes do sorteio;
  *Resultados Formatados: Apresentação clara dos pares (integrante + tema)

#Tecnologias Utilizadas

  *Frontend: HTML5, CSS3, JavaScript (ES6+);
  *Design: CSS Grid, Flexbox, Variáveis CSS;
  *Responsividade: Media Queries;
  *Sem Framework: Código vanilla para melhor performance

#Identidade Visual

O projeto utiliza as cores oficiais da Dax Oil:

  *Verde Dax: #006400;
  *Dourado: #D4AF37;
  *Preto: #000000;
  *Branco: #FFFFFF

#Estrutura do Projeto

sorteio-daxcode/
├──  index.html              # Página principal
├──  css/
│   └──  style.css           # Estilos e design responsivo
├──  js/
│   └──  script.js           # Lógica do sorteio e interações
└──  assets/
    ├──  images/
    │   └──  projetodDaxCode.jpeg  # Logo do projeto
    └──  fonts/              # Fontes adicionais


#Como Utilizar

Preparação dos Dados:

  *Insira os nomes dos integrantes (um por linha);
  *Insira os temas a serem apresentados (um por linha).

Realizar Sorteio:

  *Clique em "Realizar Sorteio";
  *O sistema distribuirá aleatoriamente os temas.

Visualizar Resultados:

  *Cada integrante será atribuído a um tema;
  *Os resultados são exibidos em cards organizados.

#Características Técnicas

  *Algoritmo de Sorteio;
  *Utiliza o algoritmo Fisher-Yates para embaralhamento;
  *Distribuição circular de temas (reutiliza temas se necessário);
  *Sorteio verdadeiramente aleatório.

#Design System

  *Tipografia: Segoe UI (sistema) com fallback para fontes sans-serif;
  *Bordas: Radius de 8-10px para elementos visuais;
  *Sombras: Profundidade sutil com box-shadow;
  *Transições: Animações suaves em hover e interações.

#Responsividade

  *Desktop: Layout com 800px de largura máxima;
  *Tablet: Ajustes em telas até 768px;
  *Mobile: Layout vertical em telas menores que 480px.

#Funcionalidades Avançadas

  *Validação em Tempo Real: Verifica dados antes do sorteio;
  *Scroll Suave: Navegação automática para resultados;
  *Estatísticas: Contagem de integrantes e temas;
  *Timestamp: Data e hora do sorteio registradas;
  *Efeitos Visuais: Feedback visual nas interações.

#Personalização
  *Modificando Cores;
  *Edite as variáveis CSS no arquivo style.css:

css
:root {
    --dax-green: #006400;
    --dax-gold: #D4AF37;
    --dax-black: #000000;
    --dax-white: #FFFFFF;
}
Adicionando Logo
Substitua a imagem em assets/images/projetodDaxCode.jpeg ou atualize o caminho no HTML.

#Compatibilidade
Chrome 60+;
Firefox 55+;
Safari 12+;
Edge 79+;
Dispositivos móveis iOS/Android.

#Desenvolvimento
Próximas Melhorias
Exportar resultados em PDF
Histórico de sorteios
Modo escuro/claro
Compartilhamento de resultados

Padrões de Código:
HTML semântico
CSS com metodologia BEM
JavaScript modular

Comentários explicativos

#Créditos
Desenvolvido por: Camila Paranhos
Ano: 2025
Empresa: Dax Oil
Projeto: Daxcode

#Licença
Este projeto é de uso interno da Dax Oil. Todos os direitos reservados.
