import React from 'react';
import { Card, CardBody, CardTitle, Button, Row, Col } from 'reactstrap';
import Product1 from '../images/product1.jpg';
import Product2 from '../images/product2.jpg';

function Products(props) {
    return(
        <div className="container">
            <Row>
                <Col sm="6">
                    <Card body outline color="secondary">
                        <img src={Product1} width="200" height="200" alt="shampoo"/>
                        <CardBody>
                            <CardTitle tag="h5">Shampoo</CardTitle>
                            <Button>Add to Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body outline color="secondary">
                        <img src={Product2} width="200" height="200" alt="conditioner"/>
                        <CardBody>
                            <CardTitle tag="h5">Conditioner</CardTitle>
                            <Button>Add to Cart</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Products;