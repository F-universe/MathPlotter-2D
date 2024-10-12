function plotFunction() {
    const input = document.getElementById('functionInput').value;
    console.log(Plotly); // Verifica che Plotly sia caricato correttamente

    try {
        const func = math.compile(input);
        const xValues = [];
        const yValues = [];

        // Generazione di valori da -10 a 10 per x
        for (let x = -10; x <= 10; x += 0.1) {
            const y = func.evaluate({ x: x });
            xValues.push(x);
            yValues.push(y);
        }

        const trace = {
            x: xValues,
            y: yValues,
            type: 'scatter'
        };

        const layout = {
            title: `Graph of ${input}`,
            xaxis: { title: 'x' },
            yaxis: { title: 'f(x)' }
        };

        Plotly.newPlot('plot', [trace], layout);
    } catch (error) {
        console.error('Errore:', error);
        alert('Invalid function! Please enter a valid function of x.');
    }
}
