chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        chrome.storage.local.set({ tasks: [] });

        console.log('Extensão Lista de Tarefas instalada com sucesso!');
    }
});