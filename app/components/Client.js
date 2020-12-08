import React, { Component} from 'react';

//Tipo de archivo jsx
class Client extends Component{

    constructor(){
        super();
        this.state = {
            idCliente: '',
            nombre: '',
            apellido: '',
            telefono: '',
            direccion: '',
            imagen: '',
            clientes: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.agregarCliente = this.agregarCliente.bind(this);
    }
    //metodo para agregar productos con todos los variables requeridas
    agregarCliente(e){
        if (this.state._id) {
            fetch(`/api/clientes/${this.state._id}`,{
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Cliente Actualizado'});
                this.setState({idCliente: '', nombre: '',apellido: '', telefono: '', direccion: '', imagen: '', _id:''});
                this.fetchClientes();
            });
        }else{
            fetch('/api/clientes',{
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            //.then(res => res.text())
            .then(data => {
                console.log(data)
                M.toast({html: 'Cliente Guardado'});
                this.setState({idCliente: '', nombre: '',apellido: '', telefono: '', direccion: '', imagen: '', _id:''});
                this.fetchClientes();
            })
            .catch(err => console.error(err));
        }

        e.preventDefault();
    }

    //metodo que trae y MUESTRA los productos 
    componentDidMount(){
        this.fetchClientes();
    }

    //metodo para obtener los productos
    fetchClientes(){
        fetch('/api/clientes')
            .then(res => res.json())
            .then(data => {
                this.setState({clientes: data});
                console.log(this.state.clientes);
            });
    }

    eliminarCliente(id){
        if (confirm('¿Estas seguro de eliminar el cliente?')) {
            fetch(`/api/clientes/${id}`,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Cliente Eliminado'});
                this.fetchClientes();
            });
        }
    }

    editarCliente(id){
        fetch(`/api/clientes/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    idCliente: data.idCliente,
                    nombre: data.nombre,
                    apellido: data.apellido,
                    telefono: data.telefono,
                    direccion: data.direccion,
                    imagen: data.imagen,
                    _id: data._id
                })
            })
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

            <div className="container">
                <div className="row">
                    <div className="col s5">
                        <div className="card">
                            <div className ="card-content">
                                <form onSubmit={this.agregarCliente}>
                                <div className="row">
                                        <div className="input-field col s12">
                                        <input name="idCliente" onChange={this.handleChange} type = "number" placeholder="ID del cliente" value={this.state.idCliente}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="nombre" onChange={this.handleChange} type = "text" placeholder="Nombre" value={this.state.nombre}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <textarea name="apellido" onChange={this.handleChange}  type = "text" placeholder="Apellido" value={this.state.apellido} className="materialize-textarea"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="telefono" onChange={this.handleChange} type = "text" placeholder="Teléfono" value={this.state.telefono}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="direccion" onChange={this.handleChange} type = "text" placeholder="Dirección" value={this.state.direccion}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="imagen" onChange={this.handleChange} type = "text" placeholder="imagen del cliente" value={this.state.imagen}/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn deep-orange darken-4">
                                        Agregar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s7">
                        <table class="striped">
                            <thead>
                                <tr>
                                    <th>Id Cliente</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Teléfono</th>
                                    <th>Dirección</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.clientes.map(cliente => {
                                        return(
                                            <tr key={cliente._id}>
                                                <td>{cliente.idCliente}</td>
                                                <td>{cliente.nombre}</td>
                                                <td>{cliente.apellido}</td>
                                                <td>{cliente.telefono}</td>
                                                <td>{cliente.direccion}</td>
                                                <td>
                                                    <button className="btn orange lighten-2" onClick={()=> this.eliminarCliente(cliente._id)}>
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                    <button onClick={() => this.editarCliente(cliente._id)} className="btn brown darken-1" style={{margin: '2px'}}>
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Client;