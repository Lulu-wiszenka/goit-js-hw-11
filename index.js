import{a as d,S as f,i as m}from"./assets/vendor-Cce4fIue.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function h(a){return d("https://pixabay.com/api/",{params:{key:"56141356-f92620e8971d743a7b3ebfb5b",q:`${a}`,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const y=new f(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}),n=document.querySelector(".gallery"),i=document.querySelector("#loader");function g(a){console.log("lalala!");const t=a.map(({webformatURL:o,largeImageURL:l,tags:e,likes:r,views:s,comments:c,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link-img" href="${l}">
            <img src="${o}" alt="${e}" class="gallery-img"/>
          </a>
          <div class="descr-container">
            <h3 class="gallery-likes"> Likes <br/> ${r} </h3>
            <h3 class="gallery-views"> Views <br/> ${s} </h3>
            <h3 class="gallery-comments"> Comments <br/> ${c} </h3>
            <h3 class="gallery-downloads"> Downloads <br/> ${u} </h3>
          </div>
        </li>`).join("");console.log(t),n.innerHTML=t,y.refresh()}function p(){n.innerHTML=""}function b(){i.classList.remove("hidden")}function L(){i.classList.add("hidden")}const S=document.querySelector("form"),v=document.querySelector('input[name="search-text"]');S.addEventListener("submit",w);function w(a){a.preventDefault(),p();const t=v.value;t&&(b(),h(t).then(o=>{o.data.hits.length>0?(console.log(o.data.hits),g(o.data.hits)):m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(o=>{console.log("error message: ",o)}).finally(()=>{L(),a.target.reset()}))}
//# sourceMappingURL=index.js.map
