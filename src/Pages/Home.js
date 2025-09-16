import labels from "../labels";

  
function Home(props) {
    const language = props.language;
  return (
    <div
      className="p-5 text-center bg-body-tertiary"
      style={{ width: "100%", height: "20vh", backgroundColor: "rgb(154, 19, 86)" }}
    >
      <h1 className="mb-3">
        <span className="align-middle">
          <span
            className="display-6"
            style={{ color: "blue", fontStyle: "italic", marginTop: "1px", marginBottom: "20px" }}
          >
            {labels[language].welcome}
           
          </span>
        </span>
      </h1>
    </div>
  );
}
export default Home;