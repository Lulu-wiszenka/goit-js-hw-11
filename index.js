import{a as f,S as m,i}from"./assets/vendor-GgwdjDaY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function h(s){return f("https://pixabay.com/api/",{params:{key:"56141356-f92620e8971d743a7b3ebfb5b",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const y=new m(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}),n=document.querySelector(".gallery"),c=document.querySelector("#loader");function g(s){console.log("lalala!");const t=s.map(({webformatURL:o,largeImageURL:l,tags:e,likes:r,views:a,comments:u,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link-img" href="${l}">
            <img src="${o}" alt="${e}" class="gallery-img"/>
          </a>
          <div class="descr-container">
            <h3 class="gallery-likes"> Likes <br/> ${r} </h3>
            <h3 class="gallery-views"> Views <br/> ${a} </h3>
            <h3 class="gallery-comments"> Comments <br/> ${u} </h3>
            <h3 class="gallery-downloads"> Downloads <br/> ${d} </h3>
          </div>
        </li>`).join("");console.log(t),n.innerHTML=t,y.refresh()}function p(){n.innerHTML=""}function b(){c.classList.remove("hidden")}function L(){c.classList.add("hidden")}const S=document.querySelector("form"),$=document.querySelector('input[name="search-text"]');S.addEventListener("submit",v);function v(s){s.preventDefault(),p();const t=$.value;t&&(b(),h(t).then(o=>{o.hits.length>0?(console.log(o.hits),g(o.hits)):i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(o=>{i.error({title:"Error",message:`${o.message}`})}).finally(()=>{L(),s.target.reset()}))}
//# sourceMappingURL=index.js.map
