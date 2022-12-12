import React from "react";
import "./bubbles.css";
import Sketch from "react-p5";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import { useEffect } from 'react';

const Bubbles = ({ font, words }) => {
  const Engine = Matter.Engine,
        Events = Matter.Events,
        Runner = Matter.Runner,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Mouse = Matter.Mouse,
        MouseConstraint = Matter.MouseConstraint;
  let engine;
  let attractiveBody, circleBodies, mouseConstraint;

  function setup(p5, canvasParentRef) {
    const canvas = p5.createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight);
    canvas.parent(canvasParentRef);
    canvas.style('display', 'block');

    engine = Engine.create();
    Matter.use(MatterAttractors);
    engine.gravity.scale = 0;

    attractiveBody = Bodies.circle(p5.width/2, p5.height/2, 0, {
      isStatic: true,
      plugin: {
        attractors: [
          function(bodyA, bodyB) {
            return {
              x: (bodyA.position.x - bodyB.position.x) * 1e-4,
              y: (bodyA.position.y - bodyB.position.y) * 1e-4,
            };
          }
        ]
      }
    });
    World.add(engine.world, attractiveBody);
    circleBodies = [];
    for (let i = 0; i < words.length; i++) {
      circleBodies.push(Bodies.circle(Math.floor(Math.random()*p5.width), Math.floor(Math.random()*p5.height), 100));
    }
    World.add(engine.world, circleBodies);

    const mouse = Mouse.create(canvasParentRef);
    mouse.pexelRatio = p5.pixelDensity();
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        damping: 1,
        stiffness: 0.1
      }
    });
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener('touchmove', mouseConstraint.mouse.mousemove);
    mouseConstraint.mouse.element.removeEventListener('touchstart', mouseConstraint.mouse.mousedown);
    mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup);
    World.add(engine.world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Events.on(engine, "afterUpdate", function() {
      Body.setPosition(attractiveBody, {
        x: canvasParentRef.clientWidth/2,
        y: canvasParentRef.clientHeight/2
      });
    });
  }

  function draw(p5) {
    p5.background(0);
    for (let i = 0; i < circleBodies.length; i++) {
      p5.fill('rgba(0,0,0,0)');
      p5.stroke(255);
      p5.circle(circleBodies[i].position.x, circleBodies[i].position.y, circleBodies[i].circleRadius*2);
      p5.textSize(32);
      p5.fill(255);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.textFont(font);
      p5.text(words[i], circleBodies[i].position.x, circleBodies[i].position.y);
    }
  }

  let canvasParentRef;
  useEffect(() => {
    canvasParentRef = document.getElementsByClassName("Sketch")[0];
  })

  function windowResized(p5) {
    p5.resizeCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight);
  }

  function touchStarted(p5) {
    for (let i = 0; i < circleBodies.length; i++) {
      let distance = p5.dist(p5.mouseX, p5.mouseY, circleBodies[i].position.x, circleBodies[i].position.y);
      if (distance <= circleBodies[i].circleRadius) {
        mouseConstraint.mouse.element.addEventListener('touchmove', mouseConstraint.mouse.mousemove);
        mouseConstraint.mouse.element.addEventListener('touchstart', mouseConstraint.mouse.mousedown);
        mouseConstraint.mouse.element.addEventListener('touchend', mouseConstraint.mouse.mouseup);
      }
    }
  }

  function touchEnded() {
    for (let i = 0; i < circleBodies.length; i++) {
      mouseConstraint.mouse.element.removeEventListener('touchmove', mouseConstraint.mouse.mousemove);
      mouseConstraint.mouse.element.removeEventListener('touchstart', mouseConstraint.mouse.mousedown);
      mouseConstraint.mouse.element.removeEventListener('touchend', mouseConstraint.mouse.mouseup);
    }
  }

  return (
    <div className="Bubbles">
      <Sketch className="Sketch" setup={setup} draw={draw} windowResized={windowResized} touchStarted={touchStarted} touchEnded={touchEnded} />
    </div>
  );
}

export default Bubbles;