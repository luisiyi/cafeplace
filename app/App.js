import React, { Component} from 'react';

//Tipo de archivo jsx
class App extends Component{

    constructor(){
        super();
        this.state = {
            nombreProducto: '',
            descripcion: '',
            precio: '',
            stock: '',
            imagen: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.agregarProducto = this.agregarProducto.bind(this);
    }
    agregarProducto(e){
        fetch('/api/productos',{
            method: 'POST',
            //body: JSON.stringify(this.state)
            body: JSON.stringify({idProducto: 5,
                nombreProducto: "cafe con nieve",
                descripcion: "Exquisito",
                precio: "50", 
                stock: "100",
                imagen: "cafenieve.jpg"
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        //.then(res => res.text())
        .then(data => console.log(data))
        .catch(err => console.log("Ocurrió un error "+err));

        e.preventDefault();
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]:value
        });
    }


    render(){
        return(
            
        <div>
            {/* Navegación*/}
            <nav className="light-blue darken-4">
                <div className="container">
                    <a className="brand-logo" href="/">CAFE PLACE</a>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <div className="card">
                            <div className ="card-content">
                                <form onSubmit={this.agregarProducto}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="nombreProducto" onChange={this.handleChange} type = "text" placeholder="Nombre del producto"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <textarea name="descripcion" onChange={this.handleChange} placeholder="Descripción del producto" className="materialize-textarea"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="precio" onChange={this.handleChange} type = "number" placeholder="precio del producto"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="stock" onChange={this.handleChange} type = "number" placeholder="Stock del producto"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="imagen" onChange={this.handleChange} type = "text" placeholder="imagen del producto"/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn light-blue darken-4">
                                        Agregar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s7">

                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default App;