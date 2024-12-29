import { convertAniBinaryToCSS } from "ani-cursor";

export async function toggleCursor(selector: string, aniUrl: string) {
  const cursor = document.getElementById(aniUrl);
  if (cursor) {
    cursor.remove();
  } else {
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());
    const style = document.createElement("style");
    style.innerText = convertAniBinaryToCSS(selector, data);
    style.id = aniUrl;
    document.head.appendChild(style);
  }
}
