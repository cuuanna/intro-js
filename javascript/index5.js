function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.includes(' ')) {
        return false;
    }
    if (password.includes(username)) {
        return false;
    }
    return true;
}

console.log(isValidPassword('123', 'anna'));
console.log(isValidPassword('sol sken', 'anna'));
console.log(isValidPassword('solSken123', 'anna'));
console.log(isValidPassword('Solsken123', 'anna'));