document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            handleInput(value);
        });
    });

    document.addEventListener('keydown', (e) => {
        const validKeys = '0123456789/*-+.';
        const key = e.key;
        if (validKeys.includes(key)) {
            handleInput(key);
        } else if (key === 'Enter' || key === '=') {
            handleInput('=');
        } else if (key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (key === 'Escape') {
            display.value = '';
        }
    });

    function handleInput(value) {
        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    }
});