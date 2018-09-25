<template>
    <div class="list-wrap">
        <Timeline>
            <TimelineItem v-for="paper in papers" :key="paper._id" color="orange">
                <p class="time">
                    <span>{{paper.title}}</span>
                    <span class="actions">
                        <Tooltip content="此项已逾期" placement="top">
                             <a v-if="paper.outdated" href="javascript:void (0);" class="alert-button action-button">
                            <Icon type="md-information-circle"/>
                        </a>
                        </Tooltip>
                        <a @click="getDetail(paper._id)" href="javascript:void (0);" class="action-button"
                           title="查看问卷详细">
                            <Icon type="ios-book"/>
                        </a>
                        <a @click="analyzeAnswers(paper._id)" href="javascript:void (0);" class="action-button"
                           title="查看答题分析">
                            <Icon type="ios-analytics"/>
                        </a>
                        <a v-if="paper.status" @click="toggleStatus(paper._id,!paper.status)"
                           href="javascript:void (0);"
                           class="action-button" title="点击暂停">
                            <Icon type="ios-pause"/>
                        </a>
                        <a v-else-if="!paper.status" @click="toggleStatus(paper._id,!paper.status)"
                           href="javascript:void (0);" class="action-button" title="点击恢复">
                            <Icon type="ios-play"/>
                        </a>
                        <a @click="deletePaper(paper._id)" class="action-button" title="删除问卷">
                           <Icon type="ios-close-circle"/>
                        </a>
                    </span>
                </p>
                <p class="content">
                    <span>{{'问卷码：'+paper.code}}</span><span>{{'创建日期：'+paper.createDate}}</span><span>|</span><span>{{'截至：'+paper.dateLine}}</span><span>|</span><span>应填：{{paper.expect}}</span>
                </p>
            </TimelineItem>

        </Timeline>
    </div>
</template>
<script>
    /* eslint-disable */
    var papersMock = [
        {
            _id: 'ppp1111',
            code: '123456',
            creator: '大A',
            title: '九月份职业月份职业月份职业月份职业月份职业月份职业月份职业月份职业月份职业月份职业月份职业培训调查',
            status: true,
            description: '九月份职业培训调查九月份职业培训调查九月份职业培训调查业培训调查业培训调查业培训调查',
            createDate: '2018.9.22',
            dateLine: '2018.10.8',
            outdated: false,
            expect: 66,
            counter: 30,
        },
        {
            _id: '2222',
            code: '123456',
            creator: '大A',
            title: '中秋节职业培训调查',
            status: false,
            description: '中秋节职业培训调查中秋节职业培训调查中秋节职业培训调查业培训调查业培训调查业培训调查',
            createDate: '2018.9.17',
            dateLine: '2018.10.8',
            outdated: false,
            expect: 66,
            counter: 15,
        },
        {
            _id: '3333',
            code: '123456',
            creator: '大C',
            title: '冬季职业培训调查',
            status: true,
            description: '冬季职业培训调查冬季职业培训调查业培训调查业培训调查业培训调查',
            createDate: '2018.9.14',
            dateLine: '2018.10.8',
            outdated: true,
            expect: 66,
            counter: 10,
        },
        {
            _id: '4444',
            code: '123456',
            creator: '大D',
            title: '春节职业培训调查',
            status: true,
            outdated: false,
            description: '春节春节春节春节春节春节业培训调查业培训调查业培训调查',
            createDate: '2018.9.11',
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
            // this.papers = papersMock;
            this.$fetch.get('/api/papers', {}, json => {
                console.log('/api/papers', json)
                if (json) {
                    this.papers = json;
                }
            })
        },
        methods: {
            getDetail(paperId) {
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
            toggleStatus(paperId, status) {
                var index = this.papers.findIndex(function (paper) {
                    return paper._id === paperId;
                });
                if (index !== -1) {
                    this.$fetch.get('/api/setPaperStatus', {paperId, status}, res => {
                        if (res === 200) {
                            this.papers[index].status = !this.papers[index].status;
                        }
                    });
                }
                // (index > -1) && (this.papers[index].on = !this.papers[index].on);
            },
            deletePaper(paperId) {
                this.$Modal.confirm({
                    title: '确认',
                    content: '<p>确定删除此问卷</p>',
                    onOk: () => {
                        var index = this.papers.findIndex(function (paper) {
                            return paper._id === paperId;
                        });
                        if (index !== -1) {
                            this.$fetch.get('/api/deletePaper', {paperId}, res => {
                                if (res === 200) {
                                    this.papers.splice(index, 1);
                                }
                            });
                        }
                    },
                    onCancel: () => {
                    }
                });
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
        margin-top:8px;
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