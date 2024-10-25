import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Info = ({ back }) => {
    const { mealid } = useParams();
    const [info, setInfo] = useState(null);
    const navigate = useNavigate()
    const [showBackBtn, setShowBackBtn] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getInfo = async () => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
            const jsonData = await response.json();
            setInfo(jsonData.meals[0]);
            setShowBackBtn(true)

        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    useEffect(() => {
        if (mealid) {
            getInfo();
            // setShowBackBtn(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mealid]);

    const handleBack = () => {
        if (back) {
            navigate(`/search?query=${back}`);
        } else {
            navigate(-1); // Go back to the previous page
        }
    }

    return (
        <Container className="my-5 d-flex justify-content-center align-items-center card-style ">
            <Row className="row">
                <Col className="">
                    {!info ? (
                        <Alert variant="info">
                            Please Wait Loading Data
                        </Alert>
                    ) : (

                        <Card style={{ width: "50rem" }} className="shadow border-0 bg-dark text-light">
                            <Row className="g-0">
                                <Col md={5}>
                                    <Card.Img variant="card-img" src={info.strMealThumb} className="rounded-start h-100 w-100 object-fit-cover " />

                                </Col>
                                <Col md={7}>
                                    <Card.Body>
                                        <Card.Title className="fs-4">Recipe Details</Card.Title>
                                        <Card.Text>{info.strMeal}</Card.Text>
                                        <Card.Subtitle className="mb-2 text-muted fw-bold">Instructions</Card.Subtitle>
                                        <Card.Text>{info.strInstructions}</Card.Text>
                                        <NavLink to={`${info.strYoutube}`}><Button variant="danger mb-3">Youtube Recipe {" "} <i className="fa-brands fa-youtube fa-beat-fade " style={{ color: "#fff" }}></i></Button></NavLink>

                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    )}

                    {showBackBtn && (
                        <Button onClick={handleBack} className="btn btn-danger px-4 my-3 d-block ms-auto">Back</Button>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Info;
