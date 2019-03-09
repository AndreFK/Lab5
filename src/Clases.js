import React, { Component } from 'react';

class Clases extends Component{
    constructor(props){
        super(props);
        this.state = {
            clasesList: [
                {nombre: "UX", codigoClase: "001"},
                {nombre: "TBD2", codigoClase: "002"}
            ]
        }
    }

    render(){
        const list = (clase) => {
            return(<div>
                     <li>{clase.codigoClase} - {clase.nombre}</li>
                   </div>
                );
        }
        return(
            <ul>
                {this.state.clasesList.map(list)}
            </ul>
        );
    }

}

export default Clases;