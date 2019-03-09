import React, { Component } from 'react';

class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            studentList: [{nombre: "Franco", apellido: "Midence", numeroCuenta: "1"},
                          {nombre: "Andre", apellido: "Figueroa", numeroCuenta: "2"},
                          {nombre: "Julio", apellido: "Gomez", numeroCuenta: "3"}
                        ]
        };
    }

    render(){
        const list = (student) => {
            return(<div>
                     <li>{student.numeroCuenta} - {student.nombre} - {student.apellido}</li>
                   </div>
                );
        }
        return(
            <ul>
                {this.state.studentList.map(list)}
            </ul>
        );
    }
}

export default Student;