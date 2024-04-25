import { useAnimation, motion, useInView } from "framer-motion"
import React, { useEffect } from "react";
import { useRef } from "react";
import { repeat } from "rxjs";
 
type AnimatedTextProps = {
  text : string | string[]
  el ? : keyof JSX.IntrinsicElements                      //specify the HTML element type (e.g., "div", "span", "h1") in which the text will be wrapped  If not provided, it defaults to a paragraph element ("p").
  className?: string 
  once? : boolean
  repeatDelay ? : number                                    //representing the CSS class name(s) to be applied to the wrapping element.
}

//Remove initial & animate prop from char split & create a custom object
const defaultAnimations =  {
    //1st Prop hidden we add opacity 0 back
    hidden: {
        opacity: 0,
        y : 20
    },
    //2nd Prop visible we add opacity 1 back
    visible : {
        opacity : 1,
        y : 0,
        // add transition prop to make animation quicker
        transition: { 
            duration: 1
        }
    }

}

//if we wan animate the letters one by one
//we gats split the word in every letter 
export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  repeatDelay
} : AnimatedTextProps ) => {

    //create control with useAnimate prop
    const controls = useAnimation()

    // attach ref to elem dat we wanna know is in view or not
    const ref = useRef(null)

    //amount prop == At least 1/2 of elem must be inView b4 it triggers
    //we use inView by changing animate prop based on it it is inView or not, add once bool to obj if u wan animate once
    const isInView = useInView(ref,{amount : 0.5})

    //In Effect we will respond to the isInView bool
    //use a timeout to set it to hidden for a sec, then start all over again by setting it to visible 
    useEffect(() => {
        //create a Node.JS timeout
        let timeout: NodeJS.Timeout
        const show = () => {
            controls.start("visible")
            if (repeatDelay) {
                timeout = setTimeout( async () => {
                    await controls.start("hidden")
                    controls.start("visible")
                }, repeatDelay)
            }
        }
        if (isInView) {
            show()
        } else {
            controls.start("hidden")
        }

        return () => clearTimeout(timeout)

    }, [ isInView])

    //create a textArray
    const textArray = Array.isArray(text) ? text : [text]
 
    return (
    <Wrapper className = {className}>
        {/* screen readers go see full word without breaking it into diff spans */}
        <span className="sr-only">{text}</span>

        {/* split on each/every char i.e based on nada */}
        {/* Add initial & animate to the parent span */}
        {/* we're telling parent by default its hidden, immediately after it loads it should animate to state visible */}
        <motion.span
            ref = {ref} 
            initial = "hidden"
            animate = {controls}
            variants = {{
                visible : {transition : {staggerChildren: 0.1}},
                hidden: {},
            }}
            // transition={{staggerChil dren: 0.1}}
            aria-hidden>


            {textArray.map((line) => (
                
            // eslint-disable-next-line react/jsx-key
            <span>
            {/* wrap every word inside a span, split the text based on space*/}
            {line.split(" ").map((word) => (
             // eslint-disable-next-line react/jsx-key
             <span className="inline-block">

             {word.split('').map((char : string) =>  (
                 //Span is by default display inline so make it inline-block
                 // eslint-disable-next-line react/jsx-key
                 <motion.span className = "inline-block" variants = {defaultAnimations}>
            {char}
            </motion.span>))}
             <span className="inline-block">&nbsp;</span>
             </span>
             ))} 
            </span>
             ))}
            </motion.span>   
    </Wrapper>)
} 
export default function Framer() {
    return (
            <main className="bg-gray-900">
                <main className="mx-auto max-w-6xl pt-14 text-white">
                <section className="h-screen">
                    
                <p className="text-4xl md:text-[200px] md:leading-relaxed">
                    Scroll down...
                </p>
                </section>
                <section className="flex h-[150vh] flex-col items-center justify-center">
                 <AnimatedText  text = "Hello Bro how u dey" className="text-[100px]" />
                </section>


                <section className="flex min-h-[150vh] flex-col items-center justify-center">
                    <AnimatedText
                        el="h2"
                        text={[
                        "This is written on",
                        "a typing machine. Tick tick",
                        "tick tack tack...",
                        ]}
                        className="text-4xl"
                        repeatDelay={10000}
                        />
                </section>
                </main>
            </main>
    )
}




//No space btw letters and it cuts it off wherever it wants
//This happens coz every letter is individually inside a span and it thinks the priority to break it up is equal for each & every letter so it just decides to do what is wants
//Then make sure you split on the right things
//The animate prop b4 controls ws passed into it:  animate = {isInView ? "visible" : "hidden"}