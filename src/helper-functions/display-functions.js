export const validExit = (direction, exits) => {
    if (exits.includes(direction)) {
        return 'active'
    } else {
        return ''
    }
} 

export const canMove = (direction, exits) => {
    if (exits.includes(direction)) {
        return true
    } else {
        return false
    }
}