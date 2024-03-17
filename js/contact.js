(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "T8fVdqMc7hHSXlPLV",
    });
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_zs2wg2g', 'template_kb7ifjw', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}