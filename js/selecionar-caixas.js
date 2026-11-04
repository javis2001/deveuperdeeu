/* Mantém cartões originais intactos; seletor aparece somente após clique. */
(()=>{'use strict';
const plans={bronze:{name:'Bronze',price:49.70},prata:{name:'Prata',price:79.90},ouro:{name:'Ouro',price:99.90}};
const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function init(){
 const style=document.createElement('style');style.textContent=`.dp-shade{position:fixed;inset:0;background:#000b;z-index:99999;display:grid;place-items:center;padding:16px}.dp-dialog{width:min(440px,100%);max-height:90vh;overflow:auto;background:#191b20;color:#fff;border:1px solid #444;border-radius:16px;padding:24px;box-shadow:0 18px 65px #0009;font-family:Inter,Arial,sans-serif}.dp-head{display:flex;align-items:center;justify-content:space-between;gap:12px}.dp-head h2{font-size:22px;margin:0}.dp-close{border:0;background:transparent;color:#fff;font-size:28px;cursor:pointer}.dp-sub{color:#ccc;font-size:14px;margin:10px 0 18px}.dp-options{display:grid;gap:10px}.dp-opt{width:100%;background:#24262b;border:2px solid #484a50;border-radius:10px;padding:14px;color:white;display:flex;justify-content:space-between;align-items:center;cursor:pointer;text-align:left;font:inherit}.dp-opt[aria-pressed=true]{border-color:#f6b940;background:#3b321f}.dp-opt b{font-size:16px}.dp-opt small{display:block;color:#ccc;margin-top:3px}.dp-total{display:flex;justify-content:space-between;margin:20px 0;font-size:18px}.dp-go{display:block;text-align:center;padding:15px;border-radius:10px;background:#f4b632;color:#171717;font-weight:800;text-decoration:none}.dp-note{font-size:12px;color:#aaa;margin:12px 0 0}.dp-opt:focus-visible,.dp-close:focus-visible,.dp-go:focus-visible{outline:3px solid #fff;outline-offset:3px}`;document.head.append(style);
 let shade=null,previousFocus=null;
 function close(){shade?.remove();shade=null;previousFocus?.focus()}
 document.querySelectorAll('#planos .plan').forEach((card)=>{
  const link=card.querySelector('a.btn[href*="plano="]');if(!link)return;
  const url=new URL(link.getAttribute('href'),location.href),id=url.searchParams.get('plano');if(!plans[id])return;
  link.addEventListener('click',e=>{
   e.preventDefault();previousFocus=link;close();const p=plans[id];let n=1;
   shade=document.createElement('div');shade.className='dp-shade';shade.innerHTML=`<section class="dp-dialog" role="dialog" aria-modal="true" aria-label="Selecionar quantidade de caixas"><div class="dp-head"><h2>Caixa ${p.name}</h2><button class="dp-close" type="button" aria-label="Fechar">×</button></div><p class="dp-sub">Escolha a quantidade de caixas</p><div class="dp-options"></div><div class="dp-total"><strong>Total</strong><strong class="dp-sum"></strong></div><a class="dp-go">Continuar compra</a><p class="dp-note">O valor final e a disponibilidade serão confirmados no checkout.</p></section>`;
   const opts=shade.querySelector('.dp-options'),sum=shade.querySelector('.dp-sum'),go=shade.querySelector('.dp-go');
   for(let k=1;k<=3;k++){const b=document.createElement('button');b.type='button';b.className='dp-opt';b.innerHTML=`<span><b>${k} ${k===1?'caixa':'caixas'}</b><small>${money(p.price)} por caixa</small></span><strong>${money(p.price*k)}</strong>`;b.addEventListener('click',()=>select(k));opts.append(b)}
   function select(k){n=k;[...opts.children].forEach((b,i)=>b.setAttribute('aria-pressed',String(i+1===k)));sum.textContent=money(p.price*n);const dest=new URL(url);dest.searchParams.set('quantidade',String(n));go.href=dest.toString()}
   select(1);shade.querySelector('.dp-close').addEventListener('click',close);shade.addEventListener('click',ev=>{if(ev.target===shade)close()});document.body.append(shade);shade.querySelector('.dp-close').focus();
  });
 });
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&shade)close()});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
