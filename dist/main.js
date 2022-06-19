(()=>{"use strict";!function(){const t=document.createElement("div");t.classList.add("container");const e=document.createElement("header"),n=document.createElement("div");n.classList.add("time-content");const d=document.createElement("p");d.classList.add("timezone-text"),d.textContent="Timezone:";const a=document.createElement("p");a.classList.add("timezone"),a.setAttribute("id","timezone");const c=document.createElement("input");c.classList.add("cityInput"),c.setAttribute("id","cityInput");const o=document.createElement("button");o.classList.add("search"),o.setAttribute("id","search"),o.textContent="Search";const i=document.createElement("div");i.classList.add("search-content");const s=document.createElement("div");s.classList.add("display");const l=document.createElement("div");l.classList.add("weatherInfo");const r=document.createElement("h1");r.classList.add("countryName");const m=document.createElement("h3");m.classList.add("cityName");const p=document.createElement("p");p.classList.add("temperature");const u=document.createElement("p");u.classList.add("weatherType");const h=document.createElement("span");h.classList="material-symbols-outlined",h.setAttribute("id","icon");const C=document.createElement("div");C.classList.add("weatherDetails");const y=document.createElement("h1");y.classList.add("temp-units"),y.textContent="°F";const E=document.createElement("p");E.classList.add("feels-like");const x=document.createElement("div");x.classList.add("weather-content");const g=document.createElement("span");g.classList.add("material-symbols-outlined"),g.textContent="thermostat";const v=document.createElement("p");v.classList.add("feels-text"),v.textContent="Feels Like:";const L=document.createElement("p");L.classList.add("humidity");const b=document.createElement("div");b.classList.add("weather-content");const f=document.createElement("span");f.classList.add("material-symbols-outlined"),f.textContent="humidity_mid";const A=document.createElement("p");A.classList.add("humidity-text"),A.textContent="Humidity:";const w=document.createElement("p");w.classList.add("windSpeed");const F=document.createElement("div");F.classList.add("weather-content");const $=document.createElement("span");$.classList.add("material-symbols-outlined"),$.textContent="air";const S=document.createElement("p");S.classList.add("wind-text"),S.textContent="Wind Speed";const I=document.createElement("div");I.setAttribute("id","sunrise");const k=document.createElement("p");k.textContent="Sunrise:";const D=document.createElement("div");D.setAttribute("id","sunset");const q=document.createElement("p");q.textContent="Sunset:",document.body.appendChild(t),t.appendChild(e),t.appendChild(s),e.appendChild(i),e.appendChild(n),n.appendChild(d),n.appendChild(a),i.appendChild(c),i.appendChild(o),s.appendChild(l),s.appendChild(C),l.appendChild(r),l.appendChild(m),l.appendChild(u),l.appendChild(h),l.appendChild(p),l.appendChild(k),l.appendChild(D),l.appendChild(q),l.appendChild(I),C.appendChild(y),C.appendChild(x),x.appendChild(g),x.appendChild(v),C.appendChild(E),C.appendChild(b),b.appendChild(f),b.appendChild(A),C.appendChild(L),C.appendChild(F),F.append($),F.append(S),C.appendChild(w);const N=document.createElement("div");N.classList.add("display-forecast");const B=document.createElement("div");B.classList.add("forecast-container");const z=document.createElement("div");z.setAttribute("id","day-0");const j=document.createElement("img");j.setAttribute("id","icon-0"),j.setAttribute("src","");const _=document.createElement("div");_.classList.add("forecast-data");const H=document.createElement("div");H.textContent="Day: ";const R=document.createElement("span");R.classList.add("day"),R.setAttribute("id","day-temp-0");const T=document.createElement("div");T.textContent="Night: ";const W=document.createElement("span");W.classList.add("night"),W.setAttribute("id","night-temp-0"),t.appendChild(N),N.appendChild(B),B.appendChild(z),B.appendChild(j),B.appendChild(_),_.appendChild(H),H.appendChild(R),_.appendChild(T),T.appendChild(W);const M=document.createElement("div");M.classList.add("forecast-container");const P=document.createElement("div");P.setAttribute("id","day-1");const G=document.createElement("img");G.setAttribute("id","icon-1"),G.setAttribute("src","");const J=document.createElement("div");J.classList.add("forecast-data");const K=document.createElement("div");K.textContent="Day: ";const O=document.createElement("span");O.classList.add("day"),O.setAttribute("id","day-temp-1");const Q=document.createElement("div");Q.textContent="Night: ";const U=document.createElement("span");U.classList.add("night"),U.setAttribute("id","night-temp-1"),N.appendChild(M),M.appendChild(P),M.appendChild(G),M.appendChild(J),J.appendChild(K),K.appendChild(O),J.appendChild(Q),Q.appendChild(U);const V=document.createElement("div");V.classList.add("forecast-container");const X=document.createElement("div");X.setAttribute("id","day-2");const Y=document.createElement("img");Y.setAttribute("id","icon-2"),Y.setAttribute("src","");const Z=document.createElement("div");Z.classList.add("forecast-data");const tt=document.createElement("div");tt.textContent="Day: ";const et=document.createElement("span");et.classList.add("day"),et.setAttribute("id","day-temp-2");const nt=document.createElement("div");nt.textContent="Night: ";const dt=document.createElement("span");dt.classList.add("night"),dt.setAttribute("id","night-temp-2"),N.appendChild(V),V.appendChild(X),V.appendChild(Y),V.appendChild(Z),Z.appendChild(tt),tt.appendChild(et),Z.appendChild(nt),nt.appendChild(dt);const at=document.createElement("div");at.classList.add("forecast-container");const ct=document.createElement("div");ct.setAttribute("id","day-3");const ot=document.createElement("img");ot.setAttribute("id","icon-3"),ot.setAttribute("src","");const it=document.createElement("div");it.classList.add("forecast-data");const st=document.createElement("div");st.textContent="Day: ";const lt=document.createElement("span");lt.classList.add("day"),lt.setAttribute("id","day-temp-3");const rt=document.createElement("div");rt.textContent="Night: ";const mt=document.createElement("span");mt.classList.add("night"),mt.setAttribute("id","night-temp-3"),N.appendChild(at),at.appendChild(ct),at.appendChild(ot),at.appendChild(it),it.appendChild(st),st.appendChild(lt),it.appendChild(rt),rt.appendChild(mt);const pt=document.createElement("div");pt.classList.add("forecast-container");const ut=document.createElement("div");ut.setAttribute("id","day-4");const ht=document.createElement("img");ht.setAttribute("id","icon-4"),ht.setAttribute("src","");const Ct=document.createElement("div");Ct.classList.add("forecast-data");const yt=document.createElement("div");yt.textContent="Day: ";const Et=document.createElement("span");Et.classList.add("day"),Et.setAttribute("id","day-temp-4");const xt=document.createElement("div");xt.textContent="Night: ";const gt=document.createElement("span");gt.classList.add("night"),gt.setAttribute("id","night-temp-4"),N.appendChild(pt),pt.appendChild(ut),pt.appendChild(ht),pt.appendChild(Ct),Ct.appendChild(yt),yt.appendChild(Et),Ct.appendChild(xt),xt.appendChild(gt);const vt=document.createElement("div");vt.classList.add("forecast-container");const Lt=document.createElement("div");Lt.setAttribute("id","day-5");const bt=document.createElement("img");bt.setAttribute("id","icon-5"),bt.setAttribute("src","");const ft=document.createElement("div");ft.classList.add("forecast-data");const At=document.createElement("div");At.textContent="Day: ";const wt=document.createElement("span");wt.classList.add("day"),wt.setAttribute("id","day-temp-5");const Ft=document.createElement("div");Ft.textContent="Night: ";const $t=document.createElement("span");$t.classList.add("night"),$t.setAttribute("id","night-temp-5"),N.appendChild(vt),vt.appendChild(Lt),vt.appendChild(bt),vt.appendChild(ft),ft.appendChild(At),At.appendChild(wt),ft.appendChild(Ft),Ft.appendChild($t);const St=document.createElement("div");St.classList.add("forecast-container");const It=document.createElement("div");It.setAttribute("id","day-6");const kt=document.createElement("img");kt.setAttribute("id","icon-6"),kt.setAttribute("src","");const Dt=document.createElement("div");Dt.classList.add("forecast-data");const qt=document.createElement("div");qt.textContent="Day: ";const Nt=document.createElement("span");Nt.classList.add("day"),Nt.setAttribute("id","day-temp-6");const Bt=document.createElement("div");Bt.textContent="Night: ";const zt=document.createElement("span");zt.classList.add("night"),zt.setAttribute("id","night-temp-6"),N.appendChild(St),St.appendChild(It),St.appendChild(kt),St.appendChild(Dt),Dt.appendChild(qt),qt.appendChild(Nt),Dt.appendChild(Bt),Bt.appendChild(zt)}();const t="c55b2f992c145e0b6c4f202c68a74305",e=(()=>{const t=document.querySelector(".temp-units"),e=document.getElementById("timezone"),n=document.querySelector(".cityName"),d=document.querySelector(".countryName"),a=document.querySelector(".temperature"),c=document.querySelector(".weatherType"),o=document.querySelector(".windSpeed"),i=document.querySelector(".humidity"),s=document.querySelector(".feels-like"),l=document.getElementById("sunrise"),r=document.getElementById("sunset"),m=document.getElementById("icon"),p=document.querySelectorAll(".day"),u=document.querySelectorAll(".night");function h(n){e.textContent=n.timezone,a.textContent=`${n.current.temp} °F`,c.textContent=n.current.weather[0].main,o.textContent=`${n.current.wind_speed} mp/h`,i.textContent=`${n.current.humidity}%`,s.textContent=`${n.current.feels_like}°F`,l.textContent=window.moment(1e3*(n.current.sunrise+n.timezone_offset-7200)).format("HH:mm a"),r.textContent=window.moment(1e3*(n.current.sunset+n.timezone_offset-7200)).format("HH:mm a"),"Rain"===c.textContent?(document.body.style.backgroundImage="url(images/Rain.jpg)",m.textContent="rainy"):"Clouds"===c.textContent?(document.body.style.backgroundImage="url(images/Clouds.jpg)",m.textContent="cloudy"):"Sunshine"===c.textContent||"Clear"===c.textContent?(document.body.style.backgroundImage="url(images/Sunny.jpg)",m.textContent="sunny"):"Foggy"===c.textContent||"Haze"===c.textContent||"Mist"===c.textContent?(document.body.style.backgroundImage="url(images/Foggy.jpg)",m.textContent="foggy"):"Storm"===c.textContent&&(document.body.style.backgroundImage="url(images/Storm.jpg)",m.textContent="cloudy"),t.addEventListener("click",(()=>{let e,d,c,i,l;if("°F"===t.textContent){c=y(n.current.temp).toFixed(2)+"°C",i=y(n.current.feels_like).toFixed(2)+"°C",l=(r=n.current.wind_speed,1.609344*r).toFixed(2)+" km/h",a.textContent=c,s.textContent=i,o.textContent=l,t.textContent="°C";for(let t=0;t<p.length;t++)e=y(p[t].textContent).toFixed(1),p[t].textContent=e;for(let t=0;t<u.length;t++)d=y(u[t].textContent).toFixed(1),u[t].textContent=d}else if("°C"===t.textContent){c=E(parseFloat(a.textContent)),console.log(c),a.textContent=c.toFixed(2)+"°F",i=E(parseFloat(s.textContent)),s.textContent=i.toFixed(2)+"°F",l=.6213711922*parseFloat(o.textContent),o.textContent=l.toFixed(2)+" mp/h";for(let t=0;t<p.length;t++)e=E(p[t].textContent).toFixed(1),p[t].textContent=e;for(let t=0;t<u.length;t++)d=E(u[t].textContent).toFixed(1),u[t].textContent=d;t.textContent="°F"}var r}))}function C(t){for(let e=0;e<t.length-1;e++)document.getElementById(`day-${e}`).textContent=window.moment(1e3*t[e].dt).format("ddd"),document.getElementById(`day-temp-${e}`).textContent=t[e].temp.day,document.getElementById(`night-temp-${e}`).textContent=t[e].temp.night,document.getElementById(`icon-${e}`).src=`https://openweathermap.org/img/wn/${t[e].weather[0].icon}@2x.png`}function y(t){return 5/9*(t-32)}function E(t){return 1.8*t+32}return{weatherResults:h,displayWeatherForecast:C,renderAll:function(t){n.textContent=t.geoData[0].name,d.textContent=t.geoData[0].country,h(t.forecastData),C(t.forecastData.daily)}}})(),n=async function(e){try{const n=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=5&appid=${t}`),d=await n.json();if(!n.ok)throw new Error(`${e} is not a city`);const a=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${d[0].lat}&lon=${d[0].lon}&exclude=hourly,minutely&units=imperial&appid=${t}`),c=await a.json();return console.log(c),{geoData:d,forecastData:c}}catch(t){e.value}},d=(document.querySelector(".temp-units"),document.getElementById("cityInput"));document.getElementById("search").addEventListener("click",(()=>{n(d.value).then((t=>{d.value="",e.renderAll(t)})).catch((t=>{alert(`Couldn't retrieve data for ${d.value}:\n      ${t}`)}))})),d.addEventListener("keydown",(t=>{"Enter"===t.key&&n(d.value).then((t=>{d.value="",e.renderAll(t)})).catch((t=>{alert(`Couldn't retrieve data for ${d.value}:\n      ${t}`)}))})),navigator.geolocation.getCurrentPosition((n=>{fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${n.coords.latitude}&lon=${n.coords.longitude}&exclude=hourly,minutely&units=imperial&appid=${t}`).then((t=>t.json())).then((t=>{e.weatherResults(t),e.displayWeatherForecast(t.daily)})).catch((t=>{alert(`Couldn't retrieve data for your location:\n        ${t}`)}))}))})();