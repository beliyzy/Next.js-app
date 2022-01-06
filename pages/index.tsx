import {Button, Htag, Rating, Tag} from "../components";
import React, { useState } from "react";

export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    return (
        <>
            <Htag tag="h1">{ counter }</Htag>
            <Button appearance='primary' arrow="right" onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
            <Button appearance='ghost' arrow="down">Кнопка</Button>
            <Tag size="small" color="ghost">Ghost</Tag>
            <Tag size="small" color="green">Ghost</Tag>
            <Tag size="small" color="red">Ghost</Tag>
            <Tag size="medium" color="primary" href='google.com'>Ghost</Tag>
            <Rating rating={4} />
        </>
    );
}
