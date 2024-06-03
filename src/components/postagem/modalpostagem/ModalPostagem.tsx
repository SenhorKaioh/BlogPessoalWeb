import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormPostagem from "../formpostagem/FormPostagem";

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup className="rounded-sm"
        trigger={
          <button className="rounded border border-solid border-white px-4 py-2 font-bold 
           text-white transition-colors hover:bg-white hover:text-indigo-900 focus-visible:bg-white
            focus-visible:text-indigo-900 ">
            Nova Postagem
          </button>
        }
        modal
      >
        <FormPostagem />
      </Popup>
    </>
  );
}

export default ModalPostagem;