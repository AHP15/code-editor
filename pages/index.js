import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import Editor from "../components/Editor";
import { useEffect, useState } from 'react';
import useLocalStorage from "../hooks/useLocalStorage";


export default function Home() {
  
  const [myhtml, setHtml] = useLocalStorage("html", "");
  const [mycss, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() =>{
    const timout = setTimeout(() =>{
      setSrcDoc(`
         <html>
           <body>${myhtml}</body>
           <style>${mycss}</style>
           <script>${js}</script>
         </html>
      `);
    }, 340);

    return () => clearTimeout(timout);
  }, [myhtml, mycss, js]);

  return (
    <>
      <h1 className="page_title">Code Editor (HTML/CSS/JS)</h1>
      <div className="pane top-pane">
        <Editor
            lang="HTML"
            value={myhtml}
            onChange={value =>setHtml(value)}
            extension={html}
        />
        <Editor
            lang="CSS"
            value={mycss}
            onChange={value =>setCss(value)}
            extension={css}
        />
        <Editor
            lang="JS"
            value={js}
            onChange={value =>setJs(value)}
            extension={javascript}
        />
      </div>
      <div className="pane bottom-pane">
        <iframe
           srcDoc={srcDoc}
           height="400"
           width="100%"
        />
      </div>
    </>
  )
}
