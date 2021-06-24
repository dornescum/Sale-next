// import fs from 'fs';
// import path from 'path';
import dataInfo from '../../data/data.json';
import test from '../../public/data/test.json'
// import {useState} from "react";
// import {Card, CardGroup, CardImg} from "react-bootstrap";
export const getStaticProps = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const res = await fetch('data/test.json');
    const data = await res.json();
    console.log(data)
    return {
        props :{
            test: data
        }
    }
}

function BaieCard ({test}){
    return <>
        {test.map((item)=>{
            return <p key={item.id}>{item.title}</p>
        })}
    </>

}
export default BaieCard;
// const fs = require('fs/promises'); //udemy raspunsuri

// const filePath = path.join(process.cwd(), 'data', 'max-data.json')
// const jsonData = await fs.readFile(filePath);
// const data = JSON.parse(jsonData);
// // console.log(rawData)
// return { props: {
//     rooms: data
//     }};
// const res = await fetch('../../public/data/test.json');
