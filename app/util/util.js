import React, { Component } from 'react';
import {
    PixelRatio,
    Dimensions
} from 'react-native';

module.exports = {
    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),

    /*屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    px2dp:function (ElementPx) {
        const deviceHeightDp = Dimensions.get('window').height
        const uiHeightDp = 640
        return ElementPx * deviceHeightDp/uiHeightDp
    },
    // 基于fetch的get方法
    get: function(url, successCallback, failCallback){
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                successCallback(JSON.parse(responseText));
            })
            .catch(function(err){
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
            .catch(function(err){
                failCallback(err);
            });
    },

}