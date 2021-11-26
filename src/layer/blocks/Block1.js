import React from 'react'

import Article from './article/Article'
import AsideArticle from './article/AsideArticle'
import Images from '../../Images'

export default function Block1() {
    return (
        <div className="blocks-1">

            <div className="insert-image">
                якась реклама
            </div>

            <Article tagName="Відео" img={Images.img1} imgWebp={Images.img1webp} time="10:40 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <Article tagName="Відео" img={Images.img2} imgWebp={Images.img2webp} time="10:35 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <Article tagName="Відео" img={Images.img3} imgWebp={Images.img3webp} time="10:30 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <Article tagName="Відео" img={Images.img4} imgWebp={Images.img4webp} time="10:25 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <Article tagName="Відео" img={Images.img5} imgWebp={Images.img5webp} time="10:20 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            <aside>
                <h1 className="title">
                    Відео
                </h1>

                <AsideArticle img={Images.img1} imgWebp={Images.img1webp} time="10:20 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

                <AsideArticle img={Images.img2} imgWebp={Images.img2webp} time="10:20 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

                <AsideArticle img={Images.img3} imgWebp={Images.img3webp} time="10:20 вівторок" h1="Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi" />

            </aside>
        </div>
    )
}
