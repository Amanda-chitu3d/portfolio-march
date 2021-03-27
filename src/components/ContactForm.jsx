import React from 'react'
import{Form,Button,Container,Col} from "react-bootstrap"

function ContactForm() {

  return (
    <Container className="mt-2 mb-3">
      <h2>Contact Form</h2>
    <Form>
     <Form.Row>
       <Form.Group as={Col}>
       <Form.Label>First Name</Form.Label>
       <Form.Control placeholder="Tom" />
         </Form.Group>
         <Form.Group as={Col}>
       <Form.Label>Last Name</Form.Label>
       <Form.Control placeholder="Brown" />
         </Form.Group>
         </Form.Row> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
<Form.Group controlId="subject">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="I got wrong items of online order." />
  </Form.Group>

  <Form.Group controlId="messages">
    <Form.Label>Send Us Messages</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Hi, my order id is #5600022222, I got wrong items." />
  </Form.Group>
  
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree to terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit Form
  </Button>
</Form></Container>
    )
  }
  
  export default ContactForm

  // --------- Difficult to fixed About Requirement---------
  // const { Formik } = formik;
  // const schema = yup.object().shape({
  //   firstName: yup.string().required(),
  //   lastName: yup.string().required(),
 
  //   terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  // });

  //   return (
     
  //     <Formik
  //     validationSchema={schema}
  //     onSubmit={console.log}
  //     initialValues={{
  //       firstName: 'Mark',
  //       lastName: 'Otto',
  //       username: '',
  //       city: '',
  //       state: '',
  //       zip: '',
  //       terms: false,
  //     }}
  //   >
  //     {({
  //       handleSubmit,
  //       handleChange,
  //       handleBlur,
  //       values,
  //       touched,
  //       isValid,
  //       errors,
  //     }) => (
  //       <Form noValidate onSubmit={handleSubmit}>
  //         <Form.Row>
  //           <Form.Group as={Col} controlId="validationFormik01">
  //             <Form.Label>First name</Form.Label>
  //             <Form.Control
  //               type="text"
  //               name="firstName"
  //               value={values.firstName}
  //               onChange={handleChange}
  //               isValid={touched.firstName && !errors.firstName}
  //             />
  //             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  //           </Form.Group>
  //           <Form.Group as={Col} controlId="validationFormik02">
  //             <Form.Label>Last name</Form.Label>
  //             <Form.Control
  //               type="text"
  //               name="lastName"
  //               value={values.lastName}
  //               onChange={handleChange}
  //               isValid={touched.lastName && !errors.lastName}
  //             />

  //             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  //           </Form.Group>
  //         </Form.Row>
  //         <Form.Group controlId="formGridEmail">
  //     <Form.Label>Email</Form.Label>
  //     <Form.Control type="email" placeholder="Enter email" />
  //   </Form.Group>
  //   <Form.Group controlId="exampleForm.ControlTextarea1">
  //   <Form.Label>Message</Form.Label>
  //   <Form.Control as="textarea" rows={3} />
  //   </Form.Group>


  //         <Form.Group>
  //           <Form.Check
  //             required
  //             name="terms"
  //             label="Agree to terms and conditions"
  //             onChange={handleChange}
  //             isInvalid={!!errors.terms}
  //             feedback={errors.terms}
  //             id="validationFormik0"
  //           />
  //         </Form.Group>
  //         <Button type="submit">Submit form</Button>
  //       </Form>
  //     )}
  //   </Formik>

