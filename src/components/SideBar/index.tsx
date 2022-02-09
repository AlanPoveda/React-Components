import styled from "styled-components";

import { useState, useEffect } from "react";

interface GenreResponseProps {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
}

interface SideBarProps {
    id: number;
    onSelectId: (id: number) => void;
}

export function SideBar() {
    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    return (
        <SideMenu>
            <nav className="sidebar">
                <h2>Componentes</h2>

                <div>
                    {/*genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onSelectId(genre.id)}
              selected={id === genre.id}
            />
          ))*/}
                    <ButtonStyle>Link um</ButtonStyle>
                    <ButtonStyle>Link um</ButtonStyle>
                    <ButtonStyle>Link um</ButtonStyle>
                    <ButtonStyle>Link um</ButtonStyle>
                    <ButtonStyle>Link um</ButtonStyle>
                    <ButtonStyle>Link um</ButtonStyle>
                    <ButtonStyle>Link um</ButtonStyle>{" "}
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
    border-right: 1px solid ${({ theme }) => theme.colors.buttonColor};

    position: absolute;
  left: 4rem;
  width: 15rem;

    h2 {
        padding-bottom: 0.4rem;
    }
`;

const ButtonStyle = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 20rem;

    padding: 0.5rem;

    font-size: 1.125rem;
    color: black;
    transition: background 200ms;

    &:hover {
        color: green;
    }

    &.selected {
        background: var(--background-button2);
        color: var(--yellow);
    }
`;
