// Generating hash for user email
String.prototype.hashCode = function () {
    var hash = 0,
        i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    } 
    return hash;
}

// Creating hash function
const getHash = (input) => {
    return input.hashCode();
}


export default getHash;