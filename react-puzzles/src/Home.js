import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1>React Design Puzzles</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/puzzle-4">Puzzle 4</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/puzzle-5">Puzzle 6</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/puzzle-6">Puzzle 6</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/puzzle-7">Puzzle 7</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/puzzle-8">Puzzle 8</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/puzzle-9">Puzzle 9</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/puzzle-10">Puzzle 10</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
