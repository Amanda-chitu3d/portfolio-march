import React from 'react'

function Reviews() {
    return (
        <section className="section">
            <div className="title-reviews">
                <h2><span>/</span>reviews</h2>
            </div>
            <div className="section-center-reviews">
                <article className="activeSlide">
                    <img src="https://picsum.photos/200/300.webp" alt="maria ferguson" className="person-img"/>
                    <h4>maria ferguson</h4>
                    <p className="title">office manager</p>
                    <p className="text">
                    Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.

                    </p>
                </article>
                <article className="nextSlide">
                <img src="https://picsum.photos/200/300.webp" alt="maria ferguson" className="person-img"/>
                    <h4>John doe</h4>
                    <p className="title">software engineer</p>
                    <p className="text">
                    Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.

                    </p>
                </article>
                <article className="nextSlide">
                <img src="https://picsum.photos/200/300.webp" alt="maria ferguson" className="person-img"/>
                    <h4>Peter </h4>
                    <p className="title">software engineer</p>
                    <p className="text">
                    Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.
                    </p>
                </article>
                <article className="lastSlide">
                <img src="https://picsum.photos/200/300.webp" alt="maria ferguson" className="person-img"/>
                    <h4>Susan Andrew</h4>
                    <p className="title">The boss</p>
                    <p className="text">
                    Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.
                    </p>
                </article>
                <button className="prev"></button>
                <button className="next"></button>
            </div>
        </section>
    )
}

export default Reviews
