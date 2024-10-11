// server/actions/internshala.js
import puppeteer from "puppeteer";

export const applyToInternshala = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto("https://internshala.com/", {
      waitUntil: "networkidle2",
    });
  } catch (error) {
    console.error("Failed to load page");
  }
};
