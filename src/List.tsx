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
// let PROD = true;
// const nameList = (props) => {
//     return (
//         <div>
//             {props.names.length > 0 ? (
//                 <ul>
//                     {props.names.map((name) => (
//                         <li>{name}</li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>Pas de noms</p>
//             )}

//             {PROD && <p>En production</p>}
//         </div>
//     );
// };