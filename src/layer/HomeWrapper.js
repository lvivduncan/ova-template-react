import React from 'react'

// temp
import img1 from '../images/01.jpg'
import img1webp from '../images/01.webp'

import img2 from '../images/02.jpg'
import img2webp from '../images/02.webp'

import img3 from '../images/03.jpg'
import img3webp from '../images/03.webp'

import img4 from '../images/04.jpg'
import img4webp from '../images/04.webp'

import img5 from '../images/05.jpg'
import img5webp from '../images/05.webp'

import img6 from '../images/06.jpg'
import img6webp from '../images/06.webp'
// temp

import Block1 from './blocks/Block1'

export default function HomeWrapper() {
    return (
        <div className="wrapper">

            <Block1 />

{/*             <div className="blocks-1">

                <div className="insert-image">
                    якась реклама
                </div>

                <article className="article">
                    <div className="tags">
                        <a href="#" className="tag">
                            Відео
                        </a>
                    </div>
                    <div className="picture">
                        <picture>
                            <source srcSet={img1webp} type="image/webp" />
                            <img src={img1} alt="" />
                        </picture>
                    </div>
                    <time>10:30 вівторок</time>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                </article>

                <article className="article">
                    <div className="tags">
                        <a href="#" className="tag">
                            Відео
                        </a>
                    </div>
                    <div className="picture">
                        <picture>
                            <source srcSet={img2} type="image/webp" />
                            <img src={img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="tags">
                        <a href="#" className="tag">
                            Відео
                        </a>
                    </div>
                    <div className="picture">
                        <picture>
                            <source srcSet={img3webp} type="image/webp" />
                            <img src={img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="tags">
                        <a href="#" className="tag">
                            Відео
                        </a>
                    </div>
                    <div className="picture">
                        <picture>
                            <source srcSet={img4webp} type="image/webp" />
                            <img src={img4} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="tags">
                        <a href="#" className="tag">
                            Відео
                        </a>
                    </div>
                    <div className="picture">
                        <picture>
                            <source srcSet={img5webp} type="image/webp" />
                            <img src={img5} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>
        
                <aside>
                    <h1 className="title">
                        Відео
                    </h1>

                    <article className="article">
                        <div className="picture">
                            <picture>
                                <source srcSet={img1webp} type="image/webp" />
                                <img src={img1} alt="" />
                            </picture>
                        </div>
                        <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    </article>
        
                    <article className="article">
                        <div className="picture">
                            <picture>
                                <source srcSet={img2webp} type="image/webp" />
                                <img src={img2} alt="" />
                            </picture>
                        </div>
                        <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing.</a></h1>
                    </article>
        
                    <article className="article">
                        <div className="picture">
                            <picture>
                                <source srcSet={img3webp} type="image/webp" />
                                <img src={img3} alt="" />
                            </picture>
                        </div>
                        <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    </article>

                </aside>
            </div> */}
    
            <hr />

            <div className="blocks-2">
                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img1webp} type="image/webp" />
                            <img src={img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img2webp} type="image/webp" />
                            <img src={img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img3webp} type="image/webp" />
                            <img src={img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img4webp} type="image/webp" />
                            <img src={img4} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h1>
                    <time>10:35 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img5webp} type="image/webp" />
                            <img src={img5} alt="" />
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
                            <source srcSet={img1webp} type="image/webp" />
                            <img src={img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>
                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img2webp} type="image/webp" />
                            <img src={img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>
                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img3webp} type="image/webp" />
                            <img src={img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>
                <article className="article article-bg">
                    <div className="picture">
                        <picture>
                            <source srcSet={img4webp} type="image/webp" />
                            <img src={img4} alt="" />
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
                                <source srcSet={img4webp} type="image/webp" />
                                <img src={img4} alt="" />
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
                            <source srcSet={img1webp} type="image/webp" />
                            <img src={img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img2webp} type="image/webp" />
                            <img src={img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img3webp} type="image/webp" />
                            <img src={img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img4webp} type="image/webp" />
                            <img src={img4} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img5webp} type="image/webp" />
                            <img src={img5} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img6webp} type="image/webp" />
                            <img src={img6} alt="" />
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
                            <source srcSet={img1webp} type="image/webp" />
                            <img src={img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">1 (Відео) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img2webp} type="image/webp" />
                            <img src={img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">2 (Аудіо) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img3webp} type="image/webp" />
                            <img src={img3} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">3 (Новини) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img4webp} type="image/webp" />
                            <img src={img4} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">4 (Публікації) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img5webp} type="image/webp" />
                            <img src={img5} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">5 (Відео) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img6webp} type="image/webp" />
                            <img src={img6} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">6 (Аудіо) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img1webp} type="image/webp" />
                            <img src={img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">7 (Новини) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img2webp} type="image/webp" />
                            <img src={img2} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">8 (Публікації) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img5webp} type="image/webp" />
                            <img src={img5} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">9 (Відео) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img6webp} type="image/webp" />
                            <img src={img6} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">10 (Аудіо) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img1webp} type="image/webp" />
                            <img src={img1} alt="" />
                        </picture>
                    </div>
                    <h1><a href="#" title="">11 (Новини) Quod asperiores sunt dolore vel optio accusantium aperiam totam quasi</a></h1>
                    <time>10:30 вівторок</time>
                </article>

                <article className="article">
                    <div className="picture">
                        <picture>
                            <source srcSet={img2webp} type="image/webp" />
                            <img src={img2} alt="" />
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
