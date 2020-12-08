import React, { Component} from 'react';

//Tipo de archivo jsx
class Sale extends Component{

    constructor(){
        super();
        this.state = {
            idVenta: '',
            fecha: '',
            cajero: '',
            total: '',
            ventas: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.agregarVenta = this.agregarVenta.bind(this);
    }
    //metodo para agregar productos con todos los variables requeridas
    agregarVenta(e){
        if (this.state._id) {
            fetch(`/api/ventas/${this.state._id}`,{
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
                M.toast({html: 'Venta Actualizada'});
                this.setState({idVenta: '', fecha: '',cajero: '', total: '', _id:''});
                this.fetchVentas();
            });
        }else{
            fetch('/api/ventas',{
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
                M.toast({html: 'Venta Guardada'});
                this.setState({idVenta: '', fecha: '',cajero: '', total: '', _id:''});
                this.fetchVentas();
            })
            .catch(err => console.error(err));
        }

        e.preventDefault();
    }

    //metodo que trae y MUESTRA los productos 
    componentDidMount(){
        this.fetchVentas();
    }

    //metodo para obtener los productos
    fetchVentas(){
        fetch('/api/ventas')
            .then(res => res.json())
            .then(data => {
                this.setState({ventas: data});
                console.log(this.state.ventas);
            });
    }

    eliminarVenta(id){
        if (confirm('¿Estas seguro de eliminar la venta?')) {
            fetch(`/api/ventas/${id}`,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Venta Eliminada'});
                this.fetchVentas();
            });
        }
    }

    editarVenta(id){
        fetch(`/api/ventas/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    idVenta: data.idVenta,
                    fecha: data.fecha,
                    cajero: data.cajero,
                    total: data.total,
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
                                <form onSubmit={this.agregarVenta}>
                                <div className="row">
                                        <div className="input-field col s12">
                                        <input name="idVenta" onChange={this.handleChange} type = "number" placeholder="ID de la venta" value={this.state.idVenta}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="fecha" onChange={this.handleChange} type = "text" placeholder="Fecha" value={this.state.fecha}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="cajero" onChange={this.handleChange} type = "text" placeholder="Cajero" value={this.state.cajero}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="total" onChange={this.handleChange} type = "number" placeholder="Total" value={this.state.total}/>
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
                                    <th>Id Venta</th>
                                    <th>Fecha</th>
                                    <th>Cajero</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.ventas.map(venta => {
                                        return(
                                            <tr key={venta._id}>
                                                <td>{venta.idVenta}</td>
                                                <td>{venta.fecha}</td>
                                                <td>{venta.cajero}</td>
                                                <td>{venta.total}</td>
                                                <td>
                                                    <button className="btn orange lighten-2" onClick={()=> this.eliminarVenta(venta._id)}>
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                    <button onClick={() => this.editarVenta(venta._id)} className="btn brown darken-1" style={{margin: '2px'}}>
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

export default Sale;