# WebGL Tutorial

## Introduction

### What is this tutorial about?

Learn the fundamental knowledge about WebGL.

### What is WebGL?

WebGL (Web Graphics Library) is a JavaScript API that enables the rendering of 2D and 3D graphics directly within web browsers, without the need for additional plugins. Developed by the Khronos Group, WebGL leverages the capabilities of a device's GPU (Graphics Processing Unit) to deliver smooth, hardware-accelerated graphics. 

### Why not just use the canvas 2d context?

Choosing WebGL over the Canvas 2D context depends on the specific needs of your project, particularly in terms of performance, visual complexity, and flexibility. Here are some key reasons:

* **3D Rendering:** WebGL is designed for both 2D and 3D graphics. The Canvas 2D context is limited to 2D graphics, making it unsuitable for 3D applications.
* **Advanced Effects:** WebGL supports advanced graphical effects such as dynamic lighting, shadows, reflections, and shaders, which are not possible with the 2D context. This is essential for creating visually rich and immersive experiences.
* **GPU Utilization:** WebGL leverages the power of the GPU for rendering, offering significant performance advantages, especially for graphics-intensive applications. This enables smoother animations, higher frame rates, and the ability to handle more complex scenes. Canvas 2D context relies on the CPU, which is better suited for simpler 2D graphics and animations but can become a bottleneck for more complex tasks, potentially leading to slower performance.
* **Shader Programming:** WebGL allows developers to write custom shaders, which are programs that run on the GPU to control how vertices and pixels are processed. This provides granular control over rendering, enabling unique visual effects and optimizations.
* **Growing Adoption:** As web technologies continue to evolve, WebGL is increasingly becoming the standard for web-based graphics, particularly in areas like gaming, simulations, and data visualization. Adopting WebGL prepares your projects for future advancements and integrations with other modern web technologies.

### What to expect from this tutorial series?

The series will take you through the following steps:
1. [WebGL fundamentals](./webgl-funamentals.md)
2. [WebHL how it works](./webgl-how-it-works.md)
3. [WebGL image processing](./webgl-image-processing.md)
