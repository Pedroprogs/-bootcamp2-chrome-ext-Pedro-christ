# Extensão Lista de Tarefas Rápida
Um projeto de extensão simples para o Google Chrome (Manifest V3) que funciona como uma lista de tarefas (to-do list).

#  Objetivo
O objetivo desta extensão é demonstrar o uso do `chrome.storage` para persistir dados e a manipulação do DOM para criar uma interface interativa no popup da extensão. É um ótimo projeto para iniciantes.

# Funcionalidades
* **Adicionar Tarefas:** Um campo de texto e um botão para adicionar novas tarefas à sua lista.
* **Visualizar Tarefas:** As tarefas adicionadas são exibidas em uma lista clara e simples.
* **Remover Tarefas:** Cada tarefa tem um botão para ser removida individualmente.
* **Persistência de Dados:** As tarefas são salvas usando `chrome.storage.local`, então elas não desaparecem quando você fecha o popup ou o navegador.

#  Instalação
Como esta extensão não está na Chrome Web Store, você pode instalá-la manualmente no modo de desenvolvedor.
1.  **Baixe o código:** Baixe este repositório como um arquivo `.zip` e descompacte-o em uma pasta no seu computador.
2.  **Abra o Chrome:** Vá para a página de extensões do Chrome em `chrome://extensions`.
3.  **Ative o Modo de Desenvolvedor:** No canto superior direito da página, ative o "Modo de desenvolvedor".
4.  **Carregue a extensão:** Clique em "Carregar sem compactação" e selecione a pasta inteira do projeto.

O ícone da lista de tarefas aparecerá na sua barra de ferramentas, pronto para usar!

# Licença
Este projeto está sob a licença [MIT](LICENSE).