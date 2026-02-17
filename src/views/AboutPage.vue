<template>
    <div class="page-surface-container">

        <h2 class="subtitle">О сайте</h2>

        <div class="important-information-container">
            <p class="paragraph">Данный проект является некоммерческим и создан исключительно в учебных и ознакомительных целях. 
                Сайт разработан как личный проект для практики веб-разработки, изучения современных технологий и демонстрации навыков.</p>
            <p class="paragraph">На сайте отсутствует реклама, платные функции и любые способы монетизации. 
                Проект не предназначен для получения прибыли и не преследует коммерческих целей. 
                Весь функционал предоставляется бесплатно для личного использования пользователями.</p>
            <p class="paragraph"><span class="b-information">Этот продукт использует API TMDB, но не одобрен и не сертифицирован TMDB. 
                Проект не связан с TMDB и не является его официальным продуктом.</span>
                Все данные, изображения, постеры и описания принадлежат их законным владельцам и предоставляются исключительно в информационных целях.</p>
            <p class="paragraph">Официальный сайт TMDB: <a class="link-tmdb" href="https://www.themoviedb.org">https://www.themoviedb.org</a></p>
        </div>

        <hr class="separator-line">

        <div class="important-information-container">
            <div class="important-information-container">
                <p class="paragraph">This project is non-commercial and created exclusively for educational and informational purposes.
                    It was developed as a personal project to practice web development, explore modern technologies, and showcase skills.</p>
                <p class="paragraph">The website does not contain advertising, paid features, or any monetization methods.
                    It is not intended to generate profit and has no commercial purpose.
                    All features are provided free of charge for personal use.</p>
                <p class="paragraph"><span class="b-information">This product uses the TMDB API but is not endorsed or certified by TMDB.  
                    This project is not affiliated with or endorsed by TMDB.</span>
                    All movie data, images, posters, and descriptions belong to their respective owners and are used for informational purposes only.
                </p>
                <p class="paragraph">Official TMDB website: <a class="link-tmdb" href="https://www.themoviedb.org">https://www.themoviedb.org</a></p>
            </div>
        </div>

        <div class="logo-tmdb-container">
            <a class="link-logo-tmdb" href="https://www.themoviedb.org"><img src="../assets/images/tmdb_logo.svg" alt="tmdb_logo" class="logo-tmdb"></a>
            <p>Официальный логотип TMDB / Official TMDB logo</p>
        </div>
        
        
    </div>
</template>

<style scoped>

    .page-surface-container{
        padding: 2rem;
    }

    .separator-line{
        border: none;
        border-top: 1px solid var(--title-color);
        width: 100%;
        margin: 1rem 0;
    }
    
    .paragraph{
        margin-bottom: 1rem;
        line-height: 1.75rem;
    }

    .b-information{
        color: var(--title-color);
        font-family: 'Montserrat-Bold';
    }

    .link-tmdb{
        color: var(--title-color);
        text-decoration: underline;
    }

    .logo-tmdb-container{
        margin: 1.5rem auto 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .link-logo-tmdb{
        width: 40%;
    }

    .logo-tmdb{
        width: 100%;
        margin-bottom: 0.5rem;
    }

</style>