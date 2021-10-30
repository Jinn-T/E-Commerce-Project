import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import image from "./irnbru.jpg";

const CarouselC = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" alt="First slide" src={image} />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "500px" }}
                    className="d-block w-100"
                    src="https://via.placeholder.com/300.png/09f/fff"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "500px" }}
                    className="d-block w-100"
                    src="https://via.placeholder.com/300.png/09f/fff"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselC;
