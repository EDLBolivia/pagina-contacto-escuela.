
const contactForm = document.getElementById('contact-form') as HTMLFormElement;

if (contactForm) {
    contactForm.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault();

        // Use FormData for easy access to form fields
        const formData = new FormData(contactForm);
        const fullName = formData.get('fullName') as string;
        const university = formData.get('university') as string;
        const grade = formData.get('grade') as string;
        const documentType = formData.get('documentType') as string;
        const whatsapp = formData.get('whatsapp') as string;
        const message = formData.get('message') as string;

        // The target WhatsApp number (international format without '+', spaces, or dashes)
        const targetPhoneNumber = '59179115511';

        // Construct the message body for WhatsApp, using markdown for formatting
        const body = `
*Nuevo Contacto desde la Web*

*Nombre y Apellido:* ${fullName}
*Universidad:* ${university}
*Grado Académico:* ${grade}
*Documento Requerido:* ${documentType}
*Número de WhatsApp del cliente:* ${whatsapp}

*Mensaje:*
${message}
        `.trim();

        // Encode the message for the URL
        const encodedBody = encodeURIComponent(body);

        // Create the WhatsApp "click to chat" link
        const whatsappLink = `https://wa.me/${targetPhoneNumber}?text=${encodedBody}`;

        // Open WhatsApp in a new tab. The user will need to press send.
        window.open(whatsappLink, '_blank');
    });
}
