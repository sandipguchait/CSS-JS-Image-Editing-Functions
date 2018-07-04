const inputs = document.querySelectorAll('.controls input');

function changeupdate() {
    const change = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + change);

}

inputs.forEach(input => input.addEventListener('change', changeupdate));
inputs.forEach(input => input.addEventListener('mousemove', changeupdate));
