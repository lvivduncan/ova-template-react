import React from 'react'

import Images from '../Images'

import Block1 from './blocks/Block1'

export default function HomeWrapper() {
    return (
        <div className="wrapper">

            <Block1 />
    
            <hr />

            <div className="blocks-2">
                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img1webp} type="image/webp" />
                            <img src={Images.img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img2webp} type="image/webp" />
                            <img src={Images.img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img3webp} type="image/webp" />
                            <img src={Images.img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img4webp} type="image/webp" />
                            <img src={Images.img4} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img5webp} type="image/webp" />
                            <img src={Images.img5} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>
            </div>

            <hr />

            <div className="blocks-3">
                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img1webp} type="image/webp" />
                            <img src={Images.img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img2webp} type="image/webp" />
                            <img src={Images.img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img3webp} type="image/webp" />
                            <img src={Images.img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>
                
                <article className="article article-bg">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img4webp} type="image/webp" />
                            <img src={Images.img4} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>
            </div>

            <hr />

            <div className="blocks-4">
                <aside>

                    {/* <h1 className="title">test</h1> */}

                    <article className="article article-table">
                        <time>10:30</time>
                        <h1><a href="#" title="">Табличне відображення артикля: час зліва, заголовок справа</a></h1>
                    </article>
        
                    <article className="article article-table article-important">
                        <time>9:45</time>
                        <h1><a href="#" title="">Важливий артикль виділяється півжирним та додатковим кольором (var(--second))</a></h1>
                    </article>
        
                    <article className="article">
                        <div className="picture">
                            <picture>
                                <source srcSet={Images.img4webp} type="image/webp" />
                                <img src={Images.img4} alt="" />
                            </picture>
                        </div>
                        <time>9:30 п'ятниця</time>
                        <h1><a href="#" title="">Якщо потрібно вставити артикль з картинкою</a></h1>
                    </article>
        
                    <article className="article article-table">
                        <time>9:20</time>
                        <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    </article>
        
                    <article className="article article-table">
                        <time>8:50</time>
                        <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    </article>

                    <article className="article article-table">
                        <time>8:30</time>
                        <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    </article>

                </aside>

                <h1 className="title title-right">
                    Заголовок по правому краю
                </h1>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img1webp} type="image/webp" />
                            <img src={Images.img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img2webp} type="image/webp" />
                            <img src={Images.img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img3webp} type="image/webp" />
                            <img src={Images.img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img4webp} type="image/webp" />
                            <img src={Images.img4} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img5webp} type="image/webp" />
                            <img src={Images.img5} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img6webp} type="image/webp" />
                            <img src={Images.img6} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

            </div>

            <hr />

            <section className="blocks-5">
                <h1 className="title">
                    Відео
                </h1>
                <h1 className="title">
                    Аудіо
                </h1>
                <h1 className="title">
                    Новини
                </h1>
                <h1 className="title">
                    Публікації
                </h1>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img1webp} type="image/webp" />
                            <img src={Images.img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">1 (Відео) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img2webp} type="image/webp" />
                            <img src={Images.img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">2 (Аудіо) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img3webp} type="image/webp" />
                            <img src={Images.img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">3 (Новини) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img4webp} type="image/webp" />
                            <img src={Images.img4} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">4 (Публікації) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img5webp} type="image/webp" />
                            <img src={Images.img5} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">5 (Відео) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img6webp} type="image/webp" />
                            <img src={Images.img6} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">6 (Аудіо) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img1webp} type="image/webp" />
                            <img src={Images.img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">7 (Новини) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img2webp} type="image/webp" />
                            <img src={Images.img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">8 (Публікації) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img5webp} type="image/webp" />
                            <img src={Images.img5} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">9 (Відео) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img6webp} type="image/webp" />
                            <img src={Images.img6} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">10 (Аудіо) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img1webp} type="image/webp" />
                            <img src={Images.img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">11 (Новини) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={Images.img2webp} type="image/webp" />
                            <img src={Images.img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">12 (Публікації) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

            </section>

            <hr />

            <ol className="pagination">
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li className="active"><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
            </ol>

        </div>
    )
}
