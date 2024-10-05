/**
 * @jest-environment node
 */

const fs = require('fs');
const path = require("path");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM(fs.readFileSync(path.resolve(__dirname, "../index.html"), 'utf8'));
const { document } = window;
const { screen } = require('@testing-library/jest-dom');

let html = fs.readFileSync(path.resolve(__dirname, "../index.html"), 'utf8');
let css = fs.readFileSync(path.resolve(__dirname, "../styles.css"), 'utf8')

describe ("Grading Tests: ", function () {

   it("should contain a <header> element", () => {
    const headers = document.getElementsByTagName('header');
    expect(headers.length).toBeGreaterThan(0);
  });

  it("should contain a <footer> element", () => {
    const footers = document.getElementsByTagName('footer');
    expect(footers.length).toBeGreaterThan(0);
  });

  it("should contain a <section> element", () => {
    const sections = document.getElementsByTagName('section');
    expect(sections.length).toBeGreaterThan(0);
  });


  it("should contain an <img> element", () => {
    const imgs = document.getElementsByTagName('img');
    expect(imgs.length).toBeGreaterThan(0);
  });
});
