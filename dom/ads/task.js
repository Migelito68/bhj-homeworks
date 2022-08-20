let changeText = () => {
    
    setInterval(() => {
        let textActive = document.getElementsByClassName('rotator__case_active')[0];
        
        
        if (!textActive.nextElementSibling) {
            textActive.classList.remove('rotator__case_active');
            textActive = document.getElementsByClassName('rotator__case')[0];
        }

        textActive.classList.remove('rotator__case_active');
        textActive.nextElementSibling.classList.add('rotator__case_active');
        let color = textActive.dataset.color;
        textActive.style.color = color;

    }, 1000);
}

changeText();