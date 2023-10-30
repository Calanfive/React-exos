# Les frameworks JS

## Introduction

Nous avons utilisÃ© le javascript Vanilla pour dynamiser le front-end.
Cependant, il existe des frameworks qui permettent de faciliter le dÃ©veloppement front-end.
Les frameworks sont des bibliothÃ¨ques de fonctions qui permettent de dÃ©velopper plus rapidement et plus facilement.

En Javascript, on ne peut pas rafraichir une interface toutes les x millisecondes.
On utilise des techniques pour modifier le DOM sans rafraichir la page et on essaye de le faire le moins souvent possible.

## Les frameworks JS

### Historique

Il existe plusieurs frameworks JS, les plus connus sont :
- Angular
- React
- Vue
- Svelte

C'est la nouvelle gÃ©nÃ©ration des frameworks JS, ils sont basÃ©s sur le DOM virtuel.

Avant cela, il y avait les frameworks JS basÃ©s sur le DOM rÃ©el :
- EmberJS
- angularJS
- BackboneJS
- KnockoutJS
- hammerJS

et avant Ã§a :
- jQuery
- MooTools

### Les frameworks JS basÃ©s sur le DOM virtuel

On ne va pas trop s'attarder dessus, car un TP est prÃ©vu pour les dÃ©couvrir un par un.
Nous allons cependant acquÃ©rir la base de ces frameworks grÃ¢ce Ã  React.

## Bases communes aux frameworks JS

### Le DOM virtuel

Le DOM virtuel est une copie du DOM rÃ©el, il est stockÃ© en mÃ©moire.
Il est plus rapide Ã  modifier que le DOM rÃ©el.
Il est utilisÃ© par les frameworks JS pour modifier le DOM rÃ©el.

### Les composants

Les composants sont des Ã©lÃ©ments qui permettent de dÃ©couper l'interface en plusieurs parties.
Ils sont rÃ©utilisables et peuvent Ãªtre imbriquÃ©s les uns dans les autres.
On peut imaginer que les balises HTML sont des composants avec de l'affichage, des comportements et des styles par dÃ©faut.

## Les composants

### FonctionnalitÃ©s

- nom
- etat
- propriÃ©tÃ©s
- donnÃ©es calculÃ©es
- des mÃ©thodes de cycle de vie
    - crÃ©ation
    - mise Ã  jour
    - destruction
- comportement / actions / handlers
- affichage / rendu
- (style)

## TP - React comme le prof

### Installation

```bash
npm init vite@latest
```

React + Typescript

ElÃ¨ve - Qu'il est beau ce projet React ! Attends quoi un fichier .tsx ?
Prof - Oui, c'est du Typescript + JSX. JSX est une extension de syntaxe pour React.

### Notre premier composant

```tsx
import React from 'react';

const ProfName = () => {
function ProfName() {
    return (
        <div>
            <h1>Thomas</h1>
        </div>
    );
};

export default ProfName;
```

```tsx
```

```tsx
import React from 'react';
import ProfName from './components/ProfName';

const App = () => {
    return (
        <div>
            <ProfName />
            <ProfName />
        </div>
    );
};

export default App;
```

### Les propriÃ©tÃ©s

```tsx
import React from 'react';

const ProfName = (props) => {
    return (
        <div>
            <h1>PrÃ©nom du prof : {props.name}</h1>
        </div>
    );
};

export default ProfName;
```

```tsx
import React from 'react';

const App = () => {
    return (
        <div>
            <ProfName name="Thomas" />
        </div>
    );
};

export default App;
```

### Les Ã©tats

```tsx
import { useState } from 'react';

const ProfName = (props) => {
    const [name, setName] = useState('thomas');

    return (
        <div>
            <h1>PrÃ©nom du prof : {name}</h1>
        </div>
    );
};

export default ProfName;

```

### Les donnÃ©es calculÃ©es

```tsx
import { useState } from 'react';

const ProfName = (props) => {
    const [name, setName] = useState('thomas');

    const upperCaseName = useMemo(
        () => name.toUpperCase()
        , [name]
    );

    return (
        <div>
            <h1>PrÃ©nom du prof : {upperCaseName}</h1>
        </div>
    );
};

export default ProfName;

```

### Les Ã©vÃ¨nements

```tsx
import { useState, useCallback } from 'react';

const ProfName = (props) => {
    const [name, setName] = useState('thomas');

    const upperCaseName = useMemo(
        () => name.toUpperCase()
        , [name]
    );

    const handleClick = useCallback(
        () => setName('titi')
        , []
    );

    return (
        <div>
            <h1>PrÃ©nom du prof : {upperCaseName}</h1>
            <button onClick={handleClick}>Reset</button>
        </div>
    );
};

export default ProfName;

```

### Le jsx

class => className
```tsx
<h1 className="title">PrÃ©nom du prof : {upperCaseName}</h1>
```

style="background-color: blue;" => style={{ backgroundColor: 'blue' }}
```tsx
<button style={{ backgroundColor: 'blue' }}>Reset</button>
```

click => onClick
```tsx
<button style={{ backgroundColor: 'blue' }} onClick={handleClick}>Reset</button>
```

for => .map
```tsx
const ProfName = (props) => {
    return (
        <ul>
            {props.names.map((name) => (
                <li>{name}</li>
            ))}
        </ul>
    );
};
```

if => ternaire ou &&

```tsx
let PROD = true;
const nameList = (props) => {
    return (
        <div>
            {props.names.length > 0 ? (
                <ul>
                    {props.names.map((name) => (
                        <li>{name}</li>
                    ))}
                </ul>
            ) : (
                <p>Pas de noms</p>
            )}

            {PROD && <p>En production</p>}
        </div>
    );
};
```

calcul => {calcul}

```tsx
const SimpleCalcul = (props) => {
    return (
        <h1>3 + 3 = {3 + 3}</h1>
    );
};
```