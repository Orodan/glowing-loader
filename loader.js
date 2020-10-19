(function () {
    const loader = document.getElementById('loader')

    const dotNumber = 20

    for(let i = 1; i <= dotNumber; i++) {
        const dot = document.createElement('span')
        dot.style.cssText = `--i: ${i}`

        loader.appendChild(dot)
    }
})()
