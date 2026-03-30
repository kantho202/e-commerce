import axios from 'axios';
import React from 'react';

const axiosSecure=axios.create({
    baseURL:"http://localhost:5000/api/v1"
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;