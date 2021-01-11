import styled from 'styled-components';

const Avatar = styled.img`
  max-width: 130px;
  width: 100%;
`;

const AvatarWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  position: absolute;
  top: -70px;
  background-color: #576ca8;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.2);
`;

export default function AvatarIMG({ src }) {
  return (
    <AvatarWrapper>{!!src && <Avatar src={src} alt="avatar" />}</AvatarWrapper>
  );
}
