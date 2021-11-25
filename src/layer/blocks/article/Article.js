import React from 'react'

export default function Article({ tagName, img, imgWebp, time, h1 }) {
    return (
        <article className="article">
            <div className="tags">
                <a href="#" className="tag">
                    {tagName}
                </a>
            </div>
            <div className="picture">
                <picture>
                    <source srcSet={imgWebp} type="image/webp" />
                    <img src={img} alt={h1} />
                </picture>
            </div>
            <time>{time}</time>
            <h1><a href="#" title="">{h1}</a></h1>
        </article>
    )
}