import React from 'react'
import './News.css'
// 
import Title from '../Title/Title'
import TheNew from '../TheNew/TheNew'

function News() {
    return (
        <section className='news'>
            <Title name='Xəbərlər'/>
            <div className="news__content">
                <TheNew />
                <TheNew />
                <TheNew />
            </div>
            
        </section>
    )
}

export default News
