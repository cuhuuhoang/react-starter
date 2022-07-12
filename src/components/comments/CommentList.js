import React from "react";
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import {faker} from "@faker-js/faker";

function CommentList() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-4 card shadow-0 border" style={{backgroundColor: '#f0f2f5'}}>
          <CommentDetail
            author='sam'
            date='7PM'
            content='this is a good post!'
            avatar={faker.image.avatar()}
          />
          <CommentDetail
            author='alex'
            date='7AM'
            content='I like the content'
            avatar={faker.image.avatar()}
          />
          <CommentDetail
            author='peter'
            date='3PM'
            content='I dont like its format much'
            avatar={faker.image.avatar()}
          />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-4 card shadow-0 border" style={{backgroundColor: '#f0f2f5'}}>
          <ApprovalCard>
            <CommentDetail
              author='sam'
              date='7PM'
              content='this is a good post!'
              avatar={faker.image.avatar()}
            />
          </ApprovalCard>
          <ApprovalCard>
            ok to delete this ?
          </ApprovalCard>
        </div>
      </div>
    </div>

  );
}

export default CommentList