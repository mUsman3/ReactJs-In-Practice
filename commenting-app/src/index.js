import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import Feeds from "./Feeds";

const App = () => {
  return (
    // <div className='ui container comments'>
    //   <ApprovalCard>
    //     <CommentDetails
    //       author={faker.name.lastName()}
    //       content={faker.random.words()}
    //     />
    //   </ApprovalCard>

    //   <ApprovalCard>
    //     <CommentDetails
    //       author={faker.name.lastName()}
    //       content={faker.random.words()}
    //     />
    //   </ApprovalCard>
    //   <ApprovalCard>
    //     <CommentDetails
    //       author={faker.name.lastName()}
    //       content={faker.random.words()}
    //     />
    //   </ApprovalCard>
    //   <ApprovalCard>
    //     <CommentDetails
    //       author={faker.name.lastName()}
    //       content={faker.random.words()}
    //     />
    //   </ApprovalCard>
    //   <ApprovalCard>
    //     <CommentDetails
    //       author={faker.name.lastName()}
    //       content={faker.random.words()}
    //     />
    //   </ApprovalCard>
    // </div>

    <Feeds>
      <div className='ui container comments'>
        <ApprovalCard>
          <CommentDetails
            author={faker.name.lastName()}
            content={faker.random.words()}
          />
        </ApprovalCard>
      </div>
    </Feeds>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
