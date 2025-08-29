import React from "react";
import FeatureShowcase from "./FeatureShowcase";
import "./index.css";

export default function App() {
  return (
    <div>
      <header style={{padding:20, textAlign:"center", background:"#0f172a", color:"white"}}>
        <h1 style={{margin:0}}>Preva — Feature Showcase Task</h1>
      </header>

      <main>
        <section style={{height:"70vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <div style={{maxWidth:800, textAlign:"center"}}>
            <h2>Implementing the Feature Showcase</h2>
            <p style={{color:"#374151"}}>Scroll down to see the sticky showcase. Click dots or arrows to change features.</p>
          </div>
        </section>

        <FeatureShowcase />

        <section style={{height:"80vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <div style={{maxWidth:800, textAlign:"center"}}>
            <h2>After the showcase</h2>
            <p style={{color:"#374151"}}>Normal page flow continues after the last feature.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
