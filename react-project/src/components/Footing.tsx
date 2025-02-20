

function Footing() {
    return (
    <>
        <div className="bottomcontainer">
            <div className="register">
                <h1>Register Now So You Don't Miss Our Program</h1>
                <div className="sign">
                <input type="email" placeholder="Enter your Email" />
                <button>Subscribe Now</button>
                </div>
            </div>

            <div className="media">
                <div className="medialink">
                    <a href="/index.html">Home</a>
                    <a href="../html/category.html">Category</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>

                <div className="mediaimg">
                    <img src="src/images/Facebook - Negative.svg" alt="" />
                    <img src="src/images/Twitter - Negative.svg" alt="" />
                    <img src="src/images/Instagram - Negative.svg" alt="" />
                    <img src="src/images/YouTube - Negative.svg" alt="" />
                </div>
            </div>

            <footer>
                <p>&copy; 2025 Fitness. All rights reserved.</p>
                <div className="footerlink">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </footer>
        </div>
    </>
    );
}


export default Footing;