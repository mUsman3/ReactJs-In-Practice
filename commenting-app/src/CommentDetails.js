import React from "react";
import faker from "faker";

const CommentDetails = props => {
  return (
    <div className='ui comments'>
      <h3 className='ui dividing header'>Comments</h3>
      <div className='comment'>
        <a className='avatar'>
          <img src={faker.image.avatar()} alt='avatar' />
        </a>

        <div className='content'>
          <a href='/' className='author'>
            {props.author}
          </a>
          <div className='metadata'>
            <span className='date'>Today at 12:00 Pm</span>
          </div>
          <div className='text'> {props.content}</div>
        </div>
      </div>
      <div className='comment'>
        <a className='avatar'>
          <img src={faker.image.avatar()} alt='avatar' />
        </a>

        <div className='content'>
          <a href='/' className='author'>
            {props.author}
          </a>
          <div className='metadata'>
            <span className='date'>Today at 12:00 Pm</span>
          </div>
          <div className='text'> {props.content}</div>
        </div>

        <div className='comments'>
          <div className='comment'>
            <a className='avatar'>
              <img src={faker.image.avatar()} alt='avatar' />
            </a>

            <div className='content'>
              <a href='/' className='author'>
                {props.author}
              </a>
              <div className='metadata'>
                <span className='date'>Today at 12:00 Pm</span>
              </div>
              <div className='text'> {props.content}</div>
            </div>
          </div>
        </div>
      </div>

      <div className='comment'>
        <a className='avatar'>
          <img src={faker.image.avatar()} alt='avatar' />
        </a>

        <div className='content'>
          <a href='/' className='author'>
            {props.author}
          </a>
          <div className='metadata'>
            <span className='date'>Today at 12:00 Pm</span>
          </div>
          <div className='text'> {props.content}</div>
        </div>
      </div>
    </div>
  );
  {
    /*
    Check for alternative , Seocond option is here

      <div className='comment'>
      <a href='/' className='avatar'>
        <img src={faker.image.avatar()} alt='avatar' />
      </a>
    <div className='content'>
      <a href='/' className='author'>
        {props.author}
      </a>
      <div className='metadata'>
        <span className='date'>Today at 12:00 Pm</span>
      </div>
      <div className='text'> {props.content}</div>
    </div>
</div> */
  }
};

export default CommentDetails;
