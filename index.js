function contact(event) {
    event.preventDefault ();
    const loading = document.querySelector ('.modal__overlay--loading');
    const success = document.querySelector ('.modal__overlay--success');
    loading.classList =+ " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_27ap62g',
        'template_2vn9wxn',
        event.target, 
        '2AkFvnWfcb3Bsoykk'
    ).then(() => {
    
        loading.classList.remove ("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch (() => {
        loading.classList.remove ("modal__overlay--visible");
        alert(
            "The email service is temporary unavailable. Please contact me directly at andreas.antoniades17@gmail.com "
        );
    })

}

let isModalOpen = false;
function toggleModal (){
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList.remove ("modal--open")

    }
    
    document.body.classList += " modal--open";
}