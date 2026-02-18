var Ky=Object.defineProperty;var Jd=i=>{throw TypeError(i)};var Jy=(i,t,e)=>t in i?Ky(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var H=(i,t,e)=>Jy(i,typeof t!="symbol"?t+"":t,e),ku=(i,t,e)=>t.has(i)||Jd("Cannot "+e);var v=(i,t,e)=>(ku(i,t,"read from private field"),e?e.call(i):t.get(i)),Y=(i,t,e)=>t.has(i)?Jd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),C=(i,t,e,n)=>(ku(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),dt=(i,t,e)=>(ku(i,t,"access private method"),e);var za=(i,t,e,n)=>({set _(r){C(i,t,r,e)},get _(){return v(i,t,n)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="167",Yy=0,Yd=1,Qy=2,ug=1,qy=2,Bi=3,Kr=0,fn=1,ji=2,Hr=0,Io=1,Qd=2,qd=3,Zd=4,Zy=5,us=100,jy=101,$y=102,tv=103,ev=104,nv=200,iv=201,rv=202,sv=203,Oh=204,Bh=205,ov=206,av=207,cv=208,lv=209,uv=210,hv=211,fv=212,dv=213,pv=214,mv=0,gv=1,yv=2,Wl=3,vv=4,_v=5,xv=6,Av=7,hg=0,wv=1,Ev=2,Vr=0,bv=1,Sv=2,Mv=3,Tv=4,Cv=5,Rv=6,Pv=7,fg=300,ba=301,Sa=302,Fh=303,kh=304,yu=306,cc=1e3,ys=1001,zh=1002,Vn=1003,Iv=1004,Jc=1005,ni=1006,zu=1007,vs=1008,or=1009,dg=1010,pg=1011,lc=1012,jf=1013,Ws=1014,tr=1015,Uc=1016,$f=1017,td=1018,Ma=1020,mg=35902,gg=1021,yg=1022,ri=1023,vg=1024,_g=1025,Lo=1026,Ta=1027,xg=1028,ed=1029,Ag=1030,nd=1031,id=1033,Ml=33776,Tl=33777,Cl=33778,Rl=33779,Gh=35840,Hh=35841,Vh=35842,Wh=35843,Xh=36196,Kh=37492,Jh=37496,Yh=37808,Qh=37809,qh=37810,Zh=37811,jh=37812,$h=37813,tf=37814,ef=37815,nf=37816,rf=37817,sf=37818,of=37819,af=37820,cf=37821,Pl=36492,lf=36494,uf=36495,wg=36283,hf=36284,ff=36285,df=36286,Lv=3200,Nv=3201,Eg=0,Uv=1,Er="",fi="srgb",qr="srgb-linear",rd="display-p3",vu="display-p3-linear",Xl="linear",ve="srgb",Kl="rec709",Jl="p3",eo=7680,jd=519,Dv=512,Ov=513,Bv=514,bg=515,Fv=516,kv=517,zv=518,Gv=519,$d=35044,tp="300 es",er=2e3,Yl=2001;class Zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gu=Math.PI/180,pf=180/Math.PI;function Dc(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function Je(i,t,e){return Math.max(t,Math.min(e,i))}function Hv(i,t){return(i%t+t)%t}function Hu(i,t,e){return(1-e)*i+e*t}function Ga(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,r,s,o,a,c,l){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],y=r[0],m=r[3],p=r[6],A=r[1],_=r[4],S=r[7],N=r[2],M=r[5],T=r[8];return s[0]=o*y+a*A+c*N,s[3]=o*m+a*_+c*M,s[6]=o*p+a*S+c*T,s[1]=l*y+u*A+h*N,s[4]=l*m+u*_+h*M,s[7]=l*p+u*S+h*T,s[2]=f*y+d*A+g*N,s[5]=f*m+d*_+g*M,s[8]=f*p+d*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=h*y,t[1]=(r*l-u*n)*y,t[2]=(a*n-r*o)*y,t[3]=f*y,t[4]=(u*e-r*c)*y,t[5]=(r*s-a*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vu.makeScale(t,e)),this}rotate(t){return this.premultiply(Vu.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vu=new Qt;function Sg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ql(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vv(){const i=Ql("canvas");return i.style.display="block",i}const ep={};function nc(i){i in ep||(ep[i]=!0,console.warn(i))}function Wv(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const np=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ip=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ha={[qr]:{transfer:Xl,primaries:Kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[fi]:{transfer:ve,primaries:Kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[vu]:{transfer:Xl,primaries:Jl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ip),fromReference:i=>i.applyMatrix3(np)},[rd]:{transfer:ve,primaries:Jl,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ip),fromReference:i=>i.applyMatrix3(np).convertLinearToSRGB()}},Xv=new Set([qr,vu]),he={enabled:!0,_workingColorSpace:qr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Xv.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ha[t].toReference,r=Ha[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ha[i].primaries},getTransfer:function(i){return i===Er?Xl:Ha[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ha[t].luminanceCoefficients)}};function No(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let no;class Kv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{no===void 0&&(no=Ql("canvas")),no.width=t.width,no.height=t.height;const n=no.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=no}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ql("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=No(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(No(e[n]/255)*255):e[n]=No(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jv=0;class Mg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Dc(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xu(r[o].image)):s.push(Xu(r[o]))}else s=Xu(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Xu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yv=0;class dn extends Zs{constructor(t=dn.DEFAULT_IMAGE,e=dn.DEFAULT_MAPPING,n=ys,r=ys,s=ni,o=vs,a=ri,c=or,l=dn.DEFAULT_ANISOTROPY,u=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Dc(),this.name="",this.source=new Mg(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cc:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cc:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=fg;dn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,r=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,S=(d+1)/2,N=(p+1)/2,M=(u+f)/4,T=(h+y)/4,I=(g+m)/4;return _>S&&_>N?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=M/n,s=T/n):S>N?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=M/r,s=I/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=T/s,r=I/s),this.set(n,r,s,e),this}let A=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-y)/A,this.z=(f-u)/A,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qv extends Zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new dn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mg(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xs extends Qv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tg extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qv extends dn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oc{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],y=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(h!==y||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*y,A=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const N=Math.sqrt(_),M=Math.atan2(N,p*A);m=Math.sin(m*M)/N,a=Math.sin(a*M)/N}const S=a*A;if(c=c*m+f*S,l=l*m+d*S,u=u*m+g*S,h=h*m+y*S,m===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=N,l*=N,u*=N,h*=N}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ku.copy(this).projectOnVector(t),this.sub(Ku)}reflect(t){return this.sub(Ku.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ku=new O,rp=new Oc;class Bc{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yc.copy(n.boundingBox)),Yc.applyMatrix4(t.matrixWorld),this.union(Yc)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Va),Qc.subVectors(this.max,Va),io.subVectors(t.a,Va),ro.subVectors(t.b,Va),so.subVectors(t.c,Va),fr.subVectors(ro,io),dr.subVectors(so,ro),$r.subVectors(io,so);let e=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-$r.z,$r.y,fr.z,0,-fr.x,dr.z,0,-dr.x,$r.z,0,-$r.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-$r.y,$r.x,0];return!Ju(e,io,ro,so,Qc)||(e=[1,0,0,0,1,0,0,0,1],!Ju(e,io,ro,so,Qc))?!1:(qc.crossVectors(fr,dr),e=[qc.x,qc.y,qc.z],Ju(e,io,ro,so,Qc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Li=[new O,new O,new O,new O,new O,new O,new O,new O],Kn=new O,Yc=new Bc,io=new O,ro=new O,so=new O,fr=new O,dr=new O,$r=new O,Va=new O,Qc=new O,qc=new O,ts=new O;function Ju(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ts.fromArray(i,s);const a=r.x*Math.abs(ts.x)+r.y*Math.abs(ts.y)+r.z*Math.abs(ts.z),c=t.dot(ts),l=e.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Zv=new Bc,Wa=new O,Yu=new O;class sd{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wa.subVectors(t,this.center);const e=Wa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Wa,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wa.copy(t.center).add(Yu)),this.expandByPoint(Wa.copy(t.center).sub(Yu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new O,Qu=new O,Zc=new O,pr=new O,qu=new O,jc=new O,Zu=new O;class Cg{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ni.copy(this.origin).addScaledVector(this.direction,e),Ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qu.copy(t).add(e).multiplyScalar(.5),Zc.copy(e).sub(t).normalize(),pr.copy(this.origin).sub(Qu);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Zc),a=pr.dot(this.direction),c=-pr.dot(Zc),l=pr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qu).addScaledVector(Zc,f),d}intersectSphere(t,e){Ni.subVectors(t.center,this.origin);const n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ni)!==null}intersectTriangle(t,e,n,r,s){qu.subVectors(e,t),jc.subVectors(n,t),Zu.crossVectors(qu,jc);let o=this.direction.dot(Zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,t);const c=a*this.direction.dot(jc.crossVectors(pr,jc));if(c<0)return null;const l=a*this.direction.dot(qu.cross(pr));if(l<0||c+l>o)return null;const u=-a*pr.dot(Zu);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,r,s,o,a,c,l,u,h,f,d,g,y,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,y,m)}set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/oo.setFromMatrixColumn(t,0).length(),s=1/oo.setFromMatrixColumn(t,1).length(),o=1/oo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,d=c*h,g=l*u,y=l*h;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,d=c*h,g=l*u,y=l*h;e[0]=f-y*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,y=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+y,e[1]=c*h,e[5]=y*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=y-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-y*h}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,y=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jv,t,$v)}lookAt(t,e,n){const r=this.elements;return En.subVectors(t,e),En.lengthSq()===0&&(En.z=1),En.normalize(),mr.crossVectors(n,En),mr.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),mr.crossVectors(n,En)),mr.normalize(),$c.crossVectors(En,mr),r[0]=mr.x,r[4]=$c.x,r[8]=En.x,r[1]=mr.y,r[5]=$c.y,r[9]=En.y,r[2]=mr.z,r[6]=$c.z,r[10]=En.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],A=n[3],_=n[7],S=n[11],N=n[15],M=r[0],T=r[4],I=r[8],b=r[12],x=r[1],R=r[5],V=r[9],G=r[13],Z=r[2],U=r[6],B=r[10],J=r[14],W=r[3],rt=r[7],at=r[11],mt=r[15];return s[0]=o*M+a*x+c*Z+l*W,s[4]=o*T+a*R+c*U+l*rt,s[8]=o*I+a*V+c*B+l*at,s[12]=o*b+a*G+c*J+l*mt,s[1]=u*M+h*x+f*Z+d*W,s[5]=u*T+h*R+f*U+d*rt,s[9]=u*I+h*V+f*B+d*at,s[13]=u*b+h*G+f*J+d*mt,s[2]=g*M+y*x+m*Z+p*W,s[6]=g*T+y*R+m*U+p*rt,s[10]=g*I+y*V+m*B+p*at,s[14]=g*b+y*G+m*J+p*mt,s[3]=A*M+_*x+S*Z+N*W,s[7]=A*T+_*R+S*U+N*rt,s[11]=A*I+_*V+S*B+N*at,s[15]=A*b+_*G+S*J+N*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*d-n*c*d)+y*(+e*c*d-e*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+e*l*h-e*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-r*a*u-e*c*h+e*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],A=h*m*l-y*f*l+y*c*d-a*m*d-h*c*p+a*f*p,_=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,S=u*y*l-g*h*l+g*a*d-o*y*d-u*a*p+o*h*p,N=g*h*c-u*y*c-g*a*f+o*y*f+u*a*m-o*h*m,M=e*A+n*_+r*S+s*N;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=A*T,t[1]=(y*f*s-h*m*s-y*r*d+n*m*d+h*r*p-n*f*p)*T,t[2]=(a*m*s-y*c*s+y*r*l-n*m*l-a*r*p+n*c*p)*T,t[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*d-n*c*d)*T,t[4]=_*T,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*T,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*T,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*d+e*c*d)*T,t[8]=S*T,t[9]=(g*h*s-u*y*s-g*n*d+e*y*d+u*n*p-e*h*p)*T,t[10]=(o*y*s-g*a*s+g*n*l-e*y*l-o*n*p+e*a*p)*T,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*d-e*a*d)*T,t[12]=N*T,t[13]=(u*y*r-g*h*r+g*n*f-e*y*f-u*n*m+e*h*m)*T,t[14]=(g*a*r-o*y*r-g*n*c+e*y*c+o*n*m-e*a*m)*T,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,y=o*u,m=o*h,p=a*h,A=c*l,_=c*u,S=c*h,N=n.x,M=n.y,T=n.z;return r[0]=(1-(y+p))*N,r[1]=(d+S)*N,r[2]=(g-_)*N,r[3]=0,r[4]=(d-S)*M,r[5]=(1-(f+p))*M,r[6]=(m+A)*M,r[7]=0,r[8]=(g+_)*T,r[9]=(m-A)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=oo.set(r[0],r[1],r[2]).length();const o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Jn.copy(this);const l=1/s,u=1/o,h=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,e.setFromRotationMatrix(Jn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=er){const c=this.elements,l=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let d,g;if(a===er)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Yl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=er){const c=this.elements,l=1/(e-t),u=1/(n-r),h=1/(o-s),f=(e+t)*l,d=(n+r)*u;let g,y;if(a===er)g=(o+s)*h,y=-2*h;else if(a===Yl)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oo=new O,Jn=new Ee,jv=new O(0,0,0),$v=new O(1,1,1),mr=new O,$c=new O,En=new O,sp=new Ee,op=new Oc;class si{constructor(t=0,e=0,n=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return op.setFromEuler(this),this.setFromQuaternion(op,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let t_=0;const ap=new O,ao=new Oc,Ui=new Ee,tl=new O,Xa=new O,e_=new O,n_=new Oc,cp=new O(1,0,0),lp=new O(0,1,0),up=new O(0,0,1),hp={type:"added"},i_={type:"removed"},co={type:"childadded",child:null},ju={type:"childremoved",child:null};class qe extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Dc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new O,e=new si,n=new Oc,r=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Qt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(cp,t)}rotateY(t){return this.rotateOnAxis(lp,t)}rotateZ(t){return this.rotateOnAxis(up,t)}translateOnAxis(t,e){return ap.copy(t).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cp,t)}translateY(t){return this.translateOnAxis(lp,t)}translateZ(t){return this.translateOnAxis(up,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tl.copy(t):tl.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Xa,tl,this.up):Ui.lookAt(tl,Xa,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(Ui),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hp),co.child=t,this.dispatchEvent(co),co.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(i_),ju.child=t,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hp),co.child=t,this.dispatchEvent(co),co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,t,e_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,n_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}qe.DEFAULT_UP=new O(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new O,Di=new O,$u=new O,Oi=new O,lo=new O,uo=new O,fp=new O,th=new O,eh=new O,nh=new O;class Ei{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Yn.subVectors(t,e),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Yn.subVectors(r,e),Di.subVectors(n,e),$u.subVectors(t,e);const o=Yn.dot(Yn),a=Yn.dot(Di),c=Yn.dot($u),l=Di.dot(Di),u=Di.dot($u),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Oi.x),c.addScaledVector(o,Oi.y),c.addScaledVector(a,Oi.z),c)}static isFrontFacing(t,e,n,r){return Yn.subVectors(n,e),Di.subVectors(t,e),Yn.cross(Di).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Yn.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ei.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ei.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;lo.subVectors(r,n),uo.subVectors(s,n),th.subVectors(t,n);const c=lo.dot(th),l=uo.dot(th);if(c<=0&&l<=0)return e.copy(n);eh.subVectors(t,r);const u=lo.dot(eh),h=uo.dot(eh);if(u>=0&&h<=u)return e.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(lo,o);nh.subVectors(t,s);const d=lo.dot(nh),g=uo.dot(nh);if(g>=0&&d<=g)return e.copy(s);const y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(uo,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return fp.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(fp,a);const p=1/(m+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector(lo,o).addScaledVector(uo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},el={h:0,s:0,l:0};function ih(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=Hv(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ih(o,s,t+1/3),this.g=ih(o,s,t),this.b=ih(o,s,t-1/3)}return he.toWorkingColorSpace(this,r),this}setStyle(t,e=fi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fi){const n=Rg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=No(t.r),this.g=No(t.g),this.b=No(t.b),this}copyLinearToSRGB(t){return this.r=Wu(t.r),this.g=Wu(t.g),this.b=Wu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return he.fromWorkingColorSpace($e.copy(this),t),Math.round(Je($e.r*255,0,255))*65536+Math.round(Je($e.g*255,0,255))*256+Math.round(Je($e.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace($e.copy(this),e);const n=$e.r,r=$e.g,s=$e.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=fi){he.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,r=$e.b;return t!==fi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(gr),this.setHSL(gr.h+t,gr.s+e,gr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gr),t.getHSL(el);const n=Hu(gr.h,el.h,e),r=Hu(gr.s,el.s,e),s=Hu(gr.l,el.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new ie;ie.NAMES=Rg;let r_=0;class Fc extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Dc(),this.name="",this.type="Material",this.blending=Io,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Bh,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(n.blending=this.blending),this.side!==Kr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oh&&(n.blendSrc=this.blendSrc),this.blendDst!==Bh&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ad extends Fc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new O,nl=new bt;class Ti{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$d,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return nc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nl.fromBufferAttribute(this,e),nl.applyMatrix3(t),this.setXY(e,nl.x,nl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ga(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ga(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ga(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ga(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ga(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$d&&(t.usage=this.usage),t}}class Pg extends Ti{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ig extends Ti{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends Ti{constructor(t,e,n){super(new Float32Array(t),e,n)}}let s_=0;const Ln=new Ee,rh=new qe,ho=new O,bn=new Bc,Ka=new Bc,ze=new O;class Wn extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Dc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sg(t)?Ig:Pg)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return rh.lookAt(t),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sd);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ka.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(bn.min,Ka.min),bn.expandByPoint(ze),ze.addVectors(bn.max,Ka.max),bn.expandByPoint(ze)):(bn.expandByPoint(Ka.min),bn.expandByPoint(Ka.max))}bn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ze.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ze));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(ho.fromBufferAttribute(t,l),ze.add(ho)),r=Math.max(r,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new O,c[I]=new O;const l=new O,u=new O,h=new O,f=new bt,d=new bt,g=new bt,y=new O,m=new O;function p(I,b,x){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,I),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[I].add(y),a[b].add(y),a[x].add(y),c[I].add(m),c[b].add(m),c[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let I=0,b=A.length;I<b;++I){const x=A[I],R=x.start,V=x.count;for(let G=R,Z=R+V;G<Z;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const _=new O,S=new O,N=new O,M=new O;function T(I){N.fromBufferAttribute(r,I),M.copy(N);const b=a[I];_.copy(b),_.sub(N.multiplyScalar(N.dot(b))).normalize(),S.crossVectors(M,b);const R=S.dot(c[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,R)}for(let I=0,b=A.length;I<b;++I){const x=A[I],R=x.start,V=x.count;for(let G=R,Z=R+V;G<Z;G+=3)T(t.getX(G+0)),T(t.getX(G+1)),T(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ti(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?d=c[y]*a.data.stride+a.offset:d=c[y]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Ti(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=t(c,n);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dp=new Ee,es=new Cg,il=new sd,pp=new O,fo=new O,po=new O,mo=new O,sh=new O,rl=new O,sl=new bt,ol=new bt,al=new bt,mp=new O,gp=new O,yp=new O,cl=new O,ll=new O;class Ce extends qe{constructor(t=new Wn,e=new ad){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){rl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(sh.fromBufferAttribute(h,t),o?rl.addScaledVector(sh,u):rl.addScaledVector(sh.sub(e),u))}e.add(rl)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),es.copy(t.ray).recast(t.near),!(il.containsPoint(es.origin)===!1&&(es.intersectSphere(il,pp)===null||es.origin.distanceToSquared(pp)>(t.far-t.near)**2))&&(dp.copy(s).invert(),es.copy(t.ray).applyMatrix4(dp),!(n.boundingBox!==null&&es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=A,N=_;S<N;S+=3){const M=a.getX(S),T=a.getX(S+1),I=a.getX(S+2);r=ul(this,p,t,n,l,u,h,M,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const A=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=ul(this,o,t,n,l,u,h,A,_,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=A,N=_;S<N;S+=3){const M=S,T=S+1,I=S+2;r=ul(this,p,t,n,l,u,h,M,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){const A=m,_=m+1,S=m+2;r=ul(this,o,t,n,l,u,h,A,_,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function o_(i,t,e,n,r,s,o,a){let c;if(t.side===fn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Kr,a),c===null)return null;ll.copy(a),ll.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ll);return l<e.near||l>e.far?null:{distance:l,point:ll.clone(),object:i}}function ul(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,fo),i.getVertexPosition(c,po),i.getVertexPosition(l,mo);const u=o_(i,t,e,n,fo,po,mo,cl);if(u){r&&(sl.fromBufferAttribute(r,a),ol.fromBufferAttribute(r,c),al.fromBufferAttribute(r,l),u.uv=Ei.getInterpolation(cl,fo,po,mo,sl,ol,al,new bt)),s&&(sl.fromBufferAttribute(s,a),ol.fromBufferAttribute(s,c),al.fromBufferAttribute(s,l),u.uv1=Ei.getInterpolation(cl,fo,po,mo,sl,ol,al,new bt)),o&&(mp.fromBufferAttribute(o,a),gp.fromBufferAttribute(o,c),yp.fromBufferAttribute(o,l),u.normal=Ei.getInterpolation(cl,fo,po,mo,mp,gp,yp,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};Ei.getNormal(fo,po,mo,h.normal),u.face=h}return u}class Wr extends Wn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(h,2));function g(y,m,p,A,_,S,N,M,T,I,b){const x=S/T,R=N/I,V=S/2,G=N/2,Z=M/2,U=T+1,B=I+1;let J=0,W=0;const rt=new O;for(let at=0;at<B;at++){const mt=at*R-G;for(let Nt=0;Nt<U;Nt++){const _t=Nt*x-V;rt[y]=_t*A,rt[m]=mt*_,rt[p]=Z,l.push(rt.x,rt.y,rt.z),rt[y]=0,rt[m]=0,rt[p]=M>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Nt/T),h.push(1-at/I),J+=1}}for(let at=0;at<I;at++)for(let mt=0;mt<T;mt++){const Nt=f+mt+U*at,_t=f+mt+U*(at+1),q=f+(mt+1)+U*(at+1),j=f+(mt+1)+U*at;c.push(Nt,_t,j),c.push(_t,q,j),W+=6}a.addGroup(d,W,b),d+=W,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ca(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=Ca(i[e]);for(const r in n)t[r]=n[r]}return t}function a_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lg(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const c_={clone:Ca,merge:sn};var l_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends Fc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ca(t.uniforms),this.uniformsGroups=a_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ng extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=er}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new O,vp=new bt,_p=new bt;class Hn extends Ng{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=pf*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pf*2*Math.atan(Math.tan(Gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yr.x,yr.y).multiplyScalar(-t/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-t/yr.z)}getViewSize(t,e){return this.getViewBounds(t,vp,_p),e.subVectors(_p,vp)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const go=-90,yo=1;class h_ extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(go,yo,t,e);r.layers=this.layers,this.add(r);const s=new Hn(go,yo,t,e);s.layers=this.layers,this.add(s);const o=new Hn(go,yo,t,e);o.layers=this.layers,this.add(o);const a=new Hn(go,yo,t,e);a.layers=this.layers,this.add(a);const c=new Hn(go,yo,t,e);c.layers=this.layers,this.add(c);const l=new Hn(go,yo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(const l of e)this.remove(l);if(t===er)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ug extends dn{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:ba,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class f_ extends Xs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ug(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ni}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wr(5,5,5),s=new ar({name:"CubemapFromEquirect",uniforms:Ca(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Hr});s.uniforms.tEquirect.value=e;const o=new Ce(r,s),a=e.minFilter;return e.minFilter===vs&&(e.minFilter=ni),new h_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const oh=new O,d_=new O,p_=new Qt;class as{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=oh.subVectors(n,e).cross(d_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||p_.getNormalMatrix(t),r=this.coplanarPoint(oh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new sd,hl=new O;class cd{constructor(t=new as,e=new as,n=new as,r=new as,s=new as,o=new as){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=er){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],y=r[10],m=r[11],p=r[12],A=r[13],_=r[14],S=r[15];if(n[0].setComponents(c-s,f-l,m-d,S-p).normalize(),n[1].setComponents(c+s,f+l,m+d,S+p).normalize(),n[2].setComponents(c+o,f+u,m+g,S+A).normalize(),n[3].setComponents(c-o,f-u,m-g,S-A).normalize(),n[4].setComponents(c-a,f-h,m-y,S-_).normalize(),e===er)n[5].setComponents(c+a,f+h,m+y,S+_).normalize();else if(e===Yl)n[5].setComponents(a,h,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(hl.x=r.normal.x>0?t.max.x:t.min.x,hl.y=r.normal.y>0?t.max.y:t.min.y,hl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(hl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dg(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function m_(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c._updateRange,f=c.updateRanges;if(i.bindBuffer(l,a),h.count===-1&&f.length===0&&i.bufferSubData(l,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const y=f[d];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Ra extends Wn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let _=0;_<l;_++){const S=_*h-s;g.push(S,-A,0),y.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){const _=A+l*p,S=A+l*(p+1),N=A+1+l*(p+1),M=A+1+l*p;d.push(_,S,M),d.push(S,N,M)}this.setIndex(d),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(y,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ra(t.width,t.height,t.widthSegments,t.heightSegments)}}var g_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,v_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",J_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ux=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,px=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_x=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,JA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:g_,alphahash_pars_fragment:y_,alphamap_fragment:v_,alphamap_pars_fragment:__,alphatest_fragment:x_,alphatest_pars_fragment:A_,aomap_fragment:w_,aomap_pars_fragment:E_,batching_pars_vertex:b_,batching_vertex:S_,begin_vertex:M_,beginnormal_vertex:T_,bsdfs:C_,iridescence_fragment:R_,bumpmap_pars_fragment:P_,clipping_planes_fragment:I_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:U_,color_fragment:D_,color_pars_fragment:O_,color_pars_vertex:B_,color_vertex:F_,common:k_,cube_uv_reflection_fragment:z_,defaultnormal_vertex:G_,displacementmap_pars_vertex:H_,displacementmap_vertex:V_,emissivemap_fragment:W_,emissivemap_pars_fragment:X_,colorspace_fragment:K_,colorspace_pars_fragment:J_,envmap_fragment:Y_,envmap_common_pars_fragment:Q_,envmap_pars_fragment:q_,envmap_pars_vertex:Z_,envmap_physical_pars_fragment:cx,envmap_vertex:j_,fog_vertex:$_,fog_pars_vertex:tx,fog_fragment:ex,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:rx,lights_lambert_fragment:sx,lights_lambert_pars_fragment:ox,lights_pars_begin:ax,lights_toon_fragment:lx,lights_toon_pars_fragment:ux,lights_phong_fragment:hx,lights_phong_pars_fragment:fx,lights_physical_fragment:dx,lights_physical_pars_fragment:px,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:yx,logdepthbuf_fragment:vx,logdepthbuf_pars_fragment:_x,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:Ax,map_fragment:wx,map_pars_fragment:Ex,map_particle_fragment:bx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:Tx,morphinstance_vertex:Cx,morphcolor_vertex:Rx,morphnormal_vertex:Px,morphtarget_pars_vertex:Ix,morphtarget_vertex:Lx,normal_fragment_begin:Nx,normal_fragment_maps:Ux,normal_pars_fragment:Dx,normal_pars_vertex:Ox,normal_vertex:Bx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:zx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Hx,opaque_fragment:Vx,packing:Wx,premultiplied_alpha_fragment:Xx,project_vertex:Kx,dithering_fragment:Jx,dithering_pars_fragment:Yx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:qx,shadowmap_pars_fragment:Zx,shadowmap_pars_vertex:jx,shadowmap_vertex:$x,shadowmask_pars_fragment:tA,skinbase_vertex:eA,skinning_pars_vertex:nA,skinning_vertex:iA,skinnormal_vertex:rA,specularmap_fragment:sA,specularmap_pars_fragment:oA,tonemapping_fragment:aA,tonemapping_pars_fragment:cA,transmission_fragment:lA,transmission_pars_fragment:uA,uv_pars_fragment:hA,uv_pars_vertex:fA,uv_vertex:dA,worldpos_vertex:pA,background_vert:mA,background_frag:gA,backgroundCube_vert:yA,backgroundCube_frag:vA,cube_vert:_A,cube_frag:xA,depth_vert:AA,depth_frag:wA,distanceRGBA_vert:EA,distanceRGBA_frag:bA,equirect_vert:SA,equirect_frag:MA,linedashed_vert:TA,linedashed_frag:CA,meshbasic_vert:RA,meshbasic_frag:PA,meshlambert_vert:IA,meshlambert_frag:LA,meshmatcap_vert:NA,meshmatcap_frag:UA,meshnormal_vert:DA,meshnormal_frag:OA,meshphong_vert:BA,meshphong_frag:FA,meshphysical_vert:kA,meshphysical_frag:zA,meshtoon_vert:GA,meshtoon_frag:HA,points_vert:VA,points_frag:WA,shadow_vert:XA,shadow_frag:KA,sprite_vert:JA,sprite_frag:YA},pt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},wi={basic:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:sn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:sn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:sn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:sn([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:sn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:sn([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:sn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:sn([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:sn([pt.common,pt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:sn([pt.lights,pt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};wi.physical={uniforms:sn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const fl={r:0,b:0,g:0},is=new si,QA=new Ee;function qA(i,t,e,n,r,s,o){const a=new ie(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(A){let _=A.isScene===!0?A.background:null;return _&&_.isTexture&&(_=(A.backgroundBlurriness>0?e:t).get(_)),_}function y(A){let _=!1;const S=g(A);S===null?p(a,c):S&&S.isColor&&(p(S,1),_=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===yu)?(u===void 0&&(u=new Ce(new Wr(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Ca(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),is.copy(_.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(QA.makeRotationFromEuler(is)),u.material.toneMapped=he.getTransfer(S.colorSpace)!==ve,(h!==S||f!==S.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ce(new Ra(2,2),new ar({name:"BackgroundMaterial",uniforms:Ca(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=he.getTransfer(S.colorSpace)!==ve,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function p(A,_){A.getRGB(fl,Lg(i)),n.buffers.color.setClear(fl.r,fl.g,fl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(A,_=1){a.set(A),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,p(a,c)},render:y,addToRenderList:m}}function ZA(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(x,R,V,G,Z){let U=!1;const B=h(G,V,R);s!==B&&(s=B,l(s.object)),U=d(x,G,V,Z),U&&g(x,G,V,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,S(x,R,V,G),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,R,V){const G=V.wireframe===!0;let Z=n[x.id];Z===void 0&&(Z={},n[x.id]=Z);let U=Z[R.id];U===void 0&&(U={},Z[R.id]=U);let B=U[G];return B===void 0&&(B=f(c()),U[G]=B),B}function f(x){const R=[],V=[],G=[];for(let Z=0;Z<e;Z++)R[Z]=0,V[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:G,object:x,attributes:{},index:null}}function d(x,R,V,G){const Z=s.attributes,U=R.attributes;let B=0;const J=V.getAttributes();for(const W in J)if(J[W].location>=0){const at=Z[W];let mt=U[W];if(mt===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;B++}return s.attributesNum!==B||s.index!==G}function g(x,R,V,G){const Z={},U=R.attributes;let B=0;const J=V.getAttributes();for(const W in J)if(J[W].location>=0){let at=U[W];at===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));const mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),Z[W]=mt,B++}s.attributes=Z,s.attributesNum=B,s.index=G}function y(){const x=s.newAttributes;for(let R=0,V=x.length;R<V;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const V=s.newAttributes,G=s.enabledAttributes,Z=s.attributeDivisors;V[x]=1,G[x]===0&&(i.enableVertexAttribArray(x),G[x]=1),Z[x]!==R&&(i.vertexAttribDivisor(x,R),Z[x]=R)}function A(){const x=s.newAttributes,R=s.enabledAttributes;for(let V=0,G=R.length;V<G;V++)R[V]!==x[V]&&(i.disableVertexAttribArray(V),R[V]=0)}function _(x,R,V,G,Z,U,B){B===!0?i.vertexAttribIPointer(x,R,V,Z,U):i.vertexAttribPointer(x,R,V,G,Z,U)}function S(x,R,V,G){y();const Z=G.attributes,U=V.getAttributes(),B=R.defaultAttributeValues;for(const J in U){const W=U[J];if(W.location>=0){let rt=Z[J];if(rt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const at=rt.normalized,mt=rt.itemSize,Nt=t.get(rt);if(Nt===void 0)continue;const _t=Nt.buffer,q=Nt.type,j=Nt.bytesPerElement,ht=q===i.INT||q===i.UNSIGNED_INT||rt.gpuType===jf;if(rt.isInterleavedBufferAttribute){const et=rt.data,xt=et.stride,Ut=rt.offset;if(et.isInstancedInterleavedBuffer){for(let It=0;It<W.locationSize;It++)p(W.location+It,et.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let It=0;It<W.locationSize;It++)m(W.location+It);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let It=0;It<W.locationSize;It++)_(W.location+It,mt/W.locationSize,q,at,xt*j,(Ut+mt/W.locationSize*It)*j,ht)}else{if(rt.isInstancedBufferAttribute){for(let et=0;et<W.locationSize;et++)p(W.location+et,rt.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let et=0;et<W.locationSize;et++)m(W.location+et);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let et=0;et<W.locationSize;et++)_(W.location+et,mt/W.locationSize,q,at,mt*j,mt/W.locationSize*et*j,ht)}}else if(B!==void 0){const at=B[J];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(W.location,at);break;case 3:i.vertexAttrib3fv(W.location,at);break;case 4:i.vertexAttrib4fv(W.location,at);break;default:i.vertexAttrib1fv(W.location,at)}}}}A()}function N(){I();for(const x in n){const R=n[x];for(const V in R){const G=R[V];for(const Z in G)u(G[Z].object),delete G[Z];delete R[V]}delete n[x]}}function M(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const V in R){const G=R[V];for(const Z in G)u(G[Z].object),delete G[Z];delete R[V]}delete n[x.id]}function T(x){for(const R in n){const V=n[R];if(V[x.id]===void 0)continue;const G=V[x.id];for(const Z in G)u(G[Z].object),delete G[Z];delete V[x.id]}}function I(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function jA(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y];for(let y=0;y<f.length;y++)e.update(g,n,f[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function $A(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==ri&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const T=M===Uc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==or&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==tr&&!T)}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:p,maxVaryings:A,maxFragmentUniforms:_,vertexTextures:S,maxSamples:N}}function tw(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new as,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const A=s?0:n,_=A*4;let S=p.clippingState||null;c.value=S,S=u(g,f,_,d);for(let N=0;N!==_;++N)S[N]=e[N];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=d+y*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=d;_!==y;++_,S+=4)o.copy(h[_]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function ew(i){let t=new WeakMap;function e(o,a){return a===Fh?o.mapping=ba:a===kh&&(o.mapping=Sa),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fh||a===kh)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new f_(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Og extends Ng{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const So=4,xp=[.125,.215,.35,.446,.526,.582],hs=20,ah=new Og,Ap=new ie;let ch=null,lh=0,uh=0,hh=!1;const cs=(1+Math.sqrt(5))/2,vo=1/cs,wp=[new O(-cs,vo,0),new O(cs,vo,0),new O(-vo,0,cs),new O(vo,0,cs),new O(0,cs,-vo),new O(0,cs,vo),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Ep{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ch,lh,uh),this._renderer.xr.enabled=hh,t.scissorTest=!1,dl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ba||t.mapping===Sa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ch=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Uc,format:ri,colorSpace:qr,depthBuffer:!1},r=bp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nw(s)),this._blurMaterial=iw(s,t,e)}return r}_compileMaterial(t){const e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,ah)}_sceneToCubeUV(t,e,n,r){const a=new Hn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ap),u.toneMapping=Vr,u.autoClear=!1;const d=new ad({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new Ce(new Wr,d);let y=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,y=!0):(d.color.copy(Ap),y=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):A===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const _=this._cubeSize;dl(r,A*_,p>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ba||t.mapping===Sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ce(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const c=this._cubeSize;dl(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ah)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wp[(r-s-1)%wp.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ce(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hs-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):hs;m>hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hs}`);const p=[];let A=0;for(let T=0;T<hs;++T){const I=T/y,b=Math.exp(-I*I/2);p.push(b),T===0?A+=b:T<m&&(A+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const S=this._sizeLods[r],N=3*S*(r>_-So?r-_+So:0),M=4*(this._cubeSize-S);dl(e,N,M,3*S,2*S),c.setRenderTarget(e),c.render(h,ah)}}function nw(i){const t=[],e=[],n=[];let r=i;const s=i-So+1+xp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>i-So?c=xp[o-i+So-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,y=3,m=2,p=1,A=new Float32Array(y*g*d),_=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let M=0;M<d;M++){const T=M%3*2/3-1,I=M>2?0:-1,b=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];A.set(b,y*g*M),_.set(f,m*g*M);const x=[M,M,M,M,M,M];S.set(x,p*g*M)}const N=new Wn;N.setAttribute("position",new Ti(A,y)),N.setAttribute("uv",new Ti(_,m)),N.setAttribute("faceIndex",new Ti(S,p)),t.push(N),r>So&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bp(i,t,e){const n=new Xs(i,t,e);return n.texture.mapping=yu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dl(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function iw(i,t,e){const n=new Float32Array(hs),r=new O(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Sp(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Mp(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rw(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fh||c===kh,u=c===ba||c===Sa;if(l||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ep(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Ep(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sw(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&nc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ow(i,t,e,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const y=d[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let y=0;if(d!==null){const A=d.array;y=d.version;for(let _=0,S=A.length;_<S;_+=3){const N=A[_+0],M=A[_+1],T=A[_+2];f.push(N,M,M,T,T,N)}}else if(g!==void 0){const A=g.array;y=g.version;for(let _=0,S=A.length/3-1;_<S;_+=3){const N=_+0,M=_+1,T=_+2;f.push(N,M,M,T,T,N)}}else return;const m=new(Sg(f)?Ig:Pg)(f,1);m.version=y;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function aw(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,y){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,y,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A];for(let A=0;A<y.length;A++)e.update(p,n,y[A])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cw(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function lw(i,t,e){const n=new WeakMap,r=new Be;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let N=a.attributes.position.count*S,M=1;N>t.maxTextureSize&&(M=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const T=new Float32Array(N*M*4*h),I=new Tg(T,N,M,h);I.type=tr,I.needsUpdate=!0;const b=S*4;for(let R=0;R<h;R++){const V=p[R],G=A[R],Z=_[R],U=N*M*4*R;for(let B=0;B<V.count;B++){const J=B*b;g===!0&&(r.fromBufferAttribute(V,B),T[U+J+0]=r.x,T[U+J+1]=r.y,T[U+J+2]=r.z,T[U+J+3]=0),y===!0&&(r.fromBufferAttribute(G,B),T[U+J+4]=r.x,T[U+J+5]=r.y,T[U+J+6]=r.z,T[U+J+7]=0),m===!0&&(r.fromBufferAttribute(Z,B),T[U+J+8]=r.x,T[U+J+9]=r.y,T[U+J+10]=r.z,T[U+J+11]=Z.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new bt(N,M)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function uw(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}class Bg extends dn{constructor(t,e,n,r,s,o,a,c,l,u=Lo){if(u!==Lo&&u!==Ta)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Lo&&(n=Ws),n===void 0&&u===Ta&&(n=Ma),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Vn,this.minFilter=c!==void 0?c:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fg=new dn,Tp=new Bg(1,1),kg=new Tg,zg=new qv,Gg=new Ug,Cp=[],Rp=[],Pp=new Float32Array(16),Ip=new Float32Array(9),Lp=new Float32Array(4);function Ba(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Cp[r];if(s===void 0&&(s=new Float32Array(r),Cp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _u(i,t){let e=Rp[t];e===void 0&&(e=new Int32Array(t),Rp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function dw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function pw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function mw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;Lp.set(n),i.uniformMatrix2fv(this.addr,!1,Lp),ke(e,n)}}function gw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;Ip.set(n),i.uniformMatrix3fv(this.addr,!1,Ip),ke(e,n)}}function yw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;Pp.set(n),i.uniformMatrix4fv(this.addr,!1,Pp),ke(e,n)}}function vw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _w(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function xw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function Aw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function ww(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ew(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function bw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Sw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Mw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Tp.compareFunction=bg,s=Tp):s=Fg,e.setTexture2D(t||s,r)}function Tw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||zg,r)}function Cw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Gg,r)}function Rw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||kg,r)}function Pw(i){switch(i){case 5126:return hw;case 35664:return fw;case 35665:return dw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return yw;case 5124:case 35670:return vw;case 35667:case 35671:return _w;case 35668:case 35672:return xw;case 35669:case 35673:return Aw;case 5125:return ww;case 36294:return Ew;case 36295:return bw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Rw}}function Iw(i,t){i.uniform1fv(this.addr,t)}function Lw(i,t){const e=Ba(t,this.size,2);i.uniform2fv(this.addr,e)}function Nw(i,t){const e=Ba(t,this.size,3);i.uniform3fv(this.addr,e)}function Uw(i,t){const e=Ba(t,this.size,4);i.uniform4fv(this.addr,e)}function Dw(i,t){const e=Ba(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ow(i,t){const e=Ba(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bw(i,t){const e=Ba(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fw(i,t){i.uniform1iv(this.addr,t)}function kw(i,t){i.uniform2iv(this.addr,t)}function zw(i,t){i.uniform3iv(this.addr,t)}function Gw(i,t){i.uniform4iv(this.addr,t)}function Hw(i,t){i.uniform1uiv(this.addr,t)}function Vw(i,t){i.uniform2uiv(this.addr,t)}function Ww(i,t){i.uniform3uiv(this.addr,t)}function Xw(i,t){i.uniform4uiv(this.addr,t)}function Kw(i,t,e){const n=this.cache,r=t.length,s=_u(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Fg,s[o])}function Jw(i,t,e){const n=this.cache,r=t.length,s=_u(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||zg,s[o])}function Yw(i,t,e){const n=this.cache,r=t.length,s=_u(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Gg,s[o])}function Qw(i,t,e){const n=this.cache,r=t.length,s=_u(e,r);Fe(n,s)||(i.uniform1iv(this.addr,s),ke(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||kg,s[o])}function qw(i){switch(i){case 5126:return Iw;case 35664:return Lw;case 35665:return Nw;case 35666:return Uw;case 35674:return Dw;case 35675:return Ow;case 35676:return Bw;case 5124:case 35670:return Fw;case 35667:case 35671:return kw;case 35668:case 35672:return zw;case 35669:case 35673:return Gw;case 5125:return Hw;case 36294:return Vw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return Qw}}class Zw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pw(e.type)}}class jw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qw(e.type)}}class $w{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const fh=/(\w+)(\])?(\[|\.)?/g;function Np(i,t){i.seq.push(t),i.map[t.id]=t}function tE(i,t,e){const n=i.name,r=n.length;for(fh.lastIndex=0;;){const s=fh.exec(n),o=fh.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Np(e,l===void 0?new Zw(a,i,t):new jw(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new $w(a),Np(e,h)),e=h}}}class Il{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);tE(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Up(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const eE=37297;let nE=0;function iE(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function rE(i){const t=he.getPrimaries(he.workingColorSpace),e=he.getPrimaries(i);let n;switch(t===e?n="":t===Jl&&e===Kl?n="LinearDisplayP3ToLinearSRGB":t===Kl&&e===Jl&&(n="LinearSRGBToLinearDisplayP3"),i){case qr:case vu:return[n,"LinearTransferOETF"];case fi:case rd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Dp(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+iE(i.getShaderSource(t),o)}else return r}function sE(i,t){const e=rE(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function oE(i,t){let e;switch(t){case bv:e="Linear";break;case Sv:e="Reinhard";break;case Mv:e="OptimizedCineon";break;case Tv:e="ACESFilmic";break;case Rv:e="AgX";break;case Pv:e="Neutral";break;case Cv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pl=new O;function aE(){he.getLuminanceCoefficients(pl);const i=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function lE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qa(i){return i!==""}function Op(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hE=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(i){return i.replace(hE,dE)}const fE=new Map;function dE(i,t){let e=Yt[t];if(e===void 0){const n=fE.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mf(e)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(i){return i.replace(pE,mE)}function mE(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ug?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qy?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function yE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ba:case Sa:t="ENVMAP_TYPE_CUBE";break;case yu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Sa:t="ENVMAP_MODE_REFRACTION";break}return t}function _E(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hg:t="ENVMAP_BLENDING_MULTIPLY";break;case wv:t="ENVMAP_BLENDING_MIX";break;case Ev:t="ENVMAP_BLENDING_ADD";break}return t}function xE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function AE(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=gE(e),l=yE(e),u=vE(e),h=_E(e),f=xE(e),d=cE(e),g=lE(s),y=r.createProgram();let m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qa).join(`
`),p.length>0&&(p+=`
`)):(m=[kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),p=[kp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vr?"#define TONE_MAPPING":"",e.toneMapping!==Vr?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Vr?oE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,sE("linearToOutputTexel",e.outputColorSpace),aE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qa).join(`
`)),o=mf(o),o=Op(o,e),o=Bp(o,e),a=mf(a),a=Op(a,e),a=Bp(a,e),o=Fp(o),a=Fp(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=A+m+o,S=A+p+a,N=Up(r,r.VERTEX_SHADER,_),M=Up(r,r.FRAGMENT_SHADER,S);r.attachShader(y,N),r.attachShader(y,M),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(R){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(N).trim(),Z=r.getShaderInfoLog(M).trim();let U=!0,B=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,N,M);else{const J=Dp(r,N,"vertex"),W=Dp(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+J+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||Z==="")&&(B=!1);B&&(R.diagnostics={runnable:U,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(N),r.deleteShader(M),I=new Il(r,y),b=uE(r,y)}let I;this.getUniforms=function(){return I===void 0&&T(this),I};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,eE)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nE++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=M,this}let wE=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bE(t),e.set(t,n)),n}}class bE{constructor(t){this.id=wE++,this.code=t,this.usedTimes=0}}function SE(i,t,e,n,r,s,o){const a=new od,c=new EE,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,x,R,V,G){const Z=V.fog,U=G.geometry,B=b.isMeshStandardMaterial?V.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||B),W=J&&J.mapping===yu?J.image.height:null,rt=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const at=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,mt=at!==void 0?at.length:0;let Nt=0;U.morphAttributes.position!==void 0&&(Nt=1),U.morphAttributes.normal!==void 0&&(Nt=2),U.morphAttributes.color!==void 0&&(Nt=3);let _t,q,j,ht;if(rt){const ae=wi[rt];_t=ae.vertexShader,q=ae.fragmentShader}else _t=b.vertexShader,q=b.fragmentShader,c.update(b),j=c.getVertexShaderID(b),ht=c.getFragmentShaderID(b);const et=i.getRenderTarget(),xt=G.isInstancedMesh===!0,Ut=G.isBatchedMesh===!0,It=!!b.map,de=!!b.matcap,L=!!J,te=!!b.aoMap,Lt=!!b.lightMap,Ft=!!b.bumpMap,St=!!b.normalMap,me=!!b.displacementMap,Ht=!!b.emissiveMap,Wt=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,Q=b.clearcoat>0,st=b.dispersion>0,ot=b.iridescence>0,it=b.sheen>0,Dt=b.transmission>0,yt=w&&!!b.anisotropyMap,Mt=Q&&!!b.clearcoatMap,Kt=Q&&!!b.clearcoatNormalMap,ct=Q&&!!b.clearcoatRoughnessMap,wt=ot&&!!b.iridescenceMap,re=ot&&!!b.iridescenceThicknessMap,Vt=it&&!!b.sheenColorMap,Tt=it&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,jt=!!b.specularColorMap,Ae=!!b.specularIntensityMap,F=Dt&&!!b.transmissionMap,lt=Dt&&!!b.thicknessMap,$=!!b.gradientMap,tt=!!b.alphaMap,ft=b.alphaTest>0,kt=!!b.alphaHash,se=!!b.extensions;let Ie=Vr;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const We={shaderID:rt,shaderType:b.type,shaderName:b.name,vertexShader:_t,fragmentShader:q,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:ht,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&G._colorsTexture!==null,instancing:xt,instancingColor:xt&&G.instanceColor!==null,instancingMorph:xt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:qr,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:de,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:W,aoMap:te,lightMap:Lt,bumpMap:Ft,normalMap:St,displacementMap:f&&me,emissiveMap:Ht,normalMapObjectSpace:St&&b.normalMapType===Uv,normalMapTangentSpace:St&&b.normalMapType===Eg,metalnessMap:Wt,roughnessMap:P,anisotropy:w,anisotropyMap:yt,clearcoat:Q,clearcoatMap:Mt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:ct,dispersion:st,iridescence:ot,iridescenceMap:wt,iridescenceThicknessMap:re,sheen:it,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:Xt,specularColorMap:jt,specularIntensityMap:Ae,transmission:Dt,transmissionMap:F,thicknessMap:lt,gradientMap:$,opaque:b.transparent===!1&&b.blending===Io&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:ft,alphaHash:kt,combine:b.combine,mapUv:It&&y(b.map.channel),aoMapUv:te&&y(b.aoMap.channel),lightMapUv:Lt&&y(b.lightMap.channel),bumpMapUv:Ft&&y(b.bumpMap.channel),normalMapUv:St&&y(b.normalMap.channel),displacementMapUv:me&&y(b.displacementMap.channel),emissiveMapUv:Ht&&y(b.emissiveMap.channel),metalnessMapUv:Wt&&y(b.metalnessMap.channel),roughnessMapUv:P&&y(b.roughnessMap.channel),anisotropyMapUv:yt&&y(b.anisotropyMap.channel),clearcoatMapUv:Mt&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:re&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&y(b.sheenRoughnessMap.channel),specularMapUv:Xt&&y(b.specularMap.channel),specularColorMapUv:jt&&y(b.specularColorMap.channel),specularIntensityMapUv:Ae&&y(b.specularIntensityMap.channel),transmissionMapUv:F&&y(b.transmissionMap.channel),thicknessMapUv:lt&&y(b.thicknessMap.channel),alphaMapUv:tt&&y(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(St||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!U.attributes.uv&&(It||tt),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&he.getTransfer(b.map.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ji,flipSided:b.side===fn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:se&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&b.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)x.push(R),x.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(A(x,b),_(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function A(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function _(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),b.push(a.mask)}function S(b){const x=g[b.type];let R;if(x){const V=wi[x];R=c_.clone(V.uniforms)}else R=b.uniforms;return R}function N(b,x){let R;for(let V=0,G=u.length;V<G;V++){const Z=u[V];if(Z.cacheKey===x){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new AE(i,x,b,s),u.push(R)),R}function M(b){if(--b.usedTimes===0){const x=u.indexOf(b);u[x]=u[u.length-1],u.pop(),b.destroy()}}function T(b){c.remove(b)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:N,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:I}}function ME(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function TE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function zp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gp(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,g,y,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),t++,p}function a(h,f,d,g,y,m){const p=o(h,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(h,f,d,g,y,m){const p=o(h,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||TE),n.length>1&&n.sort(f||zp),r.length>1&&r.sort(f||zp)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function CE(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Gp,i.set(n,[o])):r>=s.length?(o=new Gp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function RE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ie};break;case"SpotLight":e={position:new O,direction:new O,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function PE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let IE=0;function LE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function NE(i){const t=new RE,e=PE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const r=new O,s=new Ee,o=new Ee;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,A=0,_=0,S=0,N=0,M=0,T=0;l.sort(LE);for(let b=0,x=l.length;b<x;b++){const R=l[b],V=R.color,G=R.intensity,Z=R.distance,U=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*G,h+=V.g*G,f+=V.b*G;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],G);T++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,W=e.get(R);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=R.shadow.matrix,A++}n.directional[d]=B,d++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(V).multiplyScalar(G),B.distance=Z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[y]=B;const J=R.shadow;if(R.map&&(n.spotLightMap[N]=R.map,N++,J.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[y]=J.matrix,R.castShadow){const W=e.get(R);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=U,S++}y++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(V).multiplyScalar(G),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const J=R.shadow,W=e.get(R);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=R.shadow.matrix,_++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(G),B.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==A||I.numPointShadows!==_||I.numSpotShadows!==S||I.numSpotMaps!==N||I.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=S+N-M,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,I.directionalLength=d,I.pointLength=g,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=A,I.numPointShadows=_,I.numSpotShadows=S,I.numSpotMaps=N,I.numLightProbes=T,n.version=IE++)}function c(l,u){let h=0,f=0,d=0,g=0,y=0;const m=u.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){const _=l[p];if(_.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Hp(i){const t=new NE(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function UE(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Hp(i),t.set(r,[a])):s>=o.length?(a=new Hp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class DE extends Fc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class OE extends Fc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kE(i,t,e){let n=new cd;const r=new bt,s=new bt,o=new Be,a=new DE({depthPacking:Nv}),c=new OE,l={},u=e.maxTextureSize,h={[Kr]:fn,[fn]:Kr,[ji]:ji},f=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:BE,fragmentShader:FE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Wn;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ce(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ug;let p=this.type;this.render=function(M,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Hr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=p!==Bi&&this.type===Bi,Z=p===Bi&&this.type!==Bi;for(let U=0,B=M.length;U<B;U++){const J=M[U],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const rt=W.getFrameExtents();if(r.multiply(rt),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/rt.x),r.x=s.x*rt.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/rt.y),r.y=s.y*rt.y,W.mapSize.y=s.y)),W.map===null||G===!0||Z===!0){const mt=this.type!==Bi?{minFilter:Vn,magFilter:Vn}:{};W.map!==null&&W.map.dispose(),W.map=new Xs(r.x,r.y,mt),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const at=W.getViewportCount();for(let mt=0;mt<at;mt++){const Nt=W.getViewport(mt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),V.viewport(o),W.updateMatrices(J,mt),n=W.getFrustum(),S(T,I,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Bi&&A(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,x,R)};function A(M,T){const I=t.update(y);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Xs(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,I,f,y,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,I,d,y,null)}function _(M,T,I,b){let x=null;const R=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=x.uuid,G=T.uuid;let Z=l[V];Z===void 0&&(Z={},l[V]=Z);let U=Z[G];U===void 0&&(U=x.clone(),Z[G]=U,T.addEventListener("dispose",N)),x=U}if(x.visible=T.visible,x.wireframe=T.wireframe,b===Bi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=i.properties.get(x);V.light=I}return x}function S(M,T,I,b,x){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===Bi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const G=t.update(M),Z=M.material;if(Array.isArray(Z)){const U=G.groups;for(let B=0,J=U.length;B<J;B++){const W=U[B],rt=Z[W.materialIndex];if(rt&&rt.visible){const at=_(M,rt,b,x);M.onBeforeShadow(i,M,T,I,G,at,W),i.renderBufferDirect(I,null,G,at,M,W),M.onAfterShadow(i,M,T,I,G,at,W)}}}else if(Z.visible){const U=_(M,Z,b,x);M.onBeforeShadow(i,M,T,I,G,U,null),i.renderBufferDirect(I,null,G,U,M,null),M.onAfterShadow(i,M,T,I,G,U,null)}}const V=M.children;for(let G=0,Z=V.length;G<Z;G++)S(V[G],T,I,b,x)}function N(M){M.target.removeEventListener("dispose",N);for(const I in l){const b=l[I],x=M.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function zE(i){function t(){let F=!1;const lt=new Be;let $=null;const tt=new Be(0,0,0,0);return{setMask:function(ft){$!==ft&&!F&&(i.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){F=ft},setClear:function(ft,kt,se,Ie,We){We===!0&&(ft*=Ie,kt*=Ie,se*=Ie),lt.set(ft,kt,se,Ie),tt.equals(lt)===!1&&(i.clearColor(ft,kt,se,Ie),tt.copy(lt))},reset:function(){F=!1,$=null,tt.set(-1,0,0,0)}}}function e(){let F=!1,lt=null,$=null,tt=null;return{setTest:function(ft){ft?ht(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(ft){lt!==ft&&!F&&(i.depthMask(ft),lt=ft)},setFunc:function(ft){if($!==ft){switch(ft){case mv:i.depthFunc(i.NEVER);break;case gv:i.depthFunc(i.ALWAYS);break;case yv:i.depthFunc(i.LESS);break;case Wl:i.depthFunc(i.LEQUAL);break;case vv:i.depthFunc(i.EQUAL);break;case _v:i.depthFunc(i.GEQUAL);break;case xv:i.depthFunc(i.GREATER);break;case Av:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ft}},setLocked:function(ft){F=ft},setClear:function(ft){tt!==ft&&(i.clearDepth(ft),tt=ft)},reset:function(){F=!1,lt=null,$=null,tt=null}}}function n(){let F=!1,lt=null,$=null,tt=null,ft=null,kt=null,se=null,Ie=null,We=null;return{setTest:function(ae){F||(ae?ht(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(ae){lt!==ae&&!F&&(i.stencilMask(ae),lt=ae)},setFunc:function(ae,Ii,ci){($!==ae||tt!==Ii||ft!==ci)&&(i.stencilFunc(ae,Ii,ci),$=ae,tt=Ii,ft=ci)},setOp:function(ae,Ii,ci){(kt!==ae||se!==Ii||Ie!==ci)&&(i.stencilOp(ae,Ii,ci),kt=ae,se=Ii,Ie=ci)},setLocked:function(ae){F=ae},setClear:function(ae){We!==ae&&(i.clearStencil(ae),We=ae)},reset:function(){F=!1,lt=null,$=null,tt=null,ft=null,kt=null,se=null,Ie=null,We=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,g=!1,y=null,m=null,p=null,A=null,_=null,S=null,N=null,M=new ie(0,0,0),T=0,I=!1,b=null,x=null,R=null,V=null,G=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),U=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),U=B>=2);let W=null,rt={};const at=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Nt=new Be().fromArray(at),_t=new Be().fromArray(mt);function q(F,lt,$,tt){const ft=new Uint8Array(4),kt=i.createTexture();i.bindTexture(F,kt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<$;se++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(lt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return kt}const j={};j[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),s.setFunc(Wl),Ft(!1),St(Yd),ht(i.CULL_FACE),te(Hr);function ht(F){l[F]!==!0&&(i.enable(F),l[F]=!0)}function et(F){l[F]!==!1&&(i.disable(F),l[F]=!1)}function xt(F,lt){return u[F]!==lt?(i.bindFramebuffer(F,lt),u[F]=lt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Ut(F,lt){let $=f,tt=!1;if(F){$=h.get(lt),$===void 0&&($=[],h.set(lt,$));const ft=F.textures;if($.length!==ft.length||$[0]!==i.COLOR_ATTACHMENT0){for(let kt=0,se=ft.length;kt<se;kt++)$[kt]=i.COLOR_ATTACHMENT0+kt;$.length=ft.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function It(F){return d!==F?(i.useProgram(F),d=F,!0):!1}const de={[us]:i.FUNC_ADD,[jy]:i.FUNC_SUBTRACT,[$y]:i.FUNC_REVERSE_SUBTRACT};de[tv]=i.MIN,de[ev]=i.MAX;const L={[nv]:i.ZERO,[iv]:i.ONE,[rv]:i.SRC_COLOR,[Oh]:i.SRC_ALPHA,[uv]:i.SRC_ALPHA_SATURATE,[cv]:i.DST_COLOR,[ov]:i.DST_ALPHA,[sv]:i.ONE_MINUS_SRC_COLOR,[Bh]:i.ONE_MINUS_SRC_ALPHA,[lv]:i.ONE_MINUS_DST_COLOR,[av]:i.ONE_MINUS_DST_ALPHA,[hv]:i.CONSTANT_COLOR,[fv]:i.ONE_MINUS_CONSTANT_COLOR,[dv]:i.CONSTANT_ALPHA,[pv]:i.ONE_MINUS_CONSTANT_ALPHA};function te(F,lt,$,tt,ft,kt,se,Ie,We,ae){if(F===Hr){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(ht(i.BLEND),g=!0),F!==Zy){if(F!==y||ae!==I){if((m!==us||_!==us)&&(i.blendEquation(i.FUNC_ADD),m=us,_=us),ae)switch(F){case Io:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qd:i.blendFunc(i.ONE,i.ONE);break;case qd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,A=null,S=null,N=null,M.set(0,0,0),T=0,y=F,I=ae}return}ft=ft||lt,kt=kt||$,se=se||tt,(lt!==m||ft!==_)&&(i.blendEquationSeparate(de[lt],de[ft]),m=lt,_=ft),($!==p||tt!==A||kt!==S||se!==N)&&(i.blendFuncSeparate(L[$],L[tt],L[kt],L[se]),p=$,A=tt,S=kt,N=se),(Ie.equals(M)===!1||We!==T)&&(i.blendColor(Ie.r,Ie.g,Ie.b,We),M.copy(Ie),T=We),y=F,I=!1}function Lt(F,lt){F.side===ji?et(i.CULL_FACE):ht(i.CULL_FACE);let $=F.side===fn;lt&&($=!$),Ft($),F.blending===Io&&F.transparent===!1?te(Hr):te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ht(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(F){b!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),b=F)}function St(F){F!==Yy?(ht(i.CULL_FACE),F!==x&&(F===Yd?i.cullFace(i.BACK):F===Qy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),x=F}function me(F){F!==R&&(U&&i.lineWidth(F),R=F)}function Ht(F,lt,$){F?(ht(i.POLYGON_OFFSET_FILL),(V!==lt||G!==$)&&(i.polygonOffset(lt,$),V=lt,G=$)):et(i.POLYGON_OFFSET_FILL)}function Wt(F){F?ht(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function P(F){F===void 0&&(F=i.TEXTURE0+Z-1),W!==F&&(i.activeTexture(F),W=F)}function w(F,lt,$){$===void 0&&(W===null?$=i.TEXTURE0+Z-1:$=W);let tt=rt[$];tt===void 0&&(tt={type:void 0,texture:void 0},rt[$]=tt),(tt.type!==F||tt.texture!==lt)&&(W!==$&&(i.activeTexture($),W=$),i.bindTexture(F,lt||j[F]),tt.type=F,tt.texture=lt)}function Q(){const F=rt[W];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Vt(F){Nt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Nt.copy(F))}function Tt(F){_t.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),_t.copy(F))}function Xt(F,lt){let $=c.get(lt);$===void 0&&($=new WeakMap,c.set(lt,$));let tt=$.get(F);tt===void 0&&(tt=i.getUniformBlockIndex(lt,F.name),$.set(F,tt))}function jt(F,lt){const tt=c.get(lt).get(F);a.get(lt)!==tt&&(i.uniformBlockBinding(lt,tt,F.__bindingPointIndex),a.set(lt,tt))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},W=null,rt={},u={},h=new WeakMap,f=[],d=null,g=!1,y=null,m=null,p=null,A=null,_=null,S=null,N=null,M=new ie(0,0,0),T=0,I=!1,b=null,x=null,R=null,V=null,G=null,Nt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ht,disable:et,bindFramebuffer:xt,drawBuffers:Ut,useProgram:It,setBlending:te,setMaterial:Lt,setFlipSided:Ft,setCullFace:St,setLineWidth:me,setPolygonOffset:Ht,setScissorTest:Wt,activeTexture:P,bindTexture:w,unbindTexture:Q,compressedTexImage2D:st,compressedTexImage3D:ot,texImage2D:wt,texImage3D:re,updateUBOMapping:Xt,uniformBlockBinding:jt,texStorage2D:Kt,texStorage3D:ct,texSubImage2D:it,texSubImage3D:Dt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Mt,scissor:Vt,viewport:Tt,reset:Ae}}function Vp(i,t,e,n){const r=GE(n);switch(e){case gg:return i*t;case vg:return i*t;case _g:return i*t*2;case xg:return i*t/r.components*r.byteLength;case ed:return i*t/r.components*r.byteLength;case Ag:return i*t*2/r.components*r.byteLength;case nd:return i*t*2/r.components*r.byteLength;case yg:return i*t*3/r.components*r.byteLength;case ri:return i*t*4/r.components*r.byteLength;case id:return i*t*4/r.components*r.byteLength;case Ml:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Wh:return Math.max(i,16)*Math.max(t,8)/4;case Gh:case Vh:return Math.max(i,8)*Math.max(t,8)/2;case Xh:case Kh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $h:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tf:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ef:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nf:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rf:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sf:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case of:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case af:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cf:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pl:case lf:case uf:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wg:case hf:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ff:case df:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function GE(i){switch(i){case or:case dg:return{byteLength:1,components:1};case lc:case pg:case Uc:return{byteLength:2,components:1};case $f:case td:return{byteLength:2,components:4};case Ws:case jf:case tr:return{byteLength:4,components:1};case mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function HE(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return d?new OffscreenCanvas(P,w):Ql("canvas")}function y(P,w,Q){let st=1;const ot=Wt(P);if((ot.width>Q||ot.height>Q)&&(st=Q/Math.max(ot.width,ot.height)),st<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const it=Math.floor(st*ot.width),Dt=Math.floor(st*ot.height);h===void 0&&(h=g(it,Dt));const yt=w?g(it,Dt):h;return yt.width=it,yt.height=Dt,yt.getContext("2d").drawImage(P,0,0,it,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+it+"x"+Dt+")."),yt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Vn&&P.minFilter!==ni}function p(P){i.generateMipmap(P)}function A(P,w,Q,st,ot=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let it=w;if(w===i.RED&&(Q===i.FLOAT&&(it=i.R32F),Q===i.HALF_FLOAT&&(it=i.R16F),Q===i.UNSIGNED_BYTE&&(it=i.R8)),w===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(it=i.R8UI),Q===i.UNSIGNED_SHORT&&(it=i.R16UI),Q===i.UNSIGNED_INT&&(it=i.R32UI),Q===i.BYTE&&(it=i.R8I),Q===i.SHORT&&(it=i.R16I),Q===i.INT&&(it=i.R32I)),w===i.RG&&(Q===i.FLOAT&&(it=i.RG32F),Q===i.HALF_FLOAT&&(it=i.RG16F),Q===i.UNSIGNED_BYTE&&(it=i.RG8)),w===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(it=i.RG8UI),Q===i.UNSIGNED_SHORT&&(it=i.RG16UI),Q===i.UNSIGNED_INT&&(it=i.RG32UI),Q===i.BYTE&&(it=i.RG8I),Q===i.SHORT&&(it=i.RG16I),Q===i.INT&&(it=i.RG32I)),w===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),w===i.RGBA){const Dt=ot?Xl:he.getTransfer(st);Q===i.FLOAT&&(it=i.RGBA32F),Q===i.HALF_FLOAT&&(it=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(it=Dt===ve?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function _(P,w){let Q;return P?w===null||w===Ws||w===Ma?Q=i.DEPTH24_STENCIL8:w===tr?Q=i.DEPTH32F_STENCIL8:w===lc&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ws||w===Ma?Q=i.DEPTH_COMPONENT24:w===tr?Q=i.DEPTH_COMPONENT32F:w===lc&&(Q=i.DEPTH_COMPONENT16),Q}function S(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Vn&&P.minFilter!==ni?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function N(P){const w=P.target;w.removeEventListener("dispose",N),T(w),w.isVideoTexture&&u.delete(w)}function M(P){const w=P.target;w.removeEventListener("dispose",M),b(w)}function T(P){const w=n.get(P);if(w.__webglInit===void 0)return;const Q=P.source,st=f.get(Q);if(st){const ot=st[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&I(P),Object.keys(st).length===0&&f.delete(Q)}n.remove(P)}function I(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const Q=P.source,st=f.get(Q);delete st[w.__cacheKey],o.memory.textures--}function b(P){const w=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(w.__webglFramebuffer[st]))for(let ot=0;ot<w.__webglFramebuffer[st].length;ot++)i.deleteFramebuffer(w.__webglFramebuffer[st][ot]);else i.deleteFramebuffer(w.__webglFramebuffer[st]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[st])}else{if(Array.isArray(w.__webglFramebuffer))for(let st=0;st<w.__webglFramebuffer.length;st++)i.deleteFramebuffer(w.__webglFramebuffer[st]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let st=0;st<w.__webglColorRenderbuffer.length;st++)w.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[st]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=P.textures;for(let st=0,ot=Q.length;st<ot;st++){const it=n.get(Q[st]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(Q[st])}n.remove(P)}let x=0;function R(){x=0}function V(){const P=x;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),x+=1,P}function G(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function Z(P,w){const Q=n.get(P);if(P.isVideoTexture&&me(P),P.isRenderTargetTexture===!1&&P.version>0&&Q.__version!==P.version){const st=P.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(Q,P,w);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+w)}function U(P,w){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){_t(Q,P,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+w)}function B(P,w){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){_t(Q,P,w);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+w)}function J(P,w){const Q=n.get(P);if(P.version>0&&Q.__version!==P.version){q(Q,P,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+w)}const W={[cc]:i.REPEAT,[ys]:i.CLAMP_TO_EDGE,[zh]:i.MIRRORED_REPEAT},rt={[Vn]:i.NEAREST,[Iv]:i.NEAREST_MIPMAP_NEAREST,[Jc]:i.NEAREST_MIPMAP_LINEAR,[ni]:i.LINEAR,[zu]:i.LINEAR_MIPMAP_NEAREST,[vs]:i.LINEAR_MIPMAP_LINEAR},at={[Dv]:i.NEVER,[Gv]:i.ALWAYS,[Ov]:i.LESS,[bg]:i.LEQUAL,[Bv]:i.EQUAL,[zv]:i.GEQUAL,[Fv]:i.GREATER,[kv]:i.NOTEQUAL};function mt(P,w){if(w.type===tr&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===ni||w.magFilter===zu||w.magFilter===Jc||w.magFilter===vs||w.minFilter===ni||w.minFilter===zu||w.minFilter===Jc||w.minFilter===vs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,W[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,W[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,W[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,rt[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,rt[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,at[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Vn||w.minFilter!==Jc&&w.minFilter!==vs||w.type===tr&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Nt(P,w){let Q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",N));const st=w.source;let ot=f.get(st);ot===void 0&&(ot={},f.set(st,ot));const it=G(w);if(it!==P.__cacheKey){ot[it]===void 0&&(ot[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ot[it].usedTimes++;const Dt=ot[P.__cacheKey];Dt!==void 0&&(ot[P.__cacheKey].usedTimes--,Dt.usedTimes===0&&I(w)),P.__cacheKey=it,P.__webglTexture=ot[it].texture}return Q}function _t(P,w,Q){let st=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(st=i.TEXTURE_3D);const ot=Nt(P,w),it=w.source;e.bindTexture(st,P.__webglTexture,i.TEXTURE0+Q);const Dt=n.get(it);if(it.version!==Dt.__version||ot===!0){e.activeTexture(i.TEXTURE0+Q);const yt=he.getPrimaries(he.workingColorSpace),Mt=w.colorSpace===Er?null:he.getPrimaries(w.colorSpace),Kt=w.colorSpace===Er||yt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let ct=y(w.image,!1,r.maxTextureSize);ct=Ht(w,ct);const wt=s.convert(w.format,w.colorSpace),re=s.convert(w.type);let Vt=A(w.internalFormat,wt,re,w.colorSpace,w.isVideoTexture);mt(st,w);let Tt;const Xt=w.mipmaps,jt=w.isVideoTexture!==!0,Ae=Dt.__version===void 0||ot===!0,F=it.dataReady,lt=S(w,ct);if(w.isDepthTexture)Vt=_(w.format===Ta,w.type),Ae&&(jt?e.texStorage2D(i.TEXTURE_2D,1,Vt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Vt,ct.width,ct.height,0,wt,re,null));else if(w.isDataTexture)if(Xt.length>0){jt&&Ae&&e.texStorage2D(i.TEXTURE_2D,lt,Vt,Xt[0].width,Xt[0].height);for(let $=0,tt=Xt.length;$<tt;$++)Tt=Xt[$],jt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,wt,re,Tt.data):e.texImage2D(i.TEXTURE_2D,$,Vt,Tt.width,Tt.height,0,wt,re,Tt.data);w.generateMipmaps=!1}else jt?(Ae&&e.texStorage2D(i.TEXTURE_2D,lt,Vt,ct.width,ct.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,wt,re,ct.data)):e.texImage2D(i.TEXTURE_2D,0,Vt,ct.width,ct.height,0,wt,re,ct.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){jt&&Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Vt,Xt[0].width,Xt[0].height,ct.depth);for(let $=0,tt=Xt.length;$<tt;$++)if(Tt=Xt[$],w.format!==ri)if(wt!==null)if(jt){if(F)if(w.layerUpdates.size>0){const ft=Vp(Tt.width,Tt.height,w.format,w.type);for(const kt of w.layerUpdates){const se=Tt.data.subarray(kt*ft/Tt.data.BYTES_PER_ELEMENT,(kt+1)*ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,kt,Tt.width,Tt.height,1,wt,se,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Tt.width,Tt.height,ct.depth,wt,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Vt,Tt.width,Tt.height,ct.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Tt.width,Tt.height,ct.depth,wt,re,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Vt,Tt.width,Tt.height,ct.depth,0,wt,re,Tt.data)}else{jt&&Ae&&e.texStorage2D(i.TEXTURE_2D,lt,Vt,Xt[0].width,Xt[0].height);for(let $=0,tt=Xt.length;$<tt;$++)Tt=Xt[$],w.format!==ri?wt!==null?jt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Vt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Tt.width,Tt.height,wt,re,Tt.data):e.texImage2D(i.TEXTURE_2D,$,Vt,Tt.width,Tt.height,0,wt,re,Tt.data)}else if(w.isDataArrayTexture)if(jt){if(Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Vt,ct.width,ct.height,ct.depth),F)if(w.layerUpdates.size>0){const $=Vp(ct.width,ct.height,w.format,w.type);for(const tt of w.layerUpdates){const ft=ct.data.subarray(tt*$/ct.data.BYTES_PER_ELEMENT,(tt+1)*$/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ct.width,ct.height,1,wt,re,ft)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,wt,re,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,ct.width,ct.height,ct.depth,0,wt,re,ct.data);else if(w.isData3DTexture)jt?(Ae&&e.texStorage3D(i.TEXTURE_3D,lt,Vt,ct.width,ct.height,ct.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,wt,re,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,ct.width,ct.height,ct.depth,0,wt,re,ct.data);else if(w.isFramebufferTexture){if(Ae)if(jt)e.texStorage2D(i.TEXTURE_2D,lt,Vt,ct.width,ct.height);else{let $=ct.width,tt=ct.height;for(let ft=0;ft<lt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Vt,$,tt,0,wt,re,null),$>>=1,tt>>=1}}else if(Xt.length>0){if(jt&&Ae){const $=Wt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Vt,$.width,$.height)}for(let $=0,tt=Xt.length;$<tt;$++)Tt=Xt[$],jt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt,re,Tt):e.texImage2D(i.TEXTURE_2D,$,Vt,wt,re,Tt);w.generateMipmaps=!1}else if(jt){if(Ae){const $=Wt(ct);e.texStorage2D(i.TEXTURE_2D,lt,Vt,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,re,ct)}else e.texImage2D(i.TEXTURE_2D,0,Vt,wt,re,ct);m(w)&&p(st),Dt.__version=it.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function q(P,w,Q){if(w.image.length!==6)return;const st=Nt(P,w),ot=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Q);const it=n.get(ot);if(ot.version!==it.__version||st===!0){e.activeTexture(i.TEXTURE0+Q);const Dt=he.getPrimaries(he.workingColorSpace),yt=w.colorSpace===Er?null:he.getPrimaries(w.colorSpace),Mt=w.colorSpace===Er||Dt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Kt=w.isCompressedTexture||w.image[0].isCompressedTexture,ct=w.image[0]&&w.image[0].isDataTexture,wt=[];for(let tt=0;tt<6;tt++)!Kt&&!ct?wt[tt]=y(w.image[tt],!0,r.maxCubemapSize):wt[tt]=ct?w.image[tt].image:w.image[tt],wt[tt]=Ht(w,wt[tt]);const re=wt[0],Vt=s.convert(w.format,w.colorSpace),Tt=s.convert(w.type),Xt=A(w.internalFormat,Vt,Tt,w.colorSpace),jt=w.isVideoTexture!==!0,Ae=it.__version===void 0||st===!0,F=ot.dataReady;let lt=S(w,re);mt(i.TEXTURE_CUBE_MAP,w);let $;if(Kt){jt&&Ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,re.width,re.height);for(let tt=0;tt<6;tt++){$=wt[tt].mipmaps;for(let ft=0;ft<$.length;ft++){const kt=$[ft];w.format!==ri?Vt!==null?jt?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,kt.width,kt.height,Vt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Xt,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,kt.width,kt.height,Vt,Tt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,Xt,kt.width,kt.height,0,Vt,Tt,kt.data)}}}else{if($=w.mipmaps,jt&&Ae){$.length>0&&lt++;const tt=Wt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ct){jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt[tt].width,wt[tt].height,Vt,Tt,wt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,wt[tt].width,wt[tt].height,0,Vt,Tt,wt[tt].data);for(let ft=0;ft<$.length;ft++){const se=$[ft].image[tt].image;jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,se.width,se.height,Vt,Tt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Xt,se.width,se.height,0,Vt,Tt,se.data)}}else{jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Vt,Tt,wt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,Vt,Tt,wt[tt]);for(let ft=0;ft<$.length;ft++){const kt=$[ft];jt?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Vt,Tt,kt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,Xt,Vt,Tt,kt.image[tt])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),it.__version=ot.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function j(P,w,Q,st,ot,it){const Dt=s.convert(Q.format,Q.colorSpace),yt=s.convert(Q.type),Mt=A(Q.internalFormat,Dt,yt,Q.colorSpace);if(!n.get(w).__hasExternalTextures){const ct=Math.max(1,w.width>>it),wt=Math.max(1,w.height>>it);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,it,Mt,ct,wt,w.depth,0,Dt,yt,null):e.texImage2D(ot,it,Mt,ct,wt,0,Dt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ot,n.get(Q).__webglTexture,0,Ft(w)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ot,n.get(Q).__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(P,w,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const st=w.depthTexture,ot=st&&st.isDepthTexture?st.type:null,it=_(w.stencilBuffer,ot),Dt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=Ft(w);St(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,it,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,it,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,it,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,P)}else{const st=w.textures;for(let ot=0;ot<st.length;ot++){const it=st[ot],Dt=s.convert(it.format,it.colorSpace),yt=s.convert(it.type),Mt=A(it.internalFormat,Dt,yt,it.colorSpace),Kt=Ft(w);Q&&St(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Mt,w.width,w.height):St(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,Mt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const st=n.get(w.depthTexture).__webglTexture,ot=Ft(w);if(w.depthTexture.format===Lo)St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(w.depthTexture.format===Ta)St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function xt(P){const w=n.get(P),Q=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");et(w.__webglFramebuffer,P)}else if(Q){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]=i.createRenderbuffer(),ht(w.__webglDepthbuffer[st],P,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),ht(w.__webglDepthbuffer,P,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(P,w,Q){const st=n.get(P);w!==void 0&&j(st.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&xt(P)}function It(P){const w=P.texture,Q=n.get(P),st=n.get(w);P.addEventListener("dispose",M);const ot=P.textures,it=P.isWebGLCubeRenderTarget===!0,Dt=ot.length>1;if(Dt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=w.version,o.memory.textures++),it){Q.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[yt]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)Q.__webglFramebuffer[yt][Mt]=i.createFramebuffer()}else Q.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let yt=0;yt<w.mipmaps.length;yt++)Q.__webglFramebuffer[yt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let yt=0,Mt=ot.length;yt<Mt;yt++){const Kt=n.get(ot[yt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&St(P)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let yt=0;yt<ot.length;yt++){const Mt=ot[yt];Q.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[yt]);const Kt=s.convert(Mt.format,Mt.colorSpace),ct=s.convert(Mt.type),wt=A(Mt.internalFormat,Kt,ct,Mt.colorSpace,P.isXRRenderTarget===!0),re=Ft(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,wt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(Q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),mt(i.TEXTURE_CUBE_MAP,w);for(let yt=0;yt<6;yt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)j(Q.__webglFramebuffer[yt][Mt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Mt);else j(Q.__webglFramebuffer[yt],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let yt=0,Mt=ot.length;yt<Mt;yt++){const Kt=ot[yt],ct=n.get(Kt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),mt(i.TEXTURE_2D,Kt),j(Q.__webglFramebuffer,P,Kt,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,0),m(Kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(yt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,st.__webglTexture),mt(yt,w),w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)j(Q.__webglFramebuffer[Mt],P,w,i.COLOR_ATTACHMENT0,yt,Mt);else j(Q.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,yt,0);m(w)&&p(yt),e.unbindTexture()}P.depthBuffer&&xt(P)}function de(P){const w=P.textures;for(let Q=0,st=w.length;Q<st;Q++){const ot=w[Q];if(m(ot)){const it=P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Dt=n.get(ot).__webglTexture;e.bindTexture(it,Dt),p(it),e.unbindTexture()}}}const L=[],te=[];function Lt(P){if(P.samples>0){if(St(P)===!1){const w=P.textures,Q=P.width,st=P.height;let ot=i.COLOR_BUFFER_BIT;const it=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(P),yt=w.length>1;if(yt)for(let Mt=0;Mt<w.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Mt=0;Mt<w.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Mt]);const Kt=n.get(w[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,Q,st,0,0,Q,st,ot,i.NEAREST),c===!0&&(L.length=0,te.length=0,L.push(i.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(L.push(it),te.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Mt=0;Mt<w.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Mt]);const Kt=n.get(w[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ft(P){return Math.min(r.maxSamples,P.samples)}function St(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function me(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function Ht(P,w){const Q=P.colorSpace,st=P.format,ot=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Q!==qr&&Q!==Er&&(he.getTransfer(Q)===ve?(st!==ri||ot!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),w}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=R,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=Ut,this.setupRenderTarget=It,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=St}function VE(i,t){function e(n,r=Er){let s;const o=he.getTransfer(r);if(n===or)return i.UNSIGNED_BYTE;if(n===$f)return i.UNSIGNED_SHORT_4_4_4_4;if(n===td)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dg)return i.BYTE;if(n===pg)return i.SHORT;if(n===lc)return i.UNSIGNED_SHORT;if(n===jf)return i.INT;if(n===Ws)return i.UNSIGNED_INT;if(n===tr)return i.FLOAT;if(n===Uc)return i.HALF_FLOAT;if(n===gg)return i.ALPHA;if(n===yg)return i.RGB;if(n===ri)return i.RGBA;if(n===vg)return i.LUMINANCE;if(n===_g)return i.LUMINANCE_ALPHA;if(n===Lo)return i.DEPTH_COMPONENT;if(n===Ta)return i.DEPTH_STENCIL;if(n===xg)return i.RED;if(n===ed)return i.RED_INTEGER;if(n===Ag)return i.RG;if(n===nd)return i.RG_INTEGER;if(n===id)return i.RGBA_INTEGER;if(n===Ml||n===Tl||n===Cl||n===Rl)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Hh||n===Vh||n===Wh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===Kh||n===Jh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xh||n===Kh)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yh||n===Qh||n===qh||n===Zh||n===jh||n===$h||n===tf||n===ef||n===nf||n===rf||n===sf||n===of||n===af||n===cf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Yh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jh)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$h)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ef)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===of)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===af)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cf)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===lf||n===uf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Pl)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wg||n===hf||n===ff||n===df)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Pl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===hf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ff)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===df)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ma?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class WE extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ml extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XE={type:"move"};class dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XE)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ml;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class YE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new dn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ar({vertexShader:KE,fragmentShader:JE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new Ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QE extends Zs{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const y=new YE,m=e.getContextAttributes();let p=null,A=null;const _=[],S=[],N=new bt;let M=null;const T=new Hn;T.layers.enable(1),T.viewport=new Be;const I=new Hn;I.layers.enable(2),I.viewport=new Be;const b=[T,I],x=new WE;x.layers.enable(1),x.layers.enable(2);let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=_[q];return j===void 0&&(j=new dh,_[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=_[q];return j===void 0&&(j=new dh,_[q]=j),j.getGripSpace()},this.getHand=function(q){let j=_[q];return j===void 0&&(j=new dh,_[q]=j),j.getHandSpace()};function G(q){const j=S.indexOf(q.inputSource);if(j===-1)return;const ht=_[j];ht!==void 0&&(ht.update(q.inputSource,q.frame,l||o),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",U);for(let q=0;q<_.length;q++){const j=S[q];j!==null&&(S[q]=null,_[q].disconnect(j))}R=null,V=null,y.reset(),t.setRenderTarget(p),d=null,f=null,h=null,r=null,A=null,_t.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Xs(d.framebufferWidth,d.framebufferHeight,{format:ri,type:or,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ht=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Ta:Lo,ht=m.stencil?Ma:Ws);const xt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(xt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Xs(f.textureWidth,f.textureHeight,{format:ri,type:or,depthTexture:new Bg(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),_t.setContext(r),_t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function U(q){for(let j=0;j<q.removed.length;j++){const ht=q.removed[j],et=S.indexOf(ht);et>=0&&(S[et]=null,_[et].disconnect(ht))}for(let j=0;j<q.added.length;j++){const ht=q.added[j];let et=S.indexOf(ht);if(et===-1){for(let Ut=0;Ut<_.length;Ut++)if(Ut>=S.length){S.push(ht),et=Ut;break}else if(S[Ut]===null){S[Ut]=ht,et=Ut;break}if(et===-1)break}const xt=_[et];xt&&xt.connect(ht)}}const B=new O,J=new O;function W(q,j,ht){B.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(ht.matrixWorld);const et=B.distanceTo(J),xt=j.projectionMatrix.elements,Ut=ht.projectionMatrix.elements,It=xt[14]/(xt[10]-1),de=xt[14]/(xt[10]+1),L=(xt[9]+1)/xt[5],te=(xt[9]-1)/xt[5],Lt=(xt[8]-1)/xt[0],Ft=(Ut[8]+1)/Ut[0],St=It*Lt,me=It*Ft,Ht=et/(-Lt+Ft),Wt=Ht*-Lt;j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(Ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const P=It+Ht,w=de+Ht,Q=St-Wt,st=me+(et-Wt),ot=L*de/w*P,it=te*de/w*P;q.projectionMatrix.makePerspective(Q,st,ot,it,P,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function rt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;y.texture!==null&&(q.near=y.depthNear,q.far=y.depthFar),x.near=I.near=T.near=q.near,x.far=I.far=T.far=q.far,(R!==x.near||V!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,V=x.far,T.near=R,T.far=V,I.near=R,I.far=V,T.updateProjectionMatrix(),I.updateProjectionMatrix(),q.updateProjectionMatrix());const j=q.parent,ht=x.cameras;rt(x,j);for(let et=0;et<ht.length;et++)rt(ht[et],j);ht.length===2?W(x,T,I):x.projectionMatrix.copy(T.projectionMatrix),at(q,x,j)};function at(q,j,ht){ht===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=pf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let mt=null;function Nt(q,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const ht=u.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let et=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let Ut=0;Ut<ht.length;Ut++){const It=ht[Ut];let de=null;if(d!==null)de=d.getViewport(It);else{const te=h.getViewSubImage(f,It);de=te.viewport,Ut===0&&(t.setRenderTargetTextures(A,te.colorTexture,f.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(A))}let L=b[Ut];L===void 0&&(L=new Hn,L.layers.enable(Ut),L.viewport=new Be,b[Ut]=L),L.matrix.fromArray(It.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(It.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(de.x,de.y,de.width,de.height),Ut===0&&(x.matrix.copy(L.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),et===!0&&x.cameras.push(L)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Ut=h.getDepthInformation(ht[0]);Ut&&Ut.isValid&&Ut.texture&&y.init(t,Ut,r.renderState)}}for(let ht=0;ht<_.length;ht++){const et=S[ht],xt=_[ht];et!==null&&xt!==void 0&&xt.update(et,j,l||o)}mt&&mt(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const _t=new Dg;_t.setAnimationLoop(Nt),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}}const rs=new si,qE=new Ee;function ZE(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Lg(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,A,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=t.get(p),_=A.envMap,S=A.envMapRotation;_&&(m.envMap.value=_,rs.copy(S),rs.x*=-1,rs.y*=-1,rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(qE.makeRotationFromEuler(rs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jE(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,_){const S=_.program;n.uniformBlockBinding(A,S)}function l(A,_){let S=r[A.id];S===void 0&&(g(A),S=u(A),r[A.id]=S,A.addEventListener("dispose",m));const N=_.program;n.updateUBOMapping(A,N);const M=t.render.frame;s[A.id]!==M&&(f(A),s[A.id]=M)}function u(A){const _=h();A.__bindingPointIndex=_;const S=i.createBuffer(),N=A.__size,M=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,N,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const _=r[A.id],S=A.uniforms,N=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=S.length;M<T;M++){const I=Array.isArray(S[M])?S[M]:[S[M]];for(let b=0,x=I.length;b<x;b++){const R=I[b];if(d(R,M,b,N)===!0){const V=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let Z=0;for(let U=0;U<G.length;U++){const B=G[U],J=y(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,V+Z,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,Z),Z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,_,S,N){const M=A.value,T=_+"_"+S;if(N[T]===void 0)return typeof M=="number"||typeof M=="boolean"?N[T]=M:N[T]=M.clone(),!0;{const I=N[T];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return N[T]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function g(A){const _=A.uniforms;let S=0;const N=16;for(let T=0,I=_.length;T<I;T++){const b=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,R=b.length;x<R;x++){const V=b[x],G=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,U=G.length;Z<U;Z++){const B=G[Z],J=y(B),W=S%N,rt=W%J.boundary,at=W+rt;S+=rt,at!==0&&N-at<J.storage&&(S+=N-at),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=J.storage}}}const M=S%N;return M>0&&(S+=N-M),A.__size=S,A.__cache={},this}function y(A){const _={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(_.boundary=4,_.storage=4):A.isVector2?(_.boundary=8,_.storage=8):A.isVector3||A.isColor?(_.boundary=16,_.storage=12):A.isVector4?(_.boundary=16,_.storage=16):A.isMatrix3?(_.boundary=48,_.storage=48):A.isMatrix4?(_.boundary=64,_.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),_}function m(A){const _=A.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class $E{constructor(t={}){const{canvas:e=Vv(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const p=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=Vr,this.toneMappingExposure=1;const _=this;let S=!1,N=0,M=0,T=null,I=-1,b=null;const x=new Be,R=new Be;let V=null;const G=new ie(0);let Z=0,U=e.width,B=e.height,J=1,W=null,rt=null;const at=new Be(0,0,U,B),mt=new Be(0,0,U,B);let Nt=!1;const _t=new cd;let q=!1,j=!1;const ht=new Ee,et=new O,xt=new Be,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function de(){return T===null?J:1}let L=n;function te(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zf}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){const k="webgl2";if(L=te(k,E),L===null)throw te(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Lt,Ft,St,me,Ht,Wt,P,w,Q,st,ot,it,Dt,yt,Mt,Kt,ct,wt,re,Vt,Tt,Xt,jt,Ae;function F(){Lt=new sw(L),Lt.init(),Xt=new VE(L,Lt),Ft=new $A(L,Lt,t,Xt),St=new zE(L),me=new cw(L),Ht=new ME,Wt=new HE(L,Lt,St,Ht,Ft,Xt,me),P=new ew(_),w=new rw(_),Q=new m_(L),jt=new ZA(L,Q),st=new ow(L,Q,me,jt),ot=new uw(L,st,Q,me),re=new lw(L,Ft,Wt),Kt=new tw(Ht),it=new SE(_,P,w,Lt,Ft,jt,Kt),Dt=new ZE(_,Ht),yt=new CE,Mt=new UE(Lt),wt=new qA(_,P,w,St,ot,f,c),ct=new kE(_,ot,Ft),Ae=new jE(L,me,Ft,St),Vt=new jA(L,Lt,me),Tt=new aw(L,Lt,me),me.programs=it.programs,_.capabilities=Ft,_.extensions=Lt,_.properties=Ht,_.renderLists=yt,_.shadowMap=ct,_.state=St,_.info=me}F();const lt=new QE(_,L);this.xr=lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(U,B,!1))},this.getSize=function(E){return E.set(U,B)},this.setSize=function(E,k,X=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=E,B=k,e.width=Math.floor(E*J),e.height=Math.floor(k*J),X===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(U*J,B*J).floor()},this.setDrawingBufferSize=function(E,k,X){U=E,B=k,J=X,e.width=Math.floor(E*X),e.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(at)},this.setViewport=function(E,k,X,K){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,k,X,K),St.viewport(x.copy(at).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(mt)},this.setScissor=function(E,k,X,K){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,k,X,K),St.scissor(R.copy(mt).multiplyScalar(J).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(E){St.setScissorTest(Nt=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(E=!0,k=!0,X=!0){let K=0;if(E){let z=!1;if(T!==null){const ut=T.texture.format;z=ut===id||ut===nd||ut===ed}if(z){const ut=T.texture.type,vt=ut===or||ut===Ws||ut===lc||ut===Ma||ut===$f||ut===td,Ct=wt.getClearColor(),Rt=wt.getClearAlpha(),zt=Ct.r,Gt=Ct.g,Ot=Ct.b;vt?(d[0]=zt,d[1]=Gt,d[2]=Ot,d[3]=Rt,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=zt,g[1]=Gt,g[2]=Ot,g[3]=Rt,L.clearBufferiv(L.COLOR,0,g))}else K|=L.COLOR_BUFFER_BIT}k&&(K|=L.DEPTH_BUFFER_BIT),X&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),yt.dispose(),Mt.dispose(),Ht.dispose(),P.dispose(),w.dispose(),ot.dispose(),jt.dispose(),Ae.dispose(),it.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ci),lt.removeEventListener("sessionend",zd),jr.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=me.autoReset,k=ct.enabled,X=ct.autoUpdate,K=ct.needsUpdate,z=ct.type;F(),me.autoReset=E,ct.enabled=k,ct.autoUpdate=X,ct.needsUpdate=K,ct.type=z}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function kt(E){const k=E.target;k.removeEventListener("dispose",kt),se(k)}function se(E){Ie(E),Ht.remove(E)}function Ie(E){const k=Ht.get(E).programs;k!==void 0&&(k.forEach(function(X){it.releaseProgram(X)}),E.isShaderMaterial&&it.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,K,z,ut){k===null&&(k=Ut);const vt=z.isMesh&&z.matrixWorld.determinant()<0,Ct=Hy(E,k,X,K,z);St.setMaterial(K,vt);let Rt=X.index,zt=1;if(K.wireframe===!0){if(Rt=st.getWireframeAttribute(X),Rt===void 0)return;zt=2}const Gt=X.drawRange,Ot=X.attributes.position;let ce=Gt.start*zt,be=(Gt.start+Gt.count)*zt;ut!==null&&(ce=Math.max(ce,ut.start*zt),be=Math.min(be,(ut.start+ut.count)*zt)),Rt!==null?(ce=Math.max(ce,0),be=Math.min(be,Rt.count)):Ot!=null&&(ce=Math.max(ce,0),be=Math.min(be,Ot.count));const Se=be-ce;if(Se<0||Se===1/0)return;jt.setup(z,K,Ct,X,Rt);let An,le=Vt;if(Rt!==null&&(An=Q.get(Rt),le=Tt,le.setIndex(An)),z.isMesh)K.wireframe===!0?(St.setLineWidth(K.wireframeLinewidth*de()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(z.isLine){let Pt=K.linewidth;Pt===void 0&&(Pt=1),St.setLineWidth(Pt*de()),z.isLineSegments?le.setMode(L.LINES):z.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else z.isPoints?le.setMode(L.POINTS):z.isSprite&&le.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)le.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))le.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Pt=z._multiDrawStarts,Xe=z._multiDrawCounts,ue=z._multiDrawCount,Xn=Rt?Q.get(Rt).bytesPerElement:1,to=Ht.get(K).currentProgram.getUniforms();for(let wn=0;wn<ue;wn++)to.setValue(L,"_gl_DrawID",wn),le.render(Pt[wn]/Xn,Xe[wn])}else if(z.isInstancedMesh)le.renderInstances(ce,Se,z.count);else if(X.isInstancedBufferGeometry){const Pt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Xe=Math.min(X.instanceCount,Pt);le.renderInstances(ce,Se,Xe)}else le.render(ce,Se)};function We(E,k,X){E.transparent===!0&&E.side===ji&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,Kc(E,k,X),E.side=Kr,E.needsUpdate=!0,Kc(E,k,X),E.side=ji):Kc(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),m=Mt.get(X),m.init(k),A.push(m),X.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==X&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const K=new Set;return E.traverse(function(z){const ut=z.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){const Ct=ut[vt];We(Ct,X,z),K.add(Ct)}else We(ut,X,z),K.add(ut)}),A.pop(),m=null,K},this.compileAsync=function(E,k,X=null){const K=this.compile(E,k,X);return new Promise(z=>{function ut(){if(K.forEach(function(vt){Ht.get(vt).currentProgram.isReady()&&K.delete(vt)}),K.size===0){z(E);return}setTimeout(ut,10)}Lt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ae=null;function Ii(E){ae&&ae(E)}function ci(){jr.stop()}function zd(){jr.start()}const jr=new Dg;jr.setAnimationLoop(Ii),typeof self<"u"&&jr.setContext(self),this.setAnimationLoop=function(E){ae=E,lt.setAnimationLoop(E),E===null?jr.stop():jr.start()},lt.addEventListener("sessionstart",ci),lt.addEventListener("sessionend",zd),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,k,T),m=Mt.get(E,A.length),m.init(k),A.push(m),ht.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),_t.setFromProjectionMatrix(ht),j=this.localClippingEnabled,q=Kt.init(this.clippingPlanes,j),y=yt.get(E,p.length),y.init(),p.push(y),lt.enabled===!0&&lt.isPresenting===!0){const ut=_.xr.getDepthSensingMesh();ut!==null&&Du(ut,k,-1/0,_.sortObjects)}Du(E,k,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(W,rt),It=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,It&&wt.addToRenderList(y,E),this.info.render.frame++,q===!0&&Kt.beginShadows();const X=m.state.shadowsArray;ct.render(X,E,k),q===!0&&Kt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,z=y.transmissive;if(m.setupLights(),k.isArrayCamera){const ut=k.cameras;if(z.length>0)for(let vt=0,Ct=ut.length;vt<Ct;vt++){const Rt=ut[vt];Hd(K,z,E,Rt)}It&&wt.render(E);for(let vt=0,Ct=ut.length;vt<Ct;vt++){const Rt=ut[vt];Gd(y,E,Rt,Rt.viewport)}}else z.length>0&&Hd(K,z,E,k),It&&wt.render(E),Gd(y,E,k);T!==null&&(Wt.updateMultisampleRenderTarget(T),Wt.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(_,E,k),jt.resetDefaultState(),I=-1,b=null,A.pop(),A.length>0?(m=A[A.length-1],q===!0&&Kt.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Du(E,k,X,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_t.intersectsSprite(E)){K&&xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const vt=ot.update(E),Ct=E.material;Ct.visible&&y.push(E,vt,Ct,X,xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_t.intersectsObject(E))){const vt=ot.update(E),Ct=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),xt.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),xt.copy(vt.boundingSphere.center)),xt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(Ct)){const Rt=vt.groups;for(let zt=0,Gt=Rt.length;zt<Gt;zt++){const Ot=Rt[zt],ce=Ct[Ot.materialIndex];ce&&ce.visible&&y.push(E,vt,ce,X,xt.z,Ot)}}else Ct.visible&&y.push(E,vt,Ct,X,xt.z,null)}}const ut=E.children;for(let vt=0,Ct=ut.length;vt<Ct;vt++)Du(ut[vt],k,X,K)}function Gd(E,k,X,K){const z=E.opaque,ut=E.transmissive,vt=E.transparent;m.setupLightsView(X),q===!0&&Kt.setGlobalState(_.clippingPlanes,X),K&&St.viewport(x.copy(K)),z.length>0&&Xc(z,k,X),ut.length>0&&Xc(ut,k,X),vt.length>0&&Xc(vt,k,X),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Hd(E,k,X,K){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Xs(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Uc:or,minFilter:vs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ut=m.state.transmissionRenderTarget[K.id],vt=K.viewport||x;ut.setSize(vt.z,vt.w);const Ct=_.getRenderTarget();_.setRenderTarget(ut),_.getClearColor(G),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),It&&wt.render(X);const Rt=_.toneMapping;_.toneMapping=Vr;const zt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),q===!0&&Kt.setGlobalState(_.clippingPlanes,K),Xc(E,X,K),Wt.updateMultisampleRenderTarget(ut),Wt.updateRenderTargetMipmap(ut),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ot=0,ce=k.length;Ot<ce;Ot++){const be=k[Ot],Se=be.object,An=be.geometry,le=be.material,Pt=be.group;if(le.side===ji&&Se.layers.test(K.layers)){const Xe=le.side;le.side=fn,le.needsUpdate=!0,Vd(Se,X,K,An,le,Pt),le.side=Xe,le.needsUpdate=!0,Gt=!0}}Gt===!0&&(Wt.updateMultisampleRenderTarget(ut),Wt.updateRenderTargetMipmap(ut))}_.setRenderTarget(Ct),_.setClearColor(G,Z),zt!==void 0&&(K.viewport=zt),_.toneMapping=Rt}function Xc(E,k,X){const K=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ut=E.length;z<ut;z++){const vt=E[z],Ct=vt.object,Rt=vt.geometry,zt=K===null?vt.material:K,Gt=vt.group;Ct.layers.test(X.layers)&&Vd(Ct,k,X,Rt,zt,Gt)}}function Vd(E,k,X,K,z,ut){E.onBeforeRender(_,k,X,K,z,ut),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.transparent===!0&&z.side===ji&&z.forceSinglePass===!1?(z.side=fn,z.needsUpdate=!0,_.renderBufferDirect(X,k,K,z,E,ut),z.side=Kr,z.needsUpdate=!0,_.renderBufferDirect(X,k,K,z,E,ut),z.side=ji):_.renderBufferDirect(X,k,K,z,E,ut),E.onAfterRender(_,k,X,K,z,ut)}function Kc(E,k,X){k.isScene!==!0&&(k=Ut);const K=Ht.get(E),z=m.state.lights,ut=m.state.shadowsArray,vt=z.state.version,Ct=it.getParameters(E,z.state,ut,k,X),Rt=it.getProgramCacheKey(Ct);let zt=K.programs;K.environment=E.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(E.isMeshStandardMaterial?w:P).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",kt),zt=new Map,K.programs=zt);let Gt=zt.get(Rt);if(Gt!==void 0){if(K.currentProgram===Gt&&K.lightsStateVersion===vt)return Xd(E,Ct),Gt}else Ct.uniforms=it.getUniforms(E),E.onBeforeCompile(Ct,_),Gt=it.acquireProgram(Ct,Rt),zt.set(Rt,Gt),K.uniforms=Ct.uniforms;const Ot=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ot.clippingPlanes=Kt.uniform),Xd(E,Ct),K.needsLights=Wy(E),K.lightsStateVersion=vt,K.needsLights&&(Ot.ambientLightColor.value=z.state.ambient,Ot.lightProbe.value=z.state.probe,Ot.directionalLights.value=z.state.directional,Ot.directionalLightShadows.value=z.state.directionalShadow,Ot.spotLights.value=z.state.spot,Ot.spotLightShadows.value=z.state.spotShadow,Ot.rectAreaLights.value=z.state.rectArea,Ot.ltc_1.value=z.state.rectAreaLTC1,Ot.ltc_2.value=z.state.rectAreaLTC2,Ot.pointLights.value=z.state.point,Ot.pointLightShadows.value=z.state.pointShadow,Ot.hemisphereLights.value=z.state.hemi,Ot.directionalShadowMap.value=z.state.directionalShadowMap,Ot.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ot.spotShadowMap.value=z.state.spotShadowMap,Ot.spotLightMatrix.value=z.state.spotLightMatrix,Ot.spotLightMap.value=z.state.spotLightMap,Ot.pointShadowMap.value=z.state.pointShadowMap,Ot.pointShadowMatrix.value=z.state.pointShadowMatrix),K.currentProgram=Gt,K.uniformsList=null,Gt}function Wd(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Il.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Xd(E,k){const X=Ht.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Hy(E,k,X,K,z){k.isScene!==!0&&(k=Ut),Wt.resetTextureUnits();const ut=k.fog,vt=K.isMeshStandardMaterial?k.environment:null,Ct=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qr,Rt=(K.isMeshStandardMaterial?w:P).get(K.envMap||vt),zt=K.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Gt=!!X.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ot=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,be=!!X.morphAttributes.color;let Se=Vr;K.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Se=_.toneMapping);const An=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=An!==void 0?An.length:0,Pt=Ht.get(K),Xe=m.state.lights;if(q===!0&&(j===!0||E!==b)){const In=E===b&&K.id===I;Kt.setState(K,E,In)}let ue=!1;K.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Xe.state.version||Pt.outputColorSpace!==Ct||z.isBatchedMesh&&Pt.batching===!1||!z.isBatchedMesh&&Pt.batching===!0||z.isBatchedMesh&&Pt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Pt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Pt.instancing===!1||!z.isInstancedMesh&&Pt.instancing===!0||z.isSkinnedMesh&&Pt.skinning===!1||!z.isSkinnedMesh&&Pt.skinning===!0||z.isInstancedMesh&&Pt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Pt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Pt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Pt.instancingMorph===!1&&z.morphTexture!==null||Pt.envMap!==Rt||K.fog===!0&&Pt.fog!==ut||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Kt.numPlanes||Pt.numIntersection!==Kt.numIntersection)||Pt.vertexAlphas!==zt||Pt.vertexTangents!==Gt||Pt.morphTargets!==Ot||Pt.morphNormals!==ce||Pt.morphColors!==be||Pt.toneMapping!==Se||Pt.morphTargetsCount!==le)&&(ue=!0):(ue=!0,Pt.__version=K.version);let Xn=Pt.currentProgram;ue===!0&&(Xn=Kc(K,k,z));let to=!1,wn=!1,Ou=!1;const Le=Xn.getUniforms(),hr=Pt.uniforms;if(St.useProgram(Xn.program)&&(to=!0,wn=!0,Ou=!0),K.id!==I&&(I=K.id,wn=!0),to||b!==E){Le.setValue(L,"projectionMatrix",E.projectionMatrix),Le.setValue(L,"viewMatrix",E.matrixWorldInverse);const In=Le.map.cameraPosition;In!==void 0&&In.setValue(L,et.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&Le.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Le.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,wn=!0,Ou=!0)}if(z.isSkinnedMesh){Le.setOptional(L,z,"bindMatrix"),Le.setOptional(L,z,"bindMatrixInverse");const In=z.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Le.setValue(L,"boneTexture",In.boneTexture,Wt))}z.isBatchedMesh&&(Le.setOptional(L,z,"batchingTexture"),Le.setValue(L,"batchingTexture",z._matricesTexture,Wt),Le.setOptional(L,z,"batchingIdTexture"),Le.setValue(L,"batchingIdTexture",z._indirectTexture,Wt),Le.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Le.setValue(L,"batchingColorTexture",z._colorsTexture,Wt));const Bu=X.morphAttributes;if((Bu.position!==void 0||Bu.normal!==void 0||Bu.color!==void 0)&&re.update(z,X,Xn),(wn||Pt.receiveShadow!==z.receiveShadow)&&(Pt.receiveShadow=z.receiveShadow,Le.setValue(L,"receiveShadow",z.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hr.envMap.value=Rt,hr.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(hr.envMapIntensity.value=k.environmentIntensity),wn&&(Le.setValue(L,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&Vy(hr,Ou),ut&&K.fog===!0&&Dt.refreshFogUniforms(hr,ut),Dt.refreshMaterialUniforms(hr,K,J,B,m.state.transmissionRenderTarget[E.id]),Il.upload(L,Wd(Pt),hr,Wt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Il.upload(L,Wd(Pt),hr,Wt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Le.setValue(L,"center",z.center),Le.setValue(L,"modelViewMatrix",z.modelViewMatrix),Le.setValue(L,"normalMatrix",z.normalMatrix),Le.setValue(L,"modelMatrix",z.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const In=K.uniformsGroups;for(let Fu=0,Xy=In.length;Fu<Xy;Fu++){const Kd=In[Fu];Ae.update(Kd,Xn),Ae.bind(Kd,Xn)}}return Xn}function Vy(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Wy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,k,X){Ht.get(E.texture).__webglTexture=k,Ht.get(E.depthTexture).__webglTexture=X;const K=Ht.get(E);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=X===void 0,K.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const X=Ht.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,X=0){T=E,N=k,M=X;let K=!0,z=null,ut=!1,vt=!1;if(E){const Rt=Ht.get(E);Rt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(L.FRAMEBUFFER,null),K=!1):Rt.__webglFramebuffer===void 0?Wt.setupRenderTarget(E):Rt.__hasExternalTextures&&Wt.rebindTextures(E,Ht.get(E.texture).__webglTexture,Ht.get(E.depthTexture).__webglTexture);const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(vt=!0);const Gt=Ht.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[k])?z=Gt[k][X]:z=Gt[k],ut=!0):E.samples>0&&Wt.useMultisampledRTT(E)===!1?z=Ht.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?z=Gt[X]:z=Gt,x.copy(E.viewport),R.copy(E.scissor),V=E.scissorTest}else x.copy(at).multiplyScalar(J).floor(),R.copy(mt).multiplyScalar(J).floor(),V=Nt;if(St.bindFramebuffer(L.FRAMEBUFFER,z)&&K&&St.drawBuffers(E,z),St.viewport(x),St.scissor(R),St.setScissorTest(V),ut){const Rt=Ht.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Rt.__webglTexture,X)}else if(vt){const Rt=Ht.get(E.texture),zt=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.__webglTexture,X||0,zt)}I=-1},this.readRenderTargetPixels=function(E,k,X,K,z,ut,vt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(Ct=Ct[vt]),Ct){St.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Rt=E.texture,zt=Rt.format,Gt=Rt.type;if(!Ft.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-K&&X>=0&&X<=E.height-z&&L.readPixels(k,X,K,z,Xt.convert(zt),Xt.convert(Gt),ut)}finally{const Rt=T!==null?Ht.get(T).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,K,z,ut,vt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ht.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(Ct=Ct[vt]),Ct){St.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Rt=E.texture,zt=Rt.format,Gt=Rt.type;if(!Ft.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-K&&X>=0&&X<=E.height-z){const Ot=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),L.readPixels(k,X,K,z,Xt.convert(zt),Xt.convert(Gt),0),L.flush();const ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Wv(L,ce,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ot),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut)}finally{L.deleteBuffer(Ot),L.deleteSync(ce)}return ut}}finally{const Rt=T!==null?Ht.get(T).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(E,k=null,X=0){E.isTexture!==!0&&(nc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const K=Math.pow(2,-X),z=Math.floor(E.image.width*K),ut=Math.floor(E.image.height*K),vt=k!==null?k.x:0,Ct=k!==null?k.y:0;Wt.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,vt,Ct,z,ut),St.unbindTexture()},this.copyTextureToTexture=function(E,k,X=null,K=null,z=0){E.isTexture!==!0&&(nc("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,E=arguments[1],k=arguments[2],z=arguments[3]||0,X=null);let ut,vt,Ct,Rt,zt,Gt;X!==null?(ut=X.max.x-X.min.x,vt=X.max.y-X.min.y,Ct=X.min.x,Rt=X.min.y):(ut=E.image.width,vt=E.image.height,Ct=0,Rt=0),K!==null?(zt=K.x,Gt=K.y):(zt=0,Gt=0);const Ot=Xt.convert(k.format),ce=Xt.convert(k.type);Wt.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const be=L.getParameter(L.UNPACK_ROW_LENGTH),Se=L.getParameter(L.UNPACK_IMAGE_HEIGHT),An=L.getParameter(L.UNPACK_SKIP_PIXELS),le=L.getParameter(L.UNPACK_SKIP_ROWS),Pt=L.getParameter(L.UNPACK_SKIP_IMAGES),Xe=E.isCompressedTexture?E.mipmaps[z]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Rt),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,z,zt,Gt,ut,vt,Ot,ce,Xe.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,z,zt,Gt,Xe.width,Xe.height,Ot,Xe.data):L.texSubImage2D(L.TEXTURE_2D,z,zt,Gt,ut,vt,Ot,ce,Xe),L.pixelStorei(L.UNPACK_ROW_LENGTH,be),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se),L.pixelStorei(L.UNPACK_SKIP_PIXELS,An),L.pixelStorei(L.UNPACK_SKIP_ROWS,le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt),z===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(E,k,X=null,K=null,z=0){E.isTexture!==!0&&(nc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,K=arguments[1]||null,E=arguments[2],k=arguments[3],z=arguments[4]||0);let ut,vt,Ct,Rt,zt,Gt,Ot,ce,be;const Se=E.isCompressedTexture?E.mipmaps[z]:E.image;X!==null?(ut=X.max.x-X.min.x,vt=X.max.y-X.min.y,Ct=X.max.z-X.min.z,Rt=X.min.x,zt=X.min.y,Gt=X.min.z):(ut=Se.width,vt=Se.height,Ct=Se.depth,Rt=0,zt=0,Gt=0),K!==null?(Ot=K.x,ce=K.y,be=K.z):(Ot=0,ce=0,be=0);const An=Xt.convert(k.format),le=Xt.convert(k.type);let Pt;if(k.isData3DTexture)Wt.setTexture3D(k,0),Pt=L.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Wt.setTexture2DArray(k,0),Pt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const Xe=L.getParameter(L.UNPACK_ROW_LENGTH),ue=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xn=L.getParameter(L.UNPACK_SKIP_PIXELS),to=L.getParameter(L.UNPACK_SKIP_ROWS),wn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Se.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Se.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rt),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Pt,z,Ot,ce,be,ut,vt,Ct,An,le,Se.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,z,Ot,ce,be,ut,vt,Ct,An,Se.data):L.texSubImage3D(Pt,z,Ot,ce,be,ut,vt,Ct,An,le,Se),L.pixelStorei(L.UNPACK_ROW_LENGTH,Xe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xn),L.pixelStorei(L.UNPACK_SKIP_ROWS,to),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wn),z===0&&k.generateMipmaps&&L.generateMipmap(Pt),St.unbindTexture()},this.initRenderTarget=function(E){Ht.get(E).__webglFramebuffer===void 0&&Wt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Wt.setTextureCube(E,0):E.isData3DTexture?Wt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Wt.setTexture2DArray(E,0):Wt.setTexture2D(E,0),St.unbindTexture()},this.resetState=function(){N=0,M=0,T=null,St.reset(),jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===rd?"display-p3":"srgb",e.unpackColorSpace=he.workingColorSpace===vu?"display-p3":"srgb"}}class ud{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=n}clone(){return new ud(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tb extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eb extends dn{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new bt:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,r=[],s=[],o=[],a=new O,c=new Ee;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new O)}s[0]=new O,o[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Je(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hd extends Pi{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new bt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class nb extends hd{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fd(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const gl=new O,ph=new fd,mh=new fd,gh=new fd;class ib extends Pi{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new O){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(gl.subVectors(r[0],r[1]).add(r[0]),l=gl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(gl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=gl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ph.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,y,m),mh.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,y,m),gh.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),mh.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),gh.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(ph.calc(c),mh.calc(c),gh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new O().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wp(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function rb(i,t){const e=1-i;return e*e*t}function sb(i,t){return 2*(1-i)*i*t}function ob(i,t){return i*i*t}function ic(i,t,e,n){return rb(i,t)+sb(i,e)+ob(i,n)}function ab(i,t){const e=1-i;return e*e*e*t}function cb(i,t){const e=1-i;return 3*e*e*i*t}function lb(i,t){return 3*(1-i)*i*i*t}function ub(i,t){return i*i*i*t}function rc(i,t,e,n,r){return ab(i,t)+cb(i,e)+lb(i,n)+ub(i,r)}class Hg extends Pi{constructor(t=new bt,e=new bt,n=new bt,r=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new bt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rc(t,r.x,s.x,o.x,a.x),rc(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hb extends Pi{constructor(t=new O,e=new O,n=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new O){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rc(t,r.x,s.x,o.x,a.x),rc(t,r.y,s.y,o.y,a.y),rc(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vg extends Pi{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fb extends Pi{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wg extends Pi{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ic(t,r.x,s.x,o.x),ic(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class db extends Pi{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ic(t,r.x,s.x,o.x),ic(t,r.y,s.y,o.y),ic(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xg extends Pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Wp(a,c.x,l.x,u.x,h.x),Wp(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new bt().fromArray(r))}return this}}var Xp=Object.freeze({__proto__:null,ArcCurve:nb,CatmullRomCurve3:ib,CubicBezierCurve:Hg,CubicBezierCurve3:hb,EllipseCurve:hd,LineCurve:Vg,LineCurve3:fb,QuadraticBezierCurve:Wg,QuadraticBezierCurve3:db,SplineCurve:Xg});class pb extends Pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xp[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Xp[r.type]().fromJSON(r))}return this}}class mb extends pb{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vg(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Wg(this.currentPoint.clone(),new bt(t,e),new bt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Hg(this.currentPoint.clone(),new bt(t,e),new bt(n,r),new bt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xg(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){const l=new hd(t,e,n,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class dd extends Wn{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Je(r,0,Math.PI*2);const s=[],o=[],a=[],c=[],l=[],u=1/e,h=new O,f=new bt,d=new O,g=new O,y=new O;let m=0,p=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:m=t[A+1].x-t[A].x,p=t[A+1].y-t[A].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:m=t[A+1].x-t[A].x,p=t[A+1].y-t[A].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),c.push(d.x,d.y,d.z),y.copy(g)}for(let A=0;A<=e;A++){const _=n+A*u*r,S=Math.sin(_),N=Math.cos(_);for(let M=0;M<=t.length-1;M++){h.x=t[M].x*S,h.y=t[M].y,h.z=t[M].x*N,o.push(h.x,h.y,h.z),f.x=A/e,f.y=M/(t.length-1),a.push(f.x,f.y);const T=c[3*M+0]*S,I=c[3*M+1],b=c[3*M+0]*N;l.push(T,I,b)}}for(let A=0;A<e;A++)for(let _=0;_<t.length-1;_++){const S=_+A*t.length,N=S,M=S+t.length,T=S+t.length+1,I=S+1;s.push(N,M,I),s.push(T,I,M)}this.setIndex(s),this.setAttribute("position",new Te(o,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dd(t.points,t.segments,t.phiStart,t.phiLength)}}class pd extends dd{constructor(t=1,e=1,n=4,r=8){const s=new mb;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new pd(t.radius,t.length,t.capSegments,t.radialSegments)}}class md extends Wn{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],c=[],l=new O,u=new bt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const d=n+h/e*r;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new md(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ql extends Wn{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const y=[],m=n/2;let p=0;A(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Te(h,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function A(){const S=new O,N=new O;let M=0;const T=(e-t)/n;for(let I=0;I<=s;I++){const b=[],x=I/s,R=x*(e-t)+t;for(let V=0;V<=r;V++){const G=V/r,Z=G*c+a,U=Math.sin(Z),B=Math.cos(Z);N.x=R*U,N.y=-x*n+m,N.z=R*B,h.push(N.x,N.y,N.z),S.set(U,T,B).normalize(),f.push(S.x,S.y,S.z),d.push(G,1-x),b.push(g++)}y.push(b)}for(let I=0;I<r;I++)for(let b=0;b<s;b++){const x=y[b][I],R=y[b+1][I],V=y[b+1][I+1],G=y[b][I+1];u.push(x,R,G),u.push(R,V,G),M+=6}l.addGroup(p,M,0),p+=M}function _(S){const N=g,M=new bt,T=new O;let I=0;const b=S===!0?t:e,x=S===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const R=g;for(let V=0;V<=r;V++){const Z=V/r*c+a,U=Math.cos(Z),B=Math.sin(Z);T.x=b*B,T.y=m*x,T.z=b*U,h.push(T.x,T.y,T.z),f.push(0,x,0),M.x=U*.5+.5,M.y=B*.5*x+.5,d.push(M.x,M.y),g++}for(let V=0;V<r;V++){const G=N+V,Z=R+V;S===!0?u.push(Z,Z+1,G):u.push(Z+1,Z,G),I+=3}l.addGroup(p,I,S===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class gd extends Wn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new O,f=new O,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){const A=[],_=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let N=0;N<=e;N++){const M=N/e;h.x=-t*Math.cos(r+M*s)*Math.sin(o+_*a),h.y=t*Math.cos(o+_*a),h.z=t*Math.sin(r+M*s)*Math.sin(o+_*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(M+S,1-_),A.push(l++)}u.push(A)}for(let p=0;p<n;p++)for(let A=0;A<e;A++){const _=u[p][A+1],S=u[p][A],N=u[p+1][A],M=u[p+1][A+1];(p!==0||o>0)&&d.push(_,S,M),(p!==n-1||c<Math.PI)&&d.push(S,N,M)}this.setIndex(d),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(y,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zl extends Wn{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new O,h=new O,f=new O;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){const y=g/r*s,m=d/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(y),h.y=(t+e*Math.cos(m))*Math.sin(y),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){const y=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,A=(r+1)*d+g;o.push(y,m,A),o.push(m,p,A)}this.setIndex(o),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class li extends Fc{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eg,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kg extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gb extends Kg{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yh=new Ee,Kp=new O,Jp=new O;class yb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cd,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kp),Jp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jp),e.updateMatrixWorld(),yh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vb extends yb{constructor(){super(new Og(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _b extends Kg{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new vb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yp(){return(typeof performance>"u"?Date:performance).now()}const Qp=new Ee;class Ab{constructor(t,e,n=0,r=1/0){this.ray=new Cg(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new od,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qp),this}intersectObject(t,e=!0,n=[]){return gf(t,this,n,e),n.sort(qp),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)gf(t[r],this,n,e);return n.sort(qp),n}}function qp(i,t){return i.distance-t.distance}function gf(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)gf(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);const _o=new si(0,0,0,"YXZ"),xo=new O,wb={type:"change"},Eb={type:"lock"},bb={type:"unlock"},Zp=Math.PI/2;class Sb extends Zs{constructor(t,e){super(),this.camera=t,this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Mb.bind(this),this._onPointerlockChange=Tb.bind(this),this._onPointerlockError=Cb.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(t){const e=this.camera;xo.setFromMatrixColumn(e.matrix,0),xo.crossVectors(e.up,xo),e.position.addScaledVector(xo,t)}moveRight(t){const e=this.camera;xo.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(xo,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Mb(i){if(this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.camera;_o.setFromQuaternion(n.quaternion),_o.y-=t*.002*this.pointerSpeed,_o.x-=e*.002*this.pointerSpeed,_o.x=Math.max(Zp-this.maxPolarAngle,Math.min(Zp-this.minPolarAngle,_o.x)),n.quaternion.setFromEuler(_o),this.dispatchEvent(wb)}function Tb(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Eb),this.isLocked=!0):(this.dispatchEvent(bb),this.isLocked=!1)}function Cb(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}function jp(i){return i==="KeyW"?"forward":i==="KeyS"?"backward":i==="KeyA"?"left":i==="KeyD"?"right":i==="ShiftLeft"||i==="ShiftRight"?"sprint":i==="KeyE"?"interact":null}function Rb(i=window){const t={forward:!1,backward:!1,left:!1,right:!1,sprint:!1,interact:!1},e=r=>{const s=jp(r.code);s&&(t[s]=!0)},n=r=>{const s=jp(r.code);s&&(t[s]=!1)};return i.addEventListener("keydown",e),i.addEventListener("keyup",n),{state:t,consumeInteract(){const r=t.interact;return t.interact=!1,r},destroy(){i.removeEventListener("keydown",e),i.removeEventListener("keyup",n)}}}function Pb(i,t){const e=new tb;e.fog=new ud(9025535,70,420);const n=new Hn(75,window.innerWidth/window.innerHeight,.1,1200);n.position.set(0,1.7,8);const r=new $E({antialias:!0});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(window.innerWidth,window.innerHeight),r.domElement.style.position="fixed",r.domElement.style.inset="0",r.domElement.style.zIndex="1",i.appendChild(r.domElement);const s=new Sb(n,r.domElement);e.add(s.getObject());const o=document.createElement("div");o.style.position="fixed",o.style.inset="0",o.style.pointerEvents="none",o.style.zIndex="2",i.appendChild(o);const a=new gb(14412542,2306371,.85);e.add(a);const c=new _b(16777215,1);c.position.set(120,180,40),c.castShadow=!0,e.add(c);const l=new Ce(new gd(900,32,24),new ar({side:fn,uniforms:{topColor:{value:new ie(8369151)},bottomColor:{value:new ie(15069439)}},vertexShader:"varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 topColor; uniform vec3 bottomColor; varying vec3 vPos; void main(){ float h = normalize(vPos).y * 0.5 + 0.5; gl_FragColor = vec4(mix(bottomColor, topColor, smoothstep(0.0,1.0,h)),1.0); }"}));e.add(l);const u=new eb(Ib());u.wrapS=cc,u.wrapT=cc,u.repeat.set(32,32);const h=new Ce(new Ra(600,600),new li({map:u,roughness:.98,metalness:.02}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,e.add(h);const f=new Ce(new md(1.4,40),new ad({color:2282478}));f.rotation.x=-Math.PI/2,f.position.set(0,.03,0),e.add(f);const d=[],g=(_t,q)=>{const j=document.createElement("div");j.textContent=q,j.style.position="absolute",j.style.padding="2px 6px",j.style.border="1px solid #1e293b",j.style.borderRadius="6px",j.style.background="rgba(15,23,42,.8)",j.style.color="#f8fafc",j.style.font="10px Inter, sans-serif",o.appendChild(j),_t.__landmarkLabel=j},y=new Ce(new ql(10,10,.5,32),new li({color:3359061}));y.position.set(0,.25,-20),e.add(y),d.push(y),g(y,"Plaza");const m=new Ce(new Zl(4,.5,16,64),new li({color:8141549,emissive:3868516}));m.position.set(0,5,-40),e.add(m),d.push(m),g(m,"Portal Gate");const p=new Ce(new Wr(16,10,14),new li({color:14870768}));p.position.set(24,5,-28),e.add(p),d.push(p),g(p,"Research Hub");const A=new Ce(new Wr(12,8,12),new li({color:13358561}));A.position.set(-24,4,-25),e.add(A),d.push(A),g(A,"Ops Center");const _=new Ce(new Wr(4,3,4),new li({color:1920728}));_.position.set(12,1.5,-8),e.add(_),d.push(_),g(_,"Task Kiosk");const S=new Ce(new Ra(10,5),new li({color:988970,emissive:1120295}));S.position.set(0,5,-8),e.add(S),d.push(S),g(S,"Live Board");const N=new Ce(new ql(4,4,1,24),new li({color:3718648,transparent:!0,opacity:.8}));N.position.set(-12,.5,-12),e.add(N),d.push(N),g(N,"Fountain");const M=new Ce(new Zl(5,.6,10,32,Math.PI),new li({color:4674921}));M.position.set(-36,6,-38),M.rotation.z=Math.PI,e.add(M),d.push(M),g(M,"North Arch");const T=new Map,I=Rb(window),b=new O,x=new O,R=new Ab,V=new bt;let G=null,Z=null,U=null,B=null;function J(_t){let q=T.get(_t);if(!q){const j=new li({color:11032055,emissive:0}),ht=new Ce(new pd(.4,1,4,10),j);ht.castShadow=!0,ht.userData.agentId=_t,e.add(ht);const et=document.createElement("div");et.style.position="absolute",et.style.padding="2px 6px",et.style.border="1px solid #334155",et.style.borderRadius="6px",et.style.background="rgba(2,6,23,.75)",et.style.color="#e2e8f0",et.style.font="11px Inter, sans-serif",o.appendChild(et),q={id:_t,mesh:ht,label:et,meta:{name:_t,state:"idle",lastSeen:new Date().toISOString()}},T.set(_t,q)}return q}function W(_t,q,j,ht,et){const xt=J(_t);xt.mesh.position.set(q,Math.max(1,j),ht),xt.meta.name=(et==null?void 0:et.name)??xt.meta.name,xt.meta.state=(et==null?void 0:et.state)??xt.meta.state,xt.meta.lastSeen=(et==null?void 0:et.lastSeen)??new Date().toISOString(),xt.meta.taskId=et==null?void 0:et.taskId,xt.label.textContent=`${xt.meta.name} • ${xt.meta.state}`}function rt(_t){!_t&&s.isLocked&&s.unlock()}function at(){return t!=null&&t.pointerLockEnabled&&!t.pointerLockEnabled()?!1:(s.lock(),!0)}r.domElement.addEventListener("click",_t=>{var q,j;if(s.isLocked){V.x=_t.clientX/window.innerWidth*2-1,V.y=-(_t.clientY/window.innerHeight)*2+1;const ht=[...T.values()].map(xt=>xt.mesh);R.setFromCamera(V,n);const et=R.intersectObjects(ht,!1)[0];if((j=(q=et==null?void 0:et.object)==null?void 0:q.userData)!=null&&j.agentId){const xt=et.object.userData.agentId;G=xt;for(const It of T.values())It.mesh.material.emissive.setHex(It.id===G?3900150:0);const Ut=T.get(xt);U==null||U({id:xt,name:Ut.meta.name,status:Ut.meta.state,lastSeen:Ut.meta.lastSeen})}}});const mt=new xb;function Nt(){var L,te;requestAnimationFrame(Nt);const _t=Math.min(mt.getDelta(),.05),q=performance.now()*5e-5,j=(Math.sin(q)+1)*.5;if(c.intensity=.35+j*.9,a.intensity=.25+j*.55,s.isLocked){x.set(0,0,0),I.state.forward&&(x.z-=1),I.state.backward&&(x.z+=1),I.state.left&&(x.x-=1),I.state.right&&(x.x+=1),x.normalize();const Lt=I.state.sprint?8:4.2,Ft=18,St=10,me=new O;n.getWorldDirection(me),me.y=0,me.normalize();const Ht=new O().crossVectors(me,new O(0,1,0)).normalize(),Wt=new O().addScaledVector(me,x.z*Lt).addScaledVector(Ht,-x.x*Lt);b.lerp(Wt,Math.min(1,Ft*_t)),b.multiplyScalar(1-Math.min(.9,St*_t*.02)),s.getObject().position.addScaledVector(b,_t),s.getObject().position.y=1.7}I.consumeInteract()&&(window.__agentverseLastInteraction__="context_interaction");const ht=s.getObject().position;ht.x=Math.max(-280,Math.min(280,ht.x)),ht.z=Math.max(-280,Math.min(280,ht.z));for(const Lt of T.values()){const Ft=Lt.mesh.position.clone();Ft.y+=1.4,Ft.project(n),Lt.label.style.transform=`translate(-50%,-50%) translate(${(Ft.x*.5+.5)*window.innerWidth}px,${(-Ft.y*.5+.5)*window.innerHeight}px)`,Lt.label.style.display=Ft.z<1?"block":"none"}for(const Lt of d){const Ft=Lt.__landmarkLabel;if(!Ft)continue;const St=Lt.position.clone();St.y+=3,St.project(n),Ft.style.transform=`translate(-50%,-50%) translate(${(St.x*.5+.5)*window.innerWidth}px,${(-St.y*.5+.5)*window.innerHeight}px)`,Ft.style.display=St.z<1?"block":"none"}R.setFromCamera(new bt(0,0),n);const et=R.intersectObjects([...T.values()].map(Lt=>Lt.mesh),!1)[0];Z=((te=(L=et==null?void 0:et.object)==null?void 0:L.userData)==null?void 0:te.agentId)||null;for(const Lt of T.values()){const Ft=Lt.mesh.material;Lt.id===G?Ft.emissive.setHex(3900150):Lt.id===Z?Ft.emissive.setHex(1920728):Ft.emissive.setHex(0)}const xt=new O;n.getWorldDirection(xt);const It=(Math.atan2(xt.x,xt.z)*(180/Math.PI)+360)%360,de=It>=315||It<45?"N":It<135?"E":It<225?"S":"W";B==null||B(`${de} (${Math.round(It)}°)`),r.render(e,n)}return Nt(),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}),{onSelectionChanged(_t){U=_t},onPointerLockChange(_t){document.addEventListener("pointerlockchange",()=>_t(s.isLocked))},onHeadingChange(_t){B=_t},upsertAgent:W,tryLockPointer:at,setPointerLookEnabled:rt,isPointerLocked:()=>s.isLocked,getCameraPosition:()=>{const _t=s.getObject().position;return{x:_t.x,y:_t.y,z:_t.z}},getLastInteraction:()=>window.__agentverseLastInteraction__||null,clearLastInteraction:()=>window.__agentverseLastInteraction__=null}}function Ib(){const i=document.createElement("canvas");i.width=256,i.height=256;const t=i.getContext("2d");t.fillStyle="#4b5563",t.fillRect(0,0,256,256);for(let e=0;e<16;e++)for(let n=0;n<16;n++){const r=Math.random()*14|0;t.fillStyle=`rgb(${72+r},${82+r},${92+r})`,t.fillRect(n*16,e*16,15,15)}return i}function Lb(i){i.insertAdjacentHTML("beforeend",`<div id="playOverlay" style="position:fixed;inset:0;z-index:30;background:rgba(2,6,23,.75);display:flex;align-items:center;justify-content:center;pointer-events:auto;">
      <button id="playBtn" style="padding:14px 20px;border:1px solid #334155;border-radius:10px;background:#0f172a;color:#e2e8f0;font-weight:700;cursor:pointer">Click to Play</button>
    </div>

    <div style="position:fixed;top:12px;left:12px;z-index:20;background:rgba(8,10,20,.86);padding:12px;border:1px solid #334155;border-radius:10px;max-width:360px;color:#e2e8f0;font-family:Inter,system-ui,sans-serif;pointer-events:auto">
      <div style="font-weight:700;letter-spacing:.08em">AGENTVERSE</div>
      <div id="status" style="margin-top:8px;font-size:12px;color:#94a3b8">Status: booting</div>
      <div id="wsBadge" style="margin-top:4px;font-size:12px;color:#facc15">WS: CONNECTING</div>
      <div id="wsMeta" style="margin-top:2px;font-size:11px;color:#93c5fd">URL: -</div>
      <div id="wsError" style="margin-top:2px;font-size:11px;color:#fda4af">Close: - | Error: -</div>
      <div id="compass" style="margin-top:2px;font-size:11px;color:#a7f3d0">Compass: N</div>
      <div id="load" style="margin-top:4px;font-size:12px;color:#93c5fd">Loading: 0%</div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
        <button id="login" style="padding:8px 12px;background:#fff;color:#000;border:none;border-radius:6px;cursor:pointer">Connect Wallet</button>
        <button id="reconnect" style="padding:8px 12px;background:#1d4ed8;color:#fff;border:none;border-radius:6px;cursor:pointer">Reconnect</button>
      </div>
      <label style="display:flex;align-items:center;gap:8px;margin-top:10px;font-size:12px;color:#cbd5e1">
        <input id="mouseLookToggle" type="checkbox" checked /> FPS Mouse Look (Pointer Lock)
      </label>
      <div style="margin-top:10px;font-size:12px">Active Agents</div>
      <ul id="agents" style="max-height:130px;overflow:auto;padding-left:18px"></ul>
    </div>

    <div id="interactionPanel" style="display:none;position:fixed;right:12px;top:12px;z-index:20;background:rgba(8,10,20,.9);padding:12px;border:1px solid #334155;border-radius:10px;width:360px;color:#e2e8f0;font-family:Inter,system-ui,sans-serif;pointer-events:auto">
      <div id="selectedAgent" style="font-weight:700">No agent selected</div>
      <div id="selectedState" style="margin-top:4px;font-size:12px;color:#94a3b8">State: -</div>
      <div id="selectedSeen" style="margin-top:2px;font-size:12px;color:#94a3b8">Last seen: -</div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button id="tabChat" style="padding:6px 10px;border-radius:6px;border:1px solid #334155;background:#1e293b;color:#e2e8f0">Chat</button>
        <button id="tabTask" style="padding:6px 10px;border-radius:6px;border:1px solid #334155;background:#0f172a;color:#e2e8f0">Assign Task</button>
      </div>
      <div id="chatTab" style="margin-top:8px;display:block">
        <div id="chatLog" style="height:120px;overflow:auto;background:#020617;border:1px solid #1e293b;border-radius:6px;padding:6px;font-size:12px"></div>
        <div style="display:flex;gap:6px;margin-top:8px">
          <input id="chatInput" placeholder="Say something..." style="flex:1;padding:6px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;border-radius:6px" />
          <button id="chatSend" style="padding:6px 10px;border-radius:6px;border:none;cursor:pointer">Send</button>
        </div>
      </div>
      <div id="taskTab" style="margin-top:8px;display:none">
        <input id="taskInput" placeholder="Task title" style="width:100%;padding:6px;background:#0f172a;border:1px solid #334155;color:#e2e8f0;border-radius:6px" />
        <button id="taskAssign" style="margin-top:8px;padding:6px 10px;border-radius:6px;border:none;cursor:pointer">Assign</button>
      </div>
    </div>

    <div style="position:fixed;left:50%;bottom:10px;transform:translateX(-50%);z-index:15;background:rgba(8,10,20,.72);border:1px solid #334155;border-radius:999px;padding:6px 10px;color:#e2e8f0;font-size:12px;font-family:Inter,system-ui,sans-serif;pointer-events:none">
      [W/A/S/D] Move • [Shift] Sprint • [E] Interact • [Esc] Exit mouse lock
    </div>`);const t=new Map;let e=null;const n=document.getElementById("agents"),r=document.getElementById("interactionPanel"),s=()=>{n.innerHTML="";for(const a of t.values()){const c=document.createElement("li");c.style.cursor="pointer",c.textContent=`${a.name||a.id} (${a.state||"idle"})`,c.onclick=()=>o(a.id),n.appendChild(c)}},o=a=>{e=a;const c=t.get(a);c&&(r.style.display="block",document.getElementById("selectedAgent").textContent=c.name||c.id,document.getElementById("selectedState").textContent=`State: ${c.state||"idle"}`,document.getElementById("selectedSeen").textContent=`Last seen: ${c.lastSeen||"-"}`)};return document.getElementById("tabChat").onclick=()=>{document.getElementById("chatTab").style.display="block",document.getElementById("taskTab").style.display="none"},document.getElementById("tabTask").onclick=()=>{document.getElementById("chatTab").style.display="none",document.getElementById("taskTab").style.display="block"},{setStatus:a=>document.getElementById("status").textContent=`Status: ${a}`,setWsState:(a,c)=>{document.getElementById("wsBadge").textContent=`WS: ${a}`,document.getElementById("wsMeta").textContent=`URL: ${c.url}`,document.getElementById("wsError").textContent=`Close: ${c.closeCode??"-"} ${c.closeReason??""} | Error: ${c.error??"-"}`},setLoadProgress:a=>document.getElementById("load").textContent=`Loading: ${Math.round(a)}%`,setCompass:a=>document.getElementById("compass").textContent=`Compass: ${a}`,onLogin:a=>document.getElementById("login").onclick=a,onReconnect:a=>document.getElementById("reconnect").onclick=a,onPlayClick:a=>document.getElementById("playBtn").onclick=a,onPointerLockToggle:a=>{const c=document.getElementById("mouseLookToggle");c.onchange=()=>a(c.checked)},setOverlayVisible:a=>document.getElementById("playOverlay").style.display=a?"flex":"none",upsertAgent:a=>{t.set(a.id,{...t.get(a.id)||{},...a}),s(),e===a.id&&o(a.id)},openAgent:a=>o(a),onChatSend:a=>{document.getElementById("chatSend").onclick=()=>{if(!e)return;const c=document.getElementById("chatInput"),l=c.value.trim();l&&(a(e,l),c.value="")}},onAssignTask:a=>{document.getElementById("taskAssign").onclick=()=>{if(!e)return;const c=document.getElementById("taskInput"),l=c.value.trim();l&&(a(e,l),c.value="")}},appendAgentChat:(a,c)=>{const l=document.getElementById("chatLog");l.innerHTML+=`<div><b>${a}:</b> ${c}</div>`,l.scrollTop=l.scrollHeight},setNonceDebug:(a,c)=>{const l=`Nonce request failed at ${a} (HTTP ${c})`;document.getElementById("status").textContent=`Status: ${l}`}}}const Nb="6.16.0";function Ub(i,t,e){const n=t.split("|").map(s=>s.trim());for(let s=0;s<n.length;s++)switch(t){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof i===t)return}const r=new Error(`invalid value for type ${t}`);throw r.code="INVALID_ARGUMENT",r.argument=`value.${e}`,r.value=i,r}async function an(i){const t=Object.keys(i);return(await Promise.all(t.map(n=>Promise.resolve(i[n])))).reduce((n,r,s)=>(n[t[s]]=r,n),{})}function Bt(i,t,e){for(let n in t){let r=t[n];const s=e?e[n]:null;s&&Ub(r,s,n),Object.defineProperty(i,n,{enumerable:!0,value:r,writable:!1})}}function Mo(i,t){if(i==null)return"null";if(t==null&&(t=new Set),typeof i=="object"){if(t.has(i))return"[Circular]";t.add(i)}if(Array.isArray(i))return"[ "+i.map(e=>Mo(e,t)).join(", ")+" ]";if(i instanceof Uint8Array){const e="0123456789abcdef";let n="0x";for(let r=0;r<i.length;r++)n+=e[i[r]>>4],n+=e[i[r]&15];return n}if(typeof i=="object"&&typeof i.toJSON=="function")return Mo(i.toJSON(),t);switch(typeof i){case"boolean":case"number":case"symbol":return i.toString();case"bigint":return BigInt(i).toString();case"string":return JSON.stringify(i);case"object":{const e=Object.keys(i);return e.sort(),"{ "+e.map(n=>`${Mo(n,t)}: ${Mo(i[n],t)}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function Qe(i,t){return i&&i.code===t}function yd(i){return Qe(i,"CALL_EXCEPTION")}function _e(i,t,e){let n=i;{const s=[];if(e){if("message"in e||"code"in e||"name"in e)throw new Error(`value will overwrite populated values: ${Mo(e)}`);for(const o in e){if(o==="shortMessage")continue;const a=e[o];s.push(o+"="+Mo(a))}}s.push(`code=${t}`),s.push(`version=${Nb}`),s.length&&(i+=" ("+s.join(", ")+")")}let r;switch(t){case"INVALID_ARGUMENT":r=new TypeError(i);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":r=new RangeError(i);break;default:r=new Error(i)}return Bt(r,{code:t}),e&&Object.assign(r,e),r.shortMessage==null&&Bt(r,{shortMessage:n}),r}function nt(i,t,e,n){if(!i)throw _e(t,e,n)}function D(i,t,e,n){nt(i,t,"INVALID_ARGUMENT",{argument:e,value:n})}function Jg(i,t,e){e==null&&(e=""),e&&(e=": "+e),nt(i>=t,"missing argument"+e,"MISSING_ARGUMENT",{count:i,expectedCount:t}),nt(i<=t,"too many arguments"+e,"UNEXPECTED_ARGUMENT",{count:i,expectedCount:t})}["NFD","NFC","NFKD","NFKC"].reduce((i,t)=>{try{if("test".normalize(t)!=="test")throw new Error("bad");if(t==="NFD"&&"é".normalize("NFD")!=="é")throw new Error("broken");i.push(t)}catch{}return i},[]);function xu(i,t,e){if(e==null&&(e=""),i!==t){let n=e,r="new";e&&(n+=".",r+=" "+e),nt(!1,`private constructor; use ${n}from* methods`,"UNSUPPORTED_OPERATION",{operation:r})}}function Yg(i,t,e){if(i instanceof Uint8Array)return e?new Uint8Array(i):i;if(typeof i=="string"&&i.length%2===0&&i.match(/^0x[0-9a-f]*$/i)){const n=new Uint8Array((i.length-2)/2);let r=2;for(let s=0;s<n.length;s++)n[s]=parseInt(i.substring(r,r+2),16),r+=2;return n}D(!1,"invalid BytesLike value",t||"value",i)}function qt(i,t){return Yg(i,t,!1)}function cn(i,t){return Yg(i,t,!0)}function ye(i,t){return!(typeof i!="string"||!i.match(/^0x[0-9A-Fa-f]*$/)||typeof t=="number"&&i.length!==2+2*t||t===!0&&i.length%2!==0)}function vd(i){return ye(i,!0)||i instanceof Uint8Array}const $p="0123456789abcdef";function gt(i){const t=qt(i);let e="0x";for(let n=0;n<t.length;n++){const r=t[n];e+=$p[(r&240)>>4]+$p[r&15]}return e}function xe(i){return"0x"+i.map(t=>gt(t).substring(2)).join("")}function Uo(i){return ye(i,!0)?(i.length-2)/2:qt(i).length}function Me(i,t,e){const n=qt(i);return e!=null&&e>n.length&&nt(!1,"cannot slice beyond data bounds","BUFFER_OVERRUN",{buffer:n,length:n.length,offset:e}),gt(n.slice(t??0,e??n.length))}function Qg(i,t,e){const n=qt(i);nt(t>=n.length,"padding exceeds data length","BUFFER_OVERRUN",{buffer:new Uint8Array(n),length:t,offset:t+1});const r=new Uint8Array(t);return r.fill(0),e?r.set(n,t-n.length):r.set(n,0),gt(r)}function cr(i,t){return Qg(i,t,!0)}function Db(i,t){return Qg(i,t,!1)}const kc=BigInt(0),ii=BigInt(1),To=9007199254740991;function Ob(i,t){const e=Au(i,"value"),n=BigInt(Zt(t,"width"));if(nt(e>>n===kc,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:i}),e>>n-ii){const r=(ii<<n)-ii;return-((~e&r)+ii)}return e}function qg(i,t){let e=Et(i,"value");const n=BigInt(Zt(t,"width")),r=ii<<n-ii;if(e<kc){e=-e,nt(e<=r,"too low","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:i});const s=(ii<<n)-ii;return(~e&s)+ii}else nt(e<r,"too high","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:i});return e}function qa(i,t){const e=Au(i,"value"),n=BigInt(Zt(t,"bits"));return e&(ii<<n)-ii}function Et(i,t){switch(typeof i){case"bigint":return i;case"number":return D(Number.isInteger(i),"underflow",t||"value",i),D(i>=-To&&i<=To,"overflow",t||"value",i),BigInt(i);case"string":try{if(i==="")throw new Error("empty string");return i[0]==="-"&&i[1]!=="-"?-BigInt(i.substring(1)):BigInt(i)}catch(e){D(!1,`invalid BigNumberish string: ${e.message}`,t||"value",i)}}D(!1,"invalid BigNumberish value",t||"value",i)}function Au(i,t){const e=Et(i,t);return nt(e>=kc,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:i}),e}const tm="0123456789abcdef";function _d(i){if(i instanceof Uint8Array){let t="0x0";for(const e of i)t+=tm[e>>4],t+=tm[e&15];return BigInt(t)}return Et(i)}function Zt(i,t){switch(typeof i){case"bigint":return D(i>=-To&&i<=To,"overflow",t||"value",i),Number(i);case"number":return D(Number.isInteger(i),"underflow",t||"value",i),D(i>=-To&&i<=To,"overflow",t||"value",i),i;case"string":try{if(i==="")throw new Error("empty string");return Zt(BigInt(i),t)}catch(e){D(!1,`invalid numeric string: ${e.message}`,t||"value",i)}}D(!1,"invalid numeric value",t||"value",i)}function Bb(i){return Zt(_d(i))}function Jr(i,t){const e=Au(i,"value");let n=e.toString(16);if(t==null)n.length%2&&(n="0"+n);else{const r=Zt(t,"width");if(r===0&&e===kc)return"0x";for(nt(r*2>=n.length,`value exceeds width (${r} bytes)`,"NUMERIC_FAULT",{operation:"toBeHex",fault:"overflow",value:i});n.length<r*2;)n="0"+n}return"0x"+n}function Oe(i,t){const e=Au(i,"value");if(e===kc)return new Uint8Array(0);let n=e.toString(16);n.length%2&&(n="0"+n);const r=new Uint8Array(n.length/2);for(let s=0;s<r.length;s++){const o=s*2;r[s]=parseInt(n.substring(o,o+2),16)}return r}function ei(i){let t=gt(vd(i)?i:Oe(i)).substring(2);for(;t.startsWith("0");)t=t.substring(1);return t===""&&(t="0"),"0x"+t}const em="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";BigInt(0);const nm=BigInt(58);function Fb(i){const t=qt(i);let e=_d(t),n="";for(;e;)n=em[Number(e%nm)]+n,e/=nm;for(let r=0;r<t.length&&!t[r];r++)n=em[0]+n;return n}function kb(i){i=atob(i);const t=new Uint8Array(i.length);for(let e=0;e<i.length;e++)t[e]=i.charCodeAt(e);return qt(t)}function zb(i){const t=qt(i);let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}var Bo;class Zg{constructor(t,e,n){H(this,"filter");H(this,"emitter");Y(this,Bo);C(this,Bo,e),Bt(this,{emitter:t,filter:n})}async removeListener(){v(this,Bo)!=null&&await this.emitter.off(this.filter,v(this,Bo))}}Bo=new WeakMap;function Gb(i,t,e,n,r){D(!1,`invalid codepoint at offset ${t}; ${i}`,"bytes",e)}function jg(i,t,e,n,r){if(i==="BAD_PREFIX"||i==="UNEXPECTED_CONTINUE"){let s=0;for(let o=t+1;o<e.length&&e[o]>>6===2;o++)s++;return s}return i==="OVERRUN"?e.length-t-1:0}function Hb(i,t,e,n,r){return i==="OVERLONG"?(D(typeof r=="number","invalid bad code point for replacement","badCodepoint",r),n.push(r),0):(n.push(65533),jg(i,t,e))}const Vb=Object.freeze({error:Gb,ignore:jg,replace:Hb});function Wb(i,t){t==null&&(t=Vb.error);const e=qt(i,"bytes"),n=[];let r=0;for(;r<e.length;){const s=e[r++];if(!(s>>7)){n.push(s);continue}let o=null,a=null;if((s&224)===192)o=1,a=127;else if((s&240)===224)o=2,a=2047;else if((s&248)===240)o=3,a=65535;else{(s&192)===128?r+=t("UNEXPECTED_CONTINUE",r-1,e,n):r+=t("BAD_PREFIX",r-1,e,n);continue}if(r-1+o>=e.length){r+=t("OVERRUN",r-1,e,n);continue}let c=s&(1<<8-o-1)-1;for(let l=0;l<o;l++){let u=e[r];if((u&192)!=128){r+=t("MISSING_CONTINUE",r,e,n),c=null;break}c=c<<6|u&63,r++}if(c!==null){if(c>1114111){r+=t("OUT_OF_RANGE",r-1-o,e,n,c);continue}if(c>=55296&&c<=57343){r+=t("UTF16_SURROGATE",r-1-o,e,n,c);continue}if(c<=a){r+=t("OVERLONG",r-1-o,e,n,c);continue}n.push(c)}}return n}function ir(i,t){D(typeof i=="string","invalid string value","str",i);let e=[];for(let n=0;n<i.length;n++){const r=i.charCodeAt(n);if(r<128)e.push(r);else if(r<2048)e.push(r>>6|192),e.push(r&63|128);else if((r&64512)==55296){n++;const s=i.charCodeAt(n);D(n<i.length&&(s&64512)===56320,"invalid surrogate pair","str",i);const o=65536+((r&1023)<<10)+(s&1023);e.push(o>>18|240),e.push(o>>12&63|128),e.push(o>>6&63|128),e.push(o&63|128)}else e.push(r>>12|224),e.push(r>>6&63|128),e.push(r&63|128)}return new Uint8Array(e)}function Xb(i){return i.map(t=>t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode((t>>10&1023)+55296,(t&1023)+56320))).join("")}function jl(i,t){return Xb(Wb(i,t))}function $g(i){async function t(e,n){nt(n==null||!n.cancelled,"request cancelled before sending","CANCELLED");const r=e.url.split(":")[0].toLowerCase();nt(r==="http"||r==="https",`unsupported protocol ${r}`,"UNSUPPORTED_OPERATION",{info:{protocol:r},operation:"request"}),nt(r==="https"||!e.credentials||e.allowInsecureAuthentication,"insecure authorized connections unsupported","UNSUPPORTED_OPERATION",{operation:"request"});let s=null;const o=new AbortController,a=setTimeout(()=>{s=_e("request timeout","TIMEOUT"),o.abort()},e.timeout);n&&n.addListener(()=>{s=_e("request cancelled","CANCELLED"),o.abort()});const c=Object.assign({},i,{method:e.method,headers:new Headers(Array.from(e)),body:e.body||void 0,signal:o.signal});let l;try{l=await fetch(e.url,c)}catch(d){throw clearTimeout(a),s||d}clearTimeout(a);const u={};l.headers.forEach((d,g)=>{u[g.toLowerCase()]=d});const h=await l.arrayBuffer(),f=h==null?null:new Uint8Array(h);return{statusCode:l.status,statusMessage:l.statusText,headers:u,body:f}}return t}const Kb=12,Jb=250;let im=$g();const Yb=new RegExp("^data:([^;:]*)?(;base64)?,(.*)$","i"),Qb=new RegExp("^ipfs://(ipfs/)?(.*)$","i");let vh=!1;async function t0(i,t){try{const e=i.match(Yb);if(!e)throw new Error("invalid data");return new Xr(200,"OK",{"content-type":e[1]||"text/plain"},e[2]?kb(e[3]):Zb(e[3]))}catch{return new Xr(599,"BAD REQUEST (invalid data: URI)",{},null,new Yr(i))}}function e0(i){async function t(e,n){try{const r=e.match(Qb);if(!r)throw new Error("invalid link");return new Yr(`${i}${r[2]}`)}catch{return new Xr(599,"BAD REQUEST (invalid IPFS URI)",{},null,new Yr(e))}}return t}const yl={data:t0,ipfs:e0("https://gateway.ipfs.io/ipfs/")},n0=new WeakMap;var Es,br;class qb{constructor(t){Y(this,Es);Y(this,br);C(this,Es,[]),C(this,br,!1),n0.set(t,()=>{if(!v(this,br)){C(this,br,!0);for(const e of v(this,Es))setTimeout(()=>{e()},0);C(this,Es,[])}})}addListener(t){nt(!v(this,br),"singal already cancelled","UNSUPPORTED_OPERATION",{operation:"fetchCancelSignal.addCancelListener"}),v(this,Es).push(t)}get cancelled(){return v(this,br)}checkSignal(){nt(!this.cancelled,"cancelled","CANCELLED",{})}}Es=new WeakMap,br=new WeakMap;function vl(i){if(i==null)throw new Error("missing signal; should not happen");return i.checkSignal(),i}var Fo,ko,qn,Gi,zo,Go,Ge,Tn,Hi,bs,Ss,Ms,di,Zn,Sr,Ts,Za;const uu=class uu{constructor(t){Y(this,Ts);Y(this,Fo);Y(this,ko);Y(this,qn);Y(this,Gi);Y(this,zo);Y(this,Go);Y(this,Ge);Y(this,Tn);Y(this,Hi);Y(this,bs);Y(this,Ss);Y(this,Ms);Y(this,di);Y(this,Zn);Y(this,Sr);C(this,Go,String(t)),C(this,Fo,!1),C(this,ko,!0),C(this,qn,{}),C(this,Gi,""),C(this,zo,3e5),C(this,Zn,{slotInterval:Jb,maxAttempts:Kb}),C(this,Sr,null)}get url(){return v(this,Go)}set url(t){C(this,Go,String(t))}get body(){return v(this,Ge)==null?null:new Uint8Array(v(this,Ge))}set body(t){if(t==null)C(this,Ge,void 0),C(this,Tn,void 0);else if(typeof t=="string")C(this,Ge,ir(t)),C(this,Tn,"text/plain");else if(t instanceof Uint8Array)C(this,Ge,t),C(this,Tn,"application/octet-stream");else if(typeof t=="object")C(this,Ge,ir(JSON.stringify(t))),C(this,Tn,"application/json");else throw new Error("invalid body")}hasBody(){return v(this,Ge)!=null}get method(){return v(this,Gi)?v(this,Gi):this.hasBody()?"POST":"GET"}set method(t){t==null&&(t=""),C(this,Gi,String(t).toUpperCase())}get headers(){const t=Object.assign({},v(this,qn));return v(this,Hi)&&(t.authorization=`Basic ${zb(ir(v(this,Hi)))}`),this.allowGzip&&(t["accept-encoding"]="gzip"),t["content-type"]==null&&v(this,Tn)&&(t["content-type"]=v(this,Tn)),this.body&&(t["content-length"]=String(this.body.length)),t}getHeader(t){return this.headers[t.toLowerCase()]}setHeader(t,e){v(this,qn)[String(t).toLowerCase()]=String(e)}clearHeaders(){C(this,qn,{})}[Symbol.iterator](){const t=this.headers,e=Object.keys(t);let n=0;return{next:()=>{if(n<e.length){const r=e[n++];return{value:[r,t[r]],done:!1}}return{value:void 0,done:!0}}}}get credentials(){return v(this,Hi)||null}setCredentials(t,e){D(!t.match(/:/),"invalid basic authentication username","username","[REDACTED]"),C(this,Hi,`${t}:${e}`)}get allowGzip(){return v(this,ko)}set allowGzip(t){C(this,ko,!!t)}get allowInsecureAuthentication(){return!!v(this,Fo)}set allowInsecureAuthentication(t){C(this,Fo,!!t)}get timeout(){return v(this,zo)}set timeout(t){D(t>=0,"timeout must be non-zero","timeout",t),C(this,zo,t)}get preflightFunc(){return v(this,bs)||null}set preflightFunc(t){C(this,bs,t)}get processFunc(){return v(this,Ss)||null}set processFunc(t){C(this,Ss,t)}get retryFunc(){return v(this,Ms)||null}set retryFunc(t){C(this,Ms,t)}get getUrlFunc(){return v(this,Sr)||im}set getUrlFunc(t){C(this,Sr,t)}toString(){return`<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${v(this,Ge)?gt(v(this,Ge)):"null"}>`}setThrottleParams(t){t.slotInterval!=null&&(v(this,Zn).slotInterval=t.slotInterval),t.maxAttempts!=null&&(v(this,Zn).maxAttempts=t.maxAttempts)}send(){return nt(v(this,di)==null,"request already sent","UNSUPPORTED_OPERATION",{operation:"fetchRequest.send"}),C(this,di,new qb(this)),dt(this,Ts,Za).call(this,0,rm()+this.timeout,0,this,new Xr(0,"",{},null,this))}cancel(){nt(v(this,di)!=null,"request has not been sent","UNSUPPORTED_OPERATION",{operation:"fetchRequest.cancel"});const t=n0.get(this);if(!t)throw new Error("missing signal; should not happen");t()}redirect(t){const e=this.url.split(":")[0].toLowerCase(),n=t.split(":")[0].toLowerCase();nt(this.method==="GET"&&(e!=="https"||n!=="http")&&t.match(/^https?:/),"unsupported redirect","UNSUPPORTED_OPERATION",{operation:`redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(t)})`});const r=new uu(t);return r.method="GET",r.allowGzip=this.allowGzip,r.timeout=this.timeout,C(r,qn,Object.assign({},v(this,qn))),v(this,Ge)&&C(r,Ge,new Uint8Array(v(this,Ge))),C(r,Tn,v(this,Tn)),r}clone(){const t=new uu(this.url);return C(t,Gi,v(this,Gi)),v(this,Ge)&&C(t,Ge,v(this,Ge)),C(t,Tn,v(this,Tn)),C(t,qn,Object.assign({},v(this,qn))),C(t,Hi,v(this,Hi)),this.allowGzip&&(t.allowGzip=!0),t.timeout=this.timeout,this.allowInsecureAuthentication&&(t.allowInsecureAuthentication=!0),C(t,bs,v(this,bs)),C(t,Ss,v(this,Ss)),C(t,Ms,v(this,Ms)),C(t,Zn,Object.assign({},v(this,Zn))),C(t,Sr,v(this,Sr)),t}static lockConfig(){vh=!0}static getGateway(t){return yl[t.toLowerCase()]||null}static registerGateway(t,e){if(t=t.toLowerCase(),t==="http"||t==="https")throw new Error(`cannot intercept ${t}; use registerGetUrl`);if(vh)throw new Error("gateways locked");yl[t]=e}static registerGetUrl(t){if(vh)throw new Error("gateways locked");im=t}static createGetUrlFunc(t){return $g(t)}static createDataGateway(){return t0}static createIpfsGatewayFunc(t){return e0(t)}};Fo=new WeakMap,ko=new WeakMap,qn=new WeakMap,Gi=new WeakMap,zo=new WeakMap,Go=new WeakMap,Ge=new WeakMap,Tn=new WeakMap,Hi=new WeakMap,bs=new WeakMap,Ss=new WeakMap,Ms=new WeakMap,di=new WeakMap,Zn=new WeakMap,Sr=new WeakMap,Ts=new WeakSet,Za=async function(t,e,n,r,s){var u,h,f;if(t>=v(this,Zn).maxAttempts)return s.makeServerError("exceeded maximum retry limit");nt(rm()<=e,"timeout","TIMEOUT",{operation:"request.send",reason:"timeout",request:r}),n>0&&await jb(n);let o=this.clone();const a=(o.url.split(":")[0]||"").toLowerCase();if(a in yl){const d=await yl[a](o.url,vl(v(r,di)));if(d instanceof Xr){let g=d;if(this.processFunc){vl(v(r,di));try{g=await this.processFunc(o,g)}catch(y){(y.throttle==null||typeof y.stall!="number")&&g.makeServerError("error in post-processing function",y).assertOk()}}return g}o=d}this.preflightFunc&&(o=await this.preflightFunc(o));const c=await this.getUrlFunc(o,vl(v(r,di)));let l=new Xr(c.statusCode,c.statusMessage,c.headers,c.body,r);if(l.statusCode===301||l.statusCode===302){try{const d=l.headers.location||"";return dt(u=o.redirect(d),Ts,Za).call(u,t+1,e,0,r,l)}catch{}return l}else if(l.statusCode===429&&(this.retryFunc==null||await this.retryFunc(o,l,t))){const d=l.headers["retry-after"];let g=v(this,Zn).slotInterval*Math.trunc(Math.random()*Math.pow(2,t));return typeof d=="string"&&d.match(/^[1-9][0-9]*$/)&&(g=parseInt(d)),dt(h=o.clone(),Ts,Za).call(h,t+1,e,g,r,l)}if(this.processFunc){vl(v(r,di));try{l=await this.processFunc(o,l)}catch(d){(d.throttle==null||typeof d.stall!="number")&&l.makeServerError("error in post-processing function",d).assertOk();let g=v(this,Zn).slotInterval*Math.trunc(Math.random()*Math.pow(2,t));return d.stall>=0&&(g=d.stall),dt(f=o.clone(),Ts,Za).call(f,t+1,e,g,r,l)}}return l};let Yr=uu;var wc,Ec,bc,Cn,Ho,Cs;const Bd=class Bd{constructor(t,e,n,r,s){Y(this,wc);Y(this,Ec);Y(this,bc);Y(this,Cn);Y(this,Ho);Y(this,Cs);C(this,wc,t),C(this,Ec,e),C(this,bc,Object.keys(n).reduce((o,a)=>(o[a.toLowerCase()]=String(n[a]),o),{})),C(this,Cn,r==null?null:new Uint8Array(r)),C(this,Ho,s||null),C(this,Cs,{message:""})}toString(){return`<FetchResponse status=${this.statusCode} body=${v(this,Cn)?gt(v(this,Cn)):"null"}>`}get statusCode(){return v(this,wc)}get statusMessage(){return v(this,Ec)}get headers(){return Object.assign({},v(this,bc))}get body(){return v(this,Cn)==null?null:new Uint8Array(v(this,Cn))}get bodyText(){try{return v(this,Cn)==null?"":jl(v(this,Cn))}catch{nt(!1,"response body is not valid UTF-8 data","UNSUPPORTED_OPERATION",{operation:"bodyText",info:{response:this}})}}get bodyJson(){try{return JSON.parse(this.bodyText)}catch{nt(!1,"response body is not valid JSON","UNSUPPORTED_OPERATION",{operation:"bodyJson",info:{response:this}})}}[Symbol.iterator](){const t=this.headers,e=Object.keys(t);let n=0;return{next:()=>{if(n<e.length){const r=e[n++];return{value:[r,t[r]],done:!1}}return{value:void 0,done:!0}}}}makeServerError(t,e){let n;t?n=`CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${t})`:(t=`${this.statusCode} ${this.statusMessage}`,n=`CLIENT ESCALATED SERVER ERROR (${t})`);const r=new Bd(599,n,this.headers,this.body,v(this,Ho)||void 0);return C(r,Cs,{message:t,error:e}),r}throwThrottleError(t,e){e==null?e=-1:D(Number.isInteger(e)&&e>=0,"invalid stall timeout","stall",e);const n=new Error(t||"throttling requests");throw Bt(n,{stall:e,throttle:!0}),n}getHeader(t){return this.headers[t.toLowerCase()]}hasBody(){return v(this,Cn)!=null}get request(){return v(this,Ho)}ok(){return v(this,Cs).message===""&&this.statusCode>=200&&this.statusCode<300}assertOk(){if(this.ok())return;let{message:t,error:e}=v(this,Cs);t===""&&(t=`server response ${this.statusCode} ${this.statusMessage}`);let n=null;this.request&&(n=this.request.url);let r=null;try{v(this,Cn)&&(r=jl(v(this,Cn)))}catch{}nt(!1,t,"SERVER_ERROR",{request:this.request||"unknown request",response:this,error:e,info:{requestUrl:n,responseBody:r,responseStatus:`${this.statusCode} ${this.statusMessage}`}})}};wc=new WeakMap,Ec=new WeakMap,bc=new WeakMap,Cn=new WeakMap,Ho=new WeakMap,Cs=new WeakMap;let Xr=Bd;function rm(){return new Date().getTime()}function Zb(i){return ir(i.replace(/%([0-9a-f][0-9a-f])/gi,(t,e)=>String.fromCharCode(parseInt(e,16))))}function jb(i){return new Promise(t=>setTimeout(t,i))}function $b(i){let t=i.toString(16);for(;t.length<2;)t="0"+t;return"0x"+t}function sm(i,t,e){let n=0;for(let r=0;r<e;r++)n=n*256+i[t+r];return n}function om(i,t,e,n){const r=[];for(;e<t+1+n;){const s=i0(i,e);r.push(s.result),e+=s.consumed,nt(e<=t+1+n,"child data too short","BUFFER_OVERRUN",{buffer:i,length:n,offset:t})}return{consumed:1+n,result:r}}function i0(i,t){nt(i.length!==0,"data too short","BUFFER_OVERRUN",{buffer:i,length:0,offset:1});const e=n=>{nt(n<=i.length,"data short segment too short","BUFFER_OVERRUN",{buffer:i,length:i.length,offset:n})};if(i[t]>=248){const n=i[t]-247;e(t+1+n);const r=sm(i,t+1,n);return e(t+1+n+r),om(i,t,t+1+n,n+r)}else if(i[t]>=192){const n=i[t]-192;return e(t+1+n),om(i,t,t+1,n)}else if(i[t]>=184){const n=i[t]-183;e(t+1+n);const r=sm(i,t+1,n);e(t+1+n+r);const s=gt(i.slice(t+1+n,t+1+n+r));return{consumed:1+n+r,result:s}}else if(i[t]>=128){const n=i[t]-128;e(t+1+n);const r=gt(i.slice(t+1,t+1+n));return{consumed:1+n,result:r}}return{consumed:1,result:$b(i[t])}}function zc(i){const t=qt(i,"data"),e=i0(t,0);return D(e.consumed===t.length,"unexpected junk after rlp payload","data",i),e.result}function am(i){const t=[];for(;i;)t.unshift(i&255),i>>=8;return t}function r0(i){if(Array.isArray(i)){let n=[];if(i.forEach(function(s){n=n.concat(r0(s))}),n.length<=55)return n.unshift(192+n.length),n;const r=am(n.length);return r.unshift(247+r.length),r.concat(n)}const t=Array.prototype.slice.call(qt(i,"object"));if(t.length===1&&t[0]<=127)return t;if(t.length<=55)return t.unshift(128+t.length),t;const e=am(t.length);return e.unshift(183+e.length),e.concat(t)}const cm="0123456789abcdef";function rr(i){let t="0x";for(const e of r0(i))t+=cm[e>>4],t+=cm[e&15];return t}const ln=32,yf=new Uint8Array(ln),tS=["then"],_l={},s0=new WeakMap;function fs(i){return s0.get(i)}function lm(i,t){s0.set(i,t)}function Ja(i,t){const e=new Error(`deferred error during ABI decoding triggered accessing ${i}`);throw e.error=t,e}function vf(i,t,e){return i.indexOf(null)>=0?t.map((n,r)=>n instanceof Pa?vf(fs(n),n,e):n):i.reduce((n,r,s)=>{let o=t.getValue(r);return r in n||(e&&o instanceof Pa&&(o=vf(fs(o),o,e)),n[r]=o),n},{})}var Vo;const Co=class Co extends Array{constructor(...e){const n=e[0];let r=e[1],s=(e[2]||[]).slice(),o=!0;n!==_l&&(r=e,s=[],o=!1);super(r.length);Y(this,Vo);r.forEach((l,u)=>{this[u]=l});const a=s.reduce((l,u)=>(typeof u=="string"&&l.set(u,(l.get(u)||0)+1),l),new Map);if(lm(this,Object.freeze(r.map((l,u)=>{const h=s[u];return h!=null&&a.get(h)===1?h:null}))),C(this,Vo,[]),v(this,Vo)==null&&v(this,Vo),!o)return;Object.freeze(this);const c=new Proxy(this,{get:(l,u,h)=>{if(typeof u=="string"){if(u.match(/^[0-9]+$/)){const d=Zt(u,"%index");if(d<0||d>=this.length)throw new RangeError("out of result range");const g=l[d];return g instanceof Error&&Ja(`index ${d}`,g),g}if(tS.indexOf(u)>=0)return Reflect.get(l,u,h);const f=l[u];if(f instanceof Function)return function(...d){return f.apply(this===h?l:this,d)};if(!(u in l))return l.getValue.apply(this===h?l:this,[u])}return Reflect.get(l,u,h)}});return lm(c,fs(this)),c}toArray(e){const n=[];return this.forEach((r,s)=>{r instanceof Error&&Ja(`index ${s}`,r),e&&r instanceof Co&&(r=r.toArray(e)),n.push(r)}),n}toObject(e){const n=fs(this);return n.reduce((r,s,o)=>(nt(s!=null,`value at index ${o} unnamed`,"UNSUPPORTED_OPERATION",{operation:"toObject()"}),vf(n,this,e)),{})}slice(e,n){e==null&&(e=0),e<0&&(e+=this.length,e<0&&(e=0)),n==null&&(n=this.length),n<0&&(n+=this.length,n<0&&(n=0)),n>this.length&&(n=this.length);const r=fs(this),s=[],o=[];for(let a=e;a<n;a++)s.push(this[a]),o.push(r[a]);return new Co(_l,s,o)}filter(e,n){const r=fs(this),s=[],o=[];for(let a=0;a<this.length;a++){const c=this[a];c instanceof Error&&Ja(`index ${a}`,c),e.call(n,c,a,this)&&(s.push(c),o.push(r[a]))}return new Co(_l,s,o)}map(e,n){const r=[];for(let s=0;s<this.length;s++){const o=this[s];o instanceof Error&&Ja(`index ${s}`,o),r.push(e.call(n,o,s,this))}return r}getValue(e){const n=fs(this).indexOf(e);if(n===-1)return;const r=this[n];return r instanceof Error&&Ja(`property ${JSON.stringify(e)}`,r.error),r}static fromItems(e,n){return new Co(_l,e,n)}};Vo=new WeakMap;let Pa=Co;function um(i){let t=Oe(i);return nt(t.length<=ln,"value out-of-bounds","BUFFER_OVERRUN",{buffer:t,length:ln,offset:t.length}),t.length!==ln&&(t=cn(xe([yf.slice(t.length%ln),t]))),t}class ur{constructor(t,e,n,r){H(this,"name");H(this,"type");H(this,"localName");H(this,"dynamic");Bt(this,{name:t,type:e,localName:n,dynamic:r},{name:"string",type:"string",localName:"string",dynamic:"boolean"})}_throwError(t,e){D(!1,t,this.localName,e)}}var Vi,Rs,Wo,Ll;class _f{constructor(){Y(this,Wo);Y(this,Vi);Y(this,Rs);C(this,Vi,[]),C(this,Rs,0)}get data(){return xe(v(this,Vi))}get length(){return v(this,Rs)}appendWriter(t){return dt(this,Wo,Ll).call(this,cn(t.data))}writeBytes(t){let e=cn(t);const n=e.length%ln;return n&&(e=cn(xe([e,yf.slice(n)]))),dt(this,Wo,Ll).call(this,e)}writeValue(t){return dt(this,Wo,Ll).call(this,um(t))}writeUpdatableValue(){const t=v(this,Vi).length;return v(this,Vi).push(yf),C(this,Rs,v(this,Rs)+ln),e=>{v(this,Vi)[t]=um(e)}}}Vi=new WeakMap,Rs=new WeakMap,Wo=new WeakSet,Ll=function(t){return v(this,Vi).push(t),C(this,Rs,v(this,Rs)+t.length),t.length};var mn,Rn,Ps,Is,Mr,qs,Af,o0;const Fd=class Fd{constructor(t,e,n){Y(this,qs);H(this,"allowLoose");Y(this,mn);Y(this,Rn);Y(this,Ps);Y(this,Is);Y(this,Mr);Bt(this,{allowLoose:!!e}),C(this,mn,cn(t)),C(this,Ps,0),C(this,Is,null),C(this,Mr,n??1024),C(this,Rn,0)}get data(){return gt(v(this,mn))}get dataLength(){return v(this,mn).length}get consumed(){return v(this,Rn)}get bytes(){return new Uint8Array(v(this,mn))}subReader(t){const e=new Fd(v(this,mn).slice(v(this,Rn)+t),this.allowLoose,v(this,Mr));return C(e,Is,this),e}readBytes(t,e){let n=dt(this,qs,o0).call(this,0,t,!!e);return dt(this,qs,Af).call(this,t),C(this,Rn,v(this,Rn)+n.length),n.slice(0,t)}readValue(){return _d(this.readBytes(ln))}readIndex(){return Bb(this.readBytes(ln))}};mn=new WeakMap,Rn=new WeakMap,Ps=new WeakMap,Is=new WeakMap,Mr=new WeakMap,qs=new WeakSet,Af=function(t){var e;if(v(this,Is))return dt(e=v(this,Is),qs,Af).call(e,t);C(this,Ps,v(this,Ps)+t),nt(v(this,Mr)<1||v(this,Ps)<=v(this,Mr)*this.dataLength,`compressed ABI data exceeds inflation ratio of ${v(this,Mr)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,"BUFFER_OVERRUN",{buffer:cn(v(this,mn)),offset:v(this,Rn),length:t,info:{bytesRead:v(this,Ps),dataLength:this.dataLength}})},o0=function(t,e,n){let r=Math.ceil(e/ln)*ln;return v(this,Rn)+r>v(this,mn).length&&(this.allowLoose&&n&&v(this,Rn)+e<=v(this,mn).length?r=e:nt(!1,"data out-of-bounds","BUFFER_OVERRUN",{buffer:cn(v(this,mn)),length:v(this,mn).length,offset:v(this,Rn)+r})),v(this,mn).slice(v(this,Rn),v(this,Rn)+r)};let xf=Fd;function $l(i){if(!Number.isSafeInteger(i)||i<0)throw new Error(`Wrong positive integer: ${i}`)}function xd(i,...t){if(!(i instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(i.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${i.length}`)}function eS(i){if(typeof i!="function"||typeof i.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");$l(i.outputLen),$l(i.blockLen)}function Ia(i,t=!0){if(i.destroyed)throw new Error("Hash instance has been destroyed");if(t&&i.finished)throw new Error("Hash#digest() has already been called")}function a0(i,t){xd(i);const e=t.outputLen;if(i.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}const _h=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const c0=i=>i instanceof Uint8Array,nS=i=>new Uint32Array(i.buffer,i.byteOffset,Math.floor(i.byteLength/4)),xh=i=>new DataView(i.buffer,i.byteOffset,i.byteLength),ui=(i,t)=>i<<32-t|i>>>t,iS=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!iS)throw new Error("Non little-endian hardware is not supported");function rS(i){if(typeof i!="string")throw new Error(`utf8ToBytes expected string, got ${typeof i}`);return new Uint8Array(new TextEncoder().encode(i))}function wu(i){if(typeof i=="string"&&(i=rS(i)),!c0(i))throw new Error(`expected Uint8Array, got ${typeof i}`);return i}function sS(...i){const t=new Uint8Array(i.reduce((n,r)=>n+r.length,0));let e=0;return i.forEach(n=>{if(!c0(n))throw new Error("Uint8Array expected");t.set(n,e),e+=n.length}),t}class Ad{clone(){return this._cloneInto()}}function wd(i){const t=n=>i().update(wu(n)).digest(),e=i();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>i(),t}function oS(i=32){if(_h&&typeof _h.getRandomValues=="function")return _h.getRandomValues(new Uint8Array(i));throw new Error("crypto.getRandomValues must be defined")}class l0 extends Ad{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,eS(t);const n=wu(e);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const r=this.blockLen,s=new Uint8Array(r);s.set(n.length>r?t.create().update(n).digest():n);for(let o=0;o<s.length;o++)s[o]^=54;this.iHash.update(s),this.oHash=t.create();for(let o=0;o<s.length;o++)s[o]^=106;this.oHash.update(s),s.fill(0)}update(t){return Ia(this),this.iHash.update(t),this}digestInto(t){Ia(this),xd(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:r,destroyed:s,blockLen:o,outputLen:a}=this;return t=t,t.finished=r,t.destroyed=s,t.blockLen=o,t.outputLen=a,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const u0=(i,t,e)=>new l0(i,t).update(e).digest();u0.create=(i,t)=>new l0(i,t);function aS(i,t,e,n){if(typeof i.setBigUint64=="function")return i.setBigUint64(t,e,n);const r=BigInt(32),s=BigInt(4294967295),o=Number(e>>r&s),a=Number(e&s),c=n?4:0,l=n?0:4;i.setUint32(t+c,o,n),i.setUint32(t+l,a,n)}class h0 extends Ad{constructor(t,e,n,r){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=r,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=xh(this.buffer)}update(t){Ia(this);const{view:e,buffer:n,blockLen:r}=this;t=wu(t);const s=t.length;for(let o=0;o<s;){const a=Math.min(r-this.pos,s-o);if(a===r){const c=xh(t);for(;r<=s-o;o+=r)this.process(c,o);continue}n.set(t.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===r&&(this.process(e,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Ia(this),a0(t,this),this.finished=!0;const{buffer:e,view:n,blockLen:r,isLE:s}=this;let{pos:o}=this;e[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>r-o&&(this.process(n,0),o=0);for(let h=o;h<r;h++)e[h]=0;aS(n,r-8,BigInt(this.length*8),s),this.process(n,0);const a=xh(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let h=0;h<l;h++)a.setUint32(4*h,u[h],s)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:r,finished:s,destroyed:o,pos:a}=this;return t.length=r,t.pos=a,t.finished=s,t.destroyed=o,r%e&&t.buffer.set(n),t}}const cS=(i,t,e)=>i&t^~i&e,lS=(i,t,e)=>i&t^i&e^t&e,uS=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),vr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),_r=new Uint32Array(64);class hS extends h0{constructor(){super(64,32,8,!1),this.A=vr[0]|0,this.B=vr[1]|0,this.C=vr[2]|0,this.D=vr[3]|0,this.E=vr[4]|0,this.F=vr[5]|0,this.G=vr[6]|0,this.H=vr[7]|0}get(){const{A:t,B:e,C:n,D:r,E:s,F:o,G:a,H:c}=this;return[t,e,n,r,s,o,a,c]}set(t,e,n,r,s,o,a,c){this.A=t|0,this.B=e|0,this.C=n|0,this.D=r|0,this.E=s|0,this.F=o|0,this.G=a|0,this.H=c|0}process(t,e){for(let h=0;h<16;h++,e+=4)_r[h]=t.getUint32(e,!1);for(let h=16;h<64;h++){const f=_r[h-15],d=_r[h-2],g=ui(f,7)^ui(f,18)^f>>>3,y=ui(d,17)^ui(d,19)^d>>>10;_r[h]=y+_r[h-7]+g+_r[h-16]|0}let{A:n,B:r,C:s,D:o,E:a,F:c,G:l,H:u}=this;for(let h=0;h<64;h++){const f=ui(a,6)^ui(a,11)^ui(a,25),d=u+f+cS(a,c,l)+uS[h]+_r[h]|0,y=(ui(n,2)^ui(n,13)^ui(n,22))+lS(n,r,s)|0;u=l,l=c,c=a,a=o+d|0,o=s,s=r,r=n,n=d+y|0}n=n+this.A|0,r=r+this.B|0,s=s+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(n,r,s,o,a,c,l,u)}roundClean(){_r.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const f0=wd(()=>new hS),xl=BigInt(2**32-1),wf=BigInt(32);function d0(i,t=!1){return t?{h:Number(i&xl),l:Number(i>>wf&xl)}:{h:Number(i>>wf&xl)|0,l:Number(i&xl)|0}}function p0(i,t=!1){let e=new Uint32Array(i.length),n=new Uint32Array(i.length);for(let r=0;r<i.length;r++){const{h:s,l:o}=d0(i[r],t);[e[r],n[r]]=[s,o]}return[e,n]}const fS=(i,t)=>BigInt(i>>>0)<<wf|BigInt(t>>>0),dS=(i,t,e)=>i>>>e,pS=(i,t,e)=>i<<32-e|t>>>e,mS=(i,t,e)=>i>>>e|t<<32-e,gS=(i,t,e)=>i<<32-e|t>>>e,yS=(i,t,e)=>i<<64-e|t>>>e-32,vS=(i,t,e)=>i>>>e-32|t<<64-e,_S=(i,t)=>t,xS=(i,t)=>i,m0=(i,t,e)=>i<<e|t>>>32-e,g0=(i,t,e)=>t<<e|i>>>32-e,y0=(i,t,e)=>t<<e-32|i>>>64-e,v0=(i,t,e)=>i<<e-32|t>>>64-e;function AS(i,t,e,n){const r=(t>>>0)+(n>>>0);return{h:i+e+(r/2**32|0)|0,l:r|0}}const wS=(i,t,e)=>(i>>>0)+(t>>>0)+(e>>>0),ES=(i,t,e,n)=>t+e+n+(i/2**32|0)|0,bS=(i,t,e,n)=>(i>>>0)+(t>>>0)+(e>>>0)+(n>>>0),SS=(i,t,e,n,r)=>t+e+n+r+(i/2**32|0)|0,MS=(i,t,e,n,r)=>(i>>>0)+(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),TS=(i,t,e,n,r,s)=>t+e+n+r+s+(i/2**32|0)|0,Jt={fromBig:d0,split:p0,toBig:fS,shrSH:dS,shrSL:pS,rotrSH:mS,rotrSL:gS,rotrBH:yS,rotrBL:vS,rotr32H:_S,rotr32L:xS,rotlSH:m0,rotlSL:g0,rotlBH:y0,rotlBL:v0,add:AS,add3L:wS,add3H:ES,add4L:bS,add4H:SS,add5H:TS,add5L:MS},[CS,RS]=Jt.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(i=>BigInt(i))),xr=new Uint32Array(80),Ar=new Uint32Array(80);class PS extends h0{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:e,Bh:n,Bl:r,Ch:s,Cl:o,Dh:a,Dl:c,Eh:l,El:u,Fh:h,Fl:f,Gh:d,Gl:g,Hh:y,Hl:m}=this;return[t,e,n,r,s,o,a,c,l,u,h,f,d,g,y,m]}set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,y,m){this.Ah=t|0,this.Al=e|0,this.Bh=n|0,this.Bl=r|0,this.Ch=s|0,this.Cl=o|0,this.Dh=a|0,this.Dl=c|0,this.Eh=l|0,this.El=u|0,this.Fh=h|0,this.Fl=f|0,this.Gh=d|0,this.Gl=g|0,this.Hh=y|0,this.Hl=m|0}process(t,e){for(let _=0;_<16;_++,e+=4)xr[_]=t.getUint32(e),Ar[_]=t.getUint32(e+=4);for(let _=16;_<80;_++){const S=xr[_-15]|0,N=Ar[_-15]|0,M=Jt.rotrSH(S,N,1)^Jt.rotrSH(S,N,8)^Jt.shrSH(S,N,7),T=Jt.rotrSL(S,N,1)^Jt.rotrSL(S,N,8)^Jt.shrSL(S,N,7),I=xr[_-2]|0,b=Ar[_-2]|0,x=Jt.rotrSH(I,b,19)^Jt.rotrBH(I,b,61)^Jt.shrSH(I,b,6),R=Jt.rotrSL(I,b,19)^Jt.rotrBL(I,b,61)^Jt.shrSL(I,b,6),V=Jt.add4L(T,R,Ar[_-7],Ar[_-16]),G=Jt.add4H(V,M,x,xr[_-7],xr[_-16]);xr[_]=G|0,Ar[_]=V|0}let{Ah:n,Al:r,Bh:s,Bl:o,Ch:a,Cl:c,Dh:l,Dl:u,Eh:h,El:f,Fh:d,Fl:g,Gh:y,Gl:m,Hh:p,Hl:A}=this;for(let _=0;_<80;_++){const S=Jt.rotrSH(h,f,14)^Jt.rotrSH(h,f,18)^Jt.rotrBH(h,f,41),N=Jt.rotrSL(h,f,14)^Jt.rotrSL(h,f,18)^Jt.rotrBL(h,f,41),M=h&d^~h&y,T=f&g^~f&m,I=Jt.add5L(A,N,T,RS[_],Ar[_]),b=Jt.add5H(I,p,S,M,CS[_],xr[_]),x=I|0,R=Jt.rotrSH(n,r,28)^Jt.rotrBH(n,r,34)^Jt.rotrBH(n,r,39),V=Jt.rotrSL(n,r,28)^Jt.rotrBL(n,r,34)^Jt.rotrBL(n,r,39),G=n&s^n&a^s&a,Z=r&o^r&c^o&c;p=y|0,A=m|0,y=d|0,m=g|0,d=h|0,g=f|0,{h,l:f}=Jt.add(l|0,u|0,b|0,x|0),l=a|0,u=c|0,a=s|0,c=o|0,s=n|0,o=r|0;const U=Jt.add3L(x,V,Z);n=Jt.add3H(U,b,R,G),r=U|0}({h:n,l:r}=Jt.add(this.Ah|0,this.Al|0,n|0,r|0)),{h:s,l:o}=Jt.add(this.Bh|0,this.Bl|0,s|0,o|0),{h:a,l:c}=Jt.add(this.Ch|0,this.Cl|0,a|0,c|0),{h:l,l:u}=Jt.add(this.Dh|0,this.Dl|0,l|0,u|0),{h,l:f}=Jt.add(this.Eh|0,this.El|0,h|0,f|0),{h:d,l:g}=Jt.add(this.Fh|0,this.Fl|0,d|0,g|0),{h:y,l:m}=Jt.add(this.Gh|0,this.Gl|0,y|0,m|0),{h:p,l:A}=Jt.add(this.Hh|0,this.Hl|0,p|0,A|0),this.set(n,r,s,o,a,c,l,u,h,f,d,g,y,m,p,A)}roundClean(){xr.fill(0),Ar.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}const IS=wd(()=>new PS);function LS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}const hm=LS();hm.crypto||hm.msCrypto;function NS(i){switch(i){case"sha256":return f0.create();case"sha512":return IS.create()}D(!1,"invalid hashing algorithm name","algorithm",i)}const[_0,x0,A0]=[[],[],[]],US=BigInt(0),Ya=BigInt(1),DS=BigInt(2),OS=BigInt(7),BS=BigInt(256),FS=BigInt(113);for(let i=0,t=Ya,e=1,n=0;i<24;i++){[e,n]=[n,(2*e+3*n)%5],_0.push(2*(5*n+e)),x0.push((i+1)*(i+2)/2%64);let r=US;for(let s=0;s<7;s++)t=(t<<Ya^(t>>OS)*FS)%BS,t&DS&&(r^=Ya<<(Ya<<BigInt(s))-Ya);A0.push(r)}const[kS,zS]=p0(A0,!0),fm=(i,t,e)=>e>32?y0(i,t,e):m0(i,t,e),dm=(i,t,e)=>e>32?v0(i,t,e):g0(i,t,e);function GS(i,t=24){const e=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let o=0;o<10;o++)e[o]=i[o]^i[o+10]^i[o+20]^i[o+30]^i[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=e[c],u=e[c+1],h=fm(l,u,1)^e[a],f=dm(l,u,1)^e[a+1];for(let d=0;d<50;d+=10)i[o+d]^=h,i[o+d+1]^=f}let r=i[2],s=i[3];for(let o=0;o<24;o++){const a=x0[o],c=fm(r,s,a),l=dm(r,s,a),u=_0[o];r=i[u],s=i[u+1],i[u]=c,i[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)e[a]=i[o+a];for(let a=0;a<10;a++)i[o+a]^=~e[(a+2)%10]&e[(a+4)%10]}i[0]^=kS[n],i[1]^=zS[n]}e.fill(0)}class Ed extends Ad{constructor(t,e,n,r=!1,s=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=n,this.enableXOF=r,this.rounds=s,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,$l(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=nS(this.state)}keccak(){GS(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){Ia(this);const{blockLen:e,state:n}=this;t=wu(t);const r=t.length;for(let s=0;s<r;){const o=Math.min(e-this.pos,r-s);for(let a=0;a<o;a++)n[this.pos++]^=t[s++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:e,pos:n,blockLen:r}=this;t[n]^=e,e&128&&n===r-1&&this.keccak(),t[r-1]^=128,this.keccak()}writeInto(t){Ia(this,!1),xd(t),this.finish();const e=this.state,{blockLen:n}=this;for(let r=0,s=t.length;r<s;){this.posOut>=n&&this.keccak();const o=Math.min(n-this.posOut,s-r);t.set(e.subarray(this.posOut,this.posOut+o),r),this.posOut+=o,r+=o}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return $l(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(a0(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:e,suffix:n,outputLen:r,rounds:s,enableXOF:o}=this;return t||(t=new Ed(e,n,r,o,s)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=s,t.suffix=n,t.outputLen=r,t.enableXOF=o,t.destroyed=this.destroyed,t}}const HS=(i,t,e)=>wd(()=>new Ed(t,i,e)),VS=HS(1,136,256/8);let w0=!1;const E0=function(i){return VS(i)};let b0=E0;function De(i){const t=qt(i,"data");return gt(b0(t))}De._=E0;De.lock=function(){w0=!0};De.register=function(i){if(w0)throw new TypeError("keccak256 is locked");b0=i};Object.freeze(De);const S0=function(i){return NS("sha256").update(i).digest()};let M0=S0,T0=!1;function Fa(i){const t=qt(i,"data");return gt(M0(t))}Fa._=S0;Fa.lock=function(){T0=!0};Fa.register=function(i){if(T0)throw new Error("sha256 is locked");M0=i};Object.freeze(Fa);Object.freeze(Fa);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);const WS=BigInt(1),XS=BigInt(2),Eu=i=>i instanceof Uint8Array,KS=Array.from({length:256},(i,t)=>t.toString(16).padStart(2,"0"));function La(i){if(!Eu(i))throw new Error("Uint8Array expected");let t="";for(let e=0;e<i.length;e++)t+=KS[i[e]];return t}function bd(i){if(typeof i!="string")throw new Error("hex string expected, got "+typeof i);return BigInt(i===""?"0":`0x${i}`)}function uc(i){if(typeof i!="string")throw new Error("hex string expected, got "+typeof i);const t=i.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const e=new Uint8Array(t/2);for(let n=0;n<e.length;n++){const r=n*2,s=i.slice(r,r+2),o=Number.parseInt(s,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");e[n]=o}return e}function Hs(i){return bd(La(i))}function Sd(i){if(!Eu(i))throw new Error("Uint8Array expected");return bd(La(Uint8Array.from(i).reverse()))}function Na(i,t){return uc(i.toString(16).padStart(t*2,"0"))}function Md(i,t){return Na(i,t).reverse()}function Qn(i,t,e){let n;if(typeof t=="string")try{n=uc(t)}catch(s){throw new Error(`${i} must be valid hex string, got "${t}". Cause: ${s}`)}else if(Eu(t))n=Uint8Array.from(t);else throw new Error(`${i} must be hex string or Uint8Array`);const r=n.length;if(typeof e=="number"&&r!==e)throw new Error(`${i} expected ${e} bytes, got ${r}`);return n}function hc(...i){const t=new Uint8Array(i.reduce((n,r)=>n+r.length,0));let e=0;return i.forEach(n=>{if(!Eu(n))throw new Error("Uint8Array expected");t.set(n,e),e+=n.length}),t}const Td=i=>(XS<<BigInt(i-1))-WS,Ah=i=>new Uint8Array(i),pm=i=>Uint8Array.from(i);function C0(i,t,e){if(typeof i!="number"||i<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof e!="function")throw new Error("hmacFn must be a function");let n=Ah(i),r=Ah(i),s=0;const o=()=>{n.fill(1),r.fill(0),s=0},a=(...h)=>e(r,n,...h),c=(h=Ah())=>{r=a(pm([0]),h),n=a(),h.length!==0&&(r=a(pm([1]),h),n=a())},l=()=>{if(s++>=1e3)throw new Error("drbg: tried 1000 values");let h=0;const f=[];for(;h<t;){n=a();const d=n.slice();f.push(d),h+=n.length}return hc(...f)};return(h,f)=>{o(),c(h);let d;for(;!(d=f(l()));)c();return o(),d}}const JS={bigint:i=>typeof i=="bigint",function:i=>typeof i=="function",boolean:i=>typeof i=="boolean",string:i=>typeof i=="string",stringOrUint8Array:i=>typeof i=="string"||i instanceof Uint8Array,isSafeInteger:i=>Number.isSafeInteger(i),array:i=>Array.isArray(i),field:(i,t)=>t.Fp.isValid(i),hash:i=>typeof i=="function"&&Number.isSafeInteger(i.outputLen)};function Gc(i,t,e={}){const n=(r,s,o)=>{const a=JS[s];if(typeof a!="function")throw new Error(`Invalid validator "${s}", expected function`);const c=i[r];if(!(o&&c===void 0)&&!a(c,i))throw new Error(`Invalid param ${String(r)}=${c} (${typeof c}), expected ${s}`)};for(const[r,s]of Object.entries(t))n(r,s,!1);for(const[r,s]of Object.entries(e))n(r,s,!0);return i}const YS=Object.freeze(Object.defineProperty({__proto__:null,bitMask:Td,bytesToHex:La,bytesToNumberBE:Hs,bytesToNumberLE:Sd,concatBytes:hc,createHmacDrbg:C0,ensureBytes:Qn,hexToBytes:uc,hexToNumber:bd,numberToBytesBE:Na,numberToBytesLE:Md,validateObject:Gc},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ve=BigInt(0),Pe=BigInt(1),ds=BigInt(2),QS=BigInt(3),Ef=BigInt(4),mm=BigInt(5),gm=BigInt(8);BigInt(9);BigInt(16);function yn(i,t){const e=i%t;return e>=Ve?e:t+e}function qS(i,t,e){if(e<=Ve||t<Ve)throw new Error("Expected power/modulo > 0");if(e===Pe)return Ve;let n=Pe;for(;t>Ve;)t&Pe&&(n=n*i%e),i=i*i%e,t>>=Pe;return n}function Nn(i,t,e){let n=i;for(;t-- >Ve;)n*=n,n%=e;return n}function bf(i,t){if(i===Ve||t<=Ve)throw new Error(`invert: expected positive integers, got n=${i} mod=${t}`);let e=yn(i,t),n=t,r=Ve,s=Pe;for(;e!==Ve;){const a=n/e,c=n%e,l=r-s*a;n=e,e=c,r=s,s=l}if(n!==Pe)throw new Error("invert: does not exist");return yn(r,t)}function ZS(i){const t=(i-Pe)/ds;let e,n,r;for(e=i-Pe,n=0;e%ds===Ve;e/=ds,n++);for(r=ds;r<i&&qS(r,t,i)!==i-Pe;r++);if(n===1){const o=(i+Pe)/Ef;return function(c,l){const u=c.pow(l,o);if(!c.eql(c.sqr(u),l))throw new Error("Cannot find square root");return u}}const s=(e+Pe)/ds;return function(a,c){if(a.pow(c,t)===a.neg(a.ONE))throw new Error("Cannot find square root");let l=n,u=a.pow(a.mul(a.ONE,r),e),h=a.pow(c,s),f=a.pow(c,e);for(;!a.eql(f,a.ONE);){if(a.eql(f,a.ZERO))return a.ZERO;let d=1;for(let y=a.sqr(f);d<l&&!a.eql(y,a.ONE);d++)y=a.sqr(y);const g=a.pow(u,Pe<<BigInt(l-d-1));u=a.sqr(g),h=a.mul(h,g),f=a.mul(f,u),l=d}return h}}function jS(i){if(i%Ef===QS){const t=(i+Pe)/Ef;return function(n,r){const s=n.pow(r,t);if(!n.eql(n.sqr(s),r))throw new Error("Cannot find square root");return s}}if(i%gm===mm){const t=(i-mm)/gm;return function(n,r){const s=n.mul(r,ds),o=n.pow(s,t),a=n.mul(r,o),c=n.mul(n.mul(a,ds),o),l=n.mul(a,n.sub(c,n.ONE));if(!n.eql(n.sqr(l),r))throw new Error("Cannot find square root");return l}}return ZS(i)}const $S=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function tM(i){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},e=$S.reduce((n,r)=>(n[r]="function",n),t);return Gc(i,e)}function eM(i,t,e){if(e<Ve)throw new Error("Expected power > 0");if(e===Ve)return i.ONE;if(e===Pe)return t;let n=i.ONE,r=t;for(;e>Ve;)e&Pe&&(n=i.mul(n,r)),r=i.sqr(r),e>>=Pe;return n}function nM(i,t){const e=new Array(t.length),n=t.reduce((s,o,a)=>i.is0(o)?s:(e[a]=s,i.mul(s,o)),i.ONE),r=i.inv(n);return t.reduceRight((s,o,a)=>i.is0(o)?s:(e[a]=i.mul(s,e[a]),i.mul(s,o)),r),e}function R0(i,t){const e=t!==void 0?t:i.toString(2).length,n=Math.ceil(e/8);return{nBitLength:e,nByteLength:n}}function iM(i,t,e=!1,n={}){if(i<=Ve)throw new Error(`Expected Field ORDER > 0, got ${i}`);const{nBitLength:r,nByteLength:s}=R0(i,t);if(s>2048)throw new Error("Field lengths over 2048 bytes are not supported");const o=jS(i),a=Object.freeze({ORDER:i,BITS:r,BYTES:s,MASK:Td(r),ZERO:Ve,ONE:Pe,create:c=>yn(c,i),isValid:c=>{if(typeof c!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);return Ve<=c&&c<i},is0:c=>c===Ve,isOdd:c=>(c&Pe)===Pe,neg:c=>yn(-c,i),eql:(c,l)=>c===l,sqr:c=>yn(c*c,i),add:(c,l)=>yn(c+l,i),sub:(c,l)=>yn(c-l,i),mul:(c,l)=>yn(c*l,i),pow:(c,l)=>eM(a,c,l),div:(c,l)=>yn(c*bf(l,i),i),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>bf(c,i),sqrt:n.sqrt||(c=>o(a,c)),invertBatch:c=>nM(a,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>e?Md(c,s):Na(c,s),fromBytes:c=>{if(c.length!==s)throw new Error(`Fp.fromBytes: expected ${s}, got ${c.length}`);return e?Sd(c):Hs(c)}});return Object.freeze(a)}function P0(i){if(typeof i!="bigint")throw new Error("field order must be bigint");const t=i.toString(2).length;return Math.ceil(t/8)}function I0(i){const t=P0(i);return t+Math.ceil(t/2)}function rM(i,t,e=!1){const n=i.length,r=P0(t),s=I0(t);if(n<16||n<s||n>1024)throw new Error(`expected ${s}-1024 bytes of input, got ${n}`);const o=e?Hs(i):Sd(i),a=yn(o,t-Pe)+Pe;return e?Md(a,r):Na(a,r)}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const sM=BigInt(0),wh=BigInt(1);function oM(i,t){const e=(r,s)=>{const o=s.negate();return r?o:s},n=r=>{const s=Math.ceil(t/r)+1,o=2**(r-1);return{windows:s,windowSize:o}};return{constTimeNegate:e,unsafeLadder(r,s){let o=i.ZERO,a=r;for(;s>sM;)s&wh&&(o=o.add(a)),a=a.double(),s>>=wh;return o},precomputeWindow(r,s){const{windows:o,windowSize:a}=n(s),c=[];let l=r,u=l;for(let h=0;h<o;h++){u=l,c.push(u);for(let f=1;f<a;f++)u=u.add(l),c.push(u);l=u.double()}return c},wNAF(r,s,o){const{windows:a,windowSize:c}=n(r);let l=i.ZERO,u=i.BASE;const h=BigInt(2**r-1),f=2**r,d=BigInt(r);for(let g=0;g<a;g++){const y=g*c;let m=Number(o&h);o>>=d,m>c&&(m-=f,o+=wh);const p=y,A=y+Math.abs(m)-1,_=g%2!==0,S=m<0;m===0?u=u.add(e(_,s[p])):l=l.add(e(S,s[A]))}return{p:l,f:u}},wNAFCached(r,s,o,a){const c=r._WINDOW_SIZE||1;let l=s.get(r);return l||(l=this.precomputeWindow(r,c),c!==1&&s.set(r,a(l))),this.wNAF(c,l,o)}}}function L0(i){return tM(i.Fp),Gc(i,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...R0(i.n,i.nBitLength),...i,p:i.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function aM(i){const t=L0(i);Gc(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:e,Fp:n,a:r}=t;if(e){if(!n.eql(r,n.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof e!="object"||typeof e.beta!="bigint"||typeof e.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:cM,hexToBytes:lM}=YS,_s={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(i){const{Err:t}=_s;if(i.length<2||i[0]!==2)throw new t("Invalid signature integer tag");const e=i[1],n=i.subarray(2,e+2);if(!e||n.length!==e)throw new t("Invalid signature integer: wrong length");if(n[0]&128)throw new t("Invalid signature integer: negative");if(n[0]===0&&!(n[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:cM(n),l:i.subarray(e+2)}},toSig(i){const{Err:t}=_s,e=typeof i=="string"?lM(i):i;if(!(e instanceof Uint8Array))throw new Error("ui8a expected");let n=e.length;if(n<2||e[0]!=48)throw new t("Invalid signature tag");if(e[1]!==n-2)throw new t("Invalid signature: incorrect length");const{d:r,l:s}=_s._parseInt(e.subarray(2)),{d:o,l:a}=_s._parseInt(s);if(a.length)throw new t("Invalid signature: left bytes after parsing");return{r,s:o}},hexFromSig(i){const t=l=>Number.parseInt(l[0],16)&8?"00"+l:l,e=l=>{const u=l.toString(16);return u.length&1?`0${u}`:u},n=t(e(i.s)),r=t(e(i.r)),s=n.length/2,o=r.length/2,a=e(s),c=e(o);return`30${e(o+s+4)}02${c}${r}02${a}${n}`}},$i=BigInt(0),Gn=BigInt(1);BigInt(2);const ym=BigInt(3);BigInt(4);function uM(i){const t=aM(i),{Fp:e}=t,n=t.toBytes||((g,y,m)=>{const p=y.toAffine();return hc(Uint8Array.from([4]),e.toBytes(p.x),e.toBytes(p.y))}),r=t.fromBytes||(g=>{const y=g.subarray(1),m=e.fromBytes(y.subarray(0,e.BYTES)),p=e.fromBytes(y.subarray(e.BYTES,2*e.BYTES));return{x:m,y:p}});function s(g){const{a:y,b:m}=t,p=e.sqr(g),A=e.mul(p,g);return e.add(e.add(A,e.mul(g,y)),m)}if(!e.eql(e.sqr(t.Gy),s(t.Gx)))throw new Error("bad generator point: equation left != right");function o(g){return typeof g=="bigint"&&$i<g&&g<t.n}function a(g){if(!o(g))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function c(g){const{allowedPrivateKeyLengths:y,nByteLength:m,wrapPrivateKey:p,n:A}=t;if(y&&typeof g!="bigint"){if(g instanceof Uint8Array&&(g=La(g)),typeof g!="string"||!y.includes(g.length))throw new Error("Invalid key");g=g.padStart(m*2,"0")}let _;try{_=typeof g=="bigint"?g:Hs(Qn("private key",g,m))}catch{throw new Error(`private key must be ${m} bytes, hex or bigint, not ${typeof g}`)}return p&&(_=yn(_,A)),a(_),_}const l=new Map;function u(g){if(!(g instanceof h))throw new Error("ProjectivePoint expected")}class h{constructor(y,m,p){if(this.px=y,this.py=m,this.pz=p,y==null||!e.isValid(y))throw new Error("x required");if(m==null||!e.isValid(m))throw new Error("y required");if(p==null||!e.isValid(p))throw new Error("z required")}static fromAffine(y){const{x:m,y:p}=y||{};if(!y||!e.isValid(m)||!e.isValid(p))throw new Error("invalid affine point");if(y instanceof h)throw new Error("projective point not allowed");const A=_=>e.eql(_,e.ZERO);return A(m)&&A(p)?h.ZERO:new h(m,p,e.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(y){const m=e.invertBatch(y.map(p=>p.pz));return y.map((p,A)=>p.toAffine(m[A])).map(h.fromAffine)}static fromHex(y){const m=h.fromAffine(r(Qn("pointHex",y)));return m.assertValidity(),m}static fromPrivateKey(y){return h.BASE.multiply(c(y))}_setWindowSize(y){this._WINDOW_SIZE=y,l.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint&&!e.is0(this.py))return;throw new Error("bad point: ZERO")}const{x:y,y:m}=this.toAffine();if(!e.isValid(y)||!e.isValid(m))throw new Error("bad point: x or y not FE");const p=e.sqr(m),A=s(y);if(!e.eql(p,A))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y}=this.toAffine();if(e.isOdd)return!e.isOdd(y);throw new Error("Field doesn't support isOdd")}equals(y){u(y);const{px:m,py:p,pz:A}=this,{px:_,py:S,pz:N}=y,M=e.eql(e.mul(m,N),e.mul(_,A)),T=e.eql(e.mul(p,N),e.mul(S,A));return M&&T}negate(){return new h(this.px,e.neg(this.py),this.pz)}double(){const{a:y,b:m}=t,p=e.mul(m,ym),{px:A,py:_,pz:S}=this;let N=e.ZERO,M=e.ZERO,T=e.ZERO,I=e.mul(A,A),b=e.mul(_,_),x=e.mul(S,S),R=e.mul(A,_);return R=e.add(R,R),T=e.mul(A,S),T=e.add(T,T),N=e.mul(y,T),M=e.mul(p,x),M=e.add(N,M),N=e.sub(b,M),M=e.add(b,M),M=e.mul(N,M),N=e.mul(R,N),T=e.mul(p,T),x=e.mul(y,x),R=e.sub(I,x),R=e.mul(y,R),R=e.add(R,T),T=e.add(I,I),I=e.add(T,I),I=e.add(I,x),I=e.mul(I,R),M=e.add(M,I),x=e.mul(_,S),x=e.add(x,x),I=e.mul(x,R),N=e.sub(N,I),T=e.mul(x,b),T=e.add(T,T),T=e.add(T,T),new h(N,M,T)}add(y){u(y);const{px:m,py:p,pz:A}=this,{px:_,py:S,pz:N}=y;let M=e.ZERO,T=e.ZERO,I=e.ZERO;const b=t.a,x=e.mul(t.b,ym);let R=e.mul(m,_),V=e.mul(p,S),G=e.mul(A,N),Z=e.add(m,p),U=e.add(_,S);Z=e.mul(Z,U),U=e.add(R,V),Z=e.sub(Z,U),U=e.add(m,A);let B=e.add(_,N);return U=e.mul(U,B),B=e.add(R,G),U=e.sub(U,B),B=e.add(p,A),M=e.add(S,N),B=e.mul(B,M),M=e.add(V,G),B=e.sub(B,M),I=e.mul(b,U),M=e.mul(x,G),I=e.add(M,I),M=e.sub(V,I),I=e.add(V,I),T=e.mul(M,I),V=e.add(R,R),V=e.add(V,R),G=e.mul(b,G),U=e.mul(x,U),V=e.add(V,G),G=e.sub(R,G),G=e.mul(b,G),U=e.add(U,G),R=e.mul(V,U),T=e.add(T,R),R=e.mul(B,U),M=e.mul(Z,M),M=e.sub(M,R),R=e.mul(Z,V),I=e.mul(B,I),I=e.add(I,R),new h(M,T,I)}subtract(y){return this.add(y.negate())}is0(){return this.equals(h.ZERO)}wNAF(y){return d.wNAFCached(this,l,y,m=>{const p=e.invertBatch(m.map(A=>A.pz));return m.map((A,_)=>A.toAffine(p[_])).map(h.fromAffine)})}multiplyUnsafe(y){const m=h.ZERO;if(y===$i)return m;if(a(y),y===Gn)return this;const{endo:p}=t;if(!p)return d.unsafeLadder(this,y);let{k1neg:A,k1:_,k2neg:S,k2:N}=p.splitScalar(y),M=m,T=m,I=this;for(;_>$i||N>$i;)_&Gn&&(M=M.add(I)),N&Gn&&(T=T.add(I)),I=I.double(),_>>=Gn,N>>=Gn;return A&&(M=M.negate()),S&&(T=T.negate()),T=new h(e.mul(T.px,p.beta),T.py,T.pz),M.add(T)}multiply(y){a(y);let m=y,p,A;const{endo:_}=t;if(_){const{k1neg:S,k1:N,k2neg:M,k2:T}=_.splitScalar(m);let{p:I,f:b}=this.wNAF(N),{p:x,f:R}=this.wNAF(T);I=d.constTimeNegate(S,I),x=d.constTimeNegate(M,x),x=new h(e.mul(x.px,_.beta),x.py,x.pz),p=I.add(x),A=b.add(R)}else{const{p:S,f:N}=this.wNAF(m);p=S,A=N}return h.normalizeZ([p,A])[0]}multiplyAndAddUnsafe(y,m,p){const A=h.BASE,_=(N,M)=>M===$i||M===Gn||!N.equals(A)?N.multiplyUnsafe(M):N.multiply(M),S=_(this,m).add(_(y,p));return S.is0()?void 0:S}toAffine(y){const{px:m,py:p,pz:A}=this,_=this.is0();y==null&&(y=_?e.ONE:e.inv(A));const S=e.mul(m,y),N=e.mul(p,y),M=e.mul(A,y);if(_)return{x:e.ZERO,y:e.ZERO};if(!e.eql(M,e.ONE))throw new Error("invZ was invalid");return{x:S,y:N}}isTorsionFree(){const{h:y,isTorsionFree:m}=t;if(y===Gn)return!0;if(m)return m(h,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:y,clearCofactor:m}=t;return y===Gn?this:m?m(h,this):this.multiplyUnsafe(t.h)}toRawBytes(y=!0){return this.assertValidity(),n(h,this,y)}toHex(y=!0){return La(this.toRawBytes(y))}}h.BASE=new h(t.Gx,t.Gy,e.ONE),h.ZERO=new h(e.ZERO,e.ONE,e.ZERO);const f=t.nBitLength,d=oM(h,t.endo?Math.ceil(f/2):f);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:c,weierstrassEquation:s,isWithinCurveOrder:o}}function hM(i){const t=L0(i);return Gc(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function fM(i){const t=hM(i),{Fp:e,n}=t,r=e.BYTES+1,s=2*e.BYTES+1;function o(U){return $i<U&&U<e.ORDER}function a(U){return yn(U,n)}function c(U){return bf(U,n)}const{ProjectivePoint:l,normPrivateKeyToScalar:u,weierstrassEquation:h,isWithinCurveOrder:f}=uM({...t,toBytes(U,B,J){const W=B.toAffine(),rt=e.toBytes(W.x),at=hc;return J?at(Uint8Array.from([B.hasEvenY()?2:3]),rt):at(Uint8Array.from([4]),rt,e.toBytes(W.y))},fromBytes(U){const B=U.length,J=U[0],W=U.subarray(1);if(B===r&&(J===2||J===3)){const rt=Hs(W);if(!o(rt))throw new Error("Point is not on curve");const at=h(rt);let mt=e.sqrt(at);const Nt=(mt&Gn)===Gn;return(J&1)===1!==Nt&&(mt=e.neg(mt)),{x:rt,y:mt}}else if(B===s&&J===4){const rt=e.fromBytes(W.subarray(0,e.BYTES)),at=e.fromBytes(W.subarray(e.BYTES,2*e.BYTES));return{x:rt,y:at}}else throw new Error(`Point of length ${B} was invalid. Expected ${r} compressed bytes or ${s} uncompressed bytes`)}}),d=U=>La(Na(U,t.nByteLength));function g(U){const B=n>>Gn;return U>B}function y(U){return g(U)?a(-U):U}const m=(U,B,J)=>Hs(U.slice(B,J));class p{constructor(B,J,W){this.r=B,this.s=J,this.recovery=W,this.assertValidity()}static fromCompact(B){const J=t.nByteLength;return B=Qn("compactSignature",B,J*2),new p(m(B,0,J),m(B,J,2*J))}static fromDER(B){const{r:J,s:W}=_s.toSig(Qn("DER",B));return new p(J,W)}assertValidity(){if(!f(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!f(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(B){return new p(this.r,this.s,B)}recoverPublicKey(B){const{r:J,s:W,recovery:rt}=this,at=T(Qn("msgHash",B));if(rt==null||![0,1,2,3].includes(rt))throw new Error("recovery id invalid");const mt=rt===2||rt===3?J+t.n:J;if(mt>=e.ORDER)throw new Error("recovery id 2 or 3 invalid");const Nt=rt&1?"03":"02",_t=l.fromHex(Nt+d(mt)),q=c(mt),j=a(-at*q),ht=a(W*q),et=l.BASE.multiplyAndAddUnsafe(_t,j,ht);if(!et)throw new Error("point at infinify");return et.assertValidity(),et}hasHighS(){return g(this.s)}normalizeS(){return this.hasHighS()?new p(this.r,a(-this.s),this.recovery):this}toDERRawBytes(){return uc(this.toDERHex())}toDERHex(){return _s.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return uc(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}const A={isValidPrivateKey(U){try{return u(U),!0}catch{return!1}},normPrivateKeyToScalar:u,randomPrivateKey:()=>{const U=I0(t.n);return rM(t.randomBytes(U),t.n)},precompute(U=8,B=l.BASE){return B._setWindowSize(U),B.multiply(BigInt(3)),B}};function _(U,B=!0){return l.fromPrivateKey(U).toRawBytes(B)}function S(U){const B=U instanceof Uint8Array,J=typeof U=="string",W=(B||J)&&U.length;return B?W===r||W===s:J?W===2*r||W===2*s:U instanceof l}function N(U,B,J=!0){if(S(U))throw new Error("first arg must be private key");if(!S(B))throw new Error("second arg must be public key");return l.fromHex(B).multiply(u(U)).toRawBytes(J)}const M=t.bits2int||function(U){const B=Hs(U),J=U.length*8-t.nBitLength;return J>0?B>>BigInt(J):B},T=t.bits2int_modN||function(U){return a(M(U))},I=Td(t.nBitLength);function b(U){if(typeof U!="bigint")throw new Error("bigint expected");if(!($i<=U&&U<I))throw new Error(`bigint expected < 2^${t.nBitLength}`);return Na(U,t.nByteLength)}function x(U,B,J=R){if(["recovered","canonical"].some(Ut=>Ut in J))throw new Error("sign() legacy options not supported");const{hash:W,randomBytes:rt}=t;let{lowS:at,prehash:mt,extraEntropy:Nt}=J;at==null&&(at=!0),U=Qn("msgHash",U),mt&&(U=Qn("prehashed msgHash",W(U)));const _t=T(U),q=u(B),j=[b(q),b(_t)];if(Nt!=null){const Ut=Nt===!0?rt(e.BYTES):Nt;j.push(Qn("extraEntropy",Ut))}const ht=hc(...j),et=_t;function xt(Ut){const It=M(Ut);if(!f(It))return;const de=c(It),L=l.BASE.multiply(It).toAffine(),te=a(L.x);if(te===$i)return;const Lt=a(de*a(et+te*q));if(Lt===$i)return;let Ft=(L.x===te?0:2)|Number(L.y&Gn),St=Lt;return at&&g(Lt)&&(St=y(Lt),Ft^=1),new p(te,St,Ft)}return{seed:ht,k2sig:xt}}const R={lowS:t.lowS,prehash:!1},V={lowS:t.lowS,prehash:!1};function G(U,B,J=R){const{seed:W,k2sig:rt}=x(U,B,J),at=t;return C0(at.hash.outputLen,at.nByteLength,at.hmac)(W,rt)}l.BASE._setWindowSize(8);function Z(U,B,J,W=V){var L;const rt=U;if(B=Qn("msgHash",B),J=Qn("publicKey",J),"strict"in W)throw new Error("options.strict was renamed to lowS");const{lowS:at,prehash:mt}=W;let Nt,_t;try{if(typeof rt=="string"||rt instanceof Uint8Array)try{Nt=p.fromDER(rt)}catch(te){if(!(te instanceof _s.Err))throw te;Nt=p.fromCompact(rt)}else if(typeof rt=="object"&&typeof rt.r=="bigint"&&typeof rt.s=="bigint"){const{r:te,s:Lt}=rt;Nt=new p(te,Lt)}else throw new Error("PARSE");_t=l.fromHex(J)}catch(te){if(te.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(at&&Nt.hasHighS())return!1;mt&&(B=t.hash(B));const{r:q,s:j}=Nt,ht=T(B),et=c(j),xt=a(ht*et),Ut=a(q*et),It=(L=l.BASE.multiplyAndAddUnsafe(_t,xt,Ut))==null?void 0:L.toAffine();return It?a(It.x)===q:!1}return{CURVE:t,getPublicKey:_,getSharedSecret:N,sign:G,verify:Z,ProjectivePoint:l,Signature:p,utils:A}}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function dM(i){return{hash:i,hmac:(t,...e)=>u0(i,t,sS(...e)),randomBytes:oS}}function pM(i,t){const e=n=>fM({...i,...dM(n)});return Object.freeze({...e(t),create:e})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const N0=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),vm=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),mM=BigInt(1),Sf=BigInt(2),_m=(i,t)=>(i+t/Sf)/t;function gM(i){const t=N0,e=BigInt(3),n=BigInt(6),r=BigInt(11),s=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=i*i*i%t,u=l*l*i%t,h=Nn(u,e,t)*u%t,f=Nn(h,e,t)*u%t,d=Nn(f,Sf,t)*l%t,g=Nn(d,r,t)*d%t,y=Nn(g,s,t)*g%t,m=Nn(y,a,t)*y%t,p=Nn(m,c,t)*m%t,A=Nn(p,a,t)*y%t,_=Nn(A,e,t)*u%t,S=Nn(_,o,t)*g%t,N=Nn(S,n,t)*l%t,M=Nn(N,Sf,t);if(!Mf.eql(Mf.sqr(M),i))throw new Error("Cannot find square root");return M}const Mf=iM(N0,void 0,void 0,{sqrt:gM}),wr=pM({a:BigInt(0),b:BigInt(7),Fp:Mf,n:vm,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:i=>{const t=vm,e=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-mM*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),s=e,o=BigInt("0x100000000000000000000000000000000"),a=_m(s*i,t),c=_m(-n*i,t);let l=yn(i-a*e-c*r,t),u=yn(-a*n-c*s,t);const h=l>o,f=u>o;if(h&&(l=t-l),f&&(u=t-u),l>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+i);return{k1neg:h,k1:l,k2neg:f,k2:u}}}},f0);BigInt(0);wr.ProjectivePoint;const fc="0x0000000000000000000000000000000000000000",xm="0x0000000000000000000000000000000000000000000000000000000000000000",Am=BigInt(0),wm=BigInt(1),Tf=BigInt(2),Em=BigInt(27),bm=BigInt(28),Al=BigInt(35),U0=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),yM=U0/Tf,vM=Symbol.for("nodejs.util.inspect.custom"),ss={};function Eh(i){return cr(Oe(i),32)}var Xo,pi,Ko,Tr;const Un=class Un{constructor(t,e,n,r){Y(this,Xo);Y(this,pi);Y(this,Ko);Y(this,Tr);xu(t,ss,"Signature"),C(this,Xo,e),C(this,pi,n),C(this,Ko,r),C(this,Tr,null)}get r(){return v(this,Xo)}set r(t){D(Uo(t)===32,"invalid r","value",t),C(this,Xo,gt(t))}get s(){return D(parseInt(v(this,pi).substring(0,3))<8,"non-canonical s; use ._s","s",v(this,pi)),v(this,pi)}set s(t){D(Uo(t)===32,"invalid s","value",t),C(this,pi,gt(t))}get _s(){return v(this,pi)}isValid(){return BigInt(v(this,pi))<=yM}get v(){return v(this,Ko)}set v(t){const e=Zt(t,"value");D(e===27||e===28,"invalid v","v",t),C(this,Ko,e)}get networkV(){return v(this,Tr)}get legacyChainId(){const t=this.networkV;return t==null?null:Un.getChainId(t)}get yParity(){return this.v===27?0:1}get yParityAndS(){const t=qt(this.s);return this.yParity&&(t[0]|=128),gt(t)}get compactSerialized(){return xe([this.r,this.yParityAndS])}get serialized(){return xe([this.r,this.s,this.yParity?"0x1c":"0x1b"])}getCanonical(){if(this.isValid())return this;const t=U0-BigInt(this._s),e=55-this.v,n=new Un(ss,this.r,Eh(t),e);return this.networkV&&C(n,Tr,this.networkV),n}clone(){const t=new Un(ss,this.r,this._s,this.v);return this.networkV&&C(t,Tr,this.networkV),t}toJSON(){const t=this.networkV;return{_type:"signature",networkV:t!=null?t.toString():null,r:this.r,s:this._s,v:this.v}}[vM](){return this.toString()}toString(){return this.isValid()?`Signature { r: ${this.r}, s: ${this._s}, v: ${this.v} }`:`Signature { r: ${this.r}, s: ${this._s}, v: ${this.v}, valid: false }`}static getChainId(t){const e=Et(t,"v");return e==Em||e==bm?Am:(D(e>=Al,"invalid EIP-155 v","v",t),(e-Al)/Tf)}static getChainIdV(t,e){return Et(t)*Tf+BigInt(35+e-27)}static getNormalizedV(t){const e=Et(t);return e===Am||e===Em?27:e===wm||e===bm?28:(D(e>=Al,"invalid v","v",t),e&wm?27:28)}static from(t){function e(l,u){D(l,u,"signature",t)}if(t==null)return new Un(ss,xm,xm,27);if(typeof t=="string"){const l=qt(t,"signature");if(l.length===64){const u=gt(l.slice(0,32)),h=l.slice(32,64),f=h[0]&128?28:27;return h[0]&=127,new Un(ss,u,gt(h),f)}if(l.length===65){const u=gt(l.slice(0,32)),h=gt(l.slice(32,64)),f=Un.getNormalizedV(l[64]);return new Un(ss,u,h,f)}e(!1,"invalid raw signature length")}if(t instanceof Un)return t.clone();const n=t.r;e(n!=null,"missing r");const r=Eh(n),s=function(l,u){if(l!=null)return Eh(l);if(u!=null){e(ye(u,32),"invalid yParityAndS");const h=qt(u);return h[0]&=127,gt(h)}e(!1,"missing s")}(t.s,t.yParityAndS),{networkV:o,v:a}=function(l,u,h){if(l!=null){const f=Et(l);return{networkV:f>=Al?f:void 0,v:Un.getNormalizedV(f)}}if(u!=null)return e(ye(u,32),"invalid yParityAndS"),{v:qt(u)[0]&128?28:27};if(h!=null){switch(Zt(h,"sig.yParity")){case 0:return{v:27};case 1:return{v:28}}e(!1,"invalid yParity")}e(!1,"missing v")}(t.v,t.yParityAndS,t.yParity),c=new Un(ss,r,s,a);return o&&C(c,Tr,o),e(t.yParity==null||Zt(t.yParity,"sig.yParity")===c.yParity,"yParity mismatch"),e(t.yParityAndS==null||t.yParityAndS===c.yParityAndS,"yParityAndS mismatch"),c}};Xo=new WeakMap,pi=new WeakMap,Ko=new WeakMap,Tr=new WeakMap;let _n=Un;var Wi;const ps=class ps{constructor(t){Y(this,Wi);D(Uo(t)===32,"invalid private key","privateKey","[REDACTED]"),C(this,Wi,gt(t))}get privateKey(){return v(this,Wi)}get publicKey(){return ps.computePublicKey(v(this,Wi))}get compressedPublicKey(){return ps.computePublicKey(v(this,Wi),!0)}sign(t){D(Uo(t)===32,"invalid digest length","digest",t);const e=wr.sign(cn(t),cn(v(this,Wi)),{lowS:!0});return _n.from({r:Jr(e.r,32),s:Jr(e.s,32),v:e.recovery?28:27})}computeSharedSecret(t){const e=ps.computePublicKey(t);return gt(wr.getSharedSecret(cn(v(this,Wi)),qt(e),!1))}static computePublicKey(t,e){let n=qt(t,"key");if(n.length===32){const s=wr.getPublicKey(n,!!e);return gt(s)}if(n.length===64){const s=new Uint8Array(65);s[0]=4,s.set(n,1),n=s}const r=wr.ProjectivePoint.fromHex(n);return gt(r.toRawBytes(e))}static recoverPublicKey(t,e){D(Uo(t)===32,"invalid digest length","digest",t);const n=_n.from(e);let r=wr.Signature.fromCompact(cn(xe([n.r,n.s])));r=r.addRecoveryBit(n.yParity);const s=r.recoverPublicKey(cn(t));return D(s!=null,"invalid signature for digest","signature",e),"0x"+s.toHex(!1)}static addPoints(t,e,n){const r=wr.ProjectivePoint.fromHex(ps.computePublicKey(t).substring(2)),s=wr.ProjectivePoint.fromHex(ps.computePublicKey(e).substring(2));return"0x"+r.add(s).toHex(!!n)}};Wi=new WeakMap;let dc=ps;const _M=BigInt(0),xM=BigInt(36);function Sm(i){i=i.toLowerCase();const t=i.substring(2).split(""),e=new Uint8Array(40);for(let r=0;r<40;r++)e[r]=t[r].charCodeAt(0);const n=qt(De(e));for(let r=0;r<40;r+=2)n[r>>1]>>4>=8&&(t[r]=t[r].toUpperCase()),(n[r>>1]&15)>=8&&(t[r+1]=t[r+1].toUpperCase());return"0x"+t.join("")}const Cd={};for(let i=0;i<10;i++)Cd[String(i)]=String(i);for(let i=0;i<26;i++)Cd[String.fromCharCode(65+i)]=String(10+i);const Mm=15;function AM(i){i=i.toUpperCase(),i=i.substring(4)+i.substring(0,2)+"00";let t=i.split("").map(n=>Cd[n]).join("");for(;t.length>=Mm;){let n=t.substring(0,Mm);t=parseInt(n,10)%97+t.substring(n.length)}let e=String(98-parseInt(t,10)%97);for(;e.length<2;)e="0"+e;return e}const wM=function(){const i={};for(let t=0;t<36;t++){const e="0123456789abcdefghijklmnopqrstuvwxyz"[t];i[e]=BigInt(t)}return i}();function EM(i){i=i.toLowerCase();let t=_M;for(let e=0;e<i.length;e++)t=t*xM+wM[i[e]];return t}function fe(i){if(D(typeof i=="string","invalid address","address",i),i.match(/^(0x)?[0-9a-fA-F]{40}$/)){i.startsWith("0x")||(i="0x"+i);const t=Sm(i);return D(!i.match(/([A-F].*[a-f])|([a-f].*[A-F])/)||t===i,"bad address checksum","address",i),t}if(i.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){D(i.substring(2,4)===AM(i),"bad icap checksum","address",i);let t=EM(i.substring(4)).toString(16);for(;t.length<40;)t="0"+t;return Sm("0x"+t)}D(!1,"invalid address","address",i)}function bM(i){const t=fe(i.from);let n=Et(i.nonce,"tx.nonce").toString(16);return n==="0"?n="0x":n.length%2?n="0x0"+n:n="0x"+n,fe(Me(De(rr([t,n])),12))}function D0(i){return i&&typeof i.getAddress=="function"}async function bh(i,t){const e=await t;return(e==null||e==="0x0000000000000000000000000000000000000000")&&(nt(typeof i!="string","unconfigured name","UNCONFIGURED_NAME",{value:i}),D(!1,"invalid AddressLike value; did not resolve to a value address","target",i)),fe(e)}function un(i,t){if(typeof i=="string")return i.match(/^0x[0-9a-f]{40}$/i)?fe(i):(nt(t!=null,"ENS resolution requires a provider","UNSUPPORTED_OPERATION",{operation:"resolveName"}),bh(i,t.resolveName(i)));if(D0(i))return bh(i,i.getAddress());if(i&&typeof i.then=="function")return bh(i,i);D(!1,"unsupported addressable value","target",i)}const Fi={};function At(i,t){let e=!1;return t<0&&(e=!0,t*=-1),new rn(Fi,`${e?"":"u"}int${t}`,i,{signed:e,width:t})}function oe(i,t){return new rn(Fi,`bytes${t||""}`,i,{size:t})}const Tm=Symbol.for("_ethers_typed");var Ls;const ki=class ki{constructor(t,e,n,r){H(this,"type");H(this,"value");Y(this,Ls);H(this,"_typedSymbol");r==null&&(r=null),xu(Fi,t,"Typed"),Bt(this,{_typedSymbol:Tm,type:e,value:n}),C(this,Ls,r),this.format()}format(){if(this.type==="array")throw new Error("");if(this.type==="dynamicArray")throw new Error("");return this.type==="tuple"?`tuple(${this.value.map(t=>t.format()).join(",")})`:this.type}defaultValue(){return 0}minValue(){return 0}maxValue(){return 0}isBigInt(){return!!this.type.match(/^u?int[0-9]+$/)}isData(){return this.type.startsWith("bytes")}isString(){return this.type==="string"}get tupleName(){if(this.type!=="tuple")throw TypeError("not a tuple");return v(this,Ls)}get arrayLength(){if(this.type!=="array")throw TypeError("not an array");return v(this,Ls)===!0?-1:v(this,Ls)===!1?this.value.length:null}static from(t,e){return new ki(Fi,t,e)}static uint8(t){return At(t,8)}static uint16(t){return At(t,16)}static uint24(t){return At(t,24)}static uint32(t){return At(t,32)}static uint40(t){return At(t,40)}static uint48(t){return At(t,48)}static uint56(t){return At(t,56)}static uint64(t){return At(t,64)}static uint72(t){return At(t,72)}static uint80(t){return At(t,80)}static uint88(t){return At(t,88)}static uint96(t){return At(t,96)}static uint104(t){return At(t,104)}static uint112(t){return At(t,112)}static uint120(t){return At(t,120)}static uint128(t){return At(t,128)}static uint136(t){return At(t,136)}static uint144(t){return At(t,144)}static uint152(t){return At(t,152)}static uint160(t){return At(t,160)}static uint168(t){return At(t,168)}static uint176(t){return At(t,176)}static uint184(t){return At(t,184)}static uint192(t){return At(t,192)}static uint200(t){return At(t,200)}static uint208(t){return At(t,208)}static uint216(t){return At(t,216)}static uint224(t){return At(t,224)}static uint232(t){return At(t,232)}static uint240(t){return At(t,240)}static uint248(t){return At(t,248)}static uint256(t){return At(t,256)}static uint(t){return At(t,256)}static int8(t){return At(t,-8)}static int16(t){return At(t,-16)}static int24(t){return At(t,-24)}static int32(t){return At(t,-32)}static int40(t){return At(t,-40)}static int48(t){return At(t,-48)}static int56(t){return At(t,-56)}static int64(t){return At(t,-64)}static int72(t){return At(t,-72)}static int80(t){return At(t,-80)}static int88(t){return At(t,-88)}static int96(t){return At(t,-96)}static int104(t){return At(t,-104)}static int112(t){return At(t,-112)}static int120(t){return At(t,-120)}static int128(t){return At(t,-128)}static int136(t){return At(t,-136)}static int144(t){return At(t,-144)}static int152(t){return At(t,-152)}static int160(t){return At(t,-160)}static int168(t){return At(t,-168)}static int176(t){return At(t,-176)}static int184(t){return At(t,-184)}static int192(t){return At(t,-192)}static int200(t){return At(t,-200)}static int208(t){return At(t,-208)}static int216(t){return At(t,-216)}static int224(t){return At(t,-224)}static int232(t){return At(t,-232)}static int240(t){return At(t,-240)}static int248(t){return At(t,-248)}static int256(t){return At(t,-256)}static int(t){return At(t,-256)}static bytes1(t){return oe(t,1)}static bytes2(t){return oe(t,2)}static bytes3(t){return oe(t,3)}static bytes4(t){return oe(t,4)}static bytes5(t){return oe(t,5)}static bytes6(t){return oe(t,6)}static bytes7(t){return oe(t,7)}static bytes8(t){return oe(t,8)}static bytes9(t){return oe(t,9)}static bytes10(t){return oe(t,10)}static bytes11(t){return oe(t,11)}static bytes12(t){return oe(t,12)}static bytes13(t){return oe(t,13)}static bytes14(t){return oe(t,14)}static bytes15(t){return oe(t,15)}static bytes16(t){return oe(t,16)}static bytes17(t){return oe(t,17)}static bytes18(t){return oe(t,18)}static bytes19(t){return oe(t,19)}static bytes20(t){return oe(t,20)}static bytes21(t){return oe(t,21)}static bytes22(t){return oe(t,22)}static bytes23(t){return oe(t,23)}static bytes24(t){return oe(t,24)}static bytes25(t){return oe(t,25)}static bytes26(t){return oe(t,26)}static bytes27(t){return oe(t,27)}static bytes28(t){return oe(t,28)}static bytes29(t){return oe(t,29)}static bytes30(t){return oe(t,30)}static bytes31(t){return oe(t,31)}static bytes32(t){return oe(t,32)}static address(t){return new ki(Fi,"address",t)}static bool(t){return new ki(Fi,"bool",!!t)}static bytes(t){return new ki(Fi,"bytes",t)}static string(t){return new ki(Fi,"string",t)}static array(t,e){throw new Error("not implemented yet")}static tuple(t,e){throw new Error("not implemented yet")}static overrides(t){return new ki(Fi,"overrides",Object.assign({},t))}static isTyped(t){return t&&typeof t=="object"&&"_typedSymbol"in t&&t._typedSymbol===Tm}static dereference(t,e){if(ki.isTyped(t)){if(t.type!==e)throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);return t.value}return t}};Ls=new WeakMap;let rn=ki;class SM extends ur{constructor(t){super("address","address",t,!1)}defaultValue(){return"0x0000000000000000000000000000000000000000"}encode(t,e){let n=rn.dereference(e,"string");try{n=fe(n)}catch(r){return this._throwError(r.message,e)}return t.writeValue(n)}decode(t){return fe(Jr(t.readValue(),20))}}class MM extends ur{constructor(e){super(e.name,e.type,"_",e.dynamic);H(this,"coder");this.coder=e}defaultValue(){return this.coder.defaultValue()}encode(e,n){return this.coder.encode(e,n)}decode(e){return this.coder.decode(e)}}function O0(i,t,e){let n=[];if(Array.isArray(e))n=e;else if(e&&typeof e=="object"){let c={};n=t.map(l=>{const u=l.localName;return nt(u,"cannot encode object for signature with missing names","INVALID_ARGUMENT",{argument:"values",info:{coder:l},value:e}),nt(!c[u],"cannot encode object for signature with duplicate names","INVALID_ARGUMENT",{argument:"values",info:{coder:l},value:e}),c[u]=!0,e[u]})}else D(!1,"invalid tuple value","tuple",e);D(t.length===n.length,"types/value length mismatch","tuple",e);let r=new _f,s=new _f,o=[];t.forEach((c,l)=>{let u=n[l];if(c.dynamic){let h=s.length;c.encode(s,u);let f=r.writeUpdatableValue();o.push(d=>{f(d+h)})}else c.encode(r,u)}),o.forEach(c=>{c(r.length)});let a=i.appendWriter(r);return a+=i.appendWriter(s),a}function B0(i,t){let e=[],n=[],r=i.subReader(0);return t.forEach(s=>{let o=null;if(s.dynamic){let a=i.readIndex(),c=r.subReader(a);try{o=s.decode(c)}catch(l){if(Qe(l,"BUFFER_OVERRUN"))throw l;o=l,o.baseType=s.name,o.name=s.localName,o.type=s.type}}else try{o=s.decode(i)}catch(a){if(Qe(a,"BUFFER_OVERRUN"))throw a;o=a,o.baseType=s.name,o.name=s.localName,o.type=s.type}if(o==null)throw new Error("investigate");e.push(o),n.push(s.localName||null)}),Pa.fromItems(e,n)}class TM extends ur{constructor(e,n,r){const s=e.type+"["+(n>=0?n:"")+"]",o=n===-1||e.dynamic;super("array",s,r,o);H(this,"coder");H(this,"length");Bt(this,{coder:e,length:n})}defaultValue(){const e=this.coder.defaultValue(),n=[];for(let r=0;r<this.length;r++)n.push(e);return n}encode(e,n){const r=rn.dereference(n,"array");Array.isArray(r)||this._throwError("expected array value",r);let s=this.length;s===-1&&(s=r.length,e.writeValue(r.length)),Jg(r.length,s,"coder array"+(this.localName?" "+this.localName:""));let o=[];for(let a=0;a<r.length;a++)o.push(this.coder);return O0(e,o,r)}decode(e){let n=this.length;n===-1&&(n=e.readIndex(),nt(n*ln<=e.dataLength,"insufficient data length","BUFFER_OVERRUN",{buffer:e.bytes,offset:n*ln,length:e.dataLength}));let r=[];for(let s=0;s<n;s++)r.push(new MM(this.coder));return B0(e,r)}}class CM extends ur{constructor(t){super("bool","bool",t,!1)}defaultValue(){return!1}encode(t,e){const n=rn.dereference(e,"bool");return t.writeValue(n?1:0)}decode(t){return!!t.readValue()}}class F0 extends ur{constructor(t,e){super(t,t,e,!0)}defaultValue(){return"0x"}encode(t,e){e=cn(e);let n=t.writeValue(e.length);return n+=t.writeBytes(e),n}decode(t){return t.readBytes(t.readIndex(),!0)}}class RM extends F0{constructor(t){super("bytes",t)}decode(t){return gt(super.decode(t))}}class PM extends ur{constructor(e,n){let r="bytes"+String(e);super(r,r,n,!1);H(this,"size");Bt(this,{size:e},{size:"number"})}defaultValue(){return"0x0000000000000000000000000000000000000000000000000000000000000000".substring(0,2+this.size*2)}encode(e,n){let r=cn(rn.dereference(n,this.type));return r.length!==this.size&&this._throwError("incorrect data length",n),e.writeBytes(r)}decode(e){return gt(e.readBytes(this.size))}}const IM=new Uint8Array([]);class LM extends ur{constructor(t){super("null","",t,!1)}defaultValue(){return null}encode(t,e){return e!=null&&this._throwError("not null",e),t.writeBytes(IM)}decode(t){return t.readBytes(0),null}}const NM=BigInt(0),UM=BigInt(1),DM=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");class OM extends ur{constructor(e,n,r){const s=(n?"int":"uint")+e*8;super(s,s,r,!1);H(this,"size");H(this,"signed");Bt(this,{size:e,signed:n},{size:"number",signed:"boolean"})}defaultValue(){return 0}encode(e,n){let r=Et(rn.dereference(n,this.type)),s=qa(DM,ln*8);if(this.signed){let o=qa(s,this.size*8-1);(r>o||r<-(o+UM))&&this._throwError("value out-of-bounds",n),r=qg(r,8*ln)}else(r<NM||r>qa(s,this.size*8))&&this._throwError("value out-of-bounds",n);return e.writeValue(r)}decode(e){let n=qa(e.readValue(),this.size*8);return this.signed&&(n=Ob(n,this.size*8)),n}}class BM extends F0{constructor(t){super("string",t)}defaultValue(){return""}encode(t,e){return super.encode(t,ir(rn.dereference(e,"string")))}decode(t){return jl(super.decode(t))}}class wl extends ur{constructor(e,n){let r=!1;const s=[];e.forEach(a=>{a.dynamic&&(r=!0),s.push(a.type)});const o="tuple("+s.join(",")+")";super("tuple",o,n,r);H(this,"coders");Bt(this,{coders:Object.freeze(e.slice())})}defaultValue(){const e=[];this.coders.forEach(r=>{e.push(r.defaultValue())});const n=this.coders.reduce((r,s)=>{const o=s.localName;return o&&(r[o]||(r[o]=0),r[o]++),r},{});return this.coders.forEach((r,s)=>{let o=r.localName;!o||n[o]!==1||(o==="length"&&(o="_length"),e[o]==null&&(e[o]=e[s]))}),Object.freeze(e)}encode(e,n){const r=rn.dereference(n,"tuple");return O0(e,this.coders,r)}decode(e){return B0(e,this.coders)}}function Sh(i,t){return{address:fe(i),storageKeys:t.map((e,n)=>(D(ye(e,32),"invalid slot",`storageKeys[${n}]`,e),e.toLowerCase()))}}function js(i){if(Array.isArray(i))return i.map((e,n)=>Array.isArray(e)?(D(e.length===2,"invalid slot set",`value[${n}]`,e),Sh(e[0],e[1])):(D(e!=null&&typeof e=="object","invalid address-slot set","value",i),Sh(e.address,e.storageKeys)));D(i!=null&&typeof i=="object","invalid access list","value",i);const t=Object.keys(i).map(e=>{const n=i[e].reduce((r,s)=>(r[s]=!0,r),{});return Sh(e,Object.keys(n).sort())});return t.sort((e,n)=>e.address.localeCompare(n.address)),t}function k0(i){return{address:fe(i.address),nonce:Et(i.nonce!=null?i.nonce:0),chainId:Et(i.chainId!=null?i.chainId:0),signature:_n.from(i.signature)}}function FM(i){let t;return typeof i=="string"?t=dc.computePublicKey(i,!1):t=i.publicKey,fe(De("0x"+t.substring(4)).substring(26))}function kM(i,t){return FM(dc.recoverPublicKey(i,t))}const He=BigInt(0),zM=BigInt(2),GM=BigInt(27),HM=BigInt(28),VM=BigInt(35),WM=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),XM=Symbol.for("nodejs.util.inspect.custom"),Mh=4096*32,Nl=128;function KM(i){return{blobToKzgCommitment:n=>{if("computeBlobProof"in i){if("blobToKzgCommitment"in i&&typeof i.blobToKzgCommitment=="function")return qt(i.blobToKzgCommitment(gt(n)))}else if("blobToKzgCommitment"in i&&typeof i.blobToKzgCommitment=="function")return qt(i.blobToKzgCommitment(n));if("blobToKZGCommitment"in i&&typeof i.blobToKZGCommitment=="function")return qt(i.blobToKZGCommitment(gt(n)));D(!1,"unsupported KZG library","kzg",i)},computeBlobKzgProof:(n,r)=>{if("computeBlobProof"in i&&typeof i.computeBlobProof=="function")return qt(i.computeBlobProof(gt(n),gt(r)));if("computeBlobKzgProof"in i&&typeof i.computeBlobKzgProof=="function")return i.computeBlobKzgProof(n,r);if("computeBlobKZGProof"in i&&typeof i.computeBlobKZGProof=="function")return qt(i.computeBlobKZGProof(gt(n),gt(r)));D(!1,"unsupported KZG library","kzg",i)}}}function Cm(i,t){let e=i.toString(16);for(;e.length<2;)e="0"+e;return e+=Fa(t).substring(4),"0x"+e}function ka(i){return i==="0x"?null:fe(i)}function bu(i,t){try{return js(i)}catch(e){D(!1,e.message,t,i)}}function JM(i,t){try{if(!Array.isArray(i))throw new Error("authorizationList: invalid array");const e=[];for(let n=0;n<i.length;n++){const r=i[n];if(!Array.isArray(r))throw new Error(`authorization[${n}]: invalid array`);if(r.length!==6)throw new Error(`authorization[${n}]: wrong length`);if(!r[1])throw new Error(`authorization[${n}]: null address`);e.push({address:ka(r[1]),nonce:pe(r[2],"nonce"),chainId:pe(r[0],"chainId"),signature:_n.from({yParity:$s(r[3],"yParity"),r:cr(r[4],32),s:cr(r[5],32)})})}return e}catch(e){D(!1,e.message,t,i)}}function $s(i,t){return i==="0x"?0:Zt(i,t)}function pe(i,t){if(i==="0x")return He;const e=Et(i,t);return D(e<=WM,"value exceeds uint size",t,e),e}function ne(i,t){const e=Et(i,"value"),n=Oe(e);return D(n.length<=32,"value too large",`tx.${t}`,e),n}function Su(i){return js(i).map(t=>[t.address,t.storageKeys])}function YM(i){return i.map(t=>[ne(t.chainId,"chainId"),t.address,ne(t.nonce,"nonce"),ne(t.signature.yParity,"yParity"),Oe(t.signature.r),Oe(t.signature._s)])}function QM(i,t){D(Array.isArray(i),`invalid ${t}`,"value",i);for(let e=0;e<i.length;e++)D(ye(i[e],32),"invalid ${ param } hash",`value[${e}]`,i[e]);return i}function qM(i){const t=zc(i);D(Array.isArray(t)&&(t.length===9||t.length===6),"invalid field count for legacy transaction","data",i);const e={type:0,nonce:$s(t[0],"nonce"),gasPrice:pe(t[1],"gasPrice"),gasLimit:pe(t[2],"gasLimit"),to:ka(t[3]),value:pe(t[4],"value"),data:gt(t[5]),chainId:He};if(t.length===6)return e;const n=pe(t[6],"v"),r=pe(t[7],"r"),s=pe(t[8],"s");if(r===He&&s===He)e.chainId=n;else{let o=(n-VM)/zM;o<He&&(o=He),e.chainId=o,D(o!==He||n===GM||n===HM,"non-canonical legacy v","v",t[6]),e.signature=_n.from({r:cr(t[7],32),s:cr(t[8],32),v:n})}return e}function ZM(i,t){const e=[ne(i.nonce,"nonce"),ne(i.gasPrice||0,"gasPrice"),ne(i.gasLimit,"gasLimit"),i.to||"0x",ne(i.value,"value"),i.data];let n=He;if(i.chainId!=He)n=Et(i.chainId,"tx.chainId"),D(!t||t.networkV==null||t.legacyChainId===n,"tx.chainId/sig.v mismatch","sig",t);else if(i.signature){const s=i.signature.legacyChainId;s!=null&&(n=s)}if(!t)return n!==He&&(e.push(Oe(n)),e.push("0x"),e.push("0x")),rr(e);let r=BigInt(27+t.yParity);return n!==He?r=_n.getChainIdV(n,t.v):BigInt(t.v)!==r&&D(!1,"tx.chainId/sig.v mismatch","sig",t),e.push(Oe(r)),e.push(Oe(t.r)),e.push(Oe(t._s)),rr(e)}function Mu(i,t){let e;try{if(e=$s(t[0],"yParity"),e!==0&&e!==1)throw new Error("bad yParity")}catch{D(!1,"invalid yParity","yParity",t[0])}const n=cr(t[1],32),r=cr(t[2],32),s=_n.from({r:n,s:r,yParity:e});i.signature=s}function jM(i){const t=zc(qt(i).slice(1));D(Array.isArray(t)&&(t.length===9||t.length===12),"invalid field count for transaction type: 2","data",gt(i));const e={type:2,chainId:pe(t[0],"chainId"),nonce:$s(t[1],"nonce"),maxPriorityFeePerGas:pe(t[2],"maxPriorityFeePerGas"),maxFeePerGas:pe(t[3],"maxFeePerGas"),gasPrice:null,gasLimit:pe(t[4],"gasLimit"),to:ka(t[5]),value:pe(t[6],"value"),data:gt(t[7]),accessList:bu(t[8],"accessList")};return t.length===9||Mu(e,t.slice(9)),e}function $M(i,t){const e=[ne(i.chainId,"chainId"),ne(i.nonce,"nonce"),ne(i.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),ne(i.maxFeePerGas||0,"maxFeePerGas"),ne(i.gasLimit,"gasLimit"),i.to||"0x",ne(i.value,"value"),i.data,Su(i.accessList||[])];return t&&(e.push(ne(t.yParity,"yParity")),e.push(Oe(t.r)),e.push(Oe(t.s))),xe(["0x02",rr(e)])}function tT(i){const t=zc(qt(i).slice(1));D(Array.isArray(t)&&(t.length===8||t.length===11),"invalid field count for transaction type: 1","data",gt(i));const e={type:1,chainId:pe(t[0],"chainId"),nonce:$s(t[1],"nonce"),gasPrice:pe(t[2],"gasPrice"),gasLimit:pe(t[3],"gasLimit"),to:ka(t[4]),value:pe(t[5],"value"),data:gt(t[6]),accessList:bu(t[7],"accessList")};return t.length===8||Mu(e,t.slice(8)),e}function eT(i,t){const e=[ne(i.chainId,"chainId"),ne(i.nonce,"nonce"),ne(i.gasPrice||0,"gasPrice"),ne(i.gasLimit,"gasLimit"),i.to||"0x",ne(i.value,"value"),i.data,Su(i.accessList||[])];return t&&(e.push(ne(t.yParity,"recoveryParam")),e.push(Oe(t.r)),e.push(Oe(t.s))),xe(["0x01",rr(e)])}function nT(i){let t=zc(qt(i).slice(1)),e="3",n=null,r=null;if(t.length===4&&Array.isArray(t[0])){e="3 (network format)";const o=t[1],a=t[2],c=t[3];D(Array.isArray(o),"invalid network format: blobs not an array","fields[1]",o),D(Array.isArray(a),"invalid network format: commitments not an array","fields[2]",a),D(Array.isArray(c),"invalid network format: proofs not an array","fields[3]",c),D(o.length===a.length,"invalid network format: blobs/commitments length mismatch","fields",t),D(o.length===c.length,"invalid network format: blobs/proofs length mismatch","fields",t),r=[];for(let l=0;l<t[1].length;l++)r.push({data:o[l],commitment:a[l],proof:c[l]});t=t[0]}else if(t.length===5&&Array.isArray(t[0])){e="3 (EIP-7594 network format)",n=Zt(t[1]);const o=t[2],a=t[3],c=t[4];D(n===1,`unsupported EIP-7594 network format version: ${n}`,"fields[1]",n),D(Array.isArray(o),"invalid EIP-7594 network format: blobs not an array","fields[2]",o),D(Array.isArray(a),"invalid EIP-7594 network format: commitments not an array","fields[3]",a),D(Array.isArray(c),"invalid EIP-7594 network format: proofs not an array","fields[4]",c),D(o.length===a.length,"invalid network format: blobs/commitments length mismatch","fields",t),D(o.length*Nl===c.length,"invalid network format: blobs/proofs length mismatch","fields",t),r=[];for(let l=0;l<o.length;l++){const u=[];for(let h=0;h<Nl;h++)u.push(c[l*Nl+h]);r.push({data:o[l],commitment:a[l],proof:xe(u)})}t=t[0]}D(Array.isArray(t)&&(t.length===11||t.length===14),`invalid field count for transaction type: ${e}`,"data",gt(i));const s={type:3,chainId:pe(t[0],"chainId"),nonce:$s(t[1],"nonce"),maxPriorityFeePerGas:pe(t[2],"maxPriorityFeePerGas"),maxFeePerGas:pe(t[3],"maxFeePerGas"),gasPrice:null,gasLimit:pe(t[4],"gasLimit"),to:ka(t[5]),value:pe(t[6],"value"),data:gt(t[7]),accessList:bu(t[8],"accessList"),maxFeePerBlobGas:pe(t[9],"maxFeePerBlobGas"),blobVersionedHashes:t[10],blobWrapperVersion:n};r&&(s.blobs=r),D(s.to!=null,`invalid address for transaction type: ${e}`,"data",i),D(Array.isArray(s.blobVersionedHashes),"invalid blobVersionedHashes: must be an array","data",i);for(let o=0;o<s.blobVersionedHashes.length;o++)D(ye(s.blobVersionedHashes[o],32),`invalid blobVersionedHash at index ${o}: must be length 32`,"data",i);return t.length===11||Mu(s,t.slice(11)),s}function iT(i,t,e){const n=[ne(i.chainId,"chainId"),ne(i.nonce,"nonce"),ne(i.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),ne(i.maxFeePerGas||0,"maxFeePerGas"),ne(i.gasLimit,"gasLimit"),i.to||fc,ne(i.value,"value"),i.data,Su(i.accessList||[]),ne(i.maxFeePerBlobGas||0,"maxFeePerBlobGas"),QM(i.blobVersionedHashes||[],"blobVersionedHashes")];if(t&&(n.push(ne(t.yParity,"yParity")),n.push(Oe(t.r)),n.push(Oe(t.s)),e)){if(i.blobWrapperVersion!=null){const r=Oe(i.blobWrapperVersion),s=[];for(const{proof:o}of e){const a=qt(o),c=a.length/Nl;for(let l=0;l<a.length;l+=c)s.push(a.subarray(l,l+c))}return xe(["0x03",rr([n,r,e.map(o=>o.data),e.map(o=>o.commitment),s])])}return xe(["0x03",rr([n,e.map(r=>r.data),e.map(r=>r.commitment),e.map(r=>r.proof)])])}return xe(["0x03",rr(n)])}function rT(i){const t=zc(qt(i).slice(1));D(Array.isArray(t)&&(t.length===10||t.length===13),"invalid field count for transaction type: 4","data",gt(i));const e={type:4,chainId:pe(t[0],"chainId"),nonce:$s(t[1],"nonce"),maxPriorityFeePerGas:pe(t[2],"maxPriorityFeePerGas"),maxFeePerGas:pe(t[3],"maxFeePerGas"),gasPrice:null,gasLimit:pe(t[4],"gasLimit"),to:ka(t[5]),value:pe(t[6],"value"),data:gt(t[7]),accessList:bu(t[8],"accessList"),authorizationList:JM(t[9],"authorizationList")};return t.length===10||Mu(e,t.slice(10)),e}function sT(i,t){const e=[ne(i.chainId,"chainId"),ne(i.nonce,"nonce"),ne(i.maxPriorityFeePerGas||0,"maxPriorityFeePerGas"),ne(i.maxFeePerGas||0,"maxFeePerGas"),ne(i.gasLimit,"gasLimit"),i.to||"0x",ne(i.value,"value"),i.data,Su(i.accessList||[]),YM(i.authorizationList||[])];return t&&(e.push(ne(t.yParity,"yParity")),e.push(Oe(t.r)),e.push(Oe(t.s))),xe(["0x04",rr(e)])}var jn,Jo,Yo,Qo,qo,Zo,jo,$o,ta,ea,na,ia,Ns,Cr,mi,Rr,ra,sa,oa,Ul;const hi=class hi{constructor(){Y(this,oa);Y(this,jn);Y(this,Jo);Y(this,Yo);Y(this,Qo);Y(this,qo);Y(this,Zo);Y(this,jo);Y(this,$o);Y(this,ta);Y(this,ea);Y(this,na);Y(this,ia);Y(this,Ns);Y(this,Cr);Y(this,mi);Y(this,Rr);Y(this,ra);Y(this,sa);C(this,jn,null),C(this,Jo,null),C(this,Qo,0),C(this,qo,He),C(this,Zo,null),C(this,jo,null),C(this,$o,null),C(this,Yo,"0x"),C(this,ta,He),C(this,ea,He),C(this,na,null),C(this,ia,null),C(this,Ns,null),C(this,Cr,null),C(this,mi,null),C(this,Rr,null),C(this,ra,null),C(this,sa,null)}get type(){return v(this,jn)}set type(t){switch(t){case null:C(this,jn,null);break;case 0:case"legacy":C(this,jn,0);break;case 1:case"berlin":case"eip-2930":C(this,jn,1);break;case 2:case"london":case"eip-1559":C(this,jn,2);break;case 3:case"cancun":case"eip-4844":C(this,jn,3);break;case 4:case"pectra":case"eip-7702":C(this,jn,4);break;default:D(!1,"unsupported transaction type","type",t)}}get typeName(){switch(this.type){case 0:return"legacy";case 1:return"eip-2930";case 2:return"eip-1559";case 3:return"eip-4844";case 4:return"eip-7702"}return null}get to(){const t=v(this,Jo);return t==null&&this.type===3?fc:t}set to(t){C(this,Jo,t==null?null:fe(t))}get nonce(){return v(this,Qo)}set nonce(t){C(this,Qo,Zt(t,"value"))}get gasLimit(){return v(this,qo)}set gasLimit(t){C(this,qo,Et(t))}get gasPrice(){const t=v(this,Zo);return t==null&&(this.type===0||this.type===1)?He:t}set gasPrice(t){C(this,Zo,t==null?null:Et(t,"gasPrice"))}get maxPriorityFeePerGas(){const t=v(this,jo);return t??(this.type===2||this.type===3?He:null)}set maxPriorityFeePerGas(t){C(this,jo,t==null?null:Et(t,"maxPriorityFeePerGas"))}get maxFeePerGas(){const t=v(this,$o);return t??(this.type===2||this.type===3?He:null)}set maxFeePerGas(t){C(this,$o,t==null?null:Et(t,"maxFeePerGas"))}get data(){return v(this,Yo)}set data(t){C(this,Yo,gt(t))}get value(){return v(this,ta)}set value(t){C(this,ta,Et(t,"value"))}get chainId(){return v(this,ea)}set chainId(t){C(this,ea,Et(t))}get signature(){return v(this,na)||null}set signature(t){C(this,na,t==null?null:_n.from(t))}isValid(){const t=this.signature;if(t&&!t.isValid())return!1;const e=this.authorizationList;if(e){for(const n of e)if(!n.signature.isValid())return!1}return!0}get accessList(){const t=v(this,ia)||null;return t??(this.type===1||this.type===2||this.type===3?[]:null)}set accessList(t){C(this,ia,t==null?null:js(t))}get authorizationList(){const t=v(this,ra)||null;return t==null&&this.type===4?[]:t}set authorizationList(t){C(this,ra,t==null?null:t.map(e=>k0(e)))}get maxFeePerBlobGas(){const t=v(this,Ns);return t==null&&this.type===3?He:t}set maxFeePerBlobGas(t){C(this,Ns,t==null?null:Et(t,"maxFeePerBlobGas"))}get blobVersionedHashes(){let t=v(this,Cr);return t==null&&this.type===3?[]:t}set blobVersionedHashes(t){if(t!=null){D(Array.isArray(t),"blobVersionedHashes must be an Array","value",t),t=t.slice();for(let e=0;e<t.length;e++)D(ye(t[e],32),"invalid blobVersionedHash",`value[${e}]`,t[e])}C(this,Cr,t)}get blobs(){return v(this,Rr)==null?null:v(this,Rr).map(t=>Object.assign({},t))}set blobs(t){if(t==null){C(this,Rr,null);return}const e=[],n=[];for(let r=0;r<t.length;r++){const s=t[r];if(vd(s)){nt(v(this,mi),"adding a raw blob requires a KZG library","UNSUPPORTED_OPERATION",{operation:"set blobs()"});let o=qt(s);if(D(o.length<=Mh,"blob is too large",`blobs[${r}]`,s),o.length!==Mh){const l=new Uint8Array(Mh);l.set(o),o=l}const a=v(this,mi).blobToKzgCommitment(o),c=gt(v(this,mi).computeBlobKzgProof(o,a));e.push({data:gt(o),commitment:gt(a),proof:c}),n.push(Cm(1,a))}else{const o=gt(s.data),a=gt(s.commitment),c=gt(s.proof);e.push({data:o,commitment:a,proof:c}),n.push(Cm(1,a))}}C(this,Rr,e),C(this,Cr,n)}get kzg(){return v(this,mi)}set kzg(t){t==null?C(this,mi,null):C(this,mi,KM(t))}get blobWrapperVersion(){return v(this,sa)}set blobWrapperVersion(t){C(this,sa,t)}get hash(){return this.signature==null?null:De(dt(this,oa,Ul).call(this,!0,!1))}get unsignedHash(){return De(this.unsignedSerialized)}get from(){return this.signature==null?null:kM(this.unsignedHash,this.signature.getCanonical())}get fromPublicKey(){return this.signature==null?null:dc.recoverPublicKey(this.unsignedHash,this.signature.getCanonical())}isSigned(){return this.signature!=null}get serialized(){return dt(this,oa,Ul).call(this,!0,!0)}get unsignedSerialized(){return dt(this,oa,Ul).call(this,!1,!1)}inferType(){const t=this.inferTypes();return t.indexOf(2)>=0?2:t.pop()}inferTypes(){const t=this.gasPrice!=null,e=this.maxFeePerGas!=null||this.maxPriorityFeePerGas!=null,n=this.accessList!=null,r=v(this,Ns)!=null||v(this,Cr);this.maxFeePerGas!=null&&this.maxPriorityFeePerGas!=null&&nt(this.maxFeePerGas>=this.maxPriorityFeePerGas,"priorityFee cannot be more than maxFee","BAD_DATA",{value:this}),nt(!e||this.type!==0&&this.type!==1,"transaction type cannot have maxFeePerGas or maxPriorityFeePerGas","BAD_DATA",{value:this}),nt(this.type!==0||!n,"legacy transaction cannot have accessList","BAD_DATA",{value:this});const s=[];return this.type!=null?s.push(this.type):this.authorizationList&&this.authorizationList.length?s.push(4):e?s.push(2):t?(s.push(1),n||s.push(0)):n?(s.push(1),s.push(2)):(r&&this.to||(s.push(0),s.push(1),s.push(2)),s.push(3)),s.sort(),s}isLegacy(){return this.type===0}isBerlin(){return this.type===1}isLondon(){return this.type===2}isCancun(){return this.type===3}clone(){return hi.from(this)}toJSON(){const t=e=>e==null?null:e.toString();return{type:this.type,to:this.to,data:this.data,nonce:this.nonce,gasLimit:t(this.gasLimit),gasPrice:t(this.gasPrice),maxPriorityFeePerGas:t(this.maxPriorityFeePerGas),maxFeePerGas:t(this.maxFeePerGas),value:t(this.value),chainId:t(this.chainId),sig:this.signature?this.signature.toJSON():null,accessList:this.accessList}}[XM](){return this.toString()}toString(){const t=[],e=r=>{let s=this[r];typeof s=="string"&&(s=JSON.stringify(s)),t.push(`${r}: ${s}`)};this.type&&e("type"),e("to"),e("data"),e("nonce"),e("gasLimit"),e("value"),this.chainId!=null&&e("chainId"),this.signature&&(e("from"),t.push(`signature: ${this.signature.toString()}`));const n=this.authorizationList;if(n){const r=[];for(const s of n){const o=[];o.push(`address: ${JSON.stringify(s.address)}`),s.nonce!=null&&o.push(`nonce: ${s.nonce}`),s.chainId!=null&&o.push(`chainId: ${s.chainId}`),s.signature&&o.push(`signature: ${s.signature.toString()}`),r.push(`Authorization { ${o.join(", ")} }`)}t.push(`authorizations: [ ${r.join(", ")} ]`)}return`Transaction { ${t.join(", ")} }`}static from(t){if(t==null)return new hi;if(typeof t=="string"){const n=qt(t);if(n[0]>=127)return hi.from(qM(n));switch(n[0]){case 1:return hi.from(tT(n));case 2:return hi.from(jM(n));case 3:return hi.from(nT(n));case 4:return hi.from(rT(n))}nt(!1,"unsupported transaction type","UNSUPPORTED_OPERATION",{operation:"from"})}const e=new hi;return t.type!=null&&(e.type=t.type),t.to!=null&&(e.to=t.to),t.nonce!=null&&(e.nonce=t.nonce),t.gasLimit!=null&&(e.gasLimit=t.gasLimit),t.gasPrice!=null&&(e.gasPrice=t.gasPrice),t.maxPriorityFeePerGas!=null&&(e.maxPriorityFeePerGas=t.maxPriorityFeePerGas),t.maxFeePerGas!=null&&(e.maxFeePerGas=t.maxFeePerGas),t.maxFeePerBlobGas!=null&&(e.maxFeePerBlobGas=t.maxFeePerBlobGas),t.data!=null&&(e.data=t.data),t.value!=null&&(e.value=t.value),t.chainId!=null&&(e.chainId=t.chainId),t.signature!=null&&(e.signature=_n.from(t.signature)),t.accessList!=null&&(e.accessList=t.accessList),t.authorizationList!=null&&(e.authorizationList=t.authorizationList),t.blobVersionedHashes!=null&&(e.blobVersionedHashes=t.blobVersionedHashes),t.kzg!=null&&(e.kzg=t.kzg),t.blobWrapperVersion!=null&&(e.blobWrapperVersion=t.blobWrapperVersion),t.blobs!=null&&(e.blobs=t.blobs),t.hash!=null&&(D(e.isSigned(),"unsigned transaction cannot define '.hash'","tx",t),D(e.hash===t.hash,"hash mismatch","tx",t)),t.from!=null&&(D(e.isSigned(),"unsigned transaction cannot define '.from'","tx",t),D(e.from.toLowerCase()===(t.from||"").toLowerCase(),"from mismatch","tx",t)),e}};jn=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Qo=new WeakMap,qo=new WeakMap,Zo=new WeakMap,jo=new WeakMap,$o=new WeakMap,ta=new WeakMap,ea=new WeakMap,na=new WeakMap,ia=new WeakMap,Ns=new WeakMap,Cr=new WeakMap,mi=new WeakMap,Rr=new WeakMap,ra=new WeakMap,sa=new WeakMap,oa=new WeakSet,Ul=function(t,e){nt(!t||this.signature!=null,"cannot serialize unsigned transaction; maybe you meant .unsignedSerialized","UNSUPPORTED_OPERATION",{operation:".serialized"});const n=t?this.signature:null;switch(this.inferType()){case 0:return ZM(this,n);case 1:return eT(this,n);case 2:return $M(this,n);case 3:return iT(this,n,e?this.blobs:null);case 4:return sT(this,n)}nt(!1,"unsupported transaction type","UNSUPPORTED_OPERATION",{operation:".serialized"})};let tu=hi;function Ks(i){return De(ir(i))}var oT="AEEUdwmgDS8BxQKKAP4BOgDjATAAngDUAIMAoABoAOAAagCOAEQAhABMAHIAOwA9ACsANgAmAGIAHgAuACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGgAeABMAGAUhBe8BFxREN8sF2wC5AK5HAW8ArQkDzQCuhzc3NzcBP68NEfMABQdHBuw5BV8FYAA9MzkI9r4ZBg7QyQAWA9CeOwLNCjcCjqkChuA/lm+RAsXTAoP6ASfnEQDytQFJAjWVCkeXAOsA6godAB/cwdAUE0WlBCN/AQUCQRjFD/MRBjHxDQSJbw0jBzUAswBxme+tnIcAYwabAysG8QAjAEMMmxcDqgPKQyDXCMMxA7kUQwD3NXOrAKmFIAAfBC0D3x4BJQDBGdUFAhEgVD8JnwmQJiNWYUzrg0oAGwAUAB0AFnNcACkAFgBP9h3gPfsDOWDKneY2ChglX1UDYD30ABsAFAAdABZzIGRAnwDD8wAjAEEMzRbDqgMB2sAFYwXqAtCnAsS4AwpUJKRtFHsadUz9AMMVbwLpABM1NJEX0ZkCgYMBEyMAxRVvAukAEzUBUFAtmUwSAy4DBTER33EftQHfSwB5MxJ/AjkWKQLzL8E/cwBB6QH9LQDPDtO9ASNriQC5DQANAwCK21EFI91zHwCoL9kBqQcHBwcHKzUDowBvAQohPvU3fAQgHwCyAc8CKQMA5zMSezr7ULgFmDp/LzVQBgEGAi8FYQVgt8AFcTtlQhpCWEmfe5tmZ6IAExsDzQ8t+X8rBKtTAltbAn0jsy8Bl6utPWMDTR8Ei2kRANkDBrNHNysDBzECQWUAcwFpJ3kAiyUhAJ0BUb8AL3EfAbfNAz81KUsFWwF3YQZtAm0A+VEfAzEJDQBRSQCzAQBlAHsAM70GD/v3IZWHBwARKQAxALsjTwHZAeMPEzmXgIHwABIAGQA8AEUAQDt3gdvIEGcQZAkGTRFMdEIVEwK0D64L7REdDNkq09PgADSxB/MDWwfzA1sDWwfzB/MDWwfzA1sDWwNbA1scEvAi28gQZw9QBHUFlgWTBN4IiyZREYkHMAjaVBV0JhxPA00BBCMtSSQ7mzMTJUpMFE0LCAQ2SmyvfUADTzGzVP2QqgPTMlc5dAkGHnkSqAAyD3skNb1OhnpPcagKU0+2tYdJak5vAsY6sEAACikJm2/Dd1YGRRAfJ6kQ+ww3AbkBPw3xS9wE9QY/BM0fgRkdD9GVoAipLeEM8SbnLqWAXiP5KocF8Uv4POELUVFsD10LaQnnOmeBUgMlAREijwrhDT0IcRD3Cs1vDekRSQc9A9lJngCpBwULFR05FbkmFGKwCw05ewb/GvoLkyazEy17AAXXGiUGUQEtGwMA0y7rhbRaNVwgT2MGBwspI8sUrFAkDSlAu3hMGh8HGSWtApVDdEqLUToelyH6PEENai4XUYAH+TwJGVMLhTyiRq9FEhHWPpE9TCJNTDAEOYMsMyePCdMPiQy9fHYBXQklCbUMdRM1ERs3yQg9Bx0xlygnGQglRplgngT7owP3E9UDDwVDCUUHFwO5HDETMhUtBRGBKNsC9zbZLrcCk1aEARsFzw8pH+MQVEfkDu0InwJpA4cl7wAxFSUAGyKfCEdnAGOP3FMJLs8Iy2pwI3gDaxTrZRF3B5UOWwerHDcVwxzlcMxeD4YMKKezCV8BeQmdAWME5wgNNV+MpCBFZ1eLXBifIGVBQ14AAjUMaRWjRMGHfAKPD28SHwE5AXcHPQ0FAnsR8RFvEJkI74YINbkz/DopBFMhhyAVCisDU2zSCysm/Qz8bQGnEmYDEDRBd/Jnr2C6KBgBBx0yyUFkIfULlk/RDKAaxRhGVDIZ6AfDA/ca9yfuQVsGAwOnBxc6UTPyBMELbQiPCUMATQ6nGwfbGG4KdYzUATWPAbudA1uVhwJzkwY7Bw8Aaw+LBX3pACECqwinAAkA0wNbAD0CsQehAB0AiUUBQQMrMwEl6QKTA5cINc8BmTMB9y0EH8cMGQD7O25OAsO1AoBuZqYF4VwCkgJNOQFRKQQJUktVA7N15QDfAE8GF+NLARmvTs8e50cB43MvAMsA/wAJOQcJRQHRAfdxALsBYws1Caa3uQFR7S0AhwAZbwHbAo0A4QA5AIP1AVcAUQVd/QXXAlNNARU1HC9bZQG/AyMBNwERAH0Gz5GpzQsjBHEH1wIQHxXlAu8yB7kFAyLjE9FCyQK94lkAMhoKPAqrCqpgX2Q3CjV2PVQAEh+sPss/UgVVO1c7XDtXO1w7VztcO1c7XDtXO1wDm8Pmw+YKcF9JYe8Mqg3YRMw6TRPfYFVgNhPMLbsUxRXSJVoZQRrAJwkl6FUNDwgt12Y0CDA0eRfAAEMpbINFY4oeNApPHOtTlVT8LR8AtUumM7MNsBsZREQFS3XxYi4WEgomAmSFAmJGX1GzAV83JAKh+wJonAJmDQKfiDgfDwJmPwJmKgRyBIMDfxcDfpY5Cjl7GzmGOicnAmwhAjI6OA4CbcsCbbLzjgM3a0kvAWsA4gDlAE4JB5wMkQECD8YAEbkCdzMCdqZDAnlPRwJ4viFg30WyRvcCfEMCeswCfQ0CfPRIBEiBZygALxlJXEpfGRtK0ALRBQLQ0EsrA4hTA4fqRMmRNgLypV0HAwOyS9JMMSkH001QTbMCi0MCitzFHwshR2sJuwKOOwKOYESbhQKO3QKOYHxRuFM5AQ5S2FSJApP/ApMQAO0AIFUiVbNV1AosHymZijLleGpFPz0Cl6MC77ZYJawAXSkClpMCloCgAK1ZsFoNhVEAPwKWuQKWUlxIXNUCmc8CmWhczl0LHQKcnznGOqECnBoCn58CnryOACETNS4TAp31Ap6WALlBYThh8wKe1wKgcgGtAp6jIwKeUqljzGQrKS8CJ7MCJoICoP8CoFDbAqYzAqXSAqgDAIECp/ZogGi1AAdNaiBq1QKs5wKssgKtawKtBgJXIQJV4AKx5dsDH1JsmwKywRECsuwbbORtZ21MYwMl0QK2YD9DbpQDKUkCuGICuUsZArkue3A6cOUCvR0DLbYDMhUCvoxyBgMzdQK+HnMmc1MCw88CwwhzhnRPOUl05AM8qwEDPJ4DPcMCxYACxksCxhSNAshtVQLISALJUwLJMgJkoQLd1nh9ZXiyeSlL1AMYp2cGAmH4GfeVKHsPXpZevxUCz28Cz3AzT1fW9xejAMqxAs93AS3uA04Wfk8JAtwrAtuOAtJTA1JgA1NjAQUDVZCAjUMEzxrxZEl5A4LSg5EC2ssC2eKEFIRNp0ADhqkAMwNkEoZ1Xf0AWQLfaQLevHd7AuIz7RgB8zQrAfSfAfLWiwLr9wLpdH0DAur9AuroAP1LAb0C7o0C66CWrpcHAu5DA4XkmH1w5HGlAvMHAG0DjhqZlwL3FwORcgOSiwL3nAL53QL4apogmq+/O5siA52HAv7+AR8APZ8gAZ+3AwWRA6ZuA6bdANXJAwZuoYyiCQ0DDE0BEwEjB3EGZb1rCQC/BG/DFY8etxEAG3k9ACcDNxJRA42DAWcrJQCM8wAlAOanC6OVCLsGI6fJBgCvBRnDBvElRUYFFoAFcD9GSDNCKUK8X3kZX8QAls0FOgCQVCGbwTsuYDoZutcONxjOGJHJ/gVfBWAFXwVgBWsFYAVfBWAFXwVgBV8FYAVfBWBOHQjfjW8KCgoKbF7xMwTRA7kGN8PDAMMEr8MA70gxFroFTj5xPnhCR0K+X30/X/AAWBkzswCNBsxzzASm70aCRS4rDDMeLz49fnXfcsH5GcoscQFz13Y4HwVnBXLJycnACNdRYwgICAqEXoWTxgA7P4kACxbZBu21Kw0AjMsTAwkVAOVtJUUsJ1JCuULESUArXy9gPi9AKwnJRQYKTD9LPoA+iT54PnkCkULEUUpDX9NWV3JVEjQAc1w3A3IBE3YnX+g7QiMJb6MKaiszRCUuQrNCxDPMCcwEX9EWJzYREBEEBwIHKn6l33JCNVIfybPJtAltydPUCmhBZw/tEKsZAJOVJU1CLRuxbUHOQAo7P0s+eEJHHA8SJVRPdGM0NVrpvBoKhfUlM0JHHGUQUhEWO1xLSj8MO0ucNAqJIzVCRxv9EFsqKyA4OQgNj2nwZgp5ZNFgE2A1K3YHS2AhQQojJmC7DgpzGG1WYFUZCQYHZO9gHWCdYIVgu2BTYJlwFh8GvRbcXbG8YgtDHrMBwzPVyQonHQgkCyYBgQJ0Ajc4nVqIAwGSCsBPIgDsK3SWEtIVBa5N8gGjAo+kVwVIZwD/AEUSCDweX4ITrRQsJ8K3TwBXFDwEAB0TvzVcAtoTS20RIwDgVgZ9BBImYgA5AL4Coi8LFnezOkCnIQFjAY4KBAPh9RcGsgZSBsEAJctdsWIRu2kTkQstRw7DAcMBKgpPBGIGMDAwKCYnKTQaLg4AKRSVAFwCdl+YUZ0JdicFD3lPAdt1F9ZZKCGxuE3yBxkFVGcA/wBFEgiCBwAOLHQSjxOtQDg1z7deFRMAZ8QTAGtKb1ApIiPHADkAvgKiLy1DFtYCmBiDAlDDWNB0eo7fpaMO/aEVRRv0ATEQZBIODyMEAc8JQhCbDRgzFD4TAEMAu9YBCgCsAOkAm5I3ABwAYxvONnR+MhXJAxgKQyxL2+kkJhMbhQKDBMkSsvF0AD9BNQ6uQC7WqSQHwxEAEEIu1hkhAH2z4iQPwyJPHNWpdyYBRSpnJALzoBAEVPPsH20MxA0CCEQKRgAFyAtFAlMNwwjEDUQJRArELtapMg7DDZgJIw+TGukEIwvDFkMAqAtDEMMMBhioe+QAO3MMRAACrgnEBSPY9Q0FDnbSBoMAB8MSYxkSxAEJAPIJAAB8FWMOFtMc/HcXwxhDAC7DAvOowwAewwJdKDKHAAHDAALrFUQVwwAbwyvzpWMWv8wA/ABpAy++bcYDUKPD0KhDCwKmJ1MAAmMA5+UZwxAagwipBRL/eADfw6fDGOMCGsOjk3l6BwOpo4sAEsMOGxMAA5sAbcMOAAvDp0MJGkMDwgipnNIPAwfIqUMGAOGDAAPzABXDAAcDAAnDAGmTABrDAA7DChjDjnEWAwABYwAOcwAuUyYABsMAF8MIKQANUgC6wy4AA8MADqMq8wCyYgAcIwAB8wqpAAXOCx0V4wAHowBCwwEKAGnDAAuDAB3DAAjDCakABdIAbqcZ3QCZCCkABdIAAAFDAAfjAB2jCCkABqIACYMAGzMAbSMA5sOIAAhjAAhDABTDBAkpAAbSAOOTAAlDC6kOzPtnAAdDAG6kQFAATwAKwwwAA0MACbUDPwAHIwAZgwACE6cDAAojAApDAAoDp/MGwwAJIwADEwAQQwgAFEMAEXMAD5MADfMADcMAGRMOFiMAFUMAbqMWuwHDAMIAE0MLAGkzEgDhUwACQwAEWgAXgwUjAAbYABjDBSYBgzBaAEFNALcQBxUMegAwMngBrA0IZgJ0KxQHBREPd1N0ZzKRJwaIHAZqNT4DqQq8BwngAB4DAwt2AX56T1ocKQNXAh1GATQGC3tOxYNagkgAMQA5CQADAQEAWxLjAIOYNAEzAH7tFRk6TglSAF8NAAlYAQ+S1ACAQwQorQBiAN4dAJ1wPyeTANVzuQDX3AIeEMp9eyMgXiUAEdkBkJizKltbVVAaRMqRAAEAhyQ/SDEz6BmfVwB6ATEsOClKIRcDOF0E/832AFNt5AByAnkCRxGCOs94NjXdAwINGBonDBwPALW2AwICAgAAAAAAAAYDBQMDARrUAwAtAAAAAgEGBgYGBgYFBQUFBQUEBQYHCAkEBQUFBQQAAAICAAAAIgCNAJAAlT0A6gC7ANwApEQAwgCyAK0AqADuAKYA2gCjAOcBCAEDAMcAgQBiANIA1AEDAN4A8gCQAKkBMQDqAN8A3AsBCQ8yO9ra2tq8xuLT1tRJOB0BUgFcNU0BWgFpAWgBWwFMUUlLbhMBUxsNEAs6PhMOACcUKy0vMj5AQENDQ0RFFEYGJFdXV1dZWVhZL1pbXVxcI2NnZ2ZoZypsbnZ1eHh4eHh4enp6enp6enp6enp8fH18e2IARPIASQCaAHgAMgBm+ACOAFcAVwA3AnbvAIsABfj4AGQAk/IAnwBPAGIAZP//sACFAIUAaQBWALEAJAC2AIMCQAJDAPwA5wD+AP4A6AD/AOkA6QDoAOYALwJ7AVEBQAE+AVQBPgE+AT4BOQE4ATgBOAEcAVgXADEQCAEAUx8SHgsdHhYAjgCWAKYAUQBqIAIxAHYAbwCXAxUDJzIDIUlGTzEAkQJPAMcCVwKkAMAClgKWApYClgKWApYCiwKWApYClgKWApYClgKVApUCmAKgApcClgKWApQClAKUApQCkgKVAnUB1AKXAp8ClgKWApUeAIETBQD+DQOfAmECOh8BVBg9AuIZEjMbAU4/G1WZAXusRAFpYQEFA0FPAQYAmTEeIJdyADFoAHEANgCRA5zMk/C2jGINwjMWygIZCaXdfDILBCs5dAE7YnQBugDlhoiHhoiGiYqKhouOjIaNkI6Ij4qQipGGkoaThpSSlYaWhpeKmIaZhpqGm4aci52QnoqfhuIC4XTpAt90AIp0LHSoAIsAdHQEQwRABEIERQRDBEkERgRBBEcESQRIBEQERgRJAJ5udACrA490ALxuAQ10ANFZdHQA13QCFHQA/mJ0AP4BIQD+APwA/AD9APwDhGZ03ASMK23HAP4A/AD8AP0A/CR0dACRYnQA/gCRASEA/gCRAvQA/gCRA4RmdNwEjCttxyR0AP9idAEhAP4A/gD8APwA/QD8AP8A/AD8AP0A/AOEZnTcBIwrbcckdHQAkWJ0ASEA/gCRAP4AkQL0AP4AkQOEZnTcBIwrbcckdAJLAT50AlIBQXQCU8l0dAJfdHQDpgL0A6YDpgOnA6cDpwOnA4RmdNwEjCttxyR0dACRYnQBIQOmAJEDpgCRAvQDpgCRA4RmdNwEjCttxyR0BDh0AJEEOQCRDpU5dSgCADR03gV2CwArdAEFAM5iCnR0AF1iAAYcOgp0dACRCnQAXAEIwWZ0CnRmdHQAkWZ0CnRmdEXgAFF03gp0dEY0tlT2u3SOAQTwscwhjZZKrhYcBSfFp9XNbKiVDOD2b+cpe4/Z17mQnbtzzhaeQtE2GGj0IDNTjRUSyTxxw/RPHW/+vS7d1NfRt9z9QPZg4X7QFfhCnkvgNPIItOsC2eV6hPannZNHlZ9xrwZXIMOlu3jSoQSq78WEjwLjw1ELSlF1aBvfzwk5ZX7AUvQzjPQKbDuQ+sm4wNOp4A6AdVuRS0t1y/DZpg4R6m7FNjM9HgvW7Bi88zaMjOo6lM8wtBBdj8LP4ylv3zCXPhebMKJc066o9sF71oFW/8JXu86HJbwDID5lzw5GWLR/LhT0Qqnp2JQxNZNfcbLIzPy+YypqRm/lBmGmex+82+PisxUumSeJkALIT6rJezxMH+CTJmQtt5uwTVbL3ptmjDUQzlSIvWi8Tl7ng1NpuRn1Ng4n14Qc+3Iil7OwkvNWogLSPkn3pihIFytyIGmMhOe3n1tWsuMy9BdKyqF4Z3v2SgggTL9KVvMXPnCbRe+oOuFFP3HejBG/w9gvmfNYvg6JuWia2lcSSN1uIjBktzoIazOHPJZ7kKHPz8mRWVdW3lA8WGF9dQF6Bm673boov3BUWDU2JNcahR23GtfHKLOz/viZ+rYnZFaIznXO67CYEJ1fXuTRpZhYZkKe54xeoagkNGLs+NTZHE0rX45/XvQ2RGADX6vcAvdxIUBV27wxGm2zjZo4X3ILgAlrOFheuZ6wtsvaIj4yLY7qqawlliaIcrz2G+c3vscAnCkCuMzMmZvMfu9lLwTvfX+3cVSyPdN9ZwgDZhfjRgNJcLiJ67b9xx8JHswprbiE3v9UphotAPIgnXVIN5KmMc0piXhc6cChPnN+MRhG9adtdttQTTwSIpl8I4/j//d3sz1326qTBTpPRM/Hgh3kzqEXs8ZAk4ErQhNO8hzrQ0DLkWMA/N+91tn2MdOJnWC2FCZehkQrwzwbKOjhvZsbM95QoeL9skYyMf4srVPVJSgg7pOLUtr/n9eT99oe9nLtFRpjA9okV2Kj8h9k5HaC0oivRD8VyXkJ81tcd4fHNXPCfloIQasxsuO18/46dR2jgul/UIet2G0kRvnyONMKhHs6J26FEoqSqd+rfYjeEGwHWVDpX1fh1jBBcKGMqRepju9Y00mDVHC+Xdij/j44rKfvfjGinNs1jO/0F3jB83XCDINN/HB84axlP+3E/klktRo+vl3U/aiyMJbIodE1XSsDn6UAzIoMtUObY2+k/4gY/l+AkZJ5Sj2vQrkyLm3FoxjhDX+31UXBFf9XrAH31fFqoBmDEZvhvvpnZ87N+oZEu7U9O/nnk+QWj3x8uyoRbEnf+O5UMr9i0nHP38IF5AvzrBW8YWBUR0mIAzIvndQq9N3v/Jto3aPjPXUPl8ASdPPyAp7jENf8bk7VMM9ol9XGmlBmeDMuGqt+WzuL6CXAxXjIhCPM5vACchgMJ/8XBGLO/D1isVvGhwwHHr1DLaI5mn2Jr/b1pUD90uciDaS8cXNDzCWvNmT/PhQe5e8nTnnnkt8Ds/SIjibcum/fqDhKopxAY8AkSrPn+IGDEKOO+U3XOP6djFs2H5N9+orhOahiQk5KnEUWa+CzkVzhp8bMHRbg81qhjjXuIKbHjSLSIBKWqockGtKinY+z4/RdBUF6pcc3JmnlxVcNgrI4SEzKUZSwcD2QCyxzKve+gAmg6ZuSRkpPFa6mfThu7LJNu3H5K42uCpNvPAsoedolKV/LHe/eJ+BbaG5MG0NaSGVPRUmNFMFFSSpXEcXwbVh7UETOZZtoVNRGOIbbkig3McEtR68cG0RZAoJevWYo7Dg/lZ1CQzblWeUvVHmr8fY4Nqd9JJiH/zEX24mJviH60fAyFr0A3c4bC1j3yZU60VgJxXn8JgJXLUIsiBnmKmMYz+7yBQFBvqb2eYnuW59joZBf56/wXvWIR4R8wTmV80i1mZy+S4+BUES+hzjk0uXpC///z/IlqHZ1monzlXp8aCfhGKMti73FI1KbL1q6IKO4fuBuZ59gagjn5xU79muMpHXg6S+e+gDM/U9BKLHbl9l6o8czQKl4RUkJJiqftQG2i3BMg/TQlUYFkJDYBOOvAugYuzYSDnZbDDd/aSd9x0Oe6F+bJcHfl9+gp6L5/TgA+BdFFovbfCrQ40s5vMPw8866pNX8zyFGeFWdxIpPVp9Rg1UPOVFbFZrvaFq/YAzHQgqMWpahMYfqHpmwXfHL1/kpYmGuHFwT55mQu0dylfNuq2Oq0hTMCPwqfxnuBIPLXfci4Y1ANy+1CUipQxld/izVh16WyG2Q0CQQ9NqtAnx1HCHwDj7sYxOSB0wopZSnOzxQOcExmxrVTF2BkOthVpGfuhaGECfCJpJKpjnihY+xOT2QJxN61+9K6QSqtv2Shr82I3jgJrqBg0wELFZPjvHpvzTtaJnLK6Vb97Yn933koO/saN7fsjwNKzp4l2lJVx2orjCGzC/4ZL4zCver6aQYtC5sdoychuFE6ufOiog+VWi5UDkbmvmtah/3aArEBIi39s5ILUnlFLgilcGuz9CQshEY7fw2ouoILAYPVT/gyAIq3TFAIwVsl+ktkRz/qGfnCDGrm5gsl/l9QdvCWGsjPz3dU7XuqKfdUrr/6XIgjp4rey6AJBmCmUJMjITHVdFb5m1p+dLMCL8t55zD42cmftmLEJC0Da04YiRCVUBLLa8D071/N5UBNBXDh0LFsmhV/5B5ExOB4j3WVG/S3lfK5o+V6ELHvy6RR9n4ac+VsK4VE4yphPvV+kG9FegTBH4ZRXL2HytUHCduJazB/KykjfetYxOXTLws267aGOd+I+JhKP//+VnXmS90OD/jvLcVu0asyqcuYN1mSb6XTlCkqv1vigZPIYwNF/zpWcT1GR/6aEIRjkh0yhg4LXJfaGobYJTY4JI58KiAKgmmgAKWdl5nYCeLqavRJGQNuYuZtZFGx+IkI4w4NS2xwbetNMunOjBu/hmKCI/w7tfiiyUd//4rbTeWt4izBY8YvGIN6vyKYmP/8X8wHKCeN+WRcKM70+tXKNGyevU9H2Dg5BsljnTf8YbsJ1TmMs74Ce2XlHisleguhyeg44rQOHZuw/6HTkhnnurK2d62q6yS7210SsAIaR+jXMQA+svkrLpsUY+F30Uw89uOdGAR6vo4FIME0EfVVeHTu6eKicfhSqOeXJhbftcd08sWEnNUL1C9fnprTgd83IMut8onVUF0hvqzZfHduPjbjwEXIcoYmy+P6tcJZHmeOv6VrvEdkHDJecjHuHeWANe79VG662qTjA/HCvumVv3qL+LrOcpqGps2ZGwQdFJ7PU4iuyRlBrwfO+xnPyr47s2cXVbWzAyznDiBGjCM3ksxjjqM62GE9C8f5U38kB3VjtabKp/nRdvMESPGDG90bWRLAt1Qk5DyLuazRR1YzdC1c+hZXvAWV8xA72S4A8B67vjVhbba3MMop293FeEXpe7zItMWrJG/LOH9ByOXmYnNJfjmfuX9KbrpgLOba4nZ+fl8Gbdv/ihv+6wFGKHCYrVwmhFC0J3V2bn2tIB1wCc1CST3d3X2OyxhguXcs4sm679UngzofuSeBewMFJboIQHbUh/m2JhW2hG9DIvG2t7yZIzKBTz9wBtnNC+2pCRYhSIuQ1j8xsz5VvqnyUIthvuoyyu7fNIrg/KQUVmGQaqkqZk/Vx5b33/gsEs8yX7SC1J+NV4icz6bvIE7C5G6McBaI8rVg56q5QBJWxn/87Q1sPK4+sQa8fLU5gXo4paaq4cOcQ4wR0VBHPGjKh+UlPCbA1nLXyEUX45qZ8J7/Ln4FPJE2TdzD0Z8MLSNQiykMMmSyOCiFfy84Rq60emYB2vD09KjYwsoIpeDcBDTElBbXxND72yhd9pC/1CMid/5HUMvAL27OtcIJDzNKpRPNqPOpyt2aPGz9QWIs9hQ9LiX5s8m9hjTUu/f7MyIatjjd+tSfQ3ufZxPpmJhTaBtZtKLUcfOCUqADuO+QoH8B9v6U+P0HV1GLQmtoNFTb3s74ivZgjES0qfK+8RdGgBbcCMSy8eBvh98+et1KIFqSe1KQPyXULBMTsIYnysIwiZBJYdI20vseV+wuJkcqGemehKjaAb9L57xZm3g2zX0bZ2xk/fU+bCo7TlnbW7JuF1YdURo/2Gw7VclDG1W7LOtas2LX4upifZ/23rzpsnY/ALfRgrcWP5hYmV9VxVOQA1fZvp9F2UNU+7d7xRyVm5wiLp3/0dlV7vdw1PMiZrbDAYzIVqEjRY2YU03sJhPnlwIPcZUG5ltL6S8XCxU1eYS5cjr34veBmXAvy7yN4ZjArIG0dfD/5UpBNlX1ZPoxJOwyqRi3wQWtOzd4oNKh0LkoTm8cwqgIfKhqqGOhwo71I+zXnMemTv2B2AUzABWyFztGgGULjDDzWYwJUVBTjKCn5K2QGMK1CQT7SzziOjo+BhAmqBjzuc3xYym2eedGeOIRJVyTwDw37iCMe4g5Vbnsb5ZBdxOAnMT7HU4DHpxWGuQ7GeiY30Cpbvzss55+5Km1YsbD5ea3NI9QNYIXol5apgSu9dZ8f8xS5dtHpido5BclDuLWY4lhik0tbJa07yJhH0BOyEut/GRbYTS6RfiTYWGMCkNpfSHi7HvdiTglEVHKZXaVhezH4kkXiIvKopYAlPusftpE4a5IZwvw1x/eLvoDIh/zpo9FiQInsTb2SAkKHV42XYBjpJDg4374XiVb3ws4qM0s9eSQ5HzsMU4OZJKuopFjBM+dAZEl8RUMx5uU2N486Kr141tVsGQfGjORYMCJAMsxELeNT4RmWjRcpdTGBwcx6XN9drWqPmJzcrGrH4+DRc7+n1w3kPZwu0BkNr6hQrqgo7JTB9A5kdJ/H7P4cWBMwsmuixAzJB3yrQpnGIq90lxAXLzDCdn1LPibsRt7rHNjgQBklRgPZ8vTbjXdgXrTWQsK5MdrXXQVPp0Rinq3frzZKJ0qD6Qhc40VzAraUXlob1gvkhK3vpmHgI6FRlQZNx6eRqkp0zy4AQlX813fAPtL3jMRaitGFFjo0zmErloC+h+YYdVQ6k4F/epxAoF0BmqEoKNTt6j4vQZNQ2BoqF9Vj53TOIoNmDiu9Xp15RkIgQIGcoLpfoIbenzpGUAtqFJp5W+LLnx38jHeECTJ/navKY1NWfN0sY1T8/pB8kIH3DU3DX+u6W3YwpypBMYOhbSxGjq84RZ84fWJow8pyHqn4S/9J15EcCMsXqrfwyd9mhiu3+rEo9pPpoJkdZqHjra4NvzFwuThNKy6hao/SlLw3ZADUcUp3w3SRVfW2rhl80zOgTYnKE0Hs2qp1J6H3xqPqIkvUDRMFDYyRbsFI3M9MEyovPk8rlw7/0a81cDVLmBsR2ze2pBuKb23fbeZC0uXoIvDppfTwIDxk1Oq2dGesGc+oJXWJLGkOha3CX+DUnzgAp9HGH9RsPZN63Hn4RMA5eSVhPHO+9RcRb/IOgtW31V1Q5IPGtoxPjC+MEJbVlIMYADd9aHYWUIQKopuPOHmoqSkubnAKnzgKHqgIOfW5RdAgotN6BN+O2ZYHkuemLnvQ8U9THVrS1RtLmKbcC7PeeDsYznvqzeg6VCNwmr0Yyx1wnLjyT84BZz3EJyCptD3yeueAyDWIs0L2qs/VQ3HUyqfrja0V1LdDzqAikeWuV4sc7RLIB69jEIBjCkyZedoUHqCrOvShVzyd73OdrJW0hPOuQv2qOoHDc9xVb6Yu6uq3Xqp2ZaH46A7lzevbxQEmfrzvAYSJuZ4WDk1Hz3QX1LVdiUK0EvlAGAYlG3Md30r7dcPN63yqBCIj25prpvZP0nI4+EgWoFG95V596CurXpKRBGRjQlHCvy5Ib/iW8nZJWwrET3mgd6mEhfP4KCuaLjopWs7h+MdXFdIv8dHQJgg1xi1eYqB0uDYjxwVmri0Sv5XKut/onqapC+FQiC2C1lvYJ9MVco6yDYsS3AANUfMtvtbYI2hfwZatiSsnoUeMZd34GVjkMMKA+XnjJpXgRW2SHTZplVowPmJsvXy6w3cfO1AK2dvtZEKTkC/TY9LFiKHCG0DnrMQdGm2lzlBHM9iEYynH2UcVMhUEjsc0oDBTgo2ZSQ1gzkAHeWeBXYFjYLuuf8yzTCy7/RFR81WDjXMbq2BOH5dURnxo6oivmxL3cKzKInlZkD31nvpHB9Kk7GfcfE1t+1V64b9LtgeJGlpRFxQCAqWJ5DoY77ski8gsOEOr2uywZaoO/NGa0X0y1pNQHBi3b2SUGNpcZxDT7rLbBf1FSnQ8guxGW3W+36BW0gBje4DOz6Ba6SVk0xiKgt+q2JOFyr4SYfnu+Ic1QZYIuwHBrgzr6UvOcSCzPTOo7D6IC4ISeS7zkl4h+2VoeHpnG/uWR3+ysNgPcOIXQbv0n4mr3BwQcdKJxgPSeyuP/z1Jjg4e9nUvoXegqQVIE30EHx5GHv+FAVUNTowYDJgyFhf5IvlYmEqRif6+WN1MkEJmDcQITx9FX23a4mxy1AQRsOHO/+eImX9l8EMJI3oPWzVXxSOeHU1dUWYr2uAA7AMb+vAEZSbU3qob9ibCyXeypEMpZ6863o6QPqlqGHZkuWABSTVNd4cOh9hv3qEpSx2Zy/DJMP6cItEmiBJ5PFqQnDEIt3NrA3COlOSgz43D7gpNFNJ5MBh4oFzhDPiglC2ypsNU4ISywY2erkyb1NC3Qh/IfWj0eDgZI4/ln8WPfBsT3meTjq1Uqt1E7Zl/qftqkx6aM9KueMCekSnMrcHj1CqTWWzEzPsZGcDe3Ue4Ws+XFYVxNbOFF8ezkvQGR6ZOtOLU2lQEnMBStx47vE6Pb7AYMBRj2OOfZXfisjJnpTfSNjo6sZ6qSvNxZNmDeS7Gk3yYyCk1HtKN2UnhMIjOXUzAqDv90lx9O/q/AT1ZMnit5XQe9wmQxnE/WSH0CqZ9/2Hy+Sfmpeg8RwsHI5Z8kC8H293m/LHVVM/BA7HaTJYg5Enk7M/xWpq0192ACfBai2LA/qrCjCr6Dh1BIMzMXINBmX96MJ5Hn2nxln/RXPFhwHxUmSV0EV2V0jm86/dxxuYSU1W7sVkEbN9EzkG0QFwPhyHKyb3t+Fj5WoUUTErcazE/N6EW6Lvp0d//SDPj7EV9UdJN+Amnf3Wwk3A0SlJ9Z00yvXZ7n3z70G47Hfsow8Wq1JXcfwnA+Yxa5mFsgV464KKP4T31wqIgzFPd3eCe3j5ory5fBF2hgCFyVFrLzI9eetNXvM7oQqyFgDo4CTp/hDV9NMX9JDHQ/nyHTLvZLNLF6ftn2OxjGm8+PqOwhxnPHWipkE/8wbtyri80Sr7pMNkQGMfo4ZYK9OcCC4ESVFFbLMIvlxSoRqWie0wxqnLfcLSXMSpMMQEJYDVObYsXIQNv4TGNwjq1kvT1UOkicTrG3IaBZ3XdScS3u8sgeZPVpOLkbiF940FjbCeNRINNvDbd01EPBrTCPpm12m43ze1bBB59Ia6Ovhnur/Nvx3IxwSWol+3H2qfCJR8df6aQf4v6WiONxkK+IqT4pKQrZK/LplgDI/PJZbOep8dtbV7oCr6CgfpWa8NczOkPx81iSHbsNhVSJBOtrLIMrL31LK9TqHqAbAHe0RLmmV806kRLDLNEhUEJfm9u0sxpkL93Zgd6rw+tqBfTMi59xqXHLXSHwSbSBl0EK0+loECOPtrl+/nsaFe197di4yUgoe4jKoAJDXc6DGDjrQOoFDWZJ9HXwt8xDrQP+7aRwWKWI1GF8s8O4KzxWBBcwnl3vnl1Oez3oh6Ea1vjR7/z7DDTrFtqU2W/KAEzAuXDNZ7MY73MF216dzdSbWmUp4lcm7keJfWaMHgut9x5C9mj66Z0lJ+yhsjVvyiWrfk1lzPOTdhG15Y7gQlXtacvI7qv/XNSscDwqkgwHT/gUsD5yB7LdRRvJxQGYINn9hTpodKFVSTPrtGvyQw+HlRFXIkodErAGu9Iy1YpfSPc3jkFh5CX3lPxv7aqjE/JAfTIpEjGb/H7MO0e2vsViSW1qa/Lmi4/n4DEI3g7lYrcanspDfEpKkdV1OjSLOy0BCUqVoECaB55vs06rXl4jqmLsPsFM/7vYJ0vrBhDCm/00A/H81l1uekJ/6Lml3Hb9+NKiLqATJmDpyzfYZFHumEjC662L0Bwkxi7E9U4cQA0XMVDuMYAIeLMPgQaMVOd8fmt5SflFIfuBoszeAw7ow5gXPE2Y/yBc/7jExARUf/BxIHQBF5Sn3i61w4z5xJdCyO1F1X3+3ax+JSvMeZ7S6QSKp1Fp/sjYz6Z+VgCZzibGeEoujryfMulH7Rai5kAft9ebcW50DyJr2uo2z97mTWIu45YsSnNSMrrNUuG1XsYBtD9TDYzQffKB87vWbkM4EbPAFgoBV4GQS+vtFDUqOFAoi1nTtmIOvg38N4hT2Sn8r8clmBCXspBlMBYTnrqFJGBT3wZOzAyJDre9dHH7+x7qaaKDOB4UQALD5ecS0DE4obubQEiuJZ0EpBVpLuYcce8Aa4PYd/V4DLDAJBYKQPCWTcrEaZ5HYbJi11Gd6hjGom1ii18VHYnG28NKpkz2UKVPxlhYSp8uZr367iOmoy7zsxehW9wzcy2zG0a80PBMCRQMb32hnaHeOR8fnNDzZhaNYhkOdDsBUZ3loDMa1YP0uS0cjUP3b/6DBlqmZOeNABDsLl5BI5QJups8uxAuWJdkUB/pO6Zax6tsg7fN5mjjDgMGngO+DPcKqiHIDbFIGudxtPTIyDi9SFMKBDcfdGQRv41q1AqmxgkVfJMnP8w/Bc7N9/TR6C7mGObFqFkIEom8sKi2xYqJLTCHK7cxzaZvqODo22c3wisBCP4HeAgcRbNPAsBkNRhSmD48dHupdBRw4mIvtS5oeF6zeT1KMCyhMnmhpkFAGWnGscoNkwvQ8ZM5lE/vgTHFYL99OuNxdFBxTEDd5v2qLR8y9WkXsWgG6kZNndFG+pO/UAkOCipqIhL3hq7cRSdrCq7YhUsTocEcnaFa6nVkhnSeRYUA1YO0z5itF9Sly3VlxYDw239TJJH6f3EUfYO5lb7bcFcz8Bp7Oo8QmnsUHOz/fagVUBtKEw1iT88j+aKkv8cscKNkMxjYr8344D1kFoZ7/td1W6LCNYN594301tUGRmFjAzeRg5vyoM1F6+bJZ/Q54jN/k8SFd3DxPTYaAUsivsBfgTn7Mx8H2SpPt4GOdYRnEJOH6jHM2p6SgB0gzIRq6fHxGMmSmqaPCmlfwxiuloaVIitLGN8wie2CDWhkzLoCJcODh7KIOAqbHEvXdUxaS4TTTs07Clzj/6GmVs9kiZDerMxEnhUB6QQPlcfqkG9882RqHoLiHGBoHfQuXIsAG8GTAtao2KVwRnvvam8jo1e312GQAKWEa4sUVEAMG4G6ckcONDwRcg1e2D3+ohXgY4UAWF8wHKQMrSnzCgfFpsxh+aHXMGtPQroQasRY4U6UdG0rz1Vjbka0MekOGRZQEvqQFlxseFor8zWFgHek3v29+WqN6gaK5gZOTOMZzpQIC1201LkMCXild3vWXSc5UX9xcFYfbRPzGFa1FDcPfPB/jUEq/FeGt419CI3YmBlVoHsa4KdcwQP5ZSwHHhFJ7/Ph/Rap/4vmG91eDwPP0lDfCDRCLszTqfzM71xpmiKi2HwS4WlqvGNwtvwF5Dqpn6KTq8ax00UMPkxDcZrEEEsIvHiUXXEphdb4GB4FymlPwBz4Gperqq5pW7TQ6/yNRhW8VT5NhuP0udlxo4gILq5ZxAZk8ZGh3g4CqxJlPKY7AQxupfUcVpWT5VItp1+30UqoyP4wWsRo3olRRgkWZZ2ZN6VC3OZFeXB8NbnUrSdikNptD1QiGuKkr8EmSR/AK9Rw+FF3s5uwuPbvHGiPeFOViltMK7AUaOsq9+x9cndk3iJEE5LKZRlWJbKOZweROzmPNVPkjE3K/TyA57Rs68TkZ3MR8akKpm7cFjnjPd/DdkWjgYoKHSr5Wu5ssoBYU4acRs5g2DHxUmdq8VXOXRbunD8QN0LhgkssgahcdoYsNvuXGUK/KXD/7oFb+VGdhqIn02veuM5bLudJOc2Ky0GMaG4W/xWBxIJcL7yliJOXOpx0AkBqUgzlDczmLT4iILXDxxtRR1oZa2JWFgiAb43obrJnG/TZC2KSK2wqOzRZTXavZZFMb1f3bXvVaNaK828w9TO610gk8JNf3gMfETzXXsbcvRGCG9JWQZ6+cDPqc4466Yo2RcKH+PILeKOqtnlbInR3MmBeGG3FH10yzkybuqEC2HSQwpA0An7d9+73BkDUTm30bZmoP/RGbgFN+GrCOfADgqr0WbI1a1okpFms8iHYw9hm0zUvlEMivBRxModrbJJ+9/p3jUdQQ9BCtQdxnOGrT5dzRUmw0593/mbRSdBg0nRvRZM5/E16m7ZHmDEtWhwvfdZCZ8J8M12W0yRMszXamWfQTwIZ4ayYktrnscQuWr8idp3PjT2eF/jmtdhIfcpMnb+IfZY2FebW6UY/AK3jP4u3Tu4zE4qlnQgLFbM19EBIsNf7KhjdbqQ/D6yiDb+NlEi2SKD+ivXVUK8ib0oBo366gXkR8ZxGjpJIDcEgZPa9TcYe0TIbiPl/rPUQDu3XBJ9X/GNq3FAUsKsll57DzaGMrjcT+gctp+9MLYXCq+sqP81eVQ0r9lt+gcQfZbACRbEjvlMskztZG8gbC8Qn9tt26Q7y7nDrbZq/LEz7kR6Jc6pg3N9rVX8Y5MJrGlML9p9lU4jbTkKqCveeZUJjHB03m2KRKR2TytoFkTXOLg7keU1s1lrPMQJpoOKLuAAC+y1HlJucU6ysB5hsXhvSPPLq5J7JtnqHKZ4vYjC4Vy8153QY+6780xDuGARsGbOs1WqzH0QS765rnSKEbbKlkO8oI/VDwUd0is13tKpqILu1mDJFNy/iJAWcvDgjxvusIT+PGz3ST/J9r9Mtfd0jpaGeiLYIqXc7DiHSS8TcjFVksi66PEkxW1z6ujbLLUGNNYnzOWpH8BZGK4bCK7iR+MbIv8ncDAz1u4StN3vTTzewr9IQjk9wxFxn+6N1ddKs0vffJiS08N3a4G1SVrlZ97Q/M+8G9fe5AP6d9/Qq4WRnORVhofPIKEdCr3llspUfE0oKIIYoByBRPh+bX1HLS3JWGJRhIvE1aW4NTd8ePi4Z+kXb+Z8snYfSNcqijhAgVsx4RCM54cXUiYkjeBmmC4ajOHrChoELscJJC7+9jjMjw5BagZKlgRMiSNYz7h7vvZIoQqbtQmspc0cUk1G/73iXtSpROl5wtLgQi0mW2Ex8i3WULhcggx6E1LMVHUsdc9GHI1PH3U2Ko0PyGdn9KdVOLm7FPBui0i9a0HpA60MsewVE4z8CAt5d401Gv6zXlIT5Ybit1VIA0FCs7wtvYreru1fUyW3oLAZ/+aTnZrOcYRNVA8spoRtlRoWflsRClFcgzkqiHOrf0/SVw+EpVaFlJ0g4Kxq1MMOmiQdpMNpte8lMMQqm6cIFXlnGbfJllysKDi+0JJMotkqgIxOSQgU9dn/lWkeVf8nUm3iwX2Nl3WDw9i6AUK3vBAbZZrcJpDQ/N64AVwjT07Jef30GSSmtNu2WlW7YoyW2FlWfZFQUwk867EdLYKk9VG6JgEnBiBxkY7LMo4YLQJJlAo9l/oTvJkSARDF/XtyAzM8O2t3eT/iXa6wDN3WewNmQHdPfsxChU/KtLG2Mn8i4ZqKdSlIaBZadxJmRzVS/o4yA65RTSViq60oa395Lqw0pzY4SipwE0SXXsKV+GZraGSkr/RW08wPRvqvSUkYBMA9lPx4m24az+IHmCbXA+0faxTRE9wuGeO06DIXa6QlKJ3puIyiuAVfPr736vzo2pBirS+Vxel3TMm3JKhz9o2ZoRvaFVpIkykb0Hcm4oHFBMcNSNj7/4GJt43ogonY2Vg4nsDQIWxAcorpXACzgBqQPjYsE/VUpXpwNManEru4NwMCFPkXvMoqvoeLN3qyu/N1eWEHttMD65v19l/0kH2mR35iv/FI+yjoHJ9gPMz67af3Mq/BoWXqu3rphiWMXVkmnPSEkpGpUI2h1MThideGFEOK6YZHPwYzMBvpNC7+ZHxPb7epfefGyIB4JzO9DTNEYnDLVVHdQyvOEVefrk6Uv5kTQYVYWWdqrdcIl7yljwwIWdfQ/y+2QB3eR/qxYObuYyB4gTbo2in4PzarU1sO9nETkmj9/AoxDA+JM3GMqQtJR4jtduHtnoCLxd1gQUscHRB/MoRYIEsP2pDZ9KvHgtlk1iTbWWbHhohwFEYX7y51fUV2nuUmnoUcqnWIQAAgl9LTVX+Bc0QGNEhChxHR4YjfE51PUdGfsSFE6ck7BL3/hTf9jLq4G1IafINxOLKeAtO7quulYvH5YOBc+zX7CrMgWnW47/jfRsWnJjYYoE7xMfWV2HN2iyIqLI";const Rm=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]),Pm=4;function aT(i){let t=0;function e(){return i[t++]<<8|i[t++]}let n=e(),r=1,s=[0,1];for(let N=1;N<n;N++)s.push(r+=e());let o=e(),a=t;t+=o;let c=0,l=0;function u(){return c==0&&(l=l<<8|i[t++],c=8),l>>--c&1}const h=31,f=2**h,d=f>>>1,g=d>>1,y=f-1;let m=0;for(let N=0;N<h;N++)m=m<<1|u();let p=[],A=0,_=f;for(;;){let N=Math.floor(((m-A+1)*r-1)/_),M=0,T=n;for(;T-M>1;){let x=M+T>>>1;N<s[x]?T=x:M=x}if(M==0)break;p.push(M);let I=A+Math.floor(_*s[M]/r),b=A+Math.floor(_*s[M+1]/r)-1;for(;!((I^b)&d);)m=m<<1&y|u(),I=I<<1&y,b=b<<1&y|1;for(;I&~b&g;)m=m&d|m<<1&y>>>1|u(),I=I<<1^d,b=(b^d)<<1|d|1;A=I,_=1+b-I}let S=n-4;return p.map(N=>{switch(N-S){case 3:return S+65792+(i[a++]<<16|i[a++]<<8|i[a++]);case 2:return S+256+(i[a++]<<8|i[a++]);case 1:return S+i[a++];default:return N-1}})}function cT(i){let t=0;return()=>i[t++]}function z0(i){return cT(aT(lT(i)))}function lT(i){let t=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((r,s)=>t[r.charCodeAt(0)]=s);let e=i.length,n=new Uint8Array(6*e>>3);for(let r=0,s=0,o=0,a=0;r<e;r++)a=a<<6|t[i.charCodeAt(r)],o+=6,o>=8&&(n[s++]=a>>(o-=8));return n}function uT(i){return i&1?~i>>1:i>>1}function hT(i,t){let e=Array(i);for(let n=0,r=0;n<i;n++)e[n]=r+=uT(t());return e}function pc(i,t=0){let e=[];for(;;){let n=i(),r=i();if(!r)break;t+=n;for(let s=0;s<r;s++)e.push(t+s);t+=r+1}return e}function G0(i){return mc(()=>{let t=pc(i);if(t.length)return t})}function H0(i){let t=[];for(;;){let e=i();if(e==0)break;t.push(fT(e,i))}for(;;){let e=i()-1;if(e<0)break;t.push(dT(e,i))}return t.flat()}function mc(i){let t=[];for(;;){let e=i(t.length);if(!e)break;t.push(e)}return t}function V0(i,t,e){let n=Array(i).fill().map(()=>[]);for(let r=0;r<t;r++)hT(i,e).forEach((s,o)=>n[o].push(s));return n}function fT(i,t){let e=1+t(),n=t(),r=mc(t);return V0(r.length,1+i,t).flatMap((o,a)=>{let[c,...l]=o;return Array(r[a]).fill().map((u,h)=>{let f=h*n;return[c+h*e,l.map(d=>d+f)]})})}function dT(i,t){let e=1+t();return V0(e,1+i,t).map(r=>[r[0],r.slice(1)])}function pT(i){let t=[],e=pc(i);return r(n([]),[]),t;function n(s){let o=i(),a=mc(()=>{let c=pc(i).map(l=>e[l]);if(c.length)return n(c)});return{S:o,B:a,Q:s}}function r({S:s,B:o},a,c){if(!(s&4&&c===a[a.length-1])){s&2&&(c=a[a.length-1]),s&1&&t.push(a);for(let l of o)for(let u of l.Q)r(l,[...a,u],c)}}}function mT(i){return i.toString(16).toUpperCase().padStart(2,"0")}function W0(i){return`{${mT(i)}}`}function gT(i){let t=[];for(let e=0,n=i.length;e<n;){let r=i.codePointAt(e);e+=r<65536?1:2,t.push(r)}return t}function Ua(i){let e=i.length;if(e<4096)return String.fromCodePoint(...i);let n=[];for(let r=0;r<e;)n.push(String.fromCodePoint(...i.slice(r,r+=4096)));return n.join("")}function yT(i,t){let e=i.length,n=e-t.length;for(let r=0;n==0&&r<e;r++)n=i[r]-t[r];return n}var vT="AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g";const gc=44032,eu=4352,nu=4449,iu=4519,X0=19,K0=21,Da=28,ru=K0*Da,_T=X0*ru,xT=gc+_T,AT=eu+X0,wT=nu+K0,ET=iu+Da;function ja(i){return i>>24&255}function J0(i){return i&16777215}let Cf,Im,Rf,Dl;function bT(){let i=z0(vT);Cf=new Map(G0(i).flatMap((t,e)=>t.map(n=>[n,e+1<<24]))),Im=new Set(pc(i)),Rf=new Map,Dl=new Map;for(let[t,e]of H0(i)){if(!Im.has(t)&&e.length==2){let[n,r]=e,s=Dl.get(n);s||(s=new Map,Dl.set(n,s)),s.set(r,t)}Rf.set(t,e.reverse())}}function Y0(i){return i>=gc&&i<xT}function ST(i,t){if(i>=eu&&i<AT&&t>=nu&&t<wT)return gc+(i-eu)*ru+(t-nu)*Da;if(Y0(i)&&t>iu&&t<ET&&(i-gc)%Da==0)return i+(t-iu);{let e=Dl.get(i);return e&&(e=e.get(t),e)?e:-1}}function Q0(i){Cf||bT();let t=[],e=[],n=!1;function r(s){let o=Cf.get(s);o&&(n=!0,s|=o),t.push(s)}for(let s of i)for(;;){if(s<128)t.push(s);else if(Y0(s)){let o=s-gc,a=o/ru|0,c=o%ru/Da|0,l=o%Da;r(eu+a),r(nu+c),l>0&&r(iu+l)}else{let o=Rf.get(s);o?e.push(...o):r(s)}if(!e.length)break;s=e.pop()}if(n&&t.length>1){let s=ja(t[0]);for(let o=1;o<t.length;o++){let a=ja(t[o]);if(a==0||s<=a){s=a;continue}let c=o-1;for(;;){let l=t[c+1];if(t[c+1]=t[c],t[c]=l,!c||(s=ja(t[--c]),s<=a))break}s=ja(t[o])}}return t}function MT(i){let t=[],e=[],n=-1,r=0;for(let s of i){let o=ja(s),a=J0(s);if(n==-1)o==0?n=a:t.push(a);else if(r>0&&r>=o)o==0?(t.push(n,...e),e.length=0,n=a):e.push(a),r=o;else{let c=ST(n,a);c>=0?n=c:r==0&&o==0?(t.push(n),n=a):(e.push(a),r=o)}}return n>=0&&t.push(n,...e),t}function q0(i){return Q0(i).map(J0)}function TT(i){return MT(Q0(i))}const Lm=45,Z0=".",j0=65039,$0=1,su=i=>Array.from(i);function yc(i,t){return i.P.has(t)||i.Q.has(t)}class CT extends Array{get is_emoji(){return!0}}let Pf,ty,xs,If,ey,Do,Th,wo,ls,Nm,Lf;function Rd(){if(Pf)return;let i=z0(oT);const t=()=>pc(i),e=()=>new Set(t()),n=(u,h)=>h.forEach(f=>u.add(f));Pf=new Map(H0(i)),ty=e(),xs=t(),If=new Set(t().map(u=>xs[u])),xs=new Set(xs),ey=e(),e();let r=G0(i),s=i();const o=()=>{let u=new Set;return t().forEach(h=>n(u,r[h])),n(u,t()),u};Do=mc(u=>{let h=mc(i).map(f=>f+96);if(h.length){let f=u>=s;h[0]-=32,h=Ua(h),f&&(h=`Restricted[${h}]`);let d=o(),g=o(),y=!i();return{N:h,P:d,Q:g,M:y,R:f}}}),Th=e(),wo=new Map;let a=t().concat(su(Th)).sort((u,h)=>u-h);a.forEach((u,h)=>{let f=i(),d=a[h]=f?a[h-f]:{V:[],M:new Map};d.V.push(u),Th.has(u)||wo.set(u,d)});for(let{V:u,M:h}of new Set(wo.values())){let f=[];for(let g of u){let y=Do.filter(p=>yc(p,g)),m=f.find(({G:p})=>y.some(A=>p.has(A)));m||(m={G:new Set,V:[]},f.push(m)),m.V.push(g),n(m.G,y)}let d=f.flatMap(g=>su(g.G));for(let{G:g,V:y}of f){let m=new Set(d.filter(p=>!g.has(p)));for(let p of y)h.set(p,m)}}ls=new Set;let c=new Set;const l=u=>ls.has(u)?c.add(u):ls.add(u);for(let u of Do){for(let h of u.P)l(h);for(let h of u.Q)l(h)}for(let u of ls)!wo.has(u)&&!c.has(u)&&wo.set(u,$0);n(ls,q0(ls)),Nm=pT(i).map(u=>CT.from(u)).sort(yT),Lf=new Map;for(let u of Nm){let h=[Lf];for(let f of u){let d=h.map(g=>{let y=g.get(f);return y||(y=new Map,g.set(f,y)),y});f===j0?h.push(...d):h=d}for(let f of h)f.V=u}}function Pd(i){return(ny(i)?"":`${Id(Tu([i]))} `)+W0(i)}function Id(i){return`"${i}"‎`}function RT(i){if(i.length>=4&&i[2]==Lm&&i[3]==Lm)throw new Error(`invalid label extension: "${Ua(i.slice(0,4))}"`)}function PT(i){for(let e=i.lastIndexOf(95);e>0;)if(i[--e]!==95)throw new Error("underscore allowed only at start")}function IT(i){let t=i[0],e=Rm.get(t);if(e)throw sc(`leading ${e}`);let n=i.length,r=-1;for(let s=1;s<n;s++){t=i[s];let o=Rm.get(t);if(o){if(r==s)throw sc(`${e} + ${o}`);r=s+1,e=o}}if(r==n)throw sc(`trailing ${e}`)}function Tu(i,t=1/0,e=W0){let n=[];LT(i[0])&&n.push("◌"),i.length>t&&(t>>=1,i=[...i.slice(0,t),8230,...i.slice(-t)]);let r=0,s=i.length;for(let o=0;o<s;o++){let a=i[o];ny(a)&&(n.push(Ua(i.slice(r,o))),n.push(e(a)),r=o+1)}return n.push(Ua(i.slice(r,s))),n.join("")}function LT(i){return Rd(),xs.has(i)}function ny(i){return Rd(),ey.has(i)}function NT(i){return BT(UT(i,TT,zT))}function UT(i,t,e){if(!i)return[];Rd();let n=0;return i.split(Z0).map(r=>{let s=gT(r),o={input:s,offset:n};n+=s.length+1;try{let a=o.tokens=kT(s,t,e),c=a.length,l;if(!c)throw new Error("empty label");let u=o.output=a.flat();if(PT(u),!(o.emoji=c>1||a[0].is_emoji)&&u.every(f=>f<128))RT(u),l="ASCII";else{let f=a.flatMap(d=>d.is_emoji?[]:d);if(!f.length)l="Emoji";else{if(xs.has(u[0]))throw sc("leading combining mark");for(let y=1;y<c;y++){let m=a[y];if(!m.is_emoji&&xs.has(m[0]))throw sc(`emoji + combining mark: "${Ua(a[y-1])} + ${Tu([m[0]])}"`)}IT(u);let d=su(new Set(f)),[g]=OT(d);FT(g,f),DT(g,d),l=g.N}}o.type=l}catch(a){o.error=a}return o})}function DT(i,t){let e,n=[];for(let r of t){let s=wo.get(r);if(s===$0)return;if(s){let o=s.M.get(r);if(e=e?e.filter(a=>o.has(a)):su(o),!e.length)return}else n.push(r)}if(e){for(let r of e)if(n.every(s=>yc(r,s)))throw new Error(`whole-script confusable: ${i.N}/${r.N}`)}}function OT(i){let t=Do;for(let e of i){let n=t.filter(r=>yc(r,e));if(!n.length)throw Do.some(r=>yc(r,e))?ry(t[0],e):iy(e);if(t=n,n.length==1)break}return t}function BT(i){return i.map(({input:t,error:e,output:n})=>{if(e){let r=e.message;throw new Error(i.length==1?r:`Invalid label ${Id(Tu(t,63))}: ${r}`)}return Ua(n)}).join(Z0)}function iy(i){return new Error(`disallowed character: ${Pd(i)}`)}function ry(i,t){let e=Pd(t),n=Do.find(r=>r.P.has(t));return n&&(e=`${n.N} ${e}`),new Error(`illegal mixture: ${i.N} + ${e}`)}function sc(i){return new Error(`illegal placement: ${i}`)}function FT(i,t){for(let e of t)if(!yc(i,e))throw ry(i,e);if(i.M){let e=q0(t);for(let n=1,r=e.length;n<r;n++)if(If.has(e[n])){let s=n+1;for(let o;s<r&&If.has(o=e[s]);s++)for(let a=n;a<s;a++)if(e[a]==o)throw new Error(`duplicate non-spacing marks: ${Pd(o)}`);if(s-n>Pm)throw new Error(`excessive non-spacing marks: ${Id(Tu(e.slice(n-1,s)))} (${s-n}/${Pm})`);n=s}}}function kT(i,t,e){let n=[],r=[];for(i=i.slice().reverse();i.length;){let s=GT(i);if(s)r.length&&(n.push(t(r)),r=[]),n.push(e(s));else{let o=i.pop();if(ls.has(o))r.push(o);else{let a=Pf.get(o);if(a)r.push(...a);else if(!ty.has(o))throw iy(o)}}}return r.length&&n.push(t(r)),n}function zT(i){return i.filter(t=>t!=j0)}function GT(i,t){let e=Lf,n,r=i.length;for(;r&&(e=e.get(i[--r]),!!e);){let{V:s}=e;s&&(n=s,i.length=r)}return n}const sy=new Uint8Array(32);sy.fill(0);function Um(i){return D(i.length!==0,"invalid ENS name; empty component","comp",i),i}function oy(i){const t=ir(HT(i)),e=[];if(i.length===0)return e;let n=0;for(let r=0;r<t.length;r++)t[r]===46&&(e.push(Um(t.slice(n,r))),n=r+1);return D(n<t.length,"invalid ENS name; empty component","name",i),e.push(Um(t.slice(n))),e}function HT(i){try{if(i.length===0)throw new Error("empty label");return NT(i)}catch(t){D(!1,`invalid ENS name (${t.message})`,"name",i)}}function Nf(i){D(typeof i=="string","invalid ENS name; not a string","name",i),D(i.length,"invalid ENS name (empty label)","name",i);let t=sy;const e=oy(i);for(;e.length;)t=De(xe([t,De(e.pop())]));return gt(t)}function VT(i,t){const e=t;return D(e<=255,"DNS encoded label cannot exceed 255","length",e),gt(xe(oy(i).map(n=>{D(n.length<=e,`label ${JSON.stringify(i)} exceeds ${e} bytes`,"name",i);const r=new Uint8Array(n.length+1);return r.set(n,1),r[0]=r.length-1,r})))+"00"}const ay=new Uint8Array(32);ay.fill(0);const WT=BigInt(-1),cy=BigInt(0),ly=BigInt(1),XT=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");function KT(i){const t=qt(i),e=t.length%32;return e?xe([t,ay.slice(e)]):gt(t)}const JT=Jr(ly,32),YT=Jr(cy,32),Dm={name:"string",version:"string",chainId:"uint256",verifyingContract:"address",salt:"bytes32"},Ch=["name","version","chainId","verifyingContract","salt"];function Om(i){return function(t){return D(typeof t=="string",`invalid domain value for ${JSON.stringify(i)}`,`domain.${i}`,t),t}}const QT={name:Om("name"),version:Om("version"),chainId:function(i){const t=Et(i,"domain.chainId");return D(t>=0,"invalid chain ID","domain.chainId",i),Number.isSafeInteger(t)?Number(t):ei(t)},verifyingContract:function(i){try{return fe(i).toLowerCase()}catch{}D(!1,'invalid domain value "verifyingContract"',"domain.verifyingContract",i)},salt:function(i){const t=qt(i,"domain.salt");return D(t.length===32,'invalid domain value "salt"',"domain.salt",i),gt(t)}};function Rh(i){{const t=i.match(/^(u?)int(\d+)$/);if(t){const e=t[1]==="",n=parseInt(t[2]);D(n%8===0&&n!==0&&n<=256&&t[2]===String(n),"invalid numeric width","type",i);const r=qa(XT,e?n-1:n),s=e?(r+ly)*WT:cy;return function(o){const a=Et(o,"value");return D(a>=s&&a<=r,`value out-of-bounds for ${i}`,"value",a),Jr(e?qg(a,256):a,32)}}}{const t=i.match(/^bytes(\d+)$/);if(t){const e=parseInt(t[1]);return D(e!==0&&e<=32&&t[1]===String(e),"invalid bytes width","type",i),function(n){const r=qt(n);return D(r.length===e,`invalid length for ${i}`,"value",n),KT(n)}}}switch(i){case"address":return function(t){return cr(fe(t),32)};case"bool":return function(t){return t?JT:YT};case"bytes":return function(t){return De(t)};case"string":return function(t){return Ks(t)}}return null}function Bm(i,t){return`${i}(${t.map(({name:e,type:n})=>n+" "+e).join(",")})`}function El(i){const t=i.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);return t?{base:t[1],index:t[2]+t[4],array:{base:t[1],prefix:t[1]+t[2],count:t[5]?parseInt(t[5]):-1}}:{base:i}}var Sc,Xi,aa,hu,uy;const Dn=class Dn{constructor(t){Y(this,hu);H(this,"primaryType");Y(this,Sc);Y(this,Xi);Y(this,aa);C(this,Xi,new Map),C(this,aa,new Map);const e=new Map,n=new Map,r=new Map,s={};Object.keys(t).forEach(c=>{s[c]=t[c].map(({name:l,type:u})=>{let{base:h,index:f}=El(u);return h==="int"&&!t.int&&(h="int256"),h==="uint"&&!t.uint&&(h="uint256"),{name:l,type:h+(f||"")}}),e.set(c,new Set),n.set(c,[]),r.set(c,new Set)}),C(this,Sc,JSON.stringify(s));for(const c in s){const l=new Set;for(const u of s[c]){D(!l.has(u.name),`duplicate variable name ${JSON.stringify(u.name)} in ${JSON.stringify(c)}`,"types",t),l.add(u.name);const h=El(u.type).base;D(h!==c,`circular type reference to ${JSON.stringify(h)}`,"types",t),!Rh(h)&&(D(n.has(h),`unknown type ${JSON.stringify(h)}`,"types",t),n.get(h).push(c),e.get(c).add(h))}}const o=Array.from(n.keys()).filter(c=>n.get(c).length===0);D(o.length!==0,"missing primary type","types",t),D(o.length===1,`ambiguous primary types or unused types: ${o.map(c=>JSON.stringify(c)).join(", ")}`,"types",t),Bt(this,{primaryType:o[0]});function a(c,l){D(!l.has(c),`circular type reference to ${JSON.stringify(c)}`,"types",t),l.add(c);for(const u of e.get(c))if(n.has(u)){a(u,l);for(const h of l)r.get(h).add(u)}l.delete(c)}a(this.primaryType,new Set);for(const[c,l]of r){const u=Array.from(l);u.sort(),v(this,Xi).set(c,Bm(c,s[c])+u.map(h=>Bm(h,s[h])).join(""))}}get types(){return JSON.parse(v(this,Sc))}getEncoder(t){let e=v(this,aa).get(t);return e||(e=dt(this,hu,uy).call(this,t),v(this,aa).set(t,e)),e}encodeType(t){const e=v(this,Xi).get(t);return D(e,`unknown type: ${JSON.stringify(t)}`,"name",t),e}encodeData(t,e){return this.getEncoder(t)(e)}hashStruct(t,e){return De(this.encodeData(t,e))}encode(t){return this.encodeData(this.primaryType,t)}hash(t){return this.hashStruct(this.primaryType,t)}_visit(t,e,n){if(Rh(t))return n(t,e);const r=El(t).array;if(r)return D(r.count===-1||r.count===e.length,`array length mismatch; expected length ${r.count}`,"value",e),e.map(o=>this._visit(r.prefix,o,n));const s=this.types[t];if(s)return s.reduce((o,{name:a,type:c})=>(o[a]=this._visit(c,e[a],n),o),{});D(!1,`unknown type: ${t}`,"type",t)}visit(t,e){return this._visit(this.primaryType,t,e)}static from(t){return new Dn(t)}static getPrimaryType(t){return Dn.from(t).primaryType}static hashStruct(t,e,n){return Dn.from(e).hashStruct(t,n)}static hashDomain(t){const e=[];for(const n in t){if(t[n]==null)continue;const r=Dm[n];D(r,`invalid typed-data domain key: ${JSON.stringify(n)}`,"domain",t),e.push({name:n,type:r})}return e.sort((n,r)=>Ch.indexOf(n.name)-Ch.indexOf(r.name)),Dn.hashStruct("EIP712Domain",{EIP712Domain:e},t)}static encode(t,e,n){return xe(["0x1901",Dn.hashDomain(t),Dn.from(e).hash(n)])}static hash(t,e,n){return De(Dn.encode(t,e,n))}static async resolveNames(t,e,n,r){t=Object.assign({},t);for(const a in t)t[a]==null&&delete t[a];const s={};t.verifyingContract&&!ye(t.verifyingContract,20)&&(s[t.verifyingContract]="0x");const o=Dn.from(e);o.visit(n,(a,c)=>(a==="address"&&!ye(c,20)&&(s[c]="0x"),c));for(const a in s)s[a]=await r(a);return t.verifyingContract&&s[t.verifyingContract]&&(t.verifyingContract=s[t.verifyingContract]),n=o.visit(n,(a,c)=>a==="address"&&s[c]?s[c]:c),{domain:t,value:n}}static getPayload(t,e,n){Dn.hashDomain(t);const r={},s=[];Ch.forEach(c=>{const l=t[c];l!=null&&(r[c]=QT[c](l),s.push({name:c,type:Dm[c]}))});const o=Dn.from(e);e=o.types;const a=Object.assign({},e);return D(a.EIP712Domain==null,"types must not contain EIP712Domain type","types.EIP712Domain",e),a.EIP712Domain=s,o.encode(n),{types:a,domain:r,primaryType:o.primaryType,message:o.visit(n,(c,l)=>{if(c.match(/^bytes(\d*)/))return gt(qt(l));if(c.match(/^u?int/))return Et(l).toString();switch(c){case"address":return l.toLowerCase();case"bool":return!!l;case"string":return D(typeof l=="string","invalid string","value",l),l}D(!1,"unsupported type","type",c)})}}};Sc=new WeakMap,Xi=new WeakMap,aa=new WeakMap,hu=new WeakSet,uy=function(t){{const r=Rh(t);if(r)return r}const e=El(t).array;if(e){const r=e.prefix,s=this.getEncoder(r);return o=>{D(e.count===-1||e.count===o.length,`array length mismatch; expected length ${e.count}`,"value",o);let a=o.map(s);return v(this,Xi).has(r)&&(a=a.map(De)),De(xe(a))}}const n=this.types[t];if(n){const r=Ks(v(this,Xi).get(t));return s=>{const o=n.map(({name:a,type:c})=>{const l=this.getEncoder(c)(s[a]);return v(this,Xi).has(c)?De(l):l});return o.unshift(r),xe(o)}}D(!1,`unknown type: ${t}`,"type",t)};let ou=Dn;function hn(i){const t=new Set;return i.forEach(e=>t.add(e)),Object.freeze(t)}const qT="external public payable override",ZT=hn(qT.split(" ")),hy="constant external internal payable private public pure view override",jT=hn(hy.split(" ")),fy="constructor error event fallback function receive struct",dy=hn(fy.split(" ")),py="calldata memory storage payable indexed",$T=hn(py.split(" ")),t1="tuple returns",e1=[fy,py,t1,hy].join(" "),n1=hn(e1.split(" ")),i1={"(":"OPEN_PAREN",")":"CLOSE_PAREN","[":"OPEN_BRACKET","]":"CLOSE_BRACKET",",":"COMMA","@":"AT"},r1=new RegExp("^(\\s*)"),s1=new RegExp("^([0-9]+)"),o1=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),my=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),gy=new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");var Ke,$n,Mc,Uf;const fu=class fu{constructor(t){Y(this,Mc);Y(this,Ke);Y(this,$n);C(this,Ke,0),C(this,$n,t.slice())}get offset(){return v(this,Ke)}get length(){return v(this,$n).length-v(this,Ke)}clone(){return new fu(v(this,$n))}reset(){C(this,Ke,0)}popKeyword(t){const e=this.peek();if(e.type!=="KEYWORD"||!t.has(e.text))throw new Error(`expected keyword ${e.text}`);return this.pop().text}popType(t){if(this.peek().type!==t){const e=this.peek();throw new Error(`expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`)}return this.pop().text}popParen(){const t=this.peek();if(t.type!=="OPEN_PAREN")throw new Error("bad start");const e=dt(this,Mc,Uf).call(this,v(this,Ke)+1,t.match+1);return C(this,Ke,t.match+1),e}popParams(){const t=this.peek();if(t.type!=="OPEN_PAREN")throw new Error("bad start");const e=[];for(;v(this,Ke)<t.match-1;){const n=this.peek().linkNext;e.push(dt(this,Mc,Uf).call(this,v(this,Ke)+1,n)),C(this,Ke,n)}return C(this,Ke,t.match+1),e}peek(){if(v(this,Ke)>=v(this,$n).length)throw new Error("out-of-bounds");return v(this,$n)[v(this,Ke)]}peekKeyword(t){const e=this.peekType("KEYWORD");return e!=null&&t.has(e)?e:null}peekType(t){if(this.length===0)return null;const e=this.peek();return e.type===t?e.text:null}pop(){const t=this.peek();return za(this,Ke)._++,t}toString(){const t=[];for(let e=v(this,Ke);e<v(this,$n).length;e++){const n=v(this,$n)[e];t.push(`${n.type}:${n.text}`)}return`<TokenString ${t.join(" ")}>`}};Ke=new WeakMap,$n=new WeakMap,Mc=new WeakSet,Uf=function(t=0,e=0){return new fu(v(this,$n).slice(t,e).map(n=>Object.freeze(Object.assign({},n,{match:n.match-t,linkBack:n.linkBack-t,linkNext:n.linkNext-t}))))};let oi=fu;function Zr(i){const t=[],e=o=>{const a=s<i.length?JSON.stringify(i[s]):"$EOI";throw new Error(`invalid token ${a} at ${s}: ${o}`)};let n=[],r=[],s=0;for(;s<i.length;){let o=i.substring(s),a=o.match(r1);a&&(s+=a[1].length,o=i.substring(s));const c={depth:n.length,linkBack:-1,linkNext:-1,match:-1,type:"",text:"",offset:s,value:-1};t.push(c);let l=i1[o[0]]||"";if(l){if(c.type=l,c.text=o[0],s++,l==="OPEN_PAREN")n.push(t.length-1),r.push(t.length-1);else if(l=="CLOSE_PAREN")n.length===0&&e("no matching open bracket"),c.match=n.pop(),t[c.match].match=t.length-1,c.depth--,c.linkBack=r.pop(),t[c.linkBack].linkNext=t.length-1;else if(l==="COMMA")c.linkBack=r.pop(),t[c.linkBack].linkNext=t.length-1,r.push(t.length-1);else if(l==="OPEN_BRACKET")c.type="BRACKET";else if(l==="CLOSE_BRACKET"){let u=t.pop().text;if(t.length>0&&t[t.length-1].type==="NUMBER"){const h=t.pop().text;u=h+u,t[t.length-1].value=Zt(h)}if(t.length===0||t[t.length-1].type!=="BRACKET")throw new Error("missing opening bracket");t[t.length-1].text+=u}continue}if(a=o.match(o1),a){if(c.text=a[1],s+=c.text.length,n1.has(c.text)){c.type="KEYWORD";continue}if(c.text.match(gy)){c.type="TYPE";continue}c.type="ID";continue}if(a=o.match(s1),a){c.text=a[1],c.type="NUMBER",s+=c.text.length;continue}throw new Error(`unexpected token ${JSON.stringify(o[0])} at position ${s}`)}return new oi(t.map(o=>Object.freeze(o)))}function Fm(i,t){let e=[];for(const n in t.keys())i.has(n)&&e.push(n);if(e.length>1)throw new Error(`conflicting types: ${e.join(", ")}`)}function Cu(i,t){if(t.peekKeyword(dy)){const e=t.pop().text;if(e!==i)throw new Error(`expected ${i}, got ${e}`)}return t.popType("ID")}function lr(i,t){const e=new Set;for(;;){const n=i.peekType("KEYWORD");if(n==null||t&&!t.has(n))break;if(i.pop(),e.has(n))throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);e.add(n)}return Object.freeze(e)}function yy(i){let t=lr(i,jT);return Fm(t,hn("constant payable nonpayable".split(" "))),Fm(t,hn("pure view payable nonpayable".split(" "))),t.has("view")?"view":t.has("pure")?"pure":t.has("payable")?"payable":t.has("nonpayable")?"nonpayable":t.has("constant")?"view":"nonpayable"}function sr(i,t){return i.popParams().map(e=>Ze.from(e,t))}function vy(i){if(i.peekType("AT")){if(i.pop(),i.peekType("NUMBER"))return Et(i.pop().text);throw new Error("invalid gas")}return null}function Js(i){if(i.length)throw new Error(`unexpected tokens at offset ${i.offset}: ${i.toString()}`)}const a1=new RegExp(/^(.*)\[([0-9]*)\]$/);function km(i){const t=i.match(gy);if(D(t,"invalid type","type",i),i==="uint")return"uint256";if(i==="int")return"int256";if(t[2]){const e=parseInt(t[2]);D(e!==0&&e<=32,"invalid bytes length","type",i)}else if(t[3]){const e=parseInt(t[3]);D(e!==0&&e<=256&&e%8===0,"invalid numeric width","type",i)}return i}const we={},xn=Symbol.for("_ethers_internal"),zm="_ParamTypeInternal",Gm="_ErrorInternal",Hm="_EventInternal",Vm="_ConstructorInternal",Wm="_FallbackInternal",Xm="_FunctionInternal",Km="_StructInternal";var ca,Ol;const On=class On{constructor(t,e,n,r,s,o,a,c){Y(this,ca);H(this,"name");H(this,"type");H(this,"baseType");H(this,"indexed");H(this,"components");H(this,"arrayLength");H(this,"arrayChildren");if(xu(t,we,"ParamType"),Object.defineProperty(this,xn,{value:zm}),o&&(o=Object.freeze(o.slice())),r==="array"){if(a==null||c==null)throw new Error("")}else if(a!=null||c!=null)throw new Error("");if(r==="tuple"){if(o==null)throw new Error("")}else if(o!=null)throw new Error("");Bt(this,{name:e,type:n,baseType:r,indexed:s,components:o,arrayLength:a,arrayChildren:c})}format(t){if(t==null&&(t="sighash"),t==="json"){const n=this.name||"";if(this.isArray()){const s=JSON.parse(this.arrayChildren.format("json"));return s.name=n,s.type+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`,JSON.stringify(s)}const r={type:this.baseType==="tuple"?"tuple":this.type,name:n};return typeof this.indexed=="boolean"&&(r.indexed=this.indexed),this.isTuple()&&(r.components=this.components.map(s=>JSON.parse(s.format(t)))),JSON.stringify(r)}let e="";return this.isArray()?(e+=this.arrayChildren.format(t),e+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`):this.isTuple()?e+="("+this.components.map(n=>n.format(t)).join(t==="full"?", ":",")+")":e+=this.type,t!=="sighash"&&(this.indexed===!0&&(e+=" indexed"),t==="full"&&this.name&&(e+=" "+this.name)),e}isArray(){return this.baseType==="array"}isTuple(){return this.baseType==="tuple"}isIndexable(){return this.indexed!=null}walk(t,e){if(this.isArray()){if(!Array.isArray(t))throw new Error("invalid array value");if(this.arrayLength!==-1&&t.length!==this.arrayLength)throw new Error("array is wrong length");const n=this;return t.map(r=>n.arrayChildren.walk(r,e))}if(this.isTuple()){if(!Array.isArray(t))throw new Error("invalid tuple value");if(t.length!==this.components.length)throw new Error("array is wrong length");const n=this;return t.map((r,s)=>n.components[s].walk(r,e))}return e(this.type,t)}async walkAsync(t,e){const n=[],r=[t];return dt(this,ca,Ol).call(this,n,t,e,s=>{r[0]=s}),n.length&&await Promise.all(n),r[0]}static from(t,e){if(On.isParamType(t))return t;if(typeof t=="string")try{return On.from(Zr(t),e)}catch{D(!1,"invalid param type","obj",t)}else if(t instanceof oi){let a="",c="",l=null;lr(t,hn(["tuple"])).has("tuple")||t.peekType("OPEN_PAREN")?(c="tuple",l=t.popParams().map(y=>On.from(y)),a=`tuple(${l.map(y=>y.format()).join(",")})`):(a=km(t.popType("TYPE")),c=a);let u=null,h=null;for(;t.length&&t.peekType("BRACKET");){const y=t.pop();u=new On(we,"",a,c,null,l,h,u),h=y.value,a+=y.text,c="array",l=null}let f=null;if(lr(t,$T).has("indexed")){if(!e)throw new Error("");f=!0}const g=t.peekType("ID")?t.pop().text:"";if(t.length)throw new Error("leftover tokens");return new On(we,g,a,c,f,l,h,u)}const n=t.name;D(!n||typeof n=="string"&&n.match(my),"invalid name","obj.name",n);let r=t.indexed;r!=null&&(D(e,"parameter cannot be indexed","obj.indexed",t.indexed),r=!!r);let s=t.type,o=s.match(a1);if(o){const a=parseInt(o[2]||"-1"),c=On.from({type:o[1],components:t.components});return new On(we,n||"",s,"array",r,null,a,c)}if(s==="tuple"||s.startsWith("tuple(")||s.startsWith("(")){const a=t.components!=null?t.components.map(l=>On.from(l)):null;return new On(we,n||"",s,"tuple",r,a,null,null)}return s=km(t.type),new On(we,n||"",s,s,r,null,null,null)}static isParamType(t){return t&&t[xn]===zm}};ca=new WeakSet,Ol=function(t,e,n,r){if(this.isArray()){if(!Array.isArray(e))throw new Error("invalid array value");if(this.arrayLength!==-1&&e.length!==this.arrayLength)throw new Error("array is wrong length");const o=this.arrayChildren,a=e.slice();a.forEach((c,l)=>{var u;dt(u=o,ca,Ol).call(u,t,c,n,h=>{a[l]=h})}),r(a);return}if(this.isTuple()){const o=this.components;let a;if(Array.isArray(e))a=e.slice();else{if(e==null||typeof e!="object")throw new Error("invalid tuple value");a=o.map(c=>{if(!c.name)throw new Error("cannot use object value with unnamed components");if(!(c.name in e))throw new Error(`missing value for component ${c.name}`);return e[c.name]})}if(a.length!==this.components.length)throw new Error("array is wrong length");a.forEach((c,l)=>{var u;dt(u=o[l],ca,Ol).call(u,t,c,n,h=>{a[l]=h})}),r(a);return}const s=n(this.type,e);s.then?t.push(async function(){r(await s)}()):r(s)};let Ze=On;class Ys{constructor(t,e,n){H(this,"type");H(this,"inputs");xu(t,we,"Fragment"),n=Object.freeze(n.slice()),Bt(this,{type:e,inputs:n})}static from(t){if(typeof t=="string"){try{Ys.from(JSON.parse(t))}catch{}return Ys.from(Zr(t))}if(t instanceof oi)switch(t.peekKeyword(dy)){case"constructor":return nr.from(t);case"error":return vn.from(t);case"event":return bi.from(t);case"fallback":case"receive":return zi.from(t);case"function":return Si.from(t);case"struct":return Vs.from(t)}else if(typeof t=="object"){switch(t.type){case"constructor":return nr.from(t);case"error":return vn.from(t);case"event":return bi.from(t);case"fallback":case"receive":return zi.from(t);case"function":return Si.from(t);case"struct":return Vs.from(t)}nt(!1,`unsupported type: ${t.type}`,"UNSUPPORTED_OPERATION",{operation:"Fragment.from"})}D(!1,"unsupported frgament object","obj",t)}static isConstructor(t){return nr.isFragment(t)}static isError(t){return vn.isFragment(t)}static isEvent(t){return bi.isFragment(t)}static isFunction(t){return Si.isFragment(t)}static isStruct(t){return Vs.isFragment(t)}}class Ru extends Ys{constructor(e,n,r,s){super(e,n,s);H(this,"name");D(typeof r=="string"&&r.match(my),"invalid identifier","name",r),s=Object.freeze(s.slice()),Bt(this,{name:r})}}function vc(i,t){return"("+t.map(e=>e.format(i)).join(i==="full"?", ":",")+")"}class vn extends Ru{constructor(t,e,n){super(t,"error",e,n),Object.defineProperty(this,xn,{value:Gm})}get selector(){return Ks(this.format("sighash")).substring(0,10)}format(t){if(t==null&&(t="sighash"),t==="json")return JSON.stringify({type:"error",name:this.name,inputs:this.inputs.map(n=>JSON.parse(n.format(t)))});const e=[];return t!=="sighash"&&e.push("error"),e.push(this.name+vc(t,this.inputs)),e.join(" ")}static from(t){if(vn.isFragment(t))return t;if(typeof t=="string")return vn.from(Zr(t));if(t instanceof oi){const e=Cu("error",t),n=sr(t);return Js(t),new vn(we,e,n)}return new vn(we,t.name,t.inputs?t.inputs.map(Ze.from):[])}static isFragment(t){return t&&t[xn]===Gm}}class bi extends Ru{constructor(e,n,r,s){super(e,"event",n,r);H(this,"anonymous");Object.defineProperty(this,xn,{value:Hm}),Bt(this,{anonymous:s})}get topicHash(){return Ks(this.format("sighash"))}format(e){if(e==null&&(e="sighash"),e==="json")return JSON.stringify({type:"event",anonymous:this.anonymous,name:this.name,inputs:this.inputs.map(r=>JSON.parse(r.format(e)))});const n=[];return e!=="sighash"&&n.push("event"),n.push(this.name+vc(e,this.inputs)),e!=="sighash"&&this.anonymous&&n.push("anonymous"),n.join(" ")}static getTopicHash(e,n){return n=(n||[]).map(s=>Ze.from(s)),new bi(we,e,n,!1).topicHash}static from(e){if(bi.isFragment(e))return e;if(typeof e=="string")try{return bi.from(Zr(e))}catch{D(!1,"invalid event fragment","obj",e)}else if(e instanceof oi){const n=Cu("event",e),r=sr(e,!0),s=!!lr(e,hn(["anonymous"])).has("anonymous");return Js(e),new bi(we,n,r,s)}return new bi(we,e.name,e.inputs?e.inputs.map(n=>Ze.from(n,!0)):[],!!e.anonymous)}static isFragment(e){return e&&e[xn]===Hm}}class nr extends Ys{constructor(e,n,r,s,o){super(e,n,r);H(this,"payable");H(this,"gas");Object.defineProperty(this,xn,{value:Vm}),Bt(this,{payable:s,gas:o})}format(e){if(nt(e!=null&&e!=="sighash","cannot format a constructor for sighash","UNSUPPORTED_OPERATION",{operation:"format(sighash)"}),e==="json")return JSON.stringify({type:"constructor",stateMutability:this.payable?"payable":"undefined",payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(r=>JSON.parse(r.format(e)))});const n=[`constructor${vc(e,this.inputs)}`];return this.payable&&n.push("payable"),this.gas!=null&&n.push(`@${this.gas.toString()}`),n.join(" ")}static from(e){if(nr.isFragment(e))return e;if(typeof e=="string")try{return nr.from(Zr(e))}catch{D(!1,"invalid constuctor fragment","obj",e)}else if(e instanceof oi){lr(e,hn(["constructor"]));const n=sr(e),r=!!lr(e,ZT).has("payable"),s=vy(e);return Js(e),new nr(we,"constructor",n,r,s)}return new nr(we,"constructor",e.inputs?e.inputs.map(Ze.from):[],!!e.payable,e.gas!=null?e.gas:null)}static isFragment(e){return e&&e[xn]===Vm}}class zi extends Ys{constructor(e,n,r){super(e,"fallback",n);H(this,"payable");Object.defineProperty(this,xn,{value:Wm}),Bt(this,{payable:r})}format(e){const n=this.inputs.length===0?"receive":"fallback";if(e==="json"){const r=this.payable?"payable":"nonpayable";return JSON.stringify({type:n,stateMutability:r})}return`${n}()${this.payable?" payable":""}`}static from(e){if(zi.isFragment(e))return e;if(typeof e=="string")try{return zi.from(Zr(e))}catch{D(!1,"invalid fallback fragment","obj",e)}else if(e instanceof oi){const n=e.toString(),r=e.peekKeyword(hn(["fallback","receive"]));if(D(r,"type must be fallback or receive","obj",n),e.popKeyword(hn(["fallback","receive"]))==="receive"){const c=sr(e);return D(c.length===0,"receive cannot have arguments","obj.inputs",c),lr(e,hn(["payable"])),Js(e),new zi(we,[],!0)}let o=sr(e);o.length?D(o.length===1&&o[0].type==="bytes","invalid fallback inputs","obj.inputs",o.map(c=>c.format("minimal")).join(", ")):o=[Ze.from("bytes")];const a=yy(e);if(D(a==="nonpayable"||a==="payable","fallback cannot be constants","obj.stateMutability",a),lr(e,hn(["returns"])).has("returns")){const c=sr(e);D(c.length===1&&c[0].type==="bytes","invalid fallback outputs","obj.outputs",c.map(l=>l.format("minimal")).join(", "))}return Js(e),new zi(we,o,a==="payable")}if(e.type==="receive")return new zi(we,[],!0);if(e.type==="fallback"){const n=[Ze.from("bytes")],r=e.stateMutability==="payable";return new zi(we,n,r)}D(!1,"invalid fallback description","obj",e)}static isFragment(e){return e&&e[xn]===Wm}}class Si extends Ru{constructor(e,n,r,s,o,a){super(e,"function",n,s);H(this,"constant");H(this,"outputs");H(this,"stateMutability");H(this,"payable");H(this,"gas");Object.defineProperty(this,xn,{value:Xm}),o=Object.freeze(o.slice()),Bt(this,{constant:r==="view"||r==="pure",gas:a,outputs:o,payable:r==="payable",stateMutability:r})}get selector(){return Ks(this.format("sighash")).substring(0,10)}format(e){if(e==null&&(e="sighash"),e==="json")return JSON.stringify({type:"function",name:this.name,constant:this.constant,stateMutability:this.stateMutability!=="nonpayable"?this.stateMutability:void 0,payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(r=>JSON.parse(r.format(e))),outputs:this.outputs.map(r=>JSON.parse(r.format(e)))});const n=[];return e!=="sighash"&&n.push("function"),n.push(this.name+vc(e,this.inputs)),e!=="sighash"&&(this.stateMutability!=="nonpayable"&&n.push(this.stateMutability),this.outputs&&this.outputs.length&&(n.push("returns"),n.push(vc(e,this.outputs))),this.gas!=null&&n.push(`@${this.gas.toString()}`)),n.join(" ")}static getSelector(e,n){return n=(n||[]).map(s=>Ze.from(s)),new Si(we,e,"view",n,[],null).selector}static from(e){if(Si.isFragment(e))return e;if(typeof e=="string")try{return Si.from(Zr(e))}catch{D(!1,"invalid function fragment","obj",e)}else if(e instanceof oi){const r=Cu("function",e),s=sr(e),o=yy(e);let a=[];lr(e,hn(["returns"])).has("returns")&&(a=sr(e));const c=vy(e);return Js(e),new Si(we,r,o,s,a,c)}let n=e.stateMutability;return n==null&&(n="payable",typeof e.constant=="boolean"?(n="view",e.constant||(n="payable",typeof e.payable=="boolean"&&!e.payable&&(n="nonpayable"))):typeof e.payable=="boolean"&&!e.payable&&(n="nonpayable")),new Si(we,e.name,n,e.inputs?e.inputs.map(Ze.from):[],e.outputs?e.outputs.map(Ze.from):[],e.gas!=null?e.gas:null)}static isFragment(e){return e&&e[xn]===Xm}}class Vs extends Ru{constructor(t,e,n){super(t,"struct",e,n),Object.defineProperty(this,xn,{value:Km})}format(){throw new Error("@TODO")}static from(t){if(typeof t=="string")try{return Vs.from(Zr(t))}catch{D(!1,"invalid struct fragment","obj",t)}else if(t instanceof oi){const e=Cu("struct",t),n=sr(t);return Js(t),new Vs(we,e,n)}return new Vs(we,t.name,t.inputs?t.inputs.map(Ze.from):[])}static isFragment(t){return t&&t[xn]===Km}}const ai=new Map;ai.set(0,"GENERIC_PANIC");ai.set(1,"ASSERT_FALSE");ai.set(17,"OVERFLOW");ai.set(18,"DIVIDE_BY_ZERO");ai.set(33,"ENUM_RANGE_ERROR");ai.set(34,"BAD_STORAGE_DATA");ai.set(49,"STACK_UNDERFLOW");ai.set(50,"ARRAY_RANGE_ERROR");ai.set(65,"OUT_OF_MEMORY");ai.set(81,"UNINITIALIZED_FUNCTION_CALL");const c1=new RegExp(/^bytes([0-9]*)$/),l1=new RegExp(/^(u?int)([0-9]*)$/);let Ph=null,Jm=1024;function u1(i,t,e,n){let r="missing revert data",s=null;const o=null;let a=null;if(e){r="execution reverted";const l=qt(e);if(e=gt(e),l.length===0)r+=" (no data present; likely require(false) occurred",s="require(false)";else if(l.length%32!==4)r+=" (could not decode reason; invalid data length)";else if(gt(l.slice(0,4))==="0x08c379a0")try{s=n.decode(["string"],l.slice(4))[0],a={signature:"Error(string)",name:"Error",args:[s]},r+=`: ${JSON.stringify(s)}`}catch{r+=" (could not decode reason; invalid string data)"}else if(gt(l.slice(0,4))==="0x4e487b71")try{const u=Number(n.decode(["uint256"],l.slice(4))[0]);a={signature:"Panic(uint256)",name:"Panic",args:[u]},s=`Panic due to ${ai.get(u)||"UNKNOWN"}(${u})`,r+=`: ${s}`}catch{r+=" (could not decode panic code)"}else r+=" (unknown custom error)"}const c={to:t.to?fe(t.to):null,data:t.data||"0x"};return t.from&&(c.from=fe(t.from)),_e(r,"CALL_EXCEPTION",{action:i,data:e,reason:s,transaction:c,invocation:o,revert:a})}var Pr,Eo;const du=class du{constructor(){Y(this,Pr)}getDefaultValue(t){const e=t.map(r=>dt(this,Pr,Eo).call(this,Ze.from(r)));return new wl(e,"_").defaultValue()}encode(t,e){Jg(e.length,t.length,"types/values length mismatch");const n=t.map(o=>dt(this,Pr,Eo).call(this,Ze.from(o))),r=new wl(n,"_"),s=new _f;return r.encode(s,e),s.data}decode(t,e,n){const r=t.map(o=>dt(this,Pr,Eo).call(this,Ze.from(o)));return new wl(r,"_").decode(new xf(e,n,Jm))}static _setDefaultMaxInflation(t){D(typeof t=="number"&&Number.isInteger(t),"invalid defaultMaxInflation factor","value",t),Jm=t}static defaultAbiCoder(){return Ph==null&&(Ph=new du),Ph}static getBuiltinCallException(t,e,n){return u1(t,e,n,du.defaultAbiCoder())}};Pr=new WeakSet,Eo=function(t){if(t.isArray())return new TM(dt(this,Pr,Eo).call(this,t.arrayChildren),t.arrayLength,t.name);if(t.isTuple())return new wl(t.components.map(n=>dt(this,Pr,Eo).call(this,n)),t.name);switch(t.baseType){case"address":return new SM(t.name);case"bool":return new CM(t.name);case"string":return new BM(t.name);case"bytes":return new RM(t.name);case"":return new LM(t.name)}let e=t.type.match(l1);if(e){let n=parseInt(e[2]||"256");return D(n!==0&&n<=256&&n%8===0,"invalid "+e[1]+" bit length","param",t),new OM(n/8,e[1]==="int",t.name)}if(e=t.type.match(c1),e){let n=parseInt(e[1]);return D(n!==0&&n<=32,"invalid bytes length","param",t),new PM(n,t.name)}D(!1,"invalid type","type",t.type)};let _c=du;class h1{constructor(t,e,n){H(this,"fragment");H(this,"name");H(this,"signature");H(this,"topic");H(this,"args");const r=t.name,s=t.format();Bt(this,{fragment:t,name:r,signature:s,topic:e,args:n})}}class f1{constructor(t,e,n,r){H(this,"fragment");H(this,"name");H(this,"args");H(this,"signature");H(this,"selector");H(this,"value");const s=t.name,o=t.format();Bt(this,{fragment:t,name:s,args:n,signature:o,selector:e,value:r})}}class d1{constructor(t,e,n){H(this,"fragment");H(this,"name");H(this,"args");H(this,"signature");H(this,"selector");const r=t.name,s=t.format();Bt(this,{fragment:t,name:r,args:n,signature:s,selector:e})}}class Ym{constructor(t){H(this,"hash");H(this,"_isIndexed");Bt(this,{hash:t,_isIndexed:!0})}static isIndexed(t){return!!(t&&t._isIndexed)}}const Qm={0:"generic panic",1:"assert(false)",17:"arithmetic overflow",18:"division or modulo by zero",33:"enum overflow",34:"invalid encoded storage byte array accessed",49:"out-of-bounds array access; popping on an empty array",50:"out-of-bounds access of an array or bytesN",65:"out of memory",81:"uninitialized function"},qm={"0x08c379a0":{signature:"Error(string)",name:"Error",inputs:["string"],reason:i=>`reverted with reason string ${JSON.stringify(i)}`},"0x4e487b71":{signature:"Panic(uint256)",name:"Panic",inputs:["uint256"],reason:i=>{let t="unknown panic code";return i>=0&&i<=255&&Qm[i.toString()]&&(t=Qm[i.toString()]),`reverted with panic code 0x${i.toString(16)} (${t})`}}};var gi,yi,vi,tn,Ri,Bl,Fl;const ms=class ms{constructor(t){Y(this,Ri);H(this,"fragments");H(this,"deploy");H(this,"fallback");H(this,"receive");Y(this,gi);Y(this,yi);Y(this,vi);Y(this,tn);let e=[];typeof t=="string"?e=JSON.parse(t):e=t,C(this,vi,new Map),C(this,gi,new Map),C(this,yi,new Map);const n=[];for(const o of e)try{n.push(Ys.from(o))}catch(a){console.log(`[Warning] Invalid Fragment ${JSON.stringify(o)}:`,a.message)}Bt(this,{fragments:Object.freeze(n)});let r=null,s=!1;C(this,tn,this.getAbiCoder()),this.fragments.forEach((o,a)=>{let c;switch(o.type){case"constructor":if(this.deploy){console.log("duplicate definition - constructor");return}Bt(this,{deploy:o});return;case"fallback":o.inputs.length===0?s=!0:(D(!r||o.payable!==r.payable,"conflicting fallback fragments",`fragments[${a}]`,o),r=o,s=r.payable);return;case"function":c=v(this,vi);break;case"event":c=v(this,yi);break;case"error":c=v(this,gi);break;default:return}const l=o.format();c.has(l)||c.set(l,o)}),this.deploy||Bt(this,{deploy:nr.from("constructor()")}),Bt(this,{fallback:r,receive:s})}format(t){const e=t?"minimal":"full";return this.fragments.map(r=>r.format(e))}formatJson(){const t=this.fragments.map(e=>e.format("json"));return JSON.stringify(t.map(e=>JSON.parse(e)))}getAbiCoder(){return _c.defaultAbiCoder()}getFunctionName(t){const e=dt(this,Ri,Bl).call(this,t,null,!1);return D(e,"no matching function","key",t),e.name}hasFunction(t){return!!dt(this,Ri,Bl).call(this,t,null,!1)}getFunction(t,e){return dt(this,Ri,Bl).call(this,t,e||null,!0)}forEachFunction(t){const e=Array.from(v(this,vi).keys());e.sort((n,r)=>n.localeCompare(r));for(let n=0;n<e.length;n++){const r=e[n];t(v(this,vi).get(r),n)}}getEventName(t){const e=dt(this,Ri,Fl).call(this,t,null,!1);return D(e,"no matching event","key",t),e.name}hasEvent(t){return!!dt(this,Ri,Fl).call(this,t,null,!1)}getEvent(t,e){return dt(this,Ri,Fl).call(this,t,e||null,!0)}forEachEvent(t){const e=Array.from(v(this,yi).keys());e.sort((n,r)=>n.localeCompare(r));for(let n=0;n<e.length;n++){const r=e[n];t(v(this,yi).get(r),n)}}getError(t,e){if(ye(t)){const r=t.toLowerCase();if(qm[r])return vn.from(qm[r].signature);for(const s of v(this,gi).values())if(r===s.selector)return s;return null}if(t.indexOf("(")===-1){const r=[];for(const[s,o]of v(this,gi))s.split("(")[0]===t&&r.push(o);if(r.length===0)return t==="Error"?vn.from("error Error(string)"):t==="Panic"?vn.from("error Panic(uint256)"):null;if(r.length>1){const s=r.map(o=>JSON.stringify(o.format())).join(", ");D(!1,`ambiguous error description (i.e. ${s})`,"name",t)}return r[0]}if(t=vn.from(t).format(),t==="Error(string)")return vn.from("error Error(string)");if(t==="Panic(uint256)")return vn.from("error Panic(uint256)");const n=v(this,gi).get(t);return n||null}forEachError(t){const e=Array.from(v(this,gi).keys());e.sort((n,r)=>n.localeCompare(r));for(let n=0;n<e.length;n++){const r=e[n];t(v(this,gi).get(r),n)}}_decodeParams(t,e){return v(this,tn).decode(t,e)}_encodeParams(t,e){return v(this,tn).encode(t,e)}encodeDeploy(t){return this._encodeParams(this.deploy.inputs,t||[])}decodeErrorResult(t,e){if(typeof t=="string"){const n=this.getError(t);D(n,"unknown error","fragment",t),t=n}return D(Me(e,0,4)===t.selector,`data signature does not match error ${t.name}.`,"data",e),this._decodeParams(t.inputs,Me(e,4))}encodeErrorResult(t,e){if(typeof t=="string"){const n=this.getError(t);D(n,"unknown error","fragment",t),t=n}return xe([t.selector,this._encodeParams(t.inputs,e||[])])}decodeFunctionData(t,e){if(typeof t=="string"){const n=this.getFunction(t);D(n,"unknown function","fragment",t),t=n}return D(Me(e,0,4)===t.selector,`data signature does not match function ${t.name}.`,"data",e),this._decodeParams(t.inputs,Me(e,4))}encodeFunctionData(t,e){if(typeof t=="string"){const n=this.getFunction(t);D(n,"unknown function","fragment",t),t=n}return xe([t.selector,this._encodeParams(t.inputs,e||[])])}decodeFunctionResult(t,e){if(typeof t=="string"){const s=this.getFunction(t);D(s,"unknown function","fragment",t),t=s}let n="invalid length for result data";const r=cn(e);if(r.length%32===0)try{return v(this,tn).decode(t.outputs,r)}catch{n="could not decode result data"}nt(!1,n,"BAD_DATA",{value:gt(r),info:{method:t.name,signature:t.format()}})}makeError(t,e){const n=qt(t,"data"),r=_c.getBuiltinCallException("call",e,n);if(r.message.startsWith("execution reverted (unknown custom error)")){const a=gt(n.slice(0,4)),c=this.getError(a);if(c)try{const l=v(this,tn).decode(c.inputs,n.slice(4));r.revert={name:c.name,signature:c.format(),args:l},r.reason=r.revert.signature,r.message=`execution reverted: ${r.reason}`}catch{r.message="execution reverted (coult not decode custom error)"}}const o=this.parseTransaction(e);return o&&(r.invocation={method:o.name,signature:o.signature,args:o.args}),r}encodeFunctionResult(t,e){if(typeof t=="string"){const n=this.getFunction(t);D(n,"unknown function","fragment",t),t=n}return gt(v(this,tn).encode(t.outputs,e||[]))}encodeFilterTopics(t,e){if(typeof t=="string"){const s=this.getEvent(t);D(s,"unknown event","eventFragment",t),t=s}nt(e.length<=t.inputs.length,`too many arguments for ${t.format()}`,"UNEXPECTED_ARGUMENT",{count:e.length,expectedCount:t.inputs.length});const n=[];t.anonymous||n.push(t.topicHash);const r=(s,o)=>s.type==="string"?Ks(o):s.type==="bytes"?De(gt(o)):(s.type==="bool"&&typeof o=="boolean"?o=o?"0x01":"0x00":s.type.match(/^u?int/)?o=Jr(o):s.type.match(/^bytes/)?o=Db(o,32):s.type==="address"&&v(this,tn).encode(["address"],[o]),cr(gt(o),32));for(e.forEach((s,o)=>{const a=t.inputs[o];if(!a.indexed){D(s==null,"cannot filter non-indexed parameters; must be null","contract."+a.name,s);return}s==null?n.push(null):a.baseType==="array"||a.baseType==="tuple"?D(!1,"filtering with tuples or arrays not supported","contract."+a.name,s):Array.isArray(s)?n.push(s.map(c=>r(a,c))):n.push(r(a,s))});n.length&&n[n.length-1]===null;)n.pop();return n}encodeEventLog(t,e){if(typeof t=="string"){const o=this.getEvent(t);D(o,"unknown event","eventFragment",t),t=o}const n=[],r=[],s=[];return t.anonymous||n.push(t.topicHash),D(e.length===t.inputs.length,"event arguments/values mismatch","values",e),t.inputs.forEach((o,a)=>{const c=e[a];if(o.indexed)if(o.type==="string")n.push(Ks(c));else if(o.type==="bytes")n.push(De(c));else{if(o.baseType==="tuple"||o.baseType==="array")throw new Error("not implemented");n.push(v(this,tn).encode([o.type],[c]))}else r.push(o),s.push(c)}),{data:v(this,tn).encode(r,s),topics:n}}decodeEventLog(t,e,n){if(typeof t=="string"){const d=this.getEvent(t);D(d,"unknown event","eventFragment",t),t=d}if(n!=null&&!t.anonymous){const d=t.topicHash;D(ye(n[0],32)&&n[0].toLowerCase()===d,"fragment/topic mismatch","topics[0]",n[0]),n=n.slice(1)}const r=[],s=[],o=[];t.inputs.forEach((d,g)=>{d.indexed?d.type==="string"||d.type==="bytes"||d.baseType==="tuple"||d.baseType==="array"?(r.push(Ze.from({type:"bytes32",name:d.name})),o.push(!0)):(r.push(d),o.push(!1)):(s.push(d),o.push(!1))});const a=n!=null?v(this,tn).decode(r,xe(n)):null,c=v(this,tn).decode(s,e,!0),l=[],u=[];let h=0,f=0;return t.inputs.forEach((d,g)=>{let y=null;if(d.indexed)if(a==null)y=new Ym(null);else if(o[g])y=new Ym(a[f++]);else try{y=a[f++]}catch(m){y=m}else try{y=c[h++]}catch(m){y=m}l.push(y),u.push(d.name||null)}),Pa.fromItems(l,u)}parseTransaction(t){const e=qt(t.data,"tx.data"),n=Et(t.value!=null?t.value:0,"tx.value"),r=this.getFunction(gt(e.slice(0,4)));if(!r)return null;const s=v(this,tn).decode(r.inputs,e.slice(4));return new f1(r,r.selector,s,n)}parseCallResult(t){throw new Error("@TODO")}parseLog(t){const e=this.getEvent(t.topics[0]);return!e||e.anonymous?null:new h1(e,e.topicHash,this.decodeEventLog(e,t.data,t.topics))}parseError(t){const e=gt(t),n=this.getError(Me(e,0,4));if(!n)return null;const r=v(this,tn).decode(n.inputs,Me(e,4));return new d1(n,n.selector,r)}static from(t){return t instanceof ms?t:typeof t=="string"?new ms(JSON.parse(t)):typeof t.formatJson=="function"?new ms(t.formatJson()):typeof t.format=="function"?new ms(t.format("json")):new ms(t)}};gi=new WeakMap,yi=new WeakMap,vi=new WeakMap,tn=new WeakMap,Ri=new WeakSet,Bl=function(t,e,n){if(ye(t)){const s=t.toLowerCase();for(const o of v(this,vi).values())if(s===o.selector)return o;return null}if(t.indexOf("(")===-1){const s=[];for(const[o,a]of v(this,vi))o.split("(")[0]===t&&s.push(a);if(e){const o=e.length>0?e[e.length-1]:null;let a=e.length,c=!0;rn.isTyped(o)&&o.type==="overrides"&&(c=!1,a--);for(let l=s.length-1;l>=0;l--){const u=s[l].inputs.length;u!==a&&(!c||u!==a-1)&&s.splice(l,1)}for(let l=s.length-1;l>=0;l--){const u=s[l].inputs;for(let h=0;h<e.length;h++)if(rn.isTyped(e[h])){if(h>=u.length){if(e[h].type==="overrides")continue;s.splice(l,1);break}if(e[h].type!==u[h].baseType){s.splice(l,1);break}}}}if(s.length===1&&e&&e.length!==s[0].inputs.length){const o=e[e.length-1];(o==null||Array.isArray(o)||typeof o!="object")&&s.splice(0,1)}if(s.length===0)return null;if(s.length>1&&n){const o=s.map(a=>JSON.stringify(a.format())).join(", ");D(!1,`ambiguous function description (i.e. matches ${o})`,"key",t)}return s[0]}const r=v(this,vi).get(Si.from(t).format());return r||null},Fl=function(t,e,n){if(ye(t)){const s=t.toLowerCase();for(const o of v(this,yi).values())if(s===o.topicHash)return o;return null}if(t.indexOf("(")===-1){const s=[];for(const[o,a]of v(this,yi))o.split("(")[0]===t&&s.push(a);if(e){for(let o=s.length-1;o>=0;o--)s[o].inputs.length<e.length&&s.splice(o,1);for(let o=s.length-1;o>=0;o--){const a=s[o].inputs;for(let c=0;c<e.length;c++)if(rn.isTyped(e[c])&&e[c].type!==a[c].baseType){s.splice(o,1);break}}}if(s.length===0)return null;if(s.length>1&&n){const o=s.map(a=>JSON.stringify(a.format())).join(", ");D(!1,`ambiguous event description (i.e. matches ${o})`,"key",t)}return s[0]}const r=v(this,yi).get(bi.from(t).format());return r||null};let Df=ms;const _y=BigInt(0);function Oo(i){return i??null}function Re(i){return i==null?null:i.toString()}class Zm{constructor(t,e,n){H(this,"gasPrice");H(this,"maxFeePerGas");H(this,"maxPriorityFeePerGas");Bt(this,{gasPrice:Oo(t),maxFeePerGas:Oo(e),maxPriorityFeePerGas:Oo(n)})}toJSON(){const{gasPrice:t,maxFeePerGas:e,maxPriorityFeePerGas:n}=this;return{_type:"FeeData",gasPrice:Re(t),maxFeePerGas:Re(e),maxPriorityFeePerGas:Re(n)}}}function au(i){const t={};i.to&&(t.to=i.to),i.from&&(t.from=i.from),i.data&&(t.data=gt(i.data));const e="chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);for(const r of e)!(r in i)||i[r]==null||(t[r]=Et(i[r],`request.${r}`));const n="type,nonce".split(/,/);for(const r of n)!(r in i)||i[r]==null||(t[r]=Zt(i[r],`request.${r}`));return i.accessList&&(t.accessList=js(i.accessList)),i.authorizationList&&(t.authorizationList=i.authorizationList.slice()),"blockTag"in i&&(t.blockTag=i.blockTag),"enableCcipRead"in i&&(t.enableCcipRead=!!i.enableCcipRead),"customData"in i&&(t.customData=i.customData),"blobVersionedHashes"in i&&i.blobVersionedHashes&&(t.blobVersionedHashes=i.blobVersionedHashes.slice()),"kzg"in i&&(t.kzg=i.kzg),"blobWrapperVersion"in i&&(t.blobWrapperVersion=i.blobWrapperVersion),"blobs"in i&&i.blobs&&(t.blobs=i.blobs.map(r=>vd(r)?gt(r):Object.assign({},r))),t}var Ki;class p1{constructor(t,e){H(this,"provider");H(this,"number");H(this,"hash");H(this,"timestamp");H(this,"parentHash");H(this,"parentBeaconBlockRoot");H(this,"nonce");H(this,"difficulty");H(this,"gasLimit");H(this,"gasUsed");H(this,"stateRoot");H(this,"receiptsRoot");H(this,"blobGasUsed");H(this,"excessBlobGas");H(this,"miner");H(this,"prevRandao");H(this,"extraData");H(this,"baseFeePerGas");Y(this,Ki);C(this,Ki,t.transactions.map(n=>typeof n!="string"?new xc(n,e):n)),Bt(this,{provider:e,hash:Oo(t.hash),number:t.number,timestamp:t.timestamp,parentHash:t.parentHash,parentBeaconBlockRoot:t.parentBeaconBlockRoot,nonce:t.nonce,difficulty:t.difficulty,gasLimit:t.gasLimit,gasUsed:t.gasUsed,blobGasUsed:t.blobGasUsed,excessBlobGas:t.excessBlobGas,miner:t.miner,prevRandao:Oo(t.prevRandao),extraData:t.extraData,baseFeePerGas:Oo(t.baseFeePerGas),stateRoot:t.stateRoot,receiptsRoot:t.receiptsRoot})}get transactions(){return v(this,Ki).map(t=>typeof t=="string"?t:t.hash)}get prefetchedTransactions(){const t=v(this,Ki).slice();return t.length===0?[]:(nt(typeof t[0]=="object","transactions were not prefetched with block request","UNSUPPORTED_OPERATION",{operation:"transactionResponses()"}),t)}toJSON(){const{baseFeePerGas:t,difficulty:e,extraData:n,gasLimit:r,gasUsed:s,hash:o,miner:a,prevRandao:c,nonce:l,number:u,parentHash:h,parentBeaconBlockRoot:f,stateRoot:d,receiptsRoot:g,timestamp:y,transactions:m}=this;return{_type:"Block",baseFeePerGas:Re(t),difficulty:Re(e),extraData:n,gasLimit:Re(r),gasUsed:Re(s),blobGasUsed:Re(this.blobGasUsed),excessBlobGas:Re(this.excessBlobGas),hash:o,miner:a,prevRandao:c,nonce:l,number:u,parentHash:h,timestamp:y,parentBeaconBlockRoot:f,stateRoot:d,receiptsRoot:g,transactions:m}}[Symbol.iterator](){let t=0;const e=this.transactions;return{next:()=>t<this.length?{value:e[t++],done:!1}:{value:void 0,done:!0}}}get length(){return v(this,Ki).length}get date(){return this.timestamp==null?null:new Date(this.timestamp*1e3)}async getTransaction(t){let e;if(typeof t=="number")e=v(this,Ki)[t];else{const n=t.toLowerCase();for(const r of v(this,Ki))if(typeof r=="string"){if(r!==n)continue;e=r;break}else{if(r.hash!==n)continue;e=r;break}}if(e==null)throw new Error("no such tx");return typeof e=="string"?await this.provider.getTransaction(e):e}getPrefetchedTransaction(t){const e=this.prefetchedTransactions;if(typeof t=="number")return e[t];t=t.toLowerCase();for(const n of e)if(n.hash===t)return n;D(!1,"no matching transaction","indexOrHash",t)}isMined(){return!!this.hash}isLondon(){return!!this.baseFeePerGas}orphanedEvent(){if(!this.isMined())throw new Error("");return m1(this)}}Ki=new WeakMap;class Hc{constructor(t,e){H(this,"provider");H(this,"transactionHash");H(this,"blockHash");H(this,"blockNumber");H(this,"removed");H(this,"address");H(this,"data");H(this,"topics");H(this,"index");H(this,"transactionIndex");this.provider=e;const n=Object.freeze(t.topics.slice());Bt(this,{transactionHash:t.transactionHash,blockHash:t.blockHash,blockNumber:t.blockNumber,removed:t.removed,address:t.address,data:t.data,topics:n,index:t.index,transactionIndex:t.transactionIndex})}toJSON(){const{address:t,blockHash:e,blockNumber:n,data:r,index:s,removed:o,topics:a,transactionHash:c,transactionIndex:l}=this;return{_type:"log",address:t,blockHash:e,blockNumber:n,data:r,index:s,removed:o,topics:a,transactionHash:c,transactionIndex:l}}async getBlock(){const t=await this.provider.getBlock(this.blockHash);return nt(!!t,"failed to find transaction","UNKNOWN_ERROR",{}),t}async getTransaction(){const t=await this.provider.getTransaction(this.transactionHash);return nt(!!t,"failed to find transaction","UNKNOWN_ERROR",{}),t}async getTransactionReceipt(){const t=await this.provider.getTransactionReceipt(this.transactionHash);return nt(!!t,"failed to find transaction receipt","UNKNOWN_ERROR",{}),t}removedEvent(){return g1(this)}}var Tc;class xy{constructor(t,e){H(this,"provider");H(this,"to");H(this,"from");H(this,"contractAddress");H(this,"hash");H(this,"index");H(this,"blockHash");H(this,"blockNumber");H(this,"logsBloom");H(this,"gasUsed");H(this,"blobGasUsed");H(this,"cumulativeGasUsed");H(this,"gasPrice");H(this,"blobGasPrice");H(this,"type");H(this,"status");H(this,"root");Y(this,Tc);C(this,Tc,Object.freeze(t.logs.map(r=>new Hc(r,e))));let n=_y;t.effectiveGasPrice!=null?n=t.effectiveGasPrice:t.gasPrice!=null&&(n=t.gasPrice),Bt(this,{provider:e,to:t.to,from:t.from,contractAddress:t.contractAddress,hash:t.hash,index:t.index,blockHash:t.blockHash,blockNumber:t.blockNumber,logsBloom:t.logsBloom,gasUsed:t.gasUsed,cumulativeGasUsed:t.cumulativeGasUsed,blobGasUsed:t.blobGasUsed,gasPrice:n,blobGasPrice:t.blobGasPrice,type:t.type,status:t.status,root:t.root})}get logs(){return v(this,Tc)}toJSON(){const{to:t,from:e,contractAddress:n,hash:r,index:s,blockHash:o,blockNumber:a,logsBloom:c,logs:l,status:u,root:h}=this;return{_type:"TransactionReceipt",blockHash:o,blockNumber:a,contractAddress:n,cumulativeGasUsed:Re(this.cumulativeGasUsed),from:e,gasPrice:Re(this.gasPrice),blobGasUsed:Re(this.blobGasUsed),blobGasPrice:Re(this.blobGasPrice),gasUsed:Re(this.gasUsed),hash:r,index:s,logs:l,logsBloom:c,root:h,status:u,to:t}}get length(){return this.logs.length}[Symbol.iterator](){let t=0;return{next:()=>t<this.length?{value:this.logs[t++],done:!1}:{value:void 0,done:!0}}}get fee(){return this.gasUsed*this.gasPrice}async getBlock(){const t=await this.provider.getBlock(this.blockHash);if(t==null)throw new Error("TODO");return t}async getTransaction(){const t=await this.provider.getTransaction(this.hash);if(t==null)throw new Error("TODO");return t}async getResult(){return await this.provider.getTransactionResult(this.hash)}async confirmations(){return await this.provider.getBlockNumber()-this.blockNumber+1}removedEvent(){return wy(this)}reorderedEvent(t){return nt(!t||t.isMined(),"unmined 'other' transction cannot be orphaned","UNSUPPORTED_OPERATION",{operation:"reorderedEvent(other)"}),Ay(this,t)}}Tc=new WeakMap;var Ir;const kd=class kd{constructor(t,e){H(this,"provider");H(this,"blockNumber");H(this,"blockHash");H(this,"index");H(this,"hash");H(this,"type");H(this,"to");H(this,"from");H(this,"nonce");H(this,"gasLimit");H(this,"gasPrice");H(this,"maxPriorityFeePerGas");H(this,"maxFeePerGas");H(this,"maxFeePerBlobGas");H(this,"data");H(this,"value");H(this,"chainId");H(this,"signature");H(this,"accessList");H(this,"blobVersionedHashes");H(this,"authorizationList");Y(this,Ir);this.provider=e,this.blockNumber=t.blockNumber!=null?t.blockNumber:null,this.blockHash=t.blockHash!=null?t.blockHash:null,this.hash=t.hash,this.index=t.index,this.type=t.type,this.from=t.from,this.to=t.to||null,this.gasLimit=t.gasLimit,this.nonce=t.nonce,this.data=t.data,this.value=t.value,this.gasPrice=t.gasPrice,this.maxPriorityFeePerGas=t.maxPriorityFeePerGas!=null?t.maxPriorityFeePerGas:null,this.maxFeePerGas=t.maxFeePerGas!=null?t.maxFeePerGas:null,this.maxFeePerBlobGas=t.maxFeePerBlobGas!=null?t.maxFeePerBlobGas:null,this.chainId=t.chainId,this.signature=t.signature,this.accessList=t.accessList!=null?t.accessList:null,this.blobVersionedHashes=t.blobVersionedHashes!=null?t.blobVersionedHashes:null,this.authorizationList=t.authorizationList!=null?t.authorizationList:null,C(this,Ir,-1)}toJSON(){const{blockNumber:t,blockHash:e,index:n,hash:r,type:s,to:o,from:a,nonce:c,data:l,signature:u,accessList:h,blobVersionedHashes:f}=this;return{_type:"TransactionResponse",accessList:h,blockNumber:t,blockHash:e,blobVersionedHashes:f,chainId:Re(this.chainId),data:l,from:a,gasLimit:Re(this.gasLimit),gasPrice:Re(this.gasPrice),hash:r,maxFeePerGas:Re(this.maxFeePerGas),maxPriorityFeePerGas:Re(this.maxPriorityFeePerGas),maxFeePerBlobGas:Re(this.maxFeePerBlobGas),nonce:c,signature:u,to:o,index:n,type:s,value:Re(this.value)}}async getBlock(){let t=this.blockNumber;if(t==null){const n=await this.getTransaction();n&&(t=n.blockNumber)}if(t==null)return null;const e=this.provider.getBlock(t);if(e==null)throw new Error("TODO");return e}async getTransaction(){return this.provider.getTransaction(this.hash)}async confirmations(){if(this.blockNumber==null){const{tx:e,blockNumber:n}=await an({tx:this.getTransaction(),blockNumber:this.provider.getBlockNumber()});return e==null||e.blockNumber==null?0:n-e.blockNumber+1}return await this.provider.getBlockNumber()-this.blockNumber+1}async wait(t,e){const n=t??1,r=e??0;let s=v(this,Ir),o=-1,a=s===-1;const c=async()=>{if(a)return null;const{blockNumber:f,nonce:d}=await an({blockNumber:this.provider.getBlockNumber(),nonce:this.provider.getTransactionCount(this.from)});if(d<this.nonce){s=f;return}if(a)return null;const g=await this.getTransaction();if(!(g&&g.blockNumber!=null))for(o===-1&&(o=s-3,o<v(this,Ir)&&(o=v(this,Ir)));o<=f;){if(a)return null;const y=await this.provider.getBlock(o,!0);if(y==null)return;for(const m of y)if(m===this.hash)return;for(let m=0;m<y.length;m++){const p=await y.getTransaction(m);if(p.from===this.from&&p.nonce===this.nonce){if(a)return null;const A=await this.provider.getTransactionReceipt(p.hash);if(A==null||f-A.blockNumber+1<n)return;let _="replaced";p.data===this.data&&p.to===this.to&&p.value===this.value?_="repriced":p.data==="0x"&&p.from===p.to&&p.value===_y&&(_="cancelled"),nt(!1,"transaction was replaced","TRANSACTION_REPLACED",{cancelled:_==="replaced"||_==="cancelled",reason:_,replacement:p.replaceableTransaction(s),hash:p.hash,receipt:A})}}o++}},l=f=>{if(f==null||f.status!==0)return f;nt(!1,"transaction execution reverted","CALL_EXCEPTION",{action:"sendTransaction",data:null,reason:null,invocation:null,revert:null,transaction:{to:f.to,from:f.from,data:""},receipt:f})},u=await this.provider.getTransactionReceipt(this.hash);if(n===0)return l(u);if(u){if(n===1||await u.confirmations()>=n)return l(u)}else if(await c(),n===0)return null;return await new Promise((f,d)=>{const g=[],y=()=>{g.forEach(p=>p())};if(g.push(()=>{a=!0}),r>0){const p=setTimeout(()=>{y(),d(_e("wait for transaction timeout","TIMEOUT"))},r);g.push(()=>{clearTimeout(p)})}const m=async p=>{if(await p.confirmations()>=n){y();try{f(l(p))}catch(A){d(A)}}};if(g.push(()=>{this.provider.off(this.hash,m)}),this.provider.on(this.hash,m),s>=0){const p=async()=>{try{await c()}catch(A){if(Qe(A,"TRANSACTION_REPLACED")){y(),d(A);return}}a||this.provider.once("block",p)};g.push(()=>{this.provider.off("block",p)}),this.provider.once("block",p)}})}isMined(){return this.blockHash!=null}isLegacy(){return this.type===0}isBerlin(){return this.type===1}isLondon(){return this.type===2}isCancun(){return this.type===3}removedEvent(){return nt(this.isMined(),"unmined transaction canot be orphaned","UNSUPPORTED_OPERATION",{operation:"removeEvent()"}),wy(this)}reorderedEvent(t){return nt(this.isMined(),"unmined transaction canot be orphaned","UNSUPPORTED_OPERATION",{operation:"removeEvent()"}),nt(!t||t.isMined(),"unmined 'other' transaction canot be orphaned","UNSUPPORTED_OPERATION",{operation:"removeEvent()"}),Ay(this,t)}replaceableTransaction(t){D(Number.isInteger(t)&&t>=0,"invalid startBlock","startBlock",t);const e=new kd(this,this.provider);return C(e,Ir,t),e}};Ir=new WeakMap;let xc=kd;function m1(i){return{orphan:"drop-block",hash:i.hash,number:i.number}}function Ay(i,t){return{orphan:"reorder-transaction",tx:i,other:t}}function wy(i){return{orphan:"drop-transaction",tx:i}}function g1(i){return{orphan:"drop-log",log:{transactionHash:i.transactionHash,blockHash:i.blockHash,blockNumber:i.blockNumber,address:i.address,data:i.data,topics:Object.freeze(i.topics.slice()),index:i.index}}}class Ld extends Hc{constructor(e,n,r){super(e,e.provider);H(this,"interface");H(this,"fragment");H(this,"args");const s=n.decodeEventLog(r,e.data,e.topics);Bt(this,{args:s,fragment:r,interface:n})}get eventName(){return this.fragment.name}get eventSignature(){return this.fragment.format()}}class Ey extends Hc{constructor(e,n){super(e,e.provider);H(this,"error");Bt(this,{error:n})}}var la;class y1 extends xy{constructor(e,n,r){super(r,n);Y(this,la);C(this,la,e)}get logs(){return super.logs.map(e=>{const n=e.topics.length?v(this,la).getEvent(e.topics[0]):null;if(n)try{return new Ld(e,v(this,la),n)}catch(r){return new Ey(e,r)}return e})}}la=new WeakMap;var Cc;class Nd extends xc{constructor(e,n,r){super(r,n);Y(this,Cc);C(this,Cc,e)}async wait(e,n){const r=await super.wait(e,n);return r==null?null:new y1(v(this,Cc),this.provider,r)}}Cc=new WeakMap;class by extends Zg{constructor(e,n,r,s){super(e,n,r);H(this,"log");Bt(this,{log:s})}async getBlock(){return await this.log.getBlock()}async getTransaction(){return await this.log.getTransaction()}async getTransactionReceipt(){return await this.log.getTransactionReceipt()}}class v1 extends by{constructor(t,e,n,r,s){super(t,e,n,new Ld(s,t.interface,r));const o=t.interface.decodeEventLog(r,this.log.data,this.log.topics);Bt(this,{args:o,fragment:r})}get eventName(){return this.fragment.name}get eventSignature(){return this.fragment.format()}}const jm=BigInt(0);function Sy(i){return i&&typeof i.call=="function"}function My(i){return i&&typeof i.estimateGas=="function"}function Pu(i){return i&&typeof i.resolveName=="function"}function Ty(i){return i&&typeof i.sendTransaction=="function"}function Cy(i){if(i!=null){if(Pu(i))return i;if(i.provider)return i.provider}}var Rc;class _1{constructor(t,e,n){Y(this,Rc);H(this,"fragment");if(Bt(this,{fragment:e}),e.inputs.length<n.length)throw new Error("too many arguments");const r=Qs(t.runner,"resolveName"),s=Pu(r)?r:null;C(this,Rc,async function(){const o=await Promise.all(e.inputs.map((a,c)=>n[c]==null?null:a.walkAsync(n[c],(u,h)=>u==="address"?Array.isArray(h)?Promise.all(h.map(f=>un(f,s))):un(h,s):h)));return t.interface.encodeFilterTopics(e,o)}())}getTopicFilter(){return v(this,Rc)}}Rc=new WeakMap;function Qs(i,t){return i==null?null:typeof i[t]=="function"?i:i.provider&&typeof i.provider[t]=="function"?i.provider:null}function As(i){return i==null?null:i.provider||null}async function Ry(i,t){const e=rn.dereference(i,"overrides");D(typeof e=="object","invalid overrides parameter","overrides",i);const n=au(e);return D(n.to==null||(t||[]).indexOf("to")>=0,"cannot override to","overrides.to",n.to),D(n.data==null||(t||[]).indexOf("data")>=0,"cannot override data","overrides.data",n.data),n.from&&(n.from=n.from),n}async function x1(i,t,e){const n=Qs(i,"resolveName"),r=Pu(n)?n:null;return await Promise.all(t.map((s,o)=>s.walkAsync(e[o],(a,c)=>(c=rn.dereference(c,a),a==="address"?un(c,r):c))))}function A1(i){const t=async function(o){const a=await Ry(o,["data"]);a.to=await i.getAddress(),a.from&&(a.from=await un(a.from,Cy(i.runner)));const c=i.interface,l=Et(a.value||jm,"overrides.value")===jm,u=(a.data||"0x")==="0x";c.fallback&&!c.fallback.payable&&c.receive&&!u&&!l&&D(!1,"cannot send data to receive or send value to non-payable fallback","overrides",o),D(c.fallback||u,"cannot send data to receive-only contract","overrides.data",a.data);const h=c.receive||c.fallback&&c.fallback.payable;return D(h||l,"cannot send value to non-payable fallback","overrides.value",a.value),D(c.fallback||u,"cannot send data to receive-only contract","overrides.data",a.data),a},e=async function(o){const a=Qs(i.runner,"call");nt(Sy(a),"contract runner does not support calling","UNSUPPORTED_OPERATION",{operation:"call"});const c=await t(o);try{return await a.call(c)}catch(l){throw yd(l)&&l.data?i.interface.makeError(l.data,c):l}},n=async function(o){const a=i.runner;nt(Ty(a),"contract runner does not support sending transactions","UNSUPPORTED_OPERATION",{operation:"sendTransaction"});const c=await a.sendTransaction(await t(o)),l=As(i.runner);return new Nd(i.interface,l,c)},r=async function(o){const a=Qs(i.runner,"estimateGas");return nt(My(a),"contract runner does not support gas estimation","UNSUPPORTED_OPERATION",{operation:"estimateGas"}),await a.estimateGas(await t(o))},s=async o=>await n(o);return Bt(s,{_contract:i,estimateGas:r,populateTransaction:t,send:n,staticCall:e}),s}function w1(i,t){const e=function(...l){const u=i.interface.getFunction(t,l);return nt(u,"no matching fragment","UNSUPPORTED_OPERATION",{operation:"fragment",info:{key:t,args:l}}),u},n=async function(...l){const u=e(...l);let h={};if(u.inputs.length+1===l.length&&(h=await Ry(l.pop()),h.from&&(h.from=await un(h.from,Cy(i.runner)))),u.inputs.length!==l.length)throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");const f=await x1(i.runner,u.inputs,l);return Object.assign({},h,await an({to:i.getAddress(),data:i.interface.encodeFunctionData(u,f)}))},r=async function(...l){const u=await a(...l);return u.length===1?u[0]:u},s=async function(...l){const u=i.runner;nt(Ty(u),"contract runner does not support sending transactions","UNSUPPORTED_OPERATION",{operation:"sendTransaction"});const h=await u.sendTransaction(await n(...l)),f=As(i.runner);return new Nd(i.interface,f,h)},o=async function(...l){const u=Qs(i.runner,"estimateGas");return nt(My(u),"contract runner does not support gas estimation","UNSUPPORTED_OPERATION",{operation:"estimateGas"}),await u.estimateGas(await n(...l))},a=async function(...l){const u=Qs(i.runner,"call");nt(Sy(u),"contract runner does not support calling","UNSUPPORTED_OPERATION",{operation:"call"});const h=await n(...l);let f="0x";try{f=await u.call(h)}catch(g){throw yd(g)&&g.data?i.interface.makeError(g.data,h):g}const d=e(...l);return i.interface.decodeFunctionResult(d,f)},c=async(...l)=>e(...l).constant?await r(...l):await s(...l);return Bt(c,{name:i.interface.getFunctionName(t),_contract:i,_key:t,getFragment:e,estimateGas:o,populateTransaction:n,send:s,staticCall:r,staticCallResult:a}),Object.defineProperty(c,"fragment",{configurable:!1,enumerable:!0,get:()=>{const l=i.interface.getFunction(t);return nt(l,"no matching fragment","UNSUPPORTED_OPERATION",{operation:"fragment",info:{key:t}}),l}}),c}function E1(i,t){const e=function(...r){const s=i.interface.getEvent(t,r);return nt(s,"no matching fragment","UNSUPPORTED_OPERATION",{operation:"fragment",info:{key:t,args:r}}),s},n=function(...r){return new _1(i,e(...r),r)};return Bt(n,{name:i.interface.getEventName(t),_contract:i,_key:t,getFragment:e}),Object.defineProperty(n,"fragment",{configurable:!1,enumerable:!0,get:()=>{const r=i.interface.getEvent(t);return nt(r,"no matching fragment","UNSUPPORTED_OPERATION",{operation:"fragment",info:{key:t}}),r}}),n}const cu=Symbol.for("_ethersInternal_contract"),Py=new WeakMap;function b1(i,t){Py.set(i[cu],t)}function Mn(i){return Py.get(i[cu])}function S1(i){return i&&typeof i=="object"&&"getTopicFilter"in i&&typeof i.getTopicFilter=="function"&&i.fragment}async function Ud(i,t){let e,n=null;if(Array.isArray(t)){const s=function(o){if(ye(o,32))return o;const a=i.interface.getEvent(o);return D(a,"unknown fragment","name",o),a.topicHash};e=t.map(o=>o==null?null:Array.isArray(o)?o.map(s):s(o))}else t==="*"?e=[null]:typeof t=="string"?ye(t,32)?e=[t]:(n=i.interface.getEvent(t),D(n,"unknown fragment","event",t),e=[n.topicHash]):S1(t)?e=await t.getTopicFilter():"fragment"in t?(n=t.fragment,e=[n.topicHash]):D(!1,"unknown event name","event",t);e=e.map(s=>{if(s==null)return null;if(Array.isArray(s)){const o=Array.from(new Set(s.map(a=>a.toLowerCase())).values());return o.length===1?o[0]:(o.sort(),o)}return s.toLowerCase()});const r=e.map(s=>s==null?"null":Array.isArray(s)?s.join("|"):s).join("&");return{fragment:n,tag:r,topics:e}}async function $a(i,t){const{subs:e}=Mn(i);return e.get((await Ud(i,t)).tag)||null}async function $m(i,t,e){const n=As(i.runner);nt(n,"contract runner does not support subscribing","UNSUPPORTED_OPERATION",{operation:t});const{fragment:r,tag:s,topics:o}=await Ud(i,e),{addr:a,subs:c}=Mn(i);let l=c.get(s);if(!l){const h={address:a||i,topics:o},f=m=>{let p=r;if(p==null)try{p=i.interface.getEvent(m.topics[0])}catch{}if(p){const A=p,_=r?i.interface.decodeEventLog(r,m.data,m.topics):[];Bf(i,e,_,S=>new v1(i,S,e,A,m))}else Bf(i,e,[],A=>new by(i,A,e,m))};let d=[];l={tag:s,listeners:[],start:()=>{d.length||d.push(n.on(h,f))},stop:async()=>{if(d.length==0)return;let m=d;d=[],await Promise.all(m),n.off(h,f)}},c.set(s,l)}return l}let Of=Promise.resolve();async function M1(i,t,e,n){await Of;const r=await $a(i,t);if(!r)return!1;const s=r.listeners.length;return r.listeners=r.listeners.filter(({listener:o,once:a})=>{const c=Array.from(e);n&&c.push(n(a?null:o));try{o.call(i,...c)}catch{}return!a}),r.listeners.length===0&&(r.stop(),Mn(i).subs.delete(r.tag)),s>0}async function Bf(i,t,e,n){try{await Of}catch{}const r=M1(i,t,e,n);return Of=r,await r}const bl=["then"];var lg;lg=cu;const ac=class ac{constructor(t,e,n,r){H(this,"target");H(this,"interface");H(this,"runner");H(this,"filters");H(this,lg);H(this,"fallback");D(typeof t=="string"||D0(t),"invalid value for Contract target","target",t),n==null&&(n=null);const s=Df.from(e);Bt(this,{target:t,runner:n,interface:s}),Object.defineProperty(this,cu,{value:{}});let o,a=null,c=null;if(r){const h=As(n);c=new Nd(this.interface,h,r)}let l=new Map;if(typeof t=="string")if(ye(t))a=t,o=Promise.resolve(t);else{const h=Qs(n,"resolveName");if(!Pu(h))throw _e("contract runner does not support name resolution","UNSUPPORTED_OPERATION",{operation:"resolveName"});o=h.resolveName(t).then(f=>{if(f==null)throw _e("an ENS name used for a contract target must be correctly configured","UNCONFIGURED_NAME",{value:t});return Mn(this).addr=f,f})}else o=t.getAddress().then(h=>{if(h==null)throw new Error("TODO");return Mn(this).addr=h,h});b1(this,{addrPromise:o,addr:a,deployTx:c,subs:l});const u=new Proxy({},{get:(h,f,d)=>{if(typeof f=="symbol"||bl.indexOf(f)>=0)return Reflect.get(h,f,d);try{return this.getEvent(f)}catch(g){if(!Qe(g,"INVALID_ARGUMENT")||g.argument!=="key")throw g}},has:(h,f)=>bl.indexOf(f)>=0?Reflect.has(h,f):Reflect.has(h,f)||this.interface.hasEvent(String(f))});return Bt(this,{filters:u}),Bt(this,{fallback:s.receive||s.fallback?A1(this):null}),new Proxy(this,{get:(h,f,d)=>{if(typeof f=="symbol"||f in h||bl.indexOf(f)>=0)return Reflect.get(h,f,d);try{return h.getFunction(f)}catch(g){if(!Qe(g,"INVALID_ARGUMENT")||g.argument!=="key")throw g}},has:(h,f)=>typeof f=="symbol"||f in h||bl.indexOf(f)>=0?Reflect.has(h,f):h.interface.hasFunction(f)})}connect(t){return new ac(this.target,this.interface,t)}attach(t){return new ac(t,this.interface,this.runner)}async getAddress(){return await Mn(this).addrPromise}async getDeployedCode(){const t=As(this.runner);nt(t,"runner does not support .provider","UNSUPPORTED_OPERATION",{operation:"getDeployedCode"});const e=await t.getCode(await this.getAddress());return e==="0x"?null:e}async waitForDeployment(){const t=this.deploymentTransaction();if(t)return await t.wait(),this;if(await this.getDeployedCode()!=null)return this;const n=As(this.runner);return nt(n!=null,"contract runner does not support .provider","UNSUPPORTED_OPERATION",{operation:"waitForDeployment"}),new Promise((r,s)=>{const o=async()=>{try{if(await this.getDeployedCode()!=null)return r(this);n.once("block",o)}catch(a){s(a)}};o()})}deploymentTransaction(){return Mn(this).deployTx}getFunction(t){return typeof t!="string"&&(t=t.format()),w1(this,t)}getEvent(t){return typeof t!="string"&&(t=t.format()),E1(this,t)}async queryTransaction(t){throw new Error("@TODO")}async queryFilter(t,e,n){e==null&&(e=0),n==null&&(n="latest");const{addr:r,addrPromise:s}=Mn(this),o=r||await s,{fragment:a,topics:c}=await Ud(this,t),l={address:o,topics:c,fromBlock:e,toBlock:n},u=As(this.runner);return nt(u,"contract runner does not have a provider","UNSUPPORTED_OPERATION",{operation:"queryFilter"}),(await u.getLogs(l)).map(h=>{let f=a;if(f==null)try{f=this.interface.getEvent(h.topics[0])}catch{}if(f)try{return new Ld(h,this.interface,f)}catch(d){return new Ey(h,d)}return new Hc(h,u)})}async on(t,e){const n=await $m(this,"on",t);return n.listeners.push({listener:e,once:!1}),n.start(),this}async once(t,e){const n=await $m(this,"once",t);return n.listeners.push({listener:e,once:!0}),n.start(),this}async emit(t,...e){return await Bf(this,t,e,null)}async listenerCount(t){if(t){const r=await $a(this,t);return r?r.listeners.length:0}const{subs:e}=Mn(this);let n=0;for(const{listeners:r}of e.values())n+=r.length;return n}async listeners(t){if(t){const r=await $a(this,t);return r?r.listeners.map(({listener:s})=>s):[]}const{subs:e}=Mn(this);let n=[];for(const{listeners:r}of e.values())n=n.concat(r.map(({listener:s})=>s));return n}async off(t,e){const n=await $a(this,t);if(!n)return this;if(e){const r=n.listeners.map(({listener:s})=>s).indexOf(e);r>=0&&n.listeners.splice(r,1)}return(e==null||n.listeners.length===0)&&(n.stop(),Mn(this).subs.delete(n.tag)),this}async removeAllListeners(t){if(t){const e=await $a(this,t);if(!e)return this;e.stop(),Mn(this).subs.delete(e.tag)}else{const{subs:e}=Mn(this);for(const{tag:n,stop:r}of e.values())r(),e.delete(n)}return this}async addListener(t,e){return await this.on(t,e)}async removeListener(t,e){return await this.off(t,e)}static buildClass(t){class e extends ac{constructor(r,s=null){super(r,t,s)}}return e}static from(t,e,n){return n==null&&(n=null),new this(t,e,n)}};let Ff=ac;function T1(){return Ff}class oc extends T1(){}function Ih(i){return i.match(/^ipfs:\/\/ipfs\//i)?i=i.substring(12):i.match(/^ipfs:\/\//i)?i=i.substring(7):D(!1,"unsupported IPFS format","link",i),`https://gateway.ipfs.io/ipfs/${i}`}class C1{constructor(t){H(this,"name");Bt(this,{name:t})}connect(t){return this}supportsCoinType(t){return!1}async encodeAddress(t,e){throw new Error("unsupported coin")}async decodeAddress(t,e){throw new Error("unsupported coin")}}const Iy=new RegExp("^(ipfs)://(.*)$","i"),tg=[new RegExp("^(https)://(.*)$","i"),new RegExp("^(data):(.*)$","i"),Iy,new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$","i")];var Lr,Us,Nr,bo,pu,Ly;const Ro=class Ro{constructor(t,e,n){Y(this,Nr);H(this,"provider");H(this,"address");H(this,"name");Y(this,Lr);Y(this,Us);Bt(this,{provider:t,address:e,name:n}),C(this,Lr,null),C(this,Us,new oc(e,["function supportsInterface(bytes4) view returns (bool)","function resolve(bytes, bytes) view returns (bytes)","function addr(bytes32) view returns (address)","function addr(bytes32, uint) view returns (bytes)","function text(bytes32, string) view returns (string)","function contenthash(bytes32) view returns (bytes)"],t))}async supportsWildcard(){return v(this,Lr)==null&&C(this,Lr,(async()=>{try{return await v(this,Us).supportsInterface("0x9061b923")}catch(t){if(Qe(t,"CALL_EXCEPTION"))return!1;throw C(this,Lr,null),t}})()),await v(this,Lr)}async getAddress(t){if(t==null&&(t=60),t===60)try{const s=await dt(this,Nr,bo).call(this,"addr(bytes32)");return s==null||s===fc?null:s}catch(s){if(Qe(s,"CALL_EXCEPTION"))return null;throw s}if(t>=0&&t<2147483648){let s=t+2147483648;const o=await dt(this,Nr,bo).call(this,"addr(bytes32,uint)",[s]);if(ye(o,20))return fe(o)}let e=null;for(const s of this.provider.plugins)if(s instanceof C1&&s.supportsCoinType(t)){e=s;break}if(e==null)return null;const n=await dt(this,Nr,bo).call(this,"addr(bytes32,uint)",[t]);if(n==null||n==="0x")return null;const r=await e.decodeAddress(t,n);if(r!=null)return r;nt(!1,"invalid coin data","UNSUPPORTED_OPERATION",{operation:`getAddress(${t})`,info:{coinType:t,data:n}})}async getText(t){const e=await dt(this,Nr,bo).call(this,"text(bytes32,string)",[t]);return e==null||e==="0x"?null:e}async getContentHash(){const t=await dt(this,Nr,bo).call(this,"contenthash(bytes32)");if(t==null||t==="0x")return null;const e=t.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);if(e){const r=e[1]==="e3010170"?"ipfs":"ipns",s=parseInt(e[4],16);if(e[5].length===s*2)return`${r}://${Fb("0x"+e[2])}`}const n=t.match(/^0xe40101fa011b20([0-9a-f]*)$/);if(n&&n[1].length===64)return`bzz://${n[1]}`;nt(!1,"invalid or unsupported content hash data","UNSUPPORTED_OPERATION",{operation:"getContentHash()",info:{data:t}})}async getAvatar(){return(await this._getAvatar()).url}async _getAvatar(){const t=[{type:"name",value:this.name}];try{const e=await this.getText("avatar");if(e==null)return t.push({type:"!avatar",value:""}),{url:null,linkage:t};t.push({type:"avatar",value:e});for(let n=0;n<tg.length;n++){const r=e.match(tg[n]);if(r==null)continue;const s=r[1].toLowerCase();switch(s){case"https":case"data":return t.push({type:"url",value:e}),{linkage:t,url:e};case"ipfs":{const o=Ih(e);return t.push({type:"ipfs",value:e}),t.push({type:"url",value:o}),{linkage:t,url:o}}case"erc721":case"erc1155":{const o=s==="erc721"?"tokenURI(uint256)":"uri(uint256)";t.push({type:s,value:e});const a=await this.getAddress();if(a==null)return t.push({type:"!owner",value:""}),{url:null,linkage:t};const c=(r[2]||"").split("/");if(c.length!==2)return t.push({type:`!${s}caip`,value:r[2]||""}),{url:null,linkage:t};const l=c[1],u=new oc(c[0],["function tokenURI(uint) view returns (string)","function ownerOf(uint) view returns (address)","function uri(uint) view returns (string)","function balanceOf(address, uint256) view returns (uint)"],this.provider);if(s==="erc721"){const y=await u.ownerOf(l);if(a!==y)return t.push({type:"!owner",value:y}),{url:null,linkage:t};t.push({type:"owner",value:y})}else if(s==="erc1155"){const y=await u.balanceOf(a,l);if(!y)return t.push({type:"!balance",value:"0"}),{url:null,linkage:t};t.push({type:"balance",value:y.toString()})}let h=await u[o](l);if(h==null||h==="0x")return t.push({type:"!metadata-url",value:""}),{url:null,linkage:t};t.push({type:"metadata-url-base",value:h}),s==="erc1155"&&(h=h.replace("{id}",Jr(l,32).substring(2)),t.push({type:"metadata-url-expanded",value:h})),h.match(/^ipfs:/i)&&(h=Ih(h)),t.push({type:"metadata-url",value:h});let f={};const d=await new Yr(h).send();d.assertOk();try{f=d.bodyJson}catch{try{t.push({type:"!metadata",value:d.bodyText})}catch{const p=d.body;return p&&t.push({type:"!metadata",value:gt(p)}),{url:null,linkage:t}}return{url:null,linkage:t}}if(!f)return t.push({type:"!metadata",value:""}),{url:null,linkage:t};t.push({type:"metadata",value:JSON.stringify(f)});let g=f.image;if(typeof g!="string")return t.push({type:"!imageUrl",value:""}),{url:null,linkage:t};if(!g.match(/^(https:\/\/|data:)/i)){if(g.match(Iy)==null)return t.push({type:"!imageUrl-ipfs",value:g}),{url:null,linkage:t};t.push({type:"imageUrl-ipfs",value:g}),g=Ih(g)}return t.push({type:"url",value:g}),{linkage:t,url:g}}}}}catch{}return{linkage:t,url:null}}static async getEnsAddress(t){const e=await t.getNetwork(),n=e.getPlugin("org.ethers.plugins.network.Ens");return nt(n,"network does not support ENS","UNSUPPORTED_OPERATION",{operation:"getEnsAddress",info:{network:e}}),n.address}static async fromName(t,e){var r;let n=e;for(;;){if(n===""||n==="."||e!=="eth"&&n==="eth")return null;const s=await dt(r=Ro,pu,Ly).call(r,t,n);if(s!=null){const o=new Ro(t,s,e);return n!==e&&!await o.supportsWildcard()?null:o}n=n.split(".").slice(1).join(".")}}};Lr=new WeakMap,Us=new WeakMap,Nr=new WeakSet,bo=async function(t,e){e=(e||[]).slice();const n=v(this,Us).interface;e.unshift(Nf(this.name));let r=null;await this.supportsWildcard()&&(r=n.getFunction(t),nt(r,"missing fragment","UNKNOWN_ERROR",{info:{funcName:t}}),e=[VT(this.name,255),n.encodeFunctionData(r,e)],t="resolve(bytes,bytes)"),e.push({enableCcipRead:!0});try{const s=await v(this,Us)[t](...e);return r?n.decodeFunctionResult(r,s)[0]:s}catch(s){if(!Qe(s,"CALL_EXCEPTION"))throw s}return null},pu=new WeakSet,Ly=async function(t,e){const n=await Ro.getEnsAddress(t);try{const s=await new oc(n,["function resolver(bytes32) view returns (address)"],t).resolver(Nf(e),{enableCcipRead:!0});return s===fc?null:s}catch(r){throw r}return null},Y(Ro,pu);let lu=Ro;const eg=BigInt(0);function ee(i,t){return function(e){return e==null?t:i(e)}}function Ac(i,t){return e=>{if(t&&e==null)return null;if(!Array.isArray(e))throw new Error("not an array");return e.map(n=>i(n))}}function Vc(i,t){return e=>{const n={};for(const r in i){let s=r;if(t&&r in t&&!(s in e)){for(const o of t[r])if(o in e){s=o;break}}try{const o=i[r](e[s]);o!==void 0&&(n[r]=o)}catch(o){const a=o instanceof Error?o.message:"not-an-error";nt(!1,`invalid value for value.${r} (${a})`,"BAD_DATA",{value:e})}}return n}}function R1(i){switch(i){case!0:case"true":return!0;case!1:case"false":return!1}D(!1,`invalid boolean; ${JSON.stringify(i)}`,"value",i)}function Oa(i){return D(ye(i,!0),"invalid data","value",i),i}function Ye(i){return D(ye(i,32),"invalid hash","value",i),i}const P1=Vc({address:fe,blockHash:Ye,blockNumber:Zt,data:Oa,index:Zt,removed:ee(R1,!1),topics:Ac(Ye),transactionHash:Ye,transactionIndex:Zt},{index:["logIndex"]});function I1(i){return P1(i)}const L1=Vc({hash:ee(Ye),parentHash:Ye,parentBeaconBlockRoot:ee(Ye,null),number:Zt,timestamp:Zt,nonce:ee(Oa),difficulty:Et,gasLimit:Et,gasUsed:Et,stateRoot:ee(Ye,null),receiptsRoot:ee(Ye,null),blobGasUsed:ee(Et,null),excessBlobGas:ee(Et,null),miner:ee(fe),prevRandao:ee(Ye,null),extraData:Oa,baseFeePerGas:ee(Et)},{prevRandao:["mixHash"]});function N1(i){const t=L1(i);return t.transactions=i.transactions.map(e=>typeof e=="string"?e:Ny(e)),t}const U1=Vc({transactionIndex:Zt,blockNumber:Zt,transactionHash:Ye,address:fe,topics:Ac(Ye),data:Oa,index:Zt,blockHash:Ye},{index:["logIndex"]});function D1(i){return U1(i)}const O1=Vc({to:ee(fe,null),from:ee(fe,null),contractAddress:ee(fe,null),index:Zt,root:ee(gt),gasUsed:Et,blobGasUsed:ee(Et,null),logsBloom:ee(Oa),blockHash:Ye,hash:Ye,logs:Ac(D1),blockNumber:Zt,cumulativeGasUsed:Et,effectiveGasPrice:ee(Et),blobGasPrice:ee(Et,null),status:ee(Zt),type:ee(Zt,0)},{effectiveGasPrice:["gasPrice"],hash:["transactionHash"],index:["transactionIndex"]});function B1(i){return O1(i)}function Ny(i){i.to&&Et(i.to)===eg&&(i.to="0x0000000000000000000000000000000000000000");const t=Vc({hash:Ye,index:ee(Zt,void 0),type:e=>e==="0x"||e==null?0:Zt(e),accessList:ee(js,null),blobVersionedHashes:ee(Ac(Ye,!0),null),authorizationList:ee(Ac(e=>{let n;if(e.signature)n=e.signature;else{let r=e.yParity;r==="0x1b"?r=0:r==="0x1c"&&(r=1),n=Object.assign({},e,{yParity:r})}return{address:fe(e.address),chainId:Et(e.chainId),nonce:Et(e.nonce),signature:_n.from(n)}},!1),null),blockHash:ee(Ye,null),blockNumber:ee(Zt,null),transactionIndex:ee(Zt,null),from:fe,gasPrice:ee(Et),maxPriorityFeePerGas:ee(Et),maxFeePerGas:ee(Et),maxFeePerBlobGas:ee(Et,null),gasLimit:Et,to:ee(fe,null),value:Et,nonce:Zt,data:Oa,creates:ee(fe,null),chainId:ee(Et,null)},{data:["input"],gasLimit:["gas"],index:["transactionIndex"]})(i);if(t.to==null&&t.creates==null&&(t.creates=bM(t)),(i.type===1||i.type===2)&&i.accessList==null&&(t.accessList=[]),i.signature?t.signature=_n.from(i.signature):t.signature=_n.from(i),t.chainId==null){const e=t.signature.legacyChainId;e!=null&&(t.chainId=e)}return t.blockHash&&Et(t.blockHash)===eg&&(t.blockHash=null),t}const F1="0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";class Wc{constructor(t){H(this,"name");Bt(this,{name:t})}clone(){return new Wc(this.name)}}class Iu extends Wc{constructor(e,n){e==null&&(e=0);super(`org.ethers.network.plugins.GasCost#${e||0}`);H(this,"effectiveBlock");H(this,"txBase");H(this,"txCreate");H(this,"txDataZero");H(this,"txDataNonzero");H(this,"txAccessListStorageKey");H(this,"txAccessListAddress");const r={effectiveBlock:e};function s(o,a){let c=(n||{})[o];c==null&&(c=a),D(typeof c=="number",`invalud value for ${o}`,"costs",n),r[o]=c}s("txBase",21e3),s("txCreate",32e3),s("txDataZero",4),s("txDataNonzero",16),s("txAccessListStorageKey",1900),s("txAccessListAddress",2400),Bt(this,r)}clone(){return new Iu(this.effectiveBlock,this)}}class Lu extends Wc{constructor(e,n){super("org.ethers.plugins.network.Ens");H(this,"address");H(this,"targetNetwork");Bt(this,{address:e||F1,targetNetwork:n??1})}clone(){return new Lu(this.address,this.targetNetwork)}}var Pc,Ic;class k1 extends Wc{constructor(e,n){super("org.ethers.plugins.network.FetchUrlFeeDataPlugin");Y(this,Pc);Y(this,Ic);C(this,Pc,e),C(this,Ic,n)}get url(){return v(this,Pc)}get processFunc(){return v(this,Ic)}clone(){return this}}Pc=new WeakMap,Ic=new WeakMap;const Lh=new Map;var ua,ha,Ur;const Po=class Po{constructor(t,e){Y(this,ua);Y(this,ha);Y(this,Ur);C(this,ua,t),C(this,ha,Et(e)),C(this,Ur,new Map)}toJSON(){return{name:this.name,chainId:String(this.chainId)}}get name(){return v(this,ua)}set name(t){C(this,ua,t)}get chainId(){return v(this,ha)}set chainId(t){C(this,ha,Et(t,"chainId"))}matches(t){if(t==null)return!1;if(typeof t=="string"){try{return this.chainId===Et(t)}catch{}return this.name===t}if(typeof t=="number"||typeof t=="bigint"){try{return this.chainId===Et(t)}catch{}return!1}if(typeof t=="object"){if(t.chainId!=null){try{return this.chainId===Et(t.chainId)}catch{}return!1}return t.name!=null?this.name===t.name:!1}return!1}get plugins(){return Array.from(v(this,Ur).values())}attachPlugin(t){if(v(this,Ur).get(t.name))throw new Error(`cannot replace existing plugin: ${t.name} `);return v(this,Ur).set(t.name,t.clone()),this}getPlugin(t){return v(this,Ur).get(t)||null}getPlugins(t){return this.plugins.filter(e=>e.name.split("#")[0]===t)}clone(){const t=new Po(this.name,this.chainId);return this.plugins.forEach(e=>{t.attachPlugin(e.clone())}),t}computeIntrinsicGas(t){const e=this.getPlugin("org.ethers.plugins.network.GasCost")||new Iu;let n=e.txBase;if(t.to==null&&(n+=e.txCreate),t.data)for(let r=2;r<t.data.length;r+=2)t.data.substring(r,r+2)==="00"?n+=e.txDataZero:n+=e.txDataNonzero;if(t.accessList){const r=js(t.accessList);for(const s in r)n+=e.txAccessListAddress+e.txAccessListStorageKey*r[s].storageKeys.length}return n}static from(t){if(z1(),t==null)return Po.from("mainnet");if(typeof t=="number"&&(t=BigInt(t)),typeof t=="string"||typeof t=="bigint"){const e=Lh.get(t);if(e)return e();if(typeof t=="bigint")return new Po("unknown",t);D(!1,"unknown network","network",t)}if(typeof t.clone=="function")return t.clone();if(typeof t=="object"){D(typeof t.name=="string"&&typeof t.chainId=="number","invalid network object name or chainId","network",t);const e=new Po(t.name,t.chainId);return(t.ensAddress||t.ensNetwork!=null)&&e.attachPlugin(new Lu(t.ensAddress,t.ensNetwork)),e}D(!1,"invalid network","network",t)}static register(t,e){typeof t=="number"&&(t=BigInt(t));const n=Lh.get(t);n&&D(!1,`conflicting network for ${JSON.stringify(n.name)}`,"nameOrChainId",t),Lh.set(t,e)}};ua=new WeakMap,ha=new WeakMap,Ur=new WeakMap;let Mi=Po;function ng(i,t){const e=String(i);if(!e.match(/^[0-9.]+$/))throw new Error(`invalid gwei value: ${i}`);const n=e.split(".");if(n.length===1&&n.push(""),n.length!==2)throw new Error(`invalid gwei value: ${i}`);for(;n[1].length<t;)n[1]+="0";if(n[1].length>9){let r=BigInt(n[1].substring(0,9));n[1].substring(9).match(/^0+$/)||r++,n[1]=r.toString()}return BigInt(n[0]+n[1])}function ig(i){return new k1(i,async(t,e,n)=>{n.setHeader("User-Agent","ethers");let r;try{const[s,o]=await Promise.all([n.send(),t()]);r=s;const a=r.bodyJson.standard;return{gasPrice:o.gasPrice,maxFeePerGas:ng(a.maxFee,9),maxPriorityFeePerGas:ng(a.maxPriorityFee,9)}}catch(s){nt(!1,`error encountered with polygon gas station (${JSON.stringify(n.url)})`,"SERVER_ERROR",{request:n,response:r,error:s})}})}let rg=!1;function z1(){if(rg)return;rg=!0;function i(t,e,n){const r=function(){const s=new Mi(t,e);return n.ensNetwork!=null&&s.attachPlugin(new Lu(null,n.ensNetwork)),s.attachPlugin(new Iu),(n.plugins||[]).forEach(o=>{s.attachPlugin(o)}),s};Mi.register(t,r),Mi.register(e,r),n.altNames&&n.altNames.forEach(s=>{Mi.register(s,r)})}i("mainnet",1,{ensNetwork:1,altNames:["homestead"]}),i("ropsten",3,{ensNetwork:3}),i("rinkeby",4,{ensNetwork:4}),i("goerli",5,{ensNetwork:5}),i("kovan",42,{ensNetwork:42}),i("sepolia",11155111,{ensNetwork:11155111}),i("holesky",17e3,{ensNetwork:17e3}),i("classic",61,{}),i("classicKotti",6,{}),i("arbitrum",42161,{ensNetwork:1}),i("arbitrum-goerli",421613,{}),i("arbitrum-sepolia",421614,{}),i("base",8453,{ensNetwork:1}),i("base-goerli",84531,{}),i("base-sepolia",84532,{}),i("bnb",56,{ensNetwork:1}),i("bnbt",97,{}),i("filecoin",314,{}),i("filecoin-calibration",314159,{}),i("linea",59144,{ensNetwork:1}),i("linea-goerli",59140,{}),i("linea-sepolia",59141,{}),i("matic",137,{ensNetwork:1,plugins:[ig("https://gasstation.polygon.technology/v2")]}),i("matic-amoy",80002,{}),i("matic-mumbai",80001,{altNames:["maticMumbai","maticmum"],plugins:[ig("https://gasstation-testnet.polygon.technology/v2")]}),i("optimism",10,{ensNetwork:1,plugins:[]}),i("optimism-goerli",420,{}),i("optimism-sepolia",11155420,{}),i("xdai",100,{ensNetwork:1})}function kf(i){return JSON.parse(JSON.stringify(i))}var Ji,Bn,Dr,_i,fa,kl;class G1{constructor(t){Y(this,fa);Y(this,Ji);Y(this,Bn);Y(this,Dr);Y(this,_i);C(this,Ji,t),C(this,Bn,null),C(this,Dr,4e3),C(this,_i,-2)}get pollingInterval(){return v(this,Dr)}set pollingInterval(t){C(this,Dr,t)}start(){v(this,Bn)||(C(this,Bn,v(this,Ji)._setTimeout(dt(this,fa,kl).bind(this),v(this,Dr))),dt(this,fa,kl).call(this))}stop(){v(this,Bn)&&(v(this,Ji)._clearTimeout(v(this,Bn)),C(this,Bn,null))}pause(t){this.stop(),t&&C(this,_i,-2)}resume(){this.start()}}Ji=new WeakMap,Bn=new WeakMap,Dr=new WeakMap,_i=new WeakMap,fa=new WeakSet,kl=async function(){try{const t=await v(this,Ji).getBlockNumber();if(v(this,_i)===-2){C(this,_i,t);return}if(t!==v(this,_i)){for(let e=v(this,_i)+1;e<=t;e++){if(v(this,Bn)==null)return;await v(this,Ji).emit("block",e)}C(this,_i,t)}}catch{}v(this,Bn)!=null&&C(this,Bn,v(this,Ji)._setTimeout(dt(this,fa,kl).bind(this),v(this,Dr)))};var Ds,Os,Or;class Dd{constructor(t){Y(this,Ds);Y(this,Os);Y(this,Or);C(this,Ds,t),C(this,Or,!1),C(this,Os,e=>{this._poll(e,v(this,Ds))})}async _poll(t,e){throw new Error("sub-classes must override this")}start(){v(this,Or)||(C(this,Or,!0),v(this,Os).call(this,-2),v(this,Ds).on("block",v(this,Os)))}stop(){v(this,Or)&&(C(this,Or,!1),v(this,Ds).off("block",v(this,Os)))}pause(t){this.stop()}resume(){this.start()}}Ds=new WeakMap,Os=new WeakMap,Or=new WeakMap;var da,Yi;class H1 extends Dd{constructor(e,n){super(e);Y(this,da);Y(this,Yi);C(this,da,n),C(this,Yi,-2)}pause(e){e&&C(this,Yi,-2),super.pause(e)}async _poll(e,n){const r=await n.getBlock(v(this,da));r!=null&&(v(this,Yi)===-2?C(this,Yi,r.number):r.number>v(this,Yi)&&(n.emit(v(this,da),r.number),C(this,Yi,r.number)))}}da=new WeakMap,Yi=new WeakMap;var mu;class V1 extends Dd{constructor(e,n){super(e);Y(this,mu);C(this,mu,kf(n))}async _poll(e,n){throw new Error("@TODO")}}mu=new WeakMap;var pa;class W1 extends Dd{constructor(e,n){super(e);Y(this,pa);C(this,pa,n)}async _poll(e,n){const r=await n.getTransactionReceipt(v(this,pa));r&&n.emit(v(this,pa),r)}}pa=new WeakMap;var Qi,ma,ga,Br,Fn,gu,Uy;class Od{constructor(t,e){Y(this,gu);Y(this,Qi);Y(this,ma);Y(this,ga);Y(this,Br);Y(this,Fn);C(this,Qi,t),C(this,ma,kf(e)),C(this,ga,dt(this,gu,Uy).bind(this)),C(this,Br,!1),C(this,Fn,-2)}start(){v(this,Br)||(C(this,Br,!0),v(this,Fn)===-2&&v(this,Qi).getBlockNumber().then(t=>{C(this,Fn,t)}),v(this,Qi).on("block",v(this,ga)))}stop(){v(this,Br)&&(C(this,Br,!1),v(this,Qi).off("block",v(this,ga)))}pause(t){this.stop(),t&&C(this,Fn,-2)}resume(){this.start()}}Qi=new WeakMap,ma=new WeakMap,ga=new WeakMap,Br=new WeakMap,Fn=new WeakMap,gu=new WeakSet,Uy=async function(t){if(v(this,Fn)===-2)return;const e=kf(v(this,ma));e.fromBlock=v(this,Fn)+1,e.toBlock=t;const n=await v(this,Qi).getLogs(e);if(n.length===0){v(this,Fn)<t-60&&C(this,Fn,t-60);return}for(const r of n)v(this,Qi).emit(v(this,ma),r),C(this,Fn,r.blockNumber)};const X1=BigInt(2),K1=10;function Sl(i){return i&&typeof i.then=="function"}function zl(i,t){return i+":"+JSON.stringify(t,(e,n)=>{if(n==null)return"null";if(typeof n=="bigint")return`bigint:${n.toString()}`;if(typeof n=="string")return n.toLowerCase();if(typeof n=="object"&&!Array.isArray(n)){const r=Object.keys(n);return r.sort(),r.reduce((s,o)=>(s[o]=n[o],s),{})}return n})}class Dy{constructor(t){H(this,"name");Bt(this,{name:t})}start(){}stop(){}pause(t){}resume(){}}function J1(i){return JSON.parse(JSON.stringify(i))}function zf(i){return i=Array.from(new Set(i).values()),i.sort(),i}async function Nh(i,t){if(i==null)throw new Error("invalid event");if(Array.isArray(i)&&(i={topics:i}),typeof i=="string")switch(i){case"block":case"debug":case"error":case"finalized":case"network":case"pending":case"safe":return{type:i,tag:i}}if(ye(i,32)){const e=i.toLowerCase();return{type:"transaction",tag:zl("tx",{hash:e}),hash:e}}if(i.orphan){const e=i;return{type:"orphan",tag:zl("orphan",e),filter:J1(e)}}if(i.address||i.topics){const e=i,n={topics:(e.topics||[]).map(r=>r==null?null:Array.isArray(r)?zf(r.map(s=>s.toLowerCase())):r.toLowerCase())};if(e.address){const r=[],s=[],o=a=>{ye(a)?r.push(a):s.push((async()=>{r.push(await un(a,t))})())};Array.isArray(e.address)?e.address.forEach(o):o(e.address),s.length&&await Promise.all(s),n.address=zf(r.map(a=>a.toLowerCase()))}return{filter:n,tag:zl("event",n),type:"event"}}D(!1,"unknown ProviderEvent","event",i)}function Uh(){return new Date().getTime()}const Y1={cacheTimeout:250,pollingInterval:4e3};var en,Fr,nn,ya,Pn,Bs,kr,qi,Lc,kn,va,_a,$t,Sn,Gf,Hf,tc,Vf,ec,Gl;class Q1{constructor(t,e){Y(this,$t);Y(this,en);Y(this,Fr);Y(this,nn);Y(this,ya);Y(this,Pn);Y(this,Bs);Y(this,kr);Y(this,qi);Y(this,Lc);Y(this,kn);Y(this,va);Y(this,_a);if(C(this,_a,Object.assign({},Y1,e||{})),t==="any")C(this,Bs,!0),C(this,Pn,null);else if(t){const n=Mi.from(t);C(this,Bs,!1),C(this,Pn,Promise.resolve(n)),setTimeout(()=>{this.emit("network",n,null)},0)}else C(this,Bs,!1),C(this,Pn,null);C(this,qi,-1),C(this,kr,new Map),C(this,en,new Map),C(this,Fr,new Map),C(this,nn,null),C(this,ya,!1),C(this,Lc,1),C(this,kn,new Map),C(this,va,!1)}get pollingInterval(){return v(this,_a).pollingInterval}get provider(){return this}get plugins(){return Array.from(v(this,Fr).values())}attachPlugin(t){if(v(this,Fr).get(t.name))throw new Error(`cannot replace existing plugin: ${t.name} `);return v(this,Fr).set(t.name,t.connect(this)),this}getPlugin(t){return v(this,Fr).get(t)||null}get disableCcipRead(){return v(this,va)}set disableCcipRead(t){C(this,va,!!t)}async ccipReadFetch(t,e,n){if(this.disableCcipRead||n.length===0||t.to==null)return null;const r=t.to.toLowerCase(),s=e.toLowerCase(),o=[];for(let a=0;a<n.length;a++){const c=n[a],l=c.replace("{sender}",r).replace("{data}",s),u=new Yr(l);c.indexOf("{data}")===-1&&(u.body={data:s,sender:r}),this.emit("debug",{action:"sendCcipReadFetchRequest",request:u,index:a,urls:n});let h="unknown error",f;try{f=await u.send()}catch(d){o.push(d.message),this.emit("debug",{action:"receiveCcipReadFetchError",request:u,result:{error:d}});continue}try{const d=f.bodyJson;if(d.data)return this.emit("debug",{action:"receiveCcipReadFetchResult",request:u,result:d}),d.data;d.message&&(h=d.message),this.emit("debug",{action:"receiveCcipReadFetchError",request:u,result:d})}catch{}nt(f.statusCode<400||f.statusCode>=500,`response not found during CCIP fetch: ${h}`,"OFFCHAIN_FAULT",{reason:"404_MISSING_RESOURCE",transaction:t,info:{url:c,errorMessage:h}}),o.push(h)}nt(!1,`error encountered during CCIP fetch: ${o.map(a=>JSON.stringify(a)).join(", ")}`,"OFFCHAIN_FAULT",{reason:"500_SERVER_ERROR",transaction:t,info:{urls:n,errorMessages:o}})}_wrapBlock(t,e){return new p1(N1(t),this)}_wrapLog(t,e){return new Hc(I1(t),this)}_wrapTransactionReceipt(t,e){return new xy(B1(t),this)}_wrapTransactionResponse(t,e){return new xc(Ny(t),this)}_detectNetwork(){nt(!1,"sub-classes must implement this","UNSUPPORTED_OPERATION",{operation:"_detectNetwork"})}async _perform(t){nt(!1,`unsupported method: ${t.method}`,"UNSUPPORTED_OPERATION",{operation:t.method,info:t})}async getBlockNumber(){const t=Zt(await dt(this,$t,Sn).call(this,{method:"getBlockNumber"}),"%response");return v(this,qi)>=0&&C(this,qi,t),t}_getAddress(t){return un(t,this)}_getBlockTag(t){if(t==null)return"latest";switch(t){case"earliest":return"0x0";case"finalized":case"latest":case"pending":case"safe":return t}if(ye(t))return ye(t,32)?t:ei(t);if(typeof t=="bigint"&&(t=Zt(t,"blockTag")),typeof t=="number")return t>=0?ei(t):v(this,qi)>=0?ei(v(this,qi)+t):this.getBlockNumber().then(e=>ei(e+t));D(!1,"invalid blockTag","blockTag",t)}_getFilter(t){const e=(t.topics||[]).map(c=>c==null?null:Array.isArray(c)?zf(c.map(l=>l.toLowerCase())):c.toLowerCase()),n="blockHash"in t?t.blockHash:void 0,r=(c,l,u)=>{let h;switch(c.length){case 0:break;case 1:h=c[0];break;default:c.sort(),h=c}if(n&&(l!=null||u!=null))throw new Error("invalid filter");const f={};return h&&(f.address=h),e.length&&(f.topics=e),l&&(f.fromBlock=l),u&&(f.toBlock=u),n&&(f.blockHash=n),f};let s=[];if(t.address)if(Array.isArray(t.address))for(const c of t.address)s.push(this._getAddress(c));else s.push(this._getAddress(t.address));let o;"fromBlock"in t&&(o=this._getBlockTag(t.fromBlock));let a;return"toBlock"in t&&(a=this._getBlockTag(t.toBlock)),s.filter(c=>typeof c!="string").length||o!=null&&typeof o!="string"||a!=null&&typeof a!="string"?Promise.all([Promise.all(s),o,a]).then(c=>r(c[0],c[1],c[2])):r(s,o,a)}_getTransactionRequest(t){const e=au(t),n=[];if(["to","from"].forEach(r=>{if(e[r]==null)return;const s=un(e[r],this);Sl(s)?n.push(async function(){e[r]=await s}()):e[r]=s}),e.blockTag!=null){const r=this._getBlockTag(e.blockTag);Sl(r)?n.push(async function(){e.blockTag=await r}()):e.blockTag=r}return n.length?async function(){return await Promise.all(n),e}():e}async getNetwork(){if(v(this,Pn)==null){const r=(async()=>{try{const s=await this._detectNetwork();return this.emit("network",s,null),s}catch(s){throw v(this,Pn)===r&&C(this,Pn,null),s}})();return C(this,Pn,r),(await r).clone()}const t=v(this,Pn),[e,n]=await Promise.all([t,this._detectNetwork()]);return e.chainId!==n.chainId&&(v(this,Bs)?(this.emit("network",n,e),v(this,Pn)===t&&C(this,Pn,Promise.resolve(n))):nt(!1,`network changed: ${e.chainId} => ${n.chainId} `,"NETWORK_ERROR",{event:"changed"})),e.clone()}async getFeeData(){const t=await this.getNetwork(),e=async()=>{const{_block:r,gasPrice:s,priorityFee:o}=await an({_block:dt(this,$t,Vf).call(this,"latest",!1),gasPrice:(async()=>{try{const u=await dt(this,$t,Sn).call(this,{method:"getGasPrice"});return Et(u,"%response")}catch{}return null})(),priorityFee:(async()=>{try{const u=await dt(this,$t,Sn).call(this,{method:"getPriorityFee"});return Et(u,"%response")}catch{}return null})()});let a=null,c=null;const l=this._wrapBlock(r,t);return l&&l.baseFeePerGas&&(c=o??BigInt("1000000000"),a=l.baseFeePerGas*X1+c),new Zm(s,a,c)},n=t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");if(n){const r=new Yr(n.url),s=await n.processFunc(e,this,r);return new Zm(s.gasPrice,s.maxFeePerGas,s.maxPriorityFeePerGas)}return await e()}async estimateGas(t){let e=this._getTransactionRequest(t);return Sl(e)&&(e=await e),Et(await dt(this,$t,Sn).call(this,{method:"estimateGas",transaction:e}),"%response")}async call(t){const{tx:e,blockTag:n}=await an({tx:this._getTransactionRequest(t),blockTag:this._getBlockTag(t.blockTag)});return await dt(this,$t,Hf).call(this,dt(this,$t,Gf).call(this,e,n,t.enableCcipRead?0:-1))}async getBalance(t,e){return Et(await dt(this,$t,tc).call(this,{method:"getBalance"},t,e),"%response")}async getTransactionCount(t,e){return Zt(await dt(this,$t,tc).call(this,{method:"getTransactionCount"},t,e),"%response")}async getCode(t,e){return gt(await dt(this,$t,tc).call(this,{method:"getCode"},t,e))}async getStorage(t,e,n){const r=Et(e,"position");return gt(await dt(this,$t,tc).call(this,{method:"getStorage",position:r},t,n))}async broadcastTransaction(t){const{blockNumber:e,hash:n,network:r}=await an({blockNumber:this.getBlockNumber(),hash:this._perform({method:"broadcastTransaction",signedTransaction:t}),network:this.getNetwork()}),s=tu.from(t);if(s.hash!==n)throw new Error("@TODO: the returned hash did not match");return this._wrapTransactionResponse(s,r).replaceableTransaction(e)}async getBlock(t,e){const{network:n,params:r}=await an({network:this.getNetwork(),params:dt(this,$t,Vf).call(this,t,!!e)});return r==null?null:this._wrapBlock(r,n)}async getTransaction(t){const{network:e,params:n}=await an({network:this.getNetwork(),params:dt(this,$t,Sn).call(this,{method:"getTransaction",hash:t})});return n==null?null:this._wrapTransactionResponse(n,e)}async getTransactionReceipt(t){const{network:e,params:n}=await an({network:this.getNetwork(),params:dt(this,$t,Sn).call(this,{method:"getTransactionReceipt",hash:t})});if(n==null)return null;if(n.gasPrice==null&&n.effectiveGasPrice==null){const r=await dt(this,$t,Sn).call(this,{method:"getTransaction",hash:t});if(r==null)throw new Error("report this; could not find tx or effectiveGasPrice");n.effectiveGasPrice=r.gasPrice}return this._wrapTransactionReceipt(n,e)}async getTransactionResult(t){const{result:e}=await an({network:this.getNetwork(),result:dt(this,$t,Sn).call(this,{method:"getTransactionResult",hash:t})});return e==null?null:gt(e)}async getLogs(t){let e=this._getFilter(t);Sl(e)&&(e=await e);const{network:n,params:r}=await an({network:this.getNetwork(),params:dt(this,$t,Sn).call(this,{method:"getLogs",filter:e})});return r.map(s=>this._wrapLog(s,n))}_getProvider(t){nt(!1,"provider cannot connect to target network","UNSUPPORTED_OPERATION",{operation:"_getProvider()"})}async getResolver(t){return await lu.fromName(this,t)}async getAvatar(t){const e=await this.getResolver(t);return e?await e.getAvatar():null}async resolveName(t){const e=await this.getResolver(t);return e?await e.getAddress():null}async lookupAddress(t){t=fe(t);const e=Nf(t.substring(2).toLowerCase()+".addr.reverse");try{const n=await lu.getEnsAddress(this),s=await new oc(n,["function resolver(bytes32) view returns (address)"],this).resolver(e);if(s==null||s===fc)return null;const a=await new oc(s,["function name(bytes32) view returns (string)"],this).name(e);return await this.resolveName(a)!==t?null:a}catch(n){if(Qe(n,"BAD_DATA")&&n.value==="0x"||Qe(n,"CALL_EXCEPTION"))return null;throw n}return null}async waitForTransaction(t,e,n){const r=e??1;return r===0?this.getTransactionReceipt(t):new Promise(async(s,o)=>{let a=null;const c=async l=>{try{const u=await this.getTransactionReceipt(t);if(u!=null&&l-u.blockNumber+1>=r){s(u),a&&(clearTimeout(a),a=null);return}}catch(u){console.log("EEE",u)}this.once("block",c)};n!=null&&(a=setTimeout(()=>{a!=null&&(a=null,this.off("block",c),o(_e("timeout","TIMEOUT",{reason:"timeout"})))},n)),c(await this.getBlockNumber())})}async waitForBlock(t){nt(!1,"not implemented yet","NOT_IMPLEMENTED",{operation:"waitForBlock"})}_clearTimeout(t){const e=v(this,kn).get(t);e&&(e.timer&&clearTimeout(e.timer),v(this,kn).delete(t))}_setTimeout(t,e){e==null&&(e=0);const n=za(this,Lc)._++,r=()=>{v(this,kn).delete(n),t()};if(this.paused)v(this,kn).set(n,{timer:null,func:r,time:e});else{const s=setTimeout(r,e);v(this,kn).set(n,{timer:s,func:r,time:Uh()})}return n}_forEachSubscriber(t){for(const e of v(this,en).values())t(e.subscriber)}_getSubscriber(t){switch(t.type){case"debug":case"error":case"network":return new Dy(t.type);case"block":{const e=new G1(this);return e.pollingInterval=this.pollingInterval,e}case"safe":case"finalized":return new H1(this,t.type);case"event":return new Od(this,t.filter);case"transaction":return new W1(this,t.hash);case"orphan":return new V1(this,t.filter)}throw new Error(`unsupported event: ${t.type}`)}_recoverSubscriber(t,e){for(const n of v(this,en).values())if(n.subscriber===t){n.started&&n.subscriber.stop(),n.subscriber=e,n.started&&e.start(),v(this,nn)!=null&&e.pause(v(this,nn));break}}async on(t,e){const n=await dt(this,$t,Gl).call(this,t);return n.listeners.push({listener:e,once:!1}),n.started||(n.subscriber.start(),n.started=!0,v(this,nn)!=null&&n.subscriber.pause(v(this,nn))),this}async once(t,e){const n=await dt(this,$t,Gl).call(this,t);return n.listeners.push({listener:e,once:!0}),n.started||(n.subscriber.start(),n.started=!0,v(this,nn)!=null&&n.subscriber.pause(v(this,nn))),this}async emit(t,...e){const n=await dt(this,$t,ec).call(this,t,e);if(!n||n.listeners.length===0)return!1;const r=n.listeners.length;return n.listeners=n.listeners.filter(({listener:s,once:o})=>{const a=new Zg(this,o?null:s,t);try{s.call(this,...e,a)}catch{}return!o}),n.listeners.length===0&&(n.started&&n.subscriber.stop(),v(this,en).delete(n.tag)),r>0}async listenerCount(t){if(t){const n=await dt(this,$t,ec).call(this,t);return n?n.listeners.length:0}let e=0;for(const{listeners:n}of v(this,en).values())e+=n.length;return e}async listeners(t){if(t){const n=await dt(this,$t,ec).call(this,t);return n?n.listeners.map(({listener:r})=>r):[]}let e=[];for(const{listeners:n}of v(this,en).values())e=e.concat(n.map(({listener:r})=>r));return e}async off(t,e){const n=await dt(this,$t,ec).call(this,t);if(!n)return this;if(e){const r=n.listeners.map(({listener:s})=>s).indexOf(e);r>=0&&n.listeners.splice(r,1)}return(!e||n.listeners.length===0)&&(n.started&&n.subscriber.stop(),v(this,en).delete(n.tag)),this}async removeAllListeners(t){if(t){const{tag:e,started:n,subscriber:r}=await dt(this,$t,Gl).call(this,t);n&&r.stop(),v(this,en).delete(e)}else for(const[e,{started:n,subscriber:r}]of v(this,en))n&&r.stop(),v(this,en).delete(e);return this}async addListener(t,e){return await this.on(t,e)}async removeListener(t,e){return this.off(t,e)}get destroyed(){return v(this,ya)}destroy(){this.removeAllListeners();for(const t of v(this,kn).keys())this._clearTimeout(t);C(this,ya,!0)}get paused(){return v(this,nn)!=null}set paused(t){!!t!==this.paused&&(this.paused?this.resume():this.pause(!1))}pause(t){if(C(this,qi,-1),v(this,nn)!=null){if(v(this,nn)==!!t)return;nt(!1,"cannot change pause type; resume first","UNSUPPORTED_OPERATION",{operation:"pause"})}this._forEachSubscriber(e=>e.pause(t)),C(this,nn,!!t);for(const e of v(this,kn).values())e.timer&&clearTimeout(e.timer),e.time=Uh()-e.time}resume(){if(v(this,nn)!=null){this._forEachSubscriber(t=>t.resume()),C(this,nn,null);for(const t of v(this,kn).values()){let e=t.time;e<0&&(e=0),t.time=Uh(),setTimeout(t.func,e)}}}}en=new WeakMap,Fr=new WeakMap,nn=new WeakMap,ya=new WeakMap,Pn=new WeakMap,Bs=new WeakMap,kr=new WeakMap,qi=new WeakMap,Lc=new WeakMap,kn=new WeakMap,va=new WeakMap,_a=new WeakMap,$t=new WeakSet,Sn=async function(t){const e=v(this,_a).cacheTimeout;if(e<0)return await this._perform(t);const n=zl(t.method,t);let r=v(this,kr).get(n);return r||(r=this._perform(t),v(this,kr).set(n,r),setTimeout(()=>{v(this,kr).get(n)===r&&v(this,kr).delete(n)},e)),await r},Gf=async function(t,e,n){nt(n<K1,"CCIP read exceeded maximum redirections","OFFCHAIN_FAULT",{reason:"TOO_MANY_REDIRECTS",transaction:Object.assign({},t,{blockTag:e,enableCcipRead:!0})});const r=au(t);try{return gt(await this._perform({method:"call",transaction:r,blockTag:e}))}catch(s){if(!this.disableCcipRead&&yd(s)&&s.data&&n>=0&&e==="latest"&&r.to!=null&&Me(s.data,0,4)==="0x556f1830"){const o=s.data,a=await un(r.to,this);let c;try{c=tC(Me(s.data,4))}catch(h){nt(!1,h.message,"OFFCHAIN_FAULT",{reason:"BAD_DATA",transaction:r,info:{data:o}})}nt(c.sender.toLowerCase()===a.toLowerCase(),"CCIP Read sender mismatch","CALL_EXCEPTION",{action:"call",data:o,reason:"OffchainLookup",transaction:r,invocation:null,revert:{signature:"OffchainLookup(address,string[],bytes,bytes4,bytes)",name:"OffchainLookup",args:c.errorArgs}});const l=await this.ccipReadFetch(r,c.calldata,c.urls);nt(l!=null,"CCIP Read failed to fetch data","OFFCHAIN_FAULT",{reason:"FETCH_FAILED",transaction:r,info:{data:s.data,errorArgs:c.errorArgs}});const u={to:a,data:xe([c.selector,$1([l,c.extraData])])};this.emit("debug",{action:"sendCcipReadCall",transaction:u});try{const h=await dt(this,$t,Gf).call(this,u,e,n+1);return this.emit("debug",{action:"receiveCcipReadCallResult",transaction:Object.assign({},u),result:h}),h}catch(h){throw this.emit("debug",{action:"receiveCcipReadCallError",transaction:Object.assign({},u),error:h}),h}}throw s}},Hf=async function(t){const{value:e}=await an({network:this.getNetwork(),value:t});return e},tc=async function(t,e,n){let r=this._getAddress(e),s=this._getBlockTag(n);return(typeof r!="string"||typeof s!="string")&&([r,s]=await Promise.all([r,s])),await dt(this,$t,Hf).call(this,dt(this,$t,Sn).call(this,Object.assign(t,{address:r,blockTag:s})))},Vf=async function(t,e){if(ye(t,32))return await dt(this,$t,Sn).call(this,{method:"getBlock",blockHash:t,includeTransactions:e});let n=this._getBlockTag(t);return typeof n!="string"&&(n=await n),await dt(this,$t,Sn).call(this,{method:"getBlock",blockTag:n,includeTransactions:e})},ec=async function(t,e){let n=await Nh(t,this);return n.type==="event"&&e&&e.length>0&&e[0].removed===!0&&(n=await Nh({orphan:"drop-log",log:e[0]},this)),v(this,en).get(n.tag)||null},Gl=async function(t){const e=await Nh(t,this),n=e.tag;let r=v(this,en).get(n);return r||(r={subscriber:this._getSubscriber(e),tag:n,addressableMap:new WeakMap,nameMap:new Map,started:!1,listeners:[]},v(this,en).set(n,r)),r};function q1(i,t){try{const e=Wf(i,t);if(e)return jl(e)}catch{}return null}function Wf(i,t){if(i==="0x")return null;try{const e=Zt(Me(i,t,t+32)),n=Zt(Me(i,e,e+32));return Me(i,e+32,e+32+n)}catch{}return null}function sg(i){const t=Oe(i);if(t.length>32)throw new Error("internal; should not happen");const e=new Uint8Array(32);return e.set(t,32-t.length),e}function Z1(i){if(i.length%32===0)return i;const t=new Uint8Array(Math.ceil(i.length/32)*32);return t.set(i),t}const j1=new Uint8Array([]);function $1(i){const t=[];let e=0;for(let n=0;n<i.length;n++)t.push(j1),e+=32;for(let n=0;n<i.length;n++){const r=qt(i[n]);t[n]=sg(e),t.push(sg(r.length)),t.push(Z1(r)),e+=32+Math.ceil(r.length/32)*32}return xe(t)}const og="0x0000000000000000000000000000000000000000000000000000000000000000";function tC(i){const t={sender:"",urls:[],calldata:"",selector:"",extraData:"",errorArgs:[]};nt(Uo(i)>=5*32,"insufficient OffchainLookup data","OFFCHAIN_FAULT",{reason:"insufficient OffchainLookup data"});const e=Me(i,0,32);nt(Me(e,0,12)===Me(og,0,12),"corrupt OffchainLookup sender","OFFCHAIN_FAULT",{reason:"corrupt OffchainLookup sender"}),t.sender=Me(e,12);try{const n=[],r=Zt(Me(i,32,64)),s=Zt(Me(i,r,r+32)),o=Me(i,r+32);for(let a=0;a<s;a++){const c=q1(o,a*32);if(c==null)throw new Error("abort");n.push(c)}t.urls=n}catch{nt(!1,"corrupt OffchainLookup urls","OFFCHAIN_FAULT",{reason:"corrupt OffchainLookup urls"})}try{const n=Wf(i,64);if(n==null)throw new Error("abort");t.calldata=n}catch{nt(!1,"corrupt OffchainLookup calldata","OFFCHAIN_FAULT",{reason:"corrupt OffchainLookup calldata"})}nt(Me(i,100,128)===Me(og,0,28),"corrupt OffchainLookup callbaackSelector","OFFCHAIN_FAULT",{reason:"corrupt OffchainLookup callbaackSelector"}),t.selector=Me(i,96,100);try{const n=Wf(i,128);if(n==null)throw new Error("abort");t.extraData=n}catch{nt(!1,"corrupt OffchainLookup extraData","OFFCHAIN_FAULT",{reason:"corrupt OffchainLookup extraData"})}return t.errorArgs="sender,urls,calldata,selector,extraData".split(/,/).map(n=>t[n]),t}function os(i,t){if(i.provider)return i.provider;nt(!1,"missing provider","UNSUPPORTED_OPERATION",{operation:t})}async function ag(i,t){let e=au(t);if(e.to!=null&&(e.to=un(e.to,i)),e.from!=null){const n=e.from;e.from=Promise.all([i.getAddress(),un(n,i)]).then(([r,s])=>(D(r.toLowerCase()===s.toLowerCase(),"transaction from mismatch","tx.from",s),r))}else e.from=i.getAddress();return await an(e)}class eC{constructor(t){H(this,"provider");Bt(this,{provider:t||null})}async getNonce(t){return os(this,"getTransactionCount").getTransactionCount(await this.getAddress(),t)}async populateCall(t){return await ag(this,t)}async populateTransaction(t){const e=os(this,"populateTransaction"),n=await ag(this,t);n.nonce==null&&(n.nonce=await this.getNonce("pending")),n.gasLimit==null&&(n.gasLimit=await this.estimateGas(n));const r=await this.provider.getNetwork();if(n.chainId!=null){const o=Et(n.chainId);D(o===r.chainId,"transaction chainId mismatch","tx.chainId",t.chainId)}else n.chainId=r.chainId;const s=n.maxFeePerGas!=null||n.maxPriorityFeePerGas!=null;if(n.gasPrice!=null&&(n.type===2||s)?D(!1,"eip-1559 transaction do not support gasPrice","tx",t):(n.type===0||n.type===1)&&s&&D(!1,"pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas","tx",t),(n.type===2||n.type==null)&&n.maxFeePerGas!=null&&n.maxPriorityFeePerGas!=null)n.type=2;else if(n.type===0||n.type===1){const o=await e.getFeeData();nt(o.gasPrice!=null,"network does not support gasPrice","UNSUPPORTED_OPERATION",{operation:"getGasPrice"}),n.gasPrice==null&&(n.gasPrice=o.gasPrice)}else{const o=await e.getFeeData();if(n.type==null)if(o.maxFeePerGas!=null&&o.maxPriorityFeePerGas!=null)if(n.authorizationList&&n.authorizationList.length?n.type=4:n.type=2,n.gasPrice!=null){const a=n.gasPrice;delete n.gasPrice,n.maxFeePerGas=a,n.maxPriorityFeePerGas=a}else n.maxFeePerGas==null&&(n.maxFeePerGas=o.maxFeePerGas),n.maxPriorityFeePerGas==null&&(n.maxPriorityFeePerGas=o.maxPriorityFeePerGas);else o.gasPrice!=null?(nt(!s,"network does not support EIP-1559","UNSUPPORTED_OPERATION",{operation:"populateTransaction"}),n.gasPrice==null&&(n.gasPrice=o.gasPrice),n.type=0):nt(!1,"failed to get consistent fee data","UNSUPPORTED_OPERATION",{operation:"signer.getFeeData"});else(n.type===2||n.type===3||n.type===4)&&(n.maxFeePerGas==null&&(n.maxFeePerGas=o.maxFeePerGas),n.maxPriorityFeePerGas==null&&(n.maxPriorityFeePerGas=o.maxPriorityFeePerGas))}return await an(n)}async populateAuthorization(t){const e=Object.assign({},t);return e.chainId==null&&(e.chainId=(await os(this,"getNetwork").getNetwork()).chainId),e.nonce==null&&(e.nonce=await this.getNonce()),e}async estimateGas(t){return os(this,"estimateGas").estimateGas(await this.populateCall(t))}async call(t){return os(this,"call").call(await this.populateCall(t))}async resolveName(t){return await os(this,"resolveName").resolveName(t)}async sendTransaction(t){const e=os(this,"sendTransaction"),n=await this.populateTransaction(t);delete n.from;const r=tu.from(n);return await e.broadcastTransaction(await this.signTransaction(r))}authorize(t){nt(!1,"authorization not implemented for this signer","UNSUPPORTED_OPERATION",{operation:"authorize"})}}function nC(i){return JSON.parse(JSON.stringify(i))}var on,xi,Fs,zr,ks,xa,Qr,Xf,Kf;class Oy{constructor(t){Y(this,Qr);Y(this,on);Y(this,xi);Y(this,Fs);Y(this,zr);Y(this,ks);Y(this,xa);C(this,on,t),C(this,xi,null),C(this,Fs,dt(this,Qr,Xf).bind(this)),C(this,zr,!1),C(this,ks,null),C(this,xa,!1)}_subscribe(t){throw new Error("subclasses must override this")}_emitResults(t,e){throw new Error("subclasses must override this")}_recover(t){throw new Error("subclasses must override this")}start(){v(this,zr)||(C(this,zr,!0),dt(this,Qr,Xf).call(this,-2))}stop(){v(this,zr)&&(C(this,zr,!1),C(this,xa,!0),dt(this,Qr,Kf).call(this),v(this,on).off("block",v(this,Fs)))}pause(t){t&&dt(this,Qr,Kf).call(this),v(this,on).off("block",v(this,Fs))}resume(){this.start()}}on=new WeakMap,xi=new WeakMap,Fs=new WeakMap,zr=new WeakMap,ks=new WeakMap,xa=new WeakMap,Qr=new WeakSet,Xf=async function(t){try{v(this,xi)==null&&C(this,xi,this._subscribe(v(this,on)));let e=null;try{e=await v(this,xi)}catch(s){if(!Qe(s,"UNSUPPORTED_OPERATION")||s.operation!=="eth_newFilter")throw s}if(e==null){C(this,xi,null),v(this,on)._recoverSubscriber(this,this._recover(v(this,on)));return}const n=await v(this,on).getNetwork();if(v(this,ks)||C(this,ks,n),v(this,ks).chainId!==n.chainId)throw new Error("chaid changed");if(v(this,xa))return;const r=await v(this,on).send("eth_getFilterChanges",[e]);await this._emitResults(v(this,on),r)}catch(e){console.log("@TODO",e)}v(this,on).once("block",v(this,Fs))},Kf=function(){const t=v(this,xi);t&&(C(this,xi,null),t.then(e=>{v(this,on).destroyed||v(this,on).send("eth_uninstallFilter",[e])}))};var zs;class iC extends Oy{constructor(e,n){super(e);Y(this,zs);C(this,zs,nC(n))}_recover(e){return new Od(e,v(this,zs))}async _subscribe(e){return await e.send("eth_newFilter",[v(this,zs)])}async _emitResults(e,n){for(const r of n)e.emit(v(this,zs),e._wrapLog(r,e._network))}}zs=new WeakMap;class rC extends Oy{async _subscribe(t){return await t.send("eth_newPendingTransactionFilter",[])}async _emitResults(t,e){for(const n of e)t.emit("pending",n)}}const sC="bigint,boolean,function,number,string,symbol".split(/,/g);function Hl(i){if(i==null||sC.indexOf(typeof i)>=0||typeof i.getAddress=="function")return i;if(Array.isArray(i))return i.map(Hl);if(typeof i=="object")return Object.keys(i).reduce((t,e)=>(t[e]=i[e],t),{});throw new Error(`should not happen: ${i} (${typeof i})`)}function oC(i){return new Promise(t=>{setTimeout(t,i)})}function Ao(i){return i&&i.toLowerCase()}function cg(i){return i&&typeof i.pollingInterval=="number"}const By={polling:!1,staticNetwork:null,batchStallTime:10,batchMaxSize:1<<20,batchMaxCount:100,cacheTimeout:250,pollingInterval:4e3};class Dh extends eC{constructor(e,n){super(e);H(this,"address");n=fe(n),Bt(this,{address:n})}connect(e){nt(!1,"cannot reconnect JsonRpcSigner","UNSUPPORTED_OPERATION",{operation:"signer.connect"})}async getAddress(){return this.address}async populateTransaction(e){return await this.populateCall(e)}async sendUncheckedTransaction(e){const n=Hl(e),r=[];if(n.from){const o=n.from;r.push((async()=>{const a=await un(o,this.provider);D(a!=null&&a.toLowerCase()===this.address.toLowerCase(),"from address mismatch","transaction",e),n.from=a})())}else n.from=this.address;if(n.gasLimit==null&&r.push((async()=>{n.gasLimit=await this.provider.estimateGas({...n,from:this.address})})()),n.to!=null){const o=n.to;r.push((async()=>{n.to=await un(o,this.provider)})())}r.length&&await Promise.all(r);const s=this.provider.getRpcTransaction(n);return this.provider.send("eth_sendTransaction",[s])}async sendTransaction(e){const n=await this.provider.getBlockNumber(),r=await this.sendUncheckedTransaction(e);return await new Promise((s,o)=>{const a=[1e3,100];let c=0;const l=async()=>{try{const u=await this.provider.getTransaction(r);if(u!=null){s(u.replaceableTransaction(n));return}}catch(u){if(Qe(u,"CANCELLED")||Qe(u,"BAD_DATA")||Qe(u,"NETWORK_ERROR")||Qe(u,"UNSUPPORTED_OPERATION")){u.info==null&&(u.info={}),u.info.sendTransactionHash=r,o(u);return}if(Qe(u,"INVALID_ARGUMENT")&&(c++,u.info==null&&(u.info={}),u.info.sendTransactionHash=r,c>10)){o(u);return}this.provider.emit("error",_e("failed to fetch transation after sending (will try again)","UNKNOWN_ERROR",{error:u}))}this.provider._setTimeout(()=>{l()},a.pop()||4e3)};l()})}async signTransaction(e){const n=Hl(e);if(n.from){const s=await un(n.from,this.provider);D(s!=null&&s.toLowerCase()===this.address.toLowerCase(),"from address mismatch","transaction",e),n.from=s}else n.from=this.address;const r=this.provider.getRpcTransaction(n);return await this.provider.send("eth_signTransaction",[r])}async signMessage(e){const n=typeof e=="string"?ir(e):e;return await this.provider.send("personal_sign",[gt(n),this.address.toLowerCase()])}async signTypedData(e,n,r){const s=Hl(r),o=await ou.resolveNames(e,n,s,async a=>{const c=await un(a);return D(c!=null,"TypedData does not support null address","value",a),c});return await this.provider.send("eth_signTypedData_v4",[this.address.toLowerCase(),JSON.stringify(ou.getPayload(o.domain,n,o.value))])}async unlock(e){return this.provider.send("personal_unlockAccount",[this.address.toLowerCase(),e,null])}async _legacySignMessage(e){const n=typeof e=="string"?ir(e):e;return await this.provider.send("eth_sign",[this.address.toLowerCase(),gt(n)])}}var Gs,Aa,Zi,Ai,ti,zn,gn,Nc,Jf;class aC extends Q1{constructor(e,n){super(e,n);Y(this,Nc);Y(this,Gs);Y(this,Aa);Y(this,Zi);Y(this,Ai);Y(this,ti);Y(this,zn);Y(this,gn);C(this,Aa,1),C(this,Gs,Object.assign({},By,n||{})),C(this,Zi,[]),C(this,Ai,null),C(this,zn,null),C(this,gn,null);{let s=null;const o=new Promise(a=>{s=a});C(this,ti,{promise:o,resolve:s})}const r=this._getOption("staticNetwork");typeof r=="boolean"?(D(!r||e!=="any","staticNetwork cannot be used on special network 'any'","options",n),r&&e!=null&&C(this,zn,Mi.from(e))):r&&(D(e==null||r.matches(e),"staticNetwork MUST match network object","options",n),C(this,zn,r))}_getOption(e){return v(this,Gs)[e]}get _network(){return nt(v(this,zn),"network is not available yet","NETWORK_ERROR"),v(this,zn)}async _perform(e){if(e.method==="call"||e.method==="estimateGas"){let r=e.transaction;if(r&&r.type!=null&&Et(r.type)&&r.maxFeePerGas==null&&r.maxPriorityFeePerGas==null){const s=await this.getFeeData();s.maxFeePerGas==null&&s.maxPriorityFeePerGas==null&&(e=Object.assign({},e,{transaction:Object.assign({},r,{type:void 0})}))}}const n=this.getRpcRequest(e);return n!=null?await this.send(n.method,n.args):super._perform(e)}async _detectNetwork(){const e=this._getOption("staticNetwork");if(e)if(e===!0){if(v(this,zn))return v(this,zn)}else return e;return v(this,gn)?await v(this,gn):this.ready?(C(this,gn,(async()=>{try{const n=Mi.from(Et(await this.send("eth_chainId",[])));return C(this,gn,null),n}catch(n){throw C(this,gn,null),n}})()),await v(this,gn)):(C(this,gn,(async()=>{const n={id:za(this,Aa)._++,method:"eth_chainId",params:[],jsonrpc:"2.0"};this.emit("debug",{action:"sendRpcPayload",payload:n});let r;try{r=(await this._send(n))[0],C(this,gn,null)}catch(s){throw C(this,gn,null),this.emit("debug",{action:"receiveRpcError",error:s}),s}if(this.emit("debug",{action:"receiveRpcResult",result:r}),"result"in r)return Mi.from(Et(r.result));throw this.getRpcError(n,r)})()),await v(this,gn))}_start(){v(this,ti)==null||v(this,ti).resolve==null||(v(this,ti).resolve(),C(this,ti,null),(async()=>{for(;v(this,zn)==null&&!this.destroyed;)try{C(this,zn,await this._detectNetwork())}catch(e){if(this.destroyed)break;console.log("JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"),this.emit("error",_e("failed to bootstrap network detection","NETWORK_ERROR",{event:"initial-network-discovery",info:{error:e}})),await oC(1e3)}dt(this,Nc,Jf).call(this)})())}async _waitUntilReady(){if(v(this,ti)!=null)return await v(this,ti).promise}_getSubscriber(e){return e.type==="pending"?new rC(this):e.type==="event"?this._getOption("polling")?new Od(this,e.filter):new iC(this,e.filter):e.type==="orphan"&&e.filter.orphan==="drop-log"?new Dy("orphan"):super._getSubscriber(e)}get ready(){return v(this,ti)==null}getRpcTransaction(e){const n={};return["chainId","gasLimit","gasPrice","type","maxFeePerGas","maxPriorityFeePerGas","nonce","value"].forEach(r=>{if(e[r]==null)return;let s=r;r==="gasLimit"&&(s="gas"),n[s]=ei(Et(e[r],`tx.${r}`))}),["from","to","data"].forEach(r=>{e[r]!=null&&(n[r]=gt(e[r]))}),e.accessList&&(n.accessList=js(e.accessList)),e.blobVersionedHashes&&(n.blobVersionedHashes=e.blobVersionedHashes.map(r=>r.toLowerCase())),e.authorizationList&&(n.authorizationList=e.authorizationList.map(r=>{const s=k0(r);return{address:s.address,nonce:ei(s.nonce),chainId:ei(s.chainId),yParity:ei(s.signature.yParity),r:ei(s.signature.r),s:ei(s.signature.s)}})),n}getRpcRequest(e){switch(e.method){case"chainId":return{method:"eth_chainId",args:[]};case"getBlockNumber":return{method:"eth_blockNumber",args:[]};case"getGasPrice":return{method:"eth_gasPrice",args:[]};case"getPriorityFee":return{method:"eth_maxPriorityFeePerGas",args:[]};case"getBalance":return{method:"eth_getBalance",args:[Ao(e.address),e.blockTag]};case"getTransactionCount":return{method:"eth_getTransactionCount",args:[Ao(e.address),e.blockTag]};case"getCode":return{method:"eth_getCode",args:[Ao(e.address),e.blockTag]};case"getStorage":return{method:"eth_getStorageAt",args:[Ao(e.address),"0x"+e.position.toString(16),e.blockTag]};case"broadcastTransaction":return{method:"eth_sendRawTransaction",args:[e.signedTransaction]};case"getBlock":if("blockTag"in e)return{method:"eth_getBlockByNumber",args:[e.blockTag,!!e.includeTransactions]};if("blockHash"in e)return{method:"eth_getBlockByHash",args:[e.blockHash,!!e.includeTransactions]};break;case"getTransaction":return{method:"eth_getTransactionByHash",args:[e.hash]};case"getTransactionReceipt":return{method:"eth_getTransactionReceipt",args:[e.hash]};case"call":return{method:"eth_call",args:[this.getRpcTransaction(e.transaction),e.blockTag]};case"estimateGas":return{method:"eth_estimateGas",args:[this.getRpcTransaction(e.transaction)]};case"getLogs":return e.filter&&e.filter.address!=null&&(Array.isArray(e.filter.address)?e.filter.address=e.filter.address.map(Ao):e.filter.address=Ao(e.filter.address)),{method:"eth_getLogs",args:[e.filter]}}return null}getRpcError(e,n){const{method:r}=e,{error:s}=n;if(r==="eth_estimateGas"&&s.message){const c=s.message;if(!c.match(/revert/i)&&c.match(/insufficient funds/i))return _e("insufficient funds","INSUFFICIENT_FUNDS",{transaction:e.params[0],info:{payload:e,error:s}});if(c.match(/nonce/i)&&c.match(/too low/i))return _e("nonce has already been used","NONCE_EXPIRED",{transaction:e.params[0],info:{payload:e,error:s}})}if(r==="eth_call"||r==="eth_estimateGas"){const c=Yf(s),l=_c.getBuiltinCallException(r==="eth_call"?"call":"estimateGas",e.params[0],c?c.data:null);return l.info={error:s,payload:e},l}const o=JSON.stringify(lC(s));if(typeof s.message=="string"&&s.message.match(/user denied|ethers-user-denied/i))return _e("user rejected action","ACTION_REJECTED",{action:{eth_sign:"signMessage",personal_sign:"signMessage",eth_signTypedData_v4:"signTypedData",eth_signTransaction:"signTransaction",eth_sendTransaction:"sendTransaction",eth_requestAccounts:"requestAccess",wallet_requestAccounts:"requestAccess"}[r]||"unknown",reason:"rejected",info:{payload:e,error:s}});if(r==="eth_sendRawTransaction"||r==="eth_sendTransaction"){const c=e.params[0];if(o.match(/insufficient funds|base fee exceeds gas limit/i))return _e("insufficient funds for intrinsic transaction cost","INSUFFICIENT_FUNDS",{transaction:c,info:{error:s}});if(o.match(/nonce/i)&&o.match(/too low/i))return _e("nonce has already been used","NONCE_EXPIRED",{transaction:c,info:{error:s}});if(o.match(/replacement transaction/i)&&o.match(/underpriced/i))return _e("replacement fee too low","REPLACEMENT_UNDERPRICED",{transaction:c,info:{error:s}});if(o.match(/only replay-protected/i))return _e("legacy pre-eip-155 transactions not supported","UNSUPPORTED_OPERATION",{operation:r,info:{transaction:c,info:{error:s}}})}let a=!!o.match(/the method .* does not exist/i);return a||s&&s.details&&s.details.startsWith("Unauthorized method:")&&(a=!0),a?_e("unsupported operation","UNSUPPORTED_OPERATION",{operation:e.method,info:{error:s,payload:e}}):_e("could not coalesce error","UNKNOWN_ERROR",{error:s,payload:e})}send(e,n){if(this.destroyed)return Promise.reject(_e("provider destroyed; cancelled request","UNSUPPORTED_OPERATION",{operation:e}));const r=za(this,Aa)._++,s=new Promise((o,a)=>{v(this,Zi).push({resolve:o,reject:a,payload:{method:e,params:n,id:r,jsonrpc:"2.0"}})});return dt(this,Nc,Jf).call(this),s}async getSigner(e){e==null&&(e=0);const n=this.send("eth_accounts",[]);if(typeof e=="number"){const s=await n;if(e>=s.length)throw new Error("no such account");return new Dh(this,s[e])}const{accounts:r}=await an({network:this.getNetwork(),accounts:n});e=fe(e);for(const s of r)if(fe(s)===e)return new Dh(this,e);throw new Error("invalid account")}async listAccounts(){return(await this.send("eth_accounts",[])).map(n=>new Dh(this,n))}destroy(){v(this,Ai)&&(clearTimeout(v(this,Ai)),C(this,Ai,null));for(const{payload:e,reject:n}of v(this,Zi))n(_e("provider destroyed; cancelled request","UNSUPPORTED_OPERATION",{operation:e.method}));C(this,Zi,[]),super.destroy()}}Gs=new WeakMap,Aa=new WeakMap,Zi=new WeakMap,Ai=new WeakMap,ti=new WeakMap,zn=new WeakMap,gn=new WeakMap,Nc=new WeakSet,Jf=function(){if(v(this,Ai))return;const e=this._getOption("batchMaxCount")===1?0:this._getOption("batchStallTime");C(this,Ai,setTimeout(()=>{C(this,Ai,null);const n=v(this,Zi);for(C(this,Zi,[]);n.length;){const r=[n.shift()];for(;n.length&&r.length!==v(this,Gs).batchMaxCount;)if(r.push(n.shift()),JSON.stringify(r.map(o=>o.payload)).length>v(this,Gs).batchMaxSize){n.unshift(r.pop());break}(async()=>{const s=r.length===1?r[0].payload:r.map(o=>o.payload);this.emit("debug",{action:"sendRpcPayload",payload:s});try{const o=await this._send(s);this.emit("debug",{action:"receiveRpcResult",result:o});for(const{resolve:a,reject:c,payload:l}of r){if(this.destroyed){c(_e("provider destroyed; cancelled request","UNSUPPORTED_OPERATION",{operation:l.method}));continue}const u=o.filter(h=>h.id===l.id)[0];if(u==null){const h=_e("missing response for request","BAD_DATA",{value:o,info:{payload:l}});this.emit("error",h),c(h);continue}if("error"in u){c(this.getRpcError(l,u));continue}a(u.result)}}catch(o){this.emit("debug",{action:"receiveRpcError",error:o});for(const{reject:a}of r)a(o)}})()}},e))};var Gr;class cC extends aC{constructor(e,n){super(e,n);Y(this,Gr);let r=this._getOption("pollingInterval");r==null&&(r=By.pollingInterval),C(this,Gr,r)}_getSubscriber(e){const n=super._getSubscriber(e);return cg(n)&&(n.pollingInterval=v(this,Gr)),n}get pollingInterval(){return v(this,Gr)}set pollingInterval(e){if(!Number.isInteger(e)||e<0)throw new Error("invalid interval");C(this,Gr,e),this._forEachSubscriber(n=>{cg(n)&&(n.pollingInterval=v(this,Gr))})}}Gr=new WeakMap;function Yf(i){if(i==null)return null;if(typeof i.message=="string"&&i.message.match(/revert/i)&&ye(i.data))return{message:i.message,data:i.data};if(typeof i=="object"){for(const t in i){const e=Yf(i[t]);if(e)return e}return null}if(typeof i=="string")try{return Yf(JSON.parse(i))}catch{}return null}function Qf(i,t){if(i!=null){if(typeof i.message=="string"&&t.push(i.message),typeof i=="object")for(const e in i)Qf(i[e],t);if(typeof i=="string")try{return Qf(JSON.parse(i),t)}catch{}}}function lC(i){const t=[];return Qf(i,t),t}var wa,Ea;const gs=class gs extends cC{constructor(e,n,r){const s=Object.assign({},r??{},{batchMaxCount:1});D(e&&e.request,"invalid EIP-1193 provider","ethereum",e);super(n,s);Y(this,wa);Y(this,Ea);C(this,Ea,null),r&&r.providerInfo&&C(this,Ea,r.providerInfo),C(this,wa,async(o,a)=>{const c={method:o,params:a};this.emit("debug",{action:"sendEip1193Request",payload:c});try{const l=await e.request(c);return this.emit("debug",{action:"receiveEip1193Result",result:l}),l}catch(l){const u=new Error(l.message);throw u.code=l.code,u.data=l.data,u.payload=c,this.emit("debug",{action:"receiveEip1193Error",error:u}),u}})}get providerInfo(){return v(this,Ea)}async send(e,n){return await this._start(),await super.send(e,n)}async _send(e){D(!Array.isArray(e),"EIP-1193 does not support batch request","payload",e);try{const n=await v(this,wa).call(this,e.method,e.params||[]);return[{id:e.id,result:n}]}catch(n){return[{id:e.id,error:{code:n.code,data:n.data,message:n.message}}]}}getRpcError(e,n){switch(n=JSON.parse(JSON.stringify(n)),n.error.code||-1){case 4001:n.error.message=`ethers-user-denied: ${n.error.message}`;break;case 4200:n.error.message=`ethers-unsupported: ${n.error.message}`;break}return super.getRpcError(e,n)}async hasSigner(e){e==null&&(e=0);const n=await this.send("eth_accounts",[]);return typeof e=="number"?n.length>e:(e=e.toLowerCase(),n.filter(r=>r.toLowerCase()===e).length!==0)}async getSigner(e){if(e==null&&(e=0),!await this.hasSigner(e))try{await v(this,wa).call(this,"eth_requestAccounts",[])}catch(n){const r=n.payload;throw this.getRpcError(r,{id:r.id,error:n})}return await super.getSigner(e)}static async discover(e){if(e==null&&(e={}),e.provider)return new gs(e.provider);const n=e.window?e.window:typeof window<"u"?window:null;if(n==null)return null;const r=e.anyProvider;if(r&&n.ethereum)return new gs(n.ethereum);if(!("addEventListener"in n&&"dispatchEvent"in n&&"removeEventListener"in n))return null;const s=e.timeout?e.timeout:300;return s===0?null:await new Promise((o,a)=>{let c=[];const l=f=>{c.push(f.detail),r&&u()},u=()=>{if(clearTimeout(h),c.length)if(e&&e.filter){const f=e.filter(c.map(d=>Object.assign({},d.info)));if(f==null)o(null);else if(f instanceof gs)o(f);else{let d=null;if(f.uuid&&(d=c.filter(y=>f.uuid===y.info.uuid)[0]),d){const{provider:g,info:y}=d;o(new gs(g,void 0,{providerInfo:y}))}else a(_e("filter returned unknown info","UNSUPPORTED_OPERATION",{value:f}))}}else{const{provider:f,info:d}=c[0];o(new gs(f,void 0,{providerInfo:d}))}else o(null);n.removeEventListener("eip6963:announceProvider",l)},h=setTimeout(()=>{u()},s);n.addEventListener("eip6963:announceProvider",l),n.dispatchEvent(new Event("eip6963:requestProvider"))})}};wa=new WeakMap,Ea=new WeakMap;let qf=gs;const Nu=window.__API_BASE__||"/agentverse-api";async function uC(i,t){const e=`${Nu}/wallet/siwe/nonce`,n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:i,chainId:t})});if(!n.ok){const r=new Error("Failed to request nonce");throw r.endpoint=e,r.status=n.status,r}return n.json()}async function hC(i,t){const e=await fetch(`${Nu}/wallet/siwe/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:i,signature:t})});if(!e.ok)throw new Error("Failed to verify SIWE");return e.json()}function Fy(i){return{"Content-Type":"application/json",Authorization:`Bearer ${i}`}}async function fC(i,t){const e=await fetch(`${Nu}/tasks/create`,{method:"POST",headers:Fy(i),body:JSON.stringify(t)});if(!e.ok)throw new Error("Task creation failed");return e.json()}async function dC(i,t){const e=await fetch(`${Nu}/memories/${t}`,{method:"GET",headers:Fy(i)});if(!e.ok)throw new Error("Failed to load memories");return e.json()}function pC(i){return`${i.domain} wants you to sign in with your Ethereum account:
${i.address}

${i.statement}

URI: ${i.uri}
Version: ${i.version}
Chain ID: ${i.chainId}
Nonce: ${i.nonce}
Issued At: ${i.issuedAt}`}async function mC(i,t){if(!window.ethereum)throw new Error("No wallet provider found");const n=await new qf(window.ethereum).getSigner(),r=await n.getAddress(),s=await uC(r,i),o=pC({domain:t,address:r,statement:"Sign in to AGENTVERSE.",uri:s.uri,version:"1",chainId:i,nonce:s.nonce,issuedAt:new Date().toISOString()}),a=await n.signMessage(o);return hC(o,a)}function gC(i,t,e,n,r){let s=null,o=0,a=!1,c="",l=0,u="";const h=[],f=i.startsWith("ws")?i:`${location.protocol==="https:"?"wss":"ws"}://${location.host}${i}`,d=()=>{if(!(!s||s.readyState!==WebSocket.OPEN||h.length===0))for(;h.length>0;)s.send(JSON.stringify(h.shift()))},g=()=>{console.log("[AgentVerse WS] Connecting",f),n==null||n("Connecting realtime"),r==null||r("CONNECTING",{url:f,closeCode:l,closeReason:u,error:c});const m=t?`?token=${encodeURIComponent(t)}`:"";s=new WebSocket(`${f}${m}`),s.onopen=()=>{o=0,c="",console.log("[AgentVerse WS] Connected"),n==null||n("Realtime connected"),r==null||r("CONNECTED",{url:f}),s==null||s.send(JSON.stringify({type:"hello",wsToken:t||"guest"})),d()},s.onmessage=p=>{const A=JSON.parse(p.data);if(A.type==="world_update"&&Array.isArray(A.agents)){for(const _ of A.agents)e({type:"agent_state_update",..._});return}e(A)},s.onerror=()=>{c="Socket error",console.error("[AgentVerse WS] Error")},s.onclose=p=>{if(l=p.code,u=p.reason,r==null||r("DISCONNECTED",{url:f,closeCode:p.code,closeReason:p.reason,error:c}),a)return;const A=Math.min(3e4,1e3*Math.pow(2,o)),_=Math.floor(A*(Math.random()*.3)),S=A+_;o+=1,n==null||n(`Realtime disconnected, retry in ${Math.round(S/1e3)}s`),r==null||r("RETRYING",{url:f,closeCode:p.code,closeReason:p.reason,error:c}),setTimeout(g,S)}};g();const y=setInterval(()=>{s&&s.readyState===WebSocket.OPEN&&s.send(JSON.stringify({type:"heartbeat",ts:Date.now()}))},1e4);return{send:m=>{s&&s.readyState===WebSocket.OPEN?s.send(JSON.stringify(m)):h.push(m)},reconnect:()=>{o=0,s&&s.readyState===WebSocket.OPEN&&s.close(),g()},setToken:m=>{t=m},close:()=>{a=!0,clearInterval(y),s==null||s.close()}}}function yC(i,t){return t&&!i}const ky=document.getElementById("app")||(()=>{const i=document.createElement("div");return i.id="app",document.body.appendChild(i),i})(),ge=Lb(ky);ge.setLoadProgress(10);let Uu=!0;const zy=document.createElement("div");ky.appendChild(zy);const Ci=Pb(zy,{pointerLockEnabled:()=>Uu});ge.setLoadProgress(75);const vC=8453,_C="lilagent.xyz",xC=`${location.protocol==="https:"?"wss":"ws"}://${location.host}/agentverse-ws`,AC=window.__API_BASE__||"/agentverse-api";let Vl="",ws="",Ue=null;async function wC(){if(ws)return ws;const i=await fetch(`${AC}/realtime/guest-token`);if(!i.ok)throw new Error(`Guest token failed (${i.status})`);return ws=(await i.json()).wsToken,ws}async function Gy(){Ue||(await wC(),Ue=gC(xC,ws,i=>{if(i.type==="agent_state_update"&&i.id){const t=new Date().toLocaleTimeString();ge.upsertAgent({id:i.id,name:i.displayName,state:i.state,taskId:i.taskId,statusText:i.statusText,lastSeen:t}),Ci.upsertAgent(i.id,i.x??0,i.y??1.6,i.z??0,{name:i.displayName,state:i.state,taskId:i.taskId,lastSeen:t})}(i.type==="conversation_event"||i.type==="chat"&&i.message)&&ge.appendAgentChat(i.from||i.userId||"agent",i.message||"..."),i.type==="task_update"&&ge.appendAgentChat("task",`${i.agentId}: ${i.status} • ${i.detail}`)},i=>ge.setStatus(i),(i,t)=>ge.setWsState(i,t)),Ue.send({type:"event",worldId:"lobby",name:"snapshot_request",payload:{}}))}ge.onReconnect(async()=>{if(!Ue){await Gy();return}Ue.reconnect()});ge.onPlayClick(()=>{Uu&&Ci.tryLockPointer()});ge.onPointerLockToggle(i=>{Uu=i,Ci.setPointerLookEnabled(i)});Ci.onPointerLockChange(i=>{ge.setOverlayVisible(yC(i,Uu))});Ci.onSelectionChanged(i=>{ge.openAgent(i.id),ge.appendAgentChat("system",`Selected ${i.name} (${i.status})`)});Ci.onHeadingChange(i=>ge.setCompass(i));ge.onLogin(async()=>{try{ge.setStatus("Signing in with SIWE");const i=await mC(vC,_C);Vl=i.accessToken,ws=i.wsToken,ge.setStatus("Wallet connected"),Ue&&(Ue.setToken(ws),Ue.reconnect())}catch(i){i!=null&&i.endpoint&&(i!=null&&i.status)?ge.setNonceDebug(i.endpoint,i.status):ge.setStatus(i.message||"Wallet connection failed")}});ge.onChatSend((i,t)=>{Ue==null||Ue.send({type:"interaction",worldId:"lobby",targetAgentId:i,action:"chat",payload:{text:t}}),Ue==null||Ue.send({type:"chat",worldId:"lobby",message:t})});ge.onAssignTask(async(i,t)=>{var e;try{if(!Vl)throw new Error("Connect wallet first for ownership actions");const n=Ci.getCameraPosition(),r=await fC(Vl,{assignedTo:i,title:t,description:"Created from AgentVerse interaction panel",reward:5,rewardToken:"AGXP",location:{worldId:"lobby",...n},requiredCapabilities:["navigation","interaction"]});Ue==null||Ue.send({type:"task_assign",worldId:"lobby",agentId:i,taskId:r.task.id});const s=await dC(Vl,i).catch(()=>({memories:[]}));ge.appendAgentChat("system",`Task assigned: ${t}. Memory entries: ${((e=s.memories)==null?void 0:e.length)||0}`)}catch(n){ge.appendAgentChat("system",n.message||"Task assignment failed")}});Gy().catch(i=>ge.setStatus(i.message||"Realtime bootstrap failed"));setInterval(()=>{if(!Ue)return;Ue.send({type:"presence",worldId:"lobby",...Ci.getCameraPosition()});const i=Ci.getLastInteraction();i&&(Ue.send({type:"event",worldId:"lobby",name:"interaction",payload:{interaction:i}}),Ci.clearLastInteraction())},800);ge.setLoadProgress(100);ge.setStatus("Ready");
