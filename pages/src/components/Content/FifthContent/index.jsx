import styled from "styled-components";

export default function FifthContent() {
  return (
    <Content>
      <div>
        <h1>A Price To Suit Everyone</h1>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus{" "}
        </Text>
        <ButtomFinal>React-Widgets</ButtomFinal>
      </div>
    </Content>
  );
}

//
const Content = styled.div`
  background: #e7ecff;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin: 0% 20%;
`;

const ButtomFinal = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme })=>theme.colors.buttonColor};
  width: 200px;
  height: 36px;
  border: none;
  border-radius: 2px;
  margin-top: 40px;
  transition: 1s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`;