import service1Logo from "../assets/img/card1.png"
import service2Logo from "../assets/img/card2.png"
import service3Logo from "../assets/img/card3.png"


import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">OUR SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Aluminium Scrap" img={service1Logo} text="We trade a wide variety of aluminum scrap to meet the diverse needs of our customers. Our inventory includes various grades and forms of aluminum scrap, such as aluminum sheet, aluminum extrusion, and aluminum wire. With a strong focus on quality control, we ensure that all of our aluminum scrap is sourced and processed to meet the highest standards, ensuring that our customers receive the best possible products. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Copper Scrap" img={service2Logo} text="We are dealing with a comprehensive range of copper scrap to meet the needs of our customers. We offer various forms of copper scrap, such as copper wire, copper cable, copper tubing, and copper sheet, among others. Our copper scrap is sourced from a variety of reliable sources and is processed to the highest standards, ensuring that it meets the needs of even the most demanding applications. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Iron Scrap" img={service3Logo} text="We also merchandise a various Iron scrap,  including cast iron scrap and stainless steel scrap. Whether you are looking for high-purity Iron scrap for use in manufacturing or lower-grade scrap for energy recovery, we have the right products to meet your needs. " />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
