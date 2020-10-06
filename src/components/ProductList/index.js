import React from 'react'
import Product from '../Product'
import products from '../../seed'

class ProductList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount(){
        this.setState({products: products})
    }
    
    handleUpVote(productId){
        alert(productId)
    }

    render(){
        this.state.products.sort((a, b)=>(b.votes - a.votes));
        const productComponentsList = products.map((product)=>(
            <Product
            key={'product-'+product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            onVote={this.handleUpVote}/>
        ));

        return(<div className='ui unstackable items'>
                {productComponentsList}
            </div>
        )
    }
}

export default ProductList;