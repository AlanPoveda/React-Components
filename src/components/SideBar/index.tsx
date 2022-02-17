import styled from "styled-components";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

interface SideBarProps {
    uid: string;
    onSelectUID: (uid: string) => void;
}

export function SideBar({ uid, onSelectUID }: SideBarProps) {
    const [title, setTitle] = useState([]);

    useEffect(() => {
        api.get("/api/titles").then((response) => {
            setTitle(response.data);
        });
    }, []);

    console.log(uid);

    return (
        <SideMenu>
            <nav className="sidebar">
                <h2>Componentes</h2>

                <div>
                    {title.map((post) => {
                        return (
                            <LinkStyle
                                key={post.id}
                                onClick={() => onSelectUID(post.slug)}
                            >
                                {post.title}
                            </LinkStyle>
                        );
                    })}
                </div>
            </nav>
        </SideMenu>
    );
}

const SideMenu = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    max-width: 24rem;

    padding: 2rem;
    border-right: 1px solid ${({ theme }) => theme.colors.secondary};

    position: absolute;
    left: 4rem;
    width: 15rem;
    height: 100%;

    h2 {
        padding-bottom: 0.4rem;
    }
`;

const LinkStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 20rem;

    padding: 0.5rem;

    font-size: 0.8rem;
    color: black;
    transition: background 200ms;
    border: none;
    background: transparent;

    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.secondText};
    }

    &.selected {
        background: var(--background-button2);
        color: red;
    }
`;
