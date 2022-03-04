type CSSProperties = { 
  [state: string]: React.CSSProperties 
}

export function defaultFade(duration: number) {
  return {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
}

export const transitionFade: CSSProperties = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:   { opacity: 0, visibility: "hidden",},
}

export function defaultFadeTop(duration: number) {
  return {
    transition: `
      opacity ${duration}ms ease-in-out,
      transform ${duration}ms ease-in-out
    `,
    opacity: 0,
  }
}

export const transitionFadeTop: CSSProperties = {
  entering: {
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)"
  },
  entered: { 
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px)"
  },
  exiting: { 
    opacity: 0,
    transform: "translate3d(0px, -25px, 0px)"
  },
  exited: { 
    visibility: "hidden",
    opacity: 0,
    transform: "translate3d(0px, -25px, 0px)",
  },
}