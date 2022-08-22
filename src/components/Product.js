import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Product({product}){
    return <Col>
        <Card text='dark'>
            <Card.Img height={500} variant="top" src={product.imgSrc}/>
            <Card.Body>
              <Card.Title>{product.brand} {product.model}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <strong className="text-muted">{product.price} UAH</strong>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Buy it now</Button>
            </Card.Footer>
        </Card>
    </Col>
}

export default Product;