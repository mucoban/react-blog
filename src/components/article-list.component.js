import {Link} from "react-router-dom";

const ArticleList = () => (
    <div className="container">
        <div className="row">
            { [0, 1, 2].map(i => <div className="col-4 pt-3">
                <div className="card text-start mb-3">
                    <img className="card-img-top" src="https://bitnetinfotech.com/wp-content/uploads/2022/08/Frameworks-for-React-JS.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <Link to="/213" className="fs-3 text-dark text-decoration-none">Article Title</Link>
                        <h6>17.17.2018</h6>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/213" className="btn btn-outline-primary float-end btn-sm">More</Link>
                    </div>
                </div>
            </div>) }
        </div>
    </div>
)

export default ArticleList