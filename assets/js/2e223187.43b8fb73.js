"use strict";(self.webpackChunkfresher_training_doc=self.webpackChunkfresher_training_doc||[]).push([[859],{8933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(4848),s=n(8453);const a={},o="Event emitter",i={id:"Topics/event",title:"Event emitter",description:"Event emitter is a design pattern commonly used in software development to manage communication between different components or objects. In essence, it allows one part of a system to emit events, and other parts to listen for and respond to those events. This pattern decouples the emitter from the listener, making the code more modular, flexible, and scalable.",source:"@site/docs/Topics/3.event.md",sourceDirName:"Topics",slug:"/Topics/event",permalink:"/fresher-training-doc/docs/Topics/event",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Topics/3.event.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Object pool",permalink:"/fresher-training-doc/docs/Topics/pool"},next:{title:"Singleton",permalink:"/fresher-training-doc/docs/Topics/singleton"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"event-emitter",children:"Event emitter"})}),"\n",(0,r.jsx)(t.p,{children:"Event emitter is a design pattern commonly used in software development to manage communication between different components or objects. In essence, it allows one part of a system to emit events, and other parts to listen for and respond to those events. This pattern decouples the emitter from the listener, making the code more modular, flexible, and scalable."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'class EventEmitter {\r\n    constructor() {\r\n        this.events = {};\r\n    }\r\n\r\n    on(event, listener) {\r\n        if (!this.events[event]) {\r\n            this.events[event] = [];\r\n        }\r\n        this.events[event].push(listener);\r\n    }\r\n\r\n    off(event, listener) {\r\n        if (this.events[event]) {\r\n            this.events[event] = this.events[event].filter(l => l !== listener);\r\n        }\r\n    }\r\n\r\n    emit(event, ...args) {\r\n        if (this.events[event]) {\r\n            this.events[event].forEach(listener => listener(...args));\r\n        }\r\n    }\r\n}\r\n\r\nclass Player extends EventEmitter {\r\n    constructor() {\r\n        super();\r\n        this.health = 100;\r\n        this.damage = 10;\r\n    }\r\n\r\n    attack(target) {\r\n        this.emit("attack", this, target);\r\n    }\r\n\r\n    takeDamage(damage) {\r\n        this.health -= damage;\r\n        this.emit("damaged", this, damage);\r\n        if (this.health <= 0) {\r\n            this.emit("death", this);\r\n        }\r\n    }\r\n}\r\n\r\nconst player = new Player();\r\nplayer.on("attack", (attacker, target) => {\r\n    // player attack target, play some sound effects\r\n});\r\nplayer.on("damaged", (player, damage) => {\r\n    // player take damage, show damage text and shake the screen\r\n});\r\nplayer.on("death", (player) => {\r\n    // player is dead, show lose screen\r\n});\n'})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);