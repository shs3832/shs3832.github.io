<template>
    <div id="app">
        <div id="nav" class="navigation">
            <h1>{ Markup Dev }</h1>
            <p>Write Less Do More..</p>
            <ul>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <router-link to="/portfolio">Portfolio</router-link>
                </li>
                <li>
                    <a href="/link">link</a>
                </li>
            </ul>
        </div>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<style scoped lang="scss">
.navigation {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 320px;
    text-align: left;
    padding: 40px;
    box-sizing: border-box;
    background: rgb(2, 0, 36);
    background: linear-gradient(
        180deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 20%,
        rgba(0, 212, 255, 1) 100%
    );
    color: #fff;
    p {
        margin-bottom: 50px;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        margin-bottom: 10px;
        a {
            display: block;
            padding: 5px 2px 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            text-decoration: none;
            color: #fff;
            transition: 0.4s all;
            font-size: 18px;
            &:hover {
                color: rgba(255, 255, 255, 0.7);
                border-color: rgba(255, 255, 255, 0.7);
            }
        }
    }
    h1 {
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 15px;
    }
}
</style>

<script>
import Footer from "./views/Footer.vue";

export default {
    components: {
        Footer
    }
};
</script>
