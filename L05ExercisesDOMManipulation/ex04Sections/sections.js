function create(sentences) {

    for (const sentence of sentences) {
        let div = document.createElement('div');
        let par = document.createElement('p');

        par.textContent = sentence;
        par.style.display = 'none';

        div.appendChild(par);
        div.addEventListener('click',function (event) {
            event.target.children[0].style.display = 'inline-block'
        });

        document.getElementById('content').appendChild(div);
    }
}