import {Table,Row,Col} from 'react-bootstrap';

const Checkout = () => {
    return(
        <>
            <div id="checkout"><h2>Checkout</h2></div>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                                <td>
                                    Test
                                </td>
                                <td>
                                    $20.00
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Test
                                </td>
                                <td>
                                    $20.00
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    );

}

export default Checkout;