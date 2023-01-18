
import "./Modal.css";

function Modal({Modal,setModal,children}){

    const CloseModal = () => setModal(false);

    const CancelPropagation= (e) =>{
        e.stopPropagation();
    }

    return <article className={`modal ${Modal && "is-open"}`} onClick={CloseModal}>
            <div className="modal-container" onClick={CancelPropagation}>
                <button className="modal-close" onClick={CloseModal}>X</button>
                {children}
            </div>
</article>
}

export default Modal;