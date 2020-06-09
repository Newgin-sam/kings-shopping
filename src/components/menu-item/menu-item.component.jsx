import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title,imageUrl,size,match,history,linkUrl}) => (
    <div  className={`menu-item ${size} `} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage : `url(${imageUrl})`}}/>
        <div className='content' >
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);
export default withRouter(MenuItem); //withRouter() gives acces to the component properites like location , match and history here history and match comes from home page component