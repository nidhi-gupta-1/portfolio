import emailjs from 'emailjs-com';

const sendEmail = (name, email, message, setName, setEmail, setMessage) => {
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  emailjs.send(
    'service_mt4btew',
    'template_s0wgs4q',
    templateParams,
    'CD4iqIgirgaRHrcaR'
  ).then((response) => {
    alert('Email sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  }).catch((error) => {
    alert('Error sending email');
    console.log(error)
  });
};

export default sendEmail;