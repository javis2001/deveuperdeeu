document.addEventListener('DOMContentLoaded',()=>{
const video=document.getElementById('vid'), play=document.getElementById('play');
if(video&&play){const update=()=>{play.style.display=video.paused?'':'none'};play.addEventListener('click',()=>{video.play().catch(()=>{video.controls=true})});video.addEventListener('play',update);video.addEventListener('pause',update);video.addEventListener('ended',update);update()}
const track=document.getElementById('track');document.getElementById('prev')?.addEventListener('click',()=>track?.scrollBy({left:-350,behavior:'smooth'}));document.getElementById('next')?.addEventListener('click',()=>track?.scrollBy({left:350,behavior:'smooth'}));
const countdown=()=>{let t=new Date(),end=new Date(t);end.setHours(23,59,59,999);let sec=Math.max(0,Math.floor((end-t)/1000));for(let [id,v] of [['h',Math.floor(sec/3600)],['m',Math.floor(sec%3600/60)],['s',sec%60]]){let el=document.getElementById(id);if(el)el.textContent=String(v).padStart(2,'0')}};countdown();setInterval(countdown,1000);
const sticky=document.getElementById('sticky'),plans=document.getElementById('planos');if(sticky&&plans){const update=()=>{let r=plans.getBoundingClientRect();sticky.classList.toggle('show',scrollY>500&&!(r.top<innerHeight&&r.bottom>0))};addEventListener('scroll',update,{passive:true});update()}
const params=new URLSearchParams(location.search);document.querySelectorAll('a[href*="/checkout"]').forEach(a=>{let url=new URL(a.href);for(let key of ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','utm_id','fbclid','gclid','ttclid','sck','xcod','src'])if(params.has(key)&&!url.searchParams.has(key))url.searchParams.set(key,params.get(key));a.href=url.toString()});
const f=[{label:`Smartphones`,icon:`📱`,prizes:[`iPhone 15`,`Galaxy S24`,`Xiaomi Redmi Note`]},{label:`Apple`,icon:`🎧`,prizes:[`AirPods Pro`,`iPad`,`MacBook Air`]},{label:`JBL`,icon:`🎵`,prizes:[`Fone JBL Tune 520BT`,`Fone JBL Wave Buds`,`JBL Flip 6`]},{label:`Xiaomi`,icon:`🎧`,prizes:[`Fone Xiaomi Redmi Buds 5`,`Fone Xiaomi Redmi Buds 6 Play`]},{label:`Stanley`,icon:`🥤`,prizes:[`Garrafa Stanley Quick Flip`,`Garrafa Stanley IceFlow`,`Garrafa Stanley Classic`]},{label:`Lattafa`,icon:`✨`,prizes:[`Perfume Lattafa Asad`,`Perfume Lattafa Yara`,`Perfume Lattafa Khamrah`]},{label:`Afnan`,icon:`✨`,prizes:[`Perfume Afnan 9PM`,`Perfume Afnan Supremacy Not Only Intense`]},{label:`Armaf`,icon:`✨`,prizes:[`Perfume Armaf Club de Nuit Intense Man`,`Perfume Armaf Club de Nuit Woman`]},{label:`Smartwatches`,icon:`⌚`,prizes:[`Apple Watch`,`Samsung Galaxy Watch`,`Xiaomi Redmi Watch`,`Amazfit Bip`,`Huawei Watch Fit`,`Garmin Venu`]},{label:`Games e TV`,icon:`🎮`,prizes:[`PlayStation 5`,`Smart TV 32"`]}];const p=f.flatMap((x,i)=>x.prizes.map(name=>({name,segmentIndex:i})));function m(){return p[Math.floor(Math.random()*p.length)]}function h(i){return 2520-(i+.5)*(360/f.length)}
function g(){let e=360/f.length,t=(e,t)=>{let n=e*Math.PI/180;return[180+Math.cos(n)*t,180+Math.sin(n)*t]};return`<div class="bn-wheel-stage"><div class="bn-wheel-pointer" aria-hidden="true"></div>
    <svg class="bn-wheel" viewBox="0 0 360 360" role="img" aria-label="Roleta de prêmios Black November">
    ${f.map((n,r)=>{let i=-90+r*e,a=i+e,[o,s]=t(i,173),[c,l]=t(a,173),u=i+e/2,[d,f]=t(u,111),[p,m]=t(u,143);return`<g class="bn-wheel-segment bn-wheel-color-${r%4}"><path d="M180 180 L${o} ${s} A173 173 0 0 1 ${c} ${l} Z"/><text class="bn-wheel-label" x="${d}" y="${f}" transform="rotate(${u+90} ${d} ${f})">${n.label}</text><text class="bn-wheel-icon" x="${p}" y="${m}" transform="rotate(${u+90} ${p} ${m})">${n.icon}</text></g>`}).join(``)}</svg><div class="bn-wheel-hub" aria-hidden="true"><b>BLACK</b><span>NOVEMBER</span></div></div>`}const root=document.querySelector('.bn-root');if(!root)return;const bar=document.createElement('div');bar.className='bn-bar';bar.innerHTML='🖤 <b>BLACK NOVEMBER</b> · O mês inteiro de ofertas · Até <b>70% OFF</b> nas caixas surpresa 🖤';root.prepend(bar);
const title=root.querySelector('h1');if(title)title.insertAdjacentHTML('beforebegin','<div class="bn-tag"><i></i>Black November</div>');
const plansEl=document.getElementById('planos');if(plansEl)plansEl.insertAdjacentHTML('afterbegin','<div class="bn-strip"><strong>OFERTAS DE <span>BLACK NOVEMBER</span></strong><p>Preços exclusivos válidos só durante a Black November. Garanta a sua caixa antes que acabe!</p></div>');
root.querySelectorAll('.pimg').forEach(img=>{let holder=img.parentElement;if(holder&&!holder.querySelector('.bn-ribbon'))holder.insertAdjacentHTML('beforeend','<div class="bn-ribbon">BLACK NOVEMBER</div>')});
if(sessionStorage.getItem('_bn')==='1')return;
const modal=document.createElement('div');modal.innerHTML=`<div class="bn-modal"><div class="box">
          <button class="bn-x" aria-label="Fechar">×</button>
          <div data-s="1">
            <div class="bn-tag"><i></i>Chegou</div>
            <div class="bn-hero"><img src="images/hero-deveu.webp" alt="Caixa Deveu Perdeu Black November"/><span class="bn-ribbon">BLACK NOVEMBER</span></div>
            <h3>BLACK<span>NOVEMBER</span></h3>
            <p>Caixas surpresa com até <b>70% OFF</b> e frete grátis. Ofertas por tempo limitado!</p>
            <button class="bn-cta" data-go="2">Aproveitar Black November</button>
          </div>
          <div data-s="2" hidden>
            <div class="bn-tag"><i></i>Girou, ganhou</div>
            <h4>Promoção <span>Black November</span>, Girou Ganhou!</h4>
            <p>Eletrônicos, perfumes árabes, garrafas Stanley, fones JBL e Xiaomi e smartwatches de várias marcas. O prêmio sorteado será <b>enviado junto com a sua caixa</b> caso você finalize a compra.</p>
            ${g()}
            <button class="bn-cta" data-go="3">Girar a roleta</button>
          </div>
          <div data-s="3" hidden>
            <h4>Sorteando seu <span>prêmio</span>...</h4>
            <div class="bn-wheel-slot"></div>
            <div class="bn-win" hidden><p>🎉 Parabéns! Saiu:</p><strong></strong><p>Já está <b>garantido na sua caixa</b>. Escolha sua caixa para resgatar!</p><a class="bn-cta" href="#planos">Escolher minha caixa</a></div>
          </div>
        </div></div>`;const el=modal.firstElementChild;document.body.appendChild(el);let done=false;const close=()=>{done=true;el.remove();sessionStorage.setItem('_bn','1')};const stage=el.querySelector('.bn-wheel-stage');function show(num){el.querySelectorAll('[data-s]').forEach(x=>x.hidden=x.dataset.s!==String(num))}el.addEventListener('click',event=>{const target=event.target;if(target===el||target.closest('.bn-x')){close();return}if(target.closest('a')){close();return}const action=target.closest('[data-go]')?.dataset.go;if(action==='2')show(2);if(action==='3'&&!done){const prize=m(),slot=el.querySelector('.bn-wheel-slot');slot.appendChild(stage);show(3);requestAnimationFrame(()=>requestAnimationFrame(()=>{stage.querySelector('.bn-wheel').style.transform='rotate('+h(prize.segmentIndex)+'deg)'}));setTimeout(()=>{if(done)return;const win=el.querySelector('.bn-win');win.querySelector('strong').textContent=prize.name;win.hidden=false;el.querySelector('[data-s="3"] h4').innerHTML='Resultado do <span>sorteio</span>';sessionStorage.setItem('_bn_prize',prize.name)},matchMedia('(prefers-reduced-motion: reduce)').matches?200:5200)}});
});