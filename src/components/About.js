import aboutLogo from '../assets/img/img1.jpg'; 

function About() {
  return (
    <>
     <h2 className="main-title text-center about-scroll">ABOUT US</h2>
      <header className="container" style={{backgroundImage: `url(${aboutLogo})`}}>
        <div style = {{color:'white',textAlign:'justify', fontFamily:'system-ui', fontSize: "1.25rem"}}>
            <p>
            Our company, established in 2022, specializes in the international trade of metal and non-metal scrap, providing the best quality scrap to customers across the world to meet the growing demand for it in various industries. By providing high-quality metal scrap, we aim to help our customers meet their production needs and achieve their business goals. Our focus is on customer satisfaction and delivering value to stakeholders, making us well-positioned to grow in the metal scrap trade market. we aim to establish strong relationships with our customers and become a trusted partner in their success.
           </p>
            <p>
            Additionally, our focus on ethical sourcing and sustainability practices ensures that all of the metal scraps we trade is responsibly sourced and processed in an environmentally friendly manner. This not only benefits our customers but also helps to promote a more sustainable future for the industry and the planet as a whole.
            </p>
           </div> 
      </header>
    </>
  );
}
export default About;
