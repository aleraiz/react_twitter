import React from "react";

export default function Tweet() {
  return (
    <div>
      <div className="d-flex">
        <div class="d-flex justify-content-between" style={{ width: "100%" }}>
          <div class="col-2">
            <img
              src="img/default.jpg"
              class="mx-1 rounded-circle"
              style={{ maxWidth: " 40px" }}
              alt="profileImg"
            />
          </div>
          <div class="col-10">
            <div class="d-flex">
              <a
                href="/user/mainProfile/<%= tweet.author.id%>"
                class="mx-1"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span
                  style={{
                    textDecoration: "none",
                    color: "rgb(112, 112, 112)",
                    marginLeft: "15px",
                    fontSize: "1rem",
                  }}
                >
                  @username
                </span>
              </a>

              <p style={{ color: "grey", fontSize: "15px" }}>· 1h ago</p>
            </div>
            <div style={{ marginTop: "0", marginLeft: "10px" }}>
              <p>Twitt content</p>
            </div>
            <div class="d-flex justify-content-between mt-2">
              <div class="d-flex align-items-center">
                <img
                  src="/img/comment-regular.svg"
                  class="me-1"
                  style={{
                    height: "18px",
                    marginBottom: "10px",
                  }}
                  alt="Comment"
                />
              </div>
              <div>
                <img
                  src="/img/retweet-solid.svg"
                  style={{
                    height: "18px",
                    marginBottom: "0",
                    marginLeft: "5px",
                  }}
                  alt="Retweet"
                />
              </div>
              <div class="d-flex align-items-center">
                <form action="" method="post">
                  <button type="submit" class="btn bg-trasparent shadow-none">
                    <img
                      src="/img/heart-regular.svg"
                      style={{ height: "18px", marginBottom: "10px" }}
                      alt="Like"
                    />
                  </button>
                </form>
              </div>
              <div>
                <img
                  src="/img/arrow-up-from-bracket-solid.svg"
                  style={{ height: "18px" }}
                  alt="coment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
