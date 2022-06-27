import { request, response  } from 'express';
// const jwt = require('jsonwebtoken');

const validatorJWT = (req = request,res = response,next: () => void) =>{
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(403).json({
            msg: 'missing request token'
        });
    }

    try {
        
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({
            msg: 'error in the token'
        });      
    }

}

export = { validatorJWT }