import React from 'react';
import {Link} from 'react-router-dom'

const UtilNav = () => {
    return (
        <div style={{float:'right'}}>
            <Link to="/join">회원가입</Link>
            <Link to="/login">로그인</Link>
        </div>
    );
};

export default UtilNav;