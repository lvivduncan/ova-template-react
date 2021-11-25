import React from 'react'

export default function AsideArticle({ img, imgWebp, time, h1 }) {
    return (
        <article className="article">
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
