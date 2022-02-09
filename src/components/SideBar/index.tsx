import styled from "styled-components";

import { useState, useEffect } from "react";


interface GenreResponseProps {
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
}

type Post = {
    id: string
    title: string
}

interface SideBarProps {
    posts: Post[];
    
}

export function SideBar({ posts }: SideBarProps) {
    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    console.log(posts)

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
          {posts.map((post)=>{
              return(
                <LinkStyle key={post.id}>{post.title}</LinkStyle> 
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

const LinkStyle = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 20rem;

    padding: 0.5rem;

    font-size: 0.8rem;
    color: black;
    transition: background 200ms;

    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.secondText};
    }

    &.selected {
        background: var(--background-button2);
        color: red;
    }
`;
