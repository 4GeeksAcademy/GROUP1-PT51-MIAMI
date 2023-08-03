import React from 'react';
import { Footer } from './footer';


const AboutPage = () => {
  return (
    <div>

      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us page</h1>
              <p className="lead text-muted mb-0">
                Find and compare cars you like! It makes it easier to purchase your next car with ease.
              </p>
              <p className="lead text-muted">
                Snippet by{' '}
                <a href="https://bootstrapious.com/snippets" className="text-muted">
                  <u>CarfindersUSA</u>
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://file.kelleybluebookimages.com/kbb/base/evox/CP/52399/2023-Honda-CR-V-front_52399_032_1821x841_SX_cropped.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Pick Your Dream Car With Confidence</h2>
              <p className="font-bold text-muted mb-4">
              Welcome to CarComparePro, your ultimate destination for comparing cars with ease! Our user-friendly website offers a seamless experience to help you find the perfect vehicle that suits your needs. Whether you're a seasoned car enthusiast or a first-time buyer, CarComparePro ensures a stress-free and informed decision-making process for all your automotive choices.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsyjmGLEYwnVqIZhcbjmtWjNtO0ogIORyCg&usqp=CAU"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 px-5 mx-auto">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">No comparing on the lot anymore</h2>
              <p className="font-italic text-muted mb-4">
                Come and find your dream car here online, no hassle of walking down a car lot. Compare you favorite cars here!
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
              <h4 className="font-italic text-muted">
                Meet the team that made this website possible.
              </h4>
            </div>
          </div>

          <div className="row text-center">
            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://ca.slack-edge.com/T0BFXMWMV-U04R98H6R54-1d0a9ef051e7-192"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Shaleena Evans</h5>
                <span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End*/}

            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://ca.slack-edge.com/T0BFXMWMV-U04TQCERBTJ-c4d74a95ae48-512"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Andres Medina</h5>
                <span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End*/}

            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="data:image/webp;base64,UklGRkAJAABXRUJQVlA4IDQJAAAwNACdASqxAJgAPt1oq1CopaOjpNOcsRAbiWkIcAGZEFRhTY8elcQ05D7QyAVvYdatKGu+XJ9Yc2QxW87c+NBfVDeAhE/5rB9IGnkzoqPMXGuRzcU29/89MfEBoYlTlOWr+Dc0nBb7xP7NWM+Z+nl1PHd2j+Xhpp8JZy68TTvqoZ8kmIUyiJ/l6TExJayvijEubv7Knzare36T3YeFz0qv/xausrkGqTT/SsaTYkDxRJjwQmErqYi/9Dht5OoZ0N94MkerLqkDgRgumoY6XddsSUb9e296jI43OH31S4xmoxIRi8/hEAgpweo/JDZ3tpDgG3xIaGO8e2WTj/DeRF3RRnVeTnjGW+4B5ypw6SfCPSl0HZh3lVAhMgKv01dbKCU9o245uy3HlX65CSE7xohFdr3I6DiWAhV6cmcZw/STeVX053v2mYh2mZW2XVd48AncqSxwp9iPNGdq7zm1t0wuf87gwDedJ4k4ex9C9bEB+1Wxptr8ieOL/tNHFojWbI0IeiooftvEVgi8o3Db7IkZZyBwf6GRvGA1mdqxRfks8gRGZt8n+qYrPCAA/hu5C/eKT3sx6Ez7QfDRgeTXaq6RiRzkquWDmE8JnDIShtkW+1C7lpTaAr1GoaSNybSeOivAOotXjIrlTNuGobtAV3do37CkcGy9+AQWt9L0VcksYXA0vz3KcI8unpbWqje6VNdhSgdN4ib7VzWK8dwyIc9gY/1e9wEl4qzEegNFK6juSr3As+V4IKhz3mbe8zVq9yyLZyQQ64vE6NAUuPUURyzbPx5b2/j0VIvSUXz4TKmAH/jNNq6DlOHHXYLAVN5OaU4sJuSFmXSFDnuz9u/07Splo0l9rhtwersXj8T5sduZGtBuLErQG+uTNYplhFq/PdC3pAElxQBHsOmWhnVFC/dIiqSgy9vToTVKNtuRQDJULtdKpPttDmjDHBmvDVCNKMc06A2qNNtf7aoTfMv90KVcJdHbPzbUMETx8r4l6IEQOvEzkG9q1tM8I7p+GoqGeElLlZC9DsheHXjbxhHyg8PRGkN5zQNUDOwpSix6NrQbz/uocKAWBtKd9CTH1JTQDT9BDCo/EudyaYomSmwBk4acLvHtZAdNkU4mcRACHdmxhPn6Pcg9ejGkMR5IEXUxlm5Z94LY0G5dnPDQrMBdnHcVmjqT9IC2ZVhgueNDSB0d+jpg3bBtJBDS3jUInplixXd6biKTQJNWPct5B1F1r5vIs0S7denwpdvXmvmNF4GfGgJV/wFE8rTLrht3+DW0/zrDGtWXEyGS5Yiv94dUUHs1Zh/M3iLqNmAFq003HNZ2IGl0pBl72QgxfkzGq4Ve977x39eyI3w7omYp44KgXfUAXqV6ADQl7uFHl2hamWe+e9n7JwFqJ6QWMbddidiGH6Zau3EYuVoKEYc+fdCl2hKONUiCEzuPyrlOUY9xxVcT1RgGjNHyXsJ/vqGsI9B6CjDxu+KfDqO8YrjClrP+j2moLxlocMVh5CX4kBIpLZX9dvabtnWJKq0dnGtfooirqetnjseoP0mj0hEqsuxFcgm/+Xow/5vihPFmRUs8uSD5+/YZuMNX9pvAyvzaNPOeebEsuHdvP4JY4BidpzsjN4CliMTjvzdtqSwmXEDjYlfJ+Y4L35R3jcJSTHThAEWH2xjh5gmBGSvuf3WzfQFCgdQSwR57e179WNtGwVpVT802uYD+L+MVrnQQfyfrWj4kYPMRuXF/WDEfUJ55SNW4wEZFLHhkeq+fVdlJ6e5ce5LXFdXETh2P8Jjs7YnRoMdvwPE/x6rYd237GQ3WFny9eBirgbNeVZCDdRouA7JgpGXaCuCsn777erWbgroZXdBy73L1gElrdxd+m/oyfRzI1RVmgkiTep2AUuUM+Fnd7jv+kk2XXa5DTzONz2KHUFJWVp2d2GhlgqI7ZrvYIDZU6TIZBkB4i7Lqd2AKohRWtdrNI2CnbUa9Zn4gxNaSxu2Rf90YPFq5CJJQM/BFYCipmZreC1w1mGwnRJpWRFi8RYakT2tRACrQvJDA6JFFA3nixMH9MtLxyn2Tx9KKYxPB2NssT+NAOrRfToHOL4aQEo3WTa6cwB3ObhdrMitx2M+OoVxOPuruDSGQzl0RQ1cqwIBs4Oq3pOcjphnQiwLkqh9BUN+OKGLMbPBA+BHAv2vXpD3BGrNXUXoxsknW1C5DJj5UStXv5ohbR+6lwqk5mOZ9TJhrap6P1KZR6zF+ezZqJGkJwkVotcigm9EYavUSzsWAYJh97vHVh0C2nNyLRqxWWPZ/26TehMxTpsuswDJWlrYsXzvL1UztGcdD3DZuc4VQMZNtFGGcX30GSpEBYbq7jHNrI5zk/TwQ/QqCK9CvFoOuVGNVJaq4+mqx79C9Nb0UF5hrV7zakiicHc2m2+pvJx+mF6TpFRyYy5ta8nym/HROdCez6BCbykig6xmTajYofjNjOfgn7WS7V2c3x+4HNFzRZOSApwGmbOIKUPXB6n4jGs7h+r6vf3zPctdxcGLHkoY/6RLuwEFLFFFXRFrEobtyozHO3QSoKol/mKSN6dRw0D/p/TLAHDs9faSO1PIfiHiSxZog+9ArhuiegrtmK+zDQtQGMBDXKs8YBXn9xGAhARITLQoZYtH3K5H8SedlXLtsgdb1TRTKbbUFS+vEmVHp5FSRB3zAzjXK1RjGEPT9KRqi4lbnTFfO9JrfC4VJp4PrDEJv06kQFkAQqBHVs/3LEQWklsJf59HjEGJxB1lNxG3SWjAmW7yJgE7Sm8AfXGcUX6cMWXaNmcB6CASNwFjC9MFFfKtQmImAcJA8CbelmJPHlMzIFBUuNGbMhfPgyMIlb11J+u9ua4nzD8S1RPXEdZwIuDIB8p613V4t6/FndZYzdPLgfnD2JAdSCvMdrIC/VhhQyHpiZ3IeaG/0zPLz72Lq2vJzHg7+77y/lrnPHzzPVKHlhY4Vh0bkaxZ/5K/E3M+UqXow97BSiLrrQ/NfQnh89y0Q0bBohN1xcudnaPAA9XnIgkIgWO0AGcim/0ltw1y0whZ82cV/yWW4lf7peJOEqot8nTrYT3aEyw7iTOEdSV5Zn/Y83HDOM11RErzM8P2Syc4MceZHVyDOJ8XlQb5MjjHqm9s0Q0bD2lxAAAAA"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">Jonathan Shelley</h5>
                <span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End*/}

            {/* Team item*/}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://ca.slack-edge.com/T0BFXMWMV-U04NQ1H6R35-63ae31448ac3-512"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0">William Lebrun</h5>
                <span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End*/}
          </div>
        </div>
      </div>

      {/* <footer className="bg-light pb-5">
        <div className="container text-center">
          <p className="font-italic text-muted mb-0">
            &copy; Company.com All rights reserved.
          </p>
        </div>
      </footer> */}
      <Footer></Footer>
    </div>

  );
};

export default AboutPage;
