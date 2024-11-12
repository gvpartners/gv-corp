export let upperInitial = {
    y: 100,
    opacity: 0,
}
export function upperAnimation(delay = 0){
    return {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 250,
            damping: 25,
            mass: 0.5,
            y: {
                delay: delay*50,
                duration: 600,
            },
            opacity: {
                delay: delay*50,
                duration: 600,
            }
        },
    }
}
export let centerInitial = {
    scale: 0.2,
    opacity: 0
}
export function centerAnimation(delay = 0){
    return {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 250,
            damping: 25,
            mass: 0.5,
            scale: {
                delay: delay*20,
                duration: 600,
            },
            opacity: {
                delay: delay*20,
                duration: 600,
            }
        },
    }
}
