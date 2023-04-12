(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function l(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=l(i);fetch(i.href,a)}})();function H(){}function Ge(e){return e()}function ze(){return Object.create(null)}function ie(e){e.forEach(Ge)}function Je(e){return typeof e=="function"}function Xe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ve;function $e(e,t){return ve||(ve=document.createElement("a")),ve.href=t,e===ve.href}function Ye(e){return Object.keys(e).length===0}function r(e,t){e.appendChild(t)}function x(e,t,l){e.insertBefore(t,l||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function Ce(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function u(e){return document.createElement(e)}function B(e){return document.createTextNode(e)}function _(){return B(" ")}function T(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function s(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function Ze(e){return e===""?null:+e}function et(e){return Array.from(e.childNodes)}function Fe(e,t){t=""+t,e.data!==t&&(e.data=t)}function Te(e,t){e.value=t??""}function tt(e,t,l,n){l===null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}function ge(e,t,l){for(let n=0;n<e.options.length;n+=1){const i=e.options[n];if(i.__value===t){i.selected=!0;return}}(!l||t!==void 0)&&(e.selectedIndex=-1)}function Be(e){const t=e.querySelector(":checked");return t&&t.__value}let Oe;function ce(e){Oe=e}const X=[],be=[];let Y=[];const He=[],lt=Promise.resolve();let Pe=!1;function nt(){Pe||(Pe=!0,lt.then(Qe))}function re(e){Y.push(e)}const Ee=new Set;let Q=0;function Qe(){if(Q!==0)return;const e=Oe;do{try{for(;Q<X.length;){const t=X[Q];Q++,ce(t),st(t.$$)}}catch(t){throw X.length=0,Q=0,t}for(ce(null),X.length=0,Q=0;be.length;)be.pop()();for(let t=0;t<Y.length;t+=1){const l=Y[t];Ee.has(l)||(Ee.add(l),l())}Y.length=0}while(X.length);for(;He.length;)He.pop()();Pe=!1,Ee.clear(),ce(e)}function st(e){if(e.fragment!==null){e.update(),ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(re)}}function ot(e){const t=[],l=[];Y.forEach(n=>e.indexOf(n)===-1?t.push(n):l.push(n)),l.forEach(n=>n()),Y=t}const ct=new Set;function rt(e,t){e&&e.i&&(ct.delete(e),e.i(t))}function it(e,t,l,n){const{fragment:i,after_update:a}=e.$$;i&&i.m(t,l),n||re(()=>{const d=e.$$.on_mount.map(Ge).filter(Je);e.$$.on_destroy?e.$$.on_destroy.push(...d):ie(d),e.$$.on_mount=[]}),a.forEach(re)}function ut(e,t){const l=e.$$;l.fragment!==null&&(ot(l.after_update),ie(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function at(e,t){e.$$.dirty[0]===-1&&(X.push(e),nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ft(e,t,l,n,i,a,d,h=[-1]){const m=Oe;ce(e);const f=e.$$={fragment:null,ctx:[],props:a,update:H,not_equal:i,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:ze(),dirty:h,skip_bound:!1,root:t.target||m.$$.root};d&&d(f.root);let b=!1;if(f.ctx=l?l(e,t.props||{},($,I,...O)=>{const g=O.length?O[0]:I;return f.ctx&&i(f.ctx[$],f.ctx[$]=g)&&(!f.skip_bound&&f.bound[$]&&f.bound[$](g),b&&at(e,$)),I}):[],f.update(),b=!0,ie(f.before_update),f.fragment=n?n(f.ctx):!1,t.target){if(t.hydrate){const $=et(t.target);f.fragment&&f.fragment.l($),$.forEach(E)}else f.fragment&&f.fragment.c();t.intro&&rt(e.$$.fragment),it(e,t.target,t.anchor,t.customElement),Qe()}ce(m)}class dt{$destroy(){ut(this,1),this.$destroy=H}$on(t,l){if(!Je(l))return H;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const i=n.indexOf(l);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!Ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ue(e,t,l){const n=e.slice();return n[26]=t[l],n}function Ve(e,t,l){const n=e.slice();return n[29]=t[l],n}function Re(e,t,l){const n=e.slice();return n[32]=t[l],n}function De(e){let t,l=e[32].title+"",n;return{c(){t=u("option"),n=B(l),t.__value=e[32].link,t.value=t.__value,s(t,"class","svelte-7a1c1d")},m(i,a){x(i,t,a),r(t,n)},p:H,d(i){i&&E(t)}}}function Ke(e){let t,l=e[29].title+"",n;return{c(){t=u("option"),n=B(l),t.__value=e[29].volume,t.value=t.__value,s(t,"class","svelte-7a1c1d")},m(i,a){x(i,t,a),r(t,n)},p:H,d(i){i&&E(t)}}}function We(e){let t,l,n=e[26]+"",i,a,d,h;return{c(){t=u("div"),l=u("button"),i=B(n),a=_(),l.value=e[26],s(l,"class","svelte-7a1c1d"),s(t,"class","preset svelte-7a1c1d")},m(m,f){x(m,t,f),r(t,l),r(l,i),r(t,a),d||(h=T(l,"click",e[16]),d=!0)},p:H,d(m){m&&E(t),d=!1,h()}}}function ht(e){let t,l,n,i,a,d,h,m,f,b,$,I,O,g,U,V,A,D,Z,C,ee,y,K,ue,M,ae,R,te,p,L,P,fe,de,he,ye,je,N,le,Ie,ne,Le,se,xe,q,pe,Ae,me,Me,oe,ke,j,_e,we,z,Ne,Se,qe,W=e[7],k=[];for(let o=0;o<W.length;o+=1)k[o]=De(Re(e,W,o));let G=e[8],w=[];for(let o=0;o<G.length;o+=1)w[o]=Ke(Ve(e,G,o));let J=e[6],S=[];for(let o=0;o<J.length;o+=1)S[o]=We(Ue(e,J,o));return{c(){t=u("link"),l=u("link"),n=u("link"),i=u("link"),a=_(),d=u("div"),h=u("div"),m=u("h2"),m.textContent="Preferences",f=_(),b=u("br"),$=_(),I=u("p"),I.textContent="Choose the soundtrack",O=_(),g=u("select");for(let o=0;o<k.length;o+=1)k[o].c();U=_(),V=u("br"),A=_(),D=u("p"),D.textContent="Choose the volume level",Z=_(),C=u("select");for(let o=0;o<w.length;o+=1)w[o].c();ee=_(),y=u("div"),K=u("h2"),K.textContent="Timer",ue=_(),M=u("p"),ae=B("Current slider value is  "),R=u("b"),te=B(e[2]),p=B(`
        minutes`),L=_(),P=u("input"),fe=_(),de=u("div"),he=u("h1"),ye=B(e[3]),je=_(),N=u("div"),le=u("button"),le.textContent="Start",Ie=_(),ne=u("button"),ne.textContent="Stop",Le=_(),se=u("button"),se.textContent="Reset",xe=_(),q=u("div"),pe=u("h2"),pe.textContent="Presets",Ae=_(),me=u("p"),me.textContent="Use Slider or presets to start timer",Me=_(),oe=u("div");for(let o=0;o<S.length;o+=1)S[o].c();ke=_(),j=u("audio"),we=_(),z=u("audio"),document.title="Speaktimer",s(t,"rel","apple-touch-icon"),s(t,"sizes","180x180"),s(t,"href","/apple-touch-icon.png"),s(t,"class","svelte-7a1c1d"),s(l,"rel","icon"),s(l,"type","image/png"),s(l,"sizes","32x32"),s(l,"href","/favicon-32x32.png"),s(l,"class","svelte-7a1c1d"),s(n,"rel","icon"),s(n,"type","image/png"),s(n,"sizes","16x16"),s(n,"href","/favicon-16x16.png"),s(n,"class","svelte-7a1c1d"),s(i,"rel","manifest"),s(i,"href","/site.webmanifest"),s(i,"class","svelte-7a1c1d"),s(m,"class","svelte-7a1c1d"),s(b,"class","svelte-7a1c1d"),s(I,"class","svelte-7a1c1d"),s(g,"name","Sound"),s(g,"id","cars"),s(g,"class","svelte-7a1c1d"),e[4]===void 0&&re(()=>e[13].call(g)),s(V,"class","svelte-7a1c1d"),s(D,"class","svelte-7a1c1d"),s(C,"name","volume"),s(C,"id","volume"),s(C,"class","svelte-7a1c1d"),e[5]===void 0&&re(()=>e[14].call(C)),s(h,"class","flex-item flex-item1 svelte-7a1c1d"),s(K,"class","svelte-7a1c1d"),tt(R,"font-size","2rem"),s(R,"class","svelte-7a1c1d"),s(M,"class","svelte-7a1c1d"),s(P,"type","range"),s(P,"class","slider  svelte-7a1c1d"),s(P,"min","1"),s(P,"max","60"),s(he,"class","svelte-7a1c1d"),s(de,"class","time-block svelte-7a1c1d"),s(le,"class","svelte-7a1c1d"),s(ne,"class","svelte-7a1c1d"),s(se,"class","svelte-7a1c1d"),s(N,"class","buttons-block svelte-7a1c1d"),s(y,"class","flex-item flex-item2 svelte-7a1c1d"),s(pe,"class","svelte-7a1c1d"),s(me,"class","svelte-7a1c1d"),s(oe,"class","flex-container svelte-7a1c1d"),s(q,"class","flex-item flex-item3 svelte-7a1c1d"),s(d,"class","container svelte-7a1c1d"),$e(j.src,_e=e[4])||s(j,"src",_e),j.loop=!0,s(j,"class","svelte-7a1c1d"),$e(z.src,Ne=pt)||s(z,"src",Ne),z.loop=!0,s(z,"class","svelte-7a1c1d")},m(o,v){r(document.head,t),r(document.head,l),r(document.head,n),r(document.head,i),x(o,a,v),x(o,d,v),r(d,h),r(h,m),r(h,f),r(h,b),r(h,$),r(h,I),r(h,O),r(h,g);for(let c=0;c<k.length;c+=1)k[c]&&k[c].m(g,null);ge(g,e[4],!0),r(h,U),r(h,V),r(h,A),r(h,D),r(h,Z),r(h,C);for(let c=0;c<w.length;c+=1)w[c]&&w[c].m(C,null);ge(C,e[5],!0),r(d,ee),r(d,y),r(y,K),r(y,ue),r(y,M),r(M,ae),r(M,R),r(R,te),r(M,p),r(y,L),r(y,P),Te(P,e[2]),r(y,fe),r(y,de),r(de,he),r(he,ye),r(y,je),r(y,N),r(N,le),r(N,Ie),r(N,ne),r(N,Le),r(N,se),r(d,xe),r(d,q),r(q,pe),r(q,Ae),r(q,me),r(q,Me),r(q,oe);for(let c=0;c<S.length;c+=1)S[c]&&S[c].m(oe,null);x(o,ke,v),x(o,j,v),e[17](j),x(o,we,v),x(o,z,v),e[18](z),Se||(qe=[T(g,"change",e[13]),T(C,"change",e[14]),T(P,"change",e[15]),T(P,"input",e[15]),T(le,"click",e[10]),T(ne,"click",e[11]),T(se,"click",e[12])],Se=!0)},p(o,v){if(v[0]&128){W=o[7];let c;for(c=0;c<W.length;c+=1){const F=Re(o,W,c);k[c]?k[c].p(F,v):(k[c]=De(F),k[c].c(),k[c].m(g,null))}for(;c<k.length;c+=1)k[c].d(1);k.length=W.length}if(v[0]&144&&ge(g,o[4]),v[0]&256){G=o[8];let c;for(c=0;c<G.length;c+=1){const F=Ve(o,G,c);w[c]?w[c].p(F,v):(w[c]=Ke(F),w[c].c(),w[c].m(C,null))}for(;c<w.length;c+=1)w[c].d(1);w.length=G.length}if(v[0]&288&&ge(C,o[5]),v[0]&4&&Fe(te,o[2]),v[0]&4&&Te(P,o[2]),v[0]&8&&Fe(ye,o[3]),v[0]&576){J=o[6];let c;for(c=0;c<J.length;c+=1){const F=Ue(o,J,c);S[c]?S[c].p(F,v):(S[c]=We(F),S[c].c(),S[c].m(oe,null))}for(;c<S.length;c+=1)S[c].d(1);S.length=J.length}v[0]&144&&!$e(j.src,_e=o[4])&&s(j,"src",_e)},i:H,o:H,d(o){E(t),E(l),E(n),E(i),o&&E(a),o&&E(d),Ce(k,o),Ce(w,o),Ce(S,o),o&&E(ke),o&&E(j),e[17](null),o&&E(we),o&&E(z),e[18](null),Se=!1,ie(qe)}}}let pt="https://www.soundjay.com/clock/sounds/alarm-clock-01.mp3";function mt(e,t,l){let n,i,a=13,d="00 : 00",h=null,m=0,f=0,b=0;console.log(b);let $=[2,4,5,6,7,10,15,20,25,30,40,50,60,70,12,16,80,90,120,180];$.sort((p,L)=>p-L);const I=()=>{localStorage.setItem("schoosen",U.toString()),localStorage.setItem("vchoosen",A.toString())},O=p=>localStorage.getItem(p)?localStorage.getItem(p):"false";let g=[{link:"https://www.soundjay.com/nature/sounds/rain-04.mp3",title:"Rain"},{link:"https://www.soundjay.com/nature/sounds/waterfall-1.mp3",title:"Water Fall"},{link:"https://www.soundjay.com/nature/sounds/fire-1.mp3",title:"Fire"},{link:"https://www.soundjay.com/nature/sounds/stream-3.mp3",title:"Stream"}],U=O("schoosen")!="false"?O("schoosen"):g[0].link,V=[{volume:.1,title:"Very Low"},{volume:.2,title:"Low"},{volume:.6,title:"Medium"},{volume:.8,title:"High"},{volume:1,title:"Very High"}],A=O("vchoosen")!="false"?parseFloat(O("vchoosen")):V[1].volume;const D=()=>{if(f=Math.floor(b/60),m=b%60,b--,l(3,d=`${f>=10?f:"0"+f} : ${m>=10?m:"0"+m}`),m==0&&b!=0&&speechSynthesis.speak(new SpeechSynthesisUtterance(`${f} minutes`)),m==30&&b!=0&&f%2==0){let p=new Date,L=p.getHours(),P=L>=12?"PM":"AM";L=L%12||12;let fe=p.getMinutes();speechSynthesis.speak(new SpeechSynthesisUtterance(`${L} ${fe} ${P}`))}b==0&&(y(),i.play(),setTimeout(()=>{let p=confirm("Timer finished");(p==!0||p==!1)&&i.pause()},3e3))},Z=p=>{l(2,a=p.target.value),C()},C=()=>{I(),b==0&&(b=a*60),!h&&(h=setInterval(D,1e3),l(0,n.volume=A,n),n.play())},ee=()=>{clearInterval(h),h=null,n.pause()},y=()=>{ee(),b=0,l(3,d="00 : 00")};function K(){U=Be(this),l(4,U),l(7,g)}function ue(){A=Be(this),l(5,A),l(8,V)}function M(){a=Ze(this.value),l(2,a)}const ae=p=>{Z(p)};function R(p){be[p?"unshift":"push"](()=>{n=p,l(0,n)})}function te(p){be[p?"unshift":"push"](()=>{i=p,l(1,i)})}return[n,i,a,d,U,A,$,g,V,Z,C,ee,y,K,ue,M,ae,R,te]}class _t extends dt{constructor(t){super(),ft(this,t,mt,ht,Xe,{},null,[-1,-1])}}new _t({target:document.getElementById("app")});
