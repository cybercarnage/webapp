// require('./editor.less')

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import styler from 'react-styling'

@connect
(
	store => ({ })
)
export default class Editor extends Component
{
	render()
	{
		const markup = 
		(
			<div contentEditable="true" style={style.editor}>Editor (на хоткеях + кнопки инструментов для мобильных устройств, или что-то получше)</div>
		)

		return markup
	}
}

const style = styler
`
	editor
		padding      : 0.4em

		border-color : black
		border-style : solid
		border-size  : 1px

		outline      : none
`