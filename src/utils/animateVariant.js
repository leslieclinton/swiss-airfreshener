export 
const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  in: {
    opacity: 1,
    y:-10,
    transition:{duration: 1}

  },
  out: {
    opacity: 0,
    y: 10,
    transition:{duration: .5}

  },
}
