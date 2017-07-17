import React from 'react';

const item = ({ name }) => (
    <li>{name}</li>
);

class Character extends React.Component {
    render() {
        const lis = this.props.characters.map((item, index) => <item key={index} name={item.name} />)
        return (
            <section>   
                <ul>{lis}</ul>
            </section>
        );
    }
}



export default Character;