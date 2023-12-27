# SoundFX Octapad

Este repositório contém o código e os recursos para um octapad virtual com efeitos sonoros. Ele permite que os usuários acionem diferentes amostras de áudio ao pressionar teclas específicas no teclado ou ao clicar nos pads.

## Uso

Para usar o Octapad, siga estas etapas:

1.  Clone o repositório para a sua máquina local.
2.  Abra o arquivo `index.html` em um navegador da web.
3.  Pressione as teclas correspondentes no teclado ou clique nos pads para acionar os efeitos sonoros.

## Recursos

*   Reproduza efeitos sonoros pressionando teclas no teclado ou clicando nos pads.
*   A reprodução do áudio reinicia se a mesma tecla for pressionada novamente enquanto a reprodução anterior ainda estiver ocorrendo.
*   Múltiplas instâncias de áudio podem ser reproduzidas simultaneamente.
*   As instâncias de áudio são automaticamente removidas da lista ativa quando a reprodução termina.

## Personalização

Para personalizar os efeitos sonoros e suas teclas correspondentes, modifique os atributos `data-audio` no código HTML. Você pode substituir os caminhos das URLs pelos seus próprios arquivos de áudio ou adicionar mais pads com sons diferentes.

## Dependências

Este projeto depende dos seguintes arquivos:

*   `index.html` - o arquivo HTML principal que contém a estrutura e elementos do octapad.
*   `style.css` - a folha de estilo em cascata que define a aparência visual do octapad.
*   `main.js` - o arquivo JavaScript que trata a reprodução do áudio e os ouvintes de eventos de teclado.

## Contribuindo

Contribuições são bem-vindas! Se você tiver alguma sugestão ou melhoria, sinta-se à vontade para fazer um fork do repositório, fazer suas alterações e enviar uma solicitação de pull.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE), o que significa que você pode usá-lo e modificá-lo livremente para fins pessoais ou comerciais.
