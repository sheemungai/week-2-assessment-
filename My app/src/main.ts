import './style.css' 
 
import {products, addItemToCart, removeItemFromCart} from './data'


function renderApp() {
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  
   
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

