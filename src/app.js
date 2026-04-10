function greet(name) {
    return `Hello, ${name}!`;
}
    
module.exports = greet;  // Ensure function is exported for use in other files
// if run directly, print output (useful for debugging)    
if (require.main === module) {

    console.log(greet('World'));  // Example usage
}