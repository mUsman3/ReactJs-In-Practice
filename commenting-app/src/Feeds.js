import React from "react";
import faker from "faker";

const Feeds = props => {
  return (
    <div class='ui feed'>
      <div class='event'>
        <div class='label'>
          <img src={faker.image.avatar()} alt='avatar' />
        </div>
        <div class='content'>
          <div class='summary'>
            <a>Helen Troy</a> added <a>2 new illustrations</a>
            <div class='date'>4 days ago</div>
          </div>
          <div class='extra images'>
            <a>
              <img src={faker.image.avatar()} alt='avatar' />
            </a>
            <a>
              <img src={faker.image.avatar()} alt='avatar' />
            </a>
          </div>
          <div class='meta'>
            <a class='like'>
              <i class='like icon'></i> 5 likes {props.children}
            </a>
          </div>
        </div>
      </div>
      <div class='event'>
        <div class='label'>
          <img src={faker.image.avatar()} alt='avatar' />
        </div>
        <div class='content'>
          <div class='summary'>
            <a class='user'>Jenny Hess</a> added you as a friend
            <div class='date'>2 Days Ago</div>
          </div>
          <div class='meta'>
            <a class='like'>
              <i class='like icon'></i> 555 Likes {props.children}
            </a>
          </div>
        </div>
      </div>
      <div class='event'>
        <div class='label'>
          <img src={faker.image.avatar()} alt='avatar' />
        </div>
        <div class='content'>
          <div class='summary'>
            <a>Joe Henderson</a> posted on his page
            <div class='date'>3 days ago</div>
          </div>
          <div class='extra text'>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </div>
          <div class='meta'>
            <a class='like'>
              <i class='like icon'></i> 5 Likes {props.children}
            </a>
          </div>
        </div>
      </div>
      <div class='event'>
        <div class='label'>
          <img src={faker.image.avatar()} alt='avatar' />
        </div>
        <div class='content'>
          <div class='summary'>
            <a>Justen Kitsune</a> added <a>2 new photos</a> of you
            <div class='date'>4 days ago</div>
          </div>
          <div class='extra images'>
            <a>
              <img src={faker.image.avatar()} alt='avatar' />
            </a>
            <a>
              <img src={faker.image.avatar()} alt='avatar' />
            </a>
          </div>
          <div class='meta'>
            <a class='like'>
              <i class='like icon'></i> 41 Likes {props.children}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feeds;
