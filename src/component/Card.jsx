import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const FoodCard = ({ details }) => {
    console.log(details)
    return (


        <>
            <Container className="">
                <Row className="row row-cols-1 row-cols-md-2 row-cols-lg-4">

                    {

                        // eslint-disable-next-line react/prop-types
                        !details ? "" : details.map((ele) => {
                            return (

                                <Col key={ele.idMeal} className="mb-3">
                                    {/* <Card  className="text-center  h-100">
                                        <Card.Img variant="top" src={ele.strMealThumb} />
                                        <Card.Body>
                                            <Card.Title>{ele.strMeal}</Card.Title>
                                            <Card.Text>{ele.strArea} </Card.Text>
                                            <NavLink to={`/${ele.idMeal}`}><Button variant="primary">Recipe</Button></NavLink>
                                        </Card.Body>
                                    </Card> */}

                                    <Card className="h-100">
                                        <Card.Img variant="top" src={ele.strMealThumb} />
                                        <Card.Body>
                                            <Card.Title>{ele.strMeal}</Card.Title>
                                            <Card.Text> <span className="fw-bold">Country-Dish:</span> {ele.strArea}</Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item> <span className="fw-bold">Food Categarogey:</span> {ele.strCategory}</ListGroup.Item>
                                            <ListGroup.Item> <span className="fw-bold">Ingredient:</span> {ele.strIngredient1}</ListGroup.Item>
                                            <ListGroup.Item> <span className="fw-bold">Tags:</span> {ele.strTags}</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Body>
                                            <NavLink to={`/${ele.idMeal}`}><Button variant="danger">Recipe</Button></NavLink>
                                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )

                        })

                    }

                </Row>
            </Container>

        </>
    )


}

export default FoodCard;