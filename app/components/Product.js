import React, { Component} from 'react';

//Tipo de archivo jsx
class Product extends Component{

    constructor(){
        super();
        this.state = {
            idProducto: '',
            nombreProducto: '',
            descripcion: '',
            precio: '',
            stock: '',
            imagen: '',
            productos: [],
            _id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.agregarProducto = this.agregarProducto.bind(this);
    }
    //metodo para agregar productos con todos los variables requeridas
    agregarProducto(e){
        if (this.state._id) {
            fetch(`/api/productos/${this.state._id}`,{
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
                M.toast({html: 'Producto Actualizado'});
                this.setState({idProducto: '', nombreProducto: '',descripcion: '', precio: '', stock: '', imagen: '', _id:''});
                this.fetchProductos();
            });
        }else{
            fetch('/api/productos',{
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
                M.toast({html: 'Producto Guardado'});
                this.setState({idProducto: '', nombreProducto: '',descripcion: '', precio: '', stock: '', imagen: ''});
                this.fetchProductos();
            })
            .catch(err => console.error(err));
        }

        e.preventDefault();
    }

    //metodo que trae y MUESTRA los productos 
    componentDidMount(){
        this.fetchProductos();
    }

    //metodo para obtener los productos
    fetchProductos(){
        fetch('/api/productos')
            .then(res => res.json())
            .then(data => {
                this.setState({productos: data});
                console.log(this.state.productos);
            });
    }

    eliminarProducto(id){
        if (confirm('¿Estas seguro de eliminar el producto?')) {
            fetch(`/api/productos/${id}`,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                M.toast({html: 'Producto Eliminado'});
                this.fetchProductos();
            });
        }
    }

    editarProducto(id){
        fetch(`/api/productos/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    idProducto: data.idProducto,
                    nombreProducto: data.nombreProducto,
                    descripcion: data.descripcion,
                    precio: data.precio,
                    stock: data.stock,
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
                                <form onSubmit={this.agregarProducto}>
                                <div className="row">
                                        <div className="input-field col s12">
                                        <input name="idProducto" onChange={this.handleChange} type = "number" placeholder="ID del producto" value={this.state.idProducto}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="nombreProducto" onChange={this.handleChange} type = "text" placeholder="Nombre del producto"value={this.state.nombreProducto}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <textarea name="descripcion" onChange={this.handleChange} placeholder="Descripción del producto" value={this.state.descripcion} className="materialize-textarea"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="precio" onChange={this.handleChange} type = "number" placeholder="precio del producto" value={this.state.precio}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="stock" onChange={this.handleChange} type = "number" placeholder="Stock del producto" value={this.state.stock}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                        <input name="imagen" onChange={this.handleChange} type = "text" placeholder="imagen del producto" value={this.state.imagen}/>
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
                        <table>
                            <thead>
                                <tr>
                                    <th>Id Producto</th>
                                    <th>Nombre del producto</th>
                                    <th>Descripción del producto</th>
                                    <th>Precio del producto</th>
                                    <th>Stock del producto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.productos.map(producto => {
                                        return(
                                            <tr key={producto._id}>
                                                <td>{producto.idProducto}</td>
                                                <td>{producto.nombreProducto}</td>
                                                <td>{producto.descripcion}</td>
                                                <td>{producto.precio}</td>
                                                <td>{producto.stock}</td>
                                                <td>
                                                    <button className="btn light-blue darken-4" onClick={()=> this.eliminarProducto(producto._id)}>
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                    <button onClick={() => this.editarProducto(producto._id)} className="btn light-blue darken-4" style={{margin: '2px'}}>
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

export default Product;