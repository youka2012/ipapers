<template>
    <div class="list-wrap">
        <Timeline>
            <TimelineItem v-for="paper in papers" :key="paper.id" color="orange">
                <p class="time">
                    <span>{{paper.title}}</span>
                    <span class="actions">
                        <Tooltip content="此项已逾期" placement="top">
                             <a v-if="paper.outdated" href="javascript:void (0);" class="alert-button action-button">
                            <Icon type="md-information-circle"/>
                        </a>
                        </Tooltip>
                        <a @click="getDetail(paper.id)" href="javascript:void (0);" class="action-button"
                           title="查看问卷详细">
                            <Icon type="ios-book"/>
                        </a>
                        <a @click="analyzeAnswers(paper.id)" href="javascript:void (0);" class="action-button"
                           title="查看答题分析">
                            <Icon type="ios-analytics"/>
                        </a>
                        <a v-if="paper.on" @click="toggleStatus(paper.id)" href="javascript:void (0);"
                           class="action-button" title="点击暂停">
                            <Icon type="ios-pause"/>
                        </a>
                        <a v-else-if="!paper.on" @click="toggleStatus(paper.id)"
                           href="javascript:void (0);" class="action-button" title="点击恢复">
                            <Icon type="ios-play"/>
                        </a>
                        <a @click="deletePaper(paper.id)" class="action-button" title="删除问卷">
                           <Icon type="ios-close-circle"/>
                        </a>
                    </span>
                </p>
                <p class="content">
                    <span>{{'创建日期：'+paper.date}}</span><span>|</span><span>{{'截至：'+paper.dateLine}}</span><span>|</span><span>已填：{{paper.counter}}</span><span>|</span><span>应填：{{paper.expect}}</span>
                </p>
            </TimelineItem>

        </Timeline>
    </div>
</template>
<script>
    var papersMock = [
        {
            id: 'ppp1111',
            code: '123456',
            title: '九月份职业月份职业月份职业月份职业月份职业月份职业月份职业月份职业月份职业月份职业月份职业培训调查',
            on: true,
            description: '九月份职业培训调查九月份职业培训调查九月份职业培训调查业培训调查业培训调查业培训调查',
            date: '2018.9.22',
            dateLine: '2018.10.8',
            outdated: false,
            expect: 66,
            counter: 30,
        },
        {
            id: '2222',
            code: '123456',
            title: '中秋节职业培训调查',
            on: false,
            description: '中秋节职业培训调查中秋节职业培训调查中秋节职业培训调查业培训调查业培训调查业培训调查',
            date: '2018.9.17',
            dateLine: '2018.10.8',
            outdated: false,
            expect: 66,
            counter: 15,
        },
        {
            id: '3333',
            code: '123456',
            title: '冬季职业培训调查',
            on: true,
            description: '冬季职业培训调查冬季职业培训调查业培训调查业培训调查业培训调查',
            date: '2018.9.14',
            dateLine: '2018.10.8',
            outdated: true,
            expect: 66,
            counter: 10,
        },
        {
            id: '4444',
            code: '123456',
            title: '春节职业培训调查',
            on: true,
            outdated: false,
            description: '春节春节春节春节春节春节业培训调查业培训调查业培训调查',
            date: '2018.9.11',
            dateLine: '2018.10.8',
            expect: 66,
            counter: 10,
        },
    ];
    export default {
        data() {
            return {
                papers: []
            }
        },
        created() {
            this.papers = papersMock;
        },
        methods: {
            getDetail(paperId) {
                console.log(paperId);
                this.$router.push({
                    name: 'detail',
                    params: {
                        paperId: paperId
                    }
                });
            },
            analyzeAnswers(paperId) {
                console.log(paperId);
                this.$router.push({
                    name: 'analysis',
                    params: {
                        paperId: paperId
                    }
                });
            },
            toggleStatus(paperId) {
                console.log(paperId);
                var index = this.papers.findIndex(function (paper) {
                    return paper.id === paperId;
                });

                index > -1 && (this.papers[index].on = !this.papers[index].on);
            },
            deletePaper(paperId) {
                this.$Modal.confirm({
                    title: '确认',
                    content: '<p>确定删除此问卷</p>',
                    onOk: () => {
                        var index = this.papers.findIndex(function (paper) {
                            return paper.id === paperId;
                        });
                        this.papers.splice([index], 1);
                        this.$Message.info('删除成功');
                    },
                    onCancel: () => {
                    }
                });
                console.log(paperId);
            }
        }
    }
</script>
<style scoped>
    a {
        color: #000000;
    }

    .ivu-timeline {
        width: 100%;
    }

    .list-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        margin: 0 auto;
        padding: 40px 40px;
        color: #000000;
    }

    .time {
        font-size: 17px;
        font-weight: bold;
        line-height: 20px;
    }

    .actions {
        font-size: 24px;
    }

    .content {
        padding-left: 5px;
        font-size: 18px;
        font-weight: bold;
        line-height: 20px;
        color: #888888;
    }

    p.content > span {
        margin-left: 16px;
    }

    .action-button {
        margin-left: 16px;
    }

    .alert-button {
        color: red;
    }
</style>