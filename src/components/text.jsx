import React from "react";

const text = () => {
  return (
    <div class="container">
      <div class="row d-flex mt-1 justify-content-between">
        <div class="col d-flex flex-column">
          <div class="d-flex justify-content-between">
            <h3>Inicio</h3>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="mx-1"
              style={{ maxWidth: "20px" }}
            >
              <g>
                <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
              </g>
            </svg>
          </div>

          <div class="row">
            <div class="col-1">
              <img
                src="/img/<%= user.profileImg  %> "
                class="mx-1 rounded-circle"
                alt=""
              />
              {/* style="max-width: 40px" */}
            </div>
            <div class="col pb-3">
              <form action="/user/tweet/<%= user.id%>" method="post">
                <textarea
                  name="tweetContent"
                  id="tweetContent"
                  cols="50"
                  rows="2"
                  placeholder="¿Qué está pasando?"
                  class="form-control d-block"
                ></textarea>
                {/* style="border: 0; box-shadow:none; resize:none" */}
                <div class="d-flex justify-content-end mt-2">
                  <div>
                    <button
                      type="submit"
                      class="btn btn-primary rounded-pill float-end"
                    >
                      Twittear
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="d-flex"></div>

          <div class="bg-light py-1 border">
            <div class="d-flex justify-content-between">
              <div class="col-1">
                <img
                  src="<%= tweet.author.profileImg %>"
                  class="mx-1 rounded-circle"
                  alt="profileImg"
                />
                {/* style="max-width: 40px" */}
              </div>
              <div class="col-10">
                <div class="d-flex">
                  <p class="mx-1">time</p>
                </div>
                <div>text</div>
                <div class="d-flex justify-content-between mt-2">
                  <div class="d-flex align-items-center">
                    <img
                      src="/img/comment-regular.svg"
                      class="me-1"
                      alt="coment"
                      style={{ height: "18px" }}
                    />
                    {/* style="height: 18px" */}5
                  </div>
                  <div>
                    <img
                      src="/img/retweet-solid.svg"
                      class="me-1"
                      alt="coment"
                      style={{ height: "18px" }}
                    />
                    {/* style="height: 18px" */}
                  </div>
                  <div class="d-flex align-items-center">
                    <form
                      action="/user/tweetLike/<%= tweet.id %>"
                      method="post"
                    >
                      <button
                        type="submit"
                        class="btn bg-trasparent shadow-none"
                      >
                        <img
                          src="/img/heart-regular.svg"
                          class="me-1"
                          alt="coment"
                        />
                      </button>
                    </form>
                  </div>
                  <div>
                    <img
                      src="/img/arrow-up-from-bracket-solid.svg"
                      class="me-1"
                      alt="coment"
                    />
                  </div>
                </div>
              </div>
              <div class="col-1 d-flex justify-content-center align-items-start">
                <i class="fa-solid fa-ellipsis mt-2"></i>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex">
              <a href="/user/mainProfile/<%= tweet.author.id%>" class="mx-1">
                Name
                <span>@name</span>
              </a>
            </div>

            <div class="d-flex justify-content-between mt-2">
              <div class="d-flex align-items-center">
                <img src="/img/comment-regular.svg" class="me-1" alt="coment" />
                5
              </div>
              <div>
                <img src="/img/retweet-solid.svg" class="me-1" alt="coment" />
              </div>
              <div class="d-flex align-items-center">
                <form action="/user/tweetLike/<%= tweet.id %>" method="post">
                  <button type="submit" class="btn bg-trasparent shadow-none">
                    <img
                      src="/img/heart-regular.svg"
                      class="me-1"
                      alt="coment"
                      style={{ height: "18px" }}
                    />
                  </button>
                </form>
              </div>
              <div>
                <img
                  src="/img/arrow-up-from-bracket-solid.svg"
                  class="me-1"
                  alt="coment"
                  style={{ height: "18px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default text;
