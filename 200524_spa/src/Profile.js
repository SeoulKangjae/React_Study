import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
  kangjae: {
    name: '최강재',
    desc: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    desc: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) return <div>존재하지 않는 사용자입니다.</div>;
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.desc}</p>
      <WithRouterSample></WithRouterSample>
    </div>
  );
};

export default Profile;
