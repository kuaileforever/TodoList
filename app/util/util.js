import React, { Component } from 'react';
import {
    PixelRatio,
    Dimensions
} from 'react-native';

module.exports = {
    pixel: 1 / PixelRatio.get(),
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    px3dp:function (ElementPx) {
        return ElementPx /3
    },

    get: function(url, successCallback, failCallback){
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((err)=>{
                failCallback(err);
            });
    },
    post: function(url, params, successCallback, failCallback){
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify(params)
             })
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch((err)=>{
                failCallback(err);
            });
    },

}