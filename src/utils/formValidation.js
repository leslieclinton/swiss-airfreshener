import * as yup from 'yup'

let contactFormschema = yup.object().shape({
    name: yup.string().required().matches(/^[aA-zZ\s]+$/),
    email: yup.string().email(),
    location: yup.string().required(),
    phone: yup.number().required().min(11),
    years: yup.string().required(),
    areas: yup.string().required(),

  });

  export default contactFormschema;