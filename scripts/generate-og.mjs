import { writeFile, mkdir, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { createContentLoader } from "vitepress";

export async function generateOgImage(title, description, outputPath) {
  // Load the static TTF font locally from your project directory
  const fontPath = join(
    process.cwd(),
    ".vitepress/assets/fonts/Inter-SemiBold.ttf",
  );
  const fontBuffer = await readFile(fontPath);

  const markup = {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "630px",
        width: "1200px",
        backgroundImage: "url(https://paymenter.org/seo-image-base.png)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      children: [
        {
          type: "img",
          props: {
            src: "https://paymenter.org/logo-dark.svg",
            width: 675,
            height: 150,
            style: { margin: "60px" },
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              paddingTop: "170px",
              paddingLeft: "60px",
              color: "white",
            },
            children: [
              {
                type: "h1",
                props: {
                  style: {
                    fontSize: "70px",
                    fontWeight: "600",
                    margin: "0",
                    fontFamily: "Inter",
                  },
                  children: title,
                },
              },
              {
                type: "p",
                props: {
                  style: {
                    fontSize: "35px",
                    paddingTop: "5px",
                    margin: "0",
                    fontFamily: "Inter",
                    color: "#cfd0d2",
                  },
                  children: description,
                },
              },
            ],
          },
        },
      ],
    },
  };

  // 1. Generate SVG using Satori
  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: fontBuffer,
        weight: 600,
        style: "normal",
      },
    ],
  });

  // 2. Convert SVG to PNG using Resvg
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1200 },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();


  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, pngBuffer);
}
