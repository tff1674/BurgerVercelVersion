import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchBox from './components/SearchBox'
import PopularSearch from './components/PopularSearch'
import {
    actions as searchActions,
    getInputText,
    getPopularKeywords,
    getRelatedKeywords,
} from '../../redux/modules/search'
import { actions as searchResultActions } from '../../redux/modules/searchResult'

class Search extends Component {
    render() {
        const {
            inputText,
            popularKeywords,
            relatedKeywords,
        } = this.props
        return (
            <div>
                <SearchBox
                    inputText={inputText}
                    relatedKeywords={relatedKeywords}
                    onChange={this.handleChangeInput}
                    onClear={this.handleClearInput}
                    onCancel={this.handleCancelInput}
                    onClickKeyword={this.handleClickKeyword}
                />
                <PopularSearch
                    data={popularKeywords}
                    onClickKeyword={this.handleClickKeyword}
                />
            </div>
        )
    }

    componentDidMount() {
        const { loadPopularKeywords } = this.props.searchActions
        loadPopularKeywords()
    }

    handleChangeInput = text => {
        // 1. 更新搜索框文本状态 2. 发送请求关键词
        const { setInputText, loadRelatedKeywords } = this.props.searchActions
        setInputText(text)
        loadRelatedKeywords(text)
    }

    // 清除搜索框文本信息
    handleClearInput = () => {
        const { clearInputText } = this.props.searchActions
        clearInputText()
    }

    // 取消输入
    handleCancelInput = () => {
        const { clearInputText } = this.props.searchActions
        clearInputText()
        this.props.history.goBack()
    }

    // 处理点击关键词
    handleClickKeyword = keyword => {
        const { addHistoryKeyword } = this.props.searchActions
        addHistoryKeyword(keyword)
        const { loadSearchResult } = this.props.searchResultActions
        loadSearchResult(keyword)
        this.props.history.push('/search_result')
    }

}

const mapStateToProps = state => {
    return {
        inputText: getInputText(state),
        popularKeywords: getPopularKeywords(state),
        relatedKeywords: getRelatedKeywords(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchActions: bindActionCreators(searchActions, dispatch),
        searchResultActions: bindActionCreators(searchResultActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
