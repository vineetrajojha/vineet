"use client"
import React, { useState, useEffect } from "react";
import "./page.css";

export default function Home() {
  return (
    
      <main className="main-container">
        <div className="text-content">
          <h1><b>Vineet Raj</b></h1>
          <div className="body-text">
            i am a <a href="#">web developer</a>, currently working on some <a href="#">ml projects.</a> i barely <a href="twitter.com/vineetcres" target="_blank">tweet</a> but it&apos;s there if you&apos;re curious, you can also check out <a href="#">blogs</a>.<br/><br/> connect with me on <a href="https://linkedin.com/in/vineetcres" target="_blank">linkedin</a>, <a href="https://twitter.com/vineetcres" target="_blank">twitter</a>, or drop me an <a href="mailto:vineetraj.career@gmail.com" target="_blank" rel="noopener noreferrer">email</a>. 
            find my resume <a href="#">here</a>.
          </div>
        </div>
      </main>
  );
}
