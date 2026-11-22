/* =========================================================
   AfroMap · scripts communs
   1. Redirection des anciens liens (#confidentialite, #mentions-legales)
   2. Formulaires Tally en fenêtre intégrée (rien n'est chargé avant le clic)
      + transmission du prénom, de l'e-mail et de la source (UTM)
   3. Mesure des clics (uniquement si les statistiques sont acceptées)
   4. Bandeau cookies (Google Analytics chargé seulement après « Accepter »)
   ========================================================= */

/* 1. Anciens liens : l'ancienne page d'accueil contenait les pages légales */
(function(){
  var h=location.hash, p=location.pathname;
  if(p==='/'||p==='/index.html'){
    if(h==='#confidentialite') location.replace('/confidentialite/');
    else if(h==='#mentions-legales') location.replace('/mentions-legales/');
  }
})();

/* 3. Mesure : n'envoie rien tant que Google Analytics n'est pas chargé (consentement) */
function afromapTrack(name,params){
  if(window.__afromapGA && typeof window.gtag==='function'){ window.gtag('event',name,params||{}); }
}

/* 2. Formulaires */
(function(){
  var m=document.getElementById('fmodal'); if(!m) return;
  var fr=m.querySelector('iframe'), alt=m.querySelector('.fmodal-alt a'), last=null;
  /* Source de la visite : transmise au formulaire pour savoir d'où viennent les inscriptions */
  var utm=new URLSearchParams(location.search), keep=new URLSearchParams();
  ['utm_source','utm_medium','utm_campaign'].forEach(function(k){ if(utm.get(k)) keep.set(k,utm.get(k)); });

  function open(id, extra, origin){
    var q=new URLSearchParams(keep.toString());
    q.set('alignLeft','1'); q.set('transparentBackground','1');
    if(extra){ Object.keys(extra).forEach(function(k){ if(extra[k]) q.set(k,extra[k]); }); }
    fr.src='https://tally.so/embed/'+id+'?'+q.toString();
    alt.href='https://tally.so/r/'+id+(extra&&extra.prenom?'?prenom='+encodeURIComponent(extra.prenom)+'&email='+encodeURIComponent(extra.email||''):'');
    m.hidden=false; document.documentElement.style.overflow='hidden';
    m.querySelector('.fmodal-close').focus();
    afromapTrack('ouverture_formulaire',{formulaire:id,emplacement:origin||''});
  }
  function close(){ m.hidden=true; fr.removeAttribute('src'); document.documentElement.style.overflow=''; if(last) last.focus(); }

  document.addEventListener('click',function(e){
    var a=e.target.closest('a[data-form]');
    if(!a||e.metaKey||e.ctrlKey||e.shiftKey) return;
    if(window.innerWidth<360) return; /* très petits écrans : ouverture dans un nouvel onglet */
    e.preventDefault(); last=a; open(a.dataset.form,null,a.dataset.place);
  });
  m.addEventListener('click',function(e){ if(e.target===m||e.target.closest('.fmodal-close')) close(); });
  document.addEventListener('keydown',function(e){ if(!m.hidden&&e.key==='Escape') close(); });

  /* Pré-inscription : le prénom et l'e-mail saisis sur la page sont transmis au formulaire */
  document.querySelectorAll('form[data-preform]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var prenom=f.querySelector('[name=prenom]').value.trim(), email=f.querySelector('[name=email]').value.trim(), err=f.querySelector('.err');
      if(!prenom){ err.textContent='Indique ton prénom.'; f.querySelector('[name=prenom]').focus(); return; }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)){ err.textContent='Vérifie ton adresse e-mail.'; f.querySelector('[name=email]').focus(); return; }
      err.textContent=''; last=f.querySelector('button');
      open(f.dataset.preform,{prenom:prenom,email:email},f.dataset.place);
    });
  });
})();

/* Barre d'action mobile : masquée tant que le haut de page (et son formulaire) est visible */
(function(){
  var bar=document.querySelector('.mcta'), hero=document.querySelector('.hero'); if(!bar||!hero||!('IntersectionObserver' in window)) return;
  bar.classList.add('off');
  new IntersectionObserver(function(es){ bar.classList.toggle('off', es[0].isIntersecting); },{threshold:0.15}).observe(hero);
})();

/* 4. Cookies */
(function(){
  var GA_ID='G-3KE55SE2VF';
  var KEY='afromap_consent', SIX_MONTHS=182*24*3600*1000;
  var box=document.getElementById('ck'); if(!box) return;
  function read(){ try{ var c=JSON.parse(localStorage.getItem(KEY)||'null'); if(c&&Date.now()-c.t<SIX_MONTHS) return c.v; }catch(e){} return null; }
  function save(v){ try{ localStorage.setItem(KEY,JSON.stringify({v:v,t:Date.now()})); }catch(e){} }
  function loadGA(){
    if(window.__afromapGA) return; window.__afromapGA=true;
    window.dataLayer=window.dataLayer||[]; window.gtag=function(){ dataLayer.push(arguments); };
    gtag('js',new Date());
    gtag('config',GA_ID,{cookie_expires:33696000,allow_google_signals:false,allow_ad_personalization_signals:false});
    var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID; document.head.appendChild(s);
  }
  function clearGA(){
    document.cookie.split(';').forEach(function(c){ var n=c.split('=')[0].trim(); if(/^_ga/.test(n)){
      var host=location.hostname.replace(/^www\./,'');
      ['',';domain='+host,';domain=.'+host].forEach(function(d){ document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'+d; });
    }});
  }
  document.getElementById('ck-yes').addEventListener('click',function(){ save('granted'); box.hidden=true; loadGA(); });
  document.getElementById('ck-no').addEventListener('click',function(){ var was=read(); save('denied'); box.hidden=true; clearGA(); if(was==='granted') location.reload(); });
  document.querySelectorAll('[data-ck-manage]').forEach(function(b){ b.addEventListener('click',function(e){ e.preventDefault(); box.hidden=false; document.getElementById('ck-yes').focus(); }); });
  var c=read(); if(c==='granted') loadGA(); else if(c!=='denied') box.hidden=false;
})();
