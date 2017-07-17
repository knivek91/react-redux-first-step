import React from 'react';

const item = ({ name }) => (
    <li>{name}</li>
);

// will mount debe cargar las rutas recibidas mandando un forEach para el arreglo, asi que crea el arreglo 
// y al crearse se lee en el render y pinta los datos ;)

class Character extends React.Component {
    render() {
        // // = this.props.characters.map((item, index) => <item key={index} name={item.name} />)
        const lis = null; 
        return (
            <section>   
                <ul>{lis}</ul>
            </section>
        );
    }
}



export default Character;