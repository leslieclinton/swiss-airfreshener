import * as yup from 'yup'

let contactFormschema = yup.object().shape({
    name: yup.string().required().matches(/^[aA-zZ\s]+$/),
    email: yup.string().email(),
    reason: yup.string().required(),
    message: yup.string().required(),

  });

  export default contactFormschema;