"use strict";(self.webpackChunkfresher_training_doc=self.webpackChunkfresher_training_doc||[]).push([[777],{2878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=n(4848),o=n(8453);const i={},s="Canvas animation",r={id:"2D Context/canvas-animation",title:"Canvas animation",description:"Create an animation on the HTML5 canvas and make it run smooth, no matter the frame rate. Learn how to apply time and easing functions. By the end of this tutorial, you can create a basic animation with the use JavaScript.",source:"@site/docs/2D Context/4.canvas-animation.md",sourceDirName:"2D Context",slug:"/2D Context/canvas-animation",permalink:"/fresher-training-doc/docs/2D Context/canvas-animation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2D Context/4.canvas-animation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Game Loop",permalink:"/fresher-training-doc/docs/2D Context/game-loop"},next:{title:"Collision detection and physics",permalink:"/fresher-training-doc/docs/2D Context/physics"}},c={},h=[{value:"Creating web animations",id:"creating-web-animations",level:3},{value:"Draw objects dynamically on the canvas",id:"draw-objects-dynamically-on-the-canvas",level:3},{value:"When to update the position of your game objects?",id:"when-to-update-the-position-of-your-game-objects",level:3},{value:"A blur of repeated graphics",id:"a-blur-of-repeated-graphics",level:3},{value:"How does the canvas work?",id:"how-does-the-canvas-work",level:3},{value:"Clear the canvas before drawing",id:"clear-the-canvas-before-drawing",level:3},{value:"Effects of dynamic frame rate on the animation",id:"effects-of-dynamic-frame-rate-on-the-animation",level:3},{value:"Handle dynamic frame rates",id:"handle-dynamic-frame-rates",level:3},{value:"Move relative to time",id:"move-relative-to-time",level:3},{value:"Limit the time skip",id:"limit-the-time-skip",level:3},{value:"Easing the motion of an animation",id:"easing-the-motion-of-an-animation",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"canvas-animation",children:"Canvas animation"})}),"\n",(0,a.jsx)(t.p,{children:"Create an animation on the HTML5 canvas and make it run smooth, no matter the frame rate. Learn how to apply time and easing functions. By the end of this tutorial, you can create a basic animation with the use JavaScript."}),"\n",(0,a.jsx)(t.h3,{id:"creating-web-animations",children:"Creating web animations"}),"\n",(0,a.jsxs)(t.p,{children:["The basics of creating an animation you'll learn here in this tutorial are a key component for creating games, but you can also apply the same principles to create ",(0,a.jsx)(t.strong,{children:"web animations"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Back in the days, people used to create web animations using ",(0,a.jsx)(t.strong,{children:"Adobe Flash"}),". They were very commonly used for banner ads. ",(0,a.jsx)(t.a,{href:"https://fileinfo.com/extension/swf",children:"SWF"})," files would run inside the browser, using the ",(0,a.jsx)(t.a,{href:"https://www.adobe.com/products/flashplayer/end-of-life-alternative.html",children:"Flash Player plugin"}),". For more decorative purposes, **GIFs ** were used. You can read more on the use and ",(0,a.jsx)(t.a,{href:"https://www.toptal.com/designers/web/animating-the-web-in-the-post-flash-era",children:"history of web animations"})," here."]}),"\n",(0,a.jsxs)(t.p,{children:["Now, with the ending Flash Player support by browsers, ",(0,a.jsx)(t.strong,{children:"HTML5 canvas and CSS animations"})," have taken over. CSS or JavaScript can be used to make simple animations by manipulating HTML elements. For more complex animations, or games, you can use the canvas techniques explained in this tutorial."]}),"\n",(0,a.jsx)(t.p,{children:"Now, let's continue and learn how to create your first canvas animation."}),"\n",(0,a.jsx)(t.h3,{id:"draw-objects-dynamically-on-the-canvas",children:"Draw objects dynamically on the canvas"}),"\n",(0,a.jsxs)(t.p,{children:["In the previous tutorial you've learned how to draw repeatedly on the canvas. But the used ",(0,a.jsx)(t.code,{children:"draw()"})," function is very static. It only draws one rectangle at the same position, over and over again. Let's make things a bit more interesting. Change the old ",(0,a.jsx)(t.code,{children:"draw()"})," function to this new one:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"function draw() {\r\n    context.fillStyle = '#ff8080';\r\n    context.fillRect(rectX, rectY, 150, 100);\r\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["As you can see, the draw operation ",(0,a.jsx)(t.code,{children:"fillRect()"})," is now using variable arguments as input. If you change the values of ",(0,a.jsx)(t.code,{children:"rectX"})," and ",(0,a.jsx)(t.code,{children:"rectY"}),", you should get a moving rectangle."]}),"\n",(0,a.jsx)(t.p,{children:"Let's mix this up with the game loop. With the following code you can update the position of the rectangle:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"let rectX = 0;\r\nlet rectY = 0;\r\n\r\nfunction gameLoop(timeStamp) {\r\n    // Update game objects in the loop\r\n    update();\r\n    draw();\r\n\r\n    window.requestAnimationFrame(gameLoop);\r\n}\r\n\r\nfunction update() {\r\n    rectX += 1;\r\n    rectY += 1;\r\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"when-to-update-the-position-of-your-game-objects",children:"When to update the position of your game objects?"}),"\n",(0,a.jsxs)(t.p,{children:["A simple ",(0,a.jsx)(t.code,{children:"update()"})," function slightly changes the coordinates of the rectangle. Every frame the ",(0,a.jsx)(t.code,{children:"update()"})," function is called in the ",(0,a.jsx)(t.code,{children:"gameLoop()"})," and this will make the rectangle move. It is important to perform the ",(0,a.jsx)(t.code,{children:"update()"})," before the ",(0,a.jsx)(t.code,{children:"draw()"}),", so that you'll always draw the latest state of your game to the canvas."]}),"\n",(0,a.jsx)(t.p,{children:"Remember this when you start to add other tasks to your game loop. Always update the state of your game objects first and, as a final action, draw everything to the screen. For now, your game loop looks like this:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Loop",src:n(3399).A+"",width:"1032",height:"326"})}),"\n",(0,a.jsx)(t.h3,{id:"a-blur-of-repeated-graphics",children:"A blur of repeated graphics"}),"\n",(0,a.jsx)(t.p,{children:"When executing the code, you should expect to see the rectangle move in a slanted line, from the upper left corner to the lower right. Here is what you get:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Rectangle",src:n(7133).A+"",width:"300",height:"266"})}),"\n",(0,a.jsx)(t.p,{children:"What is happening here? It looks like an endless repetition of rectangles, creating a big blur. The rectangle is drawn on the canvas, but the previous rectangle is never removed. Why is that?"}),"\n",(0,a.jsx)(t.h3,{id:"how-does-the-canvas-work",children:"How does the canvas work?"}),"\n",(0,a.jsxs)(t.p,{children:["Well, the canvas acts as a drawing board. You can draw on it, change position of the rectangle, and draw it again. Do this quickly enough and you will get the ",(0,a.jsx)(t.a,{href:"https://psychology.wikia.org/wiki/Motion_perception",children:"perception of motion"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["But when you forget to ",(0,a.jsx)(t.strong,{children:"clear"})," the canvas, you will draw each drawing on top of the previous. Creating a blur of drawings, like in the example above."]}),"\n",(0,a.jsx)(t.p,{children:"You can make use of this effect to create some interesting graphics, but that's not what you need right now. You want to animate the rectangle and not create a blur."}),"\n",(0,a.jsx)(t.h3,{id:"clear-the-canvas-before-drawing",children:"Clear the canvas before drawing"}),"\n",(0,a.jsx)(t.p,{children:"To solve this problem, you'll have to clear the canvas before every new drawing operation. So, every time you draw, you start with a clean slate. This will prevent the blur effect."}),"\n",(0,a.jsxs)(t.p,{children:["Add ",(0,a.jsx)(t.code,{children:"clearRect()"})," to the ",(0,a.jsx)(t.code,{children:"draw()"})," function to always clear the canvas before drawing:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"function draw() {\r\n    // Clear the entire canvas\r\n    context.clearRect(0, 0, canvas.width, canvas.height);\r\n\r\n    context.fillStyle = '#ff8080';\r\n    context.fillRect(rectX, rectY, 150, 100);\r\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"clearRect()"})," function clears a part of the canvas. In this case, it is set to clear an area covering the entire canvas. Starting from the upper left corner at ",(0,a.jsx)(t.code,{children:"0,0"})," , continuing for ",(0,a.jsx)(t.code,{children:"canvas.width"})," and ",(0,a.jsx)(t.code,{children:"canvas.height"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"With this new clear method in place, your game loop looks like this:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Loop",src:n(1482).A+"",width:"1397",height:"331"})}),"\n",(0,a.jsx)(t.p,{children:"When you run the new code, the rectangle is animated correctly. See the example below:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Loop",src:n(8140).A+"",width:"370",height:"330"})}),"\n",(0,a.jsx)(t.h3,{id:"effects-of-dynamic-frame-rate-on-the-animation",children:"Effects of dynamic frame rate on the animation"}),"\n",(0,a.jsx)(t.p,{children:"Right now, the animation is really simple and runs smooth on about every device. But what if the animation was a lot more complex, like when running a game with many different animated objects?"}),"\n",(0,a.jsxs)(t.p,{children:["Your computer or mobile device might not be able to keep up and ",(0,a.jsx)(t.strong,{children:"delays"})," some frames. Later, when there is less stress on the system, it might ",(0,a.jsx)(t.strong,{children:"speed up"})," again. The motion of your animation will be held back or speed up too and you don't want that to happen. You want to move you objects with a ",(0,a.jsx)(t.strong,{children:"constant speed"}),", no matter the frame rate, so your animation will always ",(0,a.jsx)(t.strong,{children:"look the same"})," on any kind of hardware or device."]}),"\n",(0,a.jsxs)(t.p,{children:["When running older games, you can see this kind of effects very clearly. These ",(0,a.jsx)(t.a,{href:"https://www.howtogeek.com/171945/why-do-old-game-run-way-too-fast-on-modern-computers/",children:"games do not compensate for different frame rates"})," and were designed for old hardware with a slow ",(0,a.jsx)(t.a,{href:"https://www.tomshardware.com/news/clock-speed-definition,37657.html",children:"clock speed"}),". When you run a game like that with modern hardware, it will run super-fast and reach a very high frame rate. Every motion is now performed with lightning speed. When you press an arrow key to move, you'll end up at the end of the screen in a flash."]}),"\n",(0,a.jsx)(t.p,{children:"The movement speed of objects doesn't seem to take the frame rate into account. But how can you fix this for your own animation or game?"}),"\n",(0,a.jsx)(t.h3,{id:"handle-dynamic-frame-rates",children:"Handle dynamic frame rates"}),"\n",(0,a.jsxs)(t.p,{children:["To compensate for the effects of a dynamic frame rate, you'll want to include ",(0,a.jsx)(t.strong,{children:"time"})," as a factor in your animation. This way, it's no longer the frame rate (and hardware) that decides the speed of your game, but it's time. See the following code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"let secondsPassed = 0; // aka delta time\r\nlet oldTimeStamp = 0;\r\nlet movingSpeed = 50;\r\n\r\nfunction gameLoop(timeStamp) {\r\n    // Calculate how much time has passed\r\n    secondsPassed = (timeStamp - oldTimeStamp) / 1000;\r\n    oldTimeStamp = timeStamp;\r\n\r\n    // Pass the time to the update\r\n    update(secondsPassed);\r\n    draw();\r\n\r\n    window.requestAnimationFrame(gameLoop);\r\n}\r\n\r\nfunction update(secondsPassed) {\r\n    // Use time to calculate new position\r\n    rectX += (movingSpeed * secondsPassed);\r\n    rectY += (movingSpeed * secondsPassed);\r\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["At the start of the ",(0,a.jsx)(t.code,{children:"gameLoop()"})," the number of passed seconds gets calculated. This value is passed to the update() function. There it is used to calculate the new position of the rectangle. Using time as a factor."]}),"\n",(0,a.jsx)(t.h3,{id:"move-relative-to-time",children:"Move relative to time"}),"\n",(0,a.jsxs)(t.p,{children:["Let's explain this some more. When your game runs at 60fps, that's roughly 0.0167 seconds per frame. This means that when you want to move an object with 50 pixels per second, you have to multiply 50 by the number of seconds that have passed since the last frame. A game running at 60 fps will move the object 0.835 pixels per frame. That's what's happening in the ",(0,a.jsx)(t.code,{children:"update()"})," function."]}),"\n",(0,a.jsx)(t.p,{children:"When the frame rate increases or decreases, the movement speed will too. No matter how much time has passed, your objects will always move at the desired speed. This makes the animation more suitable for different kinds of hardware, with different frame rates. Of course, a lower frame rate will make the animation look choppy, but the displacement of the objects stays the same."}),"\n",(0,a.jsx)(t.h3,{id:"limit-the-time-skip",children:"Limit the time skip"}),"\n",(0,a.jsx)(t.p,{children:"In some special cases, the movement correction to make objects always move at the same speed becomes so large, it will eventually break your game. Imagine hardware that is infinitely slow, your movement speed will be huge to make up for the gap in time between your previous and current frame. Your objects would have to move with such a big step each frame that game logic becomes unstable."}),"\n",(0,a.jsx)(t.p,{children:"You can easily replicate this behaviour by running your game in a browser tab and switching to another random tab. The moment you switch back to your first tab, the time between the last two frames is huge."}),"\n",(0,a.jsx)(t.p,{children:"To fix this, you'll need to limit the time factor to a maximum amount for each frame. By adding the next code to you game loop, your game will never move ahead more than 0.1 second in (game) time. For a game that would normally run at 60fps, this would still mean you've squeezed 6 frames into 1. You can play with this number to make it fit your game."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// Move forward in time with a maximum amount\r\nsecondsPassed = Math.min(secondsPassed, 0.1);\n"})}),"\n",(0,a.jsx)(t.h3,{id:"easing-the-motion-of-an-animation",children:"Easing the motion of an animation"}),"\n",(0,a.jsxs)(t.p,{children:["Now that you can use time as a factor, you can do some fun things with your animation. Remember the ",(0,a.jsx)(t.code,{children:"update()"})," function where you update the position of your game object? Well, you can make that a bit more interesting by applying an ease to the animation. Checkout ",(0,a.jsx)(t.a,{href:"https://easings.net/",children:"https://easings.net/"})," for easing functions."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"let timePassed = 0;\r\n\r\nfunction update(secondsPassed) {\r\n\r\n    timePassed += secondsPassed\r\n\r\n    // Use different easing functions for different effects.\r\n    rectX = easeInOutQuint(timePassed, 50, 500, 1.5);\r\n    rectY = easeLinear(timePassed, 50, 250, 1.5);\r\n}\r\n\r\n// Example easing functions\r\nfunction easeInOutQuint (t, b, c, d) {\r\n    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;\r\n    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;\r\n}\r\n\r\nfunction easeLinear (t, b, c, d) {\r\n    return c * t / d + b;\r\n}\r\n\n"})}),"\n",(0,a.jsx)(t.p,{children:"This simple example uses a quintic ease and applies it to the x-position. The y-position is updated in a linear fashion. Here is the result:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Easing",src:n(2973).A+"",width:"600",height:"337"})}),"\n",(0,a.jsx)(t.p,{children:"The easing functions might look difficult to understand, but the good news is you don't really have to. As long as you know what arguments to pass, you can use them. Here is a simple explanation of the arguments:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["t = ",(0,a.jsx)(t.strong,{children:"Time"})," - Amount of time that has passed since the beginning of the animation. Usually starts at 0 and is slowly increased using a game loop or other update function."]}),"\n",(0,a.jsxs)(t.li,{children:["b = ",(0,a.jsx)(t.strong,{children:"Beginning value"})," - The starting point of the animation. Usually it's a static value, you can start at 0 for example."]}),"\n",(0,a.jsxs)(t.li,{children:["c = ",(0,a.jsx)(t.strong,{children:"Change in value"})," - The amount of change needed to go from starting point to end point. It's also usually a static value."]}),"\n",(0,a.jsxs)(t.li,{children:["d = ",(0,a.jsx)(t.strong,{children:"Duration"})," - Amount of time the animation will take. Usually a static value as well."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Try out different easing functions and change the arguments to see what happens. You can create some really cool effects with just a few lines of code."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},2973:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/canvas-animation-easing-fcb3d5f034beb903b26d6c43d4080c89.gif"},1482:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/canvas-animation-loop-2-9061b1b5cb27a58e060f31dad1cd0635.png"},3399:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/canvas-animation-loop-5b416069e5ba7a92188b61f4d3e1cc26.png"},8140:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/canvas-animation-rectangle-2-477465cf3c25d8f12f48a1475e3b5db4.gif"},7133:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/canvas-animation-rectangle-181a6071e948b32cfe594516db626364.gif"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(6540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);