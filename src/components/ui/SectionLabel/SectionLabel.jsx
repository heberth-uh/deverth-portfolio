import "./SectionLabel.scss";

function SectionLabel({ number, label }) {
  return (
    <div className="section-label">
      <span className="section-label__num">{number}</span>
      <span className="section-label__lbl">{label}</span>
      <span className="section-label__rule" />
    </div>
  );
}

export default SectionLabel;
