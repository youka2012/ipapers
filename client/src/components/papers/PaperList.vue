<template>
    <div class="list-wrap">
        <Card class="title-card">
            <p slot="title" class="title-text">
                <span class="title-text">问卷列表</span>
            </p>
            <Timeline class="main-content">
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
        </Card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                papers: []
            }
        },
        created() {
            // this.papers = papersMock;
            this.$fetch.get('/api/papers', {}, json => {
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
        /*display: flex;
        justify-content: center;
        align-items: center;*/
        padding: 40px 40px;
        color: #000000;
        padding-bottom: 60px;
    }

    .title-text {
        font-size: 18px;
    }

    .main-content {
        text-align: left;
    }

    .title-card {
        font-size: large;
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
        margin-top: 8px;
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