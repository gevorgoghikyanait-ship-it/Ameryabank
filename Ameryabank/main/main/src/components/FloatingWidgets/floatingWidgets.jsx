import "./floatingWidgets.css";

export default function FloatingWidgets() {
  return (
    <>
      <a href="#" className="feedback-tab">
        Ասա կարծիքդ
      </a>

      <div className="chat">
        <div className="chat__bubble">Հարցեր ունե՞ս</div>
        <button className="chat__btn" aria-label="Չատ">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <path d="M8 10h.01M12 10h.01M16 10h.01" />
          </svg>
        </button>
      </div>
    </>
  );
}