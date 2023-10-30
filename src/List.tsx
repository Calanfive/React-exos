const nm = ["Thomas", "Yoann", "Aly", "Jeremy"];

const NamesList = () => {
    return (
        <ul>
            {nm.map((name, i) => (
                <li key={i}
                    className={i % 2 ? "Textblue" : ""}
                >{name}</li>
            ))}
        </ul>
    );
};

export default NamesList