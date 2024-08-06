var Ym=Object.defineProperty;var qm=(a,e,t)=>e in a?Ym(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var wt=(a,e,t)=>qm(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="166",Wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rf=0,jc=1,Pf=2,Zm=3,Km=0,xh=1,If=2,Bn=3,Wn=0,Ht=1,jt=2,si=0,er=1,Qc=2,$c=3,eh=4,Lf=5,bi=100,Uf=101,Df=102,Nf=103,Ff=104,Of=200,kf=201,Bf=202,zf=203,So=204,wo=205,Gf=206,Vf=207,Hf=208,Wf=209,Xf=210,Yf=211,qf=212,Zf=213,Kf=214,Jf=0,jf=1,Qf=2,ks=3,$f=4,ep=5,tp=6,np=7,sa=0,ip=1,rp=2,ai=0,sp=1,ap=2,op=3,lp=4,cp=5,hp=6,up=7,th="attached",dp="detached",ll=300,oi=301,wi=302,Bs=303,zs=304,Jr=306,Yr=1e3,_n=1001,Gs=1002,Rt=1003,Mh=1004,Jm=1004,Br=1005,jm=1005,gt=1006,As=1007,Qm=1007,zn=1008,$m=1008,Xn=1009,bh=1010,Sh=1011,qr=1012,cl=1013,li=1014,an=1015,jr=1016,hl=1017,ul=1018,sr=1020,wh=35902,Ah=1021,dl=1022,$t=1023,fl=1024,Eh=1025,tr=1026,ar=1027,pl=1028,aa=1029,Th=1030,ml=1031,eg=1032,gl=1033,Es=33776,Ts=33777,Cs=33778,Rs=33779,Ao=35840,Eo=35841,To=35842,Co=35843,Ro=36196,Po=37492,Io=37496,Lo=37808,Uo=37809,Do=37810,No=37811,Fo=37812,Oo=37813,ko=37814,Bo=37815,zo=37816,Go=37817,Vo=37818,Ho=37819,Wo=37820,Xo=37821,Ps=36492,Yo=36494,qo=36495,Ch=36283,Zo=36284,Ko=36285,Jo=36286,fp=2200,pp=2201,mp=2202,Vs=2300,jo=2301,_o=2302,Ki=2400,Ji=2401,Hs=2402,vl=2500,Rh=2501,tg=0,ng=1,ig=2,gp=3200,Ph=3201,Ai=0,vp=1,ni="",vn="srgb",hi="srgb-linear",_l="display-p3",oa="display-p3-linear",Ws="linear",ft="srgb",Xs="rec709",Ys="p3",rg=0,Yi=7680,sg=7681,ag=7682,og=7683,lg=34055,cg=34056,hg=5386,ug=512,dg=513,fg=514,pg=515,mg=516,gg=517,vg=518,nh=519,_p=512,yp=513,xp=514,Ih=515,Mp=516,bp=517,Sp=518,wp=519,qs=35044,_g=35048,yg=35040,xg=35045,Mg=35049,bg=35041,Sg=35046,wg=35050,Ag=35042,Eg="100",ih="300 es",Gn=2e3,Zs=2001;class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pu=1234567;const nr=Math.PI/180,Zr=180/Math.PI;function fn(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[a&255]+zt[a>>8&255]+zt[a>>16&255]+zt[a>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function bt(a,e,t){return Math.max(e,Math.min(t,a))}function Lh(a,e){return(a%e+e)%e}function Tg(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Cg(a,e,t){return a!==e?(t-a)/(e-a):0}function Is(a,e,t){return(1-t)*a+t*e}function Rg(a,e,t,n){return Is(a,e,1-Math.exp(-t*n))}function Pg(a,e=1){return e-Math.abs(Lh(a,e*2)-e)}function Ig(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Lg(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Ug(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Dg(a,e){return a+Math.random()*(e-a)}function Ng(a){return a*(.5-Math.random())}function Fg(a){a!==void 0&&(Pu=a);let e=Pu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Og(a){return a*nr}function kg(a){return a*Zr}function Bg(a){return(a&a-1)===0&&a!==0}function zg(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Gg(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Vg(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),l=s(t/2),c=r((e+n)/2),h=s((e+n)/2),u=r((e-n)/2),d=s((e-n)/2),f=r((n-e)/2),p=s((n-e)/2);switch(i){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*p,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*p,o*c);break;case"ZYZ":a.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function $e(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Ap={DEG2RAD:nr,RAD2DEG:Zr,generateUUID:fn,clamp:bt,euclideanModulo:Lh,mapLinear:Tg,inverseLerp:Cg,lerp:Is,damp:Rg,pingpong:Pg,smoothstep:Ig,smootherstep:Lg,randInt:Ug,randFloat:Dg,randFloatSpread:Ng,seededRandom:Fg,degToRad:Og,radToDeg:kg,isPowerOfTwo:Bg,ceilPowerOfTwo:zg,floorPowerOfTwo:Gg,setQuaternionFromProperEuler:Vg,normalize:$e,denormalize:Qt};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,r,s,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c)}set(e,t,n,i,r,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],g=i[3],m=i[6],y=i[1],_=i[4],x=i[7],C=i[2],E=i[5],w=i[8];return r[0]=s*v+o*y+l*C,r[3]=s*g+o*_+l*E,r[6]=s*m+o*x+l*w,r[1]=c*v+h*y+u*C,r[4]=c*g+h*_+u*E,r[7]=c*m+h*x+u*w,r[2]=d*v+f*y+p*C,r[5]=d*g+f*_+p*E,r[8]=d*m+f*x+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-n*r*h+n*o*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*r,f=c*r-s*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*s)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(s*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-i*c,i*l,-i*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sc.makeScale(e,t)),this}rotate(e){return this.premultiply(sc.makeRotation(-e)),this}translate(e,t){return this.premultiply(sc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sc=new Je;function Ep(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}const Hg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function zr(a,e){return new Hg[a](e)}function Ks(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Tp(){const a=Ks("canvas");return a.style.display="block",a}const Iu={};function Uh(a){a in Iu||(Iu[a]=!0,console.warn(a))}function Wg(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Lu=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ba={[hi]:{transfer:Ws,primaries:Xs,toReference:a=>a,fromReference:a=>a},[vn]:{transfer:ft,primaries:Xs,toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[oa]:{transfer:Ws,primaries:Ys,toReference:a=>a.applyMatrix3(Uu),fromReference:a=>a.applyMatrix3(Lu)},[_l]:{transfer:ft,primaries:Ys,toReference:a=>a.convertSRGBToLinear().applyMatrix3(Uu),fromReference:a=>a.applyMatrix3(Lu).convertLinearToSRGB()}},Xg=new Set([hi,oa]),ct={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Xg.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=ba[e].toReference,i=ba[t].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return ba[a].primaries},getTransfer:function(a){return a===ni?Ws:ba[a].transfer}};function Wr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ac(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let gr;class Cp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gr===void 0&&(gr=Ks("canvas")),gr.width=e.width,gr.height=e.height;const n=gr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Wr(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wr(t[n]/255)*255):t[n]=Wr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yg=0;class ji{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(oc(i[s].image)):r.push(oc(i[s]))}else r=oc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function oc(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Cp.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qg=0;class yt extends Yn{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=_n,i=_n,r=gt,s=zn,o=$t,l=Xn,c=yt.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=fn(),this.name="",this.source=new ji(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yr:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yr:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=ll;yt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,C=(m+1)/2,E=(h+d)/4,w=(u+v)/4,R=(p+g)/4;return _>x&&_>C?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=w/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=R/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=w/r,i=R/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rp extends Yn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ji(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Rp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yl extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zg extends Un{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new yl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Dh extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kg extends Un{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Dh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Wt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[s+0],f=r[s+1],p=r[s+2],v=r[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let g=1-o;const m=l*d+c*f+h*p+u*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const C=Math.sqrt(_),E=Math.atan2(C,m*y);g=Math.sin(g*E)/C,o=Math.sin(o*E)/C}const x=o*y;if(l=l*g+d*x,c=c*g+f*x,h=h*g+p*x,u=u*g+v*x,g===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[s],d=r[s+1],f=r[s+2],p=r[s+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(s){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*o+i*c-r*l,this._y=i*h+s*l+r*o-n*c,this._z=r*h+s*c+n*l-i*o,this._w=s*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*i-o*n),h=2*(o*t-r*i),u=2*(r*n-s*t);return this.x=t+l*c+s*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*s-n*l,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lc=new L,Du=new Wt;class Xt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,En):En.fromBufferAttribute(r,s),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),wa.subVectors(this.max,cs),vr.subVectors(e.a,cs),_r.subVectors(e.b,cs),yr.subVectors(e.c,cs),fi.subVectors(_r,vr),pi.subVectors(yr,_r),Ii.subVectors(vr,yr);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!cc(t,vr,_r,yr,wa)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,vr,_r,yr,wa))?!1:(Aa.crossVectors(fi,pi),t=[Aa.x,Aa.y,Aa.z],cc(t,vr,_r,yr,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new L,new L,new L,new L,new L,new L,new L,new L],En=new L,Sa=new Xt,vr=new L,_r=new L,yr=new L,fi=new L,pi=new L,Ii=new L,cs=new L,wa=new L,Aa=new L,Li=new L;function cc(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){Li.fromArray(a,r);const o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Jg=new Xt,hs=new L,hc=new L;class Ot{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const t=hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(hc)),this.expandByPoint(hs.copy(e.center).sub(hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new L,uc=new L,Ea=new L,mi=new L,dc=new L,Ta=new L,fc=new L;class hr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uc.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(uc);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ea),o=mi.dot(this.direction),l=-mi.dot(Ea),c=mi.lengthSq(),h=Math.abs(1-s*s);let u,d,f,p;if(h>0)if(u=s*l-o,d=s*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,f=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=r,u=Math.max(0,-(s*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(s*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-s*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(s*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=s>0?-r:r,u=Math.max(0,-(s*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uc).addScaledVector(Ea,d),f}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,i,r){dc.subVectors(t,e),Ta.subVectors(n,e),fc.crossVectors(dc,Ta);let s=this.direction.dot(fc),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(Ta.crossVectors(mi,Ta));if(l<0)return null;const c=o*this.direction.dot(dc.cross(mi));if(c<0||l+c>s)return null;const h=-o*mi.dot(fc);return h<0?null:this.at(h/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,n,i,r,s,o,l,c,h,u,d,f,p,v,g){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,l,c,h,u,d,f,p,v,g)}set(e,t,n,i,r,s,o,l,c,h,u,d,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xr.setFromMatrixColumn(e,0).length(),r=1/xr.setFromMatrixColumn(e,1).length(),s=1/xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=s*h,f=s*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d+v*o,t[4]=p*o-f,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d-v*o,t[4]=-s*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=s*h,t[9]=v-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,f=s*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){const d=s*l,f=s*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=s*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Qg)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),gi.crossVectors(n,hn),gi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),gi.crossVectors(n,hn)),gi.normalize(),Ca.crossVectors(hn,gi),i[0]=gi.x,i[4]=Ca.x,i[8]=hn.x,i[1]=gi.y,i[5]=Ca.y,i[9]=hn.y,i[2]=gi.z,i[6]=Ca.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],y=n[3],_=n[7],x=n[11],C=n[15],E=i[0],w=i[4],R=i[8],S=i[12],M=i[1],D=i[5],U=i[9],N=i[13],O=i[2],V=i[6],B=i[10],j=i[14],Y=i[3],Q=i[7],J=i[11],F=i[15];return r[0]=s*E+o*M+l*O+c*Y,r[4]=s*w+o*D+l*V+c*Q,r[8]=s*R+o*U+l*B+c*J,r[12]=s*S+o*N+l*j+c*F,r[1]=h*E+u*M+d*O+f*Y,r[5]=h*w+u*D+d*V+f*Q,r[9]=h*R+u*U+d*B+f*J,r[13]=h*S+u*N+d*j+f*F,r[2]=p*E+v*M+g*O+m*Y,r[6]=p*w+v*D+g*V+m*Q,r[10]=p*R+v*U+g*B+m*J,r[14]=p*S+v*N+g*j+m*F,r[3]=y*E+_*M+x*O+C*Y,r[7]=y*w+_*D+x*V+C*Q,r[11]=y*R+_*U+x*B+C*J,r[15]=y*S+_*N+x*j+C*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*s*d-i*s*f+i*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*s*u+n*s*f+r*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*d+i*s*u-n*s*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],y=u*g*c-v*d*c+v*l*f-o*g*f-u*l*m+o*d*m,_=p*d*c-h*g*c-p*l*f+s*g*f+h*l*m-s*d*m,x=h*v*c-p*u*c+p*o*f-s*v*f-h*o*m+s*u*m,C=p*u*l-h*v*l-p*o*d+s*v*d+h*o*g-s*u*g,E=t*y+n*_+i*x+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(v*d*r-u*g*r-v*i*f+n*g*f+u*i*m-n*d*m)*w,e[2]=(o*g*r-v*l*r+v*i*c-n*g*c-o*i*m+n*l*m)*w,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*w,e[4]=_*w,e[5]=(h*g*r-p*d*r+p*i*f-t*g*f-h*i*m+t*d*m)*w,e[6]=(p*l*r-s*g*r-p*i*c+t*g*c+s*i*m-t*l*m)*w,e[7]=(s*d*r-h*l*r+h*i*c-t*d*c-s*i*f+t*l*f)*w,e[8]=x*w,e[9]=(p*u*r-h*v*r-p*n*f+t*v*f+h*n*m-t*u*m)*w,e[10]=(s*v*r-p*o*r+p*n*c-t*v*c-s*n*m+t*o*m)*w,e[11]=(h*o*r-s*u*r-h*n*c+t*u*c+s*n*f-t*o*f)*w,e[12]=C*w,e[13]=(h*v*i-p*u*i+p*n*d-t*v*d-h*n*g+t*u*g)*w,e[14]=(p*o*i-s*v*i-p*n*l+t*v*l+s*n*g-t*o*g)*w,e[15]=(s*u*i-h*o*i+h*n*l-t*u*l-s*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,l=e.z,c=r*s,h=r*o;return this.set(c*s+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*s,0,c*l-i*o,h*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,l=t._w,c=r+r,h=s+s,u=o+o,d=r*c,f=r*h,p=r*u,v=s*h,g=s*u,m=o*u,y=l*c,_=l*h,x=l*u,C=n.x,E=n.y,w=n.z;return i[0]=(1-(v+m))*C,i[1]=(f+x)*C,i[2]=(p-_)*C,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+m))*E,i[6]=(g+y)*E,i[7]=0,i[8]=(p+_)*w,i[9]=(g-y)*w,i[10]=(1-(d+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=xr.set(i[0],i[1],i[2]).length();const s=xr.set(i[4],i[5],i[6]).length(),o=xr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const c=1/r,h=1/s,u=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s,o=Gn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,p;if(o===Gn)f=-(s+r)/(s-r),p=-2*s*r/(s-r);else if(o===Zs)f=-s/(s-r),p=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=Gn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(s-r),d=(t+e)*c,f=(n+i)*h;let p,v;if(o===Gn)p=(s+r)*u,v=-2*u;else if(o===Zs)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xr=new L,Tn=new We,jg=new L(0,0,0),Qg=new L(1,1,1),gi=new L,Ca=new L,hn=new L,Nu=new We,Fu=new Wt;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $g=0;const Ou=new L,Mr=new Wt,Jn=new We,Ra=new L,us=new L,e0=new L,t0=new Wt,ku=new L(1,0,0),Bu=new L(0,1,0),zu=new L(0,0,1),Gu={type:"added"},n0={type:"removed"},br={type:"childadded",child:null},pc={type:"childremoved",child:null};class nt extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new L,t=new pn,n=new Wt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Je}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,t){return Mr.setFromAxisAngle(e,t),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Bu,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,t){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Bu,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(us,Ra,this.up):Jn.lookAt(Ra,us,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),Mr.setFromRotationMatrix(Jn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(n0),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,e0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),f=s(e.animations),p=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DEFAULT_UP=new L(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new L,jn=new L,mc=new L,Qn=new L,Sr=new L,wr=new L,Vu=new L,gc=new L,vc=new L,_c=new L;class dn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Cn.subVectors(i,t),jn.subVectors(n,t),mc.subVectors(e,t);const s=Cn.dot(Cn),o=Cn.dot(jn),l=Cn.dot(mc),c=jn.dot(jn),h=jn.dot(mc),u=s*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(s*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,r,s,o,l){return this.getBarycoord(e,t,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(s,Qn.y),l.addScaledVector(o,Qn.z),l)}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),jn.subVectors(e,t),Cn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Cn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;Sr.subVectors(i,n),wr.subVectors(r,n),gc.subVectors(e,n);const l=Sr.dot(gc),c=wr.dot(gc);if(l<=0&&c<=0)return t.copy(n);vc.subVectors(e,i);const h=Sr.dot(vc),u=wr.dot(vc);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(Sr,s);_c.subVectors(e,r);const f=Sr.dot(_c),p=wr.dot(_c);if(p>=0&&f<=p)return t.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(wr,o);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Vu.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(Vu,o);const m=1/(g+v+d);return s=v*m,o=d*m,t.copy(n).addScaledVector(Sr,s).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function yc(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=Lh(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=yc(s,r,e+1/3),this.g=yc(s,r,e),this.b=yc(s,r,e-1/3)}return ct.toWorkingColorSpace(this,i),this}setStyle(e,t=vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=Pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}copyLinearToSRGB(e){return this.r=ac(e.r),this.g=ac(e.g),this.b=ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ct.fromWorkingColorSpace(Gt.copy(this),e),Math.round(bt(Gt.r*255,0,255))*65536+Math.round(bt(Gt.g*255,0,255))*256+Math.round(bt(Gt.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,r=Gt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=vn){ct.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Pa);const n=Is(vi.h,Pa.h,t),i=Is(vi.s,Pa.s,t),r=Is(vi.l,Pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new De;De.NAMES=Pp;let i0=0;class Yt extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=er,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=wo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==wo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Mn extends Yt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ii=r0();function r0(){const a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:s,offsetTable:o}}function sn(a){Math.abs(a)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),a=bt(a,-65504,65504),ii.floatView[0]=a;const e=ii.uint32View[0],t=e>>23&511;return ii.baseTable[t]+((e&8388607)>>ii.shiftTable[t])}function bs(a){const e=a>>10;return ii.uint32View[0]=ii.mantissaTable[ii.offsetTable[e]+(a&1023)]+ii.exponentTable[e],ii.floatView[0]}const s0={toHalfFloat:sn,fromHalfFloat:bs},Tt=new L,Ia=new me;class ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Uh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qs&&(e.usage=this.usage),e}}class a0 extends ht{constructor(e,t,n){super(new Int8Array(e),t,n)}}class o0 extends ht{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class l0 extends ht{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class c0 extends ht{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Nh extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class h0 extends ht{constructor(e,t,n){super(new Int32Array(e),t,n)}}class Fh extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class u0 extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=bs(this.array[e*this.itemSize]);return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=sn(t),this}getY(e){let t=bs(this.array[e*this.itemSize+1]);return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=sn(t),this}getZ(e){let t=bs(this.array[e*this.itemSize+2]);return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=sn(t),this}getW(e){let t=bs(this.array[e*this.itemSize+3]);return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=sn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this.array[e+2]=sn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this.array[e+2]=sn(i),this.array[e+3]=sn(r),this}}class ze extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d0=0;const gn=new We,xc=new nt,Ar=new L,un=new Xt,ds=new Xt,Dt=new L;class qe extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Fh:Nh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(un.min,ds.min),un.expandByPoint(Dt),Dt.addVectors(un.max,ds.max),un.expandByPoint(Dt)):(un.expandByPoint(ds.min),un.expandByPoint(ds.max))}un.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Dt.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),Dt.add(Ar)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;const c=new L,h=new L,u=new L,d=new me,f=new me,p=new me,v=new L,g=new L;function m(R,S,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,S),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),p.sub(d);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),o[R].add(v),o[S].add(v),o[M].add(v),l[R].add(g),l[S].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,S=y.length;R<S;++R){const M=y[R],D=M.start,U=M.count;for(let N=D,O=D+U;N<O;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new L,x=new L,C=new L,E=new L;function w(R){C.fromBufferAttribute(i,R),E.copy(C);const S=o[R];_.copy(S),_.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(E,S);const D=x.dot(l[R])<0?-1:1;s.setXYZW(R,_.x,_.y,_.z,D)}for(let R=0,S=y.length;R<S;++R){const M=y[R],D=M.start,U=M.count;for(let N=D,O=D+U;N<O;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,s=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[p++]=c[f++]}return new ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qe,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hu=new We,Ui=new hr,La=new Ot,Wu=new L,Er=new L,Tr=new L,Cr=new L,Mc=new L,Ua=new L,Da=new me,Na=new me,Fa=new me,Xu=new L,Yu=new L,qu=new L,Oa=new L,ka=new L;class et extends nt{constructor(e=new qe,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Mc.fromBufferAttribute(u,e),s?Ua.addScaledVector(Mc,h):Ua.addScaledVector(Mc.sub(t),h))}t.add(Ua)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(La.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(La,Wu)===null||Ui.origin.distanceToSquared(Wu)>(e.far-e.near)**2))&&(Hu.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Hu),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=s[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,C=_;x<C;x+=3){const E=o.getX(x),w=o.getX(x+1),R=o.getX(x+2);i=Ba(this,m,e,n,c,h,u,E,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);i=Ba(this,s,e,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=s[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=y,C=_;x<C;x+=3){const E=x,w=x+1,R=x+2;i=Ba(this,m,e,n,c,h,u,E,w,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=g,_=g+1,x=g+2;i=Ba(this,s,e,n,c,h,u,y,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function f0(a,e,t,n,i,r,s,o){let l;if(e.side===Ht?l=n.intersectTriangle(s,r,i,!0,o):l=n.intersectTriangle(i,r,s,e.side===Wn,o),l===null)return null;ka.copy(o),ka.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:a}}function Ba(a,e,t,n,i,r,s,o,l,c){a.getVertexPosition(o,Er),a.getVertexPosition(l,Tr),a.getVertexPosition(c,Cr);const h=f0(a,e,t,n,Er,Tr,Cr,Oa);if(h){i&&(Da.fromBufferAttribute(i,o),Na.fromBufferAttribute(i,l),Fa.fromBufferAttribute(i,c),h.uv=dn.getInterpolation(Oa,Er,Tr,Cr,Da,Na,Fa,new me)),r&&(Da.fromBufferAttribute(r,o),Na.fromBufferAttribute(r,l),Fa.fromBufferAttribute(r,c),h.uv1=dn.getInterpolation(Oa,Er,Tr,Cr,Da,Na,Fa,new me)),s&&(Xu.fromBufferAttribute(s,o),Yu.fromBufferAttribute(s,l),qu.fromBufferAttribute(s,c),h.normal=dn.getInterpolation(Oa,Er,Tr,Cr,Xu,Yu,qu,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};dn.getNormal(Er,Tr,Cr,u.normal),h.face=u}return h}class ur extends qe{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,s,r,0),p("z","y","x",1,-1,n,t,-e,s,r,1),p("x","z","y",1,1,e,n,t,i,s,2),p("x","z","y",1,-1,e,n,-t,i,s,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2));function p(v,g,m,y,_,x,C,E,w,R,S){const M=x/w,D=C/R,U=x/2,N=C/2,O=E/2,V=w+1,B=R+1;let j=0,Y=0;const Q=new L;for(let J=0;J<B;J++){const F=J*D-N;for(let X=0;X<V;X++){const se=X*M-U;Q[v]=se*y,Q[g]=F*_,Q[m]=O,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[g]=0,Q[m]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(X/w),u.push(1-J/R),j+=1}}for(let J=0;J<R;J++)for(let F=0;F<w;F++){const X=d+F+V*J,se=d+F+V*(J+1),k=d+(F+1)+V*(J+1),z=d+(F+1)+V*J;l.push(X,se,z),l.push(se,k,z),Y+=6}o.addGroup(f,Y,S),f+=Y,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Jt(a){const e={};for(let t=0;t<a.length;t++){const n=Kr(a[t]);for(const i in n)e[i]=n[i]}return e}function p0(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ip(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Oh={clone:Kr,merge:Jt};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Yt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ml extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new L,Zu=new me,Ku=new me;class Nt extends Ml{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,Ku),t.subVectors(Ku,Zu)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rr=-90,Pr=1;class Lp extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(Rr,Pr,e,t);i.layers=this.layers,this.add(i);const r=new Nt(Rr,Pr,e,t);r.layers=this.layers,this.add(r);const s=new Nt(Rr,Pr,e,t);s.layers=this.layers,this.add(s);const o=new Nt(Rr,Pr,e,t);o.layers=this.layers,this.add(o);const l=new Nt(Rr,Pr,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Rr,Pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class la extends yt{constructor(e,t,n,i,r,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:oi,super(e,t,n,i,r,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Up extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new la(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ur(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:Kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:si});r.uniforms.tEquirect.value=t;const s=new et(i,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=gt),new Lp(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const bc=new L,v0=new L,_0=new Je;class ti{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=bc.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_0.getNormalMatrix(e),i=this.coplanarPoint(bc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ot,za=new L;class ca{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,s=new ti){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],v=i[10],g=i[11],m=i[12],y=i[13],_=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,g-f,x-m).normalize(),n[1].setComponents(l+r,d+c,g+f,x+m).normalize(),n[2].setComponents(l+s,d+h,g+p,x+y).normalize(),n[3].setComponents(l-s,d-h,g-p,x-y).normalize(),n[4].setComponents(l-o,d-u,g-v,x-_).normalize(),t===Gn)n[5].setComponents(l+o,d+u,g+v,x+_).normalize();else if(t===Zs)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(za.x=i.normal.x>0?e.max.x:e.min.x,za.y=i.normal.y>0?e.max.y:e.min.y,za.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dp(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function y0(a){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=a.createBuffer();a.bindBuffer(l,d),a.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=a.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=a.HALF_FLOAT:f=a.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=a.SHORT;else if(c instanceof Uint32Array)f=a.UNSIGNED_INT;else if(c instanceof Int32Array)f=a.INT;else if(c instanceof Int8Array)f=a.BYTE;else if(c instanceof Uint8Array)f=a.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(a.bindBuffer(c,o),u.count===-1&&d.length===0&&a.bufferSubData(c,0,h),d.length!==0){for(let f=0,p=d.length;f<p;f++){const v=d[f];a.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(a.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(a.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:s}}class bn extends qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<h;m++){const y=m*d-s;for(let _=0;_<c;_++){const x=_*u-r;p.push(x,-y,0),v.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const _=y+c*m,x=y+c*(m+1),C=y+1+c*(m+1),E=y+1+c*m;f.push(_,x,E),f.push(x,C,E)}this.setIndex(f),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
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
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,H0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X0=`vec3 transformedNormal = objectNormal;
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
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
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
}`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
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
#endif`,dv=`#ifdef USE_ENVMAP
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
#endif`,fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vv=`PhysicalMaterial material;
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
#endif`,_v=`struct PhysicalMaterial {
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
}`,yv=`
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rv=`#if defined( USE_POINTS_UV )
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
#endif`,Pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`#ifdef USE_MORPHTARGETS
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
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
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
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r_=`float getShadowMask() {
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
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a_=`#ifdef USE_SKINNING
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
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#ifdef USE_TRANSMISSION
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
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
}`,E_=`#if DEPTH_PACKING == 3200
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
	#endif
}`,T_=`#define DISTANCE
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
}`,C_=`#define DISTANCE
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
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
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
}`,L_=`uniform vec3 diffuse;
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
}`,U_=`#include <common>
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
}`,D_=`uniform vec3 diffuse;
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
}`,N_=`#define LAMBERT
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
}`,F_=`#define LAMBERT
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
}`,O_=`#define MATCAP
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
}`,k_=`#define MATCAP
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
}`,B_=`#define NORMAL
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
}`,z_=`#define NORMAL
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
}`,G_=`#define PHONG
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
}`,V_=`#define PHONG
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
}`,H_=`#define STANDARD
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
}`,W_=`#define STANDARD
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
}`,X_=`#define TOON
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
}`,Y_=`#define TOON
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
}`,q_=`uniform float size;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,J_=`uniform vec3 color;
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
}`,j_=`uniform float rotation;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:x0,alphahash_pars_fragment:M0,alphamap_fragment:b0,alphamap_pars_fragment:S0,alphatest_fragment:w0,alphatest_pars_fragment:A0,aomap_fragment:E0,aomap_pars_fragment:T0,batching_pars_vertex:C0,batching_vertex:R0,begin_vertex:P0,beginnormal_vertex:I0,bsdfs:L0,iridescence_fragment:U0,bumpmap_pars_fragment:D0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:k0,color_fragment:B0,color_pars_fragment:z0,color_pars_vertex:G0,color_vertex:V0,common:H0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:Y0,displacementmap_vertex:q0,emissivemap_fragment:Z0,emissivemap_pars_fragment:K0,colorspace_fragment:J0,colorspace_pars_fragment:j0,envmap_fragment:Q0,envmap_common_pars_fragment:$0,envmap_pars_fragment:ev,envmap_pars_vertex:tv,envmap_physical_pars_fragment:dv,envmap_vertex:nv,fog_vertex:iv,fog_pars_vertex:rv,fog_fragment:sv,fog_pars_fragment:av,gradientmap_pars_fragment:ov,lightmap_pars_fragment:lv,lights_lambert_fragment:cv,lights_lambert_pars_fragment:hv,lights_pars_begin:uv,lights_toon_fragment:fv,lights_toon_pars_fragment:pv,lights_phong_fragment:mv,lights_phong_pars_fragment:gv,lights_physical_fragment:vv,lights_physical_pars_fragment:_v,lights_fragment_begin:yv,lights_fragment_maps:xv,lights_fragment_end:Mv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Av,map_fragment:Ev,map_pars_fragment:Tv,map_particle_fragment:Cv,map_particle_pars_fragment:Rv,metalnessmap_fragment:Pv,metalnessmap_pars_fragment:Iv,morphinstance_vertex:Lv,morphcolor_vertex:Uv,morphnormal_vertex:Dv,morphtarget_pars_vertex:Nv,morphtarget_vertex:Fv,normal_fragment_begin:Ov,normal_fragment_maps:kv,normal_pars_fragment:Bv,normal_pars_vertex:zv,normal_vertex:Gv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Wv,clearcoat_pars_fragment:Xv,iridescence_pars_fragment:Yv,opaque_fragment:qv,packing:Zv,premultiplied_alpha_fragment:Kv,project_vertex:Jv,dithering_fragment:jv,dithering_pars_fragment:Qv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:e_,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:r_,skinbase_vertex:s_,skinning_pars_vertex:a_,skinning_vertex:o_,skinnormal_vertex:l_,specularmap_fragment:c_,specularmap_pars_fragment:h_,tonemapping_fragment:u_,tonemapping_pars_fragment:d_,transmission_fragment:f_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:v_,worldpos_vertex:__,background_vert:y_,background_frag:x_,backgroundCube_vert:M_,backgroundCube_frag:b_,cube_vert:S_,cube_frag:w_,depth_vert:A_,depth_frag:E_,distanceRGBA_vert:T_,distanceRGBA_frag:C_,equirect_vert:R_,equirect_frag:P_,linedashed_vert:I_,linedashed_frag:L_,meshbasic_vert:U_,meshbasic_frag:D_,meshlambert_vert:N_,meshlambert_frag:F_,meshmatcap_vert:O_,meshmatcap_frag:k_,meshnormal_vert:B_,meshnormal_frag:z_,meshphong_vert:G_,meshphong_frag:V_,meshphysical_vert:H_,meshphysical_frag:W_,meshtoon_vert:X_,meshtoon_frag:Y_,points_vert:q_,points_frag:Z_,shadow_vert:K_,shadow_frag:J_,sprite_vert:j_,sprite_frag:Q_},Ne={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Pn={basic:{uniforms:Jt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Jt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new De(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Jt([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Jt([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Jt([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new De(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Jt([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Jt([Ne.points,Ne.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Jt([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Jt([Ne.common,Ne.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Jt([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Jt([Ne.sprite,Ne.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Jt([Ne.common,Ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Jt([Ne.lights,Ne.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Pn.physical={uniforms:Jt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ga={r:0,b:0,g:0},Ni=new pn,$_=new We;function ey(a,e,t,n,i,r,s){const o=new De(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?t:e).get(_)),_}function v(y){let _=!1;const x=p(y);x===null?m(o,l):x&&x.isColor&&(m(x,1),_=!0);const C=a.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function g(y,_){const x=p(_);x&&(x.isCubeTexture||x.mapping===Jr)?(h===void 0&&(h=new et(new ur(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Kr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ni.copy(_.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($_.makeRotationFromEuler(Ni)),h.material.toneMapped=ct.getTransfer(x.colorSpace)!==ft,(u!==x||d!==x.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=a.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new et(new bn(2,2),new Dn({name:"BackgroundMaterial",uniforms:Kr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ct.getTransfer(x.colorSpace)!==ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,_){y.getRGB(Ga,Ip(a)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:g}}function ty(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,s=!1;function o(M,D,U,N,O){let V=!1;const B=u(N,U,D);r!==B&&(r=B,c(r.object)),V=f(M,N,U,O),V&&p(M,N,U,O),O!==null&&e.update(O,a.ELEMENT_ARRAY_BUFFER),(V||s)&&(s=!1,x(M,D,U,N),O!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return a.createVertexArray()}function c(M){return a.bindVertexArray(M)}function h(M){return a.deleteVertexArray(M)}function u(M,D,U){const N=U.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let V=O[D.id];V===void 0&&(V={},O[D.id]=V);let B=V[N];return B===void 0&&(B=d(l()),V[N]=B),B}function d(M){const D=[],U=[],N=[];for(let O=0;O<t;O++)D[O]=0,U[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,D,U,N){const O=r.attributes,V=D.attributes;let B=0;const j=U.getAttributes();for(const Y in j)if(j[Y].location>=0){const J=O[Y];let F=V[Y];if(F===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(F=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(F=M.instanceColor)),J===void 0||J.attribute!==F||F&&J.data!==F.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function p(M,D,U,N){const O={},V=D.attributes;let B=0;const j=U.getAttributes();for(const Y in j)if(j[Y].location>=0){let J=V[Y];J===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const F={};F.attribute=J,J&&J.data&&(F.data=J.data),O[Y]=F,B++}r.attributes=O,r.attributesNum=B,r.index=N}function v(){const M=r.newAttributes;for(let D=0,U=M.length;D<U;D++)M[D]=0}function g(M){m(M,0)}function m(M,D){const U=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;U[M]=1,N[M]===0&&(a.enableVertexAttribArray(M),N[M]=1),O[M]!==D&&(a.vertexAttribDivisor(M,D),O[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let U=0,N=D.length;U<N;U++)D[U]!==M[U]&&(a.disableVertexAttribArray(U),D[U]=0)}function _(M,D,U,N,O,V,B){B===!0?a.vertexAttribIPointer(M,D,U,O,V):a.vertexAttribPointer(M,D,U,N,O,V)}function x(M,D,U,N){v();const O=N.attributes,V=U.getAttributes(),B=D.defaultAttributeValues;for(const j in V){const Y=V[j];if(Y.location>=0){let Q=O[j];if(Q===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const J=Q.normalized,F=Q.itemSize,X=e.get(Q);if(X===void 0)continue;const se=X.buffer,k=X.type,z=X.bytesPerElement,re=k===a.INT||k===a.UNSIGNED_INT||Q.gpuType===cl;if(Q.isInterleavedBufferAttribute){const W=Q.data,le=W.stride,xe=Q.offset;if(W.isInstancedInterleavedBuffer){for(let be=0;be<Y.locationSize;be++)m(Y.location+be,W.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let be=0;be<Y.locationSize;be++)g(Y.location+be);a.bindBuffer(a.ARRAY_BUFFER,se);for(let be=0;be<Y.locationSize;be++)_(Y.location+be,F/Y.locationSize,k,J,le*z,(xe+F/Y.locationSize*be)*z,re)}else{if(Q.isInstancedBufferAttribute){for(let W=0;W<Y.locationSize;W++)m(Y.location+W,Q.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let W=0;W<Y.locationSize;W++)g(Y.location+W);a.bindBuffer(a.ARRAY_BUFFER,se);for(let W=0;W<Y.locationSize;W++)_(Y.location+W,F/Y.locationSize,k,J,F*z,F/Y.locationSize*W*z,re)}}else if(B!==void 0){const J=B[j];if(J!==void 0)switch(J.length){case 2:a.vertexAttrib2fv(Y.location,J);break;case 3:a.vertexAttrib3fv(Y.location,J);break;case 4:a.vertexAttrib4fv(Y.location,J);break;default:a.vertexAttrib1fv(Y.location,J)}}}}y()}function C(){R();for(const M in n){const D=n[M];for(const U in D){const N=D[U];for(const O in N)h(N[O].object),delete N[O];delete D[U]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const U in D){const N=D[U];for(const O in N)h(N[O].object),delete N[O];delete D[U]}delete n[M.id]}function w(M){for(const D in n){const U=n[D];if(U[M.id]===void 0)continue;const N=U[M.id];for(const O in N)h(N[O].object),delete N[O];delete U[M.id]}}function R(){S(),s=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function ny(a,e,t){let n;function i(c){n=c}function r(c,h){a.drawArrays(n,c,h),t.update(h,n,1)}function s(c,h,u){u!==0&&(a.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)s(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];for(let v=0;v<d.length;v++)t.update(p,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function iy(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){return!(E!==$t&&n.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const w=E===jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Xn&&n.convert(E)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==an&&!w)}function l(E){if(E==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),y=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,C=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:x,maxSamples:C}}function ry(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new ti,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=a.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const y=r?0:n,_=y*4;let x=m.clippingState||null;l.value=x,x=h(p,d,_,f);for(let C=0;C!==_;++C)x[C]=t[C];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,x=f;_!==v;++_,x+=4)s.copy(u[_]).applyMatrix4(y,o),s.normal.toArray(g,x),g[x+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function sy(a){let e=new WeakMap;function t(s,o){return o===Bs?s.mapping=oi:o===zs&&(s.mapping=wi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Bs||o===zs)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Up(l.height);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",i),t(c.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class bl extends Ml{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Ju=[.125,.215,.35,.446,.526,.582],Zi=20,Sc=new bl,ju=new De;let wc=null,Ac=0,Ec=0,Tc=!1;const qi=(1+Math.sqrt(5))/2,Ir=1/qi,Qu=[new L(-qi,Ir,0),new L(qi,Ir,0),new L(-Ir,0,qi),new L(Ir,0,qi),new L(0,qi,-Ir),new L(0,qi,Ir),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class rh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,Ac,Ec),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:jr,format:$t,colorSpace:hi,depthBuffer:!1},i=$u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ay(r)),this._blurMaterial=oy(r,e,t)}return i}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Sc)}_sceneToCubeUV(e,t,n,i){const o=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ju),h.toneMapping=ai,h.autoClear=!1;const f=new Mn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),p=new et(new ur,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(ju),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const _=this._cubeSize;Va(i,y*_,m>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===oi||e.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Sc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qu[(i-r-1)%Qu.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new et(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Zi-1),v=r/p,g=isFinite(r)?1+Math.floor(h*v):Zi;g>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);const m=[];let y=0;for(let w=0;w<Zi;++w){const R=w/v,S=Math.exp(-R*R/2);m.push(S),w===0?y+=S:w<g&&(y+=2*S)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;const x=this._sizeLods[i],C=3*x*(i>_-Gr?i-_+Gr:0),E=4*(this._cubeSize-x);Va(t,C,E,3*x,2*x),l.setRenderTarget(t),l.render(u,Sc)}}function ay(a){const e=[],t=[],n=[];let i=a;const r=a-Gr+1+Ju.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>a-Gr?l=Ju[s-a+Gr-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,g=2,m=1,y=new Float32Array(v*p*f),_=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,R=E>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(S,v*p*E),_.set(d,g*p*E);const M=[E,E,E,E,E,E];x.set(M,m*p*E)}const C=new qe;C.setAttribute("position",new ht(y,v)),C.setAttribute("uv",new ht(_,g)),C.setAttribute("faceIndex",new ht(x,m)),e.push(C),i>Gr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $u(a,e,t){const n=new Un(a,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function oy(a,e,t){const n=new Float32Array(Zi),i=new L(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kh(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function ed(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function td(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function ly(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Bs||l===zs,h=l===oi||l===wi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new rh(a)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new rh(a)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function cy(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Uh("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function hy(a,e,t,n){const i={},r=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],a.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],a.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const C=y[_+0],E=y[_+1],w=y[_+2];d.push(C,E,E,w,w,C)}}else if(p!==void 0){const y=p.array;v=p.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const C=_+0,E=_+1,w=_+2;d.push(C,E,E,w,w,C)}}else return;const g=new(Ep(d)?Fh:Nh)(d,1);g.version=v;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function uy(a,e,t){let n;function i(d){n=d}let r,s;function o(d){r=d.type,s=d.bytesPerElement}function l(d,f){a.drawElements(n,f,r,d*s),t.update(f,n,1)}function c(d,f,p){p!==0&&(a.drawElementsInstanced(n,f,r,d*s,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}function u(d,f,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/s,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];for(let y=0;y<v.length;y++)t.update(m,n,v[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function dy(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fy(a,e,t){const n=new WeakMap,i=new lt;function r(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let C=o.attributes.position.count*x,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*E*4*u),R=new yl(w,C,E,u);R.type=an,R.needsUpdate=!0;const S=x*4;for(let D=0;D<u;D++){const U=m[D],N=y[D],O=_[D],V=C*E*4*D;for(let B=0;B<U.count;B++){const j=B*S;p===!0&&(i.fromBufferAttribute(U,B),w[V+j+0]=i.x,w[V+j+1]=i.y,w[V+j+2]=i.z,w[V+j+3]=0),v===!0&&(i.fromBufferAttribute(N,B),w[V+j+4]=i.x,w[V+j+5]=i.y,w[V+j+6]=i.z,w[V+j+7]=0),g===!0&&(i.fromBufferAttribute(O,B),w[V+j+8]=i.x,w[V+j+9]=i.y,w[V+j+10]=i.z,w[V+j+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new me(C,E)},n.set(o,d),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(a,"morphTargetBaseInfluence",v),l.getUniforms().setValue(a,"morphTargetInfluences",c)}l.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}return{update:r}}function py(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function s(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class Bh extends yt{constructor(e,t,n,i,r,s,o,l,c,h=tr){if(h!==tr&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===tr&&(n=li),n===void 0&&h===ar&&(n=sr),super(null,i,r,s,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=l!==void 0?l:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Np=new yt,nd=new Bh(1,1),Fp=new yl,Op=new Dh,kp=new la,id=[],rd=[],sd=new Float32Array(16),ad=new Float32Array(9),od=new Float32Array(4);function Qr(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=id[i];if(r===void 0&&(r=new Float32Array(i),id[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Pt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function It(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Sl(a,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function my(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function gy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2fv(this.addr,e),It(t,e)}}function vy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;a.uniform3fv(this.addr,e),It(t,e)}}function _y(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4fv(this.addr,e),It(t,e)}}function yy(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;od.set(n),a.uniformMatrix2fv(this.addr,!1,od),It(t,n)}}function xy(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;ad.set(n),a.uniformMatrix3fv(this.addr,!1,ad),It(t,n)}}function My(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;sd.set(n),a.uniformMatrix4fv(this.addr,!1,sd),It(t,n)}}function by(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Sy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2iv(this.addr,e),It(t,e)}}function wy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;a.uniform3iv(this.addr,e),It(t,e)}}function Ay(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4iv(this.addr,e),It(t,e)}}function Ey(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Ty(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;a.uniform2uiv(this.addr,e),It(t,e)}}function Cy(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;a.uniform3uiv(this.addr,e),It(t,e)}}function Ry(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;a.uniform4uiv(this.addr,e),It(t,e)}}function Py(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(nd.compareFunction=Ih,r=nd):r=Np,t.setTexture2D(e||r,i)}function Iy(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Op,i)}function Ly(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kp,i)}function Uy(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fp,i)}function Dy(a){switch(a){case 5126:return my;case 35664:return gy;case 35665:return vy;case 35666:return _y;case 35674:return yy;case 35675:return xy;case 35676:return My;case 5124:case 35670:return by;case 35667:case 35671:return Sy;case 35668:case 35672:return wy;case 35669:case 35673:return Ay;case 5125:return Ey;case 36294:return Ty;case 36295:return Cy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Uy}}function Ny(a,e){a.uniform1fv(this.addr,e)}function Fy(a,e){const t=Qr(e,this.size,2);a.uniform2fv(this.addr,t)}function Oy(a,e){const t=Qr(e,this.size,3);a.uniform3fv(this.addr,t)}function ky(a,e){const t=Qr(e,this.size,4);a.uniform4fv(this.addr,t)}function By(a,e){const t=Qr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function zy(a,e){const t=Qr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Gy(a,e){const t=Qr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Vy(a,e){a.uniform1iv(this.addr,e)}function Hy(a,e){a.uniform2iv(this.addr,e)}function Wy(a,e){a.uniform3iv(this.addr,e)}function Xy(a,e){a.uniform4iv(this.addr,e)}function Yy(a,e){a.uniform1uiv(this.addr,e)}function qy(a,e){a.uniform2uiv(this.addr,e)}function Zy(a,e){a.uniform3uiv(this.addr,e)}function Ky(a,e){a.uniform4uiv(this.addr,e)}function Jy(a,e,t){const n=this.cache,i=e.length,r=Sl(t,i);Pt(n,r)||(a.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Np,r[s])}function jy(a,e,t){const n=this.cache,i=e.length,r=Sl(t,i);Pt(n,r)||(a.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Op,r[s])}function Qy(a,e,t){const n=this.cache,i=e.length,r=Sl(t,i);Pt(n,r)||(a.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||kp,r[s])}function $y(a,e,t){const n=this.cache,i=e.length,r=Sl(t,i);Pt(n,r)||(a.uniform1iv(this.addr,r),It(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Fp,r[s])}function ex(a){switch(a){case 5126:return Ny;case 35664:return Fy;case 35665:return Oy;case 35666:return ky;case 35674:return By;case 35675:return zy;case 35676:return Gy;case 5124:case 35670:return Vy;case 35667:case 35671:return Hy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return Yy;case 36294:return qy;case 36295:return Zy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return $y}}class tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dy(t.type)}}class nx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ex(t.type)}}class ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function ld(a,e){a.seq.push(e),a.map[e.id]=e}function rx(a,e,t){const n=a.name,i=n.length;for(Cc.lastIndex=0;;){const r=Cc.exec(n),s=Cc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===i){ld(t,c===void 0?new tx(o,a,e):new nx(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new ix(o),ld(t,u)),t=u}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);rx(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function cd(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const sx=37297;let ax=0;function ox(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function lx(a){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(a);let n;switch(e===t?n="":e===Ys&&t===Xs?n="LinearDisplayP3ToLinearSRGB":e===Xs&&t===Ys&&(n="LinearSRGBToLinearDisplayP3"),a){case hi:case oa:return[n,"LinearTransferOETF"];case vn:case _l:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function hd(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ox(a.getShaderSource(e),s)}else return i}function cx(a,e){const t=lx(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hx(a,e){let t;switch(e){case sp:t="Linear";break;case ap:t="Reinhard";break;case op:t="OptimizedCineon";break;case lp:t="ACESFilmic";break;case hp:t="AgX";break;case up:t="Neutral";break;case cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ux(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function dx(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fx(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function Ss(a){return a!==""}function ud(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dd(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const px=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(a){return a.replace(px,gx)}const mx=new Map;function gx(a,e){let t=Qe[e];if(t===void 0){const n=mx.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}const vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(a){return a.replace(vx,_x)}function _x(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function pd(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yx(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===If?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function xx(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case oi:case wi:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mx(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function bx(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case sa:e="ENVMAP_BLENDING_MULTIPLY";break;case ip:e="ENVMAP_BLENDING_MIX";break;case rp:e="ENVMAP_BLENDING_ADD";break}return e}function Sx(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function wx(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=yx(t),c=xx(t),h=Mx(t),u=bx(t),d=Sx(t),f=ux(t),p=dx(r),v=i.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ss).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ss).join(`
`),m.length>0&&(m+=`
`)):(g=[pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),m=[pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ai?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,cx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),s=sh(s),s=ud(s,t),s=dd(s,t),o=sh(o),o=ud(o,t),o=dd(o,t),s=fd(s),o=fd(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+g+s,x=y+m+o,C=cd(i,i.VERTEX_SHADER,_),E=cd(i,i.FRAGMENT_SHADER,x);i.attachShader(v,C),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(D){if(a.debug.checkShaderErrors){const U=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(E).trim();let V=!0,B=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,v,C,E);else{const j=hd(i,C,"vertex"),Y=hd(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+j+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||O==="")&&(B=!1);B&&(D.diagnostics={runnable:V,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:O,prefix:m}})}i.deleteShader(C),i.deleteShader(E),R=new yo(i,v),S=fx(i,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(v,sx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ax++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}let Ax=0;class Ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tx(e),t.set(e,n)),n}}class Tx{constructor(e){this.id=Ax++,this.code=e,this.usedTimes=0}}function Cx(a,e,t,n,i,r,s){const o=new xl,l=new Ex,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,D,U,N){const O=U.fog,V=N.geometry,B=S.isMeshStandardMaterial?U.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),Y=j&&j.mapping===Jr?j.image.height:null,Q=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const J=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,F=J!==void 0?J.length:0;let X=0;V.morphAttributes.position!==void 0&&(X=1),V.morphAttributes.normal!==void 0&&(X=2),V.morphAttributes.color!==void 0&&(X=3);let se,k,z,re;if(Q){const Fe=Pn[Q];se=Fe.vertexShader,k=Fe.fragmentShader}else se=S.vertexShader,k=S.fragmentShader,l.update(S),z=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);const W=a.getRenderTarget(),le=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,be=!!S.map,ye=!!S.matcap,T=!!j,de=!!S.aoMap,he=!!S.lightMap,fe=!!S.bumpMap,ne=!!S.normalMap,Ee=!!S.displacementMap,ae=!!S.emissiveMap,pe=!!S.metalnessMap,I=!!S.roughnessMap,b=S.anisotropy>0,G=S.clearcoat>0,K=S.dispersion>0,te=S.iridescence>0,$=S.sheen>0,Ie=S.transmission>0,ue=b&&!!S.anisotropyMap,ve=G&&!!S.clearcoatMap,Te=G&&!!S.clearcoatNormalMap,ge=G&&!!S.clearcoatRoughnessMap,we=te&&!!S.iridescenceMap,ke=te&&!!S.iridescenceThicknessMap,Ce=$&&!!S.sheenColorMap,Me=$&&!!S.sheenRoughnessMap,Se=!!S.specularMap,Ue=!!S.specularColorMap,Xe=!!S.specularIntensityMap,A=Ie&&!!S.transmissionMap,Z=Ie&&!!S.thicknessMap,H=!!S.gradientMap,ie=!!S.alphaMap,Ae=S.alphaTest>0,Pe=!!S.alphaHash,Le=!!S.extensions;let je=ai;S.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(je=a.toneMapping);const Ze={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:k,defines:S.defines,customVertexShaderID:z,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:le,instancingColor:le&&N.instanceColor!==null,instancingMorph:le&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?a.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:hi,alphaToCoverage:!!S.alphaToCoverage,map:be,matcap:ye,envMap:T,envMapMode:T&&j.mapping,envMapCubeUVHeight:Y,aoMap:de,lightMap:he,bumpMap:fe,normalMap:ne,displacementMap:d&&Ee,emissiveMap:ae,normalMapObjectSpace:ne&&S.normalMapType===vp,normalMapTangentSpace:ne&&S.normalMapType===Ai,metalnessMap:pe,roughnessMap:I,anisotropy:b,anisotropyMap:ue,clearcoat:G,clearcoatMap:ve,clearcoatNormalMap:Te,clearcoatRoughnessMap:ge,dispersion:K,iridescence:te,iridescenceMap:we,iridescenceThicknessMap:ke,sheen:$,sheenColorMap:Ce,sheenRoughnessMap:Me,specularMap:Se,specularColorMap:Ue,specularIntensityMap:Xe,transmission:Ie,transmissionMap:A,thicknessMap:Z,gradientMap:H,opaque:S.transparent===!1&&S.blending===er&&S.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ae,alphaHash:Pe,combine:S.combine,mapUv:be&&v(S.map.channel),aoMapUv:de&&v(S.aoMap.channel),lightMapUv:he&&v(S.lightMap.channel),bumpMapUv:fe&&v(S.bumpMap.channel),normalMapUv:ne&&v(S.normalMap.channel),displacementMapUv:Ee&&v(S.displacementMap.channel),emissiveMapUv:ae&&v(S.emissiveMap.channel),metalnessMapUv:pe&&v(S.metalnessMap.channel),roughnessMapUv:I&&v(S.roughnessMap.channel),anisotropyMapUv:ue&&v(S.anisotropyMap.channel),clearcoatMapUv:ve&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(S.sheenRoughnessMap.channel),specularMapUv:Se&&v(S.specularMap.channel),specularColorMapUv:Ue&&v(S.specularColorMap.channel),specularIntensityMapUv:Xe&&v(S.specularIntensityMap.channel),transmissionMapUv:A&&v(S.transmissionMap.channel),thicknessMapUv:Z&&v(S.thicknessMap.channel),alphaMapUv:ie&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ne||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(be||ie),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:X,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:a.shadowMap.enabled&&D.length>0,shadowMapType:a.shadowMap.type,toneMapping:je,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===jt,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Le&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&S.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(a.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),S.push(o.mask)}function x(S){const M=p[S.type];let D;if(M){const U=Pn[M];D=Oh.clone(U.uniforms)}else D=S.uniforms;return D}function C(S,M){let D;for(let U=0,N=h.length;U<N;U++){const O=h[U];if(O.cacheKey===M){D=O,++D.usedTimes;break}}return D===void 0&&(D=new wx(a,M,S,r),h.push(D)),D}function E(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:x,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:R}}function Rx(){let a=new WeakMap;function e(r){let s=a.get(r);return s===void 0&&(s={},a.set(r,s)),s}function t(r){a.delete(r)}function n(r,s,o){a.get(r)[s]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Px(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function md(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function gd(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(u,d,f,p,v,g){let m=a[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:g},a[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=g),e++,m}function o(u,d,f,p,v,g){const m=s(u,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(u,d,f,p,v,g){const m=s(u,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||Px),n.length>1&&n.sort(d||md),i.length>1&&i.sort(d||md)}function h(){for(let u=e,d=a.length;u<d;u++){const f=a[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Ix(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new gd,a.set(n,[s])):i>=r.length?(s=new gd,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function Lx(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return a[e.id]=t,t}}}function Ux(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Dx=0;function Nx(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Fx(a){const e=new Lx,t=Ux(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new We,s=new We;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,y=0,_=0,x=0,C=0,E=0,w=0;c.sort(Nx);for(let S=0,M=c.length;S<M;S++){const D=c[S],U=D.color,N=D.intensity,O=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=U.r*N,u+=U.g*N,d+=U.b*N;else if(D.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(D.sh.coefficients[B],N);w++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,Y=t.get(D);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=B,f++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(U).multiplyScalar(N),B.distance=O,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,n.spot[v]=B;const j=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,j.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=j.matrix,D.castShadow){const Y=t.get(D);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=V,x++}v++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(U).multiplyScalar(N),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=B,g++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const j=D.shadow,Y=t.get(D);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=D.shadow.matrix,_++}n.point[p]=B,p++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(N),B.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[m]=B,m++}}g>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==p||R.spotLength!==v||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==y||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=f,R.pointLength=p,R.spotLength=v,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=y,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=w,n.version=Dx++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0;const g=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const _=c[m];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),s.identity(),r.copy(_.matrixWorld),r.premultiply(g),s.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),p++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function vd(a){const e=new Fx(a),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function s(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function Ox(a){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let o;return s===void 0?(o=new vd(a),e.set(i,[o])):r>=s.length?(o=new vd(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class wl extends Yt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Al extends Yt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`;function zx(a,e,t){let n=new ca;const i=new me,r=new me,s=new lt,o=new wl({depthPacking:Ph}),l=new Al,c={},h=t.maxTextureSize,u={[Wn]:Ht,[Ht]:Wn,[jt]:jt},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:kx,fragmentShader:Bx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new qe;p.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new et(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let m=this.type;this.render=function(E,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const S=a.getRenderTarget(),M=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),U=a.state;U.setBlending(si),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=m!==Bn&&this.type===Bn,O=m===Bn&&this.type!==Bn;for(let V=0,B=E.length;V<B;V++){const j=E[V],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const Q=Y.getFrameExtents();if(i.multiply(Q),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,Y.mapSize.y=r.y)),Y.map===null||N===!0||O===!0){const F=this.type!==Bn?{minFilter:Rt,magFilter:Rt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Un(i.x,i.y,F),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const J=Y.getViewportCount();for(let F=0;F<J;F++){const X=Y.getViewport(F);s.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),U.viewport(s),Y.updateMatrices(j,F),n=Y.getFrustum(),x(w,R,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===Bn&&y(Y,R),Y.needsUpdate=!1}m=this.type,g.needsUpdate=!1,a.setRenderTarget(S,M,D)};function y(E,w){const R=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Un(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,a.setRenderTarget(E.mapPass),a.clear(),a.renderBufferDirect(w,null,R,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,a.setRenderTarget(E.map),a.clear(),a.renderBufferDirect(w,null,R,f,v,null)}function _(E,w,R,S){let M=null;const D=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?l:o,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=M.uuid,N=w.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let V=O[N];V===void 0&&(V=M.clone(),O[N]=V,w.addEventListener("dispose",C)),M=V}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Bn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=a.properties.get(M);U.light=R}return M}function x(E,w,R,S,M){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const N=e.update(E),O=E.material;if(Array.isArray(O)){const V=N.groups;for(let B=0,j=V.length;B<j;B++){const Y=V[B],Q=O[Y.materialIndex];if(Q&&Q.visible){const J=_(E,Q,S,M);E.onBeforeShadow(a,E,w,R,N,J,Y),a.renderBufferDirect(R,null,N,J,E,Y),E.onAfterShadow(a,E,w,R,N,J,Y)}}}else if(O.visible){const V=_(E,O,S,M);E.onBeforeShadow(a,E,w,R,N,V,null),a.renderBufferDirect(R,null,N,V,E,null),E.onAfterShadow(a,E,w,R,N,V,null)}}const U=E.children;for(let N=0,O=U.length;N<O;N++)x(U[N],w,R,S,M)}function C(E){E.target.removeEventListener("dispose",C);for(const R in c){const S=c[R],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function Gx(a){function e(){let A=!1;const Z=new lt;let H=null;const ie=new lt(0,0,0,0);return{setMask:function(Ae){H!==Ae&&!A&&(a.colorMask(Ae,Ae,Ae,Ae),H=Ae)},setLocked:function(Ae){A=Ae},setClear:function(Ae,Pe,Le,je,Ze){Ze===!0&&(Ae*=je,Pe*=je,Le*=je),Z.set(Ae,Pe,Le,je),ie.equals(Z)===!1&&(a.clearColor(Ae,Pe,Le,je),ie.copy(Z))},reset:function(){A=!1,H=null,ie.set(-1,0,0,0)}}}function t(){let A=!1,Z=null,H=null,ie=null;return{setTest:function(Ae){Ae?re(a.DEPTH_TEST):W(a.DEPTH_TEST)},setMask:function(Ae){Z!==Ae&&!A&&(a.depthMask(Ae),Z=Ae)},setFunc:function(Ae){if(H!==Ae){switch(Ae){case Jf:a.depthFunc(a.NEVER);break;case jf:a.depthFunc(a.ALWAYS);break;case Qf:a.depthFunc(a.LESS);break;case ks:a.depthFunc(a.LEQUAL);break;case $f:a.depthFunc(a.EQUAL);break;case ep:a.depthFunc(a.GEQUAL);break;case tp:a.depthFunc(a.GREATER);break;case np:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}H=Ae}},setLocked:function(Ae){A=Ae},setClear:function(Ae){ie!==Ae&&(a.clearDepth(Ae),ie=Ae)},reset:function(){A=!1,Z=null,H=null,ie=null}}}function n(){let A=!1,Z=null,H=null,ie=null,Ae=null,Pe=null,Le=null,je=null,Ze=null;return{setTest:function(Fe){A||(Fe?re(a.STENCIL_TEST):W(a.STENCIL_TEST))},setMask:function(Fe){Z!==Fe&&!A&&(a.stencilMask(Fe),Z=Fe)},setFunc:function(Fe,Ke,it){(H!==Fe||ie!==Ke||Ae!==it)&&(a.stencilFunc(Fe,Ke,it),H=Fe,ie=Ke,Ae=it)},setOp:function(Fe,Ke,it){(Pe!==Fe||Le!==Ke||je!==it)&&(a.stencilOp(Fe,Ke,it),Pe=Fe,Le=Ke,je=it)},setLocked:function(Fe){A=Fe},setClear:function(Fe){Ze!==Fe&&(a.clearStencil(Fe),Ze=Fe)},reset:function(){A=!1,Z=null,H=null,ie=null,Ae=null,Pe=null,Le=null,je=null,Ze=null}}}const i=new e,r=new t,s=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,p=!1,v=null,g=null,m=null,y=null,_=null,x=null,C=null,E=new De(0,0,0),w=0,R=!1,S=null,M=null,D=null,U=null,N=null;const O=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const j=a.getParameter(a.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=B>=2);let Y=null,Q={};const J=a.getParameter(a.SCISSOR_BOX),F=a.getParameter(a.VIEWPORT),X=new lt().fromArray(J),se=new lt().fromArray(F);function k(A,Z,H,ie){const Ae=new Uint8Array(4),Pe=a.createTexture();a.bindTexture(A,Pe),a.texParameteri(A,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(A,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Le=0;Le<H;Le++)A===a.TEXTURE_3D||A===a.TEXTURE_2D_ARRAY?a.texImage3D(Z,0,a.RGBA,1,1,ie,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(Z+Le,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return Pe}const z={};z[a.TEXTURE_2D]=k(a.TEXTURE_2D,a.TEXTURE_2D,1),z[a.TEXTURE_CUBE_MAP]=k(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[a.TEXTURE_2D_ARRAY]=k(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),z[a.TEXTURE_3D]=k(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),s.setClear(0),re(a.DEPTH_TEST),r.setFunc(ks),fe(!1),ne(jc),re(a.CULL_FACE),de(si);function re(A){c[A]!==!0&&(a.enable(A),c[A]=!0)}function W(A){c[A]!==!1&&(a.disable(A),c[A]=!1)}function le(A,Z){return h[A]!==Z?(a.bindFramebuffer(A,Z),h[A]=Z,A===a.DRAW_FRAMEBUFFER&&(h[a.FRAMEBUFFER]=Z),A===a.FRAMEBUFFER&&(h[a.DRAW_FRAMEBUFFER]=Z),!0):!1}function xe(A,Z){let H=d,ie=!1;if(A){H=u.get(Z),H===void 0&&(H=[],u.set(Z,H));const Ae=A.textures;if(H.length!==Ae.length||H[0]!==a.COLOR_ATTACHMENT0){for(let Pe=0,Le=Ae.length;Pe<Le;Pe++)H[Pe]=a.COLOR_ATTACHMENT0+Pe;H.length=Ae.length,ie=!0}}else H[0]!==a.BACK&&(H[0]=a.BACK,ie=!0);ie&&a.drawBuffers(H)}function be(A){return f!==A?(a.useProgram(A),f=A,!0):!1}const ye={[bi]:a.FUNC_ADD,[Uf]:a.FUNC_SUBTRACT,[Df]:a.FUNC_REVERSE_SUBTRACT};ye[Nf]=a.MIN,ye[Ff]=a.MAX;const T={[Of]:a.ZERO,[kf]:a.ONE,[Bf]:a.SRC_COLOR,[So]:a.SRC_ALPHA,[Xf]:a.SRC_ALPHA_SATURATE,[Hf]:a.DST_COLOR,[Gf]:a.DST_ALPHA,[zf]:a.ONE_MINUS_SRC_COLOR,[wo]:a.ONE_MINUS_SRC_ALPHA,[Wf]:a.ONE_MINUS_DST_COLOR,[Vf]:a.ONE_MINUS_DST_ALPHA,[Yf]:a.CONSTANT_COLOR,[qf]:a.ONE_MINUS_CONSTANT_COLOR,[Zf]:a.CONSTANT_ALPHA,[Kf]:a.ONE_MINUS_CONSTANT_ALPHA};function de(A,Z,H,ie,Ae,Pe,Le,je,Ze,Fe){if(A===si){p===!0&&(W(a.BLEND),p=!1);return}if(p===!1&&(re(a.BLEND),p=!0),A!==Lf){if(A!==v||Fe!==R){if((g!==bi||_!==bi)&&(a.blendEquation(a.FUNC_ADD),g=bi,_=bi),Fe)switch(A){case er:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Qc:a.blendFunc(a.ONE,a.ONE);break;case $c:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case eh:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case er:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Qc:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case $c:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case eh:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}m=null,y=null,x=null,C=null,E.set(0,0,0),w=0,v=A,R=Fe}return}Ae=Ae||Z,Pe=Pe||H,Le=Le||ie,(Z!==g||Ae!==_)&&(a.blendEquationSeparate(ye[Z],ye[Ae]),g=Z,_=Ae),(H!==m||ie!==y||Pe!==x||Le!==C)&&(a.blendFuncSeparate(T[H],T[ie],T[Pe],T[Le]),m=H,y=ie,x=Pe,C=Le),(je.equals(E)===!1||Ze!==w)&&(a.blendColor(je.r,je.g,je.b,Ze),E.copy(je),w=Ze),v=A,R=!1}function he(A,Z){A.side===jt?W(a.CULL_FACE):re(a.CULL_FACE);let H=A.side===Ht;Z&&(H=!H),fe(H),A.blending===er&&A.transparent===!1?de(si):de(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),r.setFunc(A.depthFunc),r.setTest(A.depthTest),r.setMask(A.depthWrite),i.setMask(A.colorWrite);const ie=A.stencilWrite;s.setTest(ie),ie&&(s.setMask(A.stencilWriteMask),s.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),s.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ae(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?re(a.SAMPLE_ALPHA_TO_COVERAGE):W(a.SAMPLE_ALPHA_TO_COVERAGE)}function fe(A){S!==A&&(A?a.frontFace(a.CW):a.frontFace(a.CCW),S=A)}function ne(A){A!==Rf?(re(a.CULL_FACE),A!==M&&(A===jc?a.cullFace(a.BACK):A===Pf?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):W(a.CULL_FACE),M=A}function Ee(A){A!==D&&(V&&a.lineWidth(A),D=A)}function ae(A,Z,H){A?(re(a.POLYGON_OFFSET_FILL),(U!==Z||N!==H)&&(a.polygonOffset(Z,H),U=Z,N=H)):W(a.POLYGON_OFFSET_FILL)}function pe(A){A?re(a.SCISSOR_TEST):W(a.SCISSOR_TEST)}function I(A){A===void 0&&(A=a.TEXTURE0+O-1),Y!==A&&(a.activeTexture(A),Y=A)}function b(A,Z,H){H===void 0&&(Y===null?H=a.TEXTURE0+O-1:H=Y);let ie=Q[H];ie===void 0&&(ie={type:void 0,texture:void 0},Q[H]=ie),(ie.type!==A||ie.texture!==Z)&&(Y!==H&&(a.activeTexture(H),Y=H),a.bindTexture(A,Z||z[A]),ie.type=A,ie.texture=Z)}function G(){const A=Q[Y];A!==void 0&&A.type!==void 0&&(a.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function K(){try{a.compressedTexImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function te(){try{a.compressedTexImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $(){try{a.texSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ie(){try{a.texSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ve(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Te(){try{a.texStorage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ge(){try{a.texStorage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function we(){try{a.texImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ke(){try{a.texImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ce(A){X.equals(A)===!1&&(a.scissor(A.x,A.y,A.z,A.w),X.copy(A))}function Me(A){se.equals(A)===!1&&(a.viewport(A.x,A.y,A.z,A.w),se.copy(A))}function Se(A,Z){let H=l.get(Z);H===void 0&&(H=new WeakMap,l.set(Z,H));let ie=H.get(A);ie===void 0&&(ie=a.getUniformBlockIndex(Z,A.name),H.set(A,ie))}function Ue(A,Z){const ie=l.get(Z).get(A);o.get(Z)!==ie&&(a.uniformBlockBinding(Z,ie,A.__bindingPointIndex),o.set(Z,ie))}function Xe(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),c={},Y=null,Q={},h={},u=new WeakMap,d=[],f=null,p=!1,v=null,g=null,m=null,y=null,_=null,x=null,C=null,E=new De(0,0,0),w=0,R=!1,S=null,M=null,D=null,U=null,N=null,X.set(0,0,a.canvas.width,a.canvas.height),se.set(0,0,a.canvas.width,a.canvas.height),i.reset(),r.reset(),s.reset()}return{buffers:{color:i,depth:r,stencil:s},enable:re,disable:W,bindFramebuffer:le,drawBuffers:xe,useProgram:be,setBlending:de,setMaterial:he,setFlipSided:fe,setCullFace:ne,setLineWidth:Ee,setPolygonOffset:ae,setScissorTest:pe,activeTexture:I,bindTexture:b,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:we,texImage3D:ke,updateUBOMapping:Se,uniformBlockBinding:Ue,texStorage2D:Te,texStorage3D:ge,texSubImage2D:$,texSubImage3D:Ie,compressedTexSubImage2D:ue,compressedTexSubImage3D:ve,scissor:Ce,viewport:Me,reset:Xe}}function Vx(a,e){const t=a.image&&a.image.width?a.image.width/a.image.height:1;return t>e?(a.repeat.x=1,a.repeat.y=t/e,a.offset.x=0,a.offset.y=(1-a.repeat.y)/2):(a.repeat.x=e/t,a.repeat.y=1,a.offset.x=(1-a.repeat.x)/2,a.offset.y=0),a}function Hx(a,e){const t=a.image&&a.image.width?a.image.width/a.image.height:1;return t>e?(a.repeat.x=e/t,a.repeat.y=1,a.offset.x=(1-a.repeat.x)/2,a.offset.y=0):(a.repeat.x=1,a.repeat.y=t/e,a.offset.x=0,a.offset.y=(1-a.repeat.y)/2),a}function Wx(a){return a.repeat.x=1,a.repeat.y=1,a.offset.x=0,a.offset.y=0,a}function ah(a,e,t,n){const i=Xx(n);switch(t){case Ah:return a*e;case fl:return a*e;case Eh:return a*e*2;case pl:return a*e/i.components*i.byteLength;case aa:return a*e/i.components*i.byteLength;case Th:return a*e*2/i.components*i.byteLength;case ml:return a*e*2/i.components*i.byteLength;case dl:return a*e*3/i.components*i.byteLength;case $t:return a*e*4/i.components*i.byteLength;case gl:return a*e*4/i.components*i.byteLength;case Es:case Ts:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Cs:case Rs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Eo:case Co:return Math.max(a,16)*Math.max(e,8)/4;case Ao:case To:return Math.max(a,8)*Math.max(e,8)/2;case Ro:case Po:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Io:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ko:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ps:case Yo:case qo:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ch:case Zo:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Ko:case Jo:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xx(a){switch(a){case Xn:case bh:return{byteLength:1,components:1};case qr:case Sh:case jr:return{byteLength:2,components:1};case hl:case ul:return{byteLength:2,components:4};case li:case cl:case an:return{byteLength:4,components:1};case wh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}const Yx={contain:Vx,cover:Hx,fill:Wx,getByteLength:ah};function qx(a,e,t,n,i,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,b){return f?new OffscreenCanvas(I,b):Ks("canvas")}function v(I,b,G){let K=1;const te=pe(I);if((te.width>G||te.height>G)&&(K=G/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(K*te.width),Ie=Math.floor(K*te.height);u===void 0&&(u=p($,Ie));const ue=b?p($,Ie):u;return ue.width=$,ue.height=Ie,ue.getContext("2d").drawImage(I,0,0,$,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Ie+")."),ue}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==Rt&&I.minFilter!==gt}function m(I){a.generateMipmap(I)}function y(I,b,G,K,te=!1){if(I!==null){if(a[I]!==void 0)return a[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=b;if(b===a.RED&&(G===a.FLOAT&&($=a.R32F),G===a.HALF_FLOAT&&($=a.R16F),G===a.UNSIGNED_BYTE&&($=a.R8)),b===a.RED_INTEGER&&(G===a.UNSIGNED_BYTE&&($=a.R8UI),G===a.UNSIGNED_SHORT&&($=a.R16UI),G===a.UNSIGNED_INT&&($=a.R32UI),G===a.BYTE&&($=a.R8I),G===a.SHORT&&($=a.R16I),G===a.INT&&($=a.R32I)),b===a.RG&&(G===a.FLOAT&&($=a.RG32F),G===a.HALF_FLOAT&&($=a.RG16F),G===a.UNSIGNED_BYTE&&($=a.RG8)),b===a.RG_INTEGER&&(G===a.UNSIGNED_BYTE&&($=a.RG8UI),G===a.UNSIGNED_SHORT&&($=a.RG16UI),G===a.UNSIGNED_INT&&($=a.RG32UI),G===a.BYTE&&($=a.RG8I),G===a.SHORT&&($=a.RG16I),G===a.INT&&($=a.RG32I)),b===a.RGB&&G===a.UNSIGNED_INT_5_9_9_9_REV&&($=a.RGB9_E5),b===a.RGBA){const Ie=te?Ws:ct.getTransfer(K);G===a.FLOAT&&($=a.RGBA32F),G===a.HALF_FLOAT&&($=a.RGBA16F),G===a.UNSIGNED_BYTE&&($=Ie===ft?a.SRGB8_ALPHA8:a.RGBA8),G===a.UNSIGNED_SHORT_4_4_4_4&&($=a.RGBA4),G===a.UNSIGNED_SHORT_5_5_5_1&&($=a.RGB5_A1)}return($===a.R16F||$===a.R32F||$===a.RG16F||$===a.RG32F||$===a.RGBA16F||$===a.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(I,b){let G;return I?b===null||b===li||b===sr?G=a.DEPTH24_STENCIL8:b===an?G=a.DEPTH32F_STENCIL8:b===qr&&(G=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===li||b===sr?G=a.DEPTH_COMPONENT24:b===an?G=a.DEPTH_COMPONENT32F:b===qr&&(G=a.DEPTH_COMPONENT16),G}function x(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Rt&&I.minFilter!==gt?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function C(I){const b=I.target;b.removeEventListener("dispose",C),w(b),b.isVideoTexture&&h.delete(b)}function E(I){const b=I.target;b.removeEventListener("dispose",E),S(b)}function w(I){const b=n.get(I);if(b.__webglInit===void 0)return;const G=I.source,K=d.get(G);if(K){const te=K[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(I),Object.keys(K).length===0&&d.delete(G)}n.remove(I)}function R(I){const b=n.get(I);a.deleteTexture(b.__webglTexture);const G=I.source,K=d.get(G);delete K[b.__cacheKey],s.memory.textures--}function S(I){const b=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let te=0;te<b.__webglFramebuffer[K].length;te++)a.deleteFramebuffer(b.__webglFramebuffer[K][te]);else a.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)a.deleteFramebuffer(b.__webglFramebuffer[K]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=I.textures;for(let K=0,te=G.length;K<te;K++){const $=n.get(G[K]);$.__webglTexture&&(a.deleteTexture($.__webglTexture),s.memory.textures--),n.remove(G[K])}n.remove(I)}let M=0;function D(){M=0}function U(){const I=M;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),M+=1,I}function N(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function O(I,b){const G=n.get(I);if(I.isVideoTexture&&Ee(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const K=I.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(G,I,b);return}}t.bindTexture(a.TEXTURE_2D,G.__webglTexture,a.TEXTURE0+b)}function V(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){se(G,I,b);return}t.bindTexture(a.TEXTURE_2D_ARRAY,G.__webglTexture,a.TEXTURE0+b)}function B(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){se(G,I,b);return}t.bindTexture(a.TEXTURE_3D,G.__webglTexture,a.TEXTURE0+b)}function j(I,b){const G=n.get(I);if(I.version>0&&G.__version!==I.version){k(G,I,b);return}t.bindTexture(a.TEXTURE_CUBE_MAP,G.__webglTexture,a.TEXTURE0+b)}const Y={[Yr]:a.REPEAT,[_n]:a.CLAMP_TO_EDGE,[Gs]:a.MIRRORED_REPEAT},Q={[Rt]:a.NEAREST,[Mh]:a.NEAREST_MIPMAP_NEAREST,[Br]:a.NEAREST_MIPMAP_LINEAR,[gt]:a.LINEAR,[As]:a.LINEAR_MIPMAP_NEAREST,[zn]:a.LINEAR_MIPMAP_LINEAR},J={[_p]:a.NEVER,[wp]:a.ALWAYS,[yp]:a.LESS,[Ih]:a.LEQUAL,[xp]:a.EQUAL,[Sp]:a.GEQUAL,[Mp]:a.GREATER,[bp]:a.NOTEQUAL};function F(I,b){if(b.type===an&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===gt||b.magFilter===As||b.magFilter===Br||b.magFilter===zn||b.minFilter===gt||b.minFilter===As||b.minFilter===Br||b.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,Y[b.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,Y[b.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,Y[b.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,Q[b.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Rt||b.minFilter!==Br&&b.minFilter!==zn||b.type===an&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function X(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",C));const K=b.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const $=N(b);if($!==I.__cacheKey){te[$]===void 0&&(te[$]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,G=!0),te[$].usedTimes++;const Ie=te[I.__cacheKey];Ie!==void 0&&(te[I.__cacheKey].usedTimes--,Ie.usedTimes===0&&R(b)),I.__cacheKey=$,I.__webglTexture=te[$].texture}return G}function se(I,b,G){let K=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=a.TEXTURE_3D);const te=X(I,b),$=b.source;t.bindTexture(K,I.__webglTexture,a.TEXTURE0+G);const Ie=n.get($);if($.version!==Ie.__version||te===!0){t.activeTexture(a.TEXTURE0+G);const ue=ct.getPrimaries(ct.workingColorSpace),ve=b.colorSpace===ni?null:ct.getPrimaries(b.colorSpace),Te=b.colorSpace===ni||ue===ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ge=v(b.image,!1,i.maxTextureSize);ge=ae(b,ge);const we=r.convert(b.format,b.colorSpace),ke=r.convert(b.type);let Ce=y(b.internalFormat,we,ke,b.colorSpace,b.isVideoTexture);F(K,b);let Me;const Se=b.mipmaps,Ue=b.isVideoTexture!==!0,Xe=Ie.__version===void 0||te===!0,A=$.dataReady,Z=x(b,ge);if(b.isDepthTexture)Ce=_(b.format===ar,b.type),Xe&&(Ue?t.texStorage2D(a.TEXTURE_2D,1,Ce,ge.width,ge.height):t.texImage2D(a.TEXTURE_2D,0,Ce,ge.width,ge.height,0,we,ke,null));else if(b.isDataTexture)if(Se.length>0){Ue&&Xe&&t.texStorage2D(a.TEXTURE_2D,Z,Ce,Se[0].width,Se[0].height);for(let H=0,ie=Se.length;H<ie;H++)Me=Se[H],Ue?A&&t.texSubImage2D(a.TEXTURE_2D,H,0,0,Me.width,Me.height,we,ke,Me.data):t.texImage2D(a.TEXTURE_2D,H,Ce,Me.width,Me.height,0,we,ke,Me.data);b.generateMipmaps=!1}else Ue?(Xe&&t.texStorage2D(a.TEXTURE_2D,Z,Ce,ge.width,ge.height),A&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,ge.width,ge.height,we,ke,ge.data)):t.texImage2D(a.TEXTURE_2D,0,Ce,ge.width,ge.height,0,we,ke,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&Xe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Z,Ce,Se[0].width,Se[0].height,ge.depth);for(let H=0,ie=Se.length;H<ie;H++)if(Me=Se[H],b.format!==$t)if(we!==null)if(Ue){if(A)if(b.layerUpdates.size>0){const Ae=ah(Me.width,Me.height,b.format,b.type);for(const Pe of b.layerUpdates){const Le=Me.data.subarray(Pe*Ae/Me.data.BYTES_PER_ELEMENT,(Pe+1)*Ae/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,H,0,0,Pe,Me.width,Me.height,1,we,Le,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,ge.depth,we,Me.data,0,0)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,H,Ce,Me.width,Me.height,ge.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?A&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,ge.depth,we,ke,Me.data):t.texImage3D(a.TEXTURE_2D_ARRAY,H,Ce,Me.width,Me.height,ge.depth,0,we,ke,Me.data)}else{Ue&&Xe&&t.texStorage2D(a.TEXTURE_2D,Z,Ce,Se[0].width,Se[0].height);for(let H=0,ie=Se.length;H<ie;H++)Me=Se[H],b.format!==$t?we!==null?Ue?A&&t.compressedTexSubImage2D(a.TEXTURE_2D,H,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(a.TEXTURE_2D,H,Ce,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?A&&t.texSubImage2D(a.TEXTURE_2D,H,0,0,Me.width,Me.height,we,ke,Me.data):t.texImage2D(a.TEXTURE_2D,H,Ce,Me.width,Me.height,0,we,ke,Me.data)}else if(b.isDataArrayTexture)if(Ue){if(Xe&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Z,Ce,ge.width,ge.height,ge.depth),A)if(b.layerUpdates.size>0){const H=ah(ge.width,ge.height,b.format,b.type);for(const ie of b.layerUpdates){const Ae=ge.data.subarray(ie*H/ge.data.BYTES_PER_ELEMENT,(ie+1)*H/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ie,ge.width,ge.height,1,we,ke,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,we,ke,ge.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ce,ge.width,ge.height,ge.depth,0,we,ke,ge.data);else if(b.isData3DTexture)Ue?(Xe&&t.texStorage3D(a.TEXTURE_3D,Z,Ce,ge.width,ge.height,ge.depth),A&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,we,ke,ge.data)):t.texImage3D(a.TEXTURE_3D,0,Ce,ge.width,ge.height,ge.depth,0,we,ke,ge.data);else if(b.isFramebufferTexture){if(Xe)if(Ue)t.texStorage2D(a.TEXTURE_2D,Z,Ce,ge.width,ge.height);else{let H=ge.width,ie=ge.height;for(let Ae=0;Ae<Z;Ae++)t.texImage2D(a.TEXTURE_2D,Ae,Ce,H,ie,0,we,ke,null),H>>=1,ie>>=1}}else if(Se.length>0){if(Ue&&Xe){const H=pe(Se[0]);t.texStorage2D(a.TEXTURE_2D,Z,Ce,H.width,H.height)}for(let H=0,ie=Se.length;H<ie;H++)Me=Se[H],Ue?A&&t.texSubImage2D(a.TEXTURE_2D,H,0,0,we,ke,Me):t.texImage2D(a.TEXTURE_2D,H,Ce,we,ke,Me);b.generateMipmaps=!1}else if(Ue){if(Xe){const H=pe(ge);t.texStorage2D(a.TEXTURE_2D,Z,Ce,H.width,H.height)}A&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,we,ke,ge)}else t.texImage2D(a.TEXTURE_2D,0,Ce,we,ke,ge);g(b)&&m(K),Ie.__version=$.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function k(I,b,G){if(b.image.length!==6)return;const K=X(I,b),te=b.source;t.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+G);const $=n.get(te);if(te.version!==$.__version||K===!0){t.activeTexture(a.TEXTURE0+G);const Ie=ct.getPrimaries(ct.workingColorSpace),ue=b.colorSpace===ni?null:ct.getPrimaries(b.colorSpace),ve=b.colorSpace===ni||Ie===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Te=b.isCompressedTexture||b.image[0].isCompressedTexture,ge=b.image[0]&&b.image[0].isDataTexture,we=[];for(let ie=0;ie<6;ie++)!Te&&!ge?we[ie]=v(b.image[ie],!0,i.maxCubemapSize):we[ie]=ge?b.image[ie].image:b.image[ie],we[ie]=ae(b,we[ie]);const ke=we[0],Ce=r.convert(b.format,b.colorSpace),Me=r.convert(b.type),Se=y(b.internalFormat,Ce,Me,b.colorSpace),Ue=b.isVideoTexture!==!0,Xe=$.__version===void 0||K===!0,A=te.dataReady;let Z=x(b,ke);F(a.TEXTURE_CUBE_MAP,b);let H;if(Te){Ue&&Xe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Z,Se,ke.width,ke.height);for(let ie=0;ie<6;ie++){H=we[ie].mipmaps;for(let Ae=0;Ae<H.length;Ae++){const Pe=H[Ae];b.format!==$t?Ce!==null?Ue?A&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Se,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?A&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,0,0,Pe.width,Pe.height,Ce,Me,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae,Se,Pe.width,Pe.height,0,Ce,Me,Pe.data)}}}else{if(H=b.mipmaps,Ue&&Xe){H.length>0&&Z++;const ie=pe(we[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Z,Se,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ge){Ue?A&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we[ie].width,we[ie].height,Ce,Me,we[ie].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Se,we[ie].width,we[ie].height,0,Ce,Me,we[ie].data);for(let Ae=0;Ae<H.length;Ae++){const Le=H[Ae].image[ie].image;Ue?A&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,Le.width,Le.height,Ce,Me,Le.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Se,Le.width,Le.height,0,Ce,Me,Le.data)}}else{Ue?A&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce,Me,we[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Se,Ce,Me,we[ie]);for(let Ae=0;Ae<H.length;Ae++){const Pe=H[Ae];Ue?A&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,0,0,Ce,Me,Pe.image[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ae+1,Se,Ce,Me,Pe.image[ie])}}}g(b)&&m(a.TEXTURE_CUBE_MAP),$.__version=te.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function z(I,b,G,K,te,$){const Ie=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),ve=y(G.internalFormat,Ie,ue,G.colorSpace);if(!n.get(b).__hasExternalTextures){const ge=Math.max(1,b.width>>$),we=Math.max(1,b.height>>$);te===a.TEXTURE_3D||te===a.TEXTURE_2D_ARRAY?t.texImage3D(te,$,ve,ge,we,b.depth,0,Ie,ue,null):t.texImage2D(te,$,ve,ge,we,0,Ie,ue,null)}t.bindFramebuffer(a.FRAMEBUFFER,I),ne(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,K,te,n.get(G).__webglTexture,0,fe(b)):(te===a.TEXTURE_2D||te>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,K,te,n.get(G).__webglTexture,$),t.bindFramebuffer(a.FRAMEBUFFER,null)}function re(I,b,G){if(a.bindRenderbuffer(a.RENDERBUFFER,I),b.depthBuffer){const K=b.depthTexture,te=K&&K.isDepthTexture?K.type:null,$=_(b.stencilBuffer,te),Ie=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ue=fe(b);ne(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ue,$,b.width,b.height):G?a.renderbufferStorageMultisample(a.RENDERBUFFER,ue,$,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,$,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ie,a.RENDERBUFFER,I)}else{const K=b.textures;for(let te=0;te<K.length;te++){const $=K[te],Ie=r.convert($.format,$.colorSpace),ue=r.convert($.type),ve=y($.internalFormat,Ie,ue,$.colorSpace),Te=fe(b);G&&ne(b)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Te,ve,b.width,b.height):ne(b)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Te,ve,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,ve,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function W(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,te=fe(b);if(b.depthTexture.format===tr)ne(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,K,0,te):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,K,0);else if(b.depthTexture.format===ar)ne(b)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,K,0,te):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function le(I){const b=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");W(b.__webglFramebuffer,I)}else if(G){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=a.createRenderbuffer(),re(b.__webglDepthbuffer[K],I,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=a.createRenderbuffer(),re(b.__webglDepthbuffer,I,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function xe(I,b,G){const K=n.get(I);b!==void 0&&z(K.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),G!==void 0&&le(I)}function be(I){const b=I.texture,G=n.get(I),K=n.get(b);I.addEventListener("dispose",E);const te=I.textures,$=I.isWebGLCubeRenderTarget===!0,Ie=te.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=a.createTexture()),K.__version=b.version,s.memory.textures++),$){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let ve=0;ve<b.mipmaps.length;ve++)G.__webglFramebuffer[ue][ve]=a.createFramebuffer()}else G.__webglFramebuffer[ue]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)G.__webglFramebuffer[ue]=a.createFramebuffer()}else G.__webglFramebuffer=a.createFramebuffer();if(Ie)for(let ue=0,ve=te.length;ue<ve;ue++){const Te=n.get(te[ue]);Te.__webglTexture===void 0&&(Te.__webglTexture=a.createTexture(),s.memory.textures++)}if(I.samples>0&&ne(I)===!1){G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const ve=te[ue];G.__webglColorRenderbuffer[ue]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,G.__webglColorRenderbuffer[ue]);const Te=r.convert(ve.format,ve.colorSpace),ge=r.convert(ve.type),we=y(ve.internalFormat,Te,ge,ve.colorSpace,I.isXRRenderTarget===!0),ke=fe(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,ke,we,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,G.__webglColorRenderbuffer[ue])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),re(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if($){t.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture),F(a.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)z(G.__webglFramebuffer[ue][ve],I,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else z(G.__webglFramebuffer[ue],I,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(b)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ue=0,ve=te.length;ue<ve;ue++){const Te=te[ue],ge=n.get(Te);t.bindTexture(a.TEXTURE_2D,ge.__webglTexture),F(a.TEXTURE_2D,Te),z(G.__webglFramebuffer,I,Te,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,0),g(Te)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let ue=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),F(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let ve=0;ve<b.mipmaps.length;ve++)z(G.__webglFramebuffer[ve],I,b,a.COLOR_ATTACHMENT0,ue,ve);else z(G.__webglFramebuffer,I,b,a.COLOR_ATTACHMENT0,ue,0);g(b)&&m(ue),t.unbindTexture()}I.depthBuffer&&le(I)}function ye(I){const b=I.textures;for(let G=0,K=b.length;G<K;G++){const te=b[G];if(g(te)){const $=I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,Ie=n.get(te).__webglTexture;t.bindTexture($,Ie),m($),t.unbindTexture()}}}const T=[],de=[];function he(I){if(I.samples>0){if(ne(I)===!1){const b=I.textures,G=I.width,K=I.height;let te=a.COLOR_BUFFER_BIT;const $=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=n.get(I),ue=b.length>1;if(ue)for(let ve=0;ve<b.length;ve++)t.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let ve=0;ve<b.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(te|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(te|=a.STENCIL_BUFFER_BIT)),ue){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[ve]);const Te=n.get(b[ve]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Te,0)}a.blitFramebuffer(0,0,G,K,0,0,G,K,te,a.NEAREST),l===!0&&(T.length=0,de.length=0,T.push(a.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.resolveDepthBuffer===!1&&(T.push($),de.push($),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,de)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<b.length;ve++){t.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.RENDERBUFFER,Ie.__webglColorRenderbuffer[ve]);const Te=n.get(b[ve]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ie.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ve,a.TEXTURE_2D,Te,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const b=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function fe(I){return Math.min(i.maxSamples,I.samples)}function ne(I){const b=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ee(I){const b=s.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function ae(I,b){const G=I.colorSpace,K=I.format,te=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==hi&&G!==ni&&(ct.getTransfer(G)===ft?(K!==$t||te!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function pe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=xe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=z,this.useMultisampledRTT=ne}function Bp(a,e){function t(n,i=ni){let r;const s=ct.getTransfer(i);if(n===Xn)return a.UNSIGNED_BYTE;if(n===hl)return a.UNSIGNED_SHORT_4_4_4_4;if(n===ul)return a.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return a.BYTE;if(n===Sh)return a.SHORT;if(n===qr)return a.UNSIGNED_SHORT;if(n===cl)return a.INT;if(n===li)return a.UNSIGNED_INT;if(n===an)return a.FLOAT;if(n===jr)return a.HALF_FLOAT;if(n===Ah)return a.ALPHA;if(n===dl)return a.RGB;if(n===$t)return a.RGBA;if(n===fl)return a.LUMINANCE;if(n===Eh)return a.LUMINANCE_ALPHA;if(n===tr)return a.DEPTH_COMPONENT;if(n===ar)return a.DEPTH_STENCIL;if(n===pl)return a.RED;if(n===aa)return a.RED_INTEGER;if(n===Th)return a.RG;if(n===ml)return a.RG_INTEGER;if(n===gl)return a.RGBA_INTEGER;if(n===Es||n===Ts||n===Cs||n===Rs)if(s===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Es)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Es)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Eo||n===To||n===Co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ro||n===Po||n===Io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ro||n===Po)return s===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Io)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Uo||n===Do||n===No||n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Go||n===Vo||n===Ho||n===Wo||n===Xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return s===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===Yo||n===qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ps)return s===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ch||n===Zo||n===Ko||n===Jo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}class zp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qi extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zx={type:"move"};class Rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
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

}`;class jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new yt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dn({vertexShader:Kx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qx extends Yn{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const v=new jx,g=t.getContextAttributes();let m=null,y=null;const _=[],x=[],C=new me;let E=null;const w=new Nt;w.layers.enable(1),w.viewport=new lt;const R=new Nt;R.layers.enable(2),R.viewport=new lt;const S=[w,R],M=new zp;M.layers.enable(1),M.layers.enable(2);let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let z=_[k];return z===void 0&&(z=new Rc,_[k]=z),z.getTargetRaySpace()},this.getControllerGrip=function(k){let z=_[k];return z===void 0&&(z=new Rc,_[k]=z),z.getGripSpace()},this.getHand=function(k){let z=_[k];return z===void 0&&(z=new Rc,_[k]=z),z.getHandSpace()};function N(k){const z=x.indexOf(k.inputSource);if(z===-1)return;const re=_[z];re!==void 0&&(re.update(k.inputSource,k.frame,c||s),re.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let k=0;k<_.length;k++){const z=x[k];z!==null&&(x[k]=null,_[k].disconnect(z))}D=null,U=null,v.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const z={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Un(f.framebufferWidth,f.framebufferHeight,{format:$t,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let z=null,re=null,W=null;g.depth&&(W=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=g.stencil?ar:tr,re=g.stencil?sr:li);const le={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(le),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Un(d.textureWidth,d.textureHeight,{format:$t,type:Xn,depthTexture:new Bh(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function V(k){for(let z=0;z<k.removed.length;z++){const re=k.removed[z],W=x.indexOf(re);W>=0&&(x[W]=null,_[W].disconnect(re))}for(let z=0;z<k.added.length;z++){const re=k.added[z];let W=x.indexOf(re);if(W===-1){for(let xe=0;xe<_.length;xe++)if(xe>=x.length){x.push(re),W=xe;break}else if(x[xe]===null){x[xe]=re,W=xe;break}if(W===-1)break}const le=_[W];le&&le.connect(re)}}const B=new L,j=new L;function Y(k,z,re){B.setFromMatrixPosition(z.matrixWorld),j.setFromMatrixPosition(re.matrixWorld);const W=B.distanceTo(j),le=z.projectionMatrix.elements,xe=re.projectionMatrix.elements,be=le[14]/(le[10]-1),ye=le[14]/(le[10]+1),T=(le[9]+1)/le[5],de=(le[9]-1)/le[5],he=(le[8]-1)/le[0],fe=(xe[8]+1)/xe[0],ne=be*he,Ee=be*fe,ae=W/(-he+fe),pe=ae*-he;z.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(pe),k.translateZ(ae),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const I=be+ae,b=ye+ae,G=ne-pe,K=Ee+(W-pe),te=T*ye/b*I,$=de*ye/b*I;k.projectionMatrix.makePerspective(G,K,te,$,I,b),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function Q(k,z){z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;v.texture!==null&&(k.near=v.depthNear,k.far=v.depthFar),M.near=R.near=w.near=k.near,M.far=R.far=w.far=k.far,(D!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,U=M.far,w.near=D,w.far=U,R.near=D,R.far=U,w.updateProjectionMatrix(),R.updateProjectionMatrix(),k.updateProjectionMatrix());const z=k.parent,re=M.cameras;Q(M,z);for(let W=0;W<re.length;W++)Q(re[W],z);re.length===2?Y(M,w,R):M.projectionMatrix.copy(w.projectionMatrix),J(k,M,z)};function J(k,z,re){re===null?k.matrix.copy(z.matrixWorld):(k.matrix.copy(re.matrixWorld),k.matrix.invert(),k.matrix.multiply(z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(z.projectionMatrix),k.projectionMatrixInverse.copy(z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Zr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let F=null;function X(k,z){if(h=z.getViewerPose(c||s),p=z,h!==null){const re=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let W=!1;re.length!==M.cameras.length&&(M.cameras.length=0,W=!0);for(let xe=0;xe<re.length;xe++){const be=re[xe];let ye=null;if(f!==null)ye=f.getViewport(be);else{const de=u.getViewSubImage(d,be);ye=de.viewport,xe===0&&(e.setRenderTargetTextures(y,de.colorTexture,d.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(y))}let T=S[xe];T===void 0&&(T=new Nt,T.layers.enable(xe),T.viewport=new lt,S[xe]=T),T.matrix.fromArray(be.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(be.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(ye.x,ye.y,ye.width,ye.height),xe===0&&(M.matrix.copy(T.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),W===!0&&M.cameras.push(T)}const le=i.enabledFeatures;if(le&&le.includes("depth-sensing")){const xe=u.getDepthInformation(re[0]);xe&&xe.isValid&&xe.texture&&v.init(e,xe,i.renderState)}}for(let re=0;re<_.length;re++){const W=x[re],le=_[re];W!==null&&le!==void 0&&le.update(W,z,c||s)}F&&F(k,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),p=null}const se=new Dp;se.setAnimationLoop(X),this.setAnimationLoop=function(k){F=k},this.dispose=function(){}}}const Fi=new pn,$x=new We;function eM(a,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ip(a)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,_,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ht&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ht&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),_=y.envMap,x=y.envMapRotation;_&&(g.envMap.value=_,Fi.copy(x),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),g.envMapRotation.value.setFromMatrix4($x.makeRotationFromEuler(Fi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ht&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function tM(a,e,t,n){let i={},r={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(p(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",g));const C=_.program;n.updateUBOMapping(y,C);const E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const _=u();y.__bindingPointIndex=_;const x=a.createBuffer(),C=y.__size,E=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,C,E),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,C=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let E=0,w=x.length;E<w;E++){const R=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=R.length;S<M;S++){const D=R[S];if(f(D,E,S,C)===!0){const U=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let O=0;for(let V=0;V<N.length;V++){const B=N[V],j=v(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,U+O,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,O),O+=j.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,U,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function f(y,_,x,C){const E=y.value,w=_+"_"+x;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{const R=C[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function p(y){const _=y.uniforms;let x=0;const C=16;for(let w=0,R=_.length;w<R;w++){const S=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,D=S.length;M<D;M++){const U=S[M],N=Array.isArray(U.value)?U.value:[U.value];for(let O=0,V=N.length;O<V;O++){const B=N[O],j=v(B),Y=x%C;Y!==0&&C-Y<j.boundary&&(x+=C-Y),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=j.storage}}}const E=x%C;return E>0&&(x+=C-E),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){const _=y.target;_.removeEventListener("dispose",g);const x=s.indexOf(_.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function m(){for(const y in i)a.deleteBuffer(i[y]);s=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Gp{constructor(e={}){const{canvas:t=Tp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=s;const f=new Uint32Array(4),p=new Int32Array(4);let v=null,g=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=ai,this.toneMappingExposure=1;const _=this;let x=!1,C=0,E=0,w=null,R=-1,S=null;const M=new lt,D=new lt;let U=null;const N=new De(0);let O=0,V=t.width,B=t.height,j=1,Y=null,Q=null;const J=new lt(0,0,V,B),F=new lt(0,0,V,B);let X=!1;const se=new ca;let k=!1,z=!1;const re=new We,W=new L,le=new lt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function ye(){return w===null?j:1}let T=n;function de(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),T===null){const q="webgl2";if(T=de(q,P),T===null)throw de(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let he,fe,ne,Ee,ae,pe,I,b,G,K,te,$,Ie,ue,ve,Te,ge,we,ke,Ce,Me,Se,Ue,Xe;function A(){he=new cy(T),he.init(),Se=new Bp(T,he),fe=new iy(T,he,e,Se),ne=new Gx(T),Ee=new dy(T),ae=new Rx,pe=new qx(T,he,ne,ae,fe,Se,Ee),I=new sy(_),b=new ly(_),G=new y0(T),Ue=new ty(T,G),K=new hy(T,G,Ee,Ue),te=new py(T,K,G,Ee),ke=new fy(T,fe,pe),Te=new ry(ae),$=new Cx(_,I,b,he,fe,Ue,Te),Ie=new eM(_,ae),ue=new Ix,ve=new Ox(he),we=new ey(_,I,b,ne,te,d,l),ge=new zx(_,te,fe),Xe=new tM(T,Ee,fe,ne),Ce=new ny(T,he,Ee),Me=new uy(T,he,Ee),Ee.programs=$.programs,_.capabilities=fe,_.extensions=he,_.properties=ae,_.renderLists=ue,_.shadowMap=ge,_.state=ne,_.info=Ee}A();const Z=new Qx(_,T);this.xr=Z,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const P=he.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=he.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(P){P!==void 0&&(j=P,this.setSize(V,B,!1))},this.getSize=function(P){return P.set(V,B)},this.setSize=function(P,q,oe=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=P,B=q,t.width=Math.floor(P*j),t.height=Math.floor(q*j),oe===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(V*j,B*j).floor()},this.setDrawingBufferSize=function(P,q,oe){V=P,B=q,j=oe,t.width=Math.floor(P*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,q,oe,ce){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,q,oe,ce),ne.viewport(M.copy(J).multiplyScalar(j).round())},this.getScissor=function(P){return P.copy(F)},this.setScissor=function(P,q,oe,ce){P.isVector4?F.set(P.x,P.y,P.z,P.w):F.set(P,q,oe,ce),ne.scissor(D.copy(F).multiplyScalar(j).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(P){ne.setScissorTest(X=P)},this.setOpaqueSort=function(P){Y=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(P=!0,q=!0,oe=!0){let ce=0;if(P){let ee=!1;if(w!==null){const Re=w.texture.format;ee=Re===gl||Re===ml||Re===aa}if(ee){const Re=w.texture.type,Oe=Re===Xn||Re===li||Re===qr||Re===sr||Re===hl||Re===ul,Be=we.getClearColor(),_e=we.getClearAlpha(),He=Be.r,Ye=Be.g,Ve=Be.b;Oe?(f[0]=He,f[1]=Ye,f[2]=Ve,f[3]=_e,T.clearBufferuiv(T.COLOR,0,f)):(p[0]=He,p[1]=Ye,p[2]=Ve,p[3]=_e,T.clearBufferiv(T.COLOR,0,p))}else ce|=T.COLOR_BUFFER_BIT}q&&(ce|=T.DEPTH_BUFFER_BIT),oe&&(ce|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),ue.dispose(),ve.dispose(),ae.dispose(),I.dispose(),b.dispose(),te.dispose(),Ue.dispose(),Xe.dispose(),$.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",it),Z.removeEventListener("sessionend",pt),tt.stop()};function H(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const P=Ee.autoReset,q=ge.enabled,oe=ge.autoUpdate,ce=ge.needsUpdate,ee=ge.type;A(),Ee.autoReset=P,ge.enabled=q,ge.autoUpdate=oe,ge.needsUpdate=ce,ge.type=ee}function Ae(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Pe(P){const q=P.target;q.removeEventListener("dispose",Pe),Le(q)}function Le(P){je(P),ae.remove(P)}function je(P){const q=ae.get(P).programs;q!==void 0&&(q.forEach(function(oe){$.releaseProgram(oe)}),P.isShaderMaterial&&$.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,oe,ce,ee,Re){q===null&&(q=xe);const Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,Be=ma(P,q,oe,ce,ee);ne.setMaterial(ce,Oe);let _e=oe.index,He=1;if(ce.wireframe===!0){if(_e=K.getWireframeAttribute(oe),_e===void 0)return;He=2}const Ye=oe.drawRange,Ve=oe.attributes.position;let rt=Ye.start*He,mt=(Ye.start+Ye.count)*He;Re!==null&&(rt=Math.max(rt,Re.start*He),mt=Math.min(mt,(Re.start+Re.count)*He)),_e!==null?(rt=Math.max(rt,0),mt=Math.min(mt,_e.count)):Ve!=null&&(rt=Math.max(rt,0),mt=Math.min(mt,Ve.count));const dt=mt-rt;if(dt<0||dt===1/0)return;Ue.setup(ee,ce,Be,oe,_e);let Ut,st=Ce;if(_e!==null&&(Ut=G.get(_e),st=Me,st.setIndex(Ut)),ee.isMesh)ce.wireframe===!0?(ne.setLineWidth(ce.wireframeLinewidth*ye()),st.setMode(T.LINES)):st.setMode(T.TRIANGLES);else if(ee.isLine){let Ge=ce.linewidth;Ge===void 0&&(Ge=1),ne.setLineWidth(Ge*ye()),ee.isLineSegments?st.setMode(T.LINES):ee.isLineLoop?st.setMode(T.LINE_LOOP):st.setMode(T.LINE_STRIP)}else ee.isPoints?st.setMode(T.POINTS):ee.isSprite&&st.setMode(T.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)st.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))st.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Ge=ee._multiDrawStarts,xt=ee._multiDrawCounts,at=ee._multiDrawCount,Zt=_e?G.get(_e).bytesPerElement:1,qn=ae.get(ce).currentProgram.getUniforms();for(let Ct=0;Ct<at;Ct++)qn.setValue(T,"_gl_DrawID",Ct),st.render(Ge[Ct]/Zt,xt[Ct])}else if(ee.isInstancedMesh)st.renderInstances(rt,dt,ee.count);else if(oe.isInstancedBufferGeometry){const Ge=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,xt=Math.min(oe.instanceCount,Ge);st.renderInstances(rt,dt,xt)}else st.render(rt,dt)};function Ze(P,q,oe){P.transparent===!0&&P.side===jt&&P.forceSinglePass===!1?(P.side=Ht,P.needsUpdate=!0,en(P,q,oe),P.side=Wn,P.needsUpdate=!0,en(P,q,oe),P.side=jt):en(P,q,oe)}this.compile=function(P,q,oe=null){oe===null&&(oe=P),g=ve.get(oe),g.init(q),y.push(g),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),P!==oe&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),g.setupLights();const ce=new Set;return P.traverse(function(ee){const Re=ee.material;if(Re)if(Array.isArray(Re))for(let Oe=0;Oe<Re.length;Oe++){const Be=Re[Oe];Ze(Be,oe,ee),ce.add(Be)}else Ze(Re,oe,ee),ce.add(Re)}),y.pop(),g=null,ce},this.compileAsync=function(P,q,oe=null){const ce=this.compile(P,q,oe);return new Promise(ee=>{function Re(){if(ce.forEach(function(Oe){ae.get(Oe).currentProgram.isReady()&&ce.delete(Oe)}),ce.size===0){ee(P);return}setTimeout(Re,10)}he.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Fe=null;function Ke(P){Fe&&Fe(P)}function it(){tt.stop()}function pt(){tt.start()}const tt=new Dp;tt.setAnimationLoop(Ke),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(P){Fe=P,Z.setAnimationLoop(P),P===null?tt.stop():tt.start()},Z.addEventListener("sessionstart",it),Z.addEventListener("sessionend",pt),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(q),q=Z.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,q,w),g=ve.get(P,y.length),g.init(q),y.push(g),re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),se.setFromProjectionMatrix(re),z=this.localClippingEnabled,k=Te.init(this.clippingPlanes,z),v=ue.get(P,m.length),v.init(),m.push(v),Z.enabled===!0&&Z.isPresenting===!0){const Re=_.xr.getDepthSensingMesh();Re!==null&&St(Re,q,-1/0,_.sortObjects)}St(P,q,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,Q),be=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,be&&we.addToRenderList(v,P),this.info.render.frame++,k===!0&&Te.beginShadows();const oe=g.state.shadowsArray;ge.render(oe,P,q),k===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=v.opaque,ee=v.transmissive;if(g.setupLights(),q.isArrayCamera){const Re=q.cameras;if(ee.length>0)for(let Oe=0,Be=Re.length;Oe<Be;Oe++){const _e=Re[Oe];qt(ce,ee,P,_e)}be&&we.render(P);for(let Oe=0,Be=Re.length;Oe<Be;Oe++){const _e=Re[Oe];kt(v,P,_e,_e.viewport)}}else ee.length>0&&qt(ce,ee,P,q),be&&we.render(P),kt(v,P,q);w!==null&&(pe.updateMultisampleRenderTarget(w),pe.updateRenderTargetMipmap(w)),P.isScene===!0&&P.onAfterRender(_,P,q),Ue.resetDefaultState(),R=-1,S=null,y.pop(),y.length>0?(g=y[y.length-1],k===!0&&Te.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function St(P,q,oe,ce){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)oe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||se.intersectsSprite(P)){ce&&le.setFromMatrixPosition(P.matrixWorld).applyMatrix4(re);const Oe=te.update(P),Be=P.material;Be.visible&&v.push(P,Oe,Be,oe,le.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||se.intersectsObject(P))){const Oe=te.update(P),Be=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),le.copy(P.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),le.copy(Oe.boundingSphere.center)),le.applyMatrix4(P.matrixWorld).applyMatrix4(re)),Array.isArray(Be)){const _e=Oe.groups;for(let He=0,Ye=_e.length;He<Ye;He++){const Ve=_e[He],rt=Be[Ve.materialIndex];rt&&rt.visible&&v.push(P,Oe,rt,oe,le.z,Ve)}}else Be.visible&&v.push(P,Oe,Be,oe,le.z,null)}}const Re=P.children;for(let Oe=0,Be=Re.length;Oe<Be;Oe++)St(Re[Oe],q,oe,ce)}function kt(P,q,oe,ce){const ee=P.opaque,Re=P.transmissive,Oe=P.transparent;g.setupLightsView(oe),k===!0&&Te.setGlobalState(_.clippingPlanes,oe),ce&&ne.viewport(M.copy(ce)),ee.length>0&&ln(ee,q,oe),Re.length>0&&ln(Re,q,oe),Oe.length>0&&ln(Oe,q,oe),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function qt(P,q,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new Un(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?jr:Xn,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const Re=g.state.transmissionRenderTarget[ce.id],Oe=ce.viewport||M;Re.setSize(Oe.z,Oe.w);const Be=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(N),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),be?we.render(oe):_.clear();const _e=_.toneMapping;_.toneMapping=ai;const He=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),k===!0&&Te.setGlobalState(_.clippingPlanes,ce),ln(P,oe,ce),pe.updateMultisampleRenderTarget(Re),pe.updateRenderTargetMipmap(Re),he.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ve=0,rt=q.length;Ve<rt;Ve++){const mt=q[Ve],dt=mt.object,Ut=mt.geometry,st=mt.material,Ge=mt.group;if(st.side===jt&&dt.layers.test(ce.layers)){const xt=st.side;st.side=Ht,st.needsUpdate=!0,On(dt,oe,ce,Ut,st,Ge),st.side=xt,st.needsUpdate=!0,Ye=!0}}Ye===!0&&(pe.updateMultisampleRenderTarget(Re),pe.updateRenderTargetMipmap(Re))}_.setRenderTarget(Be),_.setClearColor(N,O),He!==void 0&&(ce.viewport=He),_.toneMapping=_e}function ln(P,q,oe){const ce=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Re=P.length;ee<Re;ee++){const Oe=P[ee],Be=Oe.object,_e=Oe.geometry,He=ce===null?Oe.material:ce,Ye=Oe.group;Be.layers.test(oe.layers)&&On(Be,q,oe,_e,He,Ye)}}function On(P,q,oe,ce,ee,Re){P.onBeforeRender(_,q,oe,ce,ee,Re),P.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.transparent===!0&&ee.side===jt&&ee.forceSinglePass===!1?(ee.side=Ht,ee.needsUpdate=!0,_.renderBufferDirect(oe,q,ce,ee,P,Re),ee.side=Wn,ee.needsUpdate=!0,_.renderBufferDirect(oe,q,ce,ee,P,Re),ee.side=jt):_.renderBufferDirect(oe,q,ce,ee,P,Re),P.onAfterRender(_,q,oe,ce,ee,Re)}function en(P,q,oe){q.isScene!==!0&&(q=xe);const ce=ae.get(P),ee=g.state.lights,Re=g.state.shadowsArray,Oe=ee.state.version,Be=$.getParameters(P,ee.state,Re,q,oe),_e=$.getProgramCacheKey(Be);let He=ce.programs;ce.environment=P.isMeshStandardMaterial?q.environment:null,ce.fog=q.fog,ce.envMap=(P.isMeshStandardMaterial?b:I).get(P.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,He===void 0&&(P.addEventListener("dispose",Pe),He=new Map,ce.programs=He);let Ye=He.get(_e);if(Ye!==void 0){if(ce.currentProgram===Ye&&ce.lightsStateVersion===Oe)return kn(P,Be),Ye}else Be.uniforms=$.getUniforms(P),P.onBeforeCompile(Be,_),Ye=$.acquireProgram(Be,_e),He.set(_e,Ye),ce.uniforms=Be.uniforms;const Ve=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ve.clippingPlanes=Te.uniform),kn(P,Be),ce.needsLights=ql(P),ce.lightsStateVersion=Oe,ce.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMap.value=ee.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotShadowMap.value=ee.state.spotShadowMap,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMap.value=ee.state.pointShadowMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),ce.currentProgram=Ye,ce.uniformsList=null,Ye}function Lt(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=yo.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function kn(P,q){const oe=ae.get(P);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ma(P,q,oe,ce,ee){q.isScene!==!0&&(q=xe),pe.resetTextureUnits();const Re=q.fog,Oe=ce.isMeshStandardMaterial?q.environment:null,Be=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:hi,_e=(ce.isMeshStandardMaterial?b:I).get(ce.envMap||Oe),He=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ye=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ve=!!oe.morphAttributes.position,rt=!!oe.morphAttributes.normal,mt=!!oe.morphAttributes.color;let dt=ai;ce.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(dt=_.toneMapping);const Ut=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,st=Ut!==void 0?Ut.length:0,Ge=ae.get(ce),xt=g.state.lights;if(k===!0&&(z===!0||P!==S)){const Bt=P===S&&ce.id===R;Te.setState(ce,P,Bt)}let at=!1;ce.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==xt.state.version||Ge.outputColorSpace!==Be||ee.isBatchedMesh&&Ge.batching===!1||!ee.isBatchedMesh&&Ge.batching===!0||ee.isBatchedMesh&&Ge.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ge.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ge.instancing===!1||!ee.isInstancedMesh&&Ge.instancing===!0||ee.isSkinnedMesh&&Ge.skinning===!1||!ee.isSkinnedMesh&&Ge.skinning===!0||ee.isInstancedMesh&&Ge.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ge.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ge.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ge.instancingMorph===!1&&ee.morphTexture!==null||Ge.envMap!==_e||ce.fog===!0&&Ge.fog!==Re||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Te.numPlanes||Ge.numIntersection!==Te.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Ye||Ge.morphTargets!==Ve||Ge.morphNormals!==rt||Ge.morphColors!==mt||Ge.toneMapping!==dt||Ge.morphTargetsCount!==st)&&(at=!0):(at=!0,Ge.__version=ce.version);let Zt=Ge.currentProgram;at===!0&&(Zt=en(ce,q,ee));let qn=!1,Ct=!1,Ci=!1;const ut=Zt.getUniforms(),mn=Ge.uniforms;if(ne.useProgram(Zt.program)&&(qn=!0,Ct=!0,Ci=!0),ce.id!==R&&(R=ce.id,Ct=!0),qn||S!==P){ut.setValue(T,"projectionMatrix",P.projectionMatrix),ut.setValue(T,"viewMatrix",P.matrixWorldInverse);const Bt=ut.map.cameraPosition;Bt!==void 0&&Bt.setValue(T,W.setFromMatrixPosition(P.matrixWorld)),fe.logarithmicDepthBuffer&&ut.setValue(T,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&ut.setValue(T,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,Ct=!0,Ci=!0)}if(ee.isSkinnedMesh){ut.setOptional(T,ee,"bindMatrix"),ut.setOptional(T,ee,"bindMatrixInverse");const Bt=ee.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ut.setValue(T,"boneTexture",Bt.boneTexture,pe))}ee.isBatchedMesh&&(ut.setOptional(T,ee,"batchingTexture"),ut.setValue(T,"batchingTexture",ee._matricesTexture,pe),ut.setOptional(T,ee,"batchingIdTexture"),ut.setValue(T,"batchingIdTexture",ee._indirectTexture,pe),ut.setOptional(T,ee,"batchingColorTexture"),ee._colorsTexture!==null&&ut.setValue(T,"batchingColorTexture",ee._colorsTexture,pe));const Ri=oe.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&ke.update(ee,oe,Zt),(Ct||Ge.receiveShadow!==ee.receiveShadow)&&(Ge.receiveShadow=ee.receiveShadow,ut.setValue(T,"receiveShadow",ee.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(mn.envMap.value=_e,mn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),Ct&&(ut.setValue(T,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&es(mn,Ci),Re&&ce.fog===!0&&Ie.refreshFogUniforms(mn,Re),Ie.refreshMaterialUniforms(mn,ce,j,B,g.state.transmissionRenderTarget[P.id]),yo.upload(T,Lt(Ge),mn,pe)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(yo.upload(T,Lt(Ge),mn,pe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&ut.setValue(T,"center",ee.center),ut.setValue(T,"modelViewMatrix",ee.modelViewMatrix),ut.setValue(T,"normalMatrix",ee.normalMatrix),ut.setValue(T,"modelMatrix",ee.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Bt=ce.uniformsGroups;for(let tn=0,Zl=Bt.length;tn<Zl;tn++){const Pi=Bt[tn];Xe.update(Pi,Zt),Xe.bind(Pi,Zt)}}return Zt}function es(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function ql(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(P,q,oe){ae.get(P.texture).__webglTexture=q,ae.get(P.depthTexture).__webglTexture=oe;const ce=ae.get(P);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=oe===void 0,ce.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,q){const oe=ae.get(P);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,oe=0){w=P,C=q,E=oe;let ce=!0,ee=null,Re=!1,Oe=!1;if(P){const _e=ae.get(P);_e.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(T.FRAMEBUFFER,null),ce=!1):_e.__webglFramebuffer===void 0?pe.setupRenderTarget(P):_e.__hasExternalTextures&&pe.rebindTextures(P,ae.get(P.texture).__webglTexture,ae.get(P.depthTexture).__webglTexture);const He=P.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Oe=!0);const Ye=ae.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?ee=Ye[q][oe]:ee=Ye[q],Re=!0):P.samples>0&&pe.useMultisampledRTT(P)===!1?ee=ae.get(P).__webglMultisampledFramebuffer:Array.isArray(Ye)?ee=Ye[oe]:ee=Ye,M.copy(P.viewport),D.copy(P.scissor),U=P.scissorTest}else M.copy(J).multiplyScalar(j).floor(),D.copy(F).multiplyScalar(j).floor(),U=X;if(ne.bindFramebuffer(T.FRAMEBUFFER,ee)&&ce&&ne.drawBuffers(P,ee),ne.viewport(M),ne.scissor(D),ne.setScissorTest(U),Re){const _e=ae.get(P.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+q,_e.__webglTexture,oe)}else if(Oe){const _e=ae.get(P.texture),He=q||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.__webglTexture,oe||0,He)}R=-1},this.readRenderTargetPixels=function(P,q,oe,ce,ee,Re,Oe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){ne.bindFramebuffer(T.FRAMEBUFFER,Be);try{const _e=P.texture,He=_e.format,Ye=_e.type;if(!fe.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-ce&&oe>=0&&oe<=P.height-ee&&T.readPixels(q,oe,ce,ee,Se.convert(He),Se.convert(Ye),Re)}finally{const _e=w!==null?ae.get(w).__webglFramebuffer:null;ne.bindFramebuffer(T.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(P,q,oe,ce,ee,Re,Oe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){ne.bindFramebuffer(T.FRAMEBUFFER,Be);try{const _e=P.texture,He=_e.format,Ye=_e.type;if(!fe.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=P.width-ce&&oe>=0&&oe<=P.height-ee){const Ve=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ve),T.bufferData(T.PIXEL_PACK_BUFFER,Re.byteLength,T.STREAM_READ),T.readPixels(q,oe,ce,ee,Se.convert(He),Se.convert(Ye),0),T.flush();const rt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await Wg(T,rt,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,Ve),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Re)}finally{T.deleteBuffer(Ve),T.deleteSync(rt)}return Re}}finally{const _e=w!==null?ae.get(w).__webglFramebuffer:null;ne.bindFramebuffer(T.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(P,q=null,oe=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1]);const ce=Math.pow(2,-oe),ee=Math.floor(P.image.width*ce),Re=Math.floor(P.image.height*ce),Oe=q!==null?q.x:0,Be=q!==null?q.y:0;pe.setTexture2D(P,0),T.copyTexSubImage2D(T.TEXTURE_2D,oe,0,0,Oe,Be,ee,Re),ne.unbindTexture()},this.copyTextureToTexture=function(P,q,oe=null,ce=null,ee=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,P=arguments[1],q=arguments[2],ee=arguments[3]||0,oe=null);let Re,Oe,Be,_e,He,Ye;oe!==null?(Re=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Be=oe.min.x,_e=oe.min.y):(Re=P.image.width,Oe=P.image.height,Be=0,_e=0),ce!==null?(He=ce.x,Ye=ce.y):(He=0,Ye=0);const Ve=Se.convert(q.format),rt=Se.convert(q.type);pe.setTexture2D(q,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,q.unpackAlignment);const mt=T.getParameter(T.UNPACK_ROW_LENGTH),dt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ut=T.getParameter(T.UNPACK_SKIP_PIXELS),st=T.getParameter(T.UNPACK_SKIP_ROWS),Ge=T.getParameter(T.UNPACK_SKIP_IMAGES),xt=P.isCompressedTexture?P.mipmaps[ee]:P.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,xt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,xt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Be),T.pixelStorei(T.UNPACK_SKIP_ROWS,_e),P.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,ee,He,Ye,Re,Oe,Ve,rt,xt.data):P.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,ee,He,Ye,xt.width,xt.height,Ve,xt.data):T.texSubImage2D(T.TEXTURE_2D,ee,He,Ye,Re,Oe,Ve,rt,xt),T.pixelStorei(T.UNPACK_ROW_LENGTH,mt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,dt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ut),T.pixelStorei(T.UNPACK_SKIP_ROWS,st),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ge),ee===0&&q.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(P,q,oe=null,ce=null,ee=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ce=arguments[1]||null,P=arguments[2],q=arguments[3],ee=arguments[4]||0);let Re,Oe,Be,_e,He,Ye,Ve,rt,mt;const dt=P.isCompressedTexture?P.mipmaps[ee]:P.image;oe!==null?(Re=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Be=oe.max.z-oe.min.z,_e=oe.min.x,He=oe.min.y,Ye=oe.min.z):(Re=dt.width,Oe=dt.height,Be=dt.depth,_e=0,He=0,Ye=0),ce!==null?(Ve=ce.x,rt=ce.y,mt=ce.z):(Ve=0,rt=0,mt=0);const Ut=Se.convert(q.format),st=Se.convert(q.type);let Ge;if(q.isData3DTexture)pe.setTexture3D(q,0),Ge=T.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)pe.setTexture2DArray(q,0),Ge=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,q.unpackAlignment);const xt=T.getParameter(T.UNPACK_ROW_LENGTH),at=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Zt=T.getParameter(T.UNPACK_SKIP_PIXELS),qn=T.getParameter(T.UNPACK_SKIP_ROWS),Ct=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,dt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,dt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,_e),T.pixelStorei(T.UNPACK_SKIP_ROWS,He),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ye),P.isDataTexture||P.isData3DTexture?T.texSubImage3D(Ge,ee,Ve,rt,mt,Re,Oe,Be,Ut,st,dt.data):q.isCompressedArrayTexture?T.compressedTexSubImage3D(Ge,ee,Ve,rt,mt,Re,Oe,Be,Ut,dt.data):T.texSubImage3D(Ge,ee,Ve,rt,mt,Re,Oe,Be,Ut,st,dt),T.pixelStorei(T.UNPACK_ROW_LENGTH,xt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,at),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Zt),T.pixelStorei(T.UNPACK_SKIP_ROWS,qn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ct),ee===0&&q.generateMipmaps&&T.generateMipmap(Ge),ne.unbindTexture()},this.initRenderTarget=function(P){ae.get(P).__webglFramebuffer===void 0&&pe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?pe.setTextureCube(P,0):P.isData3DTexture?pe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?pe.setTexture2DArray(P,0):pe.setTexture2D(P,0),ne.unbindTexture()},this.resetState=function(){C=0,E=0,w=null,ne.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_l?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===oa?"display-p3":"srgb"}}class El{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new El(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new Tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zh extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Uh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new L;class or{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$e(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),n=$e(n,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gh extends Yt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Lr;const fs=new L,Ur=new L,Dr=new L,Nr=new me,ps=new me,Vp=new We,Ha=new L,ms=new L,Wa=new L,_d=new me,Pc=new me,yd=new me;class Hp extends nt{constructor(e=new Gh){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new qe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cl(t,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new or(n,3,0,!1)),Lr.setAttribute("uv",new or(n,2,3,!1))}this.geometry=Lr,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ur.setFromMatrixScale(this.matrixWorld),Vp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Dr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;Xa(Ha.set(-.5,-.5,0),Dr,s,Ur,i,r),Xa(ms.set(.5,-.5,0),Dr,s,Ur,i,r),Xa(Wa.set(.5,.5,0),Dr,s,Ur,i,r),_d.set(0,0),Pc.set(1,0),yd.set(1,1);let o=e.ray.intersectTriangle(Ha,ms,Wa,!1,fs);if(o===null&&(Xa(ms.set(-.5,.5,0),Dr,s,Ur,i,r),Pc.set(0,1),o=e.ray.intersectTriangle(Ha,Wa,ms,!1,fs),o===null))return;const l=e.ray.origin.distanceTo(fs);l<e.near||l>e.far||t.push({distance:l,point:fs.clone(),uv:dn.getInterpolation(fs,Ha,ms,Wa,_d,Pc,yd,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Xa(a,e,t,n,i,r){Nr.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(ps.x=r*Nr.x-i*Nr.y,ps.y=i*Nr.x+r*Nr.y):ps.copy(Nr),a.copy(e),a.x+=ps.x,a.y+=ps.y,a.applyMatrix4(Vp)}const Ya=new L,xd=new L;class Wp extends nt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ya.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Ya);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ya.setFromMatrixPosition(e.matrixWorld),xd.setFromMatrixPosition(this.matrixWorld);const n=Ya.distanceTo(xd)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let s=t[i].distance;if(t[i].object.visible&&(s-=s*t[i].hysteresis),n>=s)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const s=n[i];t.object.levels.push({object:s.object.uuid,distance:s.distance,hysteresis:s.hysteresis})}return t}}const Md=new L,bd=new lt,Sd=new lt,nM=new L,wd=new We,qa=new L,Ic=new Ot,Ad=new We,Lc=new hr;class Xp extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=th,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qa),this.boundingBox.expandByPoint(qa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qa),this.boundingSphere.expandByPoint(qa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ic.copy(this.boundingSphere),Ic.applyMatrix4(i),e.ray.intersectsSphere(Ic)!==!1&&(Ad.copy(i).invert(),Lc.copy(e.ray).applyMatrix4(Ad),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bd.fromBufferAttribute(i.attributes.skinIndex,e),Sd.fromBufferAttribute(i.attributes.skinWeight,e),Md.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Sd.getComponent(r);if(s!==0){const o=bd.getComponent(r);wd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(nM.copy(Md).applyMatrix4(wd),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vh extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ln extends yt{constructor(e=null,t=1,n=1,i,r,s,o,l,c=Rt,h=Rt,u,d){super(null,s,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new We,iM=new We;class Rl{constructor(e=[],t=[]){this.uuid=fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const o=e[r]?e[r].matrixWorld:iM;Ed.multiplyMatrices(o,t[r]),Ed.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Rl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ln(t,e,e,$t,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Vh),this.bones.push(s),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class lr extends ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fr=new We,Td=new We,Za=[],Cd=new Xt,rM=new We,gs=new et,vs=new Ot;class Yp extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,rM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Cd.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(Cd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),vs.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[s+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vs.copy(this.boundingSphere),vs.applyMatrix4(n),e.ray.intersectsSphere(vs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fr),Td.multiplyMatrices(n,Fr),gs.matrixWorld=Td,gs.raycast(e,Za);for(let s=0,o=Za.length;s<o;s++){const l=Za[s];l.instanceId=r,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ln(new Float32Array(i*this.count),i,this.count,pl,an));const r=this.morphTexture.source.data.data;let s=0;for(let c=0;c<n.length;c++)s+=n[c];const o=this.geometry.morphTargetsRelative?1:1-s,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function sM(a,e){return a.z-e.z}function aM(a,e){return e.z-a.z}class oM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const s=i[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t,s.index=n}reset(){this.list.length=0,this.index=0}}const yi=new We,Uc=new We,lM=new We,cM=new De(1,1,1),Rd=new We,Dc=new ca,Ka=new Xt,Oi=new Ot,_s=new L,Pd=new L,hM=new L,Nc=new oM,Vt=new et,Ja=[];function uM(a,e,t=0){const n=e.itemSize;if(a.isInterleavedBufferAttribute||a.array.constructor!==e.array.constructor){const i=a.count;for(let r=0;r<i;r++)for(let s=0;s<n;s++)e.setComponent(r+t,s,a.getComponent(r,s))}else e.array.set(a.array,t*n);e.needsUpdate=!0}class qp extends et{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new qe,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ln(t,e,e,$t,an);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new Ln(t,e,e,aa,li);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxIndexCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Ln(t,e,e,$t,an);n.colorSpace=ct.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const s=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=s,h=new o.constructor(n*l),u=new ht(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new ht(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this._geometryCount,t=this.boundingBox,n=this._drawInfo;t.makeEmpty();for(let i=0;i<e;i++){if(n[i].active===!1)continue;const r=n[i].geometryIndex;this.getMatrixAt(i,yi),this.getBoundingBoxAt(r,Ka).applyMatrix4(yi),t.union(Ka)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,yi),this.getBoundingSphereAt(r,Oi).applyMatrix4(yi),e.union(Oi)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;lM.toArray(i,t*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(cM.toArray(r.image.data,t*4),r.needsUpdate=!0),t}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const s=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=s[s.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._geometryCount;return this._geometryCount++,s.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new Xt,sphereInitialized:!1,sphere:new Ot}),this.setGeometryAt(u,e),u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),s=t.getIndex(),o=this._reservedRanges[e];if(i&&s.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const f in n.attributes){const p=t.getAttribute(f),v=n.getAttribute(f);uM(p,v,l);const g=p.itemSize;for(let m=p.count,y=c;m<y;m++){const _=l+m;for(let x=0;x<g;x++)v.setComponent(_,x,0)}v.needsUpdate=!0,v.addUpdateRange(l*g,c*g)}if(i){const f=o.indexStart;for(let p=0;p<s.count;p++)r.setX(f+p,l+s.getX(p));for(let p=s.count,v=o.indexCount;p<v;p++)r.setX(f+p,l);r.needsUpdate=!0,r.addUpdateRange(f,o.indexCount)}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[e],d=t.getAttribute("position");return u.count=i?s.count:d.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const s=r.index,o=r.attributes.position,l=this._drawRanges[e];for(let c=l.start,h=l.start+l.count;c<h;c++){let u=c;s&&(u=s.getX(u)),i.expandByPoint(_s.fromBufferAttribute(o,u))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,Ka),Ka.getCenter(i.center);const s=r.index,o=r.attributes.position,l=this._drawRanges[e];let c=0;for(let h=l.start,u=l.start+l.count;h<u;h++){let d=h;s&&(d=s.getX(d)),_s.fromBufferAttribute(o,d),c=Math.max(c,i.center.distanceToSquared(_s))}i.radius=Math.sqrt(c),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,s=this.geometry;Vt.material=this.material,Vt.geometry.index=s.index,Vt.geometry.attributes=s.attributes,Vt.geometry.boundingBox===null&&(Vt.geometry.boundingBox=new Xt),Vt.geometry.boundingSphere===null&&(Vt.geometry.boundingSphere=new Ot);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];Vt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Vt.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Vt.geometry.boundingBox),this.getBoundingSphereAt(c,Vt.geometry.boundingSphere),Vt.raycast(e,Ja);for(let u=0,d=Ja.length;u<d;u++){const f=Ja[u];f.object=this,f.batchId=o,t.push(f)}Ja.length=0}Vt.material=null,Vt.geometry.index=null,Vt.geometry.attributes={},Vt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=i.getIndex(),o=s===null?1:s.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;d&&(Rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Dc.setFromProjectionMatrix(Rd,e.coordinateSystem));let v=0;if(this.sortObjects){Uc.copy(this.matrixWorld).invert(),_s.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Uc),Pd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Uc);for(let y=0,_=l.length;y<_;y++)if(l[y].visible&&l[y].active){const x=l[y].geometryIndex;this.getMatrixAt(y,yi),this.getBoundingSphereAt(x,Oi).applyMatrix4(yi);let C=!1;if(d&&(C=!Dc.intersectsSphere(Oi)),!C){const E=hM.subVectors(Oi.center,_s).dot(Pd);Nc.push(u[x],E,y)}}const g=Nc.list,m=this.customSort;m===null?g.sort(r.transparent?aM:sM):m.call(this,g,n);for(let y=0,_=g.length;y<_;y++){const x=g[y];c[v]=x.start*o,h[v]=x.count,p[v]=x.index,v++}Nc.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){const y=l[g].geometryIndex;let _=!1;if(d&&(this.getMatrixAt(g,yi),this.getBoundingSphereAt(y,Oi).applyMatrix4(yi),_=!Dc.intersectsSphere(Oi)),!_){const x=u[y];c[v]=x.start*o,h[v]=x.count,p[v]=g,v++}}f.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,s){this.onBeforeRender(e,null,i,r,s)}}class Et extends Yt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qo=new L,$o=new L,Id=new We,ys=new hr,ja=new Ot,Fc=new L,Ld=new L;class xn extends nt{constructor(e=new qe,t=new Et){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Qo.fromBufferAttribute(t,i-1),$o.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qo.distanceTo($o);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;Id.copy(i).invert(),ys.copy(e.ray).applyMatrix4(Id);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let v=f,g=p-1;v<g;v+=c){const m=h.getX(v),y=h.getX(v+1),_=Qa(this,e,ys,l,m,y);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(p-1),g=h.getX(f),m=Qa(this,e,ys,l,v,g);m&&t.push(m)}}else{const f=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let v=f,g=p-1;v<g;v+=c){const m=Qa(this,e,ys,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=Qa(this,e,ys,l,p-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qa(a,e,t,n,i,r){const s=a.geometry.attributes.position;if(Qo.fromBufferAttribute(s,i),$o.fromBufferAttribute(s,r),t.distanceSqToSegment(Qo,$o,Fc,Ld)>n)return;Fc.applyMatrix4(a.matrixWorld);const l=e.ray.origin.distanceTo(Fc);if(!(l<e.near||l>e.far))return{distance:l,point:Ld.clone().applyMatrix4(a.matrixWorld),index:i,face:null,faceIndex:null,object:a}}const Ud=new L,Dd=new L;class Sn extends xn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ud.fromBufferAttribute(t,i),Dd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ud.distanceTo(Dd);e.setAttribute("lineDistance",new ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zp extends xn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Hh extends Yt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nd=new We,oh=new hr,$a=new Ot,eo=new L;class Wh extends nt{constructor(e=new qe,t=new Hh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;Nd.copy(i).invert(),oh.copy(e.ray).applyMatrix4(Nd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let p=d,v=f;p<v;p++){const g=c.getX(p);eo.fromBufferAttribute(u,g),Fd(eo,g,l,i,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(u.count,s.start+s.count);for(let p=d,v=f;p<v;p++)eo.fromBufferAttribute(u,p),Fd(eo,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fd(a,e,t,n,i,r,s){const o=oh.distanceSqToPoint(a);if(o<t){const l=new L;oh.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Kp extends yt{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isVideoTexture=!0,this.minFilter=s!==void 0?s:gt,this.magFilter=r!==void 0?r:gt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class dM extends yt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Rt,this.minFilter=Rt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Pl extends yt{constructor(e,t,n,i,r,s,o,l,c,h,u,d){super(null,s,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class fM extends Pl{constructor(e,t,n,i,r,s){super(e,t,n,r,s),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=_n,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pM extends Pl{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,oi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class mM extends yt{constructor(e,t,n,i,r,s,o,l,c){super(e,t,n,i,r,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-s,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(s-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),l=t||(s.isVector2?new me:new L);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],s=[],o=new L,l=new We;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new L)}r[0]=new L,s[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(bt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(bt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),s[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Il extends Nn{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jp extends Il{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function Xh(){let a=0,e=0,t=0,n=0;function i(r,s,o,l){a=r,e=o,t=-3*r+3*s-2*o-l,n=2*r-2*s+o+l}return{initCatmullRom:function(r,s,o,l,c){i(s,o,c*(o-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,o,l,c,h,u){let d=(s-r)/c-(o-r)/(c+h)+(o-s)/h,f=(o-s)/h-(l-s)/(h+u)+(l-o)/u;d*=h,f*=h,i(s,o,d,f)},calc:function(r){const s=r*r,o=s*r;return a+e*r+t*s+n*o}}}const to=new L,Oc=new Xh,kc=new Xh,Bc=new Xh;class jp extends Nn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(to.subVectors(i[0],i[1]).add(i[0]),c=to);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(to.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=to),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Oc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,g),kc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,g),Bc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,g)}else this.curveType==="catmullrom"&&(Oc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),kc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Bc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Oc.calc(l),kc.calc(l),Bc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Od(a,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,o=a*a,l=a*o;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*o+r*a+t}function gM(a,e){const t=1-a;return t*t*e}function vM(a,e){return 2*(1-a)*a*e}function _M(a,e){return a*a*e}function Ls(a,e,t,n){return gM(a,e)+vM(a,t)+_M(a,n)}function yM(a,e){const t=1-a;return t*t*t*e}function xM(a,e){const t=1-a;return 3*t*t*a*e}function MM(a,e){return 3*(1-a)*a*a*e}function bM(a,e){return a*a*a*e}function Us(a,e,t,n,i){return yM(a,e)+xM(a,t)+MM(a,n)+bM(a,i)}class Yh extends Nn{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Us(e,i.x,r.x,s.x,o.x),Us(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qp extends Nn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(Us(e,i.x,r.x,s.x,o.x),Us(e,i.y,r.y,s.y,o.y),Us(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qh extends Nn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $p extends Nn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends Nn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Ls(e,i.x,r.x,s.x),Ls(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kh extends Nn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(Ls(e,i.x,r.x,s.x),Ls(e,i.y,r.y,s.y),Ls(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,l=i[s===0?s:s-1],c=i[s],h=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(Od(o,l.x,c.x,h.x,u.x),Od(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new me().fromArray(i))}return this}}var el=Object.freeze({__proto__:null,ArcCurve:Jp,CatmullRomCurve3:jp,CubicBezierCurve:Yh,CubicBezierCurve3:Qp,EllipseCurve:Il,LineCurve:qh,LineCurve3:$p,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:Kh,SplineCurve:Jh});class em extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new el[i.type]().fromJSON(i))}return this}}class Js extends em{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qh(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Zh(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const o=new Yh(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Jh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,s,o,l),this}absellipse(e,t,n,i,r,s,o,l){const c=new Il(e,t,n,i,r,s,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ha extends qe{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=bt(i,0,Math.PI*2);const r=[],s=[],o=[],l=[],c=[],h=1/t,u=new L,d=new me,f=new L,p=new L,v=new L;let g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let y=0;y<=t;y++){const _=n+y*h*i,x=Math.sin(_),C=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*x,u.y=e[E].y,u.z=e[E].x*C,s.push(u.x,u.y,u.z),d.x=y/t,d.y=E/(e.length-1),o.push(d.x,d.y);const w=l[3*E+0]*x,R=l[3*E+1],S=l[3*E+0]*C;c.push(w,R,S)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,C=x,E=x+e.length,w=x+e.length+1,R=x+1;r.push(C,E,R),r.push(w,R,E)}this.setIndex(r),this.setAttribute("position",new ze(s,3)),this.setAttribute("uv",new ze(o,2)),this.setAttribute("normal",new ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.points,e.segments,e.phiStart,e.phiLength)}}class Ll extends ha{constructor(e=1,t=1,n=4,i=8){const r=new Js;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new Ll(e.radius,e.length,e.capSegments,e.radialSegments)}}class Ul extends qe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],s=[],o=[],l=[],c=new L,h=new me;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[d]/e+1)/2,h.y=(s[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yn extends qe{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const v=[],g=n/2;let m=0;y(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function y(){const x=new L,C=new L;let E=0;const w=(t-e)/n;for(let R=0;R<=r;R++){const S=[],M=R/r,D=M*(t-e)+e;for(let U=0;U<=i;U++){const N=U/i,O=N*l+o,V=Math.sin(O),B=Math.cos(O);C.x=D*V,C.y=-M*n+g,C.z=D*B,u.push(C.x,C.y,C.z),x.set(V,w,B).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-M),S.push(p++)}v.push(S)}for(let R=0;R<i;R++)for(let S=0;S<r;S++){const M=v[S][R],D=v[S+1][R],U=v[S+1][R+1],N=v[S][R+1];h.push(M,D,N),h.push(D,U,N),E+=6}c.addGroup(m,E,0),m+=E}function _(x){const C=p,E=new me,w=new L;let R=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;const D=p;for(let U=0;U<=i;U++){const O=U/i*l+o,V=Math.cos(O),B=Math.sin(O);w.x=S*B,w.y=g*M,w.z=S*V,u.push(w.x,w.y,w.z),d.push(0,M,0),E.x=V*.5+.5,E.y=B*.5*M+.5,f.push(E.x,E.y),p++}for(let U=0;U<i;U++){const N=C+U,O=D+U;x===!0?h.push(O,O+1,N):h.push(O+1,O,N),R+=3}c.addGroup(m,R,x===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dl extends yn{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Dl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ei extends qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],s=[];o(i),c(n),h(),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(r.slice(),3)),this.setAttribute("uv",new ze(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new L,x=new L,C=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],x),f(t[E+2],C),l(_,x,C,y)}function l(y,_,x,C){const E=C+1,w=[];for(let R=0;R<=E;R++){w[R]=[];const S=y.clone().lerp(x,R/E),M=_.clone().lerp(x,R/E),D=E-R;for(let U=0;U<=D;U++)U===0&&R===E?w[R][U]=S:w[R][U]=S.clone().lerp(M,U/D)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){const M=Math.floor(S/2);S%2===0?(d(w[R][M+1]),d(w[R+1][M]),d(w[R][M])):(d(w[R][M+1]),d(w[R+1][M+1]),d(w[R+1][M]))}}function c(y){const _=new L;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const y=new L;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=g(y)/2/Math.PI+.5,C=m(y)/Math.PI+.5;s.push(x,1-C)}p(),u()}function u(){for(let y=0;y<s.length;y+=6){const _=s[y+0],x=s[y+2],C=s[y+4],E=Math.max(_,x,C),w=Math.min(_,x,C);E>.9&&w<.1&&(_<.2&&(s[y+0]+=1),x<.2&&(s[y+2]+=1),C<.2&&(s[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function p(){const y=new L,_=new L,x=new L,C=new L,E=new me,w=new me,R=new me;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(s[M+0],s[M+1]),w.set(s[M+2],s[M+3]),R.set(s[M+4],s[M+5]),C.copy(y).add(_).add(x).divideScalar(3);const D=g(C);v(E,M+0,y,D),v(w,M+2,_,D),v(R,M+4,x,D)}}function v(y,_,x,C){C<0&&y.x===1&&(s[_]=y.x-1),x.x===0&&x.z===0&&(s[_]=C/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.vertices,e.indices,e.radius,e.details)}}class Nl extends Ei{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nl(e.radius,e.detail)}}const no=new L,io=new L,zc=new L,ro=new dn;class Fl extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(nr*t),s=e.getIndex(),o=e.getAttribute("position"),l=s?s.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){s?(c[0]=s.getX(p),c[1]=s.getX(p+1),c[2]=s.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=ro;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),ro.getNormal(zc),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const _=(y+1)%3,x=u[y],C=u[_],E=ro[h[y]],w=ro[h[_]],R=`${x}_${C}`,S=`${C}_${x}`;S in d&&d[S]?(zc.dot(d[S].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(w.x,w.y,w.z)),d[S]=null):R in d||(d[R]={index0:c[y],index1:c[_],normal:zc.clone()})}}for(const p in d)if(d[p]){const{index0:v,index1:g}=d[p];no.fromBufferAttribute(o,v),io.fromBufferAttribute(o,g),f.push(no.x,no.y,no.z),f.push(io.x,io.y,io.z)}this.setAttribute("position",new ze(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ir extends Js{constructor(e){super(e),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Js().fromJSON(i))}return this}}const SM={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let r=tm(a,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,l,c,h,u,d,f;if(n&&(r=CM(a,e,r,t)),a.length>80*t){o=c=a[0],l=h=a[1];for(let p=t;p<i;p+=t)u=a[p],d=a[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return js(r,s,t,o,l,f,0),s}};function tm(a,e,t,n,i){let r,s;if(i===BM(a,e,t,n)>0)for(r=e;r<t;r+=n)s=kd(r,a[r],a[r+1],s);else for(r=t-n;r>=e;r-=n)s=kd(r,a[r],a[r+1],s);return s&&Ol(s,s.next)&&($s(s),s=s.next),s}function cr(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(Ol(t,t.next)||_t(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function js(a,e,t,n,i,r,s){if(!a)return;!s&&r&&UM(a,n,i,r);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,r?AM(a,n,i,r):wM(a)){e.push(l.i/t|0),e.push(a.i/t|0),e.push(c.i/t|0),$s(a),a=c.next,o=c.next;continue}if(a=c,a===o){s?s===1?(a=EM(cr(a),e,t),js(a,e,t,n,i,r,2)):s===2&&TM(a,e,t,n,i,r):js(cr(a),e,t,n,i,r,1);break}}}function wM(a){const e=a.prev,t=a,n=a.next;if(_t(e,t,n)>=0)return!1;const i=e.x,r=t.x,s=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<s?i:s:r<s?r:s,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>s?i:s:r>s?r:s,f=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Vr(i,o,r,l,s,c,p.x,p.y)&&_t(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function AM(a,e,t,n){const i=a.prev,r=a,s=a.next;if(_t(i,r,s)>=0)return!1;const o=i.x,l=r.x,c=s.x,h=i.y,u=r.y,d=s.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=lh(f,p,e,t,n),y=lh(v,g,e,t,n);let _=a.prevZ,x=a.nextZ;for(;_&&_.z>=m&&x&&x.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==s&&Vr(o,h,l,u,c,d,_.x,_.y)&&_t(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==s&&Vr(o,h,l,u,c,d,x.x,x.y)&&_t(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==i&&_!==s&&Vr(o,h,l,u,c,d,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==s&&Vr(o,h,l,u,c,d,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function EM(a,e,t){let n=a;do{const i=n.prev,r=n.next.next;!Ol(i,r)&&nm(i,n,n.next,r)&&Qs(i,r)&&Qs(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$s(n),$s(n.next),n=a=r),n=n.next}while(n!==a);return cr(n)}function TM(a,e,t,n,i,r){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&FM(s,o)){let l=im(s,o);s=cr(s,s.next),l=cr(l,l.next),js(s,e,t,n,i,r,0),js(l,e,t,n,i,r,0);return}o=o.next}s=s.next}while(s!==a)}function CM(a,e,t,n){const i=[];let r,s,o,l,c;for(r=0,s=e.length;r<s;r++)o=e[r]*n,l=r<s-1?e[r+1]*n:a.length,c=tm(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(NM(c));for(i.sort(RM),r=0;r<i.length;r++)t=PM(i[r],t);return t}function RM(a,e){return a.x-e.x}function PM(a,e){const t=IM(a,e);if(!t)return e;const n=im(t,a);return cr(n,n.next),cr(t,t.next)}function IM(a,e){let t=e,n=-1/0,i;const r=a.x,s=a.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Vr(s<c?r:n,s,l,c,s<c?n:r,s,t.x,t.y)&&(u=Math.abs(s-t.y)/(r-t.x),Qs(t,a)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&LM(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function LM(a,e){return _t(a.prev,a,e.prev)<0&&_t(e.next,a,a.next)<0}function UM(a,e,t,n){let i=a;do i.z===0&&(i.z=lh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,DM(i)}function DM(a){let e,t,n,i,r,s,o,l,c=1;do{for(t=a,a=null,r=null,s=0;t;){for(s++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:a=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(s>1);return a}function lh(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function NM(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Vr(a,e,t,n,i,r,s,o){return(i-s)*(e-o)>=(a-s)*(r-o)&&(a-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(i-s)*(n-o)}function FM(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!OM(a,e)&&(Qs(a,e)&&Qs(e,a)&&kM(a,e)&&(_t(a.prev,a,e.prev)||_t(a,e.prev,e))||Ol(a,e)&&_t(a.prev,a,a.next)>0&&_t(e.prev,e,e.next)>0)}function _t(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function Ol(a,e){return a.x===e.x&&a.y===e.y}function nm(a,e,t,n){const i=ao(_t(a,e,t)),r=ao(_t(a,e,n)),s=ao(_t(t,n,a)),o=ao(_t(t,n,e));return!!(i!==r&&s!==o||i===0&&so(a,t,e)||r===0&&so(a,n,e)||s===0&&so(t,a,n)||o===0&&so(t,e,n))}function so(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function ao(a){return a>0?1:a<0?-1:0}function OM(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&nm(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Qs(a,e){return _t(a.prev,a,a.next)<0?_t(a,e,a.next)>=0&&_t(a,a.prev,e)>=0:_t(a,e,a.prev)<0||_t(a,a.next,e)<0}function kM(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,r=(a.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function im(a,e){const t=new ch(a.i,a.x,a.y),n=new ch(e.i,e.x,e.y),i=a.next,r=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kd(a,e,t,n){const i=new ch(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $s(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ch(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function BM(a,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(a[s]-a[r])*(a[r+1]+a[s+1]),s=r;return i}class Vn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Vn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Bd(e),zd(n,e);let s=e.length;t.forEach(Bd);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,zd(n,t[l]);const o=SM.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Bd(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function zd(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class kl extends qe{constructor(e=new ir([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new ze(i,3)),this.setAttribute("uv",new ze(r,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:zM;let _,x=!1,C,E,w,R;m&&(_=m.getSpacedPoints(h),x=!0,d=!1,C=m.computeFrenetFrames(h,!1),E=new L,w=new L,R=new L),d||(g=0,f=0,p=0,v=0);const S=o.extractPoints(c);let M=S.shape;const D=S.holes;if(!Vn.isClockWise(M)){M=M.reverse();for(let T=0,de=D.length;T<de;T++){const he=D[T];Vn.isClockWise(he)&&(D[T]=he.reverse())}}const N=Vn.triangulateShape(M,D),O=M;for(let T=0,de=D.length;T<de;T++){const he=D[T];M=M.concat(he)}function V(T,de,he){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(de,he)}const B=M.length,j=N.length;function Y(T,de,he){let fe,ne,Ee;const ae=T.x-de.x,pe=T.y-de.y,I=he.x-T.x,b=he.y-T.y,G=ae*ae+pe*pe,K=ae*b-pe*I;if(Math.abs(K)>Number.EPSILON){const te=Math.sqrt(G),$=Math.sqrt(I*I+b*b),Ie=de.x-pe/te,ue=de.y+ae/te,ve=he.x-b/$,Te=he.y+I/$,ge=((ve-Ie)*b-(Te-ue)*I)/(ae*b-pe*I);fe=Ie+ae*ge-T.x,ne=ue+pe*ge-T.y;const we=fe*fe+ne*ne;if(we<=2)return new me(fe,ne);Ee=Math.sqrt(we/2)}else{let te=!1;ae>Number.EPSILON?I>Number.EPSILON&&(te=!0):ae<-Number.EPSILON?I<-Number.EPSILON&&(te=!0):Math.sign(pe)===Math.sign(b)&&(te=!0),te?(fe=-pe,ne=ae,Ee=Math.sqrt(G)):(fe=ae,ne=pe,Ee=Math.sqrt(G/2))}return new me(fe/Ee,ne/Ee)}const Q=[];for(let T=0,de=O.length,he=de-1,fe=T+1;T<de;T++,he++,fe++)he===de&&(he=0),fe===de&&(fe=0),Q[T]=Y(O[T],O[he],O[fe]);const J=[];let F,X=Q.concat();for(let T=0,de=D.length;T<de;T++){const he=D[T];F=[];for(let fe=0,ne=he.length,Ee=ne-1,ae=fe+1;fe<ne;fe++,Ee++,ae++)Ee===ne&&(Ee=0),ae===ne&&(ae=0),F[fe]=Y(he[fe],he[Ee],he[ae]);J.push(F),X=X.concat(F)}for(let T=0;T<g;T++){const de=T/g,he=f*Math.cos(de*Math.PI/2),fe=p*Math.sin(de*Math.PI/2)+v;for(let ne=0,Ee=O.length;ne<Ee;ne++){const ae=V(O[ne],Q[ne],fe);W(ae.x,ae.y,-he)}for(let ne=0,Ee=D.length;ne<Ee;ne++){const ae=D[ne];F=J[ne];for(let pe=0,I=ae.length;pe<I;pe++){const b=V(ae[pe],F[pe],fe);W(b.x,b.y,-he)}}}const se=p+v;for(let T=0;T<B;T++){const de=d?V(M[T],X[T],se):M[T];x?(w.copy(C.normals[0]).multiplyScalar(de.x),E.copy(C.binormals[0]).multiplyScalar(de.y),R.copy(_[0]).add(w).add(E),W(R.x,R.y,R.z)):W(de.x,de.y,0)}for(let T=1;T<=h;T++)for(let de=0;de<B;de++){const he=d?V(M[de],X[de],se):M[de];x?(w.copy(C.normals[T]).multiplyScalar(he.x),E.copy(C.binormals[T]).multiplyScalar(he.y),R.copy(_[T]).add(w).add(E),W(R.x,R.y,R.z)):W(he.x,he.y,u/h*T)}for(let T=g-1;T>=0;T--){const de=T/g,he=f*Math.cos(de*Math.PI/2),fe=p*Math.sin(de*Math.PI/2)+v;for(let ne=0,Ee=O.length;ne<Ee;ne++){const ae=V(O[ne],Q[ne],fe);W(ae.x,ae.y,u+he)}for(let ne=0,Ee=D.length;ne<Ee;ne++){const ae=D[ne];F=J[ne];for(let pe=0,I=ae.length;pe<I;pe++){const b=V(ae[pe],F[pe],fe);x?W(b.x,b.y+_[h-1].y,_[h-1].x+he):W(b.x,b.y,u+he)}}}k(),z();function k(){const T=i.length/3;if(d){let de=0,he=B*de;for(let fe=0;fe<j;fe++){const ne=N[fe];le(ne[2]+he,ne[1]+he,ne[0]+he)}de=h+g*2,he=B*de;for(let fe=0;fe<j;fe++){const ne=N[fe];le(ne[0]+he,ne[1]+he,ne[2]+he)}}else{for(let de=0;de<j;de++){const he=N[de];le(he[2],he[1],he[0])}for(let de=0;de<j;de++){const he=N[de];le(he[0]+B*h,he[1]+B*h,he[2]+B*h)}}n.addGroup(T,i.length/3-T,0)}function z(){const T=i.length/3;let de=0;re(O,de),de+=O.length;for(let he=0,fe=D.length;he<fe;he++){const ne=D[he];re(ne,de),de+=ne.length}n.addGroup(T,i.length/3-T,1)}function re(T,de){let he=T.length;for(;--he>=0;){const fe=he;let ne=he-1;ne<0&&(ne=T.length-1);for(let Ee=0,ae=h+g*2;Ee<ae;Ee++){const pe=B*Ee,I=B*(Ee+1),b=de+fe+pe,G=de+ne+pe,K=de+ne+I,te=de+fe+I;xe(b,G,K,te)}}}function W(T,de,he){l.push(T),l.push(de),l.push(he)}function le(T,de,he){be(T),be(de),be(he);const fe=i.length/3,ne=y.generateTopUV(n,i,fe-3,fe-2,fe-1);ye(ne[0]),ye(ne[1]),ye(ne[2])}function xe(T,de,he,fe){be(T),be(de),be(fe),be(de),be(he),be(fe);const ne=i.length/3,Ee=y.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);ye(Ee[0]),ye(Ee[1]),ye(Ee[3]),ye(Ee[1]),ye(Ee[2]),ye(Ee[3])}function be(T){i.push(l[T*3+0]),i.push(l[T*3+1]),i.push(l[T*3+2])}function ye(T){r.push(T.x),r.push(T.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return GM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new el[i.type]().fromJSON(i)),new kl(n,e.options)}}const zM={generateTopUV:function(a,e,t,n,i){const r=e[t*3],s=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new me(r,s),new me(o,l),new me(c,h)]},generateSideWallUV:function(a,e,t,n,i,r){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(s-c)?[new me(s,1-l),new me(c,1-u),new me(d,1-p),new me(v,1-m)]:[new me(o,1-l),new me(h,1-u),new me(f,1-p),new me(g,1-m)]}};function GM(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const r=a[n];t.shapes.push(r.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bl extends Ei{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bl(e.radius,e.detail)}}class ua extends Ei{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ua(e.radius,e.detail)}}class zl extends qe{constructor(e=.5,t=1,n=32,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new L,p=new me;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const m=r+g/n*s;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let m=0;m<n;m++){const y=m+g,_=y,x=y+n+1,C=y+n+2,E=y+1;o.push(_,x,E),o.push(x,C,E)}}this.setIndex(o),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gl extends qe{constructor(e=new ir([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ze(i,3)),this.setAttribute("normal",new ze(r,3)),this.setAttribute("uv",new ze(s,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;Vn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];Vn.isClockWise(y)===!0&&(p[g]=y.reverse())}const v=Vn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),s.push(y.x,y.y)}for(let g=0,m=v.length;g<m;g++){const y=v[g],_=y[0]+u,x=y[1]+u,C=y[2]+u;n.push(_,x,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return VM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const s=t[e.shapes[i]];n.push(s)}return new Gl(n,e.curveSegments)}}function VM(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,n=a.length;t<n;t++){const i=a[t];e.shapes.push(i.uuid)}else e.shapes.push(a.uuid);return e}class Si extends qe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const y=[],_=m/n;let x=0;m===0&&s===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const E=C/t;u.x=-e*Math.cos(i+E*r)*Math.sin(s+_*o),u.y=e*Math.cos(s+_*o),u.z=e*Math.sin(i+E*r)*Math.sin(s+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+x,1-_),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const _=h[m][y+1],x=h[m][y],C=h[m+1][y],E=h[m+1][y+1];(m!==0||s>0)&&f.push(_,x,E),(m!==n-1||l<Math.PI)&&f.push(x,C,E)}this.setIndex(f),this.setAttribute("position",new ze(p,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vl extends Ei{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vl(e.radius,e.detail)}}class da extends qe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const s=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const v=p/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const v=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,y=(i+1)*f+p;s.push(v,g,y),s.push(g,m,y)}this.setIndex(s),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Hl extends qe{constructor(e=1,t=.4,n=64,i=8,r=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:s},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new L,d=new L,f=new L,p=new L,v=new L,g=new L,m=new L;for(let _=0;_<=n;++_){const x=_/n*r*Math.PI*2;y(x,r,s,e,f),y(x+.01,r,s,e,p),g.subVectors(p,f),m.addVectors(p,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let C=0;C<=i;++C){const E=C/i*Math.PI*2,w=-t*Math.cos(E),R=t*Math.sin(E);u.x=f.x+(w*m.x+R*v.x),u.y=f.y+(w*m.y+R*v.y),u.z=f.z+(w*m.z+R*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(C/i)}}for(let _=1;_<=n;_++)for(let x=1;x<=i;x++){const C=(i+1)*(_-1)+(x-1),E=(i+1)*_+(x-1),w=(i+1)*_+x,R=(i+1)*(_-1)+x;o.push(C,E,R),o.push(E,w,R)}this.setIndex(o),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(h,2));function y(_,x,C,E,w){const R=Math.cos(_),S=Math.sin(_),M=C/x*_,D=Math.cos(M);w.x=E*(2+D)*.5*R,w.y=E*(2+D)*S*.5,w.z=E*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Wl extends qe{constructor(e=new Kh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const s=e.computeFrenetFrames(t,r);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new L,l=new L,c=new me;let h=new L;const u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(f,2));function v(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),y(),m()}function g(_){h=e.getPointAt(_/t,h);const x=s.normals[_],C=s.binormals[_];for(let E=0;E<=i;E++){const w=E/i*Math.PI*2,R=Math.sin(w),S=-Math.cos(w);l.x=S*x.x+R*C.x,l.y=S*x.y+R*C.y,l.z=S*x.z+R*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let x=1;x<=i;x++){const C=(i+1)*(_-1)+(x-1),E=(i+1)*_+(x-1),w=(i+1)*_+x,R=(i+1)*(_-1)+x;p.push(C,E,R),p.push(E,w,R)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=i;x++)c.x=_/t,c.y=x/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wl(new el[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class rm extends qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new L,r=new L;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let p=d,v=d+f;p<v;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),y=o.getX(p+(g+1)%3);i.fromBufferAttribute(s,m),r.fromBufferAttribute(s,y),Gd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(s,h),r.fromBufferAttribute(s,u),Gd(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Gd(a,e,t){const n=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var Vd=Object.freeze({__proto__:null,BoxGeometry:ur,CapsuleGeometry:Ll,CircleGeometry:Ul,ConeGeometry:Dl,CylinderGeometry:yn,DodecahedronGeometry:Nl,EdgesGeometry:Fl,ExtrudeGeometry:kl,IcosahedronGeometry:Bl,LatheGeometry:ha,OctahedronGeometry:ua,PlaneGeometry:bn,PolyhedronGeometry:Ei,RingGeometry:zl,ShapeGeometry:Gl,SphereGeometry:Si,TetrahedronGeometry:Vl,TorusGeometry:da,TorusKnotGeometry:Hl,TubeGeometry:Wl,WireframeGeometry:rm});class sm extends Yt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new De(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class am extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class In extends Yt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tl extends In{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class om extends Yt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lm extends Yt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new De(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class cm extends Yt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class hm extends Yt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class um extends Yt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new De(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dm extends Et{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function $i(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function fm(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function pm(a){function e(i,r){return a[i]-a[r]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function hh(a,e,t){const n=a.length,i=new a.constructor(n);for(let r=0,s=0;s!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[s++]=a[o+l]}return i}function jh(a,e,t,n){let i=1,r=a[0];for(;r!==void 0&&r[n]===void 0;)r=a[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=a[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=a[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=a[i++];while(r!==void 0)}function HM(a,e,t,n,i=30){const r=a.clone();r.name=e;const s=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<t||p>=n)){u.push(c.times[f]);for(let v=0;v<h;++v)d.push(c.values[f*h+v])}}u.length!==0&&(c.times=$i(u,c.times.constructor),c.values=$i(d,c.values.constructor),s.push(c))}r.tracks=s;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function WM(a,e=0,t=a,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let s=0;s<i;++s){const o=t.tracks[s],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let v;if(r<=o.times[0]){const m=h,y=u-h;v=o.values.slice(m,y)}else if(r>=o.times[p]){const m=p*u+h,y=m+u-h;v=o.values.slice(m,y)}else{const m=o.createInterpolant(),y=h,_=u-h;m.evaluate(r),v=m.resultBuffer.slice(y,_)}l==="quaternion"&&new Wt().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let m=0;m<g;++m){const y=m*f+d;if(l==="quaternion")Wt.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const _=f-d*2;for(let x=0;x<_;++x)c.values[y+x]-=v[x]}}}return a.blendMode=Rh,a}const XM={convertArray:$i,isTypedArray:fm,getKeyframeOrder:pm,sortedArray:hh,flattenJSON:jh,subclip:HM,makeClipAdditive:WM};class fa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mm extends fa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,o=i[r],l=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case Ji:r=e,o=2*t-n;break;case Hs:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ji:s=e,l=2*n-t;break;case Hs:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*v+.5*p,x=f*g-f*v;for(let C=0;C!==o;++C)r[C]=m*s[h+C]+y*s[c+C]+_*s[l+C]+x*s[u+C];return r}}class Qh extends fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=s[c+d]*u+s[l+d]*h;return r}}class gm extends fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$i(t,this.TimeBufferType),this.values=$i(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$i(e.times,Array),values:$i(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case jo:t=this.InterpolantFactoryMethodLinear;break;case _o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(i!==void 0&&fm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_o,r=e.length-1;let s=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const u=o*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++s}}if(r>0){e[s]=e[r];for(let o=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=jo;class dr extends Fn{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Vs;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class $h extends Fn{}$h.prototype.ValueTypeName="color";class ea extends Fn{}ea.prototype.ValueTypeName="number";class vm extends fa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Wt.slerpFlat(r,0,s,c-o,s,c,l);return r}}class pa extends Fn{InterpolantFactoryMethodLinear(e){return new vm(this.times,this.values,this.getValueSize(),e)}}pa.prototype.ValueTypeName="quaternion";pa.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends Fn{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Vs;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class ta extends Fn{}ta.prototype.ValueTypeName="vector";class na{constructor(e="",t=-1,n=[],i=vl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(qM(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(Fn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=pm(l);l=hh(l,1,h),c=hh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new ea(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,v){if(f.length!==0){const g=[],m=[];jh(f,g,m,p),g.length!==0&&v.push(new u(d,g,m))}},i=[],r=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(const v in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const _=d[p];g.push(_.time),m.push(_.morphTarget===v?1:0)}i.push(new ea(".morphTargetInfluence["+v+"]",g,m))}l=f.length*s}else{const f=".bones["+t[u].name+"]";n(ta,f+".position",d,"pos",i),n(pa,f+".quaternion",d,"rot",i),n(ta,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function YM(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ea;case"vector":case"vector2":case"vector3":case"vector4":return ta;case"color":return $h;case"quaternion":return pa;case"bool":case"boolean":return dr;case"string":return fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function qM(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=YM(a.type);if(a.times===void 0){const t=[],n=[];jh(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const ri={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class eu{constructor(e,t,n){const i=this;let r=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,i.onProgress!==void 0&&i.onProgress(h,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const _m=new eu;class on{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}on.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class ZM extends Error{constructor(e,t){super(e),this.response=t}}class ci extends on{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ri.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$n[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){y();function y(){u.read().then(({done:_,value:x})=>{if(_)m.close();else{v+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let E=0,w=h.length;E<w;E++){const R=h[E];R.onProgress&&R.onProgress(C)}m.enqueue(x),y()}},_=>{m.error(_)})}}});return new Response(g)}else throw new ZM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{ri.add(e,c);const h=$n[e];delete $n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=$n[e];if(h===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class KM extends on{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new ci(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=na.parse(e[n]);t.push(i)}return t}}class JM extends on{constructor(e){super(e)}load(e,t,n,i){const r=this,s=[],o=new Pl,l=new ci(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){const f=r.parse(d,!0);s[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=gt),o.image=s,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){s[p]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)s[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+v]),s[p].format=d.format,s[p].width=d.width,s[p].height=d.height}o.image=s}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=gt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class ia extends on{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=ri.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const o=Ks("img");function l(){h(),ri.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class jM extends on{constructor(e){super(e)}load(e,t,n,i){const r=new la;r.colorSpace=vn;const s=new ia(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class QM extends on{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new Ln,o=new ci(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:_n,s.wrapT=c.wrapT!==void 0?c.wrapT:_n,s.magFilter=c.magFilter!==void 0?c.magFilter:gt,s.minFilter=c.minFilter!==void 0?c.minFilter:gt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(s.colorSpace=c.colorSpace),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=zn),c.mipmapCount===1&&(s.minFilter=gt),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c)},n,i),s}}class tu extends on{constructor(e){super(e)}load(e,t,n,i){const r=new yt,s=new ia(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ti extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ym extends Ti{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gc=new We,Hd=new L,Wd=new L;class nu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),Wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wd),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $M extends nu{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Zr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xm extends Ti{constructor(e,t,n=0,i=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new $M}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xd=new We,xs=new L,Vc=new L;class eb extends nu{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(xs),Vc.copy(n.position),Vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vc),n.updateMatrixWorld(),i.makeTranslation(-xs.x,-xs.y,-xs.z),Xd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd)}}class iu extends Ti{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new eb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tb extends nu{constructor(){super(new bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ru extends Ti{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new tb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class su extends Ti{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mm extends Ti{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class bm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*i),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*n),t.addScaledVector(s[4],1.092548*(n*i)),t.addScaledVector(s[5],1.092548*(i*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(n*r)),t.addScaledVector(s[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*i),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*n),t.addScaledVector(s[4],2*.429043*n*i),t.addScaledVector(s[5],2*.429043*i*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*n*r),t.addScaledVector(s[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class Sm extends Ti{constructor(e=new bm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Xl extends on{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,s=new ci(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=Xl.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const s=e.uniforms[r];switch(i.uniforms[r]={},s.type){case"t":i.uniforms[r].value=n(s.value);break;case"c":i.uniforms[r].value=new De().setHex(s.value);break;case"v2":i.uniforms[r].value=new me().fromArray(s.value);break;case"v3":i.uniforms[r].value=new L().fromArray(s.value);break;case"v4":i.uniforms[r].value=new lt().fromArray(s.value);break;case"m3":i.uniforms[r].value=new Je().fromArray(s.value);break;case"m4":i.uniforms[r].value=new We().fromArray(s.value);break;default:i.uniforms[r].value=s.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new me().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:sm,SpriteMaterial:Gh,RawShaderMaterial:am,ShaderMaterial:Dn,PointsMaterial:Hh,MeshPhysicalMaterial:tl,MeshStandardMaterial:In,MeshPhongMaterial:om,MeshToonMaterial:lm,MeshNormalMaterial:cm,MeshLambertMaterial:hm,MeshDepthMaterial:wl,MeshDistanceMaterial:Al,MeshBasicMaterial:Mn,MeshMatcapMaterial:um,LineDashedMaterial:dm,LineBasicMaterial:Et,Material:Yt};return new t[e]}}class uh{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class au extends qe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class wm extends on{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new ci(r.manager);s.setPath(r.path),s.setRequestHeader(r.requestHeader),s.setWithCredentials(r.withCredentials),s.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),y=zr(g.type,m),_=new Cl(y,g.stride);return _.uuid=g.uuid,t[p]=_,_}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const s=e.isInstancedBufferGeometry?new au:new qe,o=e.data.index;if(o!==void 0){const f=zr(o.type,o.array);s.setIndex(new ht(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let v;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);v=new or(g,p.itemSize,p.offset,p.normalized)}else{const g=zr(p.type,p.array),m=p.isInstancedBufferAttribute?lr:ht;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),s.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],v=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let _;if(y.isInterleavedBufferAttribute){const x=i(e.data,y.data);_=new or(x,y.itemSize,y.offset,y.normalized)}else{const x=zr(y.type,y.array);_=new ht(x,y.itemSize,y.normalized)}y.name!==void 0&&(_.name=y.name),v.push(_)}s.morphAttributes[f]=v}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const v=u[f];s.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new L;d.center!==void 0&&f.fromArray(d.center),s.boundingSphere=new Ot(f,d.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}class nb extends on{constructor(e){super(e)}load(e,t,n,i){const r=this,s=this.path===""?uh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const o=new ci(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?uh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new ci(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const s=await r.loadAsync(e,t),o=JSON.parse(s),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),s=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,s),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const d in s)if(s[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,s),l=this.parseObject(e.object,i,o,s,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new ir().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,s=e.length;r<s;r++){const o=new Rl().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new wm;for(let r=0,s=e.length;r<s;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in Vd?o=Vd[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new Xl;r.setTextures(t);for(let s=0,o=e.length;s<o;s++){const l=e[s];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=na.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function s(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return s(h)}else return l.data?{data:zr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new eu(t);r=new ia(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Ln(m.data,m.width,m.height)))}i[u.uuid]=new ji(f)}else{const f=o(u.url);i[u.uuid]=new ji(f)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(s){if(typeof s=="string"){const o=s,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return s.data?{data:zr(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){i=new ia(this.manager),i.setCrossOrigin(this.crossOrigin);for(let s=0,o=e.length;s<o;s++){const l=e[s],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Ln(p.data,p.width,p.height)))}n[l.uuid]=new ji(h)}else{const h=await r(l.url);n[l.uuid]=new ji(h)}}}return n}parseTextures(e,t){function n(r,s){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),s[r])}const i={};if(e!==void 0)for(let r=0,s=e.length;r<s;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new la,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Ln:h=new yt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,ib)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Yd),h.wrapT=n(o.wrap[1],Yd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,qd)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,qd)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let s;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":s=new zh,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new De(e.background):s.background=c(e.background)),e.environment!==void 0&&(s.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Tl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new El(e.fog.color,e.fog.density)),e.fog.name!==""&&(s.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(s.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(s.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&s.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(s.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&s.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":s=new Nt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new bl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new su(e.color,e.intensity);break;case"DirectionalLight":s=new ru(e.color,e.intensity),s.target=e.target||"";break;case"PointLight":s=new iu(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new Mm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new xm(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),s.target=e.target||"";break;case"HemisphereLight":s=new ym(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new Sm().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),s=new Xp(h,u),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),s=new et(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const d=e.count,f=e.instanceMatrix,p=e.instanceColor;s=new Yp(h,u,d),s.instanceMatrix=new lr(new Float32Array(f.array),16),p!==void 0&&(s.instanceColor=new lr(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),s=new qp(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),s.geometry=h,s.perObjectFrustumCulled=e.perObjectFrustumCulled,s.sortObjects=e.sortObjects,s._drawRanges=e.drawRanges,s._reservedRanges=e.reservedRanges,s._visibility=e.visibility,s._active=e.active,s._bounds=e.bounds.map(v=>{const g=new Xt;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);const m=new Ot;return m.radius=v.sphereRadius,m.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:m}}),s._maxInstanceCount=e.maxInstanceCount,s._maxVertexCount=e.maxVertexCount,s._maxIndexCount=e.maxIndexCount,s._geometryInitialized=e.geometryInitialized,s._geometryCount=e.geometryCount,s._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(s._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":s=new Wp;break;case"Line":s=new xn(o(e.geometry),l(e.material));break;case"LineLoop":s=new Zp(o(e.geometry),l(e.material));break;case"LineSegments":s=new Sn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":s=new Wh(o(e.geometry),l(e.material));break;case"Sprite":s=new Hp(l(e.material));break;case"Group":s=new Qi;break;case"Bone":s=new Vh;break;default:s=new nt}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.up!==void 0&&s.up.fromArray(e.up),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(s.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)s.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];s.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],v=s.getObjectByProperty("uuid",p.object);v!==void 0&&s.addLevel(v,p.distance,p.hysteresis)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new nt}})}}const ib={UVMapping:ll,CubeReflectionMapping:oi,CubeRefractionMapping:wi,EquirectangularReflectionMapping:Bs,EquirectangularRefractionMapping:zs,CubeUVReflectionMapping:Jr},Yd={RepeatWrapping:Yr,ClampToEdgeWrapping:_n,MirroredRepeatWrapping:Gs},qd={NearestFilter:Rt,NearestMipmapNearestFilter:Mh,NearestMipmapLinearFilter:Br,LinearFilter:gt,LinearMipmapNearestFilter:As,LinearMipmapLinearFilter:zn};class rb extends on{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=ri.get(e);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ri.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ri.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(e,l),r.manager.itemStart(e)}}let oo;class ou{static getContext(){return oo===void 0&&(oo=new(window.AudioContext||window.webkitAudioContext)),oo}static setContext(e){oo=e}}class Am extends on{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new ci(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(l){try{const c=l.slice(0);ou.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const Zd=new We,Kd=new We,ki=new We;class sb{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Nt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Nt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ki.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,s=t.near*Math.tan(nr*t.fov*.5)/t.zoom;let o,l;Kd.elements[12]=-i,Zd.elements[12]=i,o=-s*t.aspect+r,l=s*t.aspect+r,ki.elements[0]=2*t.near/(l-o),ki.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ki),o=-s*t.aspect-r,l=s*t.aspect-r,ki.elements[0]=2*t.near/(l-o),ki.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ki)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Kd),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Zd)}}class lu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jd(){return(typeof performance>"u"?Date:performance).now()}const Bi=new L,jd=new Wt,ab=new L,zi=new L;class Em extends nt{constructor(){super(),this.type="AudioListener",this.context=ou.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new lu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Bi,jd,ab),zi.set(0,0,-1).applyQuaternion(jd),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Bi.x,i),t.positionY.linearRampToValueAtTime(Bi.y,i),t.positionZ.linearRampToValueAtTime(Bi.z,i),t.forwardX.linearRampToValueAtTime(zi.x,i),t.forwardY.linearRampToValueAtTime(zi.y,i),t.forwardZ.linearRampToValueAtTime(zi.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Bi.x,Bi.y,Bi.z),t.setOrientation(zi.x,zi.y,zi.z,n.x,n.y,n.z)}}class nl extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Gi=new L,Qd=new Wt,ob=new L,Vi=new L;class lb extends nl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Gi,Qd,ob),Vi.set(0,0,1).applyQuaternion(Qd);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Gi.x,n),t.positionY.linearRampToValueAtTime(Gi.y,n),t.positionZ.linearRampToValueAtTime(Gi.z,n),t.orientationX.linearRampToValueAtTime(Vi.x,n),t.orientationY.linearRampToValueAtTime(Vi.y,n),t.orientationZ.linearRampToValueAtTime(Vi.z,n)}else t.setPosition(Gi.x,Gi.y,Gi.z),t.setOrientation(Vi.x,Vi.y,Vi.z)}}class cb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Tm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==i;++o)n[r+o]=n[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){Wt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const s=this._workIndex*r;Wt.multiplyQuaternionsFlat(e,s,e,t,e,n),Wt.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){const s=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*s+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){const o=t+s;e[o]=e[o]+e[n+s]*i}}}const cu="\\[\\]\\.:\\/",hb=new RegExp("["+cu+"]","g"),hu="[^"+cu+"]",ub="[^"+cu.replace("\\.","")+"]",db=/((?:WC+[\/:])*)/.source.replace("WC",hu),fb=/(WCOD+)?/.source.replace("WCOD",ub),pb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),mb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),gb=new RegExp("^"+db+fb+pb+mb+"$"),vb=["material","materials","bones","map"];class _b{constructor(e,t,n){const i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ot{constructor(e,t,n){this.path=t,this.parsedPath=n||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,n):new ot(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hb,"")}static parseTrackName(e){const t=gb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);vb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=_b;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=fn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,s=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let v=0,g=s;v!==g;++v)r[v].push(new ot(d,n[v],i[v]))}else if(p<c){o=e[p];const v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[f]=v,e[v]=d;for(let m=0,y=s;m!==y;++m){const _=r[m],x=_[v];let C=_[p];_[p]=x,C===void 0&&(C=new ot(d,n[m],i[m])),_[v]=C}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const l=arguments[s],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,p=i;f!==p;++f){const v=n[f],g=v[u],m=v[h];v[h]=g,v[u]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,s=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],p=--s,v=e[p];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let g=0,m=i;g!==m;++g){const y=n[g],_=y[d],x=y[p];y[u]=_,y[d]=x,y.pop()}}else{const d=--s,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,v=i;p!==v;++p){const g=n[p];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const s=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,s.push(e),o.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){const p=l[d];u[d]=new ot(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length-1,l=s[o],c=e[o];t[c]=n,s[n]=l,s.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Cm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,s=r.length,o=new Array(s),l={endingStart:Ki,endingEnd:Ki};for(let c=0;c!==s;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=pp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,o=i/r;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Rh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulateAdditive(o);break;case vl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===mp;if(e===0)return r===-1?i:s&&(r&1)===1?t-i:i;if(n===fp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(s&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ji,i.endingEnd=Ji):(e?i.endingStart=this.zeroSlopeAtStart?Ji:Ki:i.endingStart=Hs,t?i.endingEnd=this.zeroSlopeAtEnd?Ji:Ki:i.endingEnd=Hs)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const xb=new Float32Array(1);class Mb extends Yn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,s[u]=p;else{if(p=s[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;p=new Tm(ot.create(n,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),s[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,o=s[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,o=s[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qh(new Float32Array(2),new Float32Array(2),1,xb),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?na.findByName(i,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=vl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new Cm(this,s,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?na.findByName(n,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const o=n[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class uu{constructor(e){this.value=e}clone(){return new uu(this.value.clone===void 0?this.value:this.value.clone())}}let bb=0;class Sb extends Yn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:bb++}),this.name="",this.usage=qs,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let s=0;s<r.length;s++)this.uniforms.push(r[s].clone())}return this}clone(){return new this.constructor().copy(this)}}class wb extends Cl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ab{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const $d=new We;class Eb{constructor(e,t,n=0,i=1/0){this.ray=new hr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $d.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($d),this}intersectObject(e,t=!0,n=[]){return dh(e,this,n,t),n.sort(ef),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)dh(e[i],this,n,t);return n.sort(ef),n}}function ef(a,e){return a.distance-e.distance}function dh(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=a.children;for(let s=0,o=r.length;s<o;s++)dh(r[s],e,t,!0)}}class fh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const tf=new me;class Cb{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nf=new L,lo=new L;class Rb{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){nf.subVectors(e,this.start),lo.subVectors(this.end,this.start);const n=lo.dot(lo);let r=lo.dot(nf)/n;return t&&(r=bt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const rf=new L;class Pb extends nt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new qe,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,o=1,l=32;s<l;s++,o++){const c=s/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new ze(i,3));const r=new Et({fog:!1,toneMapped:!1});this.cone=new Sn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),rf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(rf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const xi=new L,co=new We,Hc=new We;class Ib extends Sn{constructor(e){const t=Rm(e),n=new qe,i=[],r=[],s=new De(0,0,1),o=new De(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new ze(i,3)),n.setAttribute("color",new ze(r,3));const l=new Et({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Hc.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(co.multiplyMatrices(Hc,o.matrixWorld),xi.setFromMatrixPosition(co),i.setXYZ(s,xi.x,xi.y,xi.z),co.multiplyMatrices(Hc,o.parent.matrixWorld),xi.setFromMatrixPosition(co),i.setXYZ(s+1,xi.x,xi.y,xi.z),s+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Rm(a){const e=[];a.isBone===!0&&e.push(a);for(let t=0;t<a.children.length;t++)e.push.apply(e,Rm(a.children[t]));return e}class Lb extends et{constructor(e,t,n){const i=new Si(t,4,2),r=new Mn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Ub=new L,sf=new De,af=new De;class Db extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ua(t);i.rotateY(Math.PI*.5),this.material=new Mn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),s=new Float32Array(r.count*3);i.setAttribute("color",new ht(s,3)),this.add(new et(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");sf.copy(this.light.color),af.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?sf:af;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Ub.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Nb extends Sn{constructor(e=10,t=10,n=4473924,i=8947848){n=new De(n),i=new De(i);const r=t/2,s=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=s){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new qe;h.setAttribute("position",new ze(l,3)),h.setAttribute("color",new ze(c,3));const u=new Et({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Fb extends Sn{constructor(e=10,t=16,n=8,i=64,r=4473924,s=8947848){r=new De(r),s=new De(s);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);const v=u&1?r:s;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){const d=u&1?r:s,f=e-e/n*u;for(let p=0;p<i;p++){let v=p/i*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f;o.push(g,0,m),l.push(d.r,d.g,d.b),v=(p+1)/i*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f,o.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new qe;c.setAttribute("position",new ze(o,3)),c.setAttribute("color",new ze(l,3));const h=new Et({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const of=new L,ho=new L,lf=new L;class Pm extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new qe;i.setAttribute("position",new ze([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new Et({fog:!1,toneMapped:!1});this.lightPlane=new xn(i,r),this.add(this.lightPlane),i=new qe,i.setAttribute("position",new ze([0,0,0,0,0,1],3)),this.targetLine=new xn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),of.setFromMatrixPosition(this.light.matrixWorld),ho.setFromMatrixPosition(this.light.target.matrixWorld),lf.subVectors(ho,of),this.lightPlane.lookAt(ho),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ho),this.targetLine.scale.z=lf.length()}}const uo=new L,Mt=new Ml;class Ob extends Sn{constructor(e){const t=new qe,n=new Et({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){i.push(0,0,0),r.push(0,0,0),s[p]===void 0&&(s[p]=[]),s[p].push(i.length/3-1)}t.setAttribute("position",new ze(i,3)),t.setAttribute("color",new ze(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update();const c=new De(16755200),h=new De(16711680),u=new De(43775),d=new De(16777215),f=new De(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Mt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),At("c",t,e,Mt,0,0,-1),At("t",t,e,Mt,0,0,1),At("n1",t,e,Mt,-n,-i,-1),At("n2",t,e,Mt,n,-i,-1),At("n3",t,e,Mt,-n,i,-1),At("n4",t,e,Mt,n,i,-1),At("f1",t,e,Mt,-n,-i,1),At("f2",t,e,Mt,n,-i,1),At("f3",t,e,Mt,-n,i,1),At("f4",t,e,Mt,n,i,1),At("u1",t,e,Mt,n*.7,i*1.1,-1),At("u2",t,e,Mt,-n*.7,i*1.1,-1),At("u3",t,e,Mt,0,i*2,-1),At("cf1",t,e,Mt,-n,0,1),At("cf2",t,e,Mt,n,0,1),At("cf3",t,e,Mt,0,-i,1),At("cf4",t,e,Mt,0,i,1),At("cn1",t,e,Mt,-n,0,-1),At("cn2",t,e,Mt,n,0,-1),At("cn3",t,e,Mt,0,-i,-1),At("cn4",t,e,Mt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function At(a,e,t,n,i,r,s){uo.set(i,r,s).unproject(n);const o=e[a];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],uo.x,uo.y,uo.z)}}const fo=new Xt;class kb extends Sn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new qe;r.setIndex(new ht(n,1)),r.setAttribute("position",new ht(i,3)),super(r,new Et({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&fo.setFromObject(this.object),fo.isEmpty())return;const t=fo.min,n=fo.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bb extends Sn{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new qe;r.setIndex(new ht(n,1)),r.setAttribute("position",new ze(i,3)),super(r,new Et({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class zb extends xn{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],s=new qe;s.setAttribute("position",new ze(r,3)),s.computeBoundingSphere(),super(s,new Et({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new qe;l.setAttribute("position",new ze(o,3)),l.computeBoundingSphere(),this.add(new et(l,new Mn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const cf=new L;let po,Wc;class Gb extends nt{constructor(e=new L(0,0,1),t=new L(0,0,0),n=1,i=16776960,r=n*.2,s=r*.2){super(),this.type="ArrowHelper",po===void 0&&(po=new qe,po.setAttribute("position",new ze([0,0,0,0,1,0],3)),Wc=new yn(0,.5,1,5,1),Wc.translate(0,-.5,0)),this.position.copy(t),this.line=new xn(po,new Et({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new et(Wc,new Mn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{cf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(cf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Im extends Sn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new qe;i.setAttribute("position",new ze(t,3)),i.setAttribute("color",new ze(n,3));const r=new Et({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new De,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vb{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Js,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,s){return this.currentPath.bezierCurveTo(e,t,n,i,r,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const y=[];for(let _=0,x=m.length;_<x;_++){const C=m[_],E=new ir;E.curves=C.curves,y.push(E)}return y}function n(m,y){const _=y.length;let x=!1;for(let C=_-1,E=0;E<_;C=E++){let w=y[C],R=y[E],S=R.x-w.x,M=R.y-w.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(w=y[E],S=-S,R=y[C],M=-M),m.y<w.y||m.y>R.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const D=M*(m.x-w.x)-S*(m.y-w.y);if(D===0)return!0;if(D<0)continue;x=!x}}else{if(m.y!==w.y)continue;if(R.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=R.x)return!0}}return x}const i=Vn.isClockWise,r=this.subPaths;if(r.length===0)return[];let s,o,l;const c=[];if(r.length===1)return o=r[0],l=new ir,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],p=0,v;d[p]=void 0,f[p]=[];for(let m=0,y=r.length;m<y;m++)o=r[m],v=o.getPoints(),s=i(v),s=e?!s:s,s?(!h&&d[p]&&p++,d[p]={s:new ir,p:v},d[p].s.curves=o.curves,h&&p++,f[p]=[]):f[p].push({h:o,p:v[0]});if(!d[0])return t(r);if(d.length>1){let m=!1,y=0;for(let _=0,x=d.length;_<x;_++)u[_]=[];for(let _=0,x=d.length;_<x;_++){const C=f[_];for(let E=0;E<C.length;E++){const w=C[E];let R=!0;for(let S=0;S<d.length;S++)n(w.p,d[S].p)&&(_!==S&&y++,R?(R=!1,u[S].push(w)):m=!0);R&&u[_].push(w)}}y>0&&m===!1&&(f=u)}let g;for(let m=0,y=d.length;m<y;m++){l=d[m].s,c.push(l),g=f[m];for(let _=0,x=g.length;_<x;_++)l.holes.push(g[_].h)}return c}}class Hb extends Un{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);const Wb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:lp,AddEquation:bi,AddOperation:rp,AdditiveAnimationBlendMode:Rh,AdditiveBlending:Qc,AgXToneMapping:hp,AlphaFormat:Ah,AlwaysCompare:wp,AlwaysDepth:jf,AlwaysStencilFunc:nh,AmbientLight:su,AnimationAction:Cm,AnimationClip:na,AnimationLoader:KM,AnimationMixer:Mb,AnimationObjectGroup:yb,AnimationUtils:XM,ArcCurve:Jp,ArrayCamera:zp,ArrowHelper:Gb,AttachedBindMode:th,Audio:nl,AudioAnalyser:cb,AudioContext:ou,AudioListener:Em,AudioLoader:Am,AxesHelper:Im,BackSide:Ht,BasicDepthPacking:gp,BasicShadowMap:Km,BatchedMesh:qp,Bone:Vh,BooleanKeyframeTrack:dr,Box2:Cb,Box3:Xt,Box3Helper:Bb,BoxGeometry:ur,BoxHelper:kb,BufferAttribute:ht,BufferGeometry:qe,BufferGeometryLoader:wm,ByteType:bh,Cache:ri,Camera:Ml,CameraHelper:Ob,CanvasTexture:mM,CapsuleGeometry:Ll,CatmullRomCurve3:jp,CineonToneMapping:op,CircleGeometry:Ul,ClampToEdgeWrapping:_n,Clock:lu,Color:De,ColorKeyframeTrack:$h,ColorManagement:ct,CompressedArrayTexture:fM,CompressedCubeTexture:pM,CompressedTexture:Pl,CompressedTextureLoader:JM,ConeGeometry:Dl,ConstantAlphaFactor:Zf,ConstantColorFactor:Yf,CubeCamera:Lp,CubeReflectionMapping:oi,CubeRefractionMapping:wi,CubeTexture:la,CubeTextureLoader:jM,CubeUVReflectionMapping:Jr,CubicBezierCurve:Yh,CubicBezierCurve3:Qp,CubicInterpolant:mm,CullFaceBack:jc,CullFaceFront:Pf,CullFaceFrontBack:Zm,CullFaceNone:Rf,Curve:Nn,CurvePath:em,CustomBlending:Lf,CustomToneMapping:cp,CylinderGeometry:yn,Cylindrical:Tb,Data3DTexture:Dh,DataArrayTexture:yl,DataTexture:Ln,DataTextureLoader:QM,DataUtils:s0,DecrementStencilOp:og,DecrementWrapStencilOp:cg,DefaultLoadingManager:_m,DepthFormat:tr,DepthStencilFormat:ar,DepthTexture:Bh,DetachedBindMode:dp,DirectionalLight:ru,DirectionalLightHelper:Pm,DiscreteInterpolant:gm,DisplayP3ColorSpace:_l,DodecahedronGeometry:Nl,DoubleSide:jt,DstAlphaFactor:Gf,DstColorFactor:Hf,DynamicCopyUsage:wg,DynamicDrawUsage:_g,DynamicReadUsage:Mg,EdgesGeometry:Fl,EllipseCurve:Il,EqualCompare:xp,EqualDepth:$f,EqualStencilFunc:fg,EquirectangularReflectionMapping:Bs,EquirectangularRefractionMapping:zs,Euler:pn,EventDispatcher:Yn,ExtrudeGeometry:kl,FileLoader:ci,Float16BufferAttribute:u0,Float32BufferAttribute:ze,FloatType:an,Fog:Tl,FogExp2:El,FramebufferTexture:dM,FrontSide:Wn,Frustum:ca,GLBufferAttribute:Ab,GLSL1:Eg,GLSL3:ih,GreaterCompare:Mp,GreaterDepth:tp,GreaterEqualCompare:Sp,GreaterEqualDepth:ep,GreaterEqualStencilFunc:vg,GreaterStencilFunc:mg,GridHelper:Nb,Group:Qi,HalfFloatType:jr,HemisphereLight:ym,HemisphereLightHelper:Db,IcosahedronGeometry:Bl,ImageBitmapLoader:rb,ImageLoader:ia,ImageUtils:Cp,IncrementStencilOp:ag,IncrementWrapStencilOp:lg,InstancedBufferAttribute:lr,InstancedBufferGeometry:au,InstancedInterleavedBuffer:wb,InstancedMesh:Yp,Int16BufferAttribute:c0,Int32BufferAttribute:h0,Int8BufferAttribute:a0,IntType:cl,InterleavedBuffer:Cl,InterleavedBufferAttribute:or,Interpolant:fa,InterpolateDiscrete:Vs,InterpolateLinear:jo,InterpolateSmooth:_o,InvertStencilOp:hg,KeepStencilOp:Yi,KeyframeTrack:Fn,LOD:Wp,LatheGeometry:ha,Layers:xl,LessCompare:yp,LessDepth:Qf,LessEqualCompare:Ih,LessEqualDepth:ks,LessEqualStencilFunc:pg,LessStencilFunc:dg,Light:Ti,LightProbe:Sm,Line:xn,Line3:Rb,LineBasicMaterial:Et,LineCurve:qh,LineCurve3:$p,LineDashedMaterial:dm,LineLoop:Zp,LineSegments:Sn,LinearDisplayP3ColorSpace:oa,LinearFilter:gt,LinearInterpolant:Qh,LinearMipMapLinearFilter:$m,LinearMipMapNearestFilter:Qm,LinearMipmapLinearFilter:zn,LinearMipmapNearestFilter:As,LinearSRGBColorSpace:hi,LinearToneMapping:sp,LinearTransfer:Ws,Loader:on,LoaderUtils:uh,LoadingManager:eu,LoopOnce:fp,LoopPingPong:mp,LoopRepeat:pp,LuminanceAlphaFormat:Eh,LuminanceFormat:fl,MOUSE:Wi,Material:Yt,MaterialLoader:Xl,MathUtils:Ap,Matrix3:Je,Matrix4:We,MaxEquation:Ff,Mesh:et,MeshBasicMaterial:Mn,MeshDepthMaterial:wl,MeshDistanceMaterial:Al,MeshLambertMaterial:hm,MeshMatcapMaterial:um,MeshNormalMaterial:cm,MeshPhongMaterial:om,MeshPhysicalMaterial:tl,MeshStandardMaterial:In,MeshToonMaterial:lm,MinEquation:Nf,MirroredRepeatWrapping:Gs,MixOperation:ip,MultiplyBlending:eh,MultiplyOperation:sa,NearestFilter:Rt,NearestMipMapLinearFilter:jm,NearestMipMapNearestFilter:Jm,NearestMipmapLinearFilter:Br,NearestMipmapNearestFilter:Mh,NeutralToneMapping:up,NeverCompare:_p,NeverDepth:Jf,NeverStencilFunc:ug,NoBlending:si,NoColorSpace:ni,NoToneMapping:ai,NormalAnimationBlendMode:vl,NormalBlending:er,NotEqualCompare:bp,NotEqualDepth:np,NotEqualStencilFunc:gg,NumberKeyframeTrack:ea,Object3D:nt,ObjectLoader:nb,ObjectSpaceNormalMap:vp,OctahedronGeometry:ua,OneFactor:kf,OneMinusConstantAlphaFactor:Kf,OneMinusConstantColorFactor:qf,OneMinusDstAlphaFactor:Vf,OneMinusDstColorFactor:Wf,OneMinusSrcAlphaFactor:wo,OneMinusSrcColorFactor:zf,OrthographicCamera:bl,P3Primaries:Ys,PCFShadowMap:xh,PCFSoftShadowMap:If,PMREMGenerator:rh,Path:Js,PerspectiveCamera:Nt,Plane:ti,PlaneGeometry:bn,PlaneHelper:zb,PointLight:iu,PointLightHelper:Lb,Points:Wh,PointsMaterial:Hh,PolarGridHelper:Fb,PolyhedronGeometry:Ei,PositionalAudio:lb,PropertyBinding:ot,PropertyMixer:Tm,QuadraticBezierCurve:Zh,QuadraticBezierCurve3:Kh,Quaternion:Wt,QuaternionKeyframeTrack:pa,QuaternionLinearInterpolant:vm,RED_GREEN_RGTC2_Format:Ko,RED_RGTC1_Format:Ch,REVISION:ol,RGBADepthPacking:Ph,RGBAFormat:$t,RGBAIntegerFormat:gl,RGBA_ASTC_10x10_Format:Ho,RGBA_ASTC_10x5_Format:zo,RGBA_ASTC_10x6_Format:Go,RGBA_ASTC_10x8_Format:Vo,RGBA_ASTC_12x10_Format:Wo,RGBA_ASTC_12x12_Format:Xo,RGBA_ASTC_4x4_Format:Lo,RGBA_ASTC_5x4_Format:Uo,RGBA_ASTC_5x5_Format:Do,RGBA_ASTC_6x5_Format:No,RGBA_ASTC_6x6_Format:Fo,RGBA_ASTC_8x5_Format:Oo,RGBA_ASTC_8x6_Format:ko,RGBA_ASTC_8x8_Format:Bo,RGBA_BPTC_Format:Ps,RGBA_ETC2_EAC_Format:Io,RGBA_PVRTC_2BPPV1_Format:Co,RGBA_PVRTC_4BPPV1_Format:To,RGBA_S3TC_DXT1_Format:Ts,RGBA_S3TC_DXT3_Format:Cs,RGBA_S3TC_DXT5_Format:Rs,RGBFormat:dl,RGBIntegerFormat:eg,RGB_BPTC_SIGNED_Format:Yo,RGB_BPTC_UNSIGNED_Format:qo,RGB_ETC1_Format:Ro,RGB_ETC2_Format:Po,RGB_PVRTC_2BPPV1_Format:Eo,RGB_PVRTC_4BPPV1_Format:Ao,RGB_S3TC_DXT1_Format:Es,RGFormat:Th,RGIntegerFormat:ml,RawShaderMaterial:am,Ray:hr,Raycaster:Eb,Rec709Primaries:Xs,RectAreaLight:Mm,RedFormat:pl,RedIntegerFormat:aa,ReinhardToneMapping:ap,RenderTarget:Rp,RepeatWrapping:Yr,ReplaceStencilOp:sg,ReverseSubtractEquation:Df,RingGeometry:zl,SIGNED_RED_GREEN_RGTC2_Format:Jo,SIGNED_RED_RGTC1_Format:Zo,SRGBColorSpace:vn,SRGBTransfer:ft,Scene:zh,ShaderChunk:Qe,ShaderLib:Pn,ShaderMaterial:Dn,ShadowMaterial:sm,Shape:ir,ShapeGeometry:Gl,ShapePath:Vb,ShapeUtils:Vn,ShortType:Sh,Skeleton:Rl,SkeletonHelper:Ib,SkinnedMesh:Xp,Source:ji,Sphere:Ot,SphereGeometry:Si,Spherical:fh,SphericalHarmonics3:bm,SplineCurve:Jh,SpotLight:xm,SpotLightHelper:Pb,Sprite:Hp,SpriteMaterial:Gh,SrcAlphaFactor:So,SrcAlphaSaturateFactor:Xf,SrcColorFactor:Bf,StaticCopyUsage:Sg,StaticDrawUsage:qs,StaticReadUsage:xg,StereoCamera:sb,StreamCopyUsage:Ag,StreamDrawUsage:yg,StreamReadUsage:bg,StringKeyframeTrack:fr,SubtractEquation:Uf,SubtractiveBlending:$c,TOUCH:Xi,TangentSpaceNormalMap:Ai,TetrahedronGeometry:Vl,Texture:yt,TextureLoader:tu,TextureUtils:Yx,TorusGeometry:da,TorusKnotGeometry:Hl,Triangle:dn,TriangleFanDrawMode:ig,TriangleStripDrawMode:ng,TrianglesDrawMode:tg,TubeGeometry:Wl,UVMapping:ll,Uint16BufferAttribute:Nh,Uint32BufferAttribute:Fh,Uint8BufferAttribute:o0,Uint8ClampedBufferAttribute:l0,Uniform:uu,UniformsGroup:Sb,UniformsLib:Ne,UniformsUtils:Oh,UnsignedByteType:Xn,UnsignedInt248Type:sr,UnsignedInt5999Type:wh,UnsignedIntType:li,UnsignedShort4444Type:hl,UnsignedShort5551Type:ul,UnsignedShortType:qr,VSMShadowMap:Bn,Vector2:me,Vector3:L,Vector4:lt,VectorKeyframeTrack:ta,VideoTexture:Kp,WebGL3DRenderTarget:Kg,WebGLArrayRenderTarget:Zg,WebGLCoordinateSystem:Gn,WebGLCubeRenderTarget:Up,WebGLMultipleRenderTargets:Hb,WebGLRenderTarget:Un,WebGLRenderer:Gp,WebGLUtils:Bp,WebGPUCoordinateSystem:Zs,WireframeGeometry:rm,WrapAroundEnding:Hs,ZeroCurvatureEnding:Ki,ZeroFactor:Of,ZeroSlopeEnding:Ji,ZeroStencilOp:rg,createCanvasElement:Tp},Symbol.toStringTag,{value:"Module"})),Os=class Os{constructor(e,t,n,i,r,s,o,l,c,h,u=!1,d=!1,f=!1){this.measure=e,this.tick=t,this.laneIndex=n,this.noteRadius=o,this.laneWidth=l,this.laneHeight=c,this.color=h,this.x=i,this.z=s,this.start_y=r,this.max_y=c/2,this.min_y=-c/2,this.meshName="lane_"+n,this.starting_position=new L(this.x,this.start_y,this.z),this.mainMaterial=this.createRegularMaterial(),this.sideMaterial=this.createSideMaterial(),this.mesh=this.createMesh(this.mainMaterial,this.sideMaterial,u,f),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.collided=!1,this.accuracy=0,this.hitted=!1,this.isSpecial=u,this.isLastSpecial=d,this.isStarPowerMaterialOn=!1}createRegularMaterial(){return new In({color:this.color,metalness:.6,roughness:.4,name:"regular_"+this.color,wireframe:!1,side:jt})}createSideMaterial(){return new In({color:16777215,metalness:.2,roughness:.6,wireframe:!1,side:jt})}createEdgeMesh(e,t,n=120){const i=new Fl(e,n),r=new Et({color:t});return new Sn(i,r)}createMesh(e,t,n,i=!1){this.material=e,i&&this.material.color.setHex(Os.starPowerColor);const r=.95*this.noteRadius,s=.4*this.noteRadius,o=.3*this.noteRadius,l=.4*this.noteRadius,c=.1*this.noteRadius;var h;n?h=this.createStarMeshes(s,r,l,o,c,t,e):h=this.createRegularMeshes(s,r,l,o,c,t,e);const u=h.bottom.mesh,d=h.central.mesh,f=h.top.mesh,p=0,v=this.createEdgeMesh(h.bottom.geometry,p),g=this.createEdgeMesh(h.central.geometry,p),m=this.createEdgeMesh(h.top.geometry,p);u.add(v),d.add(g),d.name="central",f.add(m);const y=new nt;return y.add(u),y.add(d),y.add(f),y.position.copy(this.starting_position),y.name=this.meshName,y}createRegularMeshes(e,t,n,i,r,s,o){t*=1.25;const l=new yn(t,t,i,32,1),c=new et(l,s);c.rotation.x=Math.PI/2,c.rotation.y=Math.PI/2;const h=new yn(e,t,n,32,1),u=new et(h,o);u.rotation.x=Math.PI/2,u.rotation.y=Math.PI/2,u.position.z=n/2+i/2;const d=new yn(e,e,r,32,1),f=new et(d,s);return f.rotation.x=Math.PI/2,f.rotation.y=Math.PI/2,f.position.z=n+i-r,{bottom:{geometry:l,mesh:c},central:{geometry:h,mesh:u},top:{geometry:d,mesh:f}}}createStarMeshes(e,t,n,i,r,s,o){const l=t*1.5,c=t*.75,h=5,u=[],d=[];for(let S=0;S<h;S++){const M=S*2*Math.PI/h,D=(S+.5)*2*Math.PI/h;u.push(Math.cos(M)*l,Math.sin(M)*l,0-i/2),u.push(Math.cos(D)*c,Math.sin(D)*c,0-i/2)}const f=u.length/3,p=1;for(let S=0;S<h;S++){const M=S*2*Math.PI/h,D=(S+.5)*2*Math.PI/h;u.push(Math.cos(M)*l*p,Math.sin(M)*l*p,i/2),u.push(Math.cos(D)*c*p,Math.sin(D)*c*p,i/2),d.push(Math.cos(M)*l*p,Math.sin(M)*l*p,i/2),d.push(Math.cos(D)*c*p,Math.sin(D)*c*p,i/2)}const v=e;for(let S=0;S<h;S++){const M=S*2*Math.PI/h,D=(S+.5)*2*Math.PI/h;d.push(Math.cos(M)*l*v,Math.sin(M)*l*v,n+i),d.push(Math.cos(D)*c*v,Math.sin(D)*c*v,n+i)}const g=[],m=[];for(let S=0;S<h*2;S++){const M=(S+1)%(h*2);g.push(S,M,f+S),g.push(M,f+M,f+S),m.push(S,M,f+S),m.push(M,f+M,f+S)}const y=new qe;y.setAttribute("position",new ht(new Float32Array(u),3)),y.setIndex(g),y.computeVertexNormals();const _=s.clone();o.color===void 0?_.color.set(0):_.color.set(this.darkenColor(o.color,.95));const x=new et(y,_),C=new qe;C.setAttribute("position",new ht(new Float32Array(d),3)),C.setIndex(m),C.computeVertexNormals();const E=new et(C,o),w=new yn(e,e,r,32,1),R=new et(w,s);return R.rotation.x=Math.PI/2,R.rotation.y=Math.PI/2,R.position.z=n+i-r,{bottom:{geometry:y,mesh:x},central:{geometry:C,mesh:E},top:{geometry:w,mesh:R}}}darkenColor(e,t){const n={};e.getHSL(n),n.l*=1-t;const i=new De;return i.setHSL(n.h,n.s,n.l),i}update(e,t,n){this.isSpecial&&(this.mesh.rotation.z+=.03,e&&(this.removeFromScene(n),this.mesh=this.createMesh(this.mainMaterial,this.sideMaterial,!1),this.addToScene(n))),!this.isStarPowerMaterialOn&&t?(this.material.color.setHex(Os.starPowerColor),this.isStarPowerMaterialOn=!0):this.isStarPowerMaterialOn&&!t&&(this.material.color.setHex(this.color),this.isStarPowerMaterialOn=!1)}reset(){this.mesh.position.copy(this.starting_position),this.accuracy=0,this.collided=!1,this.hit=!1}addToScene(e){this.mesh.visible=!1,e.add(this.mesh)}removeFromScene(e){e.remove(this.mesh)}};wt(Os,"starPowerColor",5234138);let ph=Os;const Hr=class Hr{constructor(e,t,n,i,r,s,o){this.laneIndex=e,this.laneWidth=t,this.laneHeight=n,this.isCurrentlyPressed=!1,this.collidingNote=null,this.notes={},this.p1=new L(0,this.laneHeight/2,0),this.p2=new L(0,-this.laneHeight/2+(1.5*s+o),0),this.x=-(r/2)+this.laneWidth/2+this.laneIndex*this.laneWidth,this.z=i,this.nickelMaterial=new In({color:15658734,metalness:.9,roughness:.3}),this.steelMaterial=new In({color:16777215,metalness:0,roughness:.8}),this.mesh=this.createCylinderLane(this.nickelMaterial,this.p1,this.p2,Hr.radius),this.mesh.position.x=this.x,this.mesh.position.z=this.z}generateNoiseTexture(e,t){const n=new Uint8Array(t*t);for(let r=0;r<t*t;r++)n[r]=e.simplex2(r/t,r%t)*128+128|0;const i=new Ln(n,t,t,fl);return i.needsUpdate=!0,i}createCylinderLane(e,t,n,i,r){return this.material=e,this.geometry=new yn(i,i,t.distanceTo(n),32),new et(this.geometry,this.material)}};wt(Hr,"radius",.015),wt(Hr,"nickelColor",11579568),wt(Hr,"steelColor",10132122);let il=Hr;function Xb(a){return a instanceof nt?(a.geometry&&a.geometry.dispose(),a.material&&(a.material instanceof Array?a.material.forEach(e=>e.dispose()):a.material.dispose()),a.removeFromParent(),!0):!1}function Yb(a,e){return a.size===e.size&&[...a].every(t=>e.has(t))}/*!
	* three-particle-fire
	* https://github.com/yomotsu/three-particle-fire
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 */var qb=4,Lm=1/qb,Um={},Xr={};function Zb(a){Um.THREE=a.THREE;for(var e=0,t=Xr.THREE.length;e<t;e++)Xr.THREE[e]();delete Xr.THREE}function du(a){return Um[a]}function Kb(a,e){Xr[a]||(Xr[a]=[]),Xr[a].push(e)}function Jb(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function jb(){var a=du("THREE");return function e(t,n,i){Jb(this,e);for(var r=new a.BufferGeometry,s=n*.5,o=new Float32Array(i*3),l=new Float32Array(i),c=new Float32Array(i),h=0;h<i;h++){var u=Math.sqrt(Math.random())*t,d=Math.random()*2*Math.PI;o[h*3+0]=Math.cos(d)*u,o[h*3+1]=(t-u)/t*s+s,o[h*3+2]=Math.sin(d)*u,c[h]=Lm*(Math.random()*4|0),l[h]=Math.random(),h===0&&(o[h*3+0]=0,o[h*3+1]=0,o[h*3+2]=0)}return r.setAttribute("position",new a.BufferAttribute(o,3)),r.setAttribute("random",new a.BufferAttribute(l,1)),r.setAttribute("sprite",new a.BufferAttribute(c,1)),r}}var Mi=void 0;function Qb(){if(Mi)return Mi;var a=du("THREE"),e=new Image;return Mi=new a.Texture,Mi.wrapS=Mi.wrapT=a.RepeatWrapping,Mi.image=e,e.onload=function(){Mi.needsUpdate=!0},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABACAMAAADCg1mMAAABgFBMVEUAAAABAQEGBgYLCwsODg4QEBACAgIWFhYbGxsdHR0fHx8gICAjIyMoKCgtLS0wMDAyMjI1NTU2NjY3Nzc4ODgvLy8wLzA5OTk9PT0+Pj4/Pz47OztAQEBDQ0NHR0dLS0tOTk5QUFBSUlJXV1cxMTFcXFxgYGBgYWFiYmJmZmZra2tub25wcHBzc3NxcXEuLi5fX19wb3B3eHd9fHyDg4OGhYWGh4eBgYF+f36JiImLi4uQkZGXl5egoKCkpKSrq6ucnJyQkJCNjY2Pj4+SkpKhoaGurq6zs7O3t7dPT08/QECwsLDGxsbLy8vOzs6vr6+8vLzCwsLW1tbf39/h4eHd3d3X19fT09NfYF9/f3/a2trj4+Po5+js7Ozq6urn5+fm5ubR0dC+v77Pz8/AwMDR0dI3ODjf4N+foJ+enp7p6ene3t6jo6PZ2Nju7u6eoKDZ19fz8/Px8fHw7/DY19hucG7e395OT0/V1dXX1tbY2NqPj435+fl4eHhYWFh9f31mJTJvAAAUEElEQVR4Ae161Z9cR9ZkxMlLRc2SLWk8grHAvMz0tAxPy//Avu4fs/i0jK/7PS0zw4BlYYssS2o1d8GFzBMf1LZmrG652/6N58PTWFXdmSfiZkSecyuJX8FBEfNv89D8O4WfXvBXMv4fp0dAhOYcCL8eCOBhcgRBAILm3366FGS/YuHPg6QBnKN2Ha7/X/MEAHnHOXoGgoQguZIDAqhfHQSQ8G+6+iNJmpnRQg5CIcY4h69fLSvAAgDpG8AHQZgxe3trGCwYSSO7uj6gR/CnKYSAby2YlXlw/2buR2aWZyH0VsJo0O//wmevbwFIEqCfoqcbvrWwavH3lzm/EX6zYHnoL1T9cnmlWllYWlpavLK0sDRcCMbjYdKMRpvHyXR8+xJguVjcHqX2GywBMjBYNsyL/nJcZhyZMcLPlOV/SG9YUySMBgoAXJREgdDPfgUQ87CirBZ6Cxm/pm1yLoD+XxwV1aCfjWxhmXnxYnPr+X7zrJ9XBI+dNBS93mC4NBz2e70qIw0FCJI/cw8gAYL52qCX9bq6+9q1H83y0Fsv+6Pf6udXbKdrdzZiZ7XFYZrUnRxHSCCZFUu9fr9ay/q9QalAI0hyns7PTgI8xMEbTb+ghnXT4NQhzsUcrJcVvVHWZLPnXagboXz3M1WrTbQcAP0Y4rJ+2cuYpUVcvaNB7NxjlDWepCTBfzYEvKKa+c6ZcjWduVNVKepryB80C2GUL6UzYbD39v3ZRz8AgPozMO70b2yDx9UCZGA5WpAsAk96WNEsOq7eVp1ibJvYOiV96wTw1TdYfzBaWFjaXm67izejTv//pFnI8l4Y5ud86073/u2yARSAMlpbvkF0tDCs+kvL5w78xVAYTMAOGv+Wu2sdJ6nOtydtG+U/AxMkQZDWW/xN1eJqOFtWvZ0q8Os4AIMNin5vsKgX78ziZ11dlgoxokHVfF/EcUHLcqtmm7e2Fm26MNyQL4TFbLFZC36jKHs2WFwqc/JbNUGSAEHSGKqlQff2WRLd2uoG3AEQPI0AGDIrqsX+YFDu7z2v8tYR4QXzrrLRwstZM4sSwNe2wHDOc33wUlufN+OXW7v17rOmnrTsj2ZP8+gIQB6lU0mA37DYFvgK/7s7K9lwDRG5Jls9N3TRT1G+UiTB0Ptdm2V55lZW25Q9uKHdF0foX/zf3k6O15NtLZT1/yzatosukZZlRTHYXV24emsc1TpG537gLp1IAEmI8G928wZGyyz09gbht28H26SQlR9834fTrEknUUuIhJkN8rurn9z9rE743l20AAJjl08Xehuz3avPkkS9PpAROsh9FrvkLVoyL4Lle5WtHLBtHRJum53CBElmhBKknxSmn87AYVkeBiFbaEf5g7ewMZoMx4v9B6FEPrU6OUWdZAIMIZS9pYPn7RT2I+QdwNBKWlnt32nG/7GTcAQ/AXlC8pR86hLoKG7cGbW+r4MakvoTQKchIOSZrW1443PLNICEzE+zAGDZd+osz8z6echXgWmccj+7NN7LLavRduJJDAK0Xr60hv87nQEuRMj7Y7j1Ru3WbGevcx0FIrgUDUnu0yRBlgXdzPDRQbk7hiQA7qfwALIohmwXZ2yjCfMLYojxpK5WBMFQtWVuobDFtrcgU3fhPocKRQBGDPv2VX0B54NYKKqlUba13QEAHBJ2IJQLYWFnfxzlx98VdMUMQEqrLxQBNrFHtc8uDdbn2oT7OEonElAtfXzHHHl3EDsXLbdQZfD9OulkAbBayrPKuNCyt3AWXb3/dMlnkZ98fzyrF/aX437bEtBXUMgQFpbf7m0+ffcWbty6cVNSslq+cOaDLx5/MT27HY9vh+W+NHPAuz0lATFjysqV8+WtGQAiTeJB251IAO3c1We5jybgQjqQyKKyQPpicupECwyLJc3CoGV7ZVncWfpR3T/bFgfjq4+fxzoAo3H31b08LSz0RpcevmhvQp/iR4qtrw0eCP3V0dbUu/tRb6AP2gh9Z5hbFgKUl0tL9tlugAApxi7KT5RAaNaDYUoODmzRkXILhBls0EknNkDMy1hy1NBGK07qQadLt85Ui/mqt5MJaHl/6gQAvWkPYK94a/j4yVQAJKFNl9YhZGcu/d8P/kesO4E6toPwZGoykIv1fIKzsVpZnI7RCEK13+13rhPbYcvyfmUEWIf8F+I3Z1kwYwhF+dXFnCCAoSrC9dG1cPXCdQfQ7Wb2//aebe43k4Ozv/mtDL8kJwEC+YYqMBT9rNwaC4KQ0LgeQODK+QfV3dn1NknScfRJkjuQyi0aAXI7P2PYBABVaZImKZ5MABFKI0GSNggh3MkMgwFRZXlOnmACBhtWw6ff2/5Od04kHz2XZVl1sPtk+2lRTC+cycH5MDzWyAESVp5dm+5EAYJsXjsAC5fUndu++J+SiOPwa06YQsi84BxUP7ueX8wAwCdw/24ScPIKyHNjDhJgPTAzDAYAS35Y5DyxCzKOhm9/MiuNz1/U9bNZV4TsA+tPt56sP11p8M6lYpQtGgEQ4LGboJVldWmjBQTIvQwkyO+Nhl39fw9+4DDhTeEuwRkyknM/u5ffEwUADqwDOrEdpvX6g1lDABRmAwAzABbLh+VweuI+ALRn41Pkk07c0qyAiDt084N2nK6NffjuF3kZHIQAHYef7A8X/1cCIQCGWNZ+doO7F8u9br+ZMIiOY2M+YswBAOYGyLv+cPX/ysX+AcBT3RBhxsZoaU5hfbhA8ryvcd6eWMOdXQnTbcuAGkCVkPIEy2yGNnYvvjsqvptvhI2I44xMFEkLv+cLTKNZAkAoS1Wzxf7qJxvTg0aDCRMoHBuUgAxgsjlHiuHleCoEEeY0I0/yACLkoWfvXL/6BwNpRjMLRlbsNVYVwU66DbKV8GI8nmqmqtQMILNgdMI4G5ffv/+j7uzqUiAB8Ms+SM6t590Hb08rhMOikBmzfjX8LdvjOi3kH4/4VSZMIZEMOWkg6jSJb1ughOnAwjAznuABBCz7qP0dQ67MLlWZscpCKMpqOBi1v5hGTiOJN4fZWbRd0OwPVZqpasBrCkSo6Ar6Qfdyb7IUKh6/Dwqk2eejMzszVTAeRs5iVM4OWHl1j4WAN6dAZiSYnSFIVpqmh3mGec5mISNPkABJ+/Tci+LxeOEdPktdzHnt7lK2uDRpNqIVlSen87g3ezQH5RtXs/bKQ/zXWsAMCOt5BJyCp9KDtibW65kEEToiIIA2yKbqsuv/mwl65Q2Luy0X/SBz1A7qzUvwFUJLBiB6t9bWzXwkG6QofbUERCt75ez5ZHvn8dLV31Hk5KOVXr//tDt34b2iGFVVlRdFHoyvN5ZzPPhu6AfciaiRYopSAmC0mTJ3CED7Ym1oIABSRygwMjvHDzx+PxvZISQiJORVe33xOgF7k5sRJOdb9dw/yiSf1DsLi9J8BdgV44kmmDHX8pkvprMe1vSb76LX4/Ufbryz7tWn/SZX560kKSY/tj18sIgCeRIjDAkQOU/sPB7VlQhFFIcKoF6/fjCGZquxD9/9FzVJESDeu2VEd+GL+/EeQFBvrkMubwIUAsBAQNWkv3NhGqRQs39gjwnqBALKfMDn23XsWmmRa3b5wdKLg7hRDNBL2awMqgSpG73ovtweCgZAihC7AMGVX72LQAGQf+cBLj8GALVTgSZx7lpfUpCRlnVIxcZdvqoNedvs/Zd82Zv5aELamwkwPuoFCsJWWNtiEYp25L29lSdZR/caEk4kgIprOmiSq9tNk6rX3J3txvO3a58s5pNkAQ4Iytrh4GlM0BEX2J8s70BICrG7A7CDINcD4QHrCnNcX5bNodBJGCnQlBb2DjeJ9+7Awv+8FqaxV25VdTBSR2FwToBlAJBaDv1iw9D7revFwsKnS7OMsRWUdEIzJCJwN8yUIjx2s35Jb2famUC9c/sAMJgAAOAffHrhC/wkAyQkqbEo6RW6Fq0cXHshAA4PWT7Bq/xFfZk/gsnyMPaMZecmUbdpxmZ64cnqZmCeDd65jUThSJBm7IEATP1irTdI57n5tnOdTd8PkNXdfow6aRcwI5YeTaNHbzSuwvs35TggPty4Faruxx5i9/K2Z1301xCo3vz4mbKO6tRl6HJ41SoOJICrB2We8yBBh1au1+ADaD5burqxd/X2blYegNdvwxhKfo5irz9Z2BtqZzSWH2OAMFoQSQlVebl6fwNNO+QzdbHcVZ3vjJsu6gQCyCwb5jtMXbM8WEfT8O6sxuWHJGcaPmfoMI8BMAmDJJde00DbPbKaBNB5AyWkJsVmHY6grVEegNQK0BvqYKg9aHcWlp952bWZ+20QxlhgXC35OY0XEdS4RB2pIi0wBL53i7B8qVrMnl25Vz1DlZp2p/veD8exSy7hBALsXG5CTFzecJfIpxTvkfhvb82WwrR9NcC0D3Kwb+lLIOTe7K8s1spSiJDkcsSUXEkKYZhBzjTDMQqACEhUiCnr6l4fvX1voicMmpAzT+OFrKiv3l1Bl3egcLSIoBXkLYgo15b2/9vu5rW7wDu3Z/Vs+jS6SzqpFyCzpo+ECrN9eQKSHVZHQt2NDoR5DKaYDg7oV27zNQUoHSzHomUWlcWkJLnXlBxZPgwA1G9qnzOgn/TAwycufl6GmLpZ11cpayJ8muna/V7DSaE0Xt5Z8gmoo1UYyRBICgyD0ds3a5S3kuv/tfV+mxwSgBMJsOzDF/XCRnLAHQ64ASDcVmNaaX/nv+dsAABT09G3lAQCUrv8KOSKQiOlJI/Nd9ejLAs9yC3xoKjTnAG+ZgGA09YDY2DXNXkorbA4dSBfz0Sc/2Kleet5b9wE6Nh76Vc2+f5tACgG1f+cCTWg6qDdq1067QGJ6k6BfRoxf9IMtGAWsNnu3dVohZhiOquNxinA17KQBN/dYcZOXVSVkqfpMN5PzK8VA0ry68KlXUE/CfvQDSUoySetkqudzg6mKSNBIFUB+OH0qfZZZeXEhSMh8JHzNkmG/khdqqqyLKuDOOlcOu0RGevs8pPMgTzKkoFGco4zjXfLp+/mjxvLPEYRQY6HR7oB58R6HfMGKveTt6OD50C48vgx64wZ+Rnw31r31yVwqAEHAU2yUh6ibPrh7bIVgboPYFYwoO7+yF9PR9CTABBIg4dRNdABMJm/lBzC6QggELDe62onz74wygiw7AiAf/znnu2fry6cw3htFrZj3WiwzzOfv1aLSNodbscgJh1c/5H7C4BmjwWxLRKDo5m5XkM/Z08UgCSQFx6xMKfH73sLqZsbUw11mtV/uxV0VAIG8r07GEzQDEM65EjS6Q9JicwGiA2UFQfBxcuPzEKWG6j4c2h1L3901tper1ud5Ss7E2KTr68Apfbeb91sOvOy/TQ24cojmgtr2BTaUHaatulV/scwEAnR1sHRVmldkuuDe1JM6KVgi24+flknADraihK4lQ1qs56hxTwckE5NAChMy4wXNv/0Py+ymfB5lpkhAGAhmLx5916WTypbDuDiDOARFII2Xg7rJNT84NOgzcwThD1cnGDTpynOL58A8AgIAVSiyQNeXHkclCB+mie2RRuzwdVB83Jze8clHd0G5QJu3KlpVvZX7+onvOX0BAipz/xCv/o3uVAEIGUEwFeT4CY9Rg+JmLnhtd5MhIj0+cXB0yi43xQQ3ZGfBx5gb3FtI3YuAOIbUqMASEEyW7/yJM8A4NodQ1u4fWdp88Xm9jg6jt0GgdX6sxywYVk9mh5emxv/T/oaByWpSds8fskyC8yZ/NXwhL1vFj4gAa/ruqu7Orpnfkz6+/cxTOndlDyp6XztYvMAuPzg/ItnsyYJ+P+fxNHQ/CO53PUgNZPZTN2n17rk2fJ7K88fbrzcmrrrmDpSkDZcDtJ9xfJDAj5zSTi9CcI7dM9qWHAXARcNcAD4jMAtmxtr0zD5n/n7s6jX7+uLio9Wf+u/aj9VtDYJ2tsAHlx+gPuNSwR0+HdH0fPVCykk0QhZXemzPDt72Rce7G+M65Qc0DEGArmlDEI+il/MDsDZAJjAR3s4NQGCLLn7ODWv3hhPaEt4IEWR5F/+x4NacCHGv5u66MeYkabr2cLLzlq5CuD8AwAPPHYOQF+pTPGVF6RgYUCKtKIanRkM4/q9/XHnMUk4vqsXutzdQHkuuqZ9QP4ifY3D0kZk6Fo0ddE6otVNF629sBG7ZIkQiB8q9rMsNDHF/m7n6YgZAdTMK49T9+KdzZR2AXjXRgng6c/Yofgr96qqt7B49sx3zhbZ0/WHLycppfQGXydoRAEz9pH2akF9TDxNuqjTT0rL86zXG03c3VOTLq5DEEWCZ7eLjKQRBARP7bRLrwuMAgEif2tlb+poNJdVjC6Bry7wKc7ZIJxdHozafj4q+tP9rfHObjdvLAThDQRkWVYVeTlY2JvJvT+Be7fXdv41WDeaMQ9/7udiSu5yORyAudHMzm73FAgA+uj7kzRvL3XsWFYuK7VZAyh1rzZ+CqCoU+RDDv7qv/r4vmFaPJvuN0kC5nRDwrEE0CxnNiirYjbPW6kdt9H1NQggSGQWCEBRcAkQCBgsGGlmJWJMea0U33A1iHlflRHSXLRfMwgQYVQGeHvhfnIXcTiXoDf9Cxksy0Y5IN34TFA6aKM7vgYBAAkyAHyF/nAjJM3mAgAkd3cJx+IXIYLgCaXoCQzw1a2OQ+M8gv8oA8z75TxDxK47HX7w6NSckw19eXybvwTBJb0xGwqEKFAUvklwziOO7LInsGbMcqOg4vwv7Tyn45+vzy2+olxz4f6YGhCCcPjtq+JE8Ceg0WtnNkXoFKeMDXPa5X46/OCbHur1jPhjXAK+TQJAHAmdWjnzkKBvOBePm46HqKjT9xk/LQpODUXUt5gRDwPEtx+vhPftxm/Eb8TPAwz8rJ6S1NOrAAAAAElFTkSuQmCC",Mi}function $b(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function e1(){var a=du("THREE");return function e(t){$b(this,e);var n={color:{value:null},size:{value:0},map:{value:Qb()},time:{value:0},heightOfNearPlane:{value:0}},i=new a.ShaderMaterial({uniforms:n,vertexShader:["attribute float random;","attribute float sprite;","uniform float time;","uniform float size;","uniform float heightOfNearPlane;","varying float vSprite;","varying float vOpacity;","float PI = 3.14;","float quadraticIn( float t ) {","float tt = t * t;","return tt * tt;","}","void main() {","float progress = fract( time + ( 2.0 * random - 1.0 ) );","float progressNeg = 1.0 - progress;","float ease = quadraticIn( progress );","float influence = sin( PI * ease );","vec3 newPosition = position * vec3( 1.0, ease, 1.0 );","gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );","gl_PointSize = ( heightOfNearPlane * size ) / gl_Position.w;","vOpacity = min( influence * 4.0, 1.0 ) * progressNeg;","vSprite = sprite;","}"].join(`
`),fragmentShader:["uniform vec3 color;","uniform sampler2D map;","varying float vSprite;","varying float vOpacity;","void main() {","vec2 texCoord = vec2(","gl_PointCoord.x * "+Lm+" + vSprite,","gl_PointCoord.y",");","gl_FragColor = vec4( texture2D( map, texCoord ).xyz * color * vOpacity, 1.0 );","}"].join(`
`),blending:a.AdditiveBlending,depthTest:!0,depthWrite:!1,transparent:!0});return i.color=new a.Color(16720384),i.size=.4,t!==void 0&&i.setValues(t),i.uniforms.color.value=i.color,i.uniforms.size.value=i.size,i.update=function(r){i.uniforms.time.value=(i.uniforms.time.value+r)%1},i.setPerspective=function(r,s){i.uniforms.heightOfNearPlane.value=Math.abs(s/(2*Math.tan(a.MathUtils.degToRad(r*.5))))},i}}var Ds={install:Zb};Kb("THREE",function(){Ds.Geometry=jb(),Ds.Material=e1()});const vt=class vt{constructor(e,t,n,i){this.fretboardWidth=e,this.fretboardHeight=t,this.texturePath=n,this.numLanes=i,this.pickupHeight=.8,this.pickupOffset=.5,Ds.install({THREE:Wb}),this.createFretboard(this.fretboardWidth,this.fretboardHeight,this.texturePath),this.createLanes(this.fretboardWidth,this.fretboardHeight,this.pickupHeight,this.pickupOffset),this.createPickup(this.pickupHeight,this.pickupOffset,this.laneWidth,this.laneHeight)}createFretboard(e,t,n){this.textureLoader=new tu,this.texture=this.textureLoader.load(n),this.texture.wrapT=Yr,this.geometry=new bn(e,t),this.material=new tl({map:this.texture}),this.fretboardMesh=new et(this.geometry,this.material),this.darkOverlayMaterial=new Mn({color:0,transparent:!0,opacity:.2}),this.darkOverlayMesh=new et(this.geometry,this.darkOverlayMaterial),this.edges=new Fl(this.geometry),this.borderMaterial=new Et({color:16777215,linewidth:5}),this.borderMesh=new Sn(this.edges,this.borderMaterial),this.mesh=new nt,this.mesh.add(this.fretboardMesh),this.mesh.add(this.borderMesh),this.borderMesh.scale.copy(this.fretboardMesh.scale),this.mesh.position.y=0,this.mesh.position.z=vt.fretboardZ}createLanes(e,t,n,i){this.laneWidth=e/this.numLanes,this.laneHeight=t,this.holeRadius=this.laneWidth/4,this.holeDistance=this.laneWidth,this.lanes=[];for(let r=0;r<this.numLanes;r++){const s=new il(r,this.laneWidth,this.laneHeight,vt.laneZ,e,n,this.holeRadius*vt.coneRadiusFactor);this.mesh.add(s.mesh),this.lanes.push(s)}}createPickup(e,t,n,i){this.pickupWidth=this.numLanes*n,this.pickupAreaMesh=this.createPickupArea(this.pickupWidth,e,16777215,.2,0);const r=new In({color:0,opacity:.8,transparent:!0}),s=new In({color:16777215}),o=new In({color:15263982,side:jt}),l=new In({color:0,opacity:.9,transparent:!0});this.domeMeshName="top_dome",this.holeMeshes=this.createPickupHoles(this.pickupWidth,this.holeRadius,this.holeDistance,0,r,s,o,l,this.domeMeshName),this.pressEffects=this.createPressEffects(this.holeRadius*1,vt.pressEffectHeight,32,.5),this.fireEffects=this.createFireEffects(this.holeRadius/2,vt.fireEffectHeight,vt.fireEffectParticleCount,vt.fireEffectColor),this.pickupMesh=new nt,this.pickupMesh.add(this.pickupAreaMesh),this.pickupMesh.add(...this.holeMeshes),this.pickupMesh.add(...this.pressEffects),this.pickupMesh.add(...this.fireEffects),this.pickupY=-(i/2)+t,this.pickupMesh.position.y=this.pickupY,this.pickupMesh.position.z=vt.pickupZ,this.mesh.add(this.pickupMesh)}createPickupArea(e,t,n,i,r){const s=new bn(e,t),o=new tl({color:n,transparent:!0,opacity:i}),l=new et(s,o);return l.position.z=r,l.visible=!1,l}createPickupCone(e,t,n,i){const r=new qe,s=[],o=32,l=Math.PI,c=Math.PI;for(let f=0;f<=o;f++){const p=l+f*c/o;s.push(e*Math.cos(p),0,e*Math.sin(p))}const h=s.length/3;s.push(0,t+il.radius,-n);const u=[];for(let f=0;f<o;f++)u.push(f,(f+1)%o,h);r.setAttribute("position",new ze(s,3)),r.setIndex(u),r.computeVertexNormals();const d=new et(r,i);return d.rotation.x=Math.PI,d}createPickupHoles(e,t,n,i,r,s,o,l,c){const h=[];for(let u=0;u<this.numLanes;u++){const d=new Qi,f=s.clone();f.color.setHex(vt.colors[u]);const p=vt.laneZ,v=this.createPickupCone(t*vt.coneRadiusFactor,p,t,r);v.rotation.x=Math.PI/2,d.add(v);const g=new da(t,.02,16,100),m=new et(g,f);d.add(m);const y=new Si(2.25*t,32,16,0,Math.PI*2,Math.PI/16,Math.PI/14),_=new et(y,o);_.rotation.x=-Math.PI/2,_.position.z=2.25*t-t/8,d.add(_);const x=new Si(1.8*t,32,16,0,Math.PI*2,Math.PI/10,Math.PI/14),C=new et(x,f);C.rotation.x=+Math.PI/2,C.position.z=-1.8*t+t/6,d.add(C);const E=new Si(1.8*t,32,16,0,Math.PI*2,0,Math.PI/10),w=l.clone(),R=new et(E,w);R.rotation.x=Math.PI/2,R.position.z=-1.8*t+t/6,R.name=c,d.add(R),d.position.x=-(e/2)+(u+.5)*n,d.position.z=i,h.push(d)}return h}createFireEffects(e,t,n,i){const r=window.innerHeight,s=[];for(let o=0;o<this.numLanes;o++){const l=new Ds.Geometry(e,t,n),c=new Ds.Material({color:i});c.setPerspective(75,r);const h=new Wh(l,c);h.rotation.x=Math.PI/2,h.position.copy(this.holeMeshes[o].position),h.visible=!1,s.push(h)}return s}isFireEffectActive(e){return e.visible}enableFireEffect(e){this.enableFireEffectOriginal(this.fireEffects[e])}enableFireEffectOriginal(e){e.visible=!0}disableFireEffect(e){this.disableFireEffectOriginal(this.fireEffects[e])}disableFireEffectOriginal(e){e.visible=!1}disableActiveFireEffects(){this.fireEffects.filter(e=>this.isFireEffectActive(e)).forEach(e=>{this.disableFireEffectOriginal(e)})}createPressEffects(e,t,n,i){const r=[];for(let s=0;s<this.numLanes;s++){const o=new yn(e,e,t,n),l=new Mn({color:vt.colors[s],transparent:!0,opacity:i}),c=new et(o,l);c.rotation.x=Math.PI/2,c.position.copy(this.holeMeshes[s].position),c.position.z+=t/2,r.push(c),c.visible=!1}return r}enablePressEffect(e){this.pressEffects[e].visible=!0,this.holeMeshes[e].getObjectByName(this.domeMeshName).material.color.setHex(vt.colors[e])}disablePressEffect(e){this.pressEffects[e].visible=!1,this.holeMeshes[e].getObjectByName(this.domeMeshName).material.color.setHex(0)}addToScene(e){e.add(this.mesh)}updatePressAnimations(e){this.lanes.forEach(t=>{const n=t.laneIndex,i=e.includes(n);i&&!t.isCurrentlyPressed?this.enablePressEffect(n):!i&&t.isCurrentlyPressed&&this.disablePressEffect(n),t.isCurrentlyPressed=i})}updateTextureScroll(e){this.texture.offset.y+=e/this.fretboardHeight}updateFireEffects(e){this.fireEffects.forEach(t=>{this.isFireEffectActive(t)&&t.material.update(e)})}update(e,t,n){this.updatePressAnimations(e),this.updateTextureScroll(n),this.updateFireEffects(t)}};wt(vt,"fretboardZ",-.01),wt(vt,"laneZ",.3),wt(vt,"pickupZ",0),wt(vt,"pressEffectHeight",.01),wt(vt,"fireEffectParticleCount",400),wt(vt,"fireEffectHeight",1),wt(vt,"fireEffectColor",16720384),wt(vt,"coneRadiusFactor",1.2),wt(vt,"colors",{0:65280,1:16711680,2:16776960,3:35327,4:16757504});let rl=vt;const t1={title:"In Too Deep",author:"Sum 41",year:2001,bpm:116,resolution:8,ticks_per_beat:2},n1=[{measure:1,tick:0,lanes:[0]},{measure:1,tick:1,lanes:[0]},{measure:1,tick:3,lanes:[0]},{measure:1,tick:4,lanes:[1]},{measure:1,tick:5,lanes:[2]},{measure:1,tick:6,lanes:[3]},{measure:1,tick:7,lanes:[2]},{measure:2,tick:1,lanes:[3]},{measure:2,tick:2,lanes:[2]},{measure:2,tick:3,lanes:[2]},{measure:2,tick:4,lanes:[2]},{measure:2,tick:5,lanes:[1]},{measure:2,tick:6,lanes:[0]},{measure:2,tick:7,lanes:[1]},"begin_loading_star_phase",{measure:3,tick:0,lanes:[0]},{measure:3,tick:1,lanes:[0]},{measure:3,tick:3,lanes:[0]},{measure:3,tick:4,lanes:[1]},{measure:3,tick:5,lanes:[2]},{measure:3,tick:6,lanes:[3]},{measure:3,tick:7,lanes:[2]},{measure:4,tick:1,lanes:[3]},{measure:4,tick:2,lanes:[2]},{measure:4,tick:3,lanes:[2]},{measure:4,tick:4,lanes:[2]},{measure:4,tick:5,lanes:[1]},{measure:4,tick:6,lanes:[0]},{measure:4,tick:7,lanes:[1]},"end_loading_star_phase",{measure:5,tick:0,lanes:[0]},{measure:5,tick:1,lanes:[0]},{measure:5,tick:3,lanes:[0]},{measure:5,tick:4,lanes:[1]},{measure:5,tick:5,lanes:[2]},{measure:5,tick:6,lanes:[3]},{measure:5,tick:7,lanes:[2]},{measure:6,tick:1,lanes:[3]},{measure:6,tick:2,lanes:[2]},{measure:6,tick:3,lanes:[2]},{measure:6,tick:4,lanes:[2]},{measure:6,tick:5,lanes:[1]},{measure:6,tick:6,lanes:[0]},{measure:6,tick:7,lanes:[1]},{measure:7,tick:0,lanes:[0]},{measure:7,tick:1,lanes:[0]},{measure:7,tick:3,lanes:[0]},{measure:7,tick:4,lanes:[1]},{measure:7,tick:5,lanes:[2]},{measure:7,tick:6,lanes:[3]},{measure:7,tick:7,lanes:[2]},{measure:8,tick:1,lanes:[3]},{measure:8,tick:2,lanes:[2]},{measure:8,tick:3,lanes:[2]},{measure:8,tick:4,lanes:[2]},{measure:8,tick:5,lanes:[1]},{measure:8,tick:6,lanes:[0]},{measure:8,tick:7,lanes:[1]},{measure:9,tick:0,lanes:[0]},{measure:9,tick:1,lanes:[0]},{measure:9,tick:3,lanes:[0]},{measure:9,tick:4,lanes:[1]},{measure:9,tick:5,lanes:[2]},{measure:9,tick:6,lanes:[3]},{measure:9,tick:7,lanes:[2]},{measure:10,tick:1,lanes:[3]},{measure:10,tick:2,lanes:[2]},{measure:10,tick:3,lanes:[2]},{measure:10,tick:4,lanes:[2]},{measure:10,tick:5,lanes:[1]},{measure:10,tick:6,lanes:[0]},{measure:10,tick:7,lanes:[1]},{measure:11,tick:0,lanes:[0]},{measure:11,tick:1,lanes:[0]},{measure:11,tick:3,lanes:[0]},{measure:11,tick:4,lanes:[1]},{measure:11,tick:5,lanes:[2]},{measure:11,tick:6,lanes:[3]},{measure:11,tick:7,lanes:[2]},{measure:12,tick:1,lanes:[3]},{measure:12,tick:2,lanes:[2]},{measure:12,tick:3,lanes:[2]},{measure:12,tick:4,lanes:[2]},{measure:12,tick:5,lanes:[1]},{measure:12,tick:6,lanes:[0]},{measure:12,tick:7,lanes:[1]},"begin_loading_star_phase",{measure:13,tick:2,lanes:[0,1]},{measure:13,tick:5,lanes:[0,1]},{measure:13,tick:7,lanes:[1,2]},{measure:14,tick:2,lanes:[2,3]},{measure:14,tick:5,lanes:[2,3]},{measure:14,tick:7,lanes:[1,2]},{measure:15,tick:2,lanes:[0,1]},{measure:15,tick:5,lanes:[0,1]},{measure:15,tick:7,lanes:[1,2]},{measure:16,tick:0,lanes:[2,3]},{measure:16,tick:1,lanes:[2,3]},{measure:16,tick:2,lanes:[2,3]},{measure:16,tick:3,lanes:[2,3]},{measure:16,tick:4,lanes:[2,3]},{measure:16,tick:5,lanes:[2,3]},{measure:16,tick:6,lanes:[2,3]},{measure:16,tick:7,lanes:[2,3]},"end_loading_star_phase",{measure:17,tick:0,lanes:[1,3]},{measure:17,tick:1,lanes:[1,3]},{measure:17,tick:2,lanes:[1,4]},{measure:17,tick:4,lanes:[4]},{measure:17,tick:5,lanes:[4]},{measure:17,tick:6,lanes:[3]},{measure:17,tick:7,lanes:[2]},{measure:18,tick:0,lanes:[1,2]},{measure:18,tick:1,lanes:[1,2]},{measure:18,tick:2,lanes:[1,3]},{measure:18,tick:4,lanes:[3]},{measure:18,tick:5,lanes:[3]},{measure:18,tick:6,lanes:[2]},{measure:18,tick:7,lanes:[1]},{measure:19,tick:0,lanes:[0,2]},{measure:19,tick:1,lanes:[0,2]},{measure:19,tick:2,lanes:[0,3]},{measure:19,tick:4,lanes:[3]},{measure:19,tick:5,lanes:[3]},{measure:19,tick:6,lanes:[2]},{measure:19,tick:7,lanes:[1]}],ws={songInfo:t1,notes:n1};class i1{constructor(e,t,n){this.listener=n,this.audioLoader=new Am,this.soundEffects={},this.loadSoundEffects(t),this.mainSong=new nl(this.listener),this.loadMainSong(e),this.isOriginalVolume=!0,this.currentVolume=this.mainSong.getVolume(),this.originalVolume=this.currentVolume,this.delayedTasks=[],this.activeSounds=[]}getMainSongCurrentTime(){return this.mainSong.context.currentTime-this.mainSong.startTime}startAudioSequence(e,t){this.scheduleTask(()=>this.playSoundEffect("songStart",2,.5),500),this.scheduleTask(()=>this.playDefaultSoundEffect("crowdStart",.8),1e3),this.scheduleTask(()=>this.playMainSong(),e*t*1e3-t/ws.songInfo.resolution*1e3)}scheduleTask(e,t){const n={callback:e,remaining:t,start:Date.now()};this.delayedTasks.push(n),n.id=setTimeout(()=>{e(),this.delayedTasks=this.delayedTasks.filter(i=>i.id!==n.id)},t)}loadSoundEffects(e){for(const[t,n]of Object.entries(e))this.soundEffects[t]=[],n.forEach(i=>{const r=new nl(this.listener);this.audioLoader.load(i,s=>{r.setBuffer(s)}),this.soundEffects[t].push(r)})}loadMainSong(e){this.audioLoader.load(e,t=>{this.mainSong.setBuffer(t),this.mainSong.setLoop(!1)})}setMainSongVolume(e){e!=this.currentVolume&&(this.currentVolume=e,this.isOriginalVolume=this.currentVolume===this.originalVolume,this.mainSong.setVolume(this.currentVolume))}lowerMainSongVolume(e){this.setMainSongVolume(Math.max(0,this.mainSong.getVolume()-e))}lowerMainSongVolumePercentage(e){const t=this.mainSong.getVolume()*(e/100);this.setMainSongVolume(Math.max(0,this.mainSong.getVolume()-t))}resetMainSongVolume(){this.setMainSongVolume(this.originalVolume)}playMainSong(){if(console.log("Stared main song here..."),!this.mainSong.isPlaying)return this.mainSong.play(),this.mainSong.duration}pauseMainSong(){this.mainSong.isPlaying&&this.mainSong.pause()}lowerSoundEffectVolume(e,t,n){const i=this.soundEffects[e];if(!i)return;const r=i[t];if(!r)return;const s=Math.max(0,r.getVolume()-n);r.setVolume(s)}playSoundEffect(e,t,n=0){const i=this.soundEffects[e];if(!i)return;const r=i[t];this.lowerSoundEffectVolume(e,t,n),r.isPlaying&&r.stop(),r.play()}playDefaultSoundEffect(e,t=0){return this.playSoundEffect(e,0,t)}playRandomSoundEffect(e,t=0){const n=this.soundEffects[e];if(!n)return;const i=Math.floor(Math.random()*n.length);return this.playSoundEffect(e,i,t)}pauseSoundEffect(e){const t=this.soundEffects[e];if(!t)return;const n=t[0];n.isPlaying&&n.pause()}getActiveSounds(){const e=[];this.mainSong.isPlaying&&e.push(this.mainSong);for(const t of Object.values(this.soundEffects))for(const n of t)n.isPlaying&&e.push(n);return e}pauseActiveSounds(){this.activeSounds=this.getActiveSounds(),this.activeSounds.forEach(e=>{e.pause()});for(const e of this.delayedTasks)clearTimeout(e.id),e.remaining-=Date.now()-e.start}resumeActiveSounds(){this.activeSounds.forEach(e=>{e.play()});for(const e of this.delayedTasks)e.start=Date.now(),e.id=setTimeout(()=>{e.callback(),this.delayedTasks=this.delayedTasks.filter(t=>t.id!==e.id)},e.remaining)}}const Rn=class Rn{constructor(e,t,n,i,r,s,o,l){this.tickIndex=e,this.ticksPerMeasure=t,this.tickType=this.getTickType(this.tickIndex),this.totalTicks=i,this.tickSpace=n,this.spaceReset=this.tickSpace*this.totalTicks,this.x_min=-r/2,this.x_max=+r/2,this.y_perfect_hit=-(s/2)+o,this.y_start_hit=this.y_perfect_hit+(l+o/2)/2,this.y_end_hit=this.y_perfect_hit-(l+o/2)/2,this.y_start=this.y_perfect_hit+e*n,this.z=Rn.tickZ,this.y_min=-(s/2),this.y_max=this.y_min+s,this.starting_position=new L(0,this.y_start,0),this.max_position=new L(0,this.y_max,0),this.min_position=new L(0,this.y_min,0),this.createTickLine(this.tickIndex),this.notes={},this.collided=!1,this.hitted=!1}getTickType(e){return e%this.ticksPerMeasure===0?"measure":e%2===0?"beat":"tick"}createTickLine(){this.material=new Et({color:Rn.defaultColor[this.tickType],linewidth:Rn.defaultTickness[this.tickType]}),this.points=[],this.a=new L(this.x_min,0,0),this.b=new L(this.x_max,0,0),this.points.push(this.a,this.b),this.geometry=new qe().setFromPoints(this.points),this.mesh=new xn(this.geometry,this.material),this.mesh.position.y=this.y_start,this.mesh.position.z=this.z}addNote(e){return this.notes[e.laneIndex]?null:(this.notes[e.laneIndex]=e,e)}getNotes(){return Object.values(this.notes)}getNotesLaneIndices(){return Object.keys(this.notes).map(Number)}reset(){this.mesh.visible=!1,this.mesh.position.y+=this.spaceReset,this.collided=!1,this.hitted=!1,this.accuracy=0,this.removeNotes(),this.notes={}}addToScene(e){this.mesh.visible=!1,e.add(this.mesh)}checkCollision(){return this.mesh.position.y<this.y_start_hit&&this.mesh.position.y>this.y_end_hit}enableHitEffect(e){this.getNotesLaneIndices().forEach(t=>{e.enableFireEffect(t)})}handleHit(e,t,n,i){console.log("HIT (in lane "+this.getNotesLaneIndices()+" with "+this.accuracy.toFixed(2)+"% accuracy)"),t.handleHit(this.getNotes()),n.isOriginalVolume||n.resetMainSongVolume(),this.hitted=!0,this.enableHitEffect(e),Object.values(this.notes).forEach(r=>{r.mesh.hitted=this.mesh.hitted,r.removeFromScene(i)}),this.notes={}}static handleMiss(e,t,n){console.log("MISS or OVERSTRUM"),e.handleMiss(n),t.isOriginalVolume&&t.lowerMainSongVolume(Rn.lowerVolumeAmout)}removeNotes(){Object.values(this.notes).forEach(e=>{Xb(e.mesh)})}hideNotes(){Object.values(this.notes).forEach(e=>{e.mesh.visible=!1})}showNotes(){Object.values(this.notes).forEach(e=>{e.mesh.visible=!0})}hasNotes(){return Object.keys(this.notes).length>0}update(e,t,n,i){if(this.mesh.visible=this.mesh.position.y<this.y_max&&this.mesh.position.y>this.y_min,this.mesh.position.y-=e,this.checkCollision()){this.collided=!0;const r=Math.abs(this.mesh.position.y-this.y_perfect_hit),s=Math.abs(this.y_end_hit-this.y_start_hit)/2;this.accuracy=Math.max(0,1-r/s)}else this.hasNotes()&&this.collided&&!this.hitted&&Rn.handleMiss(t,n,this.getNotes()),this.collided=!1,this.accuracy=0;Object.values(this.notes).forEach(r=>{r.update(t.interruptedLoadingStarPower,t.starPower,i),r.mesh.visible=this.mesh.visible&&!this.hitted,r.accuracy=this.accuracy,r.collided=this.collided,r.mesh.position.y=this.mesh.position.y}),this.mesh.position.y<this.y_min&&this.reset()}};wt(Rn,"tickZ",.01),wt(Rn,"defaultTickness",{tick:1,beat:2,measure:3}),wt(Rn,"defaultColor",{tick:9342606,beat:12171705,measure:16777215}),wt(Rn,"lowerVolumeAmout",.5);let sl=Rn;const ei=class ei{constructor(e,t){this.fretboard=e,this.mainSong=t,this.beatsPerMinute=ws.songInfo.bpm,this.ticksPerMeasure=ws.songInfo.resolution,this.ticksPerBeat=ws.songInfo.ticks_per_beat,this.beatsPerMeasure=this.ticksPerMeasure/this.ticksPerBeat,this.beatsPerSecond=this.beatsPerMinute/60,this.beatDuration=1/this.beatsPerSecond,this.measureDuration=this.beatDuration*this.beatsPerMeasure,this.visibleBeatLinesCount=Math.ceil(ei.timeToReactMillisecond/1e3*this.beatsPerSecond),this.visibleTickLinesCount=this.visibleBeatLinesCount*this.ticksPerBeat,this.tickSpace=this.fretboard.fretboardHeight/(ei.timeToReactMillisecond/1e3*this.beatsPerSecond*this.ticksPerBeat),this.measureSpace=this.tickSpace*this.ticksPerMeasure,this.speed=0,this.tickSpeed=0,this.setupSpeed(),this.currentTick=null,this.currentTickCounter=0,this.currentMeasureCounter=-ei.introMeasures,this.totalTickCounter=this.getTotalTickCounter(this.currentMeasureCounter,this.currentTickCounter),this.totalTicks=0,this.tickLines=this.createFretboardTicks(this.fretboard),this.allNotes=this.loadNotesFromJson(ws),this.allNotesIndex=0}getMeasureCounter(e){return Math.floor(e/this.ticksPerMeasure)}getTickCounter(e){return e%this.ticksPerMeasure}getTotalTickCounter(e,t){return e*this.ticksPerMeasure+t}async loadNotesFromFile(e){try{const n=await(await fetch(e)).json();return this.loadNotesFromJson(n)}catch(t){return console.error("Error loading JSON file:",t),null}}loadNotesFromJson(e){e.songInfo;const t=e.notes,n=[];let i=!1,r=!1;for(let s=0;s<t.length;s++){const o=t[s];if(o==="begin_loading_star_phase")i=!0;else if(o==="end_loading_star_phase")i=!1;else{const l=o.measure;r=t[s+1]==="end_loading_star_phase",n.push(...this.createNotes(l,o.tick,i,r,!1,...o.lanes))}}return n}createFretboardTicks(){this.totalTicks=this.ticksPerMeasure,this.totalTicks<this.visibleTickLinesCount&&(this.totalTicks=this.visibleTickLinesCount);const e=[];for(let t=0;t<this.totalTicks;t++){const n=new sl(t,this.ticksPerMeasure,this.tickSpace,this.totalTicks,this.fretboard.fretboardWidth,this.fretboard.fretboardHeight,this.fretboard.pickupOffset,this.fretboard.pickupHeight);e.push(n)}return e}setupSpeed(){this.speed=this.fretboard.fretboardHeight/(ei.timeToReactMillisecond/1e3)}createNotes(e,t,n,i,r,...s){const o=[],l=this.tickLines[t];return s.forEach(c=>{const h=this.fretboard.lanes[c],u=l.mesh.position.y+this.measureSpace*e,d=new ph(e,l.tickIndex,c,h.x,u,h.z,this.fretboard.laneWidth/4,this.fretboard.laneWidth,this.fretboard.laneHeight,rl.colors[c],n,i,r);o.push(d)}),o}addTicksToScene(e){this.tickLines.forEach(t=>{t.addToScene(e)})}getAllNotes(){return this.allNotes}getNotes(e){return this.allNotes.filter(t=>t.measure===e)}addAllNotesToScene(e){this.getAllNotes().forEach(t=>t.addToScene(e))}getCurrentNotes(){return this.currentTick?this.currentTick.getNotes():[]}getCurrentNotesLaneIndices(){return this.currentTick?this.currentTick.getNotesLaneIndices():[]}updateVisibleNotes(){const e=this.totalTickCounter+this.ticksPerMeasure,t=e+this.totalTicks;for(;this.allNotesIndex<this.allNotes.length;this.allNotesIndex++){const n=this.allNotes[this.allNotesIndex],i=this.getTotalTickCounter(n.measure,n.tick);if(i>=e&&i<t){const r=i%this.totalTicks;this.tickLines[r].addNote(n)}else break}}update(e,t,n,i){this.tickSpeed=this.speed/n,this.curreasjasjasntTick=null,this.tickLines.forEach(r=>{const s=r.collided;r.update(this.tickSpeed,e,t,i),r.collided&&(this.currentTick=r,s||(this.updateVisibleNotes(),e.starPower&&(e.starPowerCurrentTickCount==e.starPowerMeasureDuration*this.ticksPerMeasure?e.deactivateStarPower():e.starPowerCurrentTickCount++),e.starPower&&e.drawStarPowerCircle(),this.totalTickCounter++,this.currentTickCounter++,this.currentTickCounter===this.ticksPerMeasure&&(this.currentTickCounter=0,this.currentMeasureCounter++),this.currentTick=this.tickLines[this.currentTickCounter],this.currentTick=r))})}};wt(ei,"timeToReactMillisecond",2e3),wt(ei,"defaultFPS",60),wt(ei,"introMeasures",3);let al=ei;class r1{constructor(){this.shaking=!1,this.shakeStartTime=0,this.shakeDuration=0,this.shakeMagnitude=new L,this.originalPosition=new L}shake(e,t,n){this.shaking||(this.shaking=!0,this.shakeStartTime=Date.now(),this.shakeDuration=n,this.shakeMagnitude.copy(t),this.originalPosition.copy(e.position))}update(e){if(this.shaking)if(Date.now()-this.shakeStartTime<this.shakeDuration){const n=new L(this.randomRange(-this.shakeMagnitude.x,this.shakeMagnitude.x),this.randomRange(-this.shakeMagnitude.y,this.shakeMagnitude.y),this.randomRange(-this.shakeMagnitude.z,this.shakeMagnitude.z));e.position.copy(this.originalPosition).add(n)}else this.shaking=!1,e.position.copy(this.originalPosition)}randomRange(e,t){return e+Math.random()*(t-e)}}class s1{constructor(e,t,n,i,r,s=!1){this.scene=n,this.camera=i,this.gui=r,this.img=t,this.backgroundPlane=null,s?this.initBackgroundPlane(e):this.loadBackgroundTexture(this.img),this.initGUI()}initBackgroundPlane(e){this.videoUrl=e,this.video=document.createElement("video"),this.video.src=this.videoUrl,this.video.crossOrigin="anonymous",this.video.loop=!0,this.video.muted=!0,this.video.play(),this.videoTexture=new Kp(this.video),this.videoTexture.needsUpdate=!0,this.videoTexture.minFilter=gt,this.videoTexture.magFilter=gt,this.videoTexture.format=dl;const t=new bn(16,9),n=new Mn({map:this.videoTexture}),i=new et(t,n);i.scale.set(10,10,5),i.quaternion.copy(this.camera.quaternion),i.translateZ(-20),this.scene.add(i)}loadBackgroundTexture(e){new tu().load(e,n=>{n.minFilter=gt,n.magFilter=Rt,this.scene.background=n})}initGUI(){this.gui.addFolder("Background").close()}}function a1(){var a=Object.create(null);function e(i,r){var s=i.id,o=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var h=i.getTransferables;if(h===void 0&&(h=null),!a[s])try{l=l.map(function(d){return d&&d.isWorkerModule&&(e(d,function(f){if(f instanceof Error)throw f}),d=a[d.id].value),d}),c=n("<"+o+">.init",c),h&&(h=n("<"+o+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:u,getTransferables:h},r(u)}catch(d){d&&d.noLog||console.error(d),r(d)}}function t(i,r){var s,o=i.id,l=i.args;(!a[o]||typeof a[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(h,function(u){return r(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){r(u)}function h(u){try{var d=a[o].getTransferables&&a[o].getTransferables(u);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),r(u,d)}catch(f){console.error(f),r(f)}}}function n(i,r){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(i){var r=i.data,s=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function o1(a){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,n=a.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=Promise.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var Dm=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return Dm=function(){return a},a},l1=0,c1=0,Xc=!1,Ns=Object.create(null),Fs=Object.create(null),mh=Object.create(null);function $r(a){if((!a||typeof a.init!="function")&&!Xc)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,n=a.getTransferables,i=a.workerId;if(!Dm())return o1(a);i==null&&(i="#default");var r="workerModule"+ ++l1,s=a.name||r,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Xc=!0,c=$r({workerId:i,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+xo(c)+`
)}`}),Xc=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(!o){o=hf(i,"registerModule",l.workerModuleData);var u=function(){o=null,Fs[i].delete(u)};(Fs[i]||(Fs[i]=new Set)).add(u)}return o.then(function(d){var f=d.isCallable;if(f)return hf(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:s,dependencies:e,init:xo(t),getTransferables:n&&xo(n)},l}function h1(a){Fs[a]&&Fs[a].forEach(function(e){e()}),Ns[a]&&(Ns[a].terminate(),delete Ns[a])}function xo(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function u1(a){var e=Ns[a];if(!e){var t=xo(a1);e=Ns[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,s=mh[r];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete mh[r],s(i)}}return e}function hf(a,e,t){return new Promise(function(n,i){var r=++c1;mh[r]=function(s){s.success?n(s.result):i(new Error("Error in worker "+e+" call: "+s.error))},u1(a).postMessage({messageId:r,action:e,data:t})})}function Nm(){var a=function(e){function t(Q,J,F,X,se,k,z,re){var W=1-z;re.x=W*W*Q+2*W*z*F+z*z*se,re.y=W*W*J+2*W*z*X+z*z*k}function n(Q,J,F,X,se,k,z,re,W,le){var xe=1-W;le.x=xe*xe*xe*Q+3*xe*xe*W*F+3*xe*W*W*se+W*W*W*z,le.y=xe*xe*xe*J+3*xe*xe*W*X+3*xe*W*W*k+W*W*W*re}function i(Q,J){for(var F=/([MLQCZ])([^MLQCZ]*)/g,X,se,k,z,re;X=F.exec(Q);){var W=X[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(le){return parseFloat(le)});switch(X[1]){case"M":z=se=W[0],re=k=W[1];break;case"L":(W[0]!==z||W[1]!==re)&&J("L",z,re,z=W[0],re=W[1]);break;case"Q":{J("Q",z,re,z=W[2],re=W[3],W[0],W[1]);break}case"C":{J("C",z,re,z=W[4],re=W[5],W[0],W[1],W[2],W[3]);break}case"Z":(z!==se||re!==k)&&J("L",z,re,se,k);break}}}function r(Q,J,F){F===void 0&&(F=16);var X={x:0,y:0};i(Q,function(se,k,z,re,W,le,xe,be,ye){switch(se){case"L":J(k,z,re,W);break;case"Q":{for(var T=k,de=z,he=1;he<F;he++)t(k,z,le,xe,re,W,he/(F-1),X),J(T,de,X.x,X.y),T=X.x,de=X.y;break}case"C":{for(var fe=k,ne=z,Ee=1;Ee<F;Ee++)n(k,z,le,xe,be,ye,re,W,Ee/(F-1),X),J(fe,ne,X.x,X.y),fe=X.x,ne=X.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(Q,J){var F=Q.getContext?Q.getContext("webgl",c):Q,X=l.get(F);if(!X){let fe=function(b){var G=k[b];if(!G&&(G=k[b]=F.getExtension(b),!G))throw new Error(b+" not supported");return G},ne=function(b,G){var K=F.createShader(G);return F.shaderSource(K,b),F.compileShader(K),K},Ee=function(b,G,K,te){if(!z[b]){var $={},Ie={},ue=F.createProgram();F.attachShader(ue,ne(G,F.VERTEX_SHADER)),F.attachShader(ue,ne(K,F.FRAGMENT_SHADER)),F.linkProgram(ue),z[b]={program:ue,transaction:function(Te){F.useProgram(ue),Te({setUniform:function(we,ke){for(var Ce=[],Me=arguments.length-2;Me-- >0;)Ce[Me]=arguments[Me+2];var Se=Ie[ke]||(Ie[ke]=F.getUniformLocation(ue,ke));F["uniform"+we].apply(F,[Se].concat(Ce))},setAttribute:function(we,ke,Ce,Me,Se){var Ue=$[we];Ue||(Ue=$[we]={buf:F.createBuffer(),loc:F.getAttribLocation(ue,we),data:null}),F.bindBuffer(F.ARRAY_BUFFER,Ue.buf),F.vertexAttribPointer(Ue.loc,ke,F.FLOAT,!1,0,0),F.enableVertexAttribArray(Ue.loc),se?F.vertexAttribDivisor(Ue.loc,Me):fe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Ue.loc,Me),Se!==Ue.data&&(F.bufferData(F.ARRAY_BUFFER,Se,Ce),Ue.data=Se)}})}}}z[b].transaction(te)},ae=function(b,G){W++;try{F.activeTexture(F.TEXTURE0+W);var K=re[b];K||(K=re[b]=F.createTexture(),F.bindTexture(F.TEXTURE_2D,K),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MIN_FILTER,F.NEAREST),F.texParameteri(F.TEXTURE_2D,F.TEXTURE_MAG_FILTER,F.NEAREST)),F.bindTexture(F.TEXTURE_2D,K),G(K,W)}finally{W--}},pe=function(b,G,K){var te=F.createFramebuffer();le.push(te),F.bindFramebuffer(F.FRAMEBUFFER,te),F.activeTexture(F.TEXTURE0+G),F.bindTexture(F.TEXTURE_2D,b),F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,b,0);try{K(te)}finally{F.deleteFramebuffer(te),F.bindFramebuffer(F.FRAMEBUFFER,le[--le.length-1]||null)}},I=function(){k={},z={},re={},W=-1,le.length=0};var xe=fe,be=ne,ye=Ee,T=ae,de=pe,he=I,se=typeof WebGL2RenderingContext<"u"&&F instanceof WebGL2RenderingContext,k={},z={},re={},W=-1,le=[];F.canvas.addEventListener("webglcontextlost",function(b){I(),b.preventDefault()},!1),l.set(F,X={gl:F,isWebGL2:se,getExtension:fe,withProgram:Ee,withTexture:ae,withTextureFramebuffer:pe,handleContextLoss:I})}J(X)}function u(Q,J,F,X,se,k,z,re){z===void 0&&(z=15),re===void 0&&(re=null),h(Q,function(W){var le=W.gl,xe=W.withProgram,be=W.withTexture;be("copy",function(ye,T){le.texImage2D(le.TEXTURE_2D,0,le.RGBA,se,k,0,le.RGBA,le.UNSIGNED_BYTE,J),xe("copy",s,o,function(de){var he=de.setUniform,fe=de.setAttribute;fe("aUV",2,le.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),he("1i","image",T),le.bindFramebuffer(le.FRAMEBUFFER,re||null),le.disable(le.BLEND),le.colorMask(z&8,z&4,z&2,z&1),le.viewport(F,X,se,k),le.scissor(F,X,se,k),le.drawArrays(le.TRIANGLES,0,3)})})})}function d(Q,J,F){var X=Q.width,se=Q.height;h(Q,function(k){var z=k.gl,re=new Uint8Array(X*se*4);z.readPixels(0,0,X,se,z.RGBA,z.UNSIGNED_BYTE,re),Q.width=J,Q.height=F,u(z,re,0,0,X,se)})}var f=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:d});function p(Q,J,F,X,se,k){k===void 0&&(k=1);var z=new Uint8Array(Q*J),re=X[2]-X[0],W=X[3]-X[1],le=[];r(F,function(fe,ne,Ee,ae){le.push({x1:fe,y1:ne,x2:Ee,y2:ae,minX:Math.min(fe,Ee),minY:Math.min(ne,ae),maxX:Math.max(fe,Ee),maxY:Math.max(ne,ae)})}),le.sort(function(fe,ne){return fe.maxX-ne.maxX});for(var xe=0;xe<Q;xe++)for(var be=0;be<J;be++){var ye=de(X[0]+re*(xe+.5)/Q,X[1]+W*(be+.5)/J),T=Math.pow(1-Math.abs(ye)/se,k)/2;ye<0&&(T=1-T),T=Math.max(0,Math.min(255,Math.round(T*255))),z[be*Q+xe]=T}return z;function de(fe,ne){for(var Ee=1/0,ae=1/0,pe=le.length;pe--;){var I=le[pe];if(I.maxX+ae<=fe)break;if(fe+ae>I.minX&&ne-ae<I.maxY&&ne+ae>I.minY){var b=m(fe,ne,I.x1,I.y1,I.x2,I.y2);b<Ee&&(Ee=b,ae=Math.sqrt(Ee))}}return he(fe,ne)&&(ae=-ae),ae}function he(fe,ne){for(var Ee=0,ae=le.length;ae--;){var pe=le[ae];if(pe.maxX<=fe)break;var I=pe.y1>ne!=pe.y2>ne&&fe<(pe.x2-pe.x1)*(ne-pe.y1)/(pe.y2-pe.y1)+pe.x1;I&&(Ee+=pe.y1<pe.y2?1:-1)}return Ee!==0}}function v(Q,J,F,X,se,k,z,re,W,le){k===void 0&&(k=1),re===void 0&&(re=0),W===void 0&&(W=0),le===void 0&&(le=0),g(Q,J,F,X,se,k,z,null,re,W,le)}function g(Q,J,F,X,se,k,z,re,W,le,xe){k===void 0&&(k=1),W===void 0&&(W=0),le===void 0&&(le=0),xe===void 0&&(xe=0);for(var be=p(Q,J,F,X,se,k),ye=new Uint8Array(be.length*4),T=0;T<be.length;T++)ye[T*4+xe]=be[T];u(z,ye,W,le,Q,J,1<<3-xe,re)}function m(Q,J,F,X,se,k){var z=se-F,re=k-X,W=z*z+re*re,le=W?Math.max(0,Math.min(1,((Q-F)*z+(J-X)*re)/W)):0,xe=Q-(F+le*z),be=J-(X+le*re);return xe*xe+be*be}var y=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:v,generateIntoFramebuffer:g}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",C="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",E=new Float32Array([0,0,2,0,0,2]),w=null,R=!1,S={},M=new WeakMap;function D(Q){if(!R&&!V(Q))throw new Error("WebGL generation not supported")}function U(Q,J,F,X,se,k,z){if(k===void 0&&(k=1),z===void 0&&(z=null),!z&&(z=w,!z)){var re=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!re)throw new Error("OffscreenCanvas or DOM canvas not supported");z=w=re.getContext("webgl",{depth:!1})}D(z);var W=new Uint8Array(Q*J*4);h(z,function(ye){var T=ye.gl,de=ye.withTexture,he=ye.withTextureFramebuffer;de("readable",function(fe,ne){T.texImage2D(T.TEXTURE_2D,0,T.RGBA,Q,J,0,T.RGBA,T.UNSIGNED_BYTE,null),he(fe,ne,function(Ee){O(Q,J,F,X,se,k,T,Ee,0,0,0),T.readPixels(0,0,Q,J,T.RGBA,T.UNSIGNED_BYTE,W)})})});for(var le=new Uint8Array(Q*J),xe=0,be=0;xe<W.length;xe+=4)le[be++]=W[xe];return le}function N(Q,J,F,X,se,k,z,re,W,le){k===void 0&&(k=1),re===void 0&&(re=0),W===void 0&&(W=0),le===void 0&&(le=0),O(Q,J,F,X,se,k,z,null,re,W,le)}function O(Q,J,F,X,se,k,z,re,W,le,xe){k===void 0&&(k=1),W===void 0&&(W=0),le===void 0&&(le=0),xe===void 0&&(xe=0),D(z);var be=[];r(F,function(ye,T,de,he){be.push(ye,T,de,he)}),be=new Float32Array(be),h(z,function(ye){var T=ye.gl,de=ye.isWebGL2,he=ye.getExtension,fe=ye.withProgram,ne=ye.withTexture,Ee=ye.withTextureFramebuffer,ae=ye.handleContextLoss;if(ne("rawDistances",function(pe,I){(Q!==pe._lastWidth||J!==pe._lastHeight)&&T.texImage2D(T.TEXTURE_2D,0,T.RGBA,pe._lastWidth=Q,pe._lastHeight=J,0,T.RGBA,T.UNSIGNED_BYTE,null),fe("main",_,x,function(b){var G=b.setAttribute,K=b.setUniform,te=!de&&he("ANGLE_instanced_arrays"),$=!de&&he("EXT_blend_minmax");G("aUV",2,T.STATIC_DRAW,0,E),G("aLineSegment",4,T.DYNAMIC_DRAW,1,be),K.apply(void 0,["4f","uGlyphBounds"].concat(X)),K("1f","uMaxDistance",se),K("1f","uExponent",k),Ee(pe,I,function(Ie){T.enable(T.BLEND),T.colorMask(!0,!0,!0,!0),T.viewport(0,0,Q,J),T.scissor(0,0,Q,J),T.blendFunc(T.ONE,T.ONE),T.blendEquationSeparate(T.FUNC_ADD,de?T.MAX:$.MAX_EXT),T.clear(T.COLOR_BUFFER_BIT),de?T.drawArraysInstanced(T.TRIANGLES,0,3,be.length/4):te.drawArraysInstancedANGLE(T.TRIANGLES,0,3,be.length/4)})}),fe("post",s,C,function(b){b.setAttribute("aUV",2,T.STATIC_DRAW,0,E),b.setUniform("1i","tex",I),T.bindFramebuffer(T.FRAMEBUFFER,re),T.disable(T.BLEND),T.colorMask(xe===0,xe===1,xe===2,xe===3),T.viewport(W,le,Q,J),T.scissor(W,le,Q,J),T.drawArrays(T.TRIANGLES,0,3)})}),T.isContextLost())throw ae(),new Error("webgl context lost")})}function V(Q){var J=!Q||Q===w?S:Q.canvas||Q,F=M.get(J);if(F===void 0){R=!0;var X=null;try{var se=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],k=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,Q);F=k&&se.length===k.length&&k.every(function(z,re){return z===se[re]}),F||(X="bad trial run results",console.info(se,k))}catch(z){F=!1,X=z.message}X&&console.warn("WebGL SDF generation not supported:",X),R=!1,M.set(J,F)}return F}var B=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:N,generateIntoFramebuffer:O,isSupported:V});function j(Q,J,F,X,se,k){se===void 0&&(se=Math.max(X[2]-X[0],X[3]-X[1])/2),k===void 0&&(k=1);try{return U.apply(B,arguments)}catch(z){return console.info("WebGL SDF generation failed, falling back to JS",z),p.apply(y,arguments)}}function Y(Q,J,F,X,se,k,z,re,W,le){se===void 0&&(se=Math.max(X[2]-X[0],X[3]-X[1])/2),k===void 0&&(k=1),re===void 0&&(re=0),W===void 0&&(W=0),le===void 0&&(le=0);try{return N.apply(B,arguments)}catch(xe){return console.info("WebGL SDF generation failed, falling back to JS",xe),v.apply(y,arguments)}}return e.forEachPathCommand=i,e.generate=j,e.generateIntoCanvas=Y,e.javascript=y,e.pathToLineSegments=r,e.webgl=B,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function d1(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(ae,pe){n[ae]=1<<pe+1,i[n[ae]]=ae}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,s=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,h=null;function u(){if(!h){h=new Map;var ae=function(I){if(t.hasOwnProperty(I)){var b=0;t[I].split(",").forEach(function(G){var K=G.split("+"),te=K[0],$=K[1];te=parseInt(te,36),$=$?parseInt($,36):0,h.set(b+=te,n[I]);for(var Ie=0;Ie<$;Ie++)h.set(++b,n[I])})}};for(var pe in t)ae(pe)}}function d(ae){return u(),h.get(ae.codePointAt(0))||n.L}function f(ae){return i[d(ae)]}var p={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(ae,pe){var I=36,b=0,G=new Map,K=pe&&new Map,te;return ae.split(",").forEach(function $(Ie){if(Ie.indexOf("+")!==-1)for(var ue=+Ie;ue--;)$(te);else{te=Ie;var ve=Ie.split(">"),Te=ve[0],ge=ve[1];Te=String.fromCodePoint(b+=parseInt(Te,I)),ge=String.fromCodePoint(b+=parseInt(ge,I)),G.set(Te,ge),pe&&K.set(ge,Te)}}),{map:G,reverseMap:K}}var g,m,y;function _(){if(!g){var ae=v(p.pairs,!0),pe=ae.map,I=ae.reverseMap;g=pe,m=I,y=v(p.canonical,!1).map}}function x(ae){return _(),g.get(ae)||null}function C(ae){return _(),m.get(ae)||null}function E(ae){return _(),y.get(ae)||null}var w=n.L,R=n.R,S=n.EN,M=n.ES,D=n.ET,U=n.AN,N=n.CS,O=n.B,V=n.S,B=n.ON,j=n.BN,Y=n.NSM,Q=n.AL,J=n.LRO,F=n.RLO,X=n.LRE,se=n.RLE,k=n.PDF,z=n.LRI,re=n.RLI,W=n.FSI,le=n.PDI;function xe(ae,pe){for(var I=125,b=new Uint32Array(ae.length),G=0;G<ae.length;G++)b[G]=d(ae[G]);var K=new Map;function te(nn,An){var rn=b[nn];b[nn]=An,K.set(rn,K.get(rn)-1),rn&o&&K.set(o,K.get(o)-1),K.set(An,(K.get(An)||0)+1),An&o&&K.set(o,(K.get(o)||0)+1)}for(var $=new Uint8Array(ae.length),Ie=new Map,ue=[],ve=null,Te=0;Te<ae.length;Te++)ve||ue.push(ve={start:Te,end:ae.length-1,level:pe==="rtl"?1:pe==="ltr"?0:Cu(Te,!1)}),b[Te]&O&&(ve.end=Te,ve=null);for(var ge=se|X|F|J|r|le|k|O,we=function(nn){return nn+(nn&1?1:2)},ke=function(nn){return nn+(nn&1?2:1)},Ce=0;Ce<ue.length;Ce++){ve=ue[Ce];var Me=[{_level:ve.level,_override:0,_isolate:0}],Se=void 0,Ue=0,Xe=0,A=0;K.clear();for(var Z=ve.start;Z<=ve.end;Z++){var H=b[Z];if(Se=Me[Me.length-1],K.set(H,(K.get(H)||0)+1),H&o&&K.set(o,(K.get(o)||0)+1),H&ge)if(H&(se|X)){$[Z]=Se._level;var ie=(H===se?ke:we)(Se._level);ie<=I&&!Ue&&!Xe?Me.push({_level:ie,_override:0,_isolate:0}):Ue||Xe++}else if(H&(F|J)){$[Z]=Se._level;var Ae=(H===F?ke:we)(Se._level);Ae<=I&&!Ue&&!Xe?Me.push({_level:Ae,_override:H&F?R:w,_isolate:0}):Ue||Xe++}else if(H&r){H&W&&(H=Cu(Z+1,!0)===1?re:z),$[Z]=Se._level,Se._override&&te(Z,Se._override);var Pe=(H===re?ke:we)(Se._level);Pe<=I&&Ue===0&&Xe===0?(A++,Me.push({_level:Pe,_override:0,_isolate:1,_isolInitIndex:Z})):Ue++}else if(H&le){if(Ue>0)Ue--;else if(A>0){for(Xe=0;!Me[Me.length-1]._isolate;)Me.pop();var Le=Me[Me.length-1]._isolInitIndex;Le!=null&&(Ie.set(Le,Z),Ie.set(Z,Le)),Me.pop(),A--}Se=Me[Me.length-1],$[Z]=Se._level,Se._override&&te(Z,Se._override)}else H&k?(Ue===0&&(Xe>0?Xe--:!Se._isolate&&Me.length>1&&(Me.pop(),Se=Me[Me.length-1])),$[Z]=Se._level):H&O&&($[Z]=ve.level);else $[Z]=Se._level,Se._override&&H!==j&&te(Z,Se._override)}for(var je=[],Ze=null,Fe=ve.start;Fe<=ve.end;Fe++){var Ke=b[Fe];if(!(Ke&l)){var it=$[Fe],pt=Ke&r,tt=Ke===le;Ze&&it===Ze._level?(Ze._end=Fe,Ze._endsWithIsolInit=pt):je.push(Ze={_start:Fe,_end:Fe,_level:it,_startsWithPDI:tt,_endsWithIsolInit:pt})}}for(var St=[],kt=0;kt<je.length;kt++){var qt=je[kt];if(!qt._startsWithPDI||qt._startsWithPDI&&!Ie.has(qt._start)){for(var ln=[Ze=qt],On=void 0;Ze&&Ze._endsWithIsolInit&&(On=Ie.get(Ze._end))!=null;)for(var en=kt+1;en<je.length;en++)if(je[en]._start===On){ln.push(Ze=je[en]);break}for(var Lt=[],kn=0;kn<ln.length;kn++)for(var ma=ln[kn],es=ma._start;es<=ma._end;es++)Lt.push(es);for(var ql=$[Lt[0]],P=ve.level,q=Lt[0]-1;q>=0;q--)if(!(b[q]&l)){P=$[q];break}var oe=Lt[Lt.length-1],ce=$[oe],ee=ve.level;if(!(b[oe]&r)){for(var Re=oe+1;Re<=ve.end;Re++)if(!(b[Re]&l)){ee=$[Re];break}}St.push({_seqIndices:Lt,_sosType:Math.max(P,ql)%2?R:w,_eosType:Math.max(ee,ce)%2?R:w})}}for(var Oe=0;Oe<St.length;Oe++){var Be=St[Oe],_e=Be._seqIndices,He=Be._sosType,Ye=Be._eosType,Ve=$[_e[0]]&1?R:w;if(K.get(Y))for(var rt=0;rt<_e.length;rt++){var mt=_e[rt];if(b[mt]&Y){for(var dt=He,Ut=rt-1;Ut>=0;Ut--)if(!(b[_e[Ut]]&l)){dt=b[_e[Ut]];break}te(mt,dt&(r|le)?B:dt)}}if(K.get(S))for(var st=0;st<_e.length;st++){var Ge=_e[st];if(b[Ge]&S)for(var xt=st-1;xt>=-1;xt--){var at=xt===-1?He:b[_e[xt]];if(at&s){at===Q&&te(Ge,U);break}}}if(K.get(Q))for(var Zt=0;Zt<_e.length;Zt++){var qn=_e[Zt];b[qn]&Q&&te(qn,R)}if(K.get(M)||K.get(N))for(var Ct=1;Ct<_e.length-1;Ct++){var Ci=_e[Ct];if(b[Ci]&(M|N)){for(var ut=0,mn=0,Ri=Ct-1;Ri>=0&&(ut=b[_e[Ri]],!!(ut&l));Ri--);for(var Bt=Ct+1;Bt<_e.length&&(mn=b[_e[Bt]],!!(mn&l));Bt++);ut===mn&&(b[Ci]===M?ut===S:ut&(S|U))&&te(Ci,ut)}}if(K.get(S))for(var tn=0;tn<_e.length;tn++){var Zl=_e[tn];if(b[Zl]&S){for(var Pi=tn-1;Pi>=0&&b[_e[Pi]]&(D|l);Pi--)te(_e[Pi],S);for(tn++;tn<_e.length&&b[_e[tn]]&(D|l|S);tn++)b[_e[tn]]!==S&&te(_e[tn],S)}}if(K.get(D)||K.get(M)||K.get(N))for(var ts=0;ts<_e.length;ts++){var mu=_e[ts];if(b[mu]&(D|M|N)){te(mu,B);for(var ga=ts-1;ga>=0&&b[_e[ga]]&l;ga--)te(_e[ga],B);for(var va=ts+1;va<_e.length&&b[_e[va]]&l;va++)te(_e[va],B)}}if(K.get(S))for(var Kl=0,gu=He;Kl<_e.length;Kl++){var vu=_e[Kl],Jl=b[vu];Jl&S?gu===w&&te(vu,w):Jl&s&&(gu=Jl)}if(K.get(o)){var ns=R|S|U,_u=ns|w,_a=[];{for(var pr=[],mr=0;mr<_e.length;mr++)if(b[_e[mr]]&o){var is=ae[_e[mr]],yu=void 0;if(x(is)!==null)if(pr.length<63)pr.push({char:is,seqIndex:mr});else break;else if((yu=C(is))!==null)for(var rs=pr.length-1;rs>=0;rs--){var jl=pr[rs].char;if(jl===yu||jl===C(E(is))||x(E(jl))===is){_a.push([pr[rs].seqIndex,mr]),pr.length=rs;break}}}_a.sort(function(nn,An){return nn[0]-An[0]})}for(var Ql=0;Ql<_a.length;Ql++){for(var xu=_a[Ql],ya=xu[0],$l=xu[1],Mu=!1,wn=0,ec=ya+1;ec<$l;ec++){var bu=_e[ec];if(b[bu]&_u){Mu=!0;var Su=b[bu]&ns?R:w;if(Su===Ve){wn=Su;break}}}if(Mu&&!wn){wn=He;for(var tc=ya-1;tc>=0;tc--){var wu=_e[tc];if(b[wu]&_u){var Au=b[wu]&ns?R:w;Au!==Ve?wn=Au:wn=Ve;break}}}if(wn){if(b[_e[ya]]=b[_e[$l]]=wn,wn!==Ve){for(var ss=ya+1;ss<_e.length;ss++)if(!(b[_e[ss]]&l)){d(ae[_e[ss]])&Y&&(b[_e[ss]]=wn);break}}if(wn!==Ve){for(var as=$l+1;as<_e.length;as++)if(!(b[_e[as]]&l)){d(ae[_e[as]])&Y&&(b[_e[as]]=wn);break}}}}for(var ui=0;ui<_e.length;ui++)if(b[_e[ui]]&o){for(var Eu=ui,nc=ui,ic=He,os=ui-1;os>=0;os--)if(b[_e[os]]&l)Eu=os;else{ic=b[_e[os]]&ns?R:w;break}for(var Tu=Ye,ls=ui+1;ls<_e.length;ls++)if(b[_e[ls]]&(o|l))nc=ls;else{Tu=b[_e[ls]]&ns?R:w;break}for(var rc=Eu;rc<=nc;rc++)b[_e[rc]]=ic===Tu?ic:Ve;ui=nc}}}for(var cn=ve.start;cn<=ve.end;cn++){var Wm=$[cn],xa=b[cn];if(Wm&1?xa&(w|S|U)&&$[cn]++:xa&R?$[cn]++:xa&(U|S)&&($[cn]+=2),xa&l&&($[cn]=cn===0?ve.level:$[cn-1]),cn===ve.end||d(ae[cn])&(V|O))for(var Ma=cn;Ma>=0&&d(ae[Ma])&c;Ma--)$[Ma]=ve.level}}return{levels:$,paragraphs:ue};function Cu(nn,An){for(var rn=nn;rn<ae.length;rn++){var di=b[rn];if(di&(R|Q))return 1;if(di&(O|w)||An&&di===le)return 0;if(di&r){var Ru=Xm(rn);rn=Ru===-1?ae.length:Ru}}return 0}function Xm(nn){for(var An=1,rn=nn+1;rn<ae.length;rn++){var di=b[rn];if(di&O)break;if(di&le){if(--An===0)return rn}else di&r&&An++}return-1}}var be="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ye;function T(){if(!ye){var ae=v(be,!0),pe=ae.map,I=ae.reverseMap;I.forEach(function(b,G){pe.set(G,b)}),ye=pe}}function de(ae){return T(),ye.get(ae)||null}function he(ae,pe,I,b){var G=ae.length;I=Math.max(0,I==null?0:+I),b=Math.min(G-1,b==null?G-1:+b);for(var K=new Map,te=I;te<=b;te++)if(pe[te]&1){var $=de(ae[te]);$!==null&&K.set(te,$)}return K}function fe(ae,pe,I,b){var G=ae.length;I=Math.max(0,I==null?0:+I),b=Math.min(G-1,b==null?G-1:+b);var K=[];return pe.paragraphs.forEach(function(te){var $=Math.max(I,te.start),Ie=Math.min(b,te.end);if($<Ie){for(var ue=pe.levels.slice($,Ie+1),ve=Ie;ve>=$&&d(ae[ve])&c;ve--)ue[ve]=te.level;for(var Te=te.level,ge=1/0,we=0;we<ue.length;we++){var ke=ue[we];ke>Te&&(Te=ke),ke<ge&&(ge=ke|1)}for(var Ce=Te;Ce>=ge;Ce--)for(var Me=0;Me<ue.length;Me++)if(ue[Me]>=Ce){for(var Se=Me;Me+1<ue.length&&ue[Me+1]>=Ce;)Me++;Me>Se&&K.push([Se+$,Me+$])}}}),K}function ne(ae,pe,I,b){var G=Ee(ae,pe,I,b),K=[].concat(ae);return G.forEach(function(te,$){K[$]=(pe.levels[te]&1?de(ae[te]):null)||ae[te]}),K.join("")}function Ee(ae,pe,I,b){for(var G=fe(ae,pe,I,b),K=[],te=0;te<ae.length;te++)K[te]=te;return G.forEach(function($){for(var Ie=$[0],ue=$[1],ve=K.slice(Ie,ue+1),Te=ve.length;Te--;)K[ue-Te]=ve[Te]}),K}return e.closingToOpeningBracket=C,e.getBidiCharType=d,e.getBidiCharTypeName=f,e.getCanonicalBracket=E,e.getEmbeddingLevels=xe,e.getMirroredCharacter=de,e.getMirroredCharactersMap=he,e.getReorderSegments=fe,e.getReorderedIndices=Ee,e.getReorderedString=ne,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const Fm=/\bvoid\s+main\s*\(\s*\)\s*{/g;function gh(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Qe[i];return r?gh(r):n}return a.replace(e,t)}const Ft=[];for(let a=0;a<256;a++)Ft[a]=(a<16?"0":"")+a.toString(16);function f1(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[a&255]+Ft[a>>8&255]+Ft[a>>16&255]+Ft[a>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toUpperCase()}const Hi=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(a[i]=n[i])}return a},p1=Date.now(),uf=new WeakMap,df=new Map;let m1=1e10;function vh(a,e){const t=y1(e);let n=uf.get(a);if(n||uf.set(a,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,h){a.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let d=df[u];if(!d){const f=g1(this,c,e,t);d=df[u]=f}c.vertexShader=d.vertexShader,c.fragmentShader=d.fragmentShader,Hi(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-p1}}),this[i]&&this[i](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:a}),Object.defineProperty(h,"id",{value:m1++}),h.uuid=f1(),h.uniforms=Hi({},c.uniforms,e.uniforms),h.defines=Hi({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=Hi({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Hi(this.extensions,c.extensions),Hi(this.defines,c.defines),Hi(this.uniforms,Oh.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=vh(a.isDerivedMaterial?a.getDepthMaterial():new wl({depthPacking:Ph}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=vh(a.isDerivedMaterial?a.getDistanceMaterial():new Al,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),a.dispose.call(this)}}};return n[t]=s,new s}function g1(a,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:d,customRewriter:f,timeUniform:p}=n;if(r=r||"",s=s||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||f)&&(e=gh(e)),(d||f)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=gh(t)),f){let v=f({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(d){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,g=>(v.push(g),"")),u=`${d}
${v.join(`
`)}
${u}`}if(p){const v=`
uniform float ${p};
`;r=v+r,c=v+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,g,m,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,m))?g:`troika_${g}_${i}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=ff(e,i,r,s,o),t=ff(t,i,c,h,u),{vertexShader:e,fragmentShader:t}}function ff(a,e,t,n,i){return(n||i||t)&&(a=a.replace(Fm,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),a}function v1(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let _1=0;const pf=new Map;function y1(a){const e=JSON.stringify(a,v1);let t=pf.get(e);return t==null&&pf.set(e,t=++_1),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function x1(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(i){var r=e._bin,s=new Uint8Array(i);if(r.readASCII(s,0,4)=="ttcf"){var o=4;r.readUshort(s,o),o+=2,r.readUshort(s,o),o+=2;var l=r.readUint(s,o);o+=4;for(var c=[],h=0;h<l;h++){var u=r.readUint(s,o);o+=4,c.push(e._readFont(s,u))}return c}return[e._readFont(s,0)]},_readFont:function(i,r){var s=e._bin,o=r;s.readFixed(i,r),r+=4;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:i,_offset:o},u={},d=0;d<l;d++){var f=s.readASCII(i,r,4);r+=4,s.readUint(i,r),r+=4;var p=s.readUint(i,r);r+=4;var v=s.readUint(i,r);r+=4,u[f]={offset:p,length:v}}for(d=0;d<c.length;d++){var g=c[d];u[g]&&(h[g.trim()]=e[g.trim()].parse(i,u[g].offset,u[g].length,h))}return h},_tabOffset:function(i,r,s){for(var o=e._bin,l=o.readUshort(i,s+4),c=s+12,h=0;h<l;h++){var u=o.readASCII(i,c,4);c+=4,o.readUint(i,c),c+=4;var d=o.readUint(i,c);if(c+=4,o.readUint(i,c),c+=4,u==r)return d}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(i,r+2*l));return o},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(i[r+l]);return o},readUnicode:function(i,r,s){for(var o="",l=0;l<s;l++){var c=i[r++]<<8|i[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,s){var o=e._bin._tdec;return o&&r==0&&s==i.length?o.decode(i):e._bin.readASCII(i,r,s)},readBytes:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(i[r+l]);return o},readASCIIArray:function(i,r,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(i[r+l]));return o},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,s,o,l){var c=e._bin,h={},u=r;c.readFixed(i,r),r+=4;var d=c.readUshort(i,r);r+=2;var f=c.readUshort(i,r);r+=2;var p=c.readUshort(i,r);return r+=2,h.scriptList=e._lctf.readScriptList(i,u+d),h.featureList=e._lctf.readFeatureList(i,u+f),h.lookupList=e._lctf.readLookupList(i,u+p,l),h},e._lctf.readLookupList=function(i,r,s){var o=e._bin,l=r,c=[],h=o.readUshort(i,r);r+=2;for(var u=0;u<h;u++){var d=o.readUshort(i,r);r+=2;var f=e._lctf.readLookupTable(i,l+d,s);c.push(f)}return c},e._lctf.readLookupTable=function(i,r,s){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(i,r),r+=2,c.flag=o.readUshort(i,r),r+=2;var h=o.readUshort(i,r);r+=2;for(var u=c.ltype,d=0;d<h;d++){var f=o.readUshort(i,r);r+=2;var p=s(i,u,l+f,c);c.tabs.push(p)}return c},e._lctf.numOfOnes=function(i){for(var r=0,s=0;s<32;s++)i>>>s&1&&r++;return r},e._lctf.readClassDef=function(i,r){var s=e._bin,o=[],l=s.readUshort(i,r);if(r+=2,l==1){var c=s.readUshort(i,r);r+=2;var h=s.readUshort(i,r);r+=2;for(var u=0;u<h;u++)o.push(c+u),o.push(c+u),o.push(s.readUshort(i,r)),r+=2}if(l==2){var d=s.readUshort(i,r);for(r+=2,u=0;u<d;u++)o.push(s.readUshort(i,r)),r+=2,o.push(s.readUshort(i,r)),r+=2,o.push(s.readUshort(i,r)),r+=2}return o},e._lctf.getInterval=function(i,r){for(var s=0;s<i.length;s+=3){var o=i[s],l=i[s+1];if(i[s+2],o<=r&&r<=l)return s}return-1},e._lctf.readCoverage=function(i,r){var s=e._bin,o={};o.fmt=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,o.fmt==1&&(o.tab=s.readUshorts(i,r,l)),o.fmt==2&&(o.tab=s.readUshorts(i,r,3*l)),o},e._lctf.coverageIndex=function(i,r){var s=i.tab;if(i.fmt==1)return s.indexOf(r);if(i.fmt==2){var o=e._lctf.getInterval(s,r);if(o!=-1)return s[o+2]+(r-s[o])}return-1},e._lctf.readFeatureList=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var u=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2;var f=e._lctf.readFeatureTable(i,o+d);f.tag=u.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2,c>0&&(l.featureParams=o+c);var h=s.readUshort(i,r);r+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(s.readUshort(i,r+2*u));return l},e._lctf.readScriptList=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var u=s.readASCII(i,r,4);r+=4;var d=s.readUshort(i,r);r+=2,l[u.trim()]=e._lctf.readScriptTable(i,o+d)}return l},e._lctf.readScriptTable=function(i,r){var s=e._bin,o=r,l={},c=s.readUshort(i,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(i,o+c));var h=s.readUshort(i,r);r+=2;for(var u=0;u<h;u++){var d=s.readASCII(i,r,4);r+=4;var f=s.readUshort(i,r);r+=2,l[d.trim()]=e._lctf.readLangSysTable(i,o+f)}return l},e._lctf.readLangSysTable=function(i,r){var s=e._bin,o={};s.readUshort(i,r),r+=2,o.reqFeature=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);return r+=2,o.features=s.readUshorts(i,r,l),o},e.CFF={},e.CFF.parse=function(i,r,s){var o=e._bin;(i=new Uint8Array(i.buffer,r,s))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(i,r+l[h],l[h+1]-l[h]));r+=l[l.length-1];var u=[];r=e.CFF.readIndex(i,r,u);var d=[];for(h=0;h<u.length-1;h++)d.push(e.CFF.readDict(i,r+u[h],r+u[h+1]));r+=u[u.length-1];var f=d[0],p=[];r=e.CFF.readIndex(i,r,p);var v=[];for(h=0;h<p.length-1;h++)v.push(o.readASCII(i,r+p[h],p[h+1]-p[h]));if(r+=p[p.length-1],e.CFF.readSubrs(i,r,f),f.CharStrings){r=f.CharStrings,p=[],r=e.CFF.readIndex(i,r,p);var g=[];for(h=0;h<p.length-1;h++)g.push(o.readBytes(i,r+p[h],p[h+1]-p[h]));f.CharStrings=g}if(f.ROS){r=f.FDArray;var m=[];for(r=e.CFF.readIndex(i,r,m),f.FDArray=[],h=0;h<m.length-1;h++){var y=e.CFF.readDict(i,r+m[h],r+m[h+1]);e.CFF._readFDict(i,y,v),f.FDArray.push(y)}r+=m[m.length-1],r=f.FDSelect,f.FDSelect=[];var _=i[r];if(r++,_!=3)throw _;var x=o.readUshort(i,r);for(r+=2,h=0;h<x+1;h++)f.FDSelect.push(o.readUshort(i,r),i[r+2]),r+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(i,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(i,f.charset,f.CharStrings.length)),e.CFF._readFDict(i,f,v),f},e.CFF._readFDict=function(i,r,s){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(i,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=s[r[l]-426+35])},e.CFF.readSubrs=function(i,r,s){var o=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var u=0;u<l.length-1;u++)s.Subrs.push(o.readBytes(i,r+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var s=0;s<i.charset.length;s++)if(i.charset[s]==r)return s;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,s){e._bin;var o=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var h=0;h<c;h++)o.push(i[r+h]);return o},e.CFF.readCharset=function(i,r,s){var o=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var h=0;h<s;h++){var u=o.readUshort(i,r);r+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){u=o.readUshort(i,r),r+=2;var d=0;for(c==1?(d=i[r],r++):(d=o.readUshort(i,r),r+=2),h=0;h<=d;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(i,r,s){var o=e._bin,l=o.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var h=0;h<l;h++)s.push(i[r+h]);else if(c==2)for(h=0;h<l;h++)s.push(o.readUshort(i,r+2*h));else if(c==3)for(h=0;h<l;h++)s.push(16777215&o.readUint(i,r+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,s){var o=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,u=null,d=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(d=o.readShort(i,r+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(d=l-139,h=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,h=2),l==255&&(d=o.readInt(i,r+1)/65535,h=5),s.val=d??"o"+u,s.size=h},e.CFF.readCharString=function(i,r,s){for(var o=r+s,l=e._bin,c=[];r<o;){var h=i[r],u=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,f=null,p=null;h<=20&&(f=h,d=1),h==12&&(f=100*h+u,d=2),h!=19&&h!=20||(f=h,d=2),21<=h&&h<=27&&(f=h,d=1),h==28&&(p=l.readShort(i,r+1),d=3),29<=h&&h<=31&&(f=h,d=1),32<=h&&h<=246&&(p=h-139,d=1),247<=h&&h<=250&&(p=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(p=256*-(h-251)-u-108,d=2),h==255&&(p=l.readInt(i,r+1)/65535,d=5),c.push(p??"o"+f),r+=d}return c},e.CFF.readDict=function(i,r,s){for(var o=e._bin,l={},c=[];r<s;){var h=i[r],u=i[r+1];i[r+2],i[r+3],i[r+4];var d=1,f=null,p=null;if(h==28&&(p=o.readShort(i,r+1),d=3),h==29&&(p=o.readInt(i,r+1),d=5),32<=h&&h<=246&&(p=h-139,d=1),247<=h&&h<=250&&(p=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(p=256*-(h-251)-u-108,d=2),h==255)throw p=o.readInt(i,r+1)/65535,d=5,"unknown number";if(h==30){var v=[];for(d=1;;){var g=i[r+d];d++;var m=g>>4,y=15&g;if(m!=15&&v.push(m),y!=15&&v.push(y),y==15)break}for(var _="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],C=0;C<v.length;C++)_+=x[v[C]];p=parseFloat(_)}h<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],d=1,h==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],d=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(p),r+=d}return l},e.cmap={},e.cmap.parse=function(i,r,s){i=new Uint8Array(i.buffer,r,s),r=0;var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var d=o.readUshort(i,r);r+=2;var f=o.readUshort(i,r);r+=2;var p=o.readUint(i,r);r+=4;var v="p"+d+"e"+f,g=h.indexOf(p);if(g==-1){var m;g=l.tables.length,h.push(p);var y=o.readUshort(i,p);y==0?m=e.cmap.parse0(i,p):y==4?m=e.cmap.parse4(i,p):y==6?m=e.cmap.parse6(i,p):y==12?m=e.cmap.parse12(i,p):console.debug("unknown format: "+y,d,f,p),l.tables.push(m)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=g}return l},e.cmap.parse0=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(i[r+c]);return o},e.cmap.parse4=function(i,r){var s=e._bin,o=r,l={};l.format=s.readUshort(i,r),r+=2;var c=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2;var h=s.readUshort(i,r);r+=2;var u=h/2;l.searchRange=s.readUshort(i,r),r+=2,l.entrySelector=s.readUshort(i,r),r+=2,l.rangeShift=s.readUshort(i,r),r+=2,l.endCount=s.readUshorts(i,r,u),r+=2*u,r+=2,l.startCount=s.readUshorts(i,r,u),r+=2*u,l.idDelta=[];for(var d=0;d<u;d++)l.idDelta.push(s.readShort(i,r)),r+=2;for(l.idRangeOffset=s.readUshorts(i,r,u),r+=2*u,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(s.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,o.firstCode=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(i,r)),r+=2;return o},e.cmap.parse12=function(i,r){var s=e._bin,o={};o.format=s.readUshort(i,r),r+=2,r+=2,s.readUint(i,r),r+=4,s.readUint(i,r),r+=4;var l=s.readUint(i,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var h=r+12*c,u=s.readUint(i,h+0),d=s.readUint(i,h+4),f=s.readUint(i,h+8);o.groups.push([u,d,f])}return o},e.glyf={},e.glyf.parse=function(i,r,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var s=e._bin,o=i._data,l=e._tabOffset(o,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(s.readUshort(o,l)),l+=2;var u=s.readUshort(o,l);if(l+=2,o.length-l<u)return null;c.instructions=s.readBytes(o,l,u),l+=u;var d=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<d;h++){var f=o[l];if(l++,c.flags.push(f),(8&f)!=0){var p=o[l];l++;for(var v=0;v<p;v++)c.flags.push(f),h++}}for(c.xs=[],h=0;h<d;h++){var g=(2&c.flags[h])!=0,m=(16&c.flags[h])!=0;g?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<d;h++)g=(4&c.flags[h])!=0,m=(32&c.flags[h])!=0,g?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var y=0,_=0;for(h=0;h<d;h++)y+=c.xs[h],_+=c.ys[h],c.xs[h]=y,c.ys[h]=_}else{var x;c.parts=[];do{x=s.readUshort(o,l),l+=2;var C={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(C),C.glyphIndex=s.readUshort(o,l),l+=2,1&x){var E=s.readShort(o,l);l+=2;var w=s.readShort(o,l);l+=2}else E=s.readInt8(o,l),l++,w=s.readInt8(o,l),l++;2&x?(C.m.tx=E,C.m.ty=w):(C.p1=E,C.p2=w),8&x?(C.m.a=C.m.d=s.readF2dot14(o,l),l+=2):64&x?(C.m.a=s.readF2dot14(o,l),l+=2,C.m.d=s.readF2dot14(o,l),l+=2):128&x&&(C.m.a=s.readF2dot14(o,l),l+=2,C.m.b=s.readF2dot14(o,l),l+=2,C.m.c=s.readF2dot14(o,l),l+=2,C.m.d=s.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var R=s.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<R;h++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(i,r,s,o){var l=r;r+=4;var c=e._bin.readUshort(i,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(i,l+c)}},e.GPOS={},e.GPOS.parse=function(i,r,s,o){return e._lctf.parse(i,r,s,o,e.GPOS.subt)},e.GPOS.subt=function(i,r,s,o){var l=e._bin,c=s,h={};if(h.fmt=l.readUshort(i,s),s+=2,r==1||r==2||r==3||r==7||r==8&&h.fmt<=2){var u=l.readUshort(i,s);s+=2,h.coverage=e._lctf.readCoverage(i,u+c)}if(r==1&&h.fmt==1){var d=l.readUshort(i,s);s+=2,d!=0&&(h.pos=e.GPOS.readValueRecord(i,s,d))}else if(r==2&&h.fmt>=1&&h.fmt<=2){d=l.readUshort(i,s),s+=2;var f=l.readUshort(i,s);s+=2;var p=e._lctf.numOfOnes(d),v=e._lctf.numOfOnes(f);if(h.fmt==1){h.pairsets=[];var g=l.readUshort(i,s);s+=2;for(var m=0;m<g;m++){var y=c+l.readUshort(i,s);s+=2;var _=l.readUshort(i,y);y+=2;for(var x=[],C=0;C<_;C++){var E=l.readUshort(i,y);y+=2,d!=0&&(U=e.GPOS.readValueRecord(i,y,d),y+=2*p),f!=0&&(N=e.GPOS.readValueRecord(i,y,f),y+=2*v),x.push({gid2:E,val1:U,val2:N})}h.pairsets.push(x)}}if(h.fmt==2){var w=l.readUshort(i,s);s+=2;var R=l.readUshort(i,s);s+=2;var S=l.readUshort(i,s);s+=2;var M=l.readUshort(i,s);for(s+=2,h.classDef1=e._lctf.readClassDef(i,c+w),h.classDef2=e._lctf.readClassDef(i,c+R),h.matrix=[],m=0;m<S;m++){var D=[];for(C=0;C<M;C++){var U=null,N=null;d!=0&&(U=e.GPOS.readValueRecord(i,s,d),s+=2*p),f!=0&&(N=e.GPOS.readValueRecord(i,s,f),s+=2*v),D.push({val1:U,val2:N})}h.matrix.push(D)}}}else if(r==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(i,l.readUshort(i,s)+c),h.baseCoverage=e._lctf.readCoverage(i,l.readUshort(i,s+2)+c),h.markClassCount=l.readUshort(i,s+4),h.markArray=e.GPOS.readMarkArray(i,l.readUshort(i,s+6)+c),h.baseArray=e.GPOS.readBaseArray(i,l.readUshort(i,s+8)+c,h.markClassCount);else if(r==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(i,l.readUshort(i,s)+c),h.mark2Coverage=e._lctf.readCoverage(i,l.readUshort(i,s+2)+c),h.markClassCount=l.readUshort(i,s+4),h.mark1Array=e.GPOS.readMarkArray(i,l.readUshort(i,s+6)+c),h.mark2Array=e.GPOS.readBaseArray(i,l.readUshort(i,s+8)+c,h.markClassCount);else{if(r==9&&h.fmt==1){var O=l.readUshort(i,s);s+=2;var V=l.readUint(i,s);if(s+=4,o.ltype==9)o.ltype=O;else if(o.ltype!=O)throw"invalid extension substitution";return e.GPOS.subt(i,o.ltype,c+V)}console.debug("unsupported GPOS table LookupType",r,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(i,r,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(i,r):0),r+=1&s?2:0,l.push(2&s?o.readShort(i,r):0),r+=2&s?2:0,l.push(4&s?o.readShort(i,r):0),r+=4&s?2:0,l.push(8&s?o.readShort(i,r):0),r+=8&s?2:0,l},e.GPOS.readBaseArray=function(i,r,s){var o=e._bin,l=[],c=r,h=o.readUshort(i,r);r+=2;for(var u=0;u<h;u++){for(var d=[],f=0;f<s;f++)d.push(e.GPOS.readAnchorRecord(i,c+o.readUshort(i,r))),r+=2;l.push(d)}return l},e.GPOS.readMarkArray=function(i,r){var s=e._bin,o=[],l=r,c=s.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(i,s.readUshort(i,r+2)+l);u.markClass=s.readUshort(i,r),o.push(u),r+=4}return o},e.GPOS.readAnchorRecord=function(i,r){var s=e._bin,o={};return o.fmt=s.readUshort(i,r),o.x=s.readShort(i,r+2),o.y=s.readShort(i,r+4),o},e.GSUB={},e.GSUB.parse=function(i,r,s,o){return e._lctf.parse(i,r,s,o,e.GSUB.subt)},e.GSUB.subt=function(i,r,s,o){var l=e._bin,c=s,h={};if(h.fmt=l.readUshort(i,s),s+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&h.fmt<=2||r==6&&h.fmt<=2){var u=l.readUshort(i,s);s+=2,h.coverage=e._lctf.readCoverage(i,c+u)}if(r==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(i,s),s+=2;else if(h.fmt==2){var d=l.readUshort(i,s);s+=2,h.newg=l.readUshorts(i,s,d),s+=2*h.newg.length}}else if(r==2&&h.fmt==1){d=l.readUshort(i,s),s+=2,h.seqs=[];for(var f=0;f<d;f++){var p=l.readUshort(i,s)+c;s+=2;var v=l.readUshort(i,p);h.seqs.push(l.readUshorts(i,p+2,v))}}else if(r==4)for(h.vals=[],d=l.readUshort(i,s),s+=2,f=0;f<d;f++){var g=l.readUshort(i,s);s+=2,h.vals.push(e.GSUB.readLigatureSet(i,c+g))}else if(r==5&&h.fmt==2){if(h.fmt==2){var m=l.readUshort(i,s);s+=2,h.cDef=e._lctf.readClassDef(i,c+m),h.scset=[];var y=l.readUshort(i,s);for(s+=2,f=0;f<y;f++){var _=l.readUshort(i,s);s+=2,h.scset.push(_==0?null:e.GSUB.readSubClassSet(i,c+_))}}}else if(r==6&&h.fmt==3){if(h.fmt==3){for(f=0;f<3;f++){d=l.readUshort(i,s),s+=2;for(var x=[],C=0;C<d;C++)x.push(e._lctf.readCoverage(i,c+l.readUshort(i,s+2*C)));s+=2*d,f==0&&(h.backCvg=x),f==1&&(h.inptCvg=x),f==2&&(h.ahedCvg=x)}d=l.readUshort(i,s),s+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(i,s,d)}}else{if(r==7&&h.fmt==1){var E=l.readUshort(i,s);s+=2;var w=l.readUint(i,s);if(s+=4,o.ltype==9)o.ltype=E;else if(o.ltype!=E)throw"invalid extension substitution";return e.GSUB.subt(i,o.ltype,c+w)}console.debug("unsupported GSUB table LookupType",r,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(i,r){var s=e._bin.readUshort,o=r,l=[],c=s(i,r);r+=2;for(var h=0;h<c;h++){var u=s(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,o+u))}return l},e.GSUB.readSubClassRule=function(i,r){var s=e._bin.readUshort,o={},l=s(i,r),c=s(i,r+=2);r+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(s(i,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),o},e.GSUB.readSubstLookupRecords=function(i,r,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(i,r),o(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var u=s.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,o+u))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=s.readUshort(i,r);r+=2,c==1&&h--,o[l[c]]=s.readUshorts(i,r,h),r+=2*o[l[c]].length}return h=s.readUshort(i,r),r+=2,o.subst=s.readUshorts(i,r,2*h),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(i,r){var s=e._bin,o=r,l=[],c=s.readUshort(i,r);r+=2;for(var h=0;h<c;h++){var u=s.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,o+u))}return l},e.GSUB.readLigature=function(i,r){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(i,r),r+=2;var l=s.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(i,r)),r+=2;return o},e.head={},e.head.parse=function(i,r,s){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.fontRevision=o.readFixed(i,r),r+=4,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4,l.flags=o.readUshort(i,r),r+=2,l.unitsPerEm=o.readUshort(i,r),r+=2,l.created=o.readUint64(i,r),r+=8,l.modified=o.readUint64(i,r),r+=8,l.xMin=o.readShort(i,r),r+=2,l.yMin=o.readShort(i,r),r+=2,l.xMax=o.readShort(i,r),r+=2,l.yMax=o.readShort(i,r),r+=2,l.macStyle=o.readUshort(i,r),r+=2,l.lowestRecPPEM=o.readUshort(i,r),r+=2,l.fontDirectionHint=o.readShort(i,r),r+=2,l.indexToLocFormat=o.readShort(i,r),r+=2,l.glyphDataFormat=o.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,s){var o=e._bin,l={};return o.readFixed(i,r),r+=4,l.ascender=o.readShort(i,r),r+=2,l.descender=o.readShort(i,r),r+=2,l.lineGap=o.readShort(i,r),r+=2,l.advanceWidthMax=o.readUshort(i,r),r+=2,l.minLeftSideBearing=o.readShort(i,r),r+=2,l.minRightSideBearing=o.readShort(i,r),r+=2,l.xMaxExtent=o.readShort(i,r),r+=2,l.caretSlopeRise=o.readShort(i,r),r+=2,l.caretSlopeRun=o.readShort(i,r),r+=2,l.caretOffset=o.readShort(i,r),r+=2,r+=8,l.metricDataFormat=o.readShort(i,r),r+=2,l.numberOfHMetrics=o.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,d=0;d<o.maxp.numGlyphs;d++)d<o.hhea.numberOfHMetrics&&(h=l.readUshort(i,r),r+=2,u=l.readShort(i,r),r+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(i,r,s,o){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,s,o);var h=l.readUshort(i,r);r+=2;for(var u={glyph1:[],rval:[]},d=0;d<h;d++){r+=2,s=l.readUshort(i,r),r+=2;var f=l.readUshort(i,r);r+=2;var p=f>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(i,r,u)}return u},e.kern.parseV1=function(i,r,s,o){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(i,r),r+=4;var d=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var f=d>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;r=e.kern.readFormat0(i,r,h)}return h},e.kern.readFormat0=function(i,r,s){var o=e._bin,l=-1,c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var h=0;h<c;h++){var u=o.readUshort(i,r);r+=2;var d=o.readUshort(i,r);r+=2;var f=o.readShort(i,r);r+=2,u!=l&&(s.glyph1.push(u),s.rval.push({glyph2:[],vals:[]}));var p=s.rval[s.rval.length-1];p.glyph2.push(d),p.vals.push(f),l=u}return r},e.loca={},e.loca.parse=function(i,r,s,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(h==0)for(var d=0;d<u;d++)c.push(l.readUshort(i,r+(d<<1))<<1);if(h==1)for(d=0;d<u;d++)c.push(l.readUint(i,r+(d<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,s){var o=e._bin,l={},c=o.readUint(i,r);return r+=4,l.numGlyphs=o.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(i,r),r+=2,l.maxContours=o.readUshort(i,r),r+=2,l.maxCompositePoints=o.readUshort(i,r),r+=2,l.maxCompositeContours=o.readUshort(i,r),r+=2,l.maxZones=o.readUshort(i,r),r+=2,l.maxTwilightPoints=o.readUshort(i,r),r+=2,l.maxStorage=o.readUshort(i,r),r+=2,l.maxFunctionDefs=o.readUshort(i,r),r+=2,l.maxInstructionDefs=o.readUshort(i,r),r+=2,l.maxStackElements=o.readUshort(i,r),r+=2,l.maxSizeOfInstructions=o.readUshort(i,r),r+=2,l.maxComponentElements=o.readUshort(i,r),r+=2,l.maxComponentDepth=o.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,s){var o=e._bin,l={};o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=r+=2,f=0;f<c;f++){var p=o.readUshort(i,r);r+=2;var v=o.readUshort(i,r);r+=2;var g=o.readUshort(i,r);r+=2;var m=o.readUshort(i,r);r+=2;var y=o.readUshort(i,r);r+=2;var _=o.readUshort(i,r);r+=2;var x,C=u[m],E=d+12*c+_;if(p==0)x=o.readUnicode(i,E,y/2);else if(p==3&&v==0)x=o.readUnicode(i,E,y/2);else if(v==0)x=o.readASCII(i,E,y);else if(v==1)x=o.readUnicode(i,E,y/2);else if(v==3)x=o.readUnicode(i,E,y/2);else{if(p!=1)throw"unknown encoding "+v+", platformID: "+p;x=o.readASCII(i,E,y),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var w="p"+p+","+g.toString(16);l[w]==null&&(l[w]={}),l[w][C!==void 0?C:m]=x,l[w]._lang=g}for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==1033)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==0)return l[R];for(var R in l)if(l[R].postScriptName!=null&&l[R]._lang==3084)return l[R];for(var R in l)if(l[R].postScriptName!=null)return l[R];for(var R in l){h=R;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(i,r,s){var o=e._bin.readUshort(i,r);r+=2;var l={};if(o==0)e["OS/2"].version0(i,r,l);else if(o==1)e["OS/2"].version1(i,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(i,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(i,r),r+=2,s.usWeightClass=o.readUshort(i,r),r+=2,s.usWidthClass=o.readUshort(i,r),r+=2,s.fsType=o.readUshort(i,r),r+=2,s.ySubscriptXSize=o.readShort(i,r),r+=2,s.ySubscriptYSize=o.readShort(i,r),r+=2,s.ySubscriptXOffset=o.readShort(i,r),r+=2,s.ySubscriptYOffset=o.readShort(i,r),r+=2,s.ySuperscriptXSize=o.readShort(i,r),r+=2,s.ySuperscriptYSize=o.readShort(i,r),r+=2,s.ySuperscriptXOffset=o.readShort(i,r),r+=2,s.ySuperscriptYOffset=o.readShort(i,r),r+=2,s.yStrikeoutSize=o.readShort(i,r),r+=2,s.yStrikeoutPosition=o.readShort(i,r),r+=2,s.sFamilyClass=o.readShort(i,r),r+=2,s.panose=o.readBytes(i,r,10),r+=10,s.ulUnicodeRange1=o.readUint(i,r),r+=4,s.ulUnicodeRange2=o.readUint(i,r),r+=4,s.ulUnicodeRange3=o.readUint(i,r),r+=4,s.ulUnicodeRange4=o.readUint(i,r),r+=4,s.achVendID=[o.readInt8(i,r),o.readInt8(i,r+1),o.readInt8(i,r+2),o.readInt8(i,r+3)],r+=4,s.fsSelection=o.readUshort(i,r),r+=2,s.usFirstCharIndex=o.readUshort(i,r),r+=2,s.usLastCharIndex=o.readUshort(i,r),r+=2,s.sTypoAscender=o.readShort(i,r),r+=2,s.sTypoDescender=o.readShort(i,r),r+=2,s.sTypoLineGap=o.readShort(i,r),r+=2,s.usWinAscent=o.readUshort(i,r),r+=2,s.usWinDescent=o.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,s){var o=e._bin;return r=e["OS/2"].version0(i,r,s),s.ulCodePageRange1=o.readUint(i,r),r+=4,s.ulCodePageRange2=o.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,s){var o=e._bin;return r=e["OS/2"].version1(i,r,s),s.sxHeight=o.readShort(i,r),r+=2,s.sCapHeight=o.readShort(i,r),r+=2,s.usDefault=o.readUshort(i,r),r+=2,s.usBreak=o.readUshort(i,r),r+=2,s.usMaxContext=o.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,s){var o=e._bin;return r=e["OS/2"].version2(i,r,s),s.usLowerOpticalPointSize=o.readUshort(i,r),r+=2,s.usUpperOpticalPointSize=o.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,s){var o=e._bin,l={};return l.version=o.readFixed(i,r),r+=4,l.italicAngle=o.readFixed(i,r),r+=4,l.underlinePosition=o.readShort(i,r),r+=2,l.underlineThickness=o.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var s=i.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(r<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=r&&r<=u[1])return u[2]+(r-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var s={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var o=i.SVG.entries[r];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),i.SVG.entries[r]=o),o)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,h=i.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=r;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,h,s)}else i.glyf&&e.U._drawGlyf(r,i,s);return s},e.U._drawGlyf=function(i,r,s){var o=r.glyf[i];o==null&&(o=r.glyf[i]=e.glyf._parseGlyf(r,i)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,r,s))},e.U._simpleGlyph=function(i,r){for(var s=0;s<i.noc;s++){for(var o=s==0?0:i.endPts[s-1]+1,l=i.endPts[s],c=o;c<=l;c++){var h=c==o?l:c-1,u=c==l?o:c+1,d=1&i.flags[c],f=1&i.flags[h],p=1&i.flags[u],v=i.xs[c],g=i.ys[c];if(c==o)if(d){if(!f){e.U.P.moveTo(r,v,g);continue}e.U.P.moveTo(r,i.xs[h],i.ys[h])}else f?e.U.P.moveTo(r,i.xs[h],i.ys[h]):e.U.P.moveTo(r,(i.xs[h]+v)/2,(i.ys[h]+g)/2);d?f&&e.U.P.lineTo(r,v,g):p?e.U.P.qcurveTo(r,v,g,i.xs[u],i.ys[u]):e.U.P.qcurveTo(r,v,g,(v+i.xs[u])/2,(g+i.ys[u])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,s){for(var o=0;o<i.parts.length;o++){var l={cmds:[],crds:[]},c=i.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var d=l.crds[u],f=l.crds[u+1];s.crds.push(d*h.a+f*h.b+h.tx),s.crds.push(d*h.c+f*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)s.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(i,r){var s=e._lctf.getInterval(r,i);return s==-1?0:r[s+2]},e.U._applySubs=function(i,r,s,o){for(var l=i.length-r-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var h,u=s.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,i[r]))!=-1){if(s.ltype==1)i[r],u.fmt==1?i[r]=i[r]+u.delta:i[r]=u.newg[h];else if(s.ltype==4)for(var d=u.vals[h],f=0;f<d.length;f++){var p=d[f],v=p.chain.length;if(!(v>l)){for(var g=!0,m=0,y=0;y<v;y++){for(;i[r+m+(1+y)]==-1;)m++;p.chain[y]!=i[r+m+(1+y)]&&(g=!1)}if(g){for(i[r]=p.nglyph,y=0;y<v+m;y++)i[r+y+1]=-1;break}}}else if(s.ltype==5&&u.fmt==2)for(var _=e._lctf.getInterval(u.cDef,i[r]),x=u.cDef[_+2],C=u.scset[x],E=0;E<C.length;E++){var w=C[E],R=w.input;if(!(R.length>l)){for(g=!0,y=0;y<R.length;y++){var S=e._lctf.getInterval(u.cDef,i[r+1+y]);if(_==-1&&u.cDef[S+2]!=R[y]){g=!1;break}}if(g){var M=w.substLookupRecords;for(f=0;f<M.length;f+=2)M[f],M[f+1]}}}else if(s.ltype==6&&u.fmt==3){if(!e.U._glsCovered(i,u.backCvg,r-u.backCvg.length)||!e.U._glsCovered(i,u.inptCvg,r)||!e.U._glsCovered(i,u.ahedCvg,r+u.inptCvg.length))continue;var D=u.lookupRec;for(E=0;E<D.length;E+=2){_=D[E];var U=o[D[E+1]];e.U._applySubs(i,r+_,U,o)}}}}},e.U._glsCovered=function(i,r,s){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],i[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var h=r[c];if(h!=-1){for(var u=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,d=e.U.glyphToPath(i,h),f=0;f<d.crds.length;f+=2)o.crds.push(d.crds[f]+l),o.crds.push(d.crds[f+1]);for(s&&o.cmds.push(s),f=0;f<d.cmds.length;f++)o.cmds.push(d.cmds[f]);s&&o.cmds.push("X"),l+=i.hmtx.aWidth[h],c<r.length-1&&(l+=e.U.getPairAdjustment(i,h,u))}}return o},e.U.P={},e.U.P.moveTo=function(i,r,s){i.cmds.push("M"),i.crds.push(r,s)},e.U.P.lineTo=function(i,r,s){i.cmds.push("L"),i.crds.push(r,s)},e.U.P.curveTo=function(i,r,s,o,l,c,h){i.cmds.push("C"),i.crds.push(r,s,o,l,c,h)},e.U.P.qcurveTo=function(i,r,s,o,l){i.cmds.push("Q"),i.crds.push(r,s,o,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,s,o,l){for(var c=r.stack,h=r.nStems,u=r.haveWidth,d=r.width,f=r.open,p=0,v=r.x,g=r.y,m=0,y=0,_=0,x=0,C=0,E=0,w=0,R=0,S=0,M=0,D={val:0,size:0};p<i.length;){e.CFF.getCharString(i,p,D);var U=D.val;if(p+=D.size,U=="o1"||U=="o18")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(U=="o4")c.length>1&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),f&&e.U.P.closePath(l),g+=c.pop(),e.U.P.moveTo(l,v,g),f=!0;else if(U=="o5")for(;c.length>0;)v+=c.shift(),g+=c.shift(),e.U.P.lineTo(l,v,g);else if(U=="o6"||U=="o7")for(var N=c.length,O=U=="o6",V=0;V<N;V++){var B=c.shift();O?v+=B:g+=B,O=!O,e.U.P.lineTo(l,v,g)}else if(U=="o8"||U=="o24"){N=c.length;for(var j=0;j+6<=N;)m=v+c.shift(),y=g+c.shift(),_=m+c.shift(),x=y+c.shift(),v=_+c.shift(),g=x+c.shift(),e.U.P.curveTo(l,m,y,_,x,v,g),j+=6;U=="o24"&&(v+=c.shift(),g+=c.shift(),e.U.P.lineTo(l,v,g))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(y=g,_=(m=v+c.shift())+c.shift(),M=x=y+c.shift(),E=x,R=g,v=(w=(C=(S=_+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,_,x,S,M),e.U.P.curveTo(l,C,E,w,R,v,g)),U=="o1235"&&(m=v+c.shift(),y=g+c.shift(),_=m+c.shift(),x=y+c.shift(),S=_+c.shift(),M=x+c.shift(),C=S+c.shift(),E=M+c.shift(),w=C+c.shift(),R=E+c.shift(),v=w+c.shift(),g=R+c.shift(),c.shift(),e.U.P.curveTo(l,m,y,_,x,S,M),e.U.P.curveTo(l,C,E,w,R,v,g)),U=="o1236"&&(m=v+c.shift(),y=g+c.shift(),_=m+c.shift(),M=x=y+c.shift(),E=x,w=(C=(S=_+c.shift())+c.shift())+c.shift(),R=E+c.shift(),v=w+c.shift(),e.U.P.curveTo(l,m,y,_,x,S,M),e.U.P.curveTo(l,C,E,w,R,v,g)),U=="o1237"&&(m=v+c.shift(),y=g+c.shift(),_=m+c.shift(),x=y+c.shift(),S=_+c.shift(),M=x+c.shift(),C=S+c.shift(),E=M+c.shift(),w=C+c.shift(),R=E+c.shift(),Math.abs(w-v)>Math.abs(R-g)?v=w+c.shift():g=R+c.shift(),e.U.P.curveTo(l,m,y,_,x,S,M),e.U.P.curveTo(l,C,E,w,R,v,g));else if(U=="o14"){if(c.length>0&&!u&&(d=c.shift()+s.nominalWidthX,u=!0),c.length==4){var Y=c.shift(),Q=c.shift(),J=c.shift(),F=c.shift(),X=e.CFF.glyphBySE(s,J),se=e.CFF.glyphBySE(s,F);e.U._drawCFF(s.CharStrings[X],r,s,o,l),r.x=Y,r.y=Q,e.U._drawCFF(s.CharStrings[se],r,s,o,l)}f&&(e.U.P.closePath(l),f=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,p+=h+7>>3;else if(U=="o21")c.length>2&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),g+=c.pop(),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,g),f=!0;else if(U=="o22")c.length>1&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,g),f=!0;else if(U=="o25"){for(;c.length>6;)v+=c.shift(),g+=c.shift(),e.U.P.lineTo(l,v,g);m=v+c.shift(),y=g+c.shift(),_=m+c.shift(),x=y+c.shift(),v=_+c.shift(),g=x+c.shift(),e.U.P.curveTo(l,m,y,_,x,v,g)}else if(U=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)m=v,y=g+c.shift(),v=_=m+c.shift(),g=(x=y+c.shift())+c.shift(),e.U.P.curveTo(l,m,y,_,x,v,g);else if(U=="o27")for(c.length%2&&(g+=c.shift());c.length>0;)y=g,_=(m=v+c.shift())+c.shift(),x=y+c.shift(),v=_+c.shift(),g=x,e.U.P.curveTo(l,m,y,_,x,v,g);else if(U=="o10"||U=="o29"){var k=U=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var z=c.pop(),re=k.Subrs[z+k.Bias];r.x=v,r.y=g,r.nStems=h,r.haveWidth=u,r.width=d,r.open=f,e.U._drawCFF(re,r,s,o,l),v=r.x,g=r.y,h=r.nStems,u=r.haveWidth,d=r.width,f=r.open}}else if(U=="o30"||U=="o31"){var W=c.length,le=(j=0,U=="o31");for(j+=W-(N=-3&W);j<N;)le?(y=g,_=(m=v+c.shift())+c.shift(),g=(x=y+c.shift())+c.shift(),N-j==5?(v=_+c.shift(),j++):v=_,le=!1):(m=v,y=g+c.shift(),_=m+c.shift(),x=y+c.shift(),v=_+c.shift(),N-j==5?(g=x+c.shift(),j++):g=x,le=!0),e.U.P.curveTo(l,m,y,_,x,v,g),j+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,i),U;c.push(U)}}}r.x=v,r.y=g,r.nStems=h,r.haveWidth=u,r.width=d,r.open=f};var t=e,n={Typr:t};return a.Typr=t,a.default=n,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function M1(){return function(a){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(U,N){for(var O=new t(31),V=0;V<31;++V)O[V]=N+=1<<U[V-1];var B=new n(O[30]);for(V=1;V<30;++V)for(var j=O[V];j<O[V+1];++j)B[j]=j-O[V]<<5|V;return[O,B]},l=o(i,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=o(r,0)[0],d=new t(32768),f=0;f<32768;++f){var p=(43690&f)>>>1|(21845&f)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,d[f]=((65280&p)>>>8|(255&p)<<8)>>>1}var v=function(U,N,O){for(var V=U.length,B=0,j=new t(N);B<V;++B)++j[U[B]-1];var Y,Q=new t(N);for(B=0;B<N;++B)Q[B]=Q[B-1]+j[B-1]<<1;{Y=new t(1<<N);var J=15-N;for(B=0;B<V;++B)if(U[B])for(var F=B<<4|U[B],X=N-U[B],se=Q[U[B]-1]++<<X,k=se|(1<<X)-1;se<=k;++se)Y[d[se]>>>J]=F}return Y},g=new e(288);for(f=0;f<144;++f)g[f]=8;for(f=144;f<256;++f)g[f]=9;for(f=256;f<280;++f)g[f]=7;for(f=280;f<288;++f)g[f]=8;var m=new e(32);for(f=0;f<32;++f)m[f]=5;var y=v(g,9),_=v(m,5),x=function(U){for(var N=U[0],O=1;O<U.length;++O)U[O]>N&&(N=U[O]);return N},C=function(U,N,O){var V=N/8|0;return(U[V]|U[V+1]<<8)>>(7&N)&O},E=function(U,N){var O=N/8|0;return(U[O]|U[O+1]<<8|U[O+2]<<16)>>(7&N)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],R=function(U,N,O){var V=new Error(N||w[U]);if(V.code=U,Error.captureStackTrace&&Error.captureStackTrace(V,R),!O)throw V;return V},S=function(U,N,O){var V=U.length;if(!V||O&&!O.l&&V<5)return N||new e(0);var B=!N||O,j=!O||O.i;O||(O={}),N||(N=new e(3*V));var Y,Q=function(Se){var Ue=N.length;if(Se>Ue){var Xe=new e(Math.max(2*Ue,Se));Xe.set(N),N=Xe}},J=O.f||0,F=O.p||0,X=O.b||0,se=O.l,k=O.d,z=O.m,re=O.n,W=8*V;do{if(!se){O.f=J=C(U,F,1);var le=C(U,F+1,3);if(F+=3,!le){var xe=U[(I=((Y=F)/8|0)+(7&Y&&1)+4)-4]|U[I-3]<<8,be=I+xe;if(be>V){j&&R(0);break}B&&Q(X+xe),N.set(U.subarray(I,be),X),O.b=X+=xe,O.p=F=8*be;continue}if(le==1)se=y,k=_,z=9,re=5;else if(le==2){var ye=C(U,F,31)+257,T=C(U,F+10,15)+4,de=ye+C(U,F+5,31)+1;F+=14;for(var he=new e(de),fe=new e(19),ne=0;ne<T;++ne)fe[s[ne]]=C(U,F+3*ne,7);F+=3*T;var Ee=x(fe),ae=(1<<Ee)-1,pe=v(fe,Ee);for(ne=0;ne<de;){var I,b=pe[C(U,F,ae)];if(F+=15&b,(I=b>>>4)<16)he[ne++]=I;else{var G=0,K=0;for(I==16?(K=3+C(U,F,3),F+=2,G=he[ne-1]):I==17?(K=3+C(U,F,7),F+=3):I==18&&(K=11+C(U,F,127),F+=7);K--;)he[ne++]=G}}var te=he.subarray(0,ye),$=he.subarray(ye);z=x(te),re=x($),se=v(te,z),k=v($,re)}else R(1);if(F>W){j&&R(0);break}}B&&Q(X+131072);for(var Ie=(1<<z)-1,ue=(1<<re)-1,ve=F;;ve=F){var Te=(G=se[E(U,F)&Ie])>>>4;if((F+=15&G)>W){j&&R(0);break}if(G||R(2),Te<256)N[X++]=Te;else{if(Te==256){ve=F,se=null;break}var ge=Te-254;if(Te>264){var we=i[ne=Te-257];ge=C(U,F,(1<<we)-1)+c[ne],F+=we}var ke=k[E(U,F)&ue],Ce=ke>>>4;if(ke||R(3),F+=15&ke,$=u[Ce],Ce>3&&(we=r[Ce],$+=E(U,F)&(1<<we)-1,F+=we),F>W){j&&R(0);break}B&&Q(X+131072);for(var Me=X+ge;X<Me;X+=4)N[X]=N[X-$],N[X+1]=N[X+1-$],N[X+2]=N[X+2-$],N[X+3]=N[X+3-$];X=Me}}O.l=se,O.p=ve,O.b=X,se&&(J=1,O.m=z,O.d=k,O.n=re)}while(!J);return X==N.length?N:function(Se,Ue,Xe){(Xe==null||Xe>Se.length)&&(Xe=Se.length);var A=new(Se instanceof t?t:Se instanceof n?n:e)(Xe-Ue);return A.set(Se.subarray(Ue,Xe)),A}(N,0,X)},M=new e(0),D=typeof TextDecoder<"u"&&new TextDecoder;try{D.decode(M,{stream:!0})}catch{}return a.convert_streams=function(U){var N=new DataView(U),O=0;function V(){var ye=N.getUint16(O);return O+=2,ye}function B(){var ye=N.getUint32(O);return O+=4,ye}function j(ye){xe.setUint16(be,ye),be+=2}function Y(ye){xe.setUint32(be,ye),be+=4}for(var Q={signature:B(),flavor:B(),length:B(),numTables:V(),reserved:V(),totalSfntSize:B(),majorVersion:V(),minorVersion:V(),metaOffset:B(),metaLength:B(),metaOrigLength:B(),privOffset:B(),privLength:B()},J=0;Math.pow(2,J)<=Q.numTables;)J++;J--;for(var F=16*Math.pow(2,J),X=16*Q.numTables-F,se=12,k=[],z=0;z<Q.numTables;z++)k.push({tag:B(),offset:B(),compLength:B(),origLength:B(),origChecksum:B()}),se+=16;var re,W=new Uint8Array(12+16*k.length+k.reduce(function(ye,T){return ye+T.origLength+4},0)),le=W.buffer,xe=new DataView(le),be=0;return Y(Q.flavor),j(Q.numTables),j(F),j(J),j(X),k.forEach(function(ye){Y(ye.tag),Y(ye.origChecksum),Y(se),Y(ye.origLength),ye.outOffset=se,(se+=ye.origLength)%4!=0&&(se+=4-se%4)}),k.forEach(function(ye){var T,de=U.slice(ye.offset,ye.offset+ye.compLength);if(ye.compLength!=ye.origLength){var he=new Uint8Array(ye.origLength);T=new Uint8Array(de,2),S(T,he)}else he=new Uint8Array(de);W.set(he,ye.outOffset);var fe=0;(se=ye.outOffset+ye.origLength)%4!=0&&(fe=4-se%4),W.set(new Uint8Array(fe).buffer,ye.outOffset+ye.origLength),re=se+fe}),le.slice(0,re)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function b1(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,s=4,o=8,l=16,c=32;let h;function u(w){if(!h){const R={R:r,L:i,D:s,C:l,U:c,T:o};h=new Map;for(let S in n){let M=0;n[S].split(",").forEach(D=>{let[U,N]=D.split("+");U=parseInt(U,36),N=N?parseInt(N,36):0,h.set(M+=U,R[S]);for(let O=N;O--;)h.set(++M,R[S])})}}return h.get(w)||c}const d=1,f=2,p=3,v=4,g=[null,"isol","init","fina","medi"];function m(w){const R=new Uint8Array(w.length);let S=c,M=d,D=-1;for(let U=0;U<w.length;U++){const N=w.codePointAt(U);let O=u(N)|0,V=d;O&o||(S&(i|s|l)?O&(r|s|l)?(V=p,(M===d||M===p)&&R[D]++):O&(i|c)&&(M===f||M===v)&&R[D]--:S&(r|c)&&(M===f||M===v)&&R[D]--,M=R[U]=V,S=O,D=U,N>65535&&U++)}return R}function y(w,R){const S=[];for(let D=0;D<R.length;D++){const U=R.codePointAt(D);U>65535&&D++,S.push(a.U.codeToGlyph(w,U))}const M=w.GSUB;if(M){const{lookupList:D,featureList:U}=M;let N;const O=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];U.forEach(B=>{if(O.test(B.tag))for(let j=0;j<B.tab.length;j++){if(V[B.tab[j]])continue;V[B.tab[j]]=!0;const Y=D[B.tab[j]],Q=/^(isol|init|fina|medi)$/.test(B.tag);Q&&!N&&(N=m(R));for(let J=0;J<S.length;J++)(!N||!Q||g[N[J]]===B.tag)&&a.U._applySubs(S,J,Y,D)}})}return S}function _(w,R){const S=new Int16Array(R.length*3);let M=0;for(;M<R.length;M++){const O=R[M];if(O===-1)continue;S[M*3+2]=w.hmtx.aWidth[O];const V=w.GPOS;if(V){const B=V.lookupList;for(let j=0;j<B.length;j++){const Y=B[j];for(let Q=0;Q<Y.tabs.length;Q++){const J=Y.tabs[Q];if(Y.ltype===1){if(a._lctf.coverageIndex(J.coverage,O)!==-1&&J.pos){N(J.pos,M);break}}else if(Y.ltype===2){let F=null,X=D();if(X!==-1){const se=a._lctf.coverageIndex(J.coverage,R[X]);if(se!==-1){if(J.fmt===1){const k=J.pairsets[se];for(let z=0;z<k.length;z++)k[z].gid2===O&&(F=k[z])}else if(J.fmt===2){const k=a.U._getGlyphClass(R[X],J.classDef1),z=a.U._getGlyphClass(O,J.classDef2);F=J.matrix[k][z]}if(F){F.val1&&N(F.val1,X),F.val2&&N(F.val2,M);break}}}}else if(Y.ltype===4){const F=a._lctf.coverageIndex(J.markCoverage,O);if(F!==-1){const X=D(U),se=X===-1?-1:a._lctf.coverageIndex(J.baseCoverage,R[X]);if(se!==-1){const k=J.markArray[F],z=J.baseArray[se][k.markClass];S[M*3]=z.x-k.x+S[X*3]-S[X*3+2],S[M*3+1]=z.y-k.y+S[X*3+1];break}}}else if(Y.ltype===6){const F=a._lctf.coverageIndex(J.mark1Coverage,O);if(F!==-1){const X=D();if(X!==-1){const se=R[X];if(x(w,se)===3){const k=a._lctf.coverageIndex(J.mark2Coverage,se);if(k!==-1){const z=J.mark1Array[F],re=J.mark2Array[k][z.markClass];S[M*3]=re.x-z.x+S[X*3]-S[X*3+2],S[M*3+1]=re.y-z.y+S[X*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const B=D();if(B!==-1){const j=w.kern.glyph1.indexOf(R[B]);if(j!==-1){const Y=w.kern.rval[j].glyph2.indexOf(O);Y!==-1&&(S[B*3+2]+=w.kern.rval[j].vals[Y])}}}}return S;function D(O){for(let V=M-1;V>=0;V--)if(R[V]!==-1&&(!O||O(R[V])))return V;return-1}function U(O){return x(w,O)===1}function N(O,V){for(let B=0;B<3;B++)S[V*3+B]+=O[B]||0}}function x(w,R){const S=w.GDEF&&w.GDEF.glyphClassDef;return S?a.U._getGlyphClass(R,S):0}function C(...w){for(let R=0;R<w.length;R++)if(typeof w[R]=="number")return w[R]}function E(w){const R=Object.create(null),S=w["OS/2"],M=w.hhea,D=w.head.unitsPerEm,U=C(S&&S.sTypoAscender,M&&M.ascender,D),N={unitsPerEm:D,ascender:U,descender:C(S&&S.sTypoDescender,M&&M.descender,0),capHeight:C(S&&S.sCapHeight,U),xHeight:C(S&&S.sxHeight,U),lineGap:C(S&&S.sTypoLineGap,M&&M.lineGap),supportsCodePoint(O){return a.U.codeToGlyph(w,O)>0},forEachGlyph(O,V,B,j){let Y=0;const Q=1/N.unitsPerEm*V,J=y(w,O);let F=0;const X=_(w,J);return J.forEach((se,k)=>{if(se!==-1){let z=R[se];if(!z){const{cmds:re,crds:W}=a.U.glyphToPath(w,se);let le="",xe=0;for(let he=0,fe=re.length;he<fe;he++){const ne=t[re[he]];le+=re[he];for(let Ee=1;Ee<=ne;Ee++)le+=(Ee>1?",":"")+W[xe++]}let be,ye,T,de;if(W.length){be=ye=1/0,T=de=-1/0;for(let he=0,fe=W.length;he<fe;he+=2){let ne=W[he],Ee=W[he+1];ne<be&&(be=ne),Ee<ye&&(ye=Ee),ne>T&&(T=ne),Ee>de&&(de=Ee)}}else be=T=ye=de=0;z=R[se]={index:se,advanceWidth:w.hmtx.aWidth[se],xMin:be,yMin:ye,xMax:T,yMax:de,path:le}}j.call(null,z,Y+X[k*3]*Q,X[k*3+1]*Q,F),Y+=X[k*3+2]*Q,B&&(Y+=B*V)}F+=O.codePointAt(F)>65535?2:1}),Y}};return N}return function(R){const S=new Uint8Array(R,0,4),M=a._bin.readASCII(S,0,4);if(M==="wOFF")R=e(R);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return E(a.parse(R)[0])}}const S1=$r({name:"Typr Font Parser",dependencies:[x1,M1,b1],init(a,e,t){const n=a(),i=e();return t(n,i)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function w1(){return function(a){var e=function(){this.buckets=new Map};e.prototype.add=function(_){var x=_>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&_))},e.prototype.has=function(_){var x=this.buckets.get(_>>5);return x!==void 0&&(x&1<<(31&_))!=0},e.prototype.serialize=function(){var _=[];return this.buckets.forEach(function(x,C){_.push((+C).toString(36)+":"+x.toString(36))}),_.join(",")},e.prototype.deserialize=function(_){var x=this;this.buckets.clear(),_.split(",").forEach(function(C){var E=C.split(":");x.buckets.set(parseInt(E[0],36),parseInt(E[1],36))})};var t=Math.pow(2,8),n=t-1,i=~n;function r(_){var x=function(E){return E&i}(_).toString(16),C=function(E){return(E&i)+t-1}(_).toString(16);return"codepoint-index/plane"+(_>>16)+"/"+x+"-"+C+".json"}function s(_,x){var C=_&n,E=x.codePointAt(C/6|0);return((E=(E||48)-48)&1<<C%6)!=0}function o(_,x){var C;(C=_,C.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(E){return E.split("-").map(function(w){return parseInt(w.trim(),16)})})).forEach(function(E){var w=E[0],R=E[1];R===void 0&&(R=w),x(w,R)})}function l(_,x){o(_,function(C,E){for(var w=C;w<=E;w++)x(w)})}var c={},h={},u=new WeakMap,d="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function f(_){var x=u.get(_);return x||(x=new e,l(_.ranges,function(C){return x.add(C)}),u.set(_,x)),x}var p,v=new Map;function g(_,x,C){return _[x]?x:_[C]?C:function(E){for(var w in E)return w}(_)}function m(_,x){var C=x;if(!_.includes(C)){C=1/0;for(var E=0;E<_.length;E++)Math.abs(_[E]-x)<Math.abs(C-x)&&(C=_[E])}return C}function y(_){return p||(p=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){p.add(x)})),p.has(_)}return a.CodePointSet=e,a.clearCache=function(){c={},h={}},a.getFontsForString=function(_,x){x===void 0&&(x={});var C,E=x.lang;E===void 0&&(E=new RegExp("\\p{Script=Hangul}","u").test(C=_)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(C)?"ja":"en");var w=x.category;w===void 0&&(w="sans-serif");var R=x.style;R===void 0&&(R="normal");var S=x.weight;S===void 0&&(S=400);var M=(x.dataUrl||d).replace(/\/$/g,""),D=new Map,U=new Uint8Array(_.length),N={},O={},V=new Array(_.length),B=new Map,j=!1;function Y(F){var X=v.get(F);return X||(X=fetch(M+"/"+F).then(function(se){if(!se.ok)throw new Error(se.statusText);return se.json().then(function(k){if(!Array.isArray(k)||k[0]!==1)throw new Error("Incorrect schema version; need 1, got "+k[0]);return k[1]})}).catch(function(se){if(M!==d)return j||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+se.message),j=!0),M=d,v.delete(F),Y(F);throw se}),v.set(F,X)),X}for(var Q=function(F){var X=_.codePointAt(F),se=r(X);V[F]=se,c[se]||B.has(se)||B.set(se,Y(se).then(function(k){c[se]=k})),X>65535&&(F++,J=F)},J=0;J<_.length;J++)Q(J);return Promise.all(B.values()).then(function(){B.clear();for(var F=function(se){var k=_.codePointAt(se),z=null,re=c[V[se]],W=void 0;for(var le in re){var xe=O[le];if(xe===void 0&&(xe=O[le]=new RegExp(le).test(E||"en")),xe){for(var be in W=le,re[le])if(s(k,re[le][be])){z=be;break}break}}if(!z){e:for(var ye in re)if(ye!==W){for(var T in re[ye])if(s(k,re[ye][T])){z=T;break e}}}z||(console.debug("No font coverage for U+"+k.toString(16)),z="latin"),V[se]=z,h[z]||B.has(z)||B.set(z,Y("font-meta/"+z+".json").then(function(de){h[z]=de})),k>65535&&(se++,X=se)},X=0;X<_.length;X++)F(X);return Promise.all(B.values())}).then(function(){for(var F,X=null,se=0;se<_.length;se++){var k=_.codePointAt(se);if(X&&(y(k)||f(X).has(k)))U[se]=U[se-1];else{X=h[V[se]];var z=N[X.id];if(!z){var re=X.typeforms,W=g(re,w,"sans-serif"),le=g(re[W],R,"normal"),xe=m((F=re[W])===null||F===void 0?void 0:F[le],S);z=N[X.id]=M+"/font-files/"+X.id+"/"+W+"."+le+"."+xe+".woff"}var be=D.get(z);be==null&&(be=D.size,D.set(z,be)),U[se]=be}k>65535&&(se++,U[se]=U[se-1])}return{fontUrls:Array.from(D.keys()),chars:U}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function A1(a,e){const t=Object.create(null),n=Object.create(null);function i(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=a(c.response);h.src=s,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(s,o){let l=t[s];l?o(l):n[s]?n[s].push(o):(n[s]=[o],i(s,c=>{c.src=s,t[s]=c,n[s].forEach(h=>h(c)),delete n[s]}))}return function(s,o,{lang:l,fonts:c=[],style:h="normal",weight:u="normal",unicodeFontsURL:d}={}){const f=new Uint8Array(s.length),p=[];s.length||y();const v=new Map,g=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(x=>!x.lang||x.lang.test(l)).reverse(),c.length){let w=0;(function R(S=0){for(let M=S,D=s.length;M<D;M++){const U=s.codePointAt(M);if(w===1&&p[f[M-1]].supportsCodePoint(U)||/\s/.test(s[M]))f[M]=f[M-1],w===2&&(g[g.length-1][1]=M);else for(let N=f[M],O=c.length;N<=O;N++)if(N===O){const V=w===2?g[g.length-1]:g[g.length]=[M,M];V[1]=M,w=2}else{f[M]=N;const{src:V,unicodeRange:B}=c[N];if(!B||_(U,B)){const j=t[V];if(!j){r(V,()=>{R(M)});return}if(j.supportsCodePoint(U)){let Y=v.get(j);typeof Y!="number"&&(Y=p.length,p.push(j),v.set(j,Y)),f[M]=Y,w=1;break}}}U>65535&&M+1<D&&(f[M+1]=f[M],M++,w===2&&(g[g.length-1][1]=M))}m()})()}else g.push([0,s.length-1]),m();function m(){if(g.length){const x=g.map(C=>s.substring(C[0],C[1]+1)).join(`
`);e.getFontsForString(x,{lang:l||void 0,style:h,weight:u,dataUrl:d}).then(({fontUrls:C,chars:E})=>{const w=p.length;let R=0;g.forEach(M=>{for(let D=0,U=M[1]-M[0];D<=U;D++)f[M[0]+D]=E[R++]+w;R++});let S=0;C.forEach((M,D)=>{r(M,U=>{p[D+w]=U,++S===C.length&&y()})})})}else y()}function y(){o({chars:f,fonts:p})}function _(x,C){for(let E=0;E<C.length;E++){const[w,R=w]=C[E];if(w<=x&&x<=R)return!0}return!1}}}const E1=$r({name:"FontResolver",dependencies:[A1,S1,w1],init(a,e,t){return a(e,t())}});function T1(a,e){const n=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,i="[^\\S\\u00A0]",r=new RegExp(`${i}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function s({text:p,lang:v,fonts:g,style:m,weight:y,preResolvedFonts:_,unicodeFontsURL:x},C){const E=({chars:w,fonts:R})=>{let S,M;const D=[];for(let U=0;U<w.length;U++)w[U]!==M?(M=w[U],D.push(S={start:U,end:U,fontObj:R[w[U]]})):S.end=U;C(D)};_?E(_):a(p,E,{lang:v,fonts:g,style:m,weight:y,unicodeFontsURL:x})}function o({text:p="",font:v,lang:g,sdfGlyphSize:m=64,fontSize:y=400,fontWeight:_=1,fontStyle:x="normal",letterSpacing:C=0,lineHeight:E="normal",maxWidth:w=1/0,direction:R,textAlign:S="left",textIndent:M=0,whiteSpace:D="normal",overflowWrap:U="normal",anchorX:N=0,anchorY:O=0,metricsOnly:V=!1,unicodeFontsURL:B,preResolvedFonts:j=null,includeCaretPositions:Y=!1,chunkedBoundsSize:Q=8192,colorRanges:J=null},F){const X=u(),se={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,C=+C,w=+w,E=E||"normal",M=+M,s({text:p,lang:g,style:x,weight:_,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:B,preResolvedFonts:j},k=>{se.fontLoad=u()-X;const z=isFinite(w);let re=null,W=null,le=null,xe=null,be=null,ye=null,T=null,de=null,he=0,fe=0,ne=D!=="nowrap";const Ee=new Map,ae=u();let pe=M,I=0,b=new d;const G=[b];k.forEach(ue=>{const{fontObj:ve}=ue,{ascender:Te,descender:ge,unitsPerEm:we,lineGap:ke,capHeight:Ce,xHeight:Me}=ve;let Se=Ee.get(ve);if(!Se){const H=y/we,ie=E==="normal"?(Te-ge+ke)*H:E*y,Ae=(ie-(Te-ge)*H)/2,Pe=Math.min(ie,(Te-ge)*H),Le=(Te+ge)/2*H+Pe/2;Se={index:Ee.size,src:ve.src,fontObj:ve,fontSizeMult:H,unitsPerEm:we,ascender:Te*H,descender:ge*H,capHeight:Ce*H,xHeight:Me*H,lineHeight:ie,baseline:-Ae-Te*H,caretTop:Le,caretBottom:Le-Pe},Ee.set(ve,Se)}const{fontSizeMult:Ue}=Se,Xe=p.slice(ue.start,ue.end+1);let A,Z;ve.forEachGlyph(Xe,y,C,(H,ie,Ae,Pe)=>{ie+=I,Pe+=ue.start,A=ie,Z=H;const Le=p.charAt(Pe),je=H.advanceWidth*Ue,Ze=b.count;let Fe;if("isEmpty"in H||(H.isWhitespace=!!Le&&new RegExp(i).test(Le),H.canBreakAfter=!!Le&&r.test(Le),H.isEmpty=H.xMin===H.xMax||H.yMin===H.yMax||n.test(Le)),!H.isWhitespace&&!H.isEmpty&&fe++,ne&&z&&!H.isWhitespace&&ie+je+pe>w&&Ze){if(b.glyphAt(Ze-1).glyphObj.canBreakAfter)Fe=new d,pe=-ie;else for(let it=Ze;it--;)if(it===0&&U==="break-word"){Fe=new d,pe=-ie;break}else if(b.glyphAt(it).glyphObj.canBreakAfter){Fe=b.splitAt(it+1);const pt=Fe.glyphAt(0).x;pe-=pt;for(let tt=Fe.count;tt--;)Fe.glyphAt(tt).x-=pt;break}Fe&&(b.isSoftWrapped=!0,b=Fe,G.push(b),he=w)}let Ke=b.glyphAt(b.count);Ke.glyphObj=H,Ke.x=ie+pe,Ke.y=Ae,Ke.width=je,Ke.charIndex=Pe,Ke.fontData=Se,Le===`
`&&(b=new d,G.push(b),pe=-(ie+je+C*y)+M)}),I=A+Z.advanceWidth*Ue+C*y});let K=0;G.forEach(ue=>{let ve=!0;for(let Te=ue.count;Te--;){const ge=ue.glyphAt(Te);ve&&!ge.glyphObj.isWhitespace&&(ue.width=ge.x+ge.width,ue.width>he&&(he=ue.width),ve=!1);let{lineHeight:we,capHeight:ke,xHeight:Ce,baseline:Me}=ge.fontData;we>ue.lineHeight&&(ue.lineHeight=we);const Se=Me-ue.baseline;Se<0&&(ue.baseline+=Se,ue.cap+=Se,ue.ex+=Se),ue.cap=Math.max(ue.cap,ue.baseline+ke),ue.ex=Math.max(ue.ex,ue.baseline+Ce)}ue.baseline-=K,ue.cap-=K,ue.ex-=K,K+=ue.lineHeight});let te=0,$=0;if(N&&(typeof N=="number"?te=-N:typeof N=="string"&&(te=-he*(N==="left"?0:N==="center"?.5:N==="right"?1:c(N)))),O&&(typeof O=="number"?$=-O:typeof O=="string"&&($=O==="top"?0:O==="top-baseline"?-G[0].baseline:O==="top-cap"?-G[0].cap:O==="top-ex"?-G[0].ex:O==="middle"?K/2:O==="bottom"?K:O==="bottom-baseline"?-G[G.length-1].baseline:c(O)*K)),!V){const ue=e.getEmbeddingLevels(p,R);re=new Uint16Array(fe),W=new Uint8Array(fe),le=new Float32Array(fe*2),xe={},T=[1/0,1/0,-1/0,-1/0],de=[],Y&&(ye=new Float32Array(p.length*4)),J&&(be=new Uint8Array(fe*3));let ve=0,Te=-1,ge=-1,we,ke;if(G.forEach((Ce,Me)=>{let{count:Se,width:Ue}=Ce;if(Se>0){let Xe=0;for(let Pe=Se;Pe--&&Ce.glyphAt(Pe).glyphObj.isWhitespace;)Xe++;let A=0,Z=0;if(S==="center")A=(he-Ue)/2;else if(S==="right")A=he-Ue;else if(S==="justify"&&Ce.isSoftWrapped){let Pe=0;for(let Le=Se-Xe;Le--;)Ce.glyphAt(Le).glyphObj.isWhitespace&&Pe++;Z=(he-Ue)/Pe}if(Z||A){let Pe=0;for(let Le=0;Le<Se;Le++){let je=Ce.glyphAt(Le);const Ze=je.glyphObj;je.x+=A+Pe,Z!==0&&Ze.isWhitespace&&Le<Se-Xe&&(Pe+=Z,je.width+=Z)}}const H=e.getReorderSegments(p,ue,Ce.glyphAt(0).charIndex,Ce.glyphAt(Ce.count-1).charIndex);for(let Pe=0;Pe<H.length;Pe++){const[Le,je]=H[Pe];let Ze=1/0,Fe=-1/0;for(let Ke=0;Ke<Se;Ke++)if(Ce.glyphAt(Ke).charIndex>=Le){let it=Ke,pt=Ke;for(;pt<Se;pt++){let tt=Ce.glyphAt(pt);if(tt.charIndex>je)break;pt<Se-Xe&&(Ze=Math.min(Ze,tt.x),Fe=Math.max(Fe,tt.x+tt.width))}for(let tt=it;tt<pt;tt++){const St=Ce.glyphAt(tt);St.x=Fe-(St.x+St.width-Ze)}break}}let ie;const Ae=Pe=>ie=Pe;for(let Pe=0;Pe<Se;Pe++){const Le=Ce.glyphAt(Pe);ie=Le.glyphObj;const je=ie.index,Ze=ue.levels[Le.charIndex]&1;if(Ze){const Fe=e.getMirroredCharacter(p[Le.charIndex]);Fe&&Le.fontData.fontObj.forEachGlyph(Fe,0,0,Ae)}if(Y){const{charIndex:Fe,fontData:Ke}=Le,it=Le.x+te,pt=Le.x+Le.width+te;ye[Fe*4]=Ze?pt:it,ye[Fe*4+1]=Ze?it:pt,ye[Fe*4+2]=Ce.baseline+Ke.caretBottom+$,ye[Fe*4+3]=Ce.baseline+Ke.caretTop+$;const tt=Fe-Te;tt>1&&h(ye,Te,tt),Te=Fe}if(J){const{charIndex:Fe}=Le;for(;Fe>ge;)ge++,J.hasOwnProperty(ge)&&(ke=J[ge])}if(!ie.isWhitespace&&!ie.isEmpty){const Fe=ve++,{fontSizeMult:Ke,src:it,index:pt}=Le.fontData,tt=xe[it]||(xe[it]={});tt[je]||(tt[je]={path:ie.path,pathBounds:[ie.xMin,ie.yMin,ie.xMax,ie.yMax]});const St=Le.x+te,kt=Le.y+Ce.baseline+$;le[Fe*2]=St,le[Fe*2+1]=kt;const qt=St+ie.xMin*Ke,ln=kt+ie.yMin*Ke,On=St+ie.xMax*Ke,en=kt+ie.yMax*Ke;qt<T[0]&&(T[0]=qt),ln<T[1]&&(T[1]=ln),On>T[2]&&(T[2]=On),en>T[3]&&(T[3]=en),Fe%Q===0&&(we={start:Fe,end:Fe,rect:[1/0,1/0,-1/0,-1/0]},de.push(we)),we.end++;const Lt=we.rect;if(qt<Lt[0]&&(Lt[0]=qt),ln<Lt[1]&&(Lt[1]=ln),On>Lt[2]&&(Lt[2]=On),en>Lt[3]&&(Lt[3]=en),re[Fe]=je,W[Fe]=pt,J){const kn=Fe*3;be[kn]=ke>>16&255,be[kn+1]=ke>>8&255,be[kn+2]=ke&255}}}}}),ye){const Ce=p.length-Te;Ce>1&&h(ye,Te,Ce)}}const Ie=[];Ee.forEach(({index:ue,src:ve,unitsPerEm:Te,ascender:ge,descender:we,lineHeight:ke,capHeight:Ce,xHeight:Me})=>{Ie[ue]={src:ve,unitsPerEm:Te,ascender:ge,descender:we,lineHeight:ke,capHeight:Ce,xHeight:Me}}),se.typesetting=u()-ae,F({glyphIds:re,glyphFontIndices:W,glyphPositions:le,glyphData:xe,fontData:Ie,caretPositions:ye,glyphColors:be,chunkedBounds:de,fontSize:y,topBaseline:$+G[0].baseline,blockBounds:[te,$-K,te+he,$],visibleBounds:T,timings:se})})}function l(p,v){o({...p,metricsOnly:!0},g=>{const[m,y,_,x]=g.blockBounds;v({width:_-m,height:x-y})})}function c(p){let v=p.match(/^([\d.]+)%$/),g=v?parseFloat(v[1]):NaN;return isNaN(g)?0:g/100}function h(p,v,g){const m=p[v*4],y=p[v*4+1],_=p[v*4+2],x=p[v*4+3],C=(y-m)/g;for(let E=0;E<g;E++){const w=(v+E)*4;p[w]=m+C*E,p[w+1]=m+C*(E+1),p[w+2]=_,p[w+3]=x}}function u(){return(self.performance||Date).now()}function d(){this.data=[]}const f=["glyphObj","x","y","width","charIndex","fontData"];return d.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(p){let v=d.flyweight;return v.data=this.data,v.index=p,v},splitAt(p){let v=new d;return v.data=this.data.splice(p*f.length),v}},d.flyweight=f.reduce((p,v,g,m)=>(Object.defineProperty(p,v,{get(){return this.data[this.index*f.length+g]},set(y){this.data[this.index*f.length+g]=y}}),p),{data:null,index:0}),{typeset:o,measure:l}}const rr=()=>(self.performance||Date).now(),Yl=Nm();let mf;function C1(a,e,t,n,i,r,s,o,l,c,h=!0){return h?P1(a,e,t,n,i,r,s,o,l,c).then(null,u=>(mf||(console.warn("WebGL SDF generation failed, falling back to JS",u),mf=!0),vf(a,e,t,n,i,r,s,o,l,c))):vf(a,e,t,n,i,r,s,o,l,c)}const Mo=[],R1=5;let _h=0;function Om(){const a=rr();for(;Mo.length&&rr()-a<R1;)Mo.shift()();_h=Mo.length?setTimeout(Om,0):0}const P1=(...a)=>new Promise((e,t)=>{Mo.push(()=>{const n=rr();try{Yl.webgl.generateIntoCanvas(...a),e({timing:rr()-n})}catch(i){t(i)}}),_h||(_h=setTimeout(Om,0))}),I1=4,L1=2e3,gf={};let U1=0;function vf(a,e,t,n,i,r,s,o,l,c){const h="TroikaTextSDFGenerator_JS_"+U1++%I1;let u=gf[h];return u||(u=gf[h]={workerModule:$r({name:h,workerId:h,dependencies:[Nm,rr],init(d,f){const p=d().javascript.generate;return function(...v){const g=f();return{textureData:p(...v),timing:f()-g}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(a,e,t,n,i,r).then(({textureData:d,timing:f})=>{const p=rr(),v=new Uint8Array(d.length*4);for(let g=0;g<d.length;g++)v[g*4+c]=d[g];return Yl.webglUtils.renderImageData(s,v,o,l,a,e,1<<3-c),f+=rr()-p,--u.requests===0&&(u.idleTimer=setTimeout(()=>{h1(h)},L1)),{timing:f}})}function D1(a){a._warm||(Yl.webgl.isSupported(a),a._warm=!0)}const N1=Yl.webglUtils.resizeWebGLCanvasWithoutClearing,kr={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},F1=new De;function Or(){return(self.performance||Date).now()}const _f=Object.create(null);function O1(a,e){a=B1({},a);const t=Or(),{defaultFontURL:n}=kr,i=[];if(n&&i.push({label:"default",src:yf(n)}),a.font&&i.push({label:"user",src:yf(a.font)}),a.font=i,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||kr.sdfGlyphSize,a.unicodeFontsURL=a.unicodeFontsURL||kr.unicodeFontsURL,a.colorRanges!=null){let d={};for(let f in a.colorRanges)if(a.colorRanges.hasOwnProperty(f)){let p=a.colorRanges[f];typeof p!="number"&&(p=F1.set(p).getHex()),d[f]=p}a.colorRanges=d}Object.freeze(a);const{textureWidth:r,sdfExponent:s}=kr,{sdfGlyphSize:o}=a,l=r/o*4;let c=_f[o];if(!c){const d=document.createElement("canvas");d.width=r,d.height=o*256/l,c=_f[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:d,sdfTexture:new yt(d,void 0,void 0,void 0,gt,gt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,k1(c)}const{sdfTexture:h,sdfCanvas:u}=c;G1(a).then(d=>{const{glyphIds:f,glyphFontIndices:p,fontData:v,glyphPositions:g,fontSize:m,timings:y}=d,_=[],x=new Float32Array(f.length*4);let C=0,E=0;const w=Or(),R=v.map(N=>{let O=c.glyphsByFont.get(N.src);return O||c.glyphsByFont.set(N.src,O=new Map),O});f.forEach((N,O)=>{const V=p[O],{src:B,unitsPerEm:j}=v[V];let Y=R[V].get(N);if(!Y){const{path:se,pathBounds:k}=d.glyphData[B][N],z=Math.max(k[2]-k[0],k[3]-k[1])/o*(kr.sdfMargin*o+.5),re=c.glyphCount++,W=[k[0]-z,k[1]-z,k[2]+z,k[3]+z];R[V].set(N,Y={path:se,atlasIndex:re,sdfViewBox:W}),_.push(Y)}const{sdfViewBox:Q}=Y,J=g[E++],F=g[E++],X=m/j;x[C++]=J+Q[0]*X,x[C++]=F+Q[1]*X,x[C++]=J+Q[2]*X,x[C++]=F+Q[3]*X,f[O]=Y.atlasIndex}),y.quads=(y.quads||0)+(Or()-w);const S=Or();y.sdf={};const M=u.height,D=Math.ceil(c.glyphCount/l),U=Math.pow(2,Math.ceil(Math.log2(D*o)));U>M&&(console.info(`Increasing SDF texture size ${M}->${U}`),N1(u,r,U),h.dispose()),Promise.all(_.map(N=>km(N,c,a.gpuAccelerateSDF).then(({timing:O})=>{y.sdf[N.atlasIndex]=O}))).then(()=>{_.length&&!c.contextLost&&(Bm(c),h.needsUpdate=!0),y.sdfTotal=Or()-S,y.total=Or()-t,e(Object.freeze({parameters:a,sdfTexture:h,sdfGlyphSize:o,sdfExponent:s,glyphBounds:x,glyphAtlasIndices:f,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{c.contextLost||D1(u)})}function km({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},s){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=kr,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(o/n)*n,d=Math.floor(h/(o/n))*n,f=e%4;return C1(n,n,a,t,c,l,i,u,d,f,s)}function k1(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const n=[];a.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(km(r,a,!0))})}),Promise.all(n).then(()=>{Bm(a),a.sdfTexture.needsUpdate=!0})})}function B1(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let mo;function yf(a){return mo||(mo=typeof document>"u"?{}:document.createElement("a")),mo.href=a,mo.href}function Bm(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:n,height:i}=e,r=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==n*i*4)&&(s=new Uint8Array(n*i*4),t.image={width:n,height:i,data:s},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,s)}}const z1=$r({name:"Typesetter",dependencies:[T1,E1,d1],init(a,e,t){return a(e,t())}}),G1=$r({name:"Typesetter",dependencies:[z1],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),xf={};function V1(a){let e=xf[a];if(!e){const t=new bn(1,1,a,a),n=t.clone(),i=t.attributes,r=n.attributes,s=new qe,o=i.uv.count;for(let l=0;l<o;l++)r.position.array[l*3]*=-1,r.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{s.setAttribute(l,new ze([...i[l].array,...r[l].array],i[l].itemSize))}),s.setIndex([...t.index.array,...n.index.array.map(l=>l+o)]),s.translate(.5,.5,0),e=xf[a]=s}return e}const H1="aTroikaGlyphBounds",Mf="aTroikaGlyphIndex",W1="aTroikaGlyphColor";class X1 extends au{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Ot,this.boundingBox=new Xt}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===Ht?t/2:0,e===jt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=V1(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,i,r){Yc(this,H1,e,4),Yc(this,Mf,t,1),Yc(this,W1,r,3),this._blockBounds=n,this._chunkedBounds=i,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:i,floor:r,min:s,max:o,sin:l,cos:c}=Math,h=i/2,u=i*2,d=Math.abs(t),f=e[0]/d,p=e[2]/d,v=r((f+h)/u)!==r((p+h)/u)?-d:s(l(f)*d,l(p)*d),g=r((f-h)/u)!==r((p-h)/u)?d:o(l(f)*d,l(p)*d),m=r((f+i)/u)!==r((p+i)/u)?d*2:o(d-c(f)*d,d-c(p)*d);n.min.set(v,e[1],t<0?-m:0),n.max.set(g,e[3],t<0?0:m)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Mf).count,n=this._chunkedBounds;if(n)for(let i=n.length;i--;){t=n[i].end;let r=n[i].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}}function Yc(a,e,t,n){const i=a.getAttribute(e);t?i&&i.array.length===t.length?(i.array.set(t),i.needsUpdate=!0):(a.setAttribute(e,new lr(t,n)),delete a._maxInstanceCount,a.dispose()):i&&a.deleteAttribute(e)}const Y1=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,q1=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Z1=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,K1=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function J1(a){const e=vh(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new me},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new lt(0,0,0,0)},uTroikaClipRect:{value:new lt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new me},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new De},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Je},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Y1,vertexTransform:q1,fragmentDefs:Z1,fragmentColorTransform:K1,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(Fm,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const fu=new Mn({color:16777215,side:jt,transparent:!0}),bf=8421504,Sf=new We,go=new L,qc=new L,Ms=[],j1=new L,Zc="+x+y";function wf(a){return Array.isArray(a)?a[0]:a}let zm=()=>{const a=new et(new bn(1,1),fu);return zm=()=>a,a},Gm=()=>{const a=new et(new bn(1,1,32,1),fu);return Gm=()=>a,a};const Q1={type:"syncstart"},$1={type:"synccomplete"},Vm=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],eS=Vm.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class bo extends et{constructor(){const e=new X1;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=bf,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Zc,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Q1),O1({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(i=>i&&i())})),this.dispatchEvent($1),e&&e()})))}onBeforeRender(e,t,n,i,r,s){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r),r._hadOwnSide=r.hasOwnProperty("side"),this.geometry.setSide(r._actualSide=r.side),r.side=Wn}onAfterRender(e,t,n,i,r,s){r._hadOwnSide?r.side=r._actualSide:delete r.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=fu.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=J1(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function i(){e.removeEventListener("dispose",i),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return wf(this.material).getDepthMaterial()}get customDistanceMaterial(){return wf(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,i=this.textRenderInfo;if(i){const{sdfTexture:o,blockBounds:l}=i;n.uTroikaSDFTexture.value=o,n.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),n.uTroikaSDFGlyphSize.value=i.sdfGlyphSize,n.uTroikaSDFExponent.value=i.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!i.glyphColors;let c=0,h=0,u=0,d,f,p,v=0,g=0;if(t){let{outlineWidth:y,outlineOffsetX:_,outlineOffsetY:x,outlineBlur:C,outlineOpacity:E}=this;c=this._parsePercent(y)||0,h=Math.max(0,this._parsePercent(C)||0),d=E,v=this._parsePercent(_)||0,g=this._parsePercent(x)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(p=this.strokeColor,n.uTroikaStrokeColor.value.set(p??bf),f=this.strokeOpacity,f==null&&(f=1)),d=this.fillOpacity;n.uTroikaDistanceOffset.value=c,n.uTroikaPositionOffset.value.set(v,g),n.uTroikaBlurRadius.value=h,n.uTroikaStrokeWidth.value=u,n.uTroikaStrokeOpacity.value=f,n.uTroikaFillOpacity.value=d??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)n.uTroikaClipRect.value.fromArray(m);else{const y=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new De;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let s=this.orientation||Zc;if(s!==e._orientation){let o=n.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==Zc&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,d]=l;go.set(0,0,0)[h]=c==="-"?1:-1,qc.set(0,0,0)[d]=u==="-"?-1:1,Sf.lookAt(j1,go.cross(qc),qc),o.setFromMatrix4(Sf)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new me){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new me){return go.copy(e),this.localPositionToTextCoords(this.worldToLocal(go),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:i}=this;if(n){const r=n.blockBounds,s=i?Gm():zm(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let u=r[0]+c.getX(h)*(r[2]-r[0]);const d=r[1]+c.getY(h)*(r[3]-r[1]);let f=0;i&&(f=i-Math.cos(u/i)*i,u=Math.sin(u/i)*i),l.setXYZ(h,u,d,f)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,Ms.length=0,s.raycast(e,Ms);for(let h=0;h<Ms.length;h++)Ms[h].object=this,t.push(Ms[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,eS.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}Vm.forEach(a=>{const e="_private_"+a;Object.defineProperty(bo.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class tS{constructor(e,t){this.score=0,this.defaultMultiplier=1,this.multiplier=this.defaultMultiplier,this.streakCount=0,this.maxMultiplier=4,this.loadingStarPower=!1,this.starPower=!1,this.starPowerMultiplier=2,this.starPowerMeasureDuration=2,this.starPowerCurrentTickCount=0,this.regularNoteScore=50,this.streak2=new bo,this.streak2_default_text="STREAK",this.streak2.fontSize=.55,this.streak2.position.x=.3,this.streak2.position.y=e.fretboardHeight/2,this.streak2.position.z=1.1,this.streak2.orientation="+x+z",this.streak2.fontStyle="italic",this.streak2.outlineWidth=.05,this.streak2.outlineBlur=.05,this.streak1=new bo,this.streak1_default_text="NOTE",this.streak1.position.x=.3,this.streak1.fontSize=.8,this.streak1.position.y=e.fretboardHeight/2,this.streak1.position.z=this.streak2.position.z+this.streak2.fontSize+.2,this.streak1.orientation="+x+z",this.streak1.fontStyle="italic",this.streak1.outlineWidth=.05,this.streak1.outlineBlur=.05,this.streakText=new bo,this.streakText.fontSize=1.2,this.streakText.position.x=-e.fretboardWidth/2.8,this.streakText.position.y=e.fretboardHeight/2,this.streakText.position.z=1.95,this.streakText.orientation="+x+z",this.streakText.outlineWidth=.05,this.streakText.outlineBlur=.05,this.addToScene(t),this.thunderImg=document.getElementById("thunder"),this.updateScoreUI()}addToScene(e){e.add(this.streak1,this.streak2,this.streakText)}updateScoreUI(){this.streakCount?(this.streakText.text=this.streakCount.toString(),this.streak1.text=this.streak1_default_text,this.streak2.text=this.streak2_default_text,this.streakText.sync(),this.streak1.sync(),this.streak2.sync()):(this.streakText.text="",this.streak1.text="",this.streak2.text="",this.streakText.sync(),this.streak1.sync(),this.streak2.sync());const e=document.getElementById("score");e.innerText=`${this.score}`;const t=document.getElementById("multiplier-value");t.innerText=`${this.multiplier}`,this.drawMultiplierCircle()}drawMultiplierCircle(){const e=document.getElementById("multiplier-circle"),t=e.getContext("2d"),n=e.width/2,i=10,r=10,s=2*Math.PI/r;var o=this.streakCount%r;t.clearRect(0,0,e.width,e.height),t.beginPath(),t.arc(n,n,n-i/2,0,2*Math.PI),t.strokeStyle="rgba(255, 255, 255, 0.5)",t.lineWidth=i,t.stroke(),this.defaultMultiplier==this.maxMultiplier&&(o=r),o>0&&(t.beginPath(),t.arc(n,n,n-i/2,-Math.PI/2,o*s-Math.PI/2),t.strokeStyle="aquamarine",t.lineWidth=i,t.stroke())}hideStarPowerCircle(){const e=document.getElementById("star-power-circle");e.getContext("2d").clearRect(0,0,e.width,e.height),this.thunderImg.style.display="none"}drawStarPowerCircle(){const e=document.getElementById("star-power-circle"),t=e.getContext("2d"),n=e.width/2,i=10,r=this.starPowerMeasureDuration*8,s=2*Math.PI/r,o=this.starPowerCurrentTickCount%r;t.clearRect(0,0,e.width,e.height),t.beginPath(),t.arc(n,n,n-i/2,0,2*Math.PI),t.strokeStyle="aquamarine",t.lineWidth=i,t.stroke(),o>0&&(t.beginPath(),t.arc(n,n,n-i/2,-Math.PI/2,-Math.PI/2+o*s,!0),t.strokeStyle="rgba(255, 255, 255, 0.5)",t.lineWidth=i,t.stroke())}incrementScore(e){this.streakCount++,this.streakCount===10?this.defaultMultiplier=2:this.streakCount===20?this.defaultMultiplier=3:this.streakCount===30&&(this.defaultMultiplier=4),this.multiplier=this.defaultMultiplier,this.starPower&&(this.multiplier*=this.starPowerMultiplier),this.score+=Math.floor(e*this.multiplier)}resetStreak(){this.streakCount=0,this.defaultMultiplier=1,this.multiplier=1}activateStarPower(){console.log("STAR POWER ACTIVATED"),this.starPower=!0,this.starPowerCurrentTickCount=0,this.thunderImg.style.display="block"}deactivateStarPower(){console.log("STAR POWER DEACTIVATED"),this.starPower=!1,this.starPowerCurrentTickCount=0,this.hideStarPowerCircle()}handleHit(e){const t=e.some(i=>i.isSpecial),n=e.some(i=>i.isLastSpecial);t&&!this.loadingStarPower&&!this.interruptedLoadingStarPower&&(this.loadingStarPower=!0),n&&(this.interruptedLoadingStarPower=!1,this.loadingStarPower&&(this.loadingStarPower=!1,this.activateStarPower())),e.forEach(i=>{this.incrementScore(i.accuracy*this.regularNoteScore)}),this.updateScoreUI()}handleMiss(e){(this.loadingStarPower||e.some(t=>t.isSpecial))&&(this.interruptedLoadingStarPower=!0,this.loadingStarPower=!1),e.some(t=>t.isLastSpecial)&&(this.interruptedLoadingStarPower=!1),this.resetStreak(),this.updateScoreUI()}}class nS{constructor(e){this.keyMap={A:0,S:1,D:2,F:3,G:4,J:"strum",K:"strum"},this.keysPressed={},this.gameManager=e,window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t))}onKeyDown(e){e.key==="Escape"&&this.gameManager.togglePause(),this.keyMap[e.key.toUpperCase()]!==void 0&&(this.keyMap[e.key.toUpperCase()]=="strum"&&this.gameManager.updateStrumAnimation(this.getPressedLanes()),this.keysPressed[e.key.toUpperCase()]=!0)}onKeyUp(e){this.keyMap[e.key.toUpperCase()]!==void 0&&(this.keyMap[e.key.toUpperCase()]=="strum"&&this.gameManager.fretboard.disableActiveFireEffects(),delete this.keysPressed[e.key.toUpperCase()])}isLaneKeyPressed(e){return Object.keys(this.keysPressed).some(t=>this.keyMap[t]===e)}getPressedLanes(){return Object.keys(this.keysPressed).filter(e=>this.keyMap[e]!=="strum").map(e=>this.keyMap[e])}isStrumPressed(){return this.keysPressed.J===!0}}class iS{constructor(e){this.lights=[],this.resetted=!0,this.gui=e,this.lightFolders=[],this.createDirectionalLight(16777215,[5,0,7.5]),this.createAmbientLight(4210752)}addToScene(e){e.add(...this.lights)}createLight(e,t,n){n&&(e.position.set(...n),e.originalPosition=n.slice()),e.originalColor=new De(t),this.lights.push(e)}createPointLight(e,t){const n=new iu(e,1,100);this.createLight(n,e,t),this.addLightGUI("Point Light",n)}createDirectionalLight(e,t){const n=new ru(e,2);this.createLight(n,e,t),this.addLightGUI("Directional Light",n)}createAmbientLight(e){const t=new su(e,2);this.createLight(t,e,null),this.addLightGUI("Ambient Light",t)}addLightGUI(e,t){const n=this.gui.addFolder(e),i={color:t.color.getHex()};n.addColor(i,"color").onChange(r=>{t.color.set(r)}),t.originalPosition&&(n.add(t.position,"x",-50,50).listen(),n.add(t.position,"y",-50,50).listen(),n.add(t.position,"z",-10,50).listen()),n.add(t,"intensity",0,2).listen(),this.lightFolders.push(n)}animateLights(){this.resetted=!1;const e=new De(16777215),t=new De(11075583),n=2e3,r=Date.now()%n/n;this.lights.forEach(s=>{if(s.isDirectionalLight){const o=e.clone().lerp(t,Math.sin(r*Math.PI));s.color.set(o)}})}update(e){if(e){this.animateLights();return}this.resetted||(this.lights.forEach(t=>{t.originalPosition&&t.position.set(...t.originalPosition),console.log(t.originalColor),t.color.set(t.originalColor),t.intensity=2}),this.resetted=!0)}}const Af={type:"change"},Kc={type:"start"},Ef={type:"end"},vo=new hr,Tf=new ti,rS=Math.cos(70*Ap.DEG2RAD);class sS extends Yn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",ve),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Af),n.update(),r=i.NONE},this.update=function(){const A=new L,Z=new Wt().setFromUnitVectors(e.up,new L(0,1,0)),H=Z.clone().invert(),ie=new L,Ae=new Wt,Pe=new L,Le=2*Math.PI;return function(Ze=null){const Fe=n.object.position;A.copy(Fe).sub(n.target),A.applyQuaternion(Z),o.setFromVector3(A),n.autoRotate&&r===i.NONE&&U(M(Ze)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ke=n.minAzimuthAngle,it=n.maxAzimuthAngle;isFinite(Ke)&&isFinite(it)&&(Ke<-Math.PI?Ke+=Le:Ke>Math.PI&&(Ke-=Le),it<-Math.PI?it+=Le:it>Math.PI&&(it-=Le),Ke<=it?o.theta=Math.max(Ke,Math.min(it,o.theta)):o.theta=o.theta>(Ke+it)/2?Math.max(Ke,o.theta):Math.min(it,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let pt=!1;if(n.zoomToCursor&&E||n.object.isOrthographicCamera)o.radius=J(o.radius);else{const tt=o.radius;o.radius=J(o.radius*c),pt=tt!=o.radius}if(A.setFromSpherical(o),A.applyQuaternion(H),Fe.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&E){let tt=null;if(n.object.isPerspectiveCamera){const St=A.length();tt=J(St*c);const kt=St-tt;n.object.position.addScaledVector(x,kt),n.object.updateMatrixWorld(),pt=!!kt}else if(n.object.isOrthographicCamera){const St=new L(C.x,C.y,0);St.unproject(n.object);const kt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),pt=kt!==n.object.zoom;const qt=new L(C.x,C.y,0);qt.unproject(n.object),n.object.position.sub(qt).add(St),n.object.updateMatrixWorld(),tt=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;tt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(tt).add(n.object.position):(vo.origin.copy(n.object.position),vo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(vo.direction))<rS?e.lookAt(n.target):(Tf.setFromNormalAndCoplanarPoint(n.object.up,n.target),vo.intersectPlane(Tf,n.target))))}else if(n.object.isOrthographicCamera){const tt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),tt!==n.object.zoom&&(n.object.updateProjectionMatrix(),pt=!0)}return c=1,E=!1,pt||ie.distanceToSquared(n.object.position)>s||8*(1-Ae.dot(n.object.quaternion))>s||Pe.distanceToSquared(n.target)>s?(n.dispatchEvent(Af),ie.copy(n.object.position),Ae.copy(n.object.quaternion),Pe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",we),n.domElement.removeEventListener("pointerdown",pe),n.domElement.removeEventListener("pointercancel",b),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",b),n.domElement.getRootNode().removeEventListener("keydown",Ie,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ve),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,o=new fh,l=new fh;let c=1;const h=new L,u=new me,d=new me,f=new me,p=new me,v=new me,g=new me,m=new me,y=new me,_=new me,x=new L,C=new me;let E=!1;const w=[],R={};let S=!1;function M(A){return A!==null?2*Math.PI/60*n.autoRotateSpeed*A:2*Math.PI/60/60*n.autoRotateSpeed}function D(A){const Z=Math.abs(A*.01);return Math.pow(.95,n.zoomSpeed*Z)}function U(A){l.theta-=A}function N(A){l.phi-=A}const O=function(){const A=new L;return function(H,ie){A.setFromMatrixColumn(ie,0),A.multiplyScalar(-H),h.add(A)}}(),V=function(){const A=new L;return function(H,ie){n.screenSpacePanning===!0?A.setFromMatrixColumn(ie,1):(A.setFromMatrixColumn(ie,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(H),h.add(A)}}(),B=function(){const A=new L;return function(H,ie){const Ae=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;A.copy(Pe).sub(n.target);let Le=A.length();Le*=Math.tan(n.object.fov/2*Math.PI/180),O(2*H*Le/Ae.clientHeight,n.object.matrix),V(2*ie*Le/Ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(H*(n.object.right-n.object.left)/n.object.zoom/Ae.clientWidth,n.object.matrix),V(ie*(n.object.top-n.object.bottom)/n.object.zoom/Ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function j(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(A,Z){if(!n.zoomToCursor)return;E=!0;const H=n.domElement.getBoundingClientRect(),ie=A-H.left,Ae=Z-H.top,Pe=H.width,Le=H.height;C.x=ie/Pe*2-1,C.y=-(Ae/Le)*2+1,x.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function J(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function F(A){u.set(A.clientX,A.clientY)}function X(A){Q(A.clientX,A.clientX),m.set(A.clientX,A.clientY)}function se(A){p.set(A.clientX,A.clientY)}function k(A){d.set(A.clientX,A.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const Z=n.domElement;U(2*Math.PI*f.x/Z.clientHeight),N(2*Math.PI*f.y/Z.clientHeight),u.copy(d),n.update()}function z(A){y.set(A.clientX,A.clientY),_.subVectors(y,m),_.y>0?j(D(_.y)):_.y<0&&Y(D(_.y)),m.copy(y),n.update()}function re(A){v.set(A.clientX,A.clientY),g.subVectors(v,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(v),n.update()}function W(A){Q(A.clientX,A.clientY),A.deltaY<0?Y(D(A.deltaY)):A.deltaY>0&&j(D(A.deltaY)),n.update()}function le(A){let Z=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?U(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?U(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),Z=!0;break}Z&&(A.preventDefault(),n.update())}function xe(A){if(w.length===1)u.set(A.pageX,A.pageY);else{const Z=Ue(A),H=.5*(A.pageX+Z.x),ie=.5*(A.pageY+Z.y);u.set(H,ie)}}function be(A){if(w.length===1)p.set(A.pageX,A.pageY);else{const Z=Ue(A),H=.5*(A.pageX+Z.x),ie=.5*(A.pageY+Z.y);p.set(H,ie)}}function ye(A){const Z=Ue(A),H=A.pageX-Z.x,ie=A.pageY-Z.y,Ae=Math.sqrt(H*H+ie*ie);m.set(0,Ae)}function T(A){n.enableZoom&&ye(A),n.enablePan&&be(A)}function de(A){n.enableZoom&&ye(A),n.enableRotate&&xe(A)}function he(A){if(w.length==1)d.set(A.pageX,A.pageY);else{const H=Ue(A),ie=.5*(A.pageX+H.x),Ae=.5*(A.pageY+H.y);d.set(ie,Ae)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);const Z=n.domElement;U(2*Math.PI*f.x/Z.clientHeight),N(2*Math.PI*f.y/Z.clientHeight),u.copy(d)}function fe(A){if(w.length===1)v.set(A.pageX,A.pageY);else{const Z=Ue(A),H=.5*(A.pageX+Z.x),ie=.5*(A.pageY+Z.y);v.set(H,ie)}g.subVectors(v,p).multiplyScalar(n.panSpeed),B(g.x,g.y),p.copy(v)}function ne(A){const Z=Ue(A),H=A.pageX-Z.x,ie=A.pageY-Z.y,Ae=Math.sqrt(H*H+ie*ie);y.set(0,Ae),_.set(0,Math.pow(y.y/m.y,n.zoomSpeed)),j(_.y),m.copy(y);const Pe=(A.pageX+Z.x)*.5,Le=(A.pageY+Z.y)*.5;Q(Pe,Le)}function Ee(A){n.enableZoom&&ne(A),n.enablePan&&fe(A)}function ae(A){n.enableZoom&&ne(A),n.enableRotate&&he(A)}function pe(A){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",I),n.domElement.addEventListener("pointerup",b)),!Me(A)&&(ke(A),A.pointerType==="touch"?Te(A):G(A)))}function I(A){n.enabled!==!1&&(A.pointerType==="touch"?ge(A):K(A))}function b(A){switch(Ce(A),w.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",b),n.dispatchEvent(Ef),r=i.NONE;break;case 1:const Z=w[0],H=R[Z];Te({pointerId:Z,pageX:H.x,pageY:H.y});break}}function G(A){let Z;switch(A.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Wi.DOLLY:if(n.enableZoom===!1)return;X(A),r=i.DOLLY;break;case Wi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;se(A),r=i.PAN}else{if(n.enableRotate===!1)return;F(A),r=i.ROTATE}break;case Wi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;F(A),r=i.ROTATE}else{if(n.enablePan===!1)return;se(A),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Kc)}function K(A){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;k(A);break;case i.DOLLY:if(n.enableZoom===!1)return;z(A);break;case i.PAN:if(n.enablePan===!1)return;re(A);break}}function te(A){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(A.preventDefault(),n.dispatchEvent(Kc),W($(A)),n.dispatchEvent(Ef))}function $(A){const Z=A.deltaMode,H={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(Z){case 1:H.deltaY*=16;break;case 2:H.deltaY*=100;break}return A.ctrlKey&&!S&&(H.deltaY*=10),H}function Ie(A){A.key==="Control"&&(S=!0,n.domElement.getRootNode().addEventListener("keyup",ue,{passive:!0,capture:!0}))}function ue(A){A.key==="Control"&&(S=!1,n.domElement.getRootNode().removeEventListener("keyup",ue,{passive:!0,capture:!0}))}function ve(A){n.enabled===!1||n.enablePan===!1||le(A)}function Te(A){switch(Se(A),w.length){case 1:switch(n.touches.ONE){case Xi.ROTATE:if(n.enableRotate===!1)return;xe(A),r=i.TOUCH_ROTATE;break;case Xi.PAN:if(n.enablePan===!1)return;be(A),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;T(A),r=i.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;de(A),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Kc)}function ge(A){switch(Se(A),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;he(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;fe(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(A),n.update();break;default:r=i.NONE}}function we(A){n.enabled!==!1&&A.preventDefault()}function ke(A){w.push(A.pointerId)}function Ce(A){delete R[A.pointerId];for(let Z=0;Z<w.length;Z++)if(w[Z]==A.pointerId){w.splice(Z,1);return}}function Me(A){for(let Z=0;Z<w.length;Z++)if(w[Z]==A.pointerId)return!0;return!1}function Se(A){let Z=R[A.pointerId];Z===void 0&&(Z=new me,R[A.pointerId]=Z),Z.set(A.pageX,A.pageY)}function Ue(A){const Z=A.pointerId===w[0]?w[1]:w[0];return R[Z]}n.domElement.addEventListener("contextmenu",we),n.domElement.addEventListener("pointerdown",pe),n.domElement.addEventListener("pointercancel",b),n.domElement.addEventListener("wheel",te,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ie,{passive:!0,capture:!0}),this.update()}}var aS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oS(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Hm={exports:{}};(function(a,e){(function(t,n){a.exports=n()})(aS,function(){var t=function(){function n(f){return s.appendChild(f.dom),f}function i(f){for(var p=0;p<s.children.length;p++)s.children[p].style.display=p===f?"block":"none";r=f}var r=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(f){f.preventDefault(),i(++r%s.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,h=n(new t.Panel("FPS","#0ff","#002")),u=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:s,addPanel:n,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(u.update(f-o,200),f>l+1e3&&(h.update(1e3*c/(f-l),100),l=f,c=0,d)){var p=performance.memory;d.update(p.usedJSHeapSize/1048576,p.jsHeapSizeLimit/1048576)}return f},update:function(){o=this.end()},domElement:s,setMode:i}};return t.Panel=function(n,i,r){var s=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,u=48*c,d=3*c,f=2*c,p=3*c,v=15*c,g=74*c,m=30*c,y=document.createElement("canvas");y.width=h,y.height=u,y.style.cssText="width:80px;height:48px";var _=y.getContext("2d");return _.font="bold "+9*c+"px Helvetica,Arial,sans-serif",_.textBaseline="top",_.fillStyle=r,_.fillRect(0,0,h,u),_.fillStyle=i,_.fillText(n,d,f),_.fillRect(p,v,g,m),_.fillStyle=r,_.globalAlpha=.9,_.fillRect(p,v,g,m),{dom:y,update:function(x,C){s=Math.min(s,x),o=Math.max(o,x),_.fillStyle=r,_.globalAlpha=1,_.fillRect(0,0,h,v),_.fillStyle=i,_.fillText(l(x)+" "+n+" ("+l(s)+"-"+l(o)+")",d,f),_.drawImage(y,p+c,v,g-c,m,p,v,g-c,m),_.fillRect(p+g-c,v,c,m),_.fillStyle=r,_.globalAlpha=.9,_.fillRect(p+g-c,v,c,l((1-x/C)*m))}}},t})})(Hm);var lS=Hm.exports;const cS=oS(lS);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class Hn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Hn.nextNameID=Hn.nextNameID||0,this.$name.id=`lil-gui-name-${++Hn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class hS extends Hn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function yh(a){let e,t;return(e=a.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const uS={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:yh,toHexString:yh},ra={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},dS={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,e,t=1){const n=ra.fromHexString(a);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([a,e,t],n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return ra.toHexString(i)}},fS={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,e,t=1){const n=ra.fromHexString(a);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:a,g:e,b:t},n=1){n=255/n;const i=a*n<<16^e*n<<8^t*n<<0;return ra.toHexString(i)}},pS=[uS,ra,dS,fS];function mS(a){return pS.find(e=>e.match(a))}class gS extends Hn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=mS(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=yh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Jc extends Hn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class vS extends Hn{constructor(e,t,n,i,r,s){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+y),this.$input.value=this.getValue())},i=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let s=!1,o,l,c,h,u;const d=5,f=y=>{o=y.clientX,l=c=y.clientY,s=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",v)},p=y=>{if(s){const _=y.clientX-o,x=y.clientY-l;Math.abs(x)>d?(y.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>d&&v()}if(!s){const _=y.clientY-c;u-=_*this._step*this._arrowKeyMultiplier(y),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",v)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,y,_,x,C)=>(m-y)/(_-y)*(C-x)+x,t=m=>{const y=this.$slider.getBoundingClientRect();let _=e(m,y.left,y.right,this._min,this._max);this._snapClampSetValue(_)},n=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=m=>{t(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,o,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),s=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(o=m.touches[0].clientX,l=m.touches[0].clientY,s=!0):c(m),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=m=>{if(s){const y=m.touches[0].clientX-o,_=m.touches[0].clientY-l;Math.abs(y)>Math.abs(_)?c(m):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else m.preventDefault(),t(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),p=400;let v;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const _=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(f,p)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class _S extends Hn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class yS extends Hn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const xS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function MS(a){const e=document.createElement("style");e.innerHTML=a;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Cf=!1;class pu{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:s=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Cf&&o&&(MS(xS),Cf=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=s}add(e,t,n,i,r){if(Object(n)===n)return new _S(this,e,t,n);const s=e[t];switch(typeof s){case"number":return new vS(this,e,t,n,i,r);case"boolean":return new hS(this,e,t);case"string":return new yS(this,e,t);case"function":return new Jc(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,n=1){return new gS(this,e,t,n)}addFolder(e){const t=new pu({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Jc||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Jc)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class bS{constructor(){this.init(),this.scene.background=new De(0),this.setupGUI(),this.setupBackgroundManager("bg/video480.mp4","bg/image_less_blur.png",!1),this.setupStats();const n=["textures/fretboard/GH_3/GH3_Elroy.png","textures/fretboard/GH_3/GH3_PC-Axel.png","textures/fretboard/GH_3/GH3_PC-Casey.png","textures/fretboard/GH_3/GH3_PC-Izzy.png","textures/fretboard/GH_3/GH3_PC-Johnny.png","textures/fretboard/GH_3/GH3_PC-Judy.png","textures/fretboard/GH_3/GH3_PC-Lars.png","textures/fretboard/GH_3/GH3_PC-Midori.png","textures/fretboard/GH_3/GH3_PC-Morello.png","textures/fretboard/GH_3/GH3_PC-Ripper.png","textures/fretboard/GH_3/GH3_PC-Rock_God.png","textures/fretboard/GH_3/GH3_PC-Satan.png","textures/fretboard/GH_3/GH3_PC-Slash.png","textures/fretboard/GH_3/GH3_PC-Xavier.png","textures/fretboard/GH_3/GH3_PS2-Robot.png"],i=Math.floor(Math.random()*n.length);this.setupFretboard(5,15,n[i],5),this.setupNoteManager(),this.setupAudioManager("songs/s1"),this.setupLightManager(this.gui),this.setupScoreManager(),this.cameraShake=new r1,this.setupInputManager(),this.isPaused=!1,this.createPauseOverlay()}createIntroOverlay(){this.introOverlay=document.createElement("div"),this.introOverlay.style.position="fixed",this.introOverlay.style.top=0,this.introOverlay.style.left=0,this.introOverlay.style.width="100%",this.introOverlay.style.height="100%",this.introOverlay.style.backgroundColor="rgba(0, 0, 0, 0.8)",this.introOverlay.style.color="white",this.introOverlay.style.display="flex",this.introOverlay.style.flexDirection="column",this.introOverlay.style.justifyContent="center",this.introOverlay.style.alignItems="center",this.introOverlay.style.fontSize="2em",this.introOverlay.style.zIndex="1000";const e=document.createElement("div");e.innerText=`How to Play: 
- Use keys A, S, D, F, G to play notes 
- Press J or K at the same time to strum them

Press any key to continue...`,e.style.textAlign="center",e.style.marginBottom="20px",this.introOverlay.appendChild(e),document.body.appendChild(this.introOverlay);const t=()=>{document.body.removeChild(this.introOverlay),window.removeEventListener("keydown",t),this.isPaused=!1,this.startGameLoop()};window.addEventListener("keydown",t)}setupFretboard(e,t,n,i){this.fretboard=new rl(e,t,n,i),this.fretboard.addToScene(this.scene)}setupInputManager(){this.inputManager=new nS(this)}setupScoreManager(){this.scoreManager=new tS(this.fretboard,this.scene)}setupBackgroundManager(e,t,n){this.backgroundManager=new s1(e,t,this.scene,this.camera,this.gui,n)}togglePause(){this.isPaused=!this.isPaused,this.isPaused?this.pauseGame():this.resumeGame()}pauseGame(){this.audioManager.pauseActiveSounds(),this.pauseOverlay.style.display="block"}resumeGame(){this.startGameLoop(),this.audioManager.resumeActiveSounds(),this.pauseOverlay.style.display="none"}createPauseOverlay(){this.pauseOverlay=document.createElement("div"),this.pauseOverlay.style.position="fixed",this.pauseOverlay.style.top=0,this.pauseOverlay.style.left=0,this.pauseOverlay.style.width="100%",this.pauseOverlay.style.height="100%",this.pauseOverlay.style.backgroundColor="rgba(0, 0, 0, 0.5)",this.pauseOverlay.style.color="white",this.pauseOverlay.style.display="flex",this.pauseOverlay.style.justifyContent="center",this.pauseOverlay.style.alignItems="center",this.pauseOverlay.style.fontSize="3em",this.pauseOverlay.style.display="none",document.body.appendChild(this.pauseOverlay)}setupNoteManager(){this.noteManager=new al(this.fretboard,this.audioManager),this.noteManager.addTicksToScene(this.scene),this.noteManager.addAllNotesToScene(this.scene)}setupAudioManager(e){const t={songStart:["effects/song_start_1.mp3","effects/song_start_2.mp3","effects/song_start_3.mp3"],crowdStart:["effects/crowd_256.mp3"],strumMiss:["effects/note_miss_1.mp3","effects/note_miss_2.mp3","effects/note_miss_3.mp3","effects/note_miss_4.mp3","effects/note_miss_5.mp3","effects/note_miss_6.mp3"]},n=e+"/full_song.mp3";this.audioManager=new i1(n,t,this.listener)}init(){this.cameraDirection=new L,this.scene=new zh;const e=document.querySelector("#three-canvas");this.camPositionSpan=document.querySelector("#position"),this.camLookAtSpan=document.querySelector("#lookingAt"),this.renderer=new Gp({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio>1?2:1),this.renderer.shadowMap.enabled=!0,document.body.appendChild(this.renderer.domElement),this.camera=new Nt(75,window.innerWidth/window.innerHeight,.1,50),this.defaultCameraPosition=new L(0,-9.9,5),this.camera.position.copy(this.defaultCameraPosition),this.scene.add(this.camera),this.listener=new Em,this.camera.add(this.listener),this.controls=new sS(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.clock=new lu}setupStats(){this.stats=new cS,this.stats.showPanel(0),document.getElementById("stats-container").appendChild(this.stats.dom)}setupGUI(){this.gui=new pu;const e=this.gui.addFolder("Camera");e.add(this.camera.position,"x",-100,100).name("X Position"),e.add(this.camera.position,"y",-100,100).name("Y Position"),e.add(this.camera.position,"z",-100,100).name("Z Position"),e.add(this.camera.rotation,"x",0,Math.PI).name("X Rotation"),e.close(),this.gui.close()}setupHelpers(){const e=new Im(5);this.scene.add(e);const t=new Pm(this.directionalLight,5);this.scene.add(t)}setupLightManager(){this.lightManager=new iS(this.gui),this.lightManager.addToScene(this.scene)}shakeCamera(){this.cameraShake.shake(this.camera,new L(.3,.1,.3),100)}updateStrumAnimation(e){const t=this.noteManager.getCurrentNotes();console.log(t);const n=new Set(this.noteManager.getCurrentNotesLaneIndices()),i=new Set(e),r=Yb(n,i);t.length>0&&r?this.noteManager.currentTick.handleHit(this.fretboard,this.scoreManager,this.audioManager,this.scene):(this.shakeCamera(),sl.handleMiss(this.scoreManager,this.audioManager,t),this.audioManager.playRandomSoundEffect("strumMiss"))}gameLoop(){if(this.isPaused)return;const e=this.clock.getDelta();this.fps=1/e,this.stats.begin();const t=this.inputManager.getPressedLanes();this.noteManager.update(this.scoreManager,this.audioManager,this.fps,this.scene),this.fretboard.update(t,e,this.noteManager.tickSpeed),this.cameraShake.update(this.camera),this.lightManager.update(this.scoreManager.starPower,e),this.controls.update(),this.renderer.render(this.scene,this.camera),this.stats.end(),requestAnimationFrame(this.gameLoop.bind(this))}startGame(){console.log(this.scene.background),this.renderer.render(this.scene,this.camera),this.isPaused=!0,window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.fretboard.fireEffects.forEach(e=>{e.material.setPerspective(this.camera.fov,window.innerHeight)}),this.isPaused&&this.renderer.render(this.scene,this.camera)}),this.createIntroOverlay()}test1(){const e=-(this.fretboard.fretboardHeight/2)+this.fretboard.pickupOffset,t=e+(this.fretboard.pickupHeight+this.fretboard.pickupOffset/2)/2,n=e-(this.fretboard.pickupHeight+this.fretboard.pickupOffset/2)/2,i=new L(-this.fretboard.fretboardWidth/2,t,0),r=new L(+this.fretboard.fretboardWidth/2,t,0),s=new Et({color:16711680}),o=[];o.push(i,r);const l=new qe().setFromPoints(o),c=new xn(l,s),h=new L(-this.fretboard.fretboardWidth/2,n,0),u=new L(+this.fretboard.fretboardWidth/2,n,0),d=new Et({color:16711680}),f=[];f.push(h,u);const p=new qe().setFromPoints(f),v=new xn(p,d),g=new L(-this.fretboard.fretboardWidth/2,e,0),m=new L(+this.fretboard.fretboardWidth/2,e,0),y=new Et({color:16711680}),_=[];_.push(g,m);const x=new qe().setFromPoints(_),C=new xn(x,y);this.scene.add(c,v,C)}test2(){const e=[];e.push(...this.noteManager.createNotes(0,3,!0,!1,!1,0,1,2,3,4)),e.forEach(t=>{t.addToScene(this.scene),t.mesh.visible=!0})}startGameLoop(){this.audioManager.startAudioSequence(al.introMeasures,this.noteManager.measureDuration),this.gameLoop()}}const SS=new bS;SS.startGame();
//# sourceMappingURL=index-Cd7BwnoW.js.map
