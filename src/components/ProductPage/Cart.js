import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

    return (

      <div className="home">
          <div className="productContainer">

          <div class="col-8">

<h4>Billing and Shipping</h4>

<form>
  <div class="row">
    <div class="col-4">
      <label clsas="form-label" form="firstname">First Name</label>
      <input type="text" id="firstname" class="form-control"></input>
    </div>

    <div class="col-4">
      <label clsas="form-label" form="lastname">Last Name</label>
      <input type="text" id="lastname" class="form-control"></input>
    </div>

    <div class="col-8">
      <label class="form-label" form="email">Email
        <span class="text-muted">(Optional)</span>
      </label>
      <input type="text" id="email" class="form-control"></input>
    </div>

    <div class="col-8">
      <label class="form-label" form="address">Address</label>
      <input type="text" id="address" class="form-control"></input>
    </div>
  </div>

  <div class="row">
    <div class="col-4">
      <label class="form-label" form="city">City</label>
      <input type="text" id="city" class="form-control"></input>
    </div>

    <div class="col-2">
      <label class="form-label" form="state">State</label>
      <input type="text" id="state" class="form-control"></input>
    </div>

    <div class="col-2">
      <label class="form-label" form="zip">Zip Code</label>
      <input type="text" id="zip" class="form-control"></input>
    </div>
  </div>

  <h4>Payment</h4>
  <div class="row">

    <div class="col-4">
      <label clsas="form-label" form="nameoncard">Name on Card</label>
      <input type="text" id="nameoncard" class="form-control"></input>
      <small class="text-muted">Full name as displayed on card</small>
    </div>

    <div class="col-4">
      <label clsas="form-label" form="creditcard">Credit Card</label>
      <input type="text" id="creditcard" class="form-control"></input>
    </div>
  </div>

  <div class="row">
    <div class="col-4">
      <label clsas="form-label" form="expirationdate">Expiration Date</label>
      <input type="text" id="expirationdate" class="form-control"></input>
    </div>
  
    <div class="col-4 mb-4">
      <label clsas="form-label" form="cvv">CVV</label>
      <input type="text" id="cvv" class="form-control"></input>
    </div>

  </div>
</form>
</div>
            <ListGroup>
              {cart.map((prod) => (
                <ListGroup.Item key={prod.id}>
                  <Row>
                    <Col md={2}>
                      <Image src={prod.image} alt={prod.name} fluid rounded />
                    </Col>
                    <Col md={2}>
                      <span>{prod.name}</span>
                    </Col>
                    <Col md={2}>${prod.price}</Col>
                    <Col md={2}>
                      <Rating rating={prod.ratings} />
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={prod.qty}
                        onChange={(e) => dispatch({
                          type: "CHANGE_CART_QTY",
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                        })}
                      >
                        {[...Array(prod.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })}
                      >
                        <AiFillDelete fontSize="20px" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="filters summary">
            <span className="title">Subtotal ({cart.length}) items</span>
            <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ${total}</span>
            <Link to='/checkout'>
              <Button type="button" disabled={cart.length === 0}>
                Submit Payment
              </Button>
            </Link>
          </div>
        </div>
    );
  };

export default Cart;