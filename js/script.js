document.addEventListener('DOMContentLoaded', function() {
    const drawBtn = document.getElementById('draw-btn');
    const resultSection = document.getElementById('result');
    const resultContent = document.getElementById('result-content');
    
    drawBtn.addEventListener('click', draw);
    
    function draw() {
        const membersInput = document.getElementById('members').value;
        const themesInput = document.getElementById('themes').value;
        
        const members = membersInput.split('\n')
            .map(m => m.trim())
            .filter(m => m !== '');
            
        const themes = themesInput.split('\n')
            .map(t => t.trim())
            .filter(t => t !== '');
        
        // Validação
        if(members.length === 0) {
            alert('Por favor, insira pelo menos um integrante da equipe!');
            return;
        }
        
        if(themes.length === 0) {
            alert('Por favor, insira pelo menos um tema para apresentação!');
            return;
        }
        
        // Embaralhar arrays usando Fisher-Yates
        const shuffledMembers = shuffleArray([...members]);
        const shuffledThemes = shuffleArray([...themes]);
        
        // Combinar membros com temas
        const result = shuffledMembers.map((member, index) => {
            const theme = shuffledThemes[index % shuffledThemes.length];
            return { member, theme };
        });
        
        // Exibir resultados
        displayResults(result);
        
        // Mostrar seção de resultados
        resultSection.style.display = 'block';
        
        // Rolar suavemente até os resultados
        resultSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    function displayResults(results) {
        resultContent.innerHTML = '';
        
        results.forEach((pair, index) => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `
                <div style="text-align: center; margin-bottom: 0.5rem;">
                    <span style="background-color: var(--dax-gold); color: var(--dax-black); padding: 0.3rem 0.8rem; border-radius: 20px; font-weight: bold;">
                        Apresentação ${index + 1}
                    </span>
                </div>
                <div style="text-align: center;">
                    <span class="highlight">${pair.member}</span> irá apresentar: 
                    <span class="theme-highlight">${pair.theme}</span>
                </div>
            `;
            resultContent.appendChild(div);
        });
        
        // Adicionar estatísticas
        const statsDiv = document.createElement('div');
        statsDiv.style.marginTop = '2rem';
        statsDiv.style.padding = '1rem';
        statsDiv.style.backgroundColor = '#f8f9fa';
        statsDiv.style.borderRadius = '8px';
        statsDiv.style.textAlign = 'center';
        statsDiv.innerHTML = `
            <p><strong>Total de integrantes:</strong> ${results.length}</p>
            <p><strong>Total de temas:</strong> ${new Set(results.map(r => r.theme)).size}</p>
            <p><strong>Data do sorteio:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        `;
        resultContent.appendChild(statsDiv);
    }
    
    // Efeito de digitação no placeholder
    const membersTextarea = document.getElementById('members');
    const themesTextarea = document.getElementById('themes');
    
    // Limpar placeholders ao focar
    [membersTextarea, themesTextarea].forEach(textarea => {
        textarea.addEventListener('focus', function() {
            if (this.value === '') {
                this.placeholder = '';
            }
        });
        
        textarea.addEventListener('blur', function() {
            if (this.value === '') {
                if (this.id === 'members') {
                    this.placeholder = 'Digite os nomes dos integrantes, um por linha\nExemplo:\nJoão Silva\nMaria Santos\nPedro Oliveira';
                } else {
                    this.placeholder = 'Digite os temas, um por linha\nExemplo:\nInteligência Artificial\nMachine Learning\nAnálise de Dados';
                }
            }
        });
    });
});