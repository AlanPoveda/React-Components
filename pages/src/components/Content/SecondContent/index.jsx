import styled from "styled-components";
import { Code } from "@styled-icons/bootstrap/Code"
import { Users } from "@styled-icons/feather/Users"

import Image from "next/image";
import SecondImage from "../../../assets/second-image.svg";

export default function SecondContent() {
  return (
    <SecondContentInformation>
      <div>
        <h1>Light, Fast & Powerful</h1>
        <Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </Text>
        <Text>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim.
        </Text>

        <MoreInformation>
          <div>
            <CodeIcon />
            <h3>Easy to use</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.{" "}
            </p>
          </div>

          <div>
            <UsersIcon />
            <h3>To your team reuse</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>
        </MoreInformation>
      </div>
      <Image src={SecondImage} alt="Second image" width={1100} height={1100} />
    </SecondContentInformation>
  );
}

const SecondContentInformation = styled.div`
  margin: 300px 150px 200px;
  display: flex;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  max-width: 70%;
`;

const MoreInformation = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: row;

  p {
    max-width: 30%;
    font-size: 12px;
    color: #5d6970;
  }
`;

const CodeIcon = styled(Code)`
    width: 40px;
    height: 40px;
`;

const UsersIcon = styled(Users)`
    width: 40px;
    height: 40px;
`;
