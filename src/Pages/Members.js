import labels from "../labels";

function Members(props) {
    const language = props.language;
    return <h1>{labels[language].membre}</h1>;
}
export default Members;