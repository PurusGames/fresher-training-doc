"use strict";(self.webpackChunkfresher_training_doc=self.webpackChunkfresher_training_doc||[]).push([[97],{7452:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=r(4848),s=r(8453);const a={},c="Tween",i={id:"Topics/tween",title:"Tween",description:'Tween (short for "in-between") refers to a technique used to create smooth transitions between values over time. It involves calculating intermediate values between a start and end point to animate properties such as position, size, color, or other attributes of objects.',source:"@site/docs/Topics/1.tween.md",sourceDirName:"Topics",slug:"/Topics/tween",permalink:"/fresher-training-doc/docs/Topics/tween",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Topics/1.tween.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vector",permalink:"/fresher-training-doc/docs/Topics/vector"}},o={},d=[{value:"Create a Tween",id:"create-a-tween",level:3},{value:"Easing",id:"easing",level:3},{value:"More configurations",id:"more-configurations",level:3},{value:"Tween Manager",id:"tween-manager",level:3},{value:"Events",id:"events",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tween",children:"Tween"})}),"\n",(0,t.jsxs)(n.p,{children:['Tween (short for "in-between") refers to a technique used to create smooth transitions between values over time. It involves calculating intermediate values between a start and end point to animate properties such as position, size, color, or other attributes of objects. ',(0,t.jsx)("br",{}),"\r\nBasically, tween is a way to change one or many number values over a specific duration of time."]}),"\n",(0,t.jsx)(n.h3,{id:"create-a-tween",children:"Create a Tween"}),"\n",(0,t.jsx)(n.p,{children:"First, we will need an object to use our tween."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// represents all game objects in the game\r\nclass GameObject {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n        this.color = "black";\r\n    }\r\n}\r\n\r\nclass Circle extends GameObject {\r\n    constructor() {\r\n        super();\r\n        this.radius = 100;\r\n    }\r\n\r\n    render(ctx) {\r\n        ctx.fillStyle = this.color;\r\n        ctx.beginPath();\r\n        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\r\n        ctx.stroke();\r\n    }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Let's create a ",(0,t.jsx)(n.code,{children:"Tween"})," class that receive a ",(0,t.jsx)(n.strong,{children:"source value"})," and interpolate it to a ",(0,t.jsx)(n.strong,{children:"target value"})," over a ",(0,t.jsx)(n.strong,{children:"duration"})," of time."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    constructor(source, target, duration) {\r\n        this.source = source;\r\n        this.target = target;\r\n        this.duration = duration;\r\n        this.elapsed = 0;\r\n    }\r\n\r\n    update(deltaTime) {\r\n        this.elapsed += deltaTime;\r\n        \r\n        // clamp the elapsed time to the duration\r\n        if (this.elapsed >= this.duration) {\r\n            this.elapsed = this.duration;\r\n        }\r\n        \r\n        // linear interpolation\r\n        return this.source + (this.target - this.source) * (this.elapsed / this.duration);\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now, we can use the ",(0,t.jsx)(n.code,{children:"Tween"})," class to animate the ",(0,t.jsx)(n.code,{children:"circle"})," position."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'// create the circle\r\nconst circle = new Circle();\r\ncircle.x = 100;\r\ncircle.y = 100;\r\ncircle.color = "#ff8080";\r\n\r\nconst tween = new Tween(circle.x, 500, 3); // move the circle to x = 500 in 3 seconds\r\n\r\nfunction update(dt) {\r\n    circle.x = tween.update(dt); // update the tween\r\n}\r\n\r\nfunction render() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas\r\n    circle.render(ctx); // render the circle\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(4349).A+"",width:"597",height:"243"})}),"\n",(0,t.jsxs)(n.p,{children:["This is the basic idea of a tween. We interpolate the ",(0,t.jsx)(n.code,{children:"x"})," value of the circle from ",(0,t.jsx)(n.code,{children:"100"})," to ",(0,t.jsx)(n.code,{children:"500"})," in ",(0,t.jsx)(n.code,{children:"3"})," seconds. The ",(0,t.jsx)(n.code,{children:"update"})," function will return the interpolated value, and we assign it to the ",(0,t.jsx)(n.code,{children:"x"})," property of the circle.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["Let's translate ",(0,t.jsx)(n.code,{children:"y"})," as well"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const tweenX = new Tween(circle.x, 500, 3); // move the circle to x = 500 in 3 seconds\r\nconst tweenY = new Tween(circle.y, 300, 3); // move the circle to y = 300 in 3 seconds\r\n\r\nfunction update(dt) {\r\n    circle.x = tweenX.update(dt);\r\n    circle.y = tweenY.update(dt);\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(4500).A+"",width:"600",height:"347"})}),"\n",(0,t.jsxs)(n.p,{children:["Now we have a problem. Anytime we want to animate a new property, we have to create a new ",(0,t.jsx)(n.code,{children:"Tween"})," object, update it and assign the value to the object property. This can be cumbersome if we have many properties to animate.",(0,t.jsx)("br",{}),"\r\nTo solve this, we can make our ",(0,t.jsx)(n.code,{children:"Tween"})," class receive an object as the ",(0,t.jsx)(n.strong,{children:"source"})," and another object as the ",(0,t.jsx)(n.strong,{children:"target"}),". And then update the corresponding properties."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'class Tween {\r\n    constructor(source, target, duration) {\r\n        if (typeof source !== "object" || typeof target !== "object") {\r\n            throw new Error("source and target must be objects");\r\n        }\r\n        \r\n        ...\r\n        // get the keys that need to be tweened\r\n        this.keys = Object.keys(this.target);\r\n        \r\n        // store the start values\r\n        this.start = {};\r\n        for (let key of this.keys) {\r\n            this.start[key] = this.source[key];\r\n        }\r\n    }\r\n\r\n    update(deltaTime) {\r\n        ...\r\n        // linear interpolation for all keys\r\n        for (let key of this.keys) {\r\n            if (!this.source.hasOwnProperty(key)) {\r\n                continue;\r\n            }\r\n            this.source[key] = this.start[key] + (this.target[key] - this.start[key]) * (this.elapsed / this.duration);\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// move the circle to x = 500 and y = 300 in 3 seconds\r\nconst tween = new Tween(circle, { x: 500, y: 300 }, 3);\r\nfunction update(dt) {\r\n    tween.update(dt);\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Because we are updating the object properties directly, we need a ",(0,t.jsx)(n.strong,{children:"start"})," object to store the initial values for interpolation.",(0,t.jsx)("br",{}),"\r\nNow we have a same animation for both ",(0,t.jsx)(n.code,{children:"x"})," and ",(0,t.jsx)(n.code,{children:"y"})," properties without creating a new ",(0,t.jsx)(n.code,{children:"Tween"})," for each one. Let's try to animate the ",(0,t.jsx)(n.code,{children:"radius"})," as well."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const tween = new Tween(circle, { x: 500, y: 300, radius: 200 }, 3);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(9057).A+"",width:"600",height:"440"})}),"\n",(0,t.jsx)(n.h3,{id:"easing",children:"Easing"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Tween"})," class we created uses a linear interpolation to animate the properties. This means the object will move at a constant speed from the start to the end. But in most cases, objects don\u2019t just start and stop instantly, and almost never move at a constant speed. When we open a drawer, we first move it quickly, and slow it down as it comes out. Drop something on the floor, and it will first accelerate downwards, and then bounce back up after hitting the floor.",(0,t.jsx)("br",{}),"\r\nEasing functions are mathematical functions that specify the rate of change of a parameter over time. They can be used to create effects like acceleration, deceleration, or bouncing.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    easeInSine(progress) {\r\n        return 1 - Math.cos((progress * Math.PI) / 2);\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.em,{children:"Sine In"})," easing function will receive a ",(0,t.jsx)(n.code,{children:"progress"})," value between ",(0,t.jsx)(n.code,{children:"0"})," and ",(0,t.jsx)(n.code,{children:"1"})," and return a new value between ",(0,t.jsx)(n.code,{children:"0"})," and ",(0,t.jsx)(n.code,{children:"1"}),". This value will be used to interpolate the properties."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"this.source[key] = this.start[key] + (this.target[key] - this.start[key]) * this.easeInSine(this.elapsed / this.duration);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(7665).A+"",width:"600",height:"536"})}),"\n",(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.code,{children:"Circle"})," object will move faster at the beginning and slow down as it reaches the target position. This is the ",(0,t.jsx)(n.em,{children:"Sine In"})," easing function. There are many more, ",(0,t.jsx)(n.a,{href:"https://easings.net/#",children:"easings.net"})," is a great resource to visualize and test different easing functions. Let's add them to our ",(0,t.jsx)(n.code,{children:"Tween"})," class as static functions to make them accessible from anywhere."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    static easeLinear(x) {\r\n        return x;\r\n    }\r\n\r\n    static easeInSine(x) {\r\n        return 1 - Math.cos((x * Math.PI) / 2);\r\n    }\r\n\r\n    static easeOutSine(x) {\r\n        return Math.sin((x * Math.PI) / 2);\r\n    }\r\n\r\n    static easeInOutSine(x) {\r\n        return -(Math.cos(Math.PI * x) - 1) / 2;\r\n    }\r\n\r\n    static easeInQuad(x) {\r\n        return x * x;\r\n    }\r\n\r\n    static easeOutQuad(x) {\r\n        return 1 - (1 - x) * (1 - x);\r\n    }\r\n\r\n    static easeInOutQuad(x) {\r\n        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;\r\n    }\r\n\r\n    static easeInCubic(x) {\r\n        return x * x * x;\r\n    }\r\n\r\n    static easeOutCubic(x) {\r\n        return 1 - Math.pow(1 - x, 3);\r\n    }\r\n\r\n    static easeInOutCubic(x) {\r\n        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;\r\n    }\r\n\r\n    static easeInQuart(x) {\r\n        return x * x * x * x;\r\n    }\r\n\r\n    static easeOutQuart(x) {\r\n        return 1 - Math.pow(1 - x, 4);\r\n    }\r\n\r\n    static easeInOutQuart(x) {\r\n        return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;\r\n    }\r\n\r\n    static easeInQuint(x) {\r\n        return x * x * x * x * x;\r\n    }\r\n\r\n    static easeOutQuint(x) {\r\n        return 1 - Math.pow(1 - x, 5);\r\n    }\r\n\r\n    static easeInOutQuint(x) {\r\n        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;\r\n    }\r\n\r\n    static easeInExpo(x) {\r\n        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);\r\n    }\r\n\r\n    static easeOutExpo(x) {\r\n        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);\r\n    }\r\n\r\n    static easeInOutExpo(x) {\r\n        return x === 0\r\n            ? 0\r\n            : x === 1\r\n                ? 1\r\n                : x < 0.5\r\n                    ? Math.pow(2, 20 * x - 10) / 2\r\n                    : (2 - Math.pow(2, -20 * x + 10)) / 2;\r\n    }\r\n\r\n    static easeInCirc(x) {\r\n        return 1 - Math.sqrt(1 - Math.pow(x, 2));\r\n    }\r\n\r\n    static easeOutCirc(x) {\r\n        return Math.sqrt(1 - Math.pow(x - 1, 2));\r\n    }\r\n\r\n    static easeInOutCirc(x) {\r\n        return x < 0.5\r\n            ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2\r\n            : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;\r\n    }\r\n\r\n    static easeInBack(x) {\r\n        const c1 = 1.70158;\r\n        const c3 = c1 + 1;\r\n        return c3 * x * x * x - c1 * x * x;\r\n    }\r\n\r\n    static easeOutBack(x) {\r\n        const c1 = 1.70158;\r\n        const c3 = c1 + 1;\r\n        return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);\r\n    }\r\n\r\n    static easeInOutBack(x) {\r\n        const c1 = 1.70158;\r\n        const c2 = c1 * 1.525;\r\n        return x < 0.5\r\n            ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2\r\n            : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;\r\n    }\r\n\r\n    static easeInElastic(x) {\r\n        const c4 = (2 * Math.PI) / 3;\r\n        return x === 0\r\n            ? 0\r\n            : x === 1\r\n                ? 1\r\n                : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);\r\n    }\r\n\r\n    static easeOutElastic(x) {\r\n        const c4 = (2 * Math.PI) / 3;\r\n        return x === 0\r\n            ? 0\r\n            : x === 1\r\n                ? 1\r\n                : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;\r\n    }\r\n\r\n    static easeInOutElastic(x) {\r\n        const c5 = (2 * Math.PI) / 4.5;\r\n        return x === 0\r\n            ? 0\r\n            : x === 1\r\n                ? 1\r\n                : x < 0.5\r\n                    ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2\r\n                    : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;\r\n    }\r\n\r\n    static easeInBounce(x) {\r\n        return 1 - Tween.easeOutBounce(1 - x);\r\n    }\r\n\r\n    static easeOutBounce(x) {\r\n        const n1 = 7.5625;\r\n        const d1 = 2.75;\r\n        if (x < 1 / d1) {\r\n            return n1 * x * x;\r\n        } else if (x < 2 / d1) {\r\n            return n1 * (x -= 1.5 / d1) * x + 0.75;\r\n        } else if (x < 2.5 / d1) {\r\n            return n1 * (x -= 2.25 / d1) * x + 0.9375;\r\n        } else {\r\n            return n1 * (x -= 2.625 / d1) * x + 0.984375;\r\n        }\r\n    }\r\n\r\n    static easeInOutBounce(x) {\r\n        return x < 0.5\r\n            ? (1 - Tween.easeOutBounce(1 - 2 * x)) / 2\r\n            : (1 + Tween.easeOutBounce(2 * x - 1)) / 2;\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now we change our ",(0,t.jsx)(n.code,{children:"Tween"})," class to receive an easing function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    constructor(source, target, duration, easing = Tween.easeLinear) {\r\n        ...\r\n        this.easing = easing;\r\n    }\r\n\r\n    update(deltaTime) {\r\n        ...\r\n        for (let key of this.keys) {\r\n            if (!this.source.hasOwnProperty(key)) {\r\n                continue;\r\n            }\r\n            this.source[key] = this.start[key] + (this.target[key] - this.start[key]) * this.easing(this.elapsed / this.duration);\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const tween = new Tween(circle, { x: 300, y: 300, radius: 200 }, 2, Tween.easeInOutBounce);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(746).A+"",width:"600",height:"412"})}),"\n",(0,t.jsx)(n.h3,{id:"more-configurations",children:"More configurations"}),"\n",(0,t.jsxs)(n.p,{children:["Our ",(0,t.jsx)(n.code,{children:"Tween"})," class is animating the properties of an object from a start value to an end value over a duration of time with an easing function. We can add more configurations to it, like ",(0,t.jsx)(n.strong,{children:"delay"}),", ",(0,t.jsx)(n.strong,{children:"repeat"}),", ",(0,t.jsx)(n.strong,{children:"yoyo"}),".",(0,t.jsx)("br",{}),"\r\nFirst, we need to change the ",(0,t.jsx)(n.code,{children:"Tween"})," class to receive a ",(0,t.jsx)(n.strong,{children:"config"})," object to store all these configurations instead of passing them as arguments to make the constructor more readable."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    constructor(source, target, config = {}) {\r\n        ...\r\n        this.duration = config.duration || 1;\r\n        this.easing = config.easing || Tween.easeLinear;\r\n        ...\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now we can add the ",(0,t.jsx)(n.strong,{children:"delay"})," configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    this.delay = config.delay || 0;\r\n    this.elapsed = -this.delay;\r\n    \r\n    update(deltaTime) {\r\n        this.elapsed += deltaTime;\r\n        \r\n        if (this.elapsed < 0) {\r\n            return;\r\n        }\r\n        \r\n        ...\r\n    }\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    const tween = new Tween(circle,\r\n    {\r\n        x: 300,\r\n        y: 300,\r\n        radius: 200\r\n    },\r\n    {\r\n        delay: 2,\r\n        duration: 2,\r\n        easing: Tween.easeInOutBounce\r\n    });\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(8528).A+"",width:"600",height:"448"})}),"\n",(0,t.jsxs)(n.p,{children:["Let add ",(0,t.jsx)(n.strong,{children:"repeat"})," to make the tween repeat a number of times and ",(0,t.jsx)(n.strong,{children:"yoyo"})," to make it go back and forth."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    this.repeat = config.repeat || 0;\r\n    this.yoyo = config.yoyo || false;\r\n    this.repeatCount = 0;\r\n    \r\n    update(deltaTime) {\r\n        this.elapsed += deltaTime;\r\n    \r\n        if (this.elapsed >= this.duration) {\r\n            // tween finished or repeated\r\n            if (this.repeatCount < this.repeat) {\r\n                this.onRepeat();\r\n                this.elapsed = -this.delay; // reset the elapsed time\r\n                this.repeatCount++;\r\n            }\r\n            else {\r\n                this.elapsed = this.duration;\r\n            }\r\n        }\r\n    \r\n        if (this.elapsed < 0) {\r\n            return;\r\n        }\r\n        \r\n        ...\r\n    }\r\n\r\n    onRepeat() {\r\n        if (this.yoyo) {\r\n            // swap start and target to create a yoyo effect\r\n            for (let key of this.keys) {\r\n                let temp = this.start[key];\r\n                this.start[key] = this.target[key];\r\n                this.target[key] = temp;\r\n            }\r\n        }\r\n        else {\r\n            // reset the properties\r\n            for (let key of this.keys) {\r\n                this.source[key] = this.start[key];\r\n            }\r\n        }\r\n    }\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    const tween = new Tween(circle,\r\n    {\r\n        x: 300,\r\n        y: 300,\r\n        radius: 200\r\n    },\r\n    {\r\n        delay: 1,\r\n        duration: 2,\r\n        easing: Tween.easeInOutBounce,\r\n        repeat: 2,\r\n        yoyo: true\r\n    });\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(962).A+"",width:"600",height:"534"})}),"\n",(0,t.jsxs)(n.p,{children:["We can set the ",(0,t.jsx)(n.code,{children:"repeat"})," to ",(0,t.jsx)(n.code,{children:"Infinity"})," to make the tween loop forever."]}),"\n",(0,t.jsx)(n.h3,{id:"tween-manager",children:"Tween Manager"}),"\n",(0,t.jsxs)(n.p,{children:["Let's create another object with another ",(0,t.jsx)(n.code,{children:"Tween"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const circle1 = new Circle();\r\ncircle1.x = 100;\r\ncircle1.y = 100;\r\ncircle1.color = "#ff8080";\r\n\r\nconst circle2 = new Circle();\r\ncircle2.x = 400;\r\ncircle2.y = 300;\r\ncircle2.color = "#0099b0";\r\n\r\nconst tweenCircle1 = new Tween(circle1, { x: 300, y: 300 }, { duration: 2 });\r\nconst tweenCircle2 = new Tween(circle2, { x: 200, y: 200 }, { duration: 2 });\r\n\r\nfunction update(dt) {\r\n    tweenCircle1.update(dt);\r\n    tweenCircle2.update(dt);\r\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(8956).A+"",width:"600",height:"403"})}),"\n",(0,t.jsxs)(n.p,{children:["Now image you have hundreds of objects and you want to animate them. You will have to create a ",(0,t.jsx)(n.code,{children:"Tween"})," for each object and update them in the ",(0,t.jsx)(n.code,{children:"update"})," loop. This can be cumbersome and error-prone.",(0,t.jsx)("br",{}),"\r\nTo solve this, we can create a ",(0,t.jsx)(n.code,{children:"TweenManager"})," class that will handle all the tweens for us. It will be a static class and can be accessed from anywhere in the game."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class TweenManager {\r\n    static tweens = [];\r\n\r\n    static create(source, target, config) {\r\n        const tween = new Tween(source, target, config);\r\n        this.tweens.push(tween);\r\n        return tween;\r\n    }\r\n\r\n    static update(dt) {\r\n        for (let tween of this.tweens) {\r\n            tween.update(dt);\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"TweenManager.create(circle1, { x: 300, y: 300 }, { duration: 2 });\r\nTweenManager.create(circle2, { x: 200, y: 200 }, { duration: 2 });\r\n\r\nfunction update(dt) {\r\n    TweenManager.update(dt);\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,t.jsxs)(n.p,{children:["We can add events to our ",(0,t.jsx)(n.code,{children:"Tween"})," class to notify when the tween starts, ends, repeats, etc. These events can be used to trigger other actions in the game, or to chain tweens together.",(0,t.jsx)("br",{}),"\r\nFirst, let's make our ",(0,t.jsx)(n.code,{children:"Tween"})," only update when it is active."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    constructor(source, target, config) {\r\n    ...\r\n        this.active = false;\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class TweenManager {\r\n    static update(dt) {\r\n        for (let tween of this.tweens) {\r\n            if (tween.active) {\r\n                tween.update(dt);\r\n            }\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then add a ",(0,t.jsx)(n.code,{children:"play"})," function to activate the ",(0,t.jsx)(n.code,{children:"Tween"})," and call the ",(0,t.jsx)(n.code,{children:"onStart"})," event."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    constructor(source, target, config) {\r\n        ...\r\n        this.onStartCallback = config.onStart || null;\r\n        ...\r\n    }\r\n    \r\n    start() {\r\n        this.active = true;\r\n        this.onStartCallback?.();\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    const tweenCircle2 = TweenManager.create(circle2, {x: 200, y: 200}, {duration: 2});\r\n    const tweenCircle1 = TweenManager.create(circle1,\r\n        {\r\n            x: 300,\r\n            y: 300\r\n        },\r\n        {\r\n            duration: 2,\r\n            onStart: () => {\r\n                tweenCircle2.play();\r\n            }\r\n        });\r\n    tweenCircle1.play();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now the ",(0,t.jsx)(n.code,{children:"tweenCircle2"})," will start when the ",(0,t.jsx)(n.code,{children:"tweenCircle1"})," starts. It has the same animation as before but that's the idea.",(0,t.jsx)("br",{}),"\r\nLet's add the ",(0,t.jsx)(n.strong,{children:"complete"})," event."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    constructor(source, target, config) {\r\n        ...\r\n        this.onCompleteCallback = config.onComplete || null;\r\n        ...\r\n    }\r\n\r\n    onComplete() {\r\n        this.active = false;\r\n        this.onCompleteCallback?.();\r\n    }\r\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"    const tweenCircle2 = TweenManager.create(circle2, {x: 200, y: 200}, { duration: 2 });\r\n    const tweenCircle1 = TweenManager.create(circle1,\r\n        {\r\n            x: 300,\r\n            y: 300\r\n        },\r\n        {\r\n            duration: 2,\r\n            onComplete: () => {\r\n                tweenCircle2.play();\r\n                TweenManager.create(circle1, { x: 350, y: 100 }, { duration: 2 }).play();\r\n            }\r\n        });\r\n    tweenCircle1.play();\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(8597).A+"",width:"600",height:"392"})}),"\n",(0,t.jsxs)(n.p,{children:["Now the ",(0,t.jsx)(n.code,{children:"tweenCircle2"})," will start and another tween created to move ",(0,t.jsx)(n.code,{children:"circle1"})," when the ",(0,t.jsx)(n.code,{children:"tweenCircle1"})," ends. This is called ",(0,t.jsx)(n.strong,{children:"chained tween"}),". Many animations will require a sequence of tweens to be played one after the other. Call the ",(0,t.jsx)(n.code,{children:"play"})," function of the next tween in the ",(0,t.jsx)(n.code,{children:"onComplete"})," event for a numberous of tweens is not a good idea. We should create a ",(0,t.jsx)(n.code,{children:"TweenSequence"})," class that managed by ",(0,t.jsx)(n.code,{children:"TweenManager"})," or just a ",(0,t.jsx)(n.code,{children:"chain"})," function for ",(0,t.jsx)(n.code,{children:"Tween"})," class. But that is another story, you can implement it yourself.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(n.p,{children:["Let's add the ",(0,t.jsx)(n.strong,{children:"update"})," and ",(0,t.jsx)(n.strong,{children:"repeat"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class Tween {\r\n    constructor(source, target, config) {\r\n        ...\r\n        this.onUpdateCallback = config.onUpdate;\r\n        this.onRepeatCallback = config.onRepeat;\r\n    }\r\n\r\n    update(deltaTime) {\r\n        ...\r\n        this.onUpdateCallback?.();\r\n    }\r\n    \r\n    onRepeat() {\r\n        ...\r\n        this.onRepeatCallback?.();\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Tween"})," class is now complete. You can implement more configurations, events and functions to make it more powerful and flexible.",(0,t.jsx)("br",{}),"\r\nThe animations in this article are simple and boring. Try make something more interesting and creative.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const circle = new Circle();\r\n    circle.x = 100;\r\n    circle.y = 100;\r\n    circle.radius = 20;\r\n    circle.color = "#ff8080";\r\n\r\n    TweenManager.create(circle, {x: 700}, {\r\n        duration: 1,\r\n        repeat: Infinity,\r\n        yoyo: true,\r\n        easing: Tween.easeInOutCubic\r\n    }).play();\r\n\r\n    TweenManager.create(circle, {y: 500}, {\r\n        duration: 5,\r\n        repeat: Infinity,\r\n        yoyo: true,\r\n        easing: Tween.easeInOutBounce\r\n    }).play();\r\n\r\n    TweenManager.create(circle, {radius: 50}, {\r\n        duration: 0.25,\r\n        repeat: Infinity,\r\n        yoyo: true,\r\n        easing: Tween.easeInOutCubic\r\n    }).play();\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(7978).A+"",width:"600",height:"553"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8597:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-chained-c3abeb4b71ca4ebc88450966d1901a4a.gif"},8528:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-delay-34b328e675acc13dc1b02985ea13f712.gif"},7978:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-end-8e4a705128c1f7c9a730a52d2cd4200f.gif"},746:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-inoutbounce-9578ae464e5ae20c48762ad831a011c5.gif"},7665:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-insine-32489d23616699440ad1ec272bb07d1f.gif"},8956:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-manager-e829d078a6af1fd4ed2ff0aa3f70d1bb.gif"},9057:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-radius-51ffce35008d97a5ac14b60b2228b3d0.gif"},962:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-repeat-cb2e6fb58088e082504159d9c9c1b119.gif"},4349:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-x-a55f21562efd289adb922e49ba4d47d3.gif"},4500:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/tween-y-f8ced5ddbd2f87148455b3a5e52874ad.gif"},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(6540);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);