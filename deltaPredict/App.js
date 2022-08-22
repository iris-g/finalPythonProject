import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import  {useState,useEffect}  from 'react'

function App() {
  // usestate for setting a javascript
    // object for storing and using data
    const [data, setData] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    // Using useEffect for single rendering
    useEffect(() => {

        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch("http://127.0.0.1:8080/").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setData({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>React and flask</h1>
                {/* Calling a data from setdata for showing */}
                <p>{data.name}</p>
                <p>{data.age}</p>
                <p>{data.date}</p>
                <p>{data.programming}</p>

            </header>
        </div>
    );
}

export default App;