'use client'
import { FC } from "react";

interface ownProps { params: {name:string} }

const AboutName: FC<ownProps> = ({ params }) => {
const {name} = params;
    return <div>
        <h1>Om {name}</h1>
        <p>Dette er en side med masse info om {name}</p>
    </div >;
};

export default AboutName;