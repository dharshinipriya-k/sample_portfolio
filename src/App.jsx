import React from "react";

function App() {
  let cardData = [{
    title: "Project One",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus tempore expedita quisquam, distinctio temporibus, consequuntur perspiciatis, velit totam veniam sunt consequatur. Eius numquam nemo exercitationem iure sapiente dolore ea.",
  },
  {
    title: "Project Two",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus tempore expedita quisquam, distinctio temporibus, consequuntur perspiciatis, velit totam veniam sunt consequatur. Eius numquam nemo exercitationem iure sapiente dolore ea.",
  },
  {
    title: "Project Three",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus tempore expedita quisquam, distinctio temporibus, consequuntur perspiciatis, velit totam veniam sunt consequatur. Eius numquam nemo exercitationem iure sapiente dolore ea.",
  },
  {
    title: "Project Four",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus tempore expedita quisquam, distinctio temporibus, consequuntur perspiciatis, velit totam veniam sunt consequatur. Eius numquam nemo exercitationem iure sapiente dolore ea.",
  },
  {
    title: "Project Five",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus tempore expedita quisquam, distinctio temporibus, consequuntur perspiciatis, velit totam veniam sunt consequatur. Eius numquam nemo exercitationem iure sapiente dolore ea.",
  },
  {
    title: "Project Six",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus tempore expedita quisquam, distinctio temporibus, consequuntur perspiciatis, velit totam veniam sunt consequatur. Eius numquam nemo exercitationem iure sapiente dolore ea.",
  }
];
  return (
    <>
      {/* <!-- Page Content --> */}
      <div className="container">
        {/* <!-- Page Heading --> */}
        <h1 className="my-4">
          Page Heading
          <small>Secondary Text</small>
        </h1>

        <div className="row">

      {
        cardData.map((e,i)=>{
          return <div className="col-lg-4 col-sm-6 mb-4" key={i}>
          <div className="card h-100">
            <a href="#">
              <img
                className="card-img-top"
                src="https://via.placeholder.com/700x400"
                alt=""
              />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{e.title}</a>
              </h4>
              <p className="card-text">{e.desc}</p>
            </div>
          </div>
        </div>
        })
      }   
        </div>
        {/* <!-- /.row --> */}

        {/* <!-- Pagination --> */}
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- /.container --> */}
    </>
  );
}

export default App;
