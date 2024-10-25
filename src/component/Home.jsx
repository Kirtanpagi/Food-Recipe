/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import FoodCard from "./Card";
import {  useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const getFoodData = async (query) => {
        if (query.trim() === '') {
            setMsg("Please enter something");
            setData(null); // Clear previous data if any
        } else {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
                const jsonData = await res.json();
                setData(jsonData.meals);
                // console.log(jsonData.meals)
                setMsg(jsonData.meals ? "" : "No results found");
            } catch (error) {
                setMsg("Error fetching data");
                setData(null); // Clear previous data if any
            }
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const query = params.get('query');
        if (query) {
            setSearchTerm(query);
            getFoodData(query);
        }
    }, [location.search]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch=()=>{
        // getFoodData(searchTerm)
        navigate(`/?query=${searchTerm}`);
    }

    const handleCake =()=>{
        // getFoodData("cake")
        navigate(`/?query=cake`);
    }

    const handlePasta =()=>{
        // getFoodData("pasta")
        navigate(`/?query=pasta`);

    }

    const handleVeg =()=>{
        // getFoodData("veg")
        navigate(`/?query=veg`);

    }

    const handleHome=()=>{
        navigate(`/`)
        setSearchTerm('')
        setData(null)
    }

    return (
        <>
            <Container className="my-5">
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Search Food"
                        aria-label="Search Food"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <Button variant="dark" onClick={handleSearch}>Search</Button>
                </InputGroup>
                    <Container className="d-flex justify-content-center align-items-center">
                        <span>
                            <Button variant="danger" onClick={handleHome}>Home</Button>
                            &nbsp; &nbsp;<Button variant="danger" onClick={handleCake}>Cake</Button>
                        &nbsp; &nbsp;<Button variant="danger" onClick={handlePasta}>Pasta</Button>
                        &nbsp; &nbsp;<Button variant="danger" onClick={handleVeg}>Veg Dish</Button>
                        </span>
                    </Container>
                    {/* {searchTerm && <h5 className="mb-4">Last search: {searchTerm}</h5>} */}


                <h4>{msg}</h4>
                <FoodCard details={data} back={searchTerm} />
            </Container>
        </>
    );
};

export default Home;
