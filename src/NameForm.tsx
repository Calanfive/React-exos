import { useCallback, useState, useMemo} from 'react';

function NameForm() {
    const [name, setName] = useState("")
    const [color, setColor] = useState("#000000")
    
    // const upperCaseName = useMemo(
    //     () => name.toUpperCase()
    //     , [name]
    // );

    const handleChangeName = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value)
        },
        []
      )

    const handleChangeColor = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          setColor(e.target.value)
        },
        []
      )
  
    return (
      <>
        <form className="formulR">
            <label htmlFor="label">Nom </label>
            <input type="text" name='label' onChange={handleChangeName} />
            <p style={{color}}>{name.toUpperCase()}</p> 
            <p> Couleur
                <input type="color" onChange={handleChangeColor} />
                <p>{color}</p>
            </p>
        </form>
      </>
    )
  }
  
  export default NameForm;