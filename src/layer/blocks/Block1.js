import React from 'react'

import Article from './article/Article'
import AsideArticle from './article/AsideArticle'

// temp
import img1 from '../../images/01.jpg'
import img1webp from '../../images/01.webp'

import img2 from '../../images/02.jpg'
import img2webp from '../../images/02.webp'

import img3 from '../../images/03.jpg'
import img3webp from '../../images/03.webp'

import img4 from '../../images/04.jpg'
import img4webp from '../../images/04.webp'

import img5 from '../../images/05.jpg'
import img5webp from '../../images/05.webp'

// import img6 from '../../images/06.jpg'
// import img6webp from '../../images/06.webp'
// temp

export default function Block1() {
    return (
        <div className="blocks-1">

            <div className="insert-image">
                якась реклама
            </div>

            <Article tagName="Відео" img={img1} imgWebp={img1webp} time="10:40 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <Article tagName="Відео" img={img2} imgWebp={img2webp} time="10:35 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <Article tagName="Відео" img={img3} imgWebp={img3webp} time="10:30 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <Article tagName="Відео" img={img4} imgWebp={img4webp} time="10:25 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <Article tagName="Відео" img={img5} imgWebp={img5webp} time="10:20 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <aside>
                <h1 className="title">
                    Відео
                </h1>

                <AsideArticle img={img1} imgWebp={img1webp} time="10:20 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

                <AsideArticle img={img2} imgWebp={img2webp} time="10:20 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

                <AsideArticle img={img3} imgWebp={img3webp} time="10:20 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            </aside>
        </div>
    )
}
