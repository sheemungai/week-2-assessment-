import type { product } from './product.interface';
import data from './data.json';

export const products: product[] =data.map((item: any) => {
    return {
        id: item.id,
        name: item.name,
        price: item.price,
        description: item.description,
        quantity: 0,
        totalPrice: 0
    }
});

export function addItemToCart(id: number) {
    const product = products.find(item => item.id === id);
    if (product) {
        product.quantity++;
        product.totalPrice = product.price * product.quantity;
        console.log(`Added ${product.name} to cart. Total price: ${product.totalPrice}`);
    }
}

export function removeItemFromCart(id: number) {
    const product = products.find(item => item.id === id);
    if (product && product.quantity > 0) {
        product.quantity--;
        product.totalPrice = product.price * product.quantity;
        console.log(`Removed ${product.name} from cart. Total price: ${product.totalPrice}`);
    }
}

export function getTotalPrice(): number {
    return products.reduce((total, product) => total + product.totalPrice, 0);
}

