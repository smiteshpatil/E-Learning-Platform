/*=========picked from: https://github.com/binodswain/react-faq-component  =====================*/
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Course Content",
    rows: [
        {
            title: "Day 1: Let's get started",
            content: `<a href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem.</a>.`,
        },
        {
            title: "Day 2: Practical",
            content: `<a href="#" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem.</a>.`,
        },            
        {
            title: "Day 3: chill",
            content: 'chil'
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function Course() {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}