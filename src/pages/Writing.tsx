import React from "react";

const BONEMILK_DIGITAL = "https://bone-milk.com/products/bonemilk-ii";
const BONEMILK_PRINT = "";
const NEW_WORDS_DIGITAL = "";
const NEW_WORDS_PRINT = "";
const FERAL_DIGITAL = "";
const FERAL_PRINT = "";
const MISERY_TOURISM_DIGITAL = "";

export function Writing() {
  return (
    <div className="text-container">
      <p>
        If you want to read anything behind a paywall, or you like what you see
        and want to read some unpublished faves, just{" "}
        <a href="/contact">reach out.</a>
      </p>
      <div className="text-section">
        <p className="header">Fiction</p>
        <div className="text-item">
          <p>Milkmen</p>
          <p>2021</p>
          <p>B O N E M I L K II</p>
          <p>
            Available in <a href={BONEMILK_PRINT}>print</a> and{" "}
            <a href={BONEMILK_DIGITAL}>digital</a>
          </p>
        </div>
      </div>
      <div className="text-section">
        <p className="header">Poetry</p>
        <div className="text-item">
          <p>deus opening / after wires</p>
          <p>2021</p>
          <p>new words {"{press}"} issue 1</p>
          <p>
            Available in <a href={NEW_WORDS_PRINT}>print</a> and{" "}
            <a href={NEW_WORDS_DIGITAL}>digital</a>
          </p>
        </div>
        <div className="text-item">
          <p>She, Starlight Spirit / ☆ / ☾ / Meditation I</p>
          <p>2021</p>
          <p>FERAL Journal Issue 9</p>
          <p>
            Available in <a href={BONEMILK_PRINT}>print</a> and{" "}
            <a href={BONEMILK_DIGITAL}>digital</a>
          </p>
        </div>
        <div className="text-item">
          <p>from form</p>
          <p>2017</p>
          <p>
            <a href={MISERY_TOURISM_DIGITAL}>misery tourism</a>
          </p>
        </div>
      </div>
    </div>
  );
}
