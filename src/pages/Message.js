

// <section className="lhhpGw fZhawX scrolled" data-section="cinq" tabindex="-1" aria-hidden="false">
//     <div className="responsivemessage">
        // <article>
        //     <div className="messageform">
        //         <h1 className="message"> Send Me A Message! </h1>
        //         <p className="reachout"> 
        //             Reach out to me with any project proposals or questions! 
        //         </p>
        //     </div>
        // </article>
//  <form class="contact-form hYlwmr" method="POST" target="_blank" action="" id="home-contact">
// <input type="hidden" name="_subject" value="Message For Olivia"/>
// <div className="form-row">
//     <div className="inputgroup"> 
//         <label for="full-name">Name </label>
//         <input id="full-name" placeholder="Enter your name" type="text" name="name" required="required"></input>
//     </div>

//     <div className="inputgroup" data-id="email">
//         <label for="email"> Email</label>
//         <input id="email" placeholder="Enter your email address" type="email" name="_replyto" required="required"></input>
//     </div>
// </div>

// <div className="form-row">
//     <div className="inputgroup" data-id="message">
//         <label for="message"> Message</label>
//         <textarea placeholder="I would love to talk about a project I have for you!" id="message" name="message" required="required" rows="7" minlength="10"></textarea>
//     </div>
// </div>
// <div className="buttoncontainer">
//     <button className="button" type="submit" id="submit-button">
//         <div> 
//             Speak Soon!
//         </div>
//         {/*  <svg width="52" height="22" viewBox="10 0 72 30" xmlns="http://www.w3.org/2000/svg" className="bow-arrow"><path fill="none" stroke="#4E4E50" stroke-width="3" stroke-miterlimit="0" d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path></svg> */}
//     </button>
// </div>
// </form>
// </div>
// </section> 


import React, { useState } from 'react';
import { Grid, TextField, Button, Container, Typography, Stack } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
    ...form,
      [name]: value,
    });

    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        setErrors({
        ...errors,
          email: 'Invalid email address',
        });
      } else {
        setErrors({
        ...errors,
          email: '',
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName ||!form.email ||!form.message) {
      setErrors({
      ...errors,
        fullName: form.fullName? '' : 'Please fill in all fields',
        email: form.email? '' : 'Please fill in all fields',
        message: form.message? '' : 'Please fill in all fields',
      });
      return;
    }

    if (errors.email) {
      setErrors({
      ...errors,
        email: 'Invalid email address',
      });
      return;
    }

    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const USER_ID = 'your_user_id';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container>
        <Stack 
            sx={{           
                alignItems: 'center',
                justifyContent: 'center',
                height: '70vh'
            }}
        >
        <Typography variant="h2">
            Get In Touch!
        </Typography>

        <Typography variant="h5"  sx={{ textAlign: 'left' }}>
            Reach with any projects or questions
        </Typography>

        <form onSubmit={handleSubmit} >
            <Grid container spacing={2} >
                
            <Grid item xs={12}>
                <TextField
                fullWidth
                variant='standard'
                id="fullName"
                name="fullName"
                label="Full Name"
                value={form.fullName}
                onChange={handleInputChange}
                error={errors.fullName? true : false}
                helperText={errors.fullName}
                />
            </Grid>
            <Grid item xs={12} >
                <TextField
                fullWidth
                variant='standard'
                id="email"
                name="email"
                label="Email"
                value={form.email}
                onChange={handleInputChange}
                error={errors.email? true : false}
                helperText={errors.email}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                fullWidth
                variant='standard'
                id="message"
                name="message"
                label="Message"
                value={form.message}
                onChange={handleInputChange}
                multiline
                rows={4}
                error={errors.message? true : false}
                helperText={errors.message}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                >
                Send Message
                </Button>
            </Grid>
            </Grid>
        </form>
      </Stack>
    </Container>
  );
};

export default ContactForm;