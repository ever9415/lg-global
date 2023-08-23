<div id="header__wrap" class="c-header__wrap">
    <header id="header" class="c-header">
        <h1 class="c-header__tit"><a href="/global/our-brand/brand-expression/philosophy/index.jsp"><img src="/global/our-brand/brand-expression/img/Logo.svg" alt="LG" loading="lazy" class="c-header__tit__logo" /></a></h1>
        <nav class="c-header__gnb">
            <ul class="c-header__gnb__list">
                <li class="c-header__gnb__list__item">
                    <a href="/global/our-brand/brand-expression/philosophy/index.jsp" class="c-header__gnb__list__item__anchor <%= request.getRequestURI().contains("/elements/") ? "" : "c-header__gnb__list__item__anchor--active" %>">Philosophy</a>
                </li>
                <li class="c-header__gnb__list__item">
                    <a href="javascript:void(0)" onmouseenter="initGnbDeps2(this); return false" onclick="initGnbDeps2(this); return false" class="c-header__gnb__list__item__anchor <%= request.getRequestURI().contains("/elements/") ? "c-header__gnb__list__item__anchor--active" : "" %>">Elements</a>
                    <div class="c-header__gnb__list__item__deps2">
                        <ul class="c-header__gnb__list__item__deps2__menu">
                            <li class="c-header__gnb__list__item__deps2__menu__item"><a href="/global/our-brand/brand-expression/elements/logo/index.jsp" class="c-header__gnb__list__item__deps2__menu__item__anchor c-header__gnb__list__item__deps2__menu__item__anchor--active">Logo</a></li>
                            <!-- <li class="c-header__gnb__list__item__deps2__menu__item"><a href="/global/our-brand/brand-expression/elements/logo/index.jsp" class="c-header__gnb__list__item__deps2__menu__item__anchor">Logo</a></li> -->
                            <li class="c-header__gnb__list__item__deps2__menu__item"><a href="/global/our-brand/brand-expression/elements/color/index.jsp" class="c-header__gnb__list__item__deps2__menu__item__anchor">Color &amp; Gradients</a></li>
                            <li class="c-header__gnb__list__item__deps2__menu__item"><a href="/global/our-brand/brand-expression/elements/slogan/index.jsp" class="c-header__gnb__list__item__deps2__menu__item__anchor">Slogan</a></li>
                            <li class="c-header__gnb__list__item__deps2__menu__item"><a href="/global/our-brand/brand-expression/elements/photography/index.jsp" class="c-header__gnb__list__item__deps2__menu__item__anchor">Photography</a></li>
                            <li class="c-header__gnb__list__item__deps2__menu__item"><a href="/global/our-brand/brand-expression/elements/design-system/index.jsp" class="c-header__gnb__list__item__deps2__menu__item__anchor">Design System</a></li>
                            <li class="c-header__gnb__list__item__deps2__menu__item"><a href="/global/our-brand/brand-expression/elements/typography/index.jsp" class="c-header__gnb__list__item__deps2__menu__item__anchor">Typography</a></li>
                            <li class="c-header__gnb__list__item__deps2__menu__item"><a href="/global/our-brand/brand-expression/elements/voice/index.jsp" class="c-header__gnb__list__item__deps2__menu__item__anchor">Voice</a></li>
                        </ul>
                        <ul class="c-header__gnb__list__item__deps2__visual">
                            <li class="c-header__gnb__list__item__deps2__visual__item"><img src="/global/our-brand/brand-expression/img/visual-gnb-deps2-logo.png" alt="" class="c-header__gnb__list__item__deps2__visual__item__img" /></li>
                            <li class="c-header__gnb__list__item__deps2__visual__item"><img src="/global/our-brand/brand-expression/img/visual-gnb-deps2-gradients.png" alt="" class="c-header__gnb__list__item__deps2__visual__item__img" /></li>
                            <li class="c-header__gnb__list__item__deps2__visual__item"><img src="/global/our-brand/brand-expression/img/visual-gnb-deps2-tagline.png" alt="" class="c-header__gnb__list__item__deps2__visual__item__img" /></li>
                            <li class="c-header__gnb__list__item__deps2__visual__item"><img src="/global/our-brand/brand-expression/img/visual-gnb-deps2-photography.png" alt="" class="c-header__gnb__list__item__deps2__visual__item__img" /></li>
                            <li class="c-header__gnb__list__item__deps2__visual__item"><img src="/global/our-brand/brand-expression/img/visual-gnb-deps2-design-system.png" alt="" class="c-header__gnb__list__item__deps2__visual__item__img" /></li>
                            <li class="c-header__gnb__list__item__deps2__visual__item"><img src="/global/our-brand/brand-expression/img/visual-gnb-deps2-typography.png" alt="" class="c-header__gnb__list__item__deps2__visual__item__img" /></li>
                            <li class="c-header__gnb__list__item__deps2__visual__item"><img src="/global/our-brand/brand-expression/img/visual-gnb-deps2-voice.png" alt="" class="c-header__gnb__list__item__deps2__visual__item__img" /></li>
                        </ul>
                        <button class="c-header__gnb__list__item__deps2__btn-back">Back</button>
                    </div>
                </li>
            </ul>
        </nav>
        <% if (request.getRequestURI().contains("/elements/")) { %>
            <p class="c-header__location">
                <%= request.getRequestURI().split("/elements/")[1].split("/")[0] %>
            </p>
        <% } %>
        <!-- <p class="c-header__location">Logo</p> -->
        <button type="button" class="c-header__btn-gnb">
            <span class="c-header__btn-gnb__bar"></span>
            <span class="c-header__btn-gnb__bar"></span>
        </button>
    </header>
</div>
<div class="gnb__deps2__bg"></div>