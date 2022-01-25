import styled from "styled-components";
import Link from "next/link";

export default function PrimaryButton(props) {
    const linkButton = props.linkButton;

    return (
        <div>
            <Link href={linkButton}>
                <a>
                    <ButtonHeader>{props.buttonText}</ButtonHeader>
                </a>
            </Link>
        </div>
    );
}

const ButtonHeader = styled.button`
    background: ${({ theme }) => theme.colors.buttonColor};
    color: ${({ theme }) => theme.colors.primary};
    width: 160px;
    height: 30px;
    border: none;
    border-radius: 2px;
    transition: 1s;

    &:hover {
        background: ${({ theme }) => theme.colors.text};
        cursor: pointer;
    }
`;
