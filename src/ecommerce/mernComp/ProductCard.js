import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, url}) => {
    return (
        <React.Fragment>
        <Card
            style={{
                width: "16rem",
                marginTop: "70px",
                padding: "2px",
                boxShadow: `rgb(98 98 98 / 38%) 0px 0px 43px -3px`,
            }}>
            <Card.Title style={{fontSize: "18px"}} className="text-success">{title}</Card.Title>
            <Card.Img
                variant="top"
                src={url}
                alt={title}
                width="100px"
                height="190px"/>
            <Card.Body>
            </Card.Body>
            <Card.Footer>
                {/* <Card.Link  className="">Card Link</Card.Link>
                <Card.Link >Another Link</Card.Link> */}
                 <Link to={"/product/"+id}>
                    <button
                        style={{ width: "100%", fontWeight: "bold" }}
                        className="btn btn-danger" >
                        {" "}
                        View
                    </button>
                </Link>
            </Card.Footer>
        </Card>
        </React.Fragment>
    );
};

export default ProductCard;