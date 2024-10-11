import puppeteer from "puppeteer";

export const applyToInternshala = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    await page.goto("https://internshala.com/internships/", {
      waitUntil: "networkidle2",
    });
    await page.setViewport({ width: 1080, height: 1024 });
  } catch (error) {
    console.error("Failed to load page");
  }
};
