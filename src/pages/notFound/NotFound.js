import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageVariants } from '../../utils/animateVariant';

import './NotFound.css'


function NotFound() {
    return (
        <motion.div initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants} className="notFound">

            <h1> 404</h1>
            <h3>Page not found</h3>
            <Link to="/">Go back home</Link>
            
        </motion.div>
    )
}

export default NotFound
