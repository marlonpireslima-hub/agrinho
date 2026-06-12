// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    
    const botaoExplorar = document.getElementById('btn-explorar');
    
    // Adiciona o evento de clique no botão
    botaoExplorar.addEventListener('click', () => {
        // Alerta simpático de boas-vindas/conscientização
        alert('Obrigado por se interessar! Lembre-se: pequenas ações geram grandes mudanças na preservação do nosso planeta. 🌱');
        
        // Faz a página rolar suavemente até a seção de ecossistemas
        document.querySelector('.container').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});
