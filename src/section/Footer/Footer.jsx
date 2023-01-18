import "./Footer.css";
function Footer(){
    return <footer className="footer">
        <div className="container footer-content">
            <h4 className="footer-title">Software developer 😄</h4>
            <div className="footer-links">
                <a 
                href="https://www.facebook.com/saul.huarcaya.1/" 
                className="footer__icon" 
                target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>

                <a 
                href="https://wa.me/51940970193" 
                className="footer__icon" 
                target="_blank">
                    <i className="bx bxl-whatsapp"></i>
                </a>

                <a 
                href="https://linkedin.com/in/saul-huarcaya-quispe-b1504322b" 
                className="footer__icon" 
                target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </div>

            <p className="footer-copy">Saul Huarcaya Quispe - 2022</p>
        </div>
    </footer>
}
export default Footer;