(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=[{id:1,name:"Laptop",category:"Computers",brand:"ExampleBrand",price:5000.99,stock:50,description:"Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",image:"public/image/lapi.png"},{id:2,name:"Smartphone",category:"Mobiles",brand:"TechGadget",price:3000.99,stock:100,image:"public/image/iphone.png",description:"Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."},{id:3,name:"Wireless Headphones",category:"Audio",brand:"SoundBeats",price:1799.99,stock:30,image:"public/image/headphone.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:4,name:"Watches",category:"Wearables",brand:"FitTech",price:1299.99,stock:20,image:"public/image/watch.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."},{id:5,name:"Speakers",category:"Audio",brand:"SoundBeats",price:2999.99,stock:30,image:"public/image/speakers.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:6,name:"Television",category:"Video",brand:"Samsung",price:3500.99,stock:20,image:"public/image/tv.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."}],n=document.querySelector("#cartValue"),d=a=>n.innerHTML=` <i class="fa-solid fa-cart-shopping">${a.length}</i>`;export{c as p,d as u};
