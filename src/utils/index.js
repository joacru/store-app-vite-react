/**
 * This function calculates the total prices of the products
 * @param {Array} products Array of objects
 * @returns {number} Total price of products
 */
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}