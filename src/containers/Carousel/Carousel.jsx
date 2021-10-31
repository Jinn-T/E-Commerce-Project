import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import irnbru from "./irnbru.jpg";
import oasis from "./oasis.jpeg";
import snack from "./snack.jpeg";

const CarouselC = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" alt="First slide" src={irnbru} />
                <Carousel.Caption>
                    <h3></h3>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "550px" }}
                    className="d-block w-100"
                    src={oasis}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "550px" }}
                    className="d-block w-100"
                    src={snack}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselC;
