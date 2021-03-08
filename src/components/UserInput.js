import { useDispatch, useSelector } from "react-redux";
import AnalysisRequest from "../data/AnalysisRequest";

function UserInput() {
    const text = useSelector(state => state.text);
    let sentiments = []

    const dispatch = useDispatch();

    const updateText = (e) => dispatch({
        type: 'update-text',
        text: e.target.value
    });

    const analyzeText = async () => {
        let data = text.split(/([!,?,.])/)
        sentiments = await AnalysisRequest(data)
        
        dispatch({
            type: 'analyzed',
            sentiments: sentiments,
            analyzedText: data
        });
    }

    return (
        <section>
            <h2>Paragraph to Analyze</h2>
            <textarea autoFocus onChange={updateText}></textarea>
            <div><button onClick={analyzeText}>Analyze Text</button></div>
        </section>
    );
}

export default UserInput;