import {Link} from "react-router-dom";

const ArticleList = () => (
    <div className="container">
        <div className="row">
            <div className="col-12 pt-3">
                <div className="card text-start mb-3">
                    <div className="card-body">
                        <Link to="/213" className="fs-3 text-dark text-decoration-none">Article Title</Link>
                        <h6>17.17.2018</h6>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <Link to="/213" className="btn btn-outline-primary float-end btn-sm">More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ArticleList