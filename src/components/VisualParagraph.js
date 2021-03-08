import { useSelector } from "react-redux";

function VisualParagraph() {
    const sentiments = useSelector(state => state.sentiments);
    const analyzedText = useSelector(state => state.analyzedText);
    const COLORS = {
      Positive: 'green',
      Neutral: 'orange',
      Negative: 'red',
    };
    return (
      <section>
        <h2>Textual Mood</h2>
        <p>
          {sentiments && sentiments.map(({ sentiment, index}) => {
            const color = COLORS[sentiment];
            //console.log(color)
            return <span key={index} style={{ color }}>{analyzedText[index]} </span>;
          })}
        </p>
      </section>
    );
  }

  export default VisualParagraph;