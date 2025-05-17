import './style.css' 
 
import {products, addItemToCart, removeItemFromCart} from './data'


function renderApp() {
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="products">
  ${products.map(product => `
        <div class="card">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <h3>$${product.price.toFixed(2)}</h3>
          <button class="btn" data-id="${product.id}">Add to Cart</button>
        </div>
      `).join('')}
    </div>
    <div class="cardcart">
      <h1>Your Cart (${products.reduce((sum, p) => sum + p.quantity, 0)})</h1>
      <ul>
        ${products.filter(p => p.quantity > 0).map(p => `
          <li>
            ${p.name} x${p.quantity} - $${p.totalPrice.toFixed(2)}
            <button class="remove" data-id="${p.id}">Remove</button>
          </li>
        `).join('')}
      </ul>
      <p>Total Price: $${products.reduce((sum, p) => sum + p.totalPrice, 0).toFixed(2)}</p>
   
  </div>
`;

document.querySelectorAll('.btn').forEach(btn =>{
  btn.addEventListener('click', (event) => {
    const id = Number((event.currentTarget as HTMLButtonElement).dataset.id);
    addItemToCart(id);
    renderApp();
  });
})
document.querySelectorAll('.remove').forEach(btn =>{
  btn.addEventListener('click', (event) => {
    const id = Number((event.currentTarget as HTMLButtonElement).dataset.id);
    removeItemFromCart(id);
    renderApp();
  });
})


}
renderApp();

