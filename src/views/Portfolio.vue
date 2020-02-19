<template>
    <div class="contents">
        <h2>Featured Works</h2>
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <div class="index_wrap">{{ indexCounter(index) }}</div>
                <div class="summary">
                    <p class="prj"><span>프로젝트 :</span> {{ item.title }}</p>
                    <p class="term"><span>기간 :</span> {{ item.term }}</p>
                    <p class="cont"><span>기여도 :</span> {{ item.contribution }}</p>
                    <p class="tools"><span>사용툴 :</span> {{ item.tools }}</p>
                    <p class="url" v-if="item.url">
                        <span>URL :</span> <a :href="item.url" target="_blank">{{ item.url }}</a>
                    </p>
                    <p class="comment"><span class="c_title">요약 :</span> <span v-html="item.summary"></span></p>
                </div>
            </li>
        </ul>
        <div class="etc">etc..</div>
    </div>
</template>

<script>
    import list from '../data/pf.json';
    export default {
        created() {},
        data() {
            return {
                list
            };
        },
        methods: {
            indexCounter(i) {
                return (i = i + 1);
            }
        }
    };
</script>

<style scoped lang="scss">
    #app .contents {
        padding-bottom: 0;
    }
    h2 {
        border-bottom: 1px solid #eee;
        margin-bottom: 4rem;
        padding-bottom: 1rem;
        font-size: 30px;
        font-weight: bold;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
            display: flex;
            .index_wrap {
                width: 10%;
                text-align: center;

                color: rgba(9, 9, 121, 1);
                font-weight: bold;
                font-size: 40px;
                vertical-align: top;
                line-height: 1;
            }
            .summary {
                width: 90%;
            }
            margin-bottom: 4rem;
            .prj {
                font-size: 22px;
            }
            p {
                font-size: 18px;
                color: #333;
            }
            span {
                display: inline-block;
                margin-right: 8px;
            }
            .c_title {
                vertical-align: top;
            }
        }
    }
    .etc {
        text-align: center;
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 5rem;
    }
</style>
