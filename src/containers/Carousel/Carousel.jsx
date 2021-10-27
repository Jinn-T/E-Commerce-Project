import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const CarouselC = () => {
    return (
        <Carousel style={{ height: "300px" }}>
            <Carousel.Item style={{ height: "300px" }}>
                <img className="d-block w-100" alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "300px" }}>
                <img
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
            <Carousel.Item style={{ height: "300px" }}>
                <img
                    style={{ height: "300px" }}
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
