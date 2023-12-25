window.addEventListener('DOMContentLoaded', function () {
  const uiverses = document.querySelectorAll('.uiverse');
  const audioPlayer = document.getElementById('audioPlayer');

  // Mapeamento de teclas para índices dos pads
  const keyMap = {
    'Q': 0,
    'W': 1,
    'E': 2,
    'R': 3,
    'A': 4,
    'S': 5,
    'D': 6,
    'F': 7,
    'Z': 8,
    'X': 9,
    'C': 10,
    'V': 11
  };

  // Armazena as instâncias de áudio ativas
  const activeAudios = {};

  // Função para reproduzir áudio com base na tecla pressionada
  function playAudio(key) {
    const uiverseIndex = keyMap[key];
    if (uiverseIndex !== undefined && uiverses[uiverseIndex]) {
      const audioFile = uiverses[uiverseIndex].getAttribute('data-audio');

      // Verifica se já existe uma instância para a tecla
      if (activeAudios[key]) {
        // Reinicia a reprodução
        activeAudios[key].currentTime = 0;
      } else {
        // Cria uma nova instância de áudio
        const audioInstance = new Audio(audioFile);

        // Adiciona a instância à lista de áudios ativos
        activeAudios[key] = audioInstance;

        // Reproduz o áudio
        audioInstance.play();

        // Remove a instância da lista quando a reprodução terminar
        audioInstance.addEventListener('ended', function () {
          delete activeAudios[key];
        });
      }
    }
  }

  // Adiciona um ouvinte de teclado ao documento
  document.addEventListener('keydown', function (event) {
    const key = event.key.toUpperCase();
    playAudio(key);
  });

  // Adiciona ouvintes de clique para os pads (opcional)
  uiverses.forEach(function (uiverse, index) {
    uiverse.addEventListener('click', function () {
      const audioFile = uiverse.getAttribute('data-audio');
      const audioInstance = new Audio(audioFile);
      audioInstance.play();
    });
  });
});
