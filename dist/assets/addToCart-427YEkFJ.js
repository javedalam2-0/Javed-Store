import{u as S,p as P}from"./updateCartValue-Bfay-Nx0.js";const d=()=>{let e=localStorage.getItem("cartProductLS");return e?(e=JSON.parse(e),S(e),e):[]},f=(e,r)=>{let c=d().find(u=>u.id===e),n=1;return c&&(n=c.quantity,r=c.price),{quantity:n,price:r}},y=()=>{let e=document.querySelector(".productSubTotal"),r=document.querySelector(".productFinalTotal"),n=d().reduce((u,l)=>{let t=parseInt(l.price)||0;return u+t},0);e.textContent=`₹${n}`,r.textContent=`₹${n+50}`},q=(e,r,o,c)=>{const n=document.querySelector(`#card${r}`),u=n.querySelector(".productQuantity"),l=n.querySelector(".productPrice");let t=1,a=0,i=d(),m=i.find(s=>s.id===r);m?(t=m.quantity,a=m.price):(a=c,c=c),e.target.className==="cartIncrement"&&(t<o?t+=1:t===o&&(t=o,a=c*o)),e.target.className==="cartDecrement"&&t>1&&(t-=1),a=c*t,a=Number(a.toFixed(2));let p={id:r,quantity:t,price:a};p=i.map(s=>s.id===r?p:s),localStorage.setItem("cartProductLS",JSON.stringify(p)),u.innerText=t,l.innerText=a,y()};function g(e,r){const o=document.createElement("div");o.classList.add("toast"),o.textContent=`Product with ID ${r} has been deleted.`,document.body.appendChild(o),setTimeout(()=>{o.remove()},2e3)}const x=e=>{let r=d();r=r.filter(c=>c.id!==e),localStorage.setItem("cartProductLS",JSON.stringify(r));let o=document.getElementById(`card${e}`);o&&(o.remove(),g("delete",e)),y(),S(r)};let T=d(),C=P.filter(e=>T.some(r=>r.id===e.id));console.log(C);const h=document.querySelector("#productCartContainer"),v=document.querySelector("#productCartTemplate"),E=()=>{C.forEach(e=>{const{category:r,id:o,image:c,name:n,stock:u,price:l}=e;let t=document.importNode(v.content,!0);const a=f(o,l);t.querySelector("#cardValue").setAttribute("id",`card${o}`),t.querySelector(".category").textContent=r,t.querySelector(".productName").textContent=n,t.querySelector(".productImage").src=c,t.querySelector(".productQuantity").textContent=a.quantity,t.querySelector(".productPrice").textContent=a.price,t.querySelector(".stockElement").addEventListener("click",i=>{q(i,o,u,l)}),t.querySelector(".remove-to-cart-button").addEventListener("click",()=>x(o)),h.appendChild(t)})};E();y();
