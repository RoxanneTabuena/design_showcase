import style from './about.module.css'


export const Article =({ title, img, body, orientation }) => {
    const phone =
    <div className={style.side} >
            <img className={style.image} src={img.img} alt={img.cap}></img>
        <div className={style.article}>
            <h2  className={style.articleTitle}>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
    const desk = (
        <div>
            <div className={style.article}>
                <img className={style.image} src={img.img} alt={img.cap}></img>
                <div>
                    <h2 className={style.articleTitle}>{title}</h2>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div >
            {
                orientation === 'landscape' ? desk : phone
            }
        </div>
    )
}