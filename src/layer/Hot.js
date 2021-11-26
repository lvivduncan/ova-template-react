import React, {useState, useEffect} from 'react'

// клік на значок блискавки виводе справа від "брекінг ньюз" число +1
export default function Hot() {

    // null because not value
    const [counter, setCounter] = useState(null)

    // 0 -- set first value
    // const [counter, setCounter] = useState(0)



    /* //////////////////////////////////////////////// 
    // useEffect() -- додаткове виконання якоїсь дії //
    //////////////////////////////////////////////// */ 


// useEffect(() => {
//     const fetchApi = async () => {
//         const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos`
//         );
//         const resJson = await response.json();
//         setCity(resJson.main);
//     }

//     fetchApi();
//     }, [search]);
    
    // змінюю назву сторінки (+ додаю цифру)
    useEffect( () => {
        document.title = `${counter} - натиснули разів`
        // alert(`${counter} - натиснули разів`)
    })

    return (
        <div id="hot">
            <section className="wrapper">
                <h1>
                    <svg onClick={() => setCounter(counter + 1)} fill="currentColor" viewBox="0 0 16 16"><path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/></svg>
                    Breaking news: {counter}{/*  {json.map(item => item)} */}
                </h1>

                <article>
                    <h1>[20:45] <a href="#" title="">Quasi dolorem quis modi qui magnam eligendi in dolore minima deleniti quod quia, id sequi unde.</a></h1>
                </article>
                <article>
                    <h1>[20:30] <a href="#" title="">Netcix cuts out the chill with an integrated personal trainer on running.</a></h1>
                </article>
                <article>
                    <h1>[20:15] <a href="#" title="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur quia sed.</a></h1>
                </article>

            </section>
        </div>
    )
}
