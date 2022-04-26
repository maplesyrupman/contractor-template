function validateEmail(email) {
    return email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ?
    true :
    false
}

export default function validateForm(formState) {
    const errors = {}
    
    if (!formState.name.trim().length > 0) {
        errors.name = true
    }
    if (!validateEmail(formState.email)) {
        errors.email = true
    } 

    return errors
}