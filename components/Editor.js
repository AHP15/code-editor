import CodeMirror from '@uiw/react-codemirror';
import { dracula } from "@uiw/codemirror-theme-dracula";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { useState } from 'react';


export default function Editor({lang, value, onChange, extension}){
    const [open, setOpne] = useState(true);
    return (
        <div className={`${open? "editor_container":"editor_container_closed"}`}>
          <div className="editor_title">
            <h4>{lang}</h4>
            <button onClick={() =>setOpne(open => !open)}>
              {open ? <CloseFullscreenIcon />:<OpenInFullIcon />}
            </button>
          </div>
            <CodeMirror
              value={value}
              height="200px"
              theme={dracula}
              extensions={[extension()]}
              onChange={(value, viewUpdate) =>{
                onChange(value);
              }}
            />
        </div>
    );
}